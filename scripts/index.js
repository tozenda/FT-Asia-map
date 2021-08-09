var mymap = L.map('map', {zoomControl: false}).setView([6.92, 115.06], 3);


const addContactToMap = (contacts) => {
    contacts.forEach((ft) => {
        if (ft) {
            const socials = [];
            for (let i = 1; i < 6; i++) {
                socials.push({
                    type: ft[`social_media_${i}_type`],
                    url: ft[`social_media_${i}_link`],
                })
            }
            const emails = [];
            for (let i = 1; i < 6; i++) {
                emails.push({
                    name: ft[`contact_${i}_name`],
                    mail: ft[`contact_${i}_email`],
                })
            }
            L.marker([ft.lat, ft.lon]).addTo(mymap).bindPopup(`
                <div class="pop-in">
                    <div class="ft-name">
                        ${ft.website ? `
                            <span>
                                <a target="_blank" href=${ft.website}>${ft.name}</a>
                                <img src="assets/imgs/link.svg"/>
                            </span>
                        ` : ft.name}
                    </div>
                    <div className="ft-socials">
                        ${socials
                            .filter((_) => _.type !== null)
                            .map((_) => `
                                <a target="_blank" href=${_.url} class="commu-popup-social-link">
                                    <img src="assets/imgs/${_.type}.svg"/>
                                </a>`
                            )
                            .join("")
                        }
                    </div>
                    <div class="ft-emails">
                        ${emails
                            .filter((_) => _.name !== null)
                            .map((_) => `
                                <div class="commu-popup-mail-contact">
                                    <img src="assets/imgs/mail.svg"/>
                                    <a href=mailto:${_.mail}>
                                        ${_.name}
                                    </a>
                                </div>
                                `
                            )
                            .join("")
            }
                    </div>
                </div>
            `, {
                "className": "commu-popup",
                "closeButton": false,
                "minWidth" : 170,
                "maxWidth": 170
            });
        }
    });
};

Papa.parse('./data/ft-contact.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
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
