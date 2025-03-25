import { _decorator, Camera, Component, easing, fragmentText, Node, SkeletalAnimation, tween } from 'cc';
import { GameInfo } from '../../Const/GameInfo';
import { PA_06_Camera } from './PA_06_Camera';
import { SoundController } from '../../Controller/SoundController';
import { CONST } from '../../Const/CONST';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_06_GamePlay
 * DateTime = Fri Jan 03 2025 10:42:49 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_06_GamePlay.ts
 * FileBasenameNoExtension = PA_06_GamePlay
 * URL = db://assets/Scripts/Options/PA_06/PA_06_GamePlay.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PA_06_GamePlay')
export class PA_06_GamePlay extends Component {

    @property(Camera)
    camera3d: Camera = null;

    @property(Node)
    Tut: Node = null;
    @property(Node)
    Tut2: Node = null;

    @property(Node)
    timeCount: Node = null;

    @property(Node)
    Box: Node = null;

    @property([Node])
    onAirItems: Node[] = [];

    @property([Node])
    onShelfItems: Node[] = [];

    @property([Node])
    onBoxItems: Node[] = [];

    @property(Node)
    confetti_PS: Node = null;

    @property(Node)
    CTA: Node = null;


    currentClickBox: number = 0;
    currentItemStock: number = 0;
    isDoneStockItems: boolean = false;


    isShowCustomer: boolean = false;


    protected start(): void {
        // const boxParent = this.Box.parent;
        // boxParent.getComponent(SkeletalAnimation).play();
        // this.scheduleOnce(() => {
        //     boxParent.getComponent(SkeletalAnimation).stop();
        // }, 0.1);
    }


    public handleOpenBox(): void {
        const BoxOpen = this.Box.getChildByName("BoxOpen"),
            boxIdle = this.Box.getChildByName("BoxIdle");

        BoxOpen.active = true;
        boxIdle.active = false;

        this.currentClickBox += 1;
        this.Tut2.active = true;
        this.disableTut(this.currentClickBox);
    }


    private disableTut(tutIndex: number): void {
        if (tutIndex <= 1) this.Tut.active = false;
        else {
            this.Tut2.active = false
            this.timeCount.active = true;
            GameInfo.PA_06.isStartPlaying = true;
        }
    }


    public handleStockTheShelves(): void {
        if (this.currentItemStock >= this.onBoxItems.length) return;

        const airWorldPos = this.onAirItems[this.currentItemStock].worldPosition;
        const shelveWorldPos = this.onShelfItems[this.currentItemStock].worldPosition;
        const currentItem = this.onBoxItems[this.currentItemStock];

        this.currentItemStock += 1;

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);

        tween(currentItem)
            .to(0.1, { worldPosition: airWorldPos }, { easing: easing.smooth })
            .start();

        tween(currentItem)
            .delay(0.1)
            .to(0.1, { worldPosition: shelveWorldPos }, { easing: easing.smooth })
            .call(() => {
                if (this.currentItemStock >= this.onBoxItems.length) {
                    GameInfo.PA_06.isDoneStockItem = true;
                    this.Box.active = false;
                    GameInfo.isWin = true;
                }
            })
            .start();
    }


    // private showCTA(): void {
    //     GameInfo.isWin = false;
    // }


    private handleShowCustomer(): void {
        if(this.isShowCustomer) return;

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.winSound);

        this.isShowCustomer = true;
        this.confetti_PS.active = true;
        this.camera3d.getComponent(PA_06_Camera).goToNewPos();
    }


    protected update(dt: number): void {
        if (GameInfo.isLose && !this.CTA.active) this.CTA.active = true;
        if (GameInfo.PA_06.isCameraMoveDone && !this.CTA.active) this.CTA.active = true;
        if (GameInfo.isWin && !this.isShowCustomer) this.handleShowCustomer();
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
