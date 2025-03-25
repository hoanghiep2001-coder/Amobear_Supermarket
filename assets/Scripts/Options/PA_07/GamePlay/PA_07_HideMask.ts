
import { _decorator, Camera, Collider, Component, EventTouch, geometry, log, Node, PhysicsSystem, RigidBody } from 'cc';
import { PA_07_Camera } from './PA_07_Camera';
import { IronSource } from '../../../AdHelper/IronSource';
import { GameInfo } from '../../../Const/GameInfo';
import { PA_07_GamePlay } from './PA_07_GamePlay';
import { SoundController } from '../../../Controller/SoundController';
import { GameController } from '../../../Controller/GameController';
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

@ccclass('PA_07_HideMask')
export class PA_07_HideMask extends Component {
    @property(GameController)
    GameController: GameController = null;
        
    @property(PA_07_GamePlay)
    PA_07_GamePlay: PA_07_GamePlay = null;

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

        // IronSource.handleIronSourcePlaySound();

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

            if(collider.node.name.includes("Box") && GameInfo.PA_07.isStockFullBox) {
                SoundController.Instance(SoundController).PlaySound("placeSound");
                this.PA_07_GamePlay.handleStockTheShelves();
                return;
            }

            if (collider.node.name.includes("Watermelon")) {
                this.PA_07_GamePlay.handleCollectItems(collider.node);

                SoundController.Instance(SoundController).PlaySound("placeSound")

                collider.node.getComponent(RigidBody).enabled = false;
                collider.node.getComponent(Collider).enabled = false;
                collider.node.getComponent(RigidBody).destroy();
                collider.node.getComponent(Collider).destroy();
            }
        }
    }

}

