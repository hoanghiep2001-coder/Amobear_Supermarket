
import { _decorator, Component, easing, Node, SkeletalAnimation, tween } from 'cc';
import { GameInfo } from '../../Const/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_06_NPC_Controller
 * DateTime = Fri Jan 03 2025 16:58:50 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_06_NPC_Controller.ts
 * FileBasenameNoExtension = PA_06_NPC_Controller
 * URL = db://assets/Scripts/Options/PA_06/PA_06_NPC_Controller.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PA_06_NPC_Controller')
export class PA_06_NPC_Controller extends Component {


    @property([Node])
    Npc_PosesToTurn: Node[] = [];

    @property([Node])
    Npc_turnPos: Node[] = [];

    currentCustomer: number = 0;

    scheduleCallback: void = null;


    isShowNPCs: boolean = false;


    protected start(): void {


    }


    private showNPCs(): void {
        this.isShowNPCs = true;

        this.scheduleCallback = this.schedule(() => {
            if (this.currentCustomer >= this.Npc_PosesToTurn.length) return;

            const customer = this.node.children[this.currentCustomer];
            const newPos = this.Npc_PosesToTurn[this.currentCustomer].position;
            const turnPos = this.Npc_turnPos[this.currentCustomer].position;
            let time: number = 1;

            customer.active = true;

            this.currentCustomer += 1;

            switch (this.currentCustomer) {
                case 1:
                    time = 1;
                    break;
                case 2:
                    time = 1.5;
                    break;
                case 3:
                    time = 3;
                    break;

                case 4:
                    time = 3.6;
                    break;
                default:
                    break;
            }

            if (this.currentCustomer >= this.Npc_PosesToTurn.length) this.unschedule(this.scheduleCallback);

            tween(customer)
                .to(time, { position: newPos }, { easing: easing.smooth })
                .call(() => {
                    customer.setRotationFromEuler(0, 180, 0);
                })
                .start();

            tween(customer)
                .delay(time)
                .to(0.6, { position: turnPos }, { easing: easing.smooth })
                .call(() => customer.getComponent(SkeletalAnimation).play("idle"))
                .start();
        }, 1)
    }


    protected update(dt: number): void {
        if (GameInfo.isWin && !this.isShowNPCs) this.showNPCs();
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
