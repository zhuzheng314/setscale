var fun = function () {
  var bodyCliWidth = document.body.clientWidth;
  var bodyCliHeight = document.body.clientHeight;
  var screenWrapDom = document.querySelector('#home');
  var originPercent = 1920 / 1080;
  var percent = bodyCliWidth / bodyCliHeight;

  if (percent > originPercent) {
    screenWrapDom.style.cssText = 'transform:scale(' + bodyCliHeight / 1080 + ');' +
              'transform-origin:0px 0px 0px;' +
              'top:0px;' +
              'left:' + (bodyCliWidth - bodyCliHeight * originPercent) / 2 + 'px;';
  } else {
    screenWrapDom.style.cssText = 'transform:scale(' + bodyCliWidth / 1920 + ');' +
              'transform-origin:0px 0px 0px;' +
              'top:' + (bodyCliHeight - bodyCliWidth / originPercent) / 2 + 'px;' +
              'left:0';
  }
}
module.exports = fun
