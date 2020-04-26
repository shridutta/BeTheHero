
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
  //   const { name, email, whatsapp, city, uf } = request.body;

      const id = generateUniqueId();

  //   await connection('ongs').insert({
  //     id,
  //     name,
  //     email,
  //     whatsapp,
  //     city,
  //     uf
  //   })

     return response.json({ id });    
   }

}