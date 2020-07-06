const sequelize= require('./db');
const Poblacion= require('./poblaciones.js');

//Comentario porque si
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({alter:true});
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports ={
      sequelize,
      Poblacion
  }