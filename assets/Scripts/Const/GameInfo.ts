import { Node, Vec2, Vec3 } from "cc";
import * as Interface from "./interface";

const PA_06: Interface.PA_06 = {
    isTimeOver: false,
    isStartPlaying: false,
    isDoneStockItem: false,
    isCameraMoveDone: false,
}


const PA_07: Interface.PA_07 = {
    isCameraArrivedPont: false,
    isStockFullBox: false,
    isStockFullShelve: false,
}



export class GameInfo {
    // options
    static PA_06: typeof PA_06 = PA_06;

    static PA_07: typeof PA_07 = PA_07;

    // Main State
    static isToStore: boolean = false;
    static IsPlaying : boolean = false;
    static GamePause: boolean = false;

    static isTouching: boolean = false;
    static isCanTouch: boolean = true;
    
    static IsShowPopupInstall: boolean = false;
    static isLose: boolean = false;
    static isWin: boolean = false;

    // Game Variables
    static currentUserMoney: number = 0;
    
    static currentTotalCost: number = 0;
    static currentReceive: number = 0;
    static currentChange: number = 0;

    static currentCenGive: number = 0;
    static currentDollarGive: number = 0;
    static currentBankingInput: string = ``;

    static currentFailedClick: number = 0;
    static currentSuccessClick: number = 1;
    
    // NPC state
    static NPCpaidTimes: number = 0;
    static isNPCDoneMove: boolean = false;
    static NPC_DoorStand: Vec3 = new Vec3(-2.092, 0, 2.312);
    static NPC_StandPoints: Interface.NPC_StandPoints[] = [
        {
            position: new Vec3(0.606, 0, 2.945),
            rotate: -5
        },
        {
            position: new Vec3(4.477, 0, 2.576),
            rotate: -30
        },
        {
            position: new Vec3(5.493, 0, 2.965),
            rotate: -40
        },
        {
            position: new Vec3(6.392, 0, 2.965),
            rotate: -55
        },
    ];

    // Items
    static currentItems: number = 1;
    static currentDollarGiveBack: number = 0;
    static lastDollarGiveBack: number = 0;
    static currentCenGiveBack: number = 0;
    static lastCenGiveBack: number = 0;
    static completePayment: boolean = false;


    // user behavior
    static isClickPayment: boolean = false;

}