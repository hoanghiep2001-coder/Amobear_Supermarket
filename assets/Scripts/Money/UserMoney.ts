
import { _decorator, Component, Label, Node } from 'cc';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;

 
@ccclass('UserMoney')
export class UserMoney extends Component {


    moneyLabel: Label = null;
    

    protected start(): void {
        this.moneyLabel = this.getComponentInChildren(Label);
    }


    protected update(dt: number): void {
        if(this.moneyLabel) {
            this.moneyLabel.string = `${GameInfo.currentUserMoney}.00`;
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
