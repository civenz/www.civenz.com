function clear_urls() {
  document.getElementById("urls").value = "";
}

function open_urls() {
  let urls = document.getElementById("urls").value;
  let url = "";

  let protocol = document.getElementsByName("protocol");
  let noprotocol = false;

  for(let i = 0; i < protocol.length; i++) {
    if (protocol[i].value == 1) {
      if(protocol[i].checked) noprotocol = true;
    }
  }

  urls = urls.split("\n");
  urls = urls.filter(function(e){return e}); //删除空元素
  //console.log(urls);

  for(let i = 0; i < urls.length; i++) {
    url = urls[i].trim();

    if(noprotocol) {
      if( /^[0-9a-zA-Z]+\.[^.]+/.test(url) ) {
        url = '//' + url.replace(/^http(s)?:\/\//,'');
        window.open( url, '_blank').location;
      }
    } else {
      if( /^http(s)?:\/\//.test(url) ) // 判断 http:// 或 https:// 开头
        window.open( url, '_blank').location;
    }
  }
}