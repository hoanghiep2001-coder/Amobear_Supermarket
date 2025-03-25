System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, GameInfo, _dec, _class, _temp, _crd, ccclass, property, UserMoney;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "022b1bO/ZNAOIk0BTf7csDP", "UserMoney", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UserMoney", UserMoney = (_dec = ccclass('UserMoney'), _dec(_class = (_temp = class UserMoney extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "moneyLabel", null);
        }

        start() {
          this.moneyLabel = this.getComponentInChildren(Label);
        }

        update(dt) {
          if (this.moneyLabel) {
            this.moneyLabel.string = `${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentUserMoney}.00`;
          }
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
//# sourceMappingURL=UserMoney.js.map