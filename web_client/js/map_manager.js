// web_client/js/map_manager.js

// 1. Dán Token Mapbox của bạn vào đây (Nhớ dán nhé!)
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhdGJvdGdpcyIsImEiOiJjbWk1djhzZTIwM3Q2Mm9xM2QxcWxjeDd2In0.wRdach6QYXQtAhqZgt7pRg'; 

let map; 

// 2. Hàm khởi tạo bản đồ (Có chữ export)
export function initMap() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [105.85, 21.02], // Hà Nội
        zoom: 13
    });

    map.addControl(new mapboxgl.NavigationControl());
    return map;
}

// 3. Hàm vẽ điểm lên bản đồ (QUAN TRỌNG: Phải có chữ export ở đầu)
export function addMarkersToMap(locations) {
    if (!map) return; // Nếu bản đồ chưa tải xong thì dừng

    locations.forEach(place => {
        if (!place.location) return;

        // Tạo nội dung Popup
        const popupContent = `
            <div style="text-align:center">
                <h3 style="margin:0; color:#0078ff">${place.name}</h3>
                <p style="margin:5px 0">${place.description}</p>
                <small>Loại: <b>${place.category}</b></small>
            </div>
        `;

        const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(popupContent);

        // Tạo Marker
        new mapboxgl.Marker({ color: 'red' })
            .setLngLat(place.location.coordinates)
            .setPopup(popup)
            .addTo(map);
    });
}