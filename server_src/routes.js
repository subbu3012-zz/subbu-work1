var OutletController = require('./OutletController');


module.exports = function(app){

    // app.get('/', function(req, res) {
    //   SampleController.saveData(req, res);
    // });

    // app.get('/find/:value', function(req, res) {
    //   SampleController.findData(req, res);
    // });

    app.post('/outlet/category/createOutletCategory', function(req, res) {
      OutletController.createOutletCategory(req, res);
    });

    app.get('/outlet/category', function(req, res) {
      OutletController.displayOutletCategories(req, res);
    });

    app.delete('/outlet/category/deleteOutletCategory/:outletCategoryId', function(req, res) {
      OutletController.deleteOutletCategoryByCategoryId(req, res);
    });

    app.post('/outlet/create', function(req, res) {
      OutletController.createOutlet(req, res);
    });

}
