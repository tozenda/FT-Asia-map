var mymap = L.map('map', { zoomControl: false }).setView([6.92, 115.06], 3);

const addContactToMap = (contacts) => {
    contacts.forEach((ft) => {
        if (ft) {
            console.log("Adding ", ft.name, ft.lat, ft.lon);
            L.marker([ft.lat, ft.lon]).addTo(mymap).bindPopup(ft.name);
        }
    });
};

Papa.parse('./data/ft-contact.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
        addContactToMap(results.data);
    }
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/512/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'tozenda/ckrbtkc7m0vgm17pnvn7nwlyf',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidG96ZW5kYSIsImEiOiJja3JhZXE4bmI0ZjJ1Mm5xaG42ZHJzMHlyIn0.08JChHjF6oRgd7PhkbiWwQ'
}).addTo(mymap);
