    var dadosClimaREST = angular.module('dadosClimaREST', ["ionic"]);

    dadosClimaREST.controller('dadosClimaRESTCtrl', function($scope, $http){

        $scope.url = "http://api.openweathermap.org/data/2.5/weather?q=";
		$scope.temperatura = "";
		$scope.humidade = "";
		$scope.velVento = "";
		$scope.nomeCidade = "";
		$scope.pressao = "";
		$scope.lat = "";
		$scope.lon = "";
        $scope.cidade = "Lins";
        $scope.icone = "";
        $scope.descricaoTempo = "";
        $scope.mostrarDados = false;    

        $scope.loadDados = function(){
            $http
                .get($scope.url+$scope.cidade+"&units=metric&lang=pt")
                .success(function(resultado){
                    console.log(resultado);
                    $scope.temperatura = resultado.main.temp;
                    $scope.humidade = resultado.main.humidity;            
                    $scope.velVento = resultado.wind.speed;
                    $scope.nomeCidade = resultado.name;
                    $scope.pressao = resultado.main.pressure;
                    $scope.lat = resultado.coord.lat;
                    $scope.lon = resultado.coord.lon;
                    $scope.icone = resultado.weather[0].icon;
                    $scope.descricaoTempo = resultado.weather[0].description;

                    $scope.mostrarDados = true; 

                })
                .error(function(){
                    alert("Não foi possível carregar os dados");
                });
        }

    });