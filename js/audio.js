    // use Web Audio API to play more than 1 sound at a time
    // Safari does not support playing multiple sounds  
    var sounds = {
        Click: new Howl({ src: [`audio/Click.wav`, "audio/Click.m4a"]}),
        PanelOpen: new Howl({ src: ["audio/PanelOpen.wav", "audio/PanelOpen.m4a"]}),
    };

    var bgmSound = new Howl({
            src: ["audio/bgm.mp3", "audio/bgm.m4a"],
            loop: true,
            volume: 0.6,
    });

    
    //  register buttons to play click sound
    function playClickSound(){
        sounds["Click"].rate(getRandomArbitrary(0.1,0.5))
        sounds["Click"].play();
    }

    function playSound(type){
        if(!window.gameLoaded) return;
        sounds[type].stop();
        sounds[type].play();
    }

    function stopSound(type){
        sounds[type].stop();
    }

    function playPanelOpenSound(){
        playSound("PanelOpen");
    }

    window.playSound = function(type){
        sounds[type].play();
    }

    function playBackgroundSound(){
        if(!bgmSound.playing())
            bgmSound.play();
    }

    function stopBackgroundSound(){
        bgmSound.stop();
    }

    function IOSFirstClickPlayBackgroundMusic(){
        bgmSound.play();
        
        playSound("PanelOpen")

        sounds["Click"].play();
        sounds["Click"].stop();
    }

    function delayPlaybackgroundSound(delay){
        bgmSound.play();
        bgmSound.stop();
        setTimeout(function() { bgmSound.play(); }, delay * 1000);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
