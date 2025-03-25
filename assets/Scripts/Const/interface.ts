import { Vec3 } from "cc";

export interface NPC_StandPoints {
    position: Vec3 | null,
    rotate: number | null,
}


export interface PA_06 {
    isTimeOver: boolean | null,
    isStartPlaying: boolean | null,
    isDoneStockItem: boolean | null,
    isCameraMoveDone: boolean | null
}


export interface PA_07 {
    isCameraArrivedPont: boolean | null,
    isStockFullBox: boolean | null,
    isStockFullShelve: boolean | null,
}