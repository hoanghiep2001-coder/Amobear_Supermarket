
import { _decorator, Component, easing, Label, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { GameController } from '../Controller/GameController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CTA
 * DateTime = Fri Jan 03 2025 16:30:31 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = CTA.ts
 * FileBasenameNoExtension = CTA
 * URL = db://assets/Scripts/Others/CTA.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('CTA')
export class CTA extends Component {

    @property(GameController)
    GameController: GameController = null;

    @property(Node)
    CTA_overlay: Node = null;

    @property(Node)
    CTA_Btn: Node = null;


    protected start(): void {
        this.activeBtnAnim();

        GameInfo.isToStore = true;

        GameInfo.IsShowPopupInstall = true;

        let label: Label = this.getComponentInChildren(Label);
        
        if(GameInfo.isWin) {
            label.string = "CONTINUE!";
        } else {
            label.string = "TRY AGAIN!";
        }

        // mtg & applovin
        this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // others
        this.CTA_Btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private activeBtnAnim(): void {
        const originalScale = this.CTA_Btn.getScale();
        tween(this.CTA_Btn)
            .repeatForever(
                tween(this.CTA_Btn)
                    .to(0.5, { scale: new Vec3(originalScale.x + 0.05, originalScale.y + 0.05, originalScale.z + 0.05) })
                    .to(0.5, { scale: originalScale }, { easing: easing.elasticOut })
            ).start();
    }
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
