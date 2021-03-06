﻿angular.module("RustCalc").controller("CookingCalcCtrl", ["$scope", "$rootScope", "$rustData", CookingCalcCtrl]);

function CookingCalcCtrl ($scope, $rootScope, $rustData)
{
    $rootScope.page.titlePrefix = "Cooking & Smelting";

    $scope.itemActive = item =>
    {
    	return $scope.stateParams.id == item.id;
    };

    // Only show ovens that can cook items (lanterns etc are considered ovens since they use fuel).
    $scope.items = Object.values($rustData.items).filter(item => item.meta.oven != null && item.meta.oven.cookables.length);
}