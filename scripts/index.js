var mymap = L.map('map', { zoomControl: false }).setView([6.92, 115.06], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/512/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'tozenda/ckrbtkc7m0vgm17pnvn7nwlyf',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidG96ZW5kYSIsImEiOiJja3JhZXE4bmI0ZjJ1Mm5xaG42ZHJzMHlyIn0.08JChHjF6oRgd7PhkbiWwQ'
}).addTo(mymap);

var marker = L.marker([1.352083, 103.819836]).addTo(mymap);
