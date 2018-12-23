function initScreen (w, h, id) {
  const bdw = document.body.clientWidth
  const bdh = document.body.clientHeight
  const bdP = bdw / bdh // 屏幕宽高比
  const screen = document.getElementById(id)
  const p = w / h // 传入尺寸宽高比

  if (bdP > p) { // 屏幕比较宽
    screen.style.cssText = `
      width: ${w}px;
      height: ${h}px;
      transform:scale(${bdh / h});
      transform-origin:0px 0px 0px;
      position: absolute;
      top:0px;
      left:${(bdw - (bdh * p)) / 2}px;
    `
  } else { // 屏幕比较窄
    screen.style.cssText = `
      width: ${w}px;
      height: ${h}px;
      transform:scale(${bdw / w});
      transform-origin:0px 0px 0px;
      position: absolute;
      top:${(bdh - (bdw / p)) / 2}px;
      left:0;
    `
  }
  window.addEventListener('resize', () => {
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      initScreen(w, h, id)
    }, 300)
  })
}

export default initScreen
