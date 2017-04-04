export class weatherLocation {
  constructor($log, $http, $resource) {
    'ngInject';
      this.$http = $http;      
      this.$resource = $resource;
      this.locations = new Set();
  }
  getAllLocations() {
    return this.$http.get('http://localhost:3000/locations/get_all_locations/');
  }

  getLocationWeather(req) {
    // return this.$http.get('http://localhost:3000/locations/get_current_temp/:location_id');
    return this.$http(req);
  }
}

