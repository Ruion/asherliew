$(document).ready(function(){

    let url = window.location.href;
    $('#arc-menu-share').load(`img/arcmenushare.svg`,
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

      $(`${parentId} .arc-hold-active`).on('mouseenter touchstart', (event) => {
        onPress(parentId);
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

      $(`${parentId}`).on("touchmove", (event) =>{
        // console.log($(event.target))
        // console.log($(event.touches))
      })

      $(`${parentId} .share-fb`).click(function(){
          FB.ui({
            method: 'share',
            href: `${url}`
            }, function(response){});
      });

      $(`${parentId} .share-tt`).click(function(){
        window.open(`https://twitter.com/intent/tweet?text=View these Amazing stars in&url=${url}`);
      });

      $(`${parentId} .share-copy`).click(function(){
          var dummy = document.createElement('input'),
          text = url;
          document.body.appendChild(dummy);
          dummy.value = text;
          dummy.select();
          document.execCommand('copy');
          document.body.removeChild(dummy);

          alert('link copied');
      });

      $(this).on('mouseleave touchend', (event) => {
          onRelease(parentId);
      });
    });
});
