
    window.addEventListener('resize', function() {

        resizeViewport()

    });

    // setInterval(resizeViewport, 5000);

    function resizeViewport(){
        if ( window.matchMedia("(orientation: portrait)").matches ) {

            document.getElementsByTagName("html")[0].style.height = "100vh";

            setTimeout(function(){

                document.getElementsByTagName("html")[0].style.height = "100%";

            }, 500);

        }

        if ( window.matchMedia("(orientation: landscape)").matches ) {

            document.getElementsByTagName("html")[0].style.height = "100vh";

            setTimeout(function(){

            document.getElementsByTagName("html")[0].style.height = "100%";

            }, 500);

        }
    }
