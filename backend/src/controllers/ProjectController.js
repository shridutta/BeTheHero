
const connection = require('../database/connection');

module.exports = {
 
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const projects = await connection('project')
      //.where('prj_id', prj_id)
      .select('*');

    return response.json(projects);
  },
  
   async create(request, response) {
     debugger;
     console.log(request);
     const { name, description, address, owner_name, email, value } = request.body;

     await connection('project').insert({
      name,
      description,
      address,
      owner_name,
      email,
      value
     })

     return response.json({ name });    
   }

}