(function(){
  'use strict';
  angular
      .module('viajaNetApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('searchCtrl', searchCtrl);
      searchCtrl.$inject = ['$timeout', '$q', '$http']
      function searchCtrl($timeout, $q, $http){
        var self = this;
        
        function getLocationList(){
            return $http.get("http://localhost:3000/api/locations")
        }

        getLocationList()
        .then(function(response){
          self.locations = response.data.locations;
        });


      }
})();
