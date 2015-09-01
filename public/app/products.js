app.controller('ProductsCtrl', function($scope, Product, ngProgress, toaster) {

$scope.product = new Product();

var refresh = function() {
  $scope.products = Product.query(); 
  $scope.product ="";
}
refresh();

$scope.add = function(product) {
  Product.save(product,function(product){
    refresh();
  });
};

$scope.update = function(product) {
  product.$update(function(){
    refresh();
  });
};

$scope.remove = function(product) {
  product.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.product = Product.get({ id: id });
};  

$scope.deselect = function() {
  $scope.product = "";
}

})