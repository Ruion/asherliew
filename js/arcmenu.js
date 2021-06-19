
  document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if(event.code == "Digit1")
        fadeInArcMenu(`#arc-menu-contact object`)

    if(event.code == "Digit2")
    fadeOutArcMenu(`#arc-menu-contact object`)
  }, false);

    function onPress(parentselector){
        showArcMenu($(`${parentselector} #arc-expand-group`), $(`${parentselector} #arc-light`));
    }

    function onRelease(parentselector){
        hideArcMenu($(`${parentselector} #arc-expand-group`), $(`${parentselector} #arc-light`));
    }

  function showArcMenu(arcgroup, arclight){
   
    arcgroup.css(
        {
          'transform': 'scale(1)',
          'opacity': '1'
        });

    arclight.css('opacity','0.3');
  }

  function hideArcMenu(arcgroup, arclight){

    arcgroup.css(
        {
          'transform': 'scale(0)',
          'opacity': '0'
        });

    arclight.css('opacity','0.1');
  }
