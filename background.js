chrome.webRequest.onBeforeRequest.addListener(
  function(info) {    
    if (info.url.indexOf("https://fonts.googleapis.com/") !== -1){
      return {redirectUrl: info.url.replace("fonts.googleapis.com", "fonts.lug.ustc.edu.cn")};
    }
    if (info.url.indexOf("https://ajax.googleapis.com/") !== -1){
      return {redirectUrl: info.url.replace("ajax.googleapis.com", "ajax.lug.ustc.edu.cn")};
    }
    if (info.url.indexOf("https://dot29u55fapha.cloudfront.net") !== -1){
      return {redirectUrl: info.url.replace("dot29u55fapha.cloudfront.net", "dn-idonethismirror.qbox.me")};
    }
    return {redirectUrl: info.url.replace("googleapis", "useso")};
  },
  // filters
  {
    urls: [
       "*://fonts.googleapis.com/*", "*://ajax.googleapis.com/*" , "*://dot29u55fapha.cloudfront.net/*"
    ],
    types: ["stylesheet", "script"]
  },
  // extraInfoSpec
  ["blocking"]);