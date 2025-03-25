
import { _decorator, Camera, Component, EventTouch, geometry, log, Node, PhysicsSystem } from 'cc';
import { GameInfo } from '../../Const/GameInfo';
import { PA_06_GamePlay } from './PA_06_GamePlay';
import { IronSource } from '../../AdHelper/IronSource';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_06_HideMask
 * DateTime = Fri Jan 03 2025 10:44:57 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_06_HideMask.ts
 * FileBasenameNoExtension = PA_06_HideMask
 * URL = db://assets/Scripts/Options/PA_06/PA_06_HideMask.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PA_06_HideMask')
export class PA_06_HideMask extends Component {

    @property(PA_06_GamePlay)
    PA_06_GamePlay: PA_06_GamePlay = null;

    @property(Camera)
    Cam_2D: Camera = null;


    isClickBoxFirstTime: boolean = false;


    protected start(): void {
        this.registerEvent();
    }


    private registerEvent(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
    }


    private touchStart(event: EventTouch): void {
        if (!GameInfo.isCanTouch) return;

        IronSource.handleIronSourcePlaySound();

        // if(GameInfo.isToStore || GameInfo.IsShowPopupInstall || GameInfo.currentSuccessClick >= 4) {
        //     this.GameController.installHandle();
        //     return;
        // }

        this.getRaycastResult(event);
    }


    private getRaycastResult(touchPos: EventTouch): void {
        let ray = new geometry.Ray();
        this.Cam_2D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray);
        // The following parameters are optional
        const mask = 0xffffffff;
        const maxDistance = 10000000;
        const queryTrigger = true;

        if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            // const hitPoint = raycastClosestResult.hitPoint
            // const hitNormal = raycastClosestResult.hitNormal;
            const collider = raycastClosestResult.collider;
            // const distance = raycastClosestResult;   

            if (collider.node.name === "Box") {
                this.PA_06_GamePlay.handleOpenBox();
                if (this.PA_06_GamePlay.currentClickBox >= 2) {
                    this.PA_06_GamePlay.handleStockTheShelves();
                }
            }
        }
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
