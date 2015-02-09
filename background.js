chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    var cancel = {cancel: true};
    
    if (info.url.indexOf("https://fonts.googleapis.com/") !== -1){
      return cancel;
    }

    var prefix = "https://ajax.googleapis.com/ajax/libs/jquery/";
    if (info.url.indexOf(prefix) !== -1){
      var seg = info.url.replace(prefix, "").split("/");
      if (seg.length != 2) return cancel;
      var dots = seg[1].split('.');
      dots[0] += "-" + seg[0];

      return {redirectUrl: "https://upcdn.b0.upaiyun.com/libs/jquery/"+dots.join('.')}; 
    }

    return {redirectUrl: info.url.replace("googleapis", "useso")};
  },
  // filters
  {
    urls: [
       "*://fonts.googleapis.com/*", "*://ajax.googleapis.com/*"
    ],
    types: ["stylesheet", "script"]
  },
  // extraInfoSpec
  ["blocking"]);