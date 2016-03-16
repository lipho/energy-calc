(function(){
    var app = angular.module('energyCalculator', []);

    app.controller('CalcCtrl', ['$scope', function($scope){

        $scope.lumens = [375, 600, 900, 1125, 1600];
        $scope.current_lum = 600;
        $scope.current_cost = 12;
        $scope.current_hrs = 3;
        $scope.total_days = 365;

        $scope.calc = {
            inc: .0625,
            hal: .0450,
            cfl: .0146,
            led: .0125
        };

        $scope.calculate = function() {

            $scope.inc_wattage = ($scope.current_lum * $scope.calc.inc).toFixed(1);

        }

        $scope.calculate();

    }]);

})();