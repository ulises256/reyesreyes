app.controller('mainCtrl', function ($scope, $state, $rootScope, $http, alertas, mdDialog, AuthService, $localStorage, Prospecto) {

    $scope.map = {
        center: {
            latitude: 19.393664,
            longitude: -99.1745978
        },
        zoom: 13
    };

    $scope.markeroptions = {
        icon: 'img/ic_location_on_black_24px.svg'
    }

    $scope.markers = [
        {
            coordenadas: {
                latitude: 19.393664,
                longitude: -99.1745978,
            }
        }
    ];

    $scope.redireccionar = (valor) => {
        console.log(valor)

        switch(valor) {
            case 1:
                $state.go('home.consulta')
                break;
            case 2:
                $state.go('home.valores')
                break;
            case 3:
                $state.go('home.nosotros')
                break;
            case 4:
                $state.go('home.servicios')
                break;
            default:
                $state.go('home.testimonios')
        }

    }

    $scope.listo = false;

    $scope.nuevoContacto = function(contacto){

        console.log(contacto)

        Prospecto.crearProspecto(contacto).then(res => {
            $analytics.eventTrack('prospecto', {  category: 'prospecto', label: 'footer' });
            $scope.listo = true;
        })

    }



});
