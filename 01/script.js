angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: 'David Robinson',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      planet: 'pluto'
    }
  }
});

angular.module('app').directive('userInfoCard', function() {
  return {
    template: 'Name: {{ user.name }}<br>Address: {{ user.address.street }}<br> {{ user.address.city }}<br> {{ user.address.planet }}',
    restrict: 'E'
  }
})
