(function () {
  function init() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("qaCookie")) {
      var cookieName = params.get("qaCookie");
      // cookie value is either true or the value of the qaValue parameter if it exists
      var cookieValue = "true";
      if (params.has("qaValue")) {
        cookieValue = params.get("qaValue");
      }
      document.cookie = cookieName + "=" + cookieValue + "; path=/";
    }
  }
  init();
})();
