System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Collider, Component, geometry, Node, PhysicsSystem, RigidBody, GameInfo, PA_07_GamePlay, SoundController, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PA_07_HideMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPA_07_GamePlay(extras) {
    _reporterNs.report("PA_07_GamePlay", "./PA_07_GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../../../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../../Controller/GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Collider = _cc.Collider;
      Component = _cc.Component;
      geometry = _cc.geometry;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      RigidBody = _cc.RigidBody;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      PA_07_GamePlay = _unresolved_3.PA_07_GamePlay;
    }, function (_unresolved_4) {
      SoundController = _unresolved_4.SoundController;
    }, function (_unresolved_5) {
      GameController = _unresolved_5.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ddb5jXT7ZNdJAAb5+N4pnl", "PA_07_HideMask", undefined);

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

      _export("PA_07_HideMask", PA_07_HideMask = (_dec = ccclass('PA_07_HideMask'), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(_crd && PA_07_GamePlay === void 0 ? (_reportPossibleCrUseOfPA_07_GamePlay({
        error: Error()
      }), PA_07_GamePlay) : PA_07_GamePlay), _dec4 = property(Camera), _dec(_class = (_class2 = (_temp = class PA_07_HideMask extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "PA_07_GamePlay", _descriptor2, this);

          _initializerDefineProperty(this, "Cam_2D", _descriptor3, this);

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
          }), GameInfo) : GameInfo).isCanTouch) return; // IronSource.handleIronSourcePlaySound();
          // if(GameInfo.isToStore || GameInfo.IsShowPopupInstall || GameInfo.currentSuccessClick >= 4) {
          //     this.GameController.installHandle();
          //     return;
          // }

          this.getRaycastResult(event);
        }

        getRaycastResult(touchPos) {
          let ray = new geometry.Ray();
          this.Cam_2D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray); // The following parameters are optional

          const mask = 0xffffffff;
          const maxDistance = 10000000;
          const queryTrigger = true;

          if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult; // const hitPoint = raycastClosestResult.hitPoint
            // const hitNormal = raycastClosestResult.hitNormal;

            const collider = raycastClosestResult.collider; // const distance = raycastClosestResult;   

            if (collider.node.name.includes("Box") && (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).PA_07.isStockFullBox) {
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound("placeSound");
              this.PA_07_GamePlay.handleStockTheShelves();
              return;
            }

            if (collider.node.name.includes("Watermelon")) {
              this.PA_07_GamePlay.handleCollectItems(collider.node);
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound("placeSound");
              collider.node.getComponent(RigidBody).enabled = false;
              collider.node.getComponent(Collider).enabled = false;
              collider.node.getComponent(RigidBody).destroy();
              collider.node.getComponent(Collider).destroy();
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "PA_07_GamePlay", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Cam_2D", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_07_HideMask.js.map