var contactMenuExpand = false;

$(document).ready(function(){
  // console.log($(`#arc-menu-contact object`).contents().find(`[id=arc-expand-group]`));
    $('#arc-menu-contact').load(`img/arcmenucontact.svg`,
    function (response, status, xhr) {
      var parentId = "#"+$(this).find(`svg`).attr('id');
      $(`${parentId} #arc-expand-group`).css(
      {
        'transform-origin': '60% 60%',
        'transform': 'scale(0)',
        'opacity': '0',
        'transition': 'all 0.25s ease'
      });

      $(`${parentId} #arc-light`).css(
      {
          'transition': 'all 0.25s ease'
      });

      $(`${parentId} .arc-hold-active`).on('click', (event) => {
      // $(`${parentId} .arc-hold-active`).on('mouseenter touchstart', (event) => {
        if(!contactMenuExpand)
          {
            contactMenuExpand = true;
            onPress(parentId);
          }
          else 
          {
          contactMenuExpand = false;
          onRelease(parentId);
        }
      });

      $(`${parentId} .arc-icon`).each(function(){ 
        let ele = $(this);

          $(this).on('mouseenter touchstart', (event) => {
            ele.css('fill-opacity','0.3')
          });
  
          $(this).on('mouseleave touchend', (event) => {
              ele.css('fill-opacity','0');
          });
      });

      $(`${parentId} .FB`).click(function(){
          window.open(`https://www.facebook.com/xiaopol/`);
          // iosLoseFocusToNewTabAction();
          onRelease(parentId);
      });

      $(`${parentId} .IG`).click(function(){
        window.open(`https://www.instagram.com/asher_liew/`);
        // iosLoseFocusToNewTabAction();
        onRelease(parentId);
      });

      $(`${parentId} .BE`).click(function(){
        window.open(`https://www.behance.net/asherliew`);
        // iosLoseFocusToNewTabAction();
        onRelease(parentId);
     });

      // $(this).on('mouseleave touchend', (event) => {
      //     onRelease(parentId);
      // });
    });
});
