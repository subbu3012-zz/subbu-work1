const mongoose = require('mongoose');

  var OutletCategorySchema = mongoose.Schema({
    categoryID: {type: String, unique: true},
    categoryName: String,
    categoryDesc: String,
    isSelected: Boolean,
  });

  var OutletDetailsSchema = mongoose.Schema({
    outletID: String,
    outletName: String,
    outletDesc: String,
    OutletCategory: [{type: String, ref: 'OutletCategory'}],
  });

  var OutletCategory  = mongoose.model('OutletCategory', OutletCategorySchema);
  var OutletDetails = mongoose.model('OutletDetails', OutletDetailsSchema);

  exports.OutletCategory = OutletCategory;
  exports.OutletDetails = OutletDetails;
