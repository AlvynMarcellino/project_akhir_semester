var Berubah = document.getElementById('Berubah');
var intervalTime = 1000;
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function changeTextColor() {
    Berubah.style.color = getRandomColor();
}
setInterval(changeTextColor, intervalTime);