var FarmerList = function FarmerList(options) {
  options = options || {};
  this.modelConstructor = options.modelConstructor;
  this.models = [];
};

FarmerList.prototype.add = function add(model) {
  this.models.push(model);
  $(this).trigger('change');
  return this;
};

FarmerList.prototype.fetch = function fetch() {
  var that = this;
  $.ajax({
    url: '/farmers',
    dataType: 'JSON',
    success: function(data) {
      var farmers = data.farmers;
      for (var i = 0; i < farmers.length; i++) {
        var farmer = new that.modelConstructor(farmers[i]);
        that.add(farmer);
      }
    }
  });
};

//  Example building of a farmer list
// list = new FarmerList({modelConstructor: Farmer});























  //
