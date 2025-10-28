mapboxgl.accessToken = 'pk.eyJ1IjoiZGF5dXJrZXZpY2giLCJhIjoiY21oOXJpMjJsMGU3cTJqcHh1bXg5eWl3ZSJ9.KFBEm_WmwL7wL0xPKRILLg';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/dayurkevich/cmh9rr4ks00qj01r50g71gn5a', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 11 // starting zoom, again you can choose the level you'd like.
    });