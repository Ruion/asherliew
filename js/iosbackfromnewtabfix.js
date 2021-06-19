window.IOS = function() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function iosLoseFocusToNewTabAction(){
    if(window.IOS() == true){
        $(`body`).append(`
          <div id="continue-panel" style="position: fixed; width:100vw; height: 100vh; z-index: 999999; background: black; top: 0;
          left: 0;">
              <div id="continue-btn" onclick="destroyContinuePanel()" style="display:block; cursor:pointer">CONTINUE</div>
          </div>
        `)
    }
}

function destroyContinuePanel(){
  $(`#continue-panel`).remove();
}
