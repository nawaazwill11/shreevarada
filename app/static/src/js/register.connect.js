import composer from './composer.connect';

document.addEventListener('DOMContentLoaded', function () {
    composer.initialization();

    const fab = document.querySelector('.fixed-action-btn');

    fab.addEventListener('click', function (e) {
        composer.fabClose();
    })

});

let map;
function initMap() {
    const main_office = {lat: 20.418772, lng: 72.840398};
    const retail_office = {lat: 20.418914, lng: 72.840538};

    map = new google.maps.Map(document.getElementById('map'), {
        center: retail_office,
        zoom: 19
    });
   
    const main_marker = new google.maps.Marker({position: {lat: 20.418772, lng: 72.840398}, map: map, label: 'A'});
    const retail_marker = new google.maps.Marker({position: retail_office, map: map, label: 'B'});

   const markers = [ main_marker, retail_marker]
    
    markers.forEach(marker => {
        marker.addListener('click', function () {
            window.open(marker.map.mapUrl, '_blank');
        });
    })

    // const locations = [
    //     main_office,
    //     retail_office
    // ];

    // const labels = 'AB';
    
    // const markers = locations.map(function (location, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: labels[i % labels.length]
    //     });
    // });

    // const markerCluster = new MarkerClusterer(map, markers, 
    //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
    
}
window.initMap = initMap;