(function() {
  var metas = document.getElementsByTagName('meta');
  if (navigator.userAgent.match(/iPhone/i)) {
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, initial-scale=1, minimum-scale=1";
      }
    }
  }
})();
