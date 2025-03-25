System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Node, tween, Vec3, GameInfo, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PA_07_Camera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../Const/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e7a2g8NJBNhq7Vn71wSjqJ", "PA_07_Camera", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_07_Camera
       * DateTime = Tue Jan 07 2025 13:43:13 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_07_Camera.ts
       * FileBasenameNoExtension = PA_07_Camera
       * URL = db://assets/Scripts/Options/PA_07/GamePlay/PA_07_Camera.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_07_Camera", PA_07_Camera = (_dec = ccclass('PA_07_Camera'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class PA_07_Camera extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ORIGINAL_POS", new Vec3(-0.348, -18.171, -0.972));

          _defineProperty(this, "ORIGINAL_EULER", new Vec3(-25, -40, 0));

          _defineProperty(this, "isGoToShelve", false);

          _initializerDefineProperty(this, "Box", _descriptor, this);

          _initializerDefineProperty(this, "Tut_2", _descriptor2, this);
        }

        start() {
          this.node.setPosition(this.ORIGINAL_POS);
          this.node.setRotationFromEuler(this.ORIGINAL_EULER);
          this.scheduleOnce(() => {
            this.goToNewPos();
          }, 1);
        }

        goToNewPos() {
          var newPos = new Vec3(1.246, -18.61, -1.065);
          var newEuler = new Vec3(-45, 0, 0);
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          tween(this.node).to(1.5, {
            position: newPos,
            eulerAngles: newEuler
          }, {
            easing: easing.smooth
          }).call(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).PA_07.isCameraArrivedPont = true;
          }).start();
        }

        goToShelvePos() {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          this.isGoToShelve = true;
          var newPos = new Vec3(1.253, -18.236, -1.439);
          var boxNewPos = new Vec3(1.194, 0.753, -1.828);
          tween(this.node).to(1, {
            position: newPos
          }, {
            easing: easing.smooth
          }).start();
          tween(this.Box).to(1, {
            position: boxNewPos
          }, {
            easing: easing.smooth
          }).call(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
            this.Tut_2.active = true;
          }).start();
        }

        update(dt) {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).PA_07.isStockFullBox && !this.isGoToShelve && this.goToShelvePos();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Box", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Tut_2", [_dec3], {
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
//# sourceMappingURL=PA_07_Camera.js.map