System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, easing, Node, tween, GameInfo, PA_06_Camera, SoundController, CONST, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, PA_06_GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPA_06_Camera(extras) {
    _reporterNs.report("PA_06_Camera", "./PA_06_Camera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../../Const/CONST", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      easing = _cc.easing;
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      PA_06_Camera = _unresolved_3.PA_06_Camera;
    }, function (_unresolved_4) {
      SoundController = _unresolved_4.SoundController;
    }, function (_unresolved_5) {
      CONST = _unresolved_5.CONST;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72988tJf5JDFb1EwzD+JE6o", "PA_06_GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_06_GamePlay
       * DateTime = Fri Jan 03 2025 10:42:49 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_06_GamePlay.ts
       * FileBasenameNoExtension = PA_06_GamePlay
       * URL = db://assets/Scripts/Options/PA_06/PA_06_GamePlay.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_06_GamePlay", PA_06_GamePlay = (_dec = ccclass('PA_06_GamePlay'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property([Node]), _dec8 = property([Node]), _dec9 = property([Node]), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = (_temp = class PA_06_GamePlay extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera3d", _descriptor, this);

          _initializerDefineProperty(this, "Tut", _descriptor2, this);

          _initializerDefineProperty(this, "Tut2", _descriptor3, this);

          _initializerDefineProperty(this, "timeCount", _descriptor4, this);

          _initializerDefineProperty(this, "Box", _descriptor5, this);

          _initializerDefineProperty(this, "onAirItems", _descriptor6, this);

          _initializerDefineProperty(this, "onShelfItems", _descriptor7, this);

          _initializerDefineProperty(this, "onBoxItems", _descriptor8, this);

          _initializerDefineProperty(this, "confetti_PS", _descriptor9, this);

          _initializerDefineProperty(this, "CTA", _descriptor10, this);

          _defineProperty(this, "currentClickBox", 0);

          _defineProperty(this, "currentItemStock", 0);

          _defineProperty(this, "isDoneStockItems", false);

          _defineProperty(this, "isShowCustomer", false);
        }

        start() {// const boxParent = this.Box.parent;
          // boxParent.getComponent(SkeletalAnimation).play();
          // this.scheduleOnce(() => {
          //     boxParent.getComponent(SkeletalAnimation).stop();
          // }, 0.1);
        }

        handleOpenBox() {
          const BoxOpen = this.Box.getChildByName("BoxOpen"),
                boxIdle = this.Box.getChildByName("BoxIdle");
          BoxOpen.active = true;
          boxIdle.active = false;
          this.currentClickBox += 1;
          this.Tut2.active = true;
          this.disableTut(this.currentClickBox);
        }

        disableTut(tutIndex) {
          if (tutIndex <= 1) this.Tut.active = false;else {
            this.Tut2.active = false;
            this.timeCount.active = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).PA_06.isStartPlaying = true;
          }
        }

        handleStockTheShelves() {
          if (this.currentItemStock >= this.onBoxItems.length) return;
          const airWorldPos = this.onAirItems[this.currentItemStock].worldPosition;
          const shelveWorldPos = this.onShelfItems[this.currentItemStock].worldPosition;
          const currentItem = this.onBoxItems[this.currentItemStock];
          this.currentItemStock += 1;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.placeSound);
          tween(currentItem).to(0.1, {
            worldPosition: airWorldPos
          }, {
            easing: easing.smooth
          }).start();
          tween(currentItem).delay(0.1).to(0.1, {
            worldPosition: shelveWorldPos
          }, {
            easing: easing.smooth
          }).call(() => {
            if (this.currentItemStock >= this.onBoxItems.length) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).PA_06.isDoneStockItem = true;
              this.Box.active = false;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isWin = true;
            }
          }).start();
        } // private showCTA(): void {
        //     GameInfo.isWin = false;
        // }


        handleShowCustomer() {
          if (this.isShowCustomer) return;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.winSound);
          this.isShowCustomer = true;
          this.confetti_PS.active = true;
          this.camera3d.getComponent(_crd && PA_06_Camera === void 0 ? (_reportPossibleCrUseOfPA_06_Camera({
            error: Error()
          }), PA_06_Camera) : PA_06_Camera).goToNewPos();
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isLose && !this.CTA.active) this.CTA.active = true;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).PA_06.isCameraMoveDone && !this.CTA.active) this.CTA.active = true;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isWin && !this.isShowCustomer) this.handleShowCustomer();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera3d", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Tut", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Tut2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Box", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "onAirItems", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "onShelfItems", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "onBoxItems", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "confetti_PS", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_06_GamePlay.js.map