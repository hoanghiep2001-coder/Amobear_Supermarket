System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, geometry, Node, PhysicsSystem, IronSource, GameInfo, PA_07_GamePlay, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PA_07_HideMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "../../../AdHelper/IronSource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPA_07_GamePlay(extras) {
    _reporterNs.report("PA_07_GamePlay", "./PA_07_GamePlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      geometry = _cc.geometry;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
    }, function (_unresolved_2) {
      IronSource = _unresolved_2.IronSource;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      PA_07_GamePlay = _unresolved_4.PA_07_GamePlay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9f261/l9hIDIeaMg2rUtPB", "PA_06_HideMask", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_06_HideMask
       * DateTime = Fri Jan 03 2025 10:44:57 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_06_HideMask.ts
       * FileBasenameNoExtension = PA_06_HideMask
       * URL = db://assets/Scripts/Options/PA_06/PA_06_HideMask.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_07_HideMask", PA_07_HideMask = (_dec = ccclass('PA_07_HideMask'), _dec2 = property(_crd && PA_07_GamePlay === void 0 ? (_reportPossibleCrUseOfPA_07_GamePlay({
        error: Error()
      }), PA_07_GamePlay) : PA_07_GamePlay), _dec3 = property(Camera), _dec(_class = (_class2 = (_temp = class PA_07_HideMask extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "PA_07_GamePlay", _descriptor, this);

          _initializerDefineProperty(this, "Cam_2D", _descriptor2, this);

          _defineProperty(this, "isClickBoxFirstTime", false);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        }

        touchStart(event) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return;
          (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).handleIronSourcePlaySound(); // if(GameInfo.isToStore || GameInfo.IsShowPopupInstall || GameInfo.currentSuccessClick >= 4) {
          //     this.GameController.installHandle();
          //     return;
          // }

          this.getRaycastResult(event);
        }

        getRaycastResult(touchPos) {
          var ray = new geometry.Ray();
          this.Cam_2D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray); // The following parameters are optional

          var mask = 0xffffffff;
          var maxDistance = 10000000;
          var queryTrigger = true;

          if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult; // const hitPoint = raycastClosestResult.hitPoint
            // const hitNormal = raycastClosestResult.hitNormal;

            var collider = raycastClosestResult.collider; // const distance = raycastClosestResult;   

            if (collider.node.name === "Box") {
              // this.PA_06_GamePlay.handleOpenBox();
              this.PA_07_GamePlay.handleStockTheShelves();
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PA_07_GamePlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Cam_2D", [_dec3], {
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
//# sourceMappingURL=PA_06_HideMask.js.map