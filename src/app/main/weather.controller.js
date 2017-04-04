export class WeatherController {
  constructor($scope, $http, $log ,weatherLocation) {
    'ngInject';
    this.$scope = $scope;
    this.$log = $log;
    this.$scope.locations = null;
    this.$scope.resumeTable = false;
    this.$scope.selectedLocation = null;
    this.WeatherLocation = weatherLocation;
    this.$scope.weatherData = null;
    this.$scope.locations = this.WeatherLocation
    .getAllLocations()
    .then(response => this.$scope.locations = response.data, err => { return err} );

    this.$scope.$watch('selectedLocation', () => {      
      this.getWeather();
      this.$log.log(this.$scope.weatherData);
      
    });
  }

   getWeather() {  
    
    // WeatherController.$log.log(WeatherController.$scope.selectedLocation)
    let req = {
      url: `http://localhost:3000/locations/get_current_temp/${this.$scope.selectedLocation}`,
      method: 'GET',
      data: {},
      headers: {
       'Content-Type': 'json'
      }    
    }

    this.WeatherLocation.getLocationWeather(req).then(weatherData => {
      this.$scope.weatherData = weatherData.data; 
      if (weatherData.data.code === "200")
        { 
          this.$scope.resumeTable = true;
        } else {
          this.$scope.resumeTable = false;
        }
    }, (err) => {
      this.$log.log(err);
      this.$scope.resumeTable = false;
    } );
  }
}