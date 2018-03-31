function byId(id) {
  return document.getElementById(id);
}

function byClass(c) {
  return document.getElementsByClassName(c);
}

function fullscreen(elm) {
  (elm.requestFullscreen ? elm.requestFullscreen() : (elm.webkitRequestFullscreen ? elm.webkitRequestFullscreen() : (elm.mozRequestFullScreen ? elm.mozRequestFullScreen() : (elm.msRequestFullscreen ? elm.msRequestFullscreen() : alert('Your browser does not support fullscreen!')))))
}

var currentTab;

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = byClass('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = byClass('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  byId(cityName).style.display = 'block';
  currentTab = parseInt(cityName.match(/\d+/g));
  evt.currentTarget.className += ' active';
}

window.onload = function() {
  byId('address').addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
      document.getElementById('load').click();
    }
  });
  byId('tab1').click();
}

function load() {
  byId('iweb' + currentTab).src = byId('address').value;
}

function close() {
  byClass('tabcontent')[currentTab].style.display = 'none';
}
