chrome.webRequest.onBeforeRequest.addListener(
  function(info) {    
    if (info.url.indexOf("https://fonts.googleapis.com/") !== -1){
      return {redirectUrl: info.url.replace("fonts.googleapis.com", "d2tsbgstdoao7s.cloudfront.net")};
    }
    if (info.url.indexOf("https://ajax.googleapis.com/") !== -1){
      return {redirectUrl: info.url.replace("ajax.googleapis.com", "dfk9v0sw9lp6g.cloudfront.net")};
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