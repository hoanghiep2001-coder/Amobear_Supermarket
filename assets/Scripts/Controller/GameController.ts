import { _decorator, Component, Node, screen, view } from 'cc';
import { SoundController } from './SoundController';
import { GameInfo } from '../Const/GameInfo';
import { IronSource } from '../AdHelper/IronSource';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;


enum storeURL {
    Android = "https://play.google.com/store/apps/details?id=com.supermarket.manager.simulator.game",
    IOS = "https://apps.apple.com/vn/app/supermarket-tycoon-3d/id6739697316"

}


@ccclass('GameController')
export class GameController extends Component {

    @property(Node)
    rotatePopup: Node = null;


    private onFinish(): void {
        window.gameEnd && window.gameEnd();
    }


    protected start(): void {
        window.gameReady && window.gameReady();

        this.handleOrientation();

        view.setResizeCallback(() => {
            this.handleOrientation();
        });

        // IronSource.handleMuteSoundIronSource();

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
    }


    private handleOrientation(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            this.rotatePopup.active = false;
            GameInfo.isCanTouch = true;
        } else {
            this.rotatePopup.active = true;
            GameInfo.isCanTouch = false;
        }
    }


    public installHandle(): void {
        console.log("install");

        // IronSource.isEndGame = true;
        GameInfo.IsShowPopupInstall = true;
        SoundController.Instance(SoundController).StopAllSound();
        window.gameEnd && window.gameEnd();

        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }

        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }

        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }

        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open(storeURL.Android);
                return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open(storeURL.IOS);
                return;
            }

            mraid.open(storeURL.Android);
            return;
        }

        const linkStore = storeURL.Android;

        // Nếu môi trường hỗ trợ mraid
        // if (typeof mraid !== 'undefined') {
        //     mraid.open(linkStore);
        // }
        // Nếu không, sử dụng cách mở URL thông thường
        if (typeof window !== 'undefined') {
            window.open(linkStore, '_blank'); // Mở link trong tab mới
        }
        // Thêm fallback nếu cần

        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
