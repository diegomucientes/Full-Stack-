const PersonController = require('../controllers/person.controler');
module.exports=function(app){
    app.get('/api',PersonController.index);
}
