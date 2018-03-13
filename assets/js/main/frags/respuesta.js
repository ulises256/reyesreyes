var app = angular.module('myapp');

app.controller('respuestaCtrl', function($scope, $rootScope, $mdDialog, mdDialog, $state, $stateParams, Topicos) {

    var id = $rootScope.topico.id;

    $rootScope.seccion = 'Respuesta'

    if(id === null){

        $state.go('home.topico')

    }else{

        Topicos.obtenerConRespuesta(id).then(res => {

            $scope.respuesta = res.data.respuesta;
            $scope.$digest()

        })

    }



});
