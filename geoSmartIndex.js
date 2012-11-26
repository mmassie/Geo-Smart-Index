navigator.geolocation.getCurrentPosition(showPosition);

  function showPosition(position) {
  if (position.coords.latitude === 43.0402778 && position.coords.longitude === -87.8972222) { //GPS = Milwauke Art Museum
  window.open("local.html","_self"); //Redirect to a welcome page for onsite visitors
  } else {
  window.open("yay.html","_self"); //Stays on normal homepage - Making page not-'index.html' just for testing
  }
}
  function errorCallback(error) {
    switch(error.code) {
      case error.TIMEOUT:
        // Quick fallback when no cached position exists at all.
        doFallback();
        // Acquire a new position object.
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        break;};
  }