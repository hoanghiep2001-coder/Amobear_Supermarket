import { _decorator, Collider, Component, easing, log, Node, RigidBody, tween, UIOpacity, Vec3 } from 'cc';
import { GameInfo } from '../../../Const/GameInfo';
import { CTA } from '../../../Others/CTA';
import { SoundController } from '../../../Controller/SoundController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_07_GamePlay
 * DateTime = Mon Jan 06 2025 13:56:45 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_07_GamePlay.ts
 * FileBasenameNoExtension = PA_07_GamePlay
 * URL = db://assets/Scripts/Options/PA_07/PA_07_GamePlay.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PA_07_GamePlay')
export class PA_07_GamePlay extends Component {

    @property(Node)
    Box: Node = null;

    @property(Node)
    Tut_1: Node = null;
    @property(Node)
    Tut_2: Node = null;

    @property(Node)
    Melon_AirPoint: Node = null;

    MelonInBoxes: Node[] = [];

    currentCollectItem: number = 0;

    @property(Node)
    Melon_AirPoint_2: Node = null;
    @property(Node)
    Flour_Melon: Node = null;
    MelonDisabled: Node[] = [];

    currentStockItem: number = 0;

    @property(Node)
    PS_conffeti: Node = null;

    @property(CTA)
    CTA: CTA = null;


    protected start(): void {
        this.Box.active = false;

        this.MelonInBoxes = this.Box.children.filter((child =>
            child.name.includes("inBox")
        ));

        this.MelonDisabled = this.Flour_Melon.children.filter((child =>
            child.name.includes("disabled")
        ));
    }


    private showBox(): void {
        this.Box.active = true;
        this.showTut_1();
    }


    private showTut_1(): void {
        this.Tut_1.active = true;
        tween(this.Tut_1.getComponent(UIOpacity))
            .to(0.5, { opacity: 255 }, { easing: easing.smooth })
            .start();

        tween(this.Tut_1)
            .repeatForever(tween(this.Tut_1)
                .to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: easing.smooth })
                .to(0.5, { scale: new Vec3(0.95, 0.95, 0.95) }, { easing: easing.smooth })
            ).start();
    }


    public handleCollectItems(node: Node): void {
        GameInfo.isCanTouch = false;

        log(this.currentStockItem)

        tween(node)
            .to(0.2,
                { worldPosition: this.Melon_AirPoint.worldPosition, scale: new Vec3(1.28, 1.28, 1.28) },
                { easing: easing.sineIn })
            .start();

        tween(node)
            .delay(0.2)
            .to(0.2,
                { worldPosition: this.MelonInBoxes[this.currentCollectItem].worldPosition },
                { easing: easing.sineOut })
            .call(() => this.handleActiveMelonInBox(node))
            .start();
    }


    private handleActiveMelonInBox(tweenNode: Node): void {
        GameInfo.isCanTouch = true;
        tweenNode.active = false;
        this.MelonInBoxes[this.currentCollectItem].active = true;

        // this.currentStockItem += 1;
        this.currentCollectItem += 1;

        if (this.currentCollectItem >= 4) {
            GameInfo.PA_07.isStockFullBox = true;
            this.Tut_1.active = false;
        }
    }


    public handleStockTheShelves(): void {
        GameInfo.isCanTouch = false;

        // log(this.currentStockItem)

        tween(this.MelonInBoxes[this.currentStockItem])
            .to(0.2,
                { worldPosition: this.Melon_AirPoint_2.worldPosition, scale: new Vec3(100, 100, 100) },
                { easing: easing.sineIn })
            .start();

        tween(this.MelonInBoxes[this.currentStockItem])
            .delay(0.2)
            .to(0.2,
                { worldPosition: this.MelonDisabled[this.currentStockItem].worldPosition },
                { easing: easing.sineOut })
            .call(() => this.handleActiveMelonInShelves(this.MelonInBoxes[this.currentStockItem]))
            .start();
    }


    private handleActiveMelonInShelves(tweenNode: Node): void {
        GameInfo.isCanTouch = true;
        tweenNode.active = false;
        this.MelonDisabled[this.currentStockItem].active = true;

        this.currentStockItem += 1;

        if (this.currentStockItem >= 4) {
            GameInfo.isCanTouch = false;

            this.Tut_2.active = false;

            GameInfo.isWin = true;

            GameInfo.PA_07.isStockFullShelve = true;

            this.PS_conffeti.active = true;

            this.CTA.node.active = true;

            SoundController.Instance(SoundController).PlaySound("winSound")
        }
    }


    protected update(dt: number): void {
        GameInfo.PA_07.isCameraArrivedPont && !this.Box.active && this.showBox();
    }
}
