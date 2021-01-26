function updateMap() {
    fetch("data.json")
        .then(response => response.json())
        .then(Mydata => {
            console.log(Mydata.data);
            Mydata.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases= element.infected;
                if(cases==255){
                    color= "rgb(255,0,0)"
                    
                }
                else{
                    color= `rgb(${cases},0,0)`
                }

                //mark on the map
                var marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude]) //longitude , latitude should be written in this order
                    .addTo(map);

            });

        })
}

updateMap();