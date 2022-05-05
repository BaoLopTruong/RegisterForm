
cc.Class({
    extends: cc.Component,

    properties: {
        edbUsername: cc.EditBox,
        edbEmail: cc.EditBox,
        edbPassword: cc.EditBox,
        edbPhone: cc.EditBox,
        btnSubmit: cc.Button,
        _flag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    CheckValue(){
     cc.log(this.edbUsername.string)
     cc.log(this.edbEmail.string)
     cc.log(this.edbPassword.string)
     cc.log(this.edbPhone.string)

    },
    start () {

    },

    // update (dt) {},
});
