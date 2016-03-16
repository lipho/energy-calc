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
            $scope.hal_wattage = ($scope.current_lum * $scope.calc.hal).toFixed(1);
            $scope.cfl_wattage = ($scope.current_lum * $scope.calc.cfl).toFixed(1);
            $scope.led_wattage = ($scope.current_lum * $scope.calc.led).toFixed(1);

            if ($scope.current_hrs > 24) {$scope.current_hrs = 24;}
            else if ($scope.current_hrs < 0) {$scope.current_hrs  = 0;}
            var cost = $scope.current_cost / 100;
            var total_hrs = $scope.total_days * $scope.current_hrs;

            $scope.inc_cost = ((($scope.inc_wattage * total_hrs) / 1000) * cost).toFixed(2);
            $scope.hal_cost = ((($scope.hal_wattage * total_hrs) / 1000) * cost).toFixed(2);
            $scope.cfl_cost = ((($scope.cfl_wattage * total_hrs) / 1000) * cost).toFixed(2);
            $scope.led_cost = ((($scope.led_wattage * total_hrs) / 1000) * cost).toFixed(2);

        };

        $scope.calculate();

    }]);

})();