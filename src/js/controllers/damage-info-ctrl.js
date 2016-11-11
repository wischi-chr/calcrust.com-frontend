﻿angular.module("RustCalc").controller("DamageInfoCtrl", ["$scope", "$rootScope", "$rustData", DamageInfoCtrl]);

function DamageInfoCtrl ($scope, $rootScope, $rustData)
{
    $rootScope.page.titlePrefix = "Damage Info";
    $scope.loading = true;

    $rustData.requestDestructibles(function(destructibles, error)
    {
        $scope.loading = false;

        if (error)
        {
            console.log(error);
            return;
        }

        for (let i = 0; i < destructibles.length; ++i)
        {
            var destructible = destructibles[i];

            if (destructible.type != "buildingBlock")
            {
                destructible.item = $rustData.items[destructible.id];

                if (destructible.item == null)
                {
                    console.error("Unknown non building block item: " + destructible.id);
                }

                destructible.imageSrc = "/img/icons/" + destructible.id + "_small.png";
            }
            else
            {
                destructible.imageSrc = "/img/planner_" + destructible.id + ".png";
            }
        }

        $scope.damageInfos = destructibles;
    });
}