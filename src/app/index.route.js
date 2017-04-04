export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).
    state('get_current_temp', {
      'url': '/get_current_temp',
      'templateUrl': 'app/components/openWeatherMap/viewTemperature.html',
      'controller': 'WeatherController',
      'controllerAs': 'weather'
    });

  $urlRouterProvider.otherwise('/');
}
