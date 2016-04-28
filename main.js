'use strict';

angular.module('pokeApp', [])
.controller('mainCtrl', function($scope, $http) {


    $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokedex/1/'
    })
    .then(function(response){
        console.log('pokeList: ', response);
        $scope.pokeList = response.data.pokemon_entries;
    }), function(err) {
        console.error('err: ', err);
    }



})
