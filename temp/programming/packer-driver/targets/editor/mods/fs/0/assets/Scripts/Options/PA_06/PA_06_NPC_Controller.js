System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Node, SkeletalAnimation, tween, GameInfo, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PA_06_NPC_Controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../Const/GameInfo", _context.meta, extras);
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
      SkeletalAnimation = _cc.SkeletalAnimation;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ea12FpVyBFoawMTKnWaaDO", "PA_06_NPC_Controller", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("PA_06_NPC_Controller", PA_06_NPC_Controller = (_dec = ccclass('PA_06_NPC_Controller'), _dec2 = property([Node]), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class PA_06_NPC_Controller extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Npc_PosesToTurn", _descriptor, this);

          _initializerDefineProperty(this, "Npc_turnPos", _descriptor2, this);

          _defineProperty(this, "currentCustomer", 0);

          _defineProperty(this, "scheduleCallback", null);

          _defineProperty(this, "isShowNPCs", false);
        }

        start() {}

        showNPCs() {
          this.isShowNPCs = true;
          this.scheduleCallback = this.schedule(() => {
            if (this.currentCustomer >= this.Npc_PosesToTurn.length) return;
            const customer = this.node.children[this.currentCustomer];
            const newPos = this.Npc_PosesToTurn[this.currentCustomer].position;
            const turnPos = this.Npc_turnPos[this.currentCustomer].position;
            let time = 1;
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
            tween(customer).to(time, {
              position: newPos
            }, {
              easing: easing.smooth
            }).call(() => {
              customer.setRotationFromEuler(0, 180, 0);
            }).start();
            tween(customer).delay(time).to(0.6, {
              position: turnPos
            }, {
              easing: easing.smooth
            }).call(() => customer.getComponent(SkeletalAnimation).play("idle")).start();
          }, 1);
        }

        update(dt) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isWin && !this.isShowNPCs) this.showNPCs();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Npc_PosesToTurn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Npc_turnPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
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
//# sourceMappingURL=PA_06_NPC_Controller.js.map