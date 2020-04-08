if ('geolocation' in navigator) {
   console.log('geolocation available');
   /* geolocation is available */

   navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      const butt = document.getElementById('butt');
      butt.addEventListener('click', () => {
         document.getElementById('latitude').textContent = lat;
         document.getElementById('longitude').textContent = long;
      });
   });
} else {
   /* geolocation IS NOT available */
   console.log('geolocation available');
}
