mapboxgl.accessToken = 'pk.eyJ1IjoiM2Vjb2xvZ2lhcyIsImEiOiJjajBpajduNjcwMGc4MndwcW9pY2ljYmt4In0.Hqi-m8UXDmVl7Otod2o_HA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/3ecologias/cj9q4e3b55wzt2rt6cmiwi3wk',
      zoom: 5,
      center: [-62.401866, -3.912172]
    });
    map.addControl(new mapboxgl.NavigationControl());