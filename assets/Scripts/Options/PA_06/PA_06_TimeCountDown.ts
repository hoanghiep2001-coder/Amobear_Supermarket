
import { _decorator, Component, Node, UITransform } from 'cc';
import { GameInfo } from '../../Const/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_06_TimeCountDown
 * DateTime = Fri Jan 03 2025 15:52:50 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_06_TimeCountDown.ts
 * FileBasenameNoExtension = PA_06_TimeCountDown
 * URL = db://assets/Scripts/Options/PA_06/PA_06_TimeCountDown.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PA_06_TimeCountDown')
export class PA_06_TimeCountDown extends Component {
    @property(Node)
    UI_Time: Node = null;


    isTimeOver: boolean = false;


    protected start(): void {
        
    }


    private deCreaseTime(): void {
        if(this.isTimeOver) return;

        const UItransform = this.UI_Time.getComponent(UITransform);
        UItransform.width -= 0.8;
        
        if(UItransform.width <= 0) {
            GameInfo.isLose = true;
            this.isTimeOver = true;
            GameInfo.PA_06.isTimeOver = true;
            this.scheduleOnce(() => this.destroyThis(), 1);
        }
    }


    private destroyThis(): void {
        this.node.active = false;
        this.destroy();
    }


    protected update(dt: number): void {
        if(GameInfo.PA_06.isStartPlaying) this.deCreaseTime();
        if(GameInfo.PA_06.isDoneStockItem && !this.isTimeOver && this.node.active) this.destroyThis();
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
