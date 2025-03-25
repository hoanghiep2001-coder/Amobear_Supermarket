System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, log, Node, tween, UIOpacity, Vec3, GameInfo, CTA, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PA_07_GamePlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCTA(extras) {
    _reporterNs.report("CTA", "../../../Others/CTA", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../../Controller/SoundController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      log = _cc.log;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      CTA = _unresolved_3.CTA;
    }, function (_unresolved_4) {
      SoundController = _unresolved_4.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e31484emmpBb7KNkT2mqSlP", "PA_07_GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("PA_07_GamePlay", PA_07_GamePlay = (_dec = ccclass('PA_07_GamePlay'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(_crd && CTA === void 0 ? (_reportPossibleCrUseOfCTA({
        error: Error()
      }), CTA) : CTA), _dec(_class = (_class2 = (_temp = class PA_07_GamePlay extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Box", _descriptor, this);

          _initializerDefineProperty(this, "Tut_1", _descriptor2, this);

          _initializerDefineProperty(this, "Tut_2", _descriptor3, this);

          _initializerDefineProperty(this, "Melon_AirPoint", _descriptor4, this);

          _defineProperty(this, "MelonInBoxes", []);

          _defineProperty(this, "currentCollectItem", 0);

          _initializerDefineProperty(this, "Melon_AirPoint_2", _descriptor5, this);

          _initializerDefineProperty(this, "Flour_Melon", _descriptor6, this);

          _defineProperty(this, "MelonDisabled", []);

          _defineProperty(this, "currentStockItem", 0);

          _initializerDefineProperty(this, "PS_conffeti", _descriptor7, this);

          _initializerDefineProperty(this, "CTA", _descriptor8, this);
        }

        start() {
          this.Box.active = false;
          this.MelonInBoxes = this.Box.children.filter(child => child.name.includes("inBox"));
          this.MelonDisabled = this.Flour_Melon.children.filter(child => child.name.includes("disabled"));
        }

        showBox() {
          this.Box.active = true;
          this.showTut_1();
        }

        showTut_1() {
          this.Tut_1.active = true;
          tween(this.Tut_1.getComponent(UIOpacity)).to(0.5, {
            opacity: 255
          }, {
            easing: easing.smooth
          }).start();
          tween(this.Tut_1).repeatForever(tween(this.Tut_1).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: easing.smooth
          }).to(0.5, {
            scale: new Vec3(0.95, 0.95, 0.95)
          }, {
            easing: easing.smooth
          })).start();
        }

        handleCollectItems(node) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          log(this.currentStockItem);
          tween(node).to(0.2, {
            worldPosition: this.Melon_AirPoint.worldPosition,
            scale: new Vec3(1.28, 1.28, 1.28)
          }, {
            easing: easing.sineIn
          }).start();
          tween(node).delay(0.2).to(0.2, {
            worldPosition: this.MelonInBoxes[this.currentCollectItem].worldPosition
          }, {
            easing: easing.sineOut
          }).call(() => this.handleActiveMelonInBox(node)).start();
        }

        handleActiveMelonInBox(tweenNode) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = true;
          tweenNode.active = false;
          this.MelonInBoxes[this.currentCollectItem].active = true; // this.currentStockItem += 1;

          this.currentCollectItem += 1;

          if (this.currentCollectItem >= 4) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).PA_07.isStockFullBox = true;
            this.Tut_1.active = false;
          }
        }

        handleStockTheShelves() {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false; // log(this.currentStockItem)

          tween(this.MelonInBoxes[this.currentStockItem]).to(0.2, {
            worldPosition: this.Melon_AirPoint_2.worldPosition,
            scale: new Vec3(100, 100, 100)
          }, {
            easing: easing.sineIn
          }).start();
          tween(this.MelonInBoxes[this.currentStockItem]).delay(0.2).to(0.2, {
            worldPosition: this.MelonDisabled[this.currentStockItem].worldPosition
          }, {
            easing: easing.sineOut
          }).call(() => this.handleActiveMelonInShelves(this.MelonInBoxes[this.currentStockItem])).start();
        }

        handleActiveMelonInShelves(tweenNode) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = true;
          tweenNode.active = false;
          this.MelonDisabled[this.currentStockItem].active = true;
          this.currentStockItem += 1;

          if (this.currentStockItem >= 4) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = false;
            this.Tut_2.active = false;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isWin = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).PA_07.isStockFullShelve = true;
            this.PS_conffeti.active = true;
            this.CTA.node.active = true;
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).PlaySound("winSound");
          }
        }

        update(dt) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).PA_07.isCameraArrivedPont && !this.Box.active && this.showBox();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Box", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Tut_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Tut_2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Melon_AirPoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Melon_AirPoint_2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Flour_Melon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "PS_conffeti", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CTA", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_07_GamePlay.js.map