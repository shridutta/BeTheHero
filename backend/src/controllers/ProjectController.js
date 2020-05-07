
const connection = require('../database/connection');

module.exports = {
 
  async Read(request, response) {
    const ong_id = request.headers.authorization;

    const projects = await connection('Project')
      //.where('prj_id', prj_id)
      .select('*');
    return response.json(projects);
  },


  
   async create(request, response) {
     debugger;
     console.log(request);
     const { Name, Description, Address, Owner, Email, Budget, Comment } = request.body;

     await connection('Project').insert({
      Name,
      Description,
      Address,
      Owner,
      Email,
      Budget,
      Comment
     })

     return response.json({ name });    
   },
   

   async getTasksByPrjId(request, response) {
    const { id } = request.params;
    const { page = 1 } = request.query;
    const [count] = await connection('Task').count();

    const task = await connection('Task')
      //.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(40)
      //.offset((page - 1) * 5)
      .select([
          'Task.*',
          // 'ongs.name',
          // 'ongs.email',
          // 'ongs.whatsapp',
          // 'ongs.city',
          // 'ongs.pin'
      ]).where('ProjectId', id);
       console.log(task);
   
    response.header('X-Total-Count', count['count(*)']);

    return response.json(task);
  },

}