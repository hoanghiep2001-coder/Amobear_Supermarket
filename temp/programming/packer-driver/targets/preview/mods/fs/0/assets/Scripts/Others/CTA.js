System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Label, Node, tween, Vec3, GameInfo, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CTA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../Controller/GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b29dfyZl0xH+7Sg6KEFkeAi", "CTA", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CTA
       * DateTime = Fri Jan 03 2025 16:30:31 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = CTA.ts
       * FileBasenameNoExtension = CTA
       * URL = db://assets/Scripts/Others/CTA.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("CTA", CTA = (_dec = ccclass('CTA'), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class CTA extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "CTA_overlay", _descriptor2, this);

          _initializerDefineProperty(this, "CTA_Btn", _descriptor3, this);
        }

        start() {
          this.activeBtnAnim();
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isToStore = true;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall = true;
          var label = this.getComponentInChildren(Label);

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isWin) {
            label.string = "CONTINUE!";
          } else {
            label.string = "TRY AGAIN!";
          } // mtg & applovin


          this.CTA_overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this); // others

          this.CTA_Btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }

        activeBtnAnim() {
          var originalScale = this.CTA_Btn.getScale();
          tween(this.CTA_Btn).repeatForever(tween(this.CTA_Btn).to(0.5, {
            scale: new Vec3(originalScale.x + 0.05, originalScale.y + 0.05, originalScale.z + 0.05)
          }).to(0.5, {
            scale: originalScale
          }, {
            easing: easing.elasticOut
          })).start();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CTA_overlay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CTA_Btn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=CTA.js.map