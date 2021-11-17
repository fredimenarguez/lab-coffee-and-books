function initMap() {

    const map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 14,
            center: directions.place1.coords,
            styles: mapStyles.electric
        }

    )
    }

    function getPlaces(map) {
        return axios.get("/api/places")
          .then(response => printPlaces (response.data, map))
      }

      function printPlaces(places, map) {
        const markers = []
      
        places.forEach((place) => {
          const center = {
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
          };
          const newMarker = new google.maps.Marker({
            position: center,
            map: map,
            title: place.name
          });
          markers.push(newMarker);
        })

    }