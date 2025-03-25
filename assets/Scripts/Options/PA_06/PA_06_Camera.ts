
import { _decorator, Component, easing, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../../Const/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_06_Camera
 * DateTime = Fri Jan 03 2025 15:02:17 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_06_Camera.ts
 * FileBasenameNoExtension = PA_06_Camera
 * URL = db://assets/Scripts/Options/PA_06/PA_06_Camera.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PA_06_Camera')
export class PA_06_Camera extends Component {

    ORIGIN_POS: Vec3 = new Vec3(0.731, -18.171, -0.815);
    ORIGIN_EULER: Vec3 = new Vec3(-15, 0, 0)


    protected start(): void {
        
    }


    public goToNewPos(): void {

        const newPos = new Vec3(3.983, -17.3, 1.473);
        const newEuler = new Vec3(-15, 90, 0);

        tween(this.node)
        .to(2, {position: newPos, eulerAngles: newEuler}, {easing: easing.smooth})
        .call(() => {
            GameInfo.PA_06.isCameraMoveDone = true;
        })
        .start();
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
