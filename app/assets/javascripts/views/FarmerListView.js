var FarmerListView = function FarmerListView(options) {
  options = options || {};
  this.$el = options.$el;
  this.collection = options.collection;
  this.modelView = options.modelView;

  $(this.collection).on('change', $.proxy(this.render, this));

  // var previouslySavedContext = this;
  // $(this.collection).on('change', function(){
  //   previouslySavedContext.render();
  // });

};


FarmerListView.prototype.render = function render() {
  this.$el.empty();
  var farmers = this.collection.models;
  for (var i = 0; i < farmers.length; i++) {
    var farmer = farmers[i];
    var view = new this.modelView({model: farmer});
    this.$el.append(view.render().$el);
  }
  return this;
};



// Example of building a Farmer List View:
//  list = new FarmerList({modelConstructor: Farmer});
//  listView = new FarmerListView({collection: list});






//
