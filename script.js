function byId(id) {
  return document.getElementById(id);
}

function byClass(c) {
  return document.getElementsByClassName(c);
}

function fullscreen(elm) {
  (elm.requestFullscreen ? elm.requestFullscreen() : (elm.webkitRequestFullscreen ? elm.webkitRequestFullscreen() : (elm.mozRequestFullScreen ? elm.mozRequestFullScreen() : (elm.msRequestFullscreen ? elm.msRequestFullscreen() : alert('Your browser does not support fullscreen!')))))
}

var currentTab = 1;

function openTab(id) {
  for (var i = 0, tabcontent = byClass('tabcontent'); i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  for (var i = 0, tablinks = byClass('tablinks'); i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  var tab = byId('tabb'+id);
  tab.style.display = 'block';
  currentTab = id;
  tab.className += ' active';
}

window.onload = function() {
  byId('address').addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
      document.getElementById('load').click();
    }
  });
}

function load() {
  byId('iweb' + currentTab).src = byId('address').value;
}

function close() {
  byClass('tabcontent')[currentTab].style.display = 'none';
}
