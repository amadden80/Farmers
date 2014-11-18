var FarmerView = function FarmerView(options){
  options = options || {};
  this.model = options.model;
};

FarmerView.prototype.render = function render() {
  this.$el = $("<h3>" + this.model.name + "</h3>");
  return this;
};
