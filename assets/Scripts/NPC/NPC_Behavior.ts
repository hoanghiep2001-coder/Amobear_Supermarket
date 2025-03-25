import { _decorator, Component, easing, log, Node, SkeletalAnimation, tween } from 'cc';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;


@ccclass('NPC_Behavior')
export class NPC_Behavior extends Component {

    @property(Node)
    tien: Node = null;

    currentNPC_ID: number = null;
    isPaid: boolean = false;
    isWaitingToGetChange: boolean = false;


    protected start(): void {
        // setup NPC id
        this.currentNPC_ID = Number(this.node.name.split("_")[1]);
        this.nextStand(false);
    }


    public updateStandForNPC(): void {
        // this.currentNPC_ID -= 1;
        GameInfo.currentItems = GameInfo.currentSuccessClick;
        let isDonePayment: boolean = false;
        if (this.currentNPC_ID < GameInfo.currentSuccessClick) isDonePayment = true;
        this.nextStand(isDonePayment);
    }


    public nextStand(isDonePayment: boolean): void {

        // GameInfo.isNPCDoneMove = false;

        // GameInfo.isCanTouch = false;

        this.node.setRotationFromEuler(0, -90, 0);

        this.node.getComponent(SkeletalAnimation).play("walking");

        if (isDonePayment) {
            tween(this.node)
                .to(1, { position: GameInfo.NPC_DoorStand }, { easing: easing.smooth })
                .call(() => this.node.active = false)
                .start();
        }
        else {
            log("updateId:", this.currentNPC_ID);

            tween(this.node)
                .to(1, { position: GameInfo.NPC_StandPoints[this.currentNPC_ID - GameInfo.currentSuccessClick].position }, { easing: easing.smooth })
                .call(() => {

                    this.node.setRotationFromEuler(0, GameInfo.NPC_StandPoints[this.currentNPC_ID - GameInfo.currentSuccessClick].rotate, 0);

                    GameInfo.isNPCDoneMove = true;

                    GameInfo.isCanTouch = true;

                    this.node.getComponent(SkeletalAnimation).play("idle");
                })
                .start();
        }
    }


    protected update(dt: number): void {
        // pay money
        if (this.currentNPC_ID === GameInfo.currentSuccessClick && GameInfo.currentItems === 0 && !this.isPaid) {
            this.isPaid = true;
            this.tien.active = true;
            this.node.getComponent(SkeletalAnimation).play("Payment_CardStart");
            this.scheduleOnce(() => this.node.getComponent(SkeletalAnimation).play("Payment_CardIdle"), 0.2);
        }

        // waiting to get change
        if (this.isPaid && this.currentNPC_ID === GameInfo.NPCpaidTimes && !this.isWaitingToGetChange) {
            this.isWaitingToGetChange = true;
            this.tien.active = false;
            this.node.getComponent(SkeletalAnimation).play("idle");
        }
    }
}

