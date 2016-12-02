// define o módulo
var phonecatApp = angular.module('phonecatApp', []);

// define o controler para o modulo do app
phonecatApp.controller('PhoneListController', function PhoneListController($scope){
  $scope.phones = [
    {
      name: 'Nexus S.',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  $scope.name= 'kkk';
});
