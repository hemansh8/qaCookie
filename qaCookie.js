(function () {
  function init() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("qaCookie")) {
      var cookieName = params.get("qaCookie");
      document.cookie = cookieName + "=true; path=/";
    }
  }
  init();
})();
