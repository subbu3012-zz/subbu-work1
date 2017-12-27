const Outlet = require('./Outlet');
const mongoose = require('mongoose');

module.exports = {

  createOutletCategory: function(req, res) {
    var categoryDetails = {
      categoryID: req.param('categoryID'),
      categoryName: req.param('categoryName'),
      categoryDesc: req.param('categoryDesc'),
      isSelected: req.param('isSelected')
    }
    console.log(categoryDetails);
    Outlet.OutletCategory.create(categoryDetails, function(err, response) {
      if(err) return console.log(err);

      if(response) {
        return res.json(response);
      }
    });
  },

  displayOutletCategories: function(req, res) {
    Outlet.OutletCategory.find().exec(function(err, response) {
      if(err) return console.log(err);

      if(response.length) {
        return res.json(response);
      }
      else {
        return res.status(404).response({error: "No Outlet Categories Found"});
      }
    });
  },

  deleteOutletCategoryByCategoryId: function(req, res) {
    Outlet.OutletCategory.findOneAndRemove({categoryID: req.param('outletCategoryId')}).exec(function(err, response) {
      if(err) return console.log(err);

      if(response) {
        return res.json(response);
      }
      else {
        return res.status(404).json({error: "No matching Category found"});
      }
    });
  },

}
