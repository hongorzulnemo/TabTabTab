let HOME_MAP = setup('home-map', [46.07549325272845, 18.227691650390625], 14);



ALL_POINTS.forEach(point => {
    const marker = L.marker(point.coords);
    marker.addTo(HOME_MAP);
})
