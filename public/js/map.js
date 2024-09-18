// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

  mapboxgl.accessToken = maptoken;
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: "mapbox://styles/mapbox/streets-v12",
      center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 9 // starting zoom
  });

   
  const marker = new mapboxgl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates
  .setPopup( new mapboxgl.Popup({offset: 25}).setHTML(`<h1>${listing.location}</h1><p>Exact location will be provided after booking!<p>`))
  .addTo(map);
 