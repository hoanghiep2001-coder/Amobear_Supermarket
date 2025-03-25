function mraidFixInstall(){
    const storeURL = {
        Android: "https://play.google.com/store/apps/details?id=com.supermarket.manager.simulator.game",
        IOS: "https://apps.apple.com/vn/app/supermarket-tycoon-3d/id6739697316"
    }


    if (sys.os == sys.OS.IOS || sys.os == sys.OS.OSX) {
        mraid.open(storeURL.IOS);
        return; 
    }

    mraid.open(storeURL.Android);
}