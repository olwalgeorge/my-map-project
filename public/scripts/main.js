document.addEventListener('DOMContentLoaded', () => {
    // Fetch the API key from a meta tag added during build process
    const apiKey = document.querySelector('meta[name="google-maps-api-key"]').getAttribute('content');
  
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      const mapOptions = {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
      };
  
      new google.maps.Map(document.getElementById('map'), mapOptions);
    };
  });
  