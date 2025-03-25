
import { _decorator, Component, easing, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../../../Const/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_07_Camera
 * DateTime = Tue Jan 07 2025 13:43:13 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_07_Camera.ts
 * FileBasenameNoExtension = PA_07_Camera
 * URL = db://assets/Scripts/Options/PA_07/GamePlay/PA_07_Camera.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PA_07_Camera')
export class PA_07_Camera extends Component {


    ORIGINAL_POS: Vec3 = new Vec3(-0.348, -18.171, -0.972);
    ORIGINAL_EULER: Vec3 = new Vec3(-25, -40 ,0);

    isGoToShelve: boolean = false;

    @property(Node)
    Box: Node = null;
    @property(Node)
    Tut_2: Node = null;


    protected start(): void {
        this.node.setPosition(this.ORIGINAL_POS);
        this.node.setRotationFromEuler(this.ORIGINAL_EULER);

        this.scheduleOnce(() => {
            this.goToNewPos();
        }, 1)
    }


    private goToNewPos(): void {
        const newPos = new Vec3(1.246, -18.61, -1.065)
        const newEuler = new Vec3(-45, 0 ,0);

        GameInfo.isCanTouch = false;

        tween(this.node)
        .to(1.5, {position: newPos, eulerAngles: newEuler}, {easing: easing.smooth})
        .call(() => {
            GameInfo.isCanTouch = true;
            GameInfo.PA_07.isCameraArrivedPont = true;
        })
        .start();
    }


    private goToShelvePos(): void {
        GameInfo.isCanTouch = false;

        this.isGoToShelve = true;

        const newPos = new Vec3(1.253, -18.236, -1.439);
        const boxNewPos = new Vec3(1.194, 0.753, -1.828);

        tween(this.node)
        .to(1, {position: newPos}, {easing: easing.smooth})
        .start();

        tween(this.Box)
        .to(1, {position: boxNewPos}, {easing: easing.smooth})
        .call(() => {
            GameInfo.isCanTouch = true;
            this.Tut_2.active = true;
        })
        .start();

    }


    protected update(dt: number): void {
        GameInfo.PA_07.isStockFullBox && !this.isGoToShelve && this.goToShelvePos();
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
