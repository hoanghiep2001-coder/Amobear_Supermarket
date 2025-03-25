System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, tween, Vec3, GameInfo, _dec, _class, _temp, _crd, ccclass, property, PA_06_Camera;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff234uPWy5FB7Txt/NAmm5G", "PA_06_Camera", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_06_Camera
       * DateTime = Fri Jan 03 2025 15:02:17 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_06_Camera.ts
       * FileBasenameNoExtension = PA_06_Camera
       * URL = db://assets/Scripts/Options/PA_06/PA_06_Camera.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_06_Camera", PA_06_Camera = (_dec = ccclass('PA_06_Camera'), _dec(_class = (_temp = class PA_06_Camera extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ORIGIN_POS", new Vec3(0.731, -18.171, -0.815));

          _defineProperty(this, "ORIGIN_EULER", new Vec3(-15, 0, 0));
        }

        start() {}

        goToNewPos() {
          var newPos = new Vec3(3.983, -17.3, 1.473);
          var newEuler = new Vec3(-15, 90, 0);
          tween(this.node).to(2, {
            position: newPos,
            eulerAngles: newEuler
          }, {
            easing: easing.smooth
          }).call(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).PA_06.isCameraMoveDone = true;
          }).start();
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=PA_06_Camera.js.map