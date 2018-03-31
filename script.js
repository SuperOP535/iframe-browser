function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  currentTab = parseInt(cityName.match(/\d+/g));
  evt.currentTarget.className += ' active';
}
document.getElementById('newaddress').addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    document.getElementById('loadnew').click();
  }
});
document.getElementById('tabb1').click();
var currentTab;

function load() {
  document.getElementById('iweb' + currentTab).src = document.getElementById('newaddress').value;
}

function fullscreen() {
  var iframe = document.getElementById('iweb' + currentTab);
  var fs = iframe.requestFullscreen || iframe.webkitRequestFullscreen || iframe.mozRequestFullScreen || iframe.msRequestFullscreen;
  if (!fs) {
    alert('Your browser does not seem to support fullscreen');
  } else {
    fs();
  }
}

function close() {
  document.getElementsByClassName('tabcontent')[currentTab].style.display = 'none';
}
