if ('geolocation' in navigator) {
   console.log('geolocation available');
   /* geolocation is available */

   navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

     

      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = long;
      const data = {
         lat,
         long,
      };
      const options = {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      };
      const res = await fetch('/api', options);
      const json = await res.json();
      console.log(json);
   });
} else {
   /* geolocation IS NOT available */
   console.log('geolocation available');
}
