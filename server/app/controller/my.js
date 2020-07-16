'use strict';

const Controller = require('egg').Controller;

class MyController extends Controller {
    async getMy() {
        const {
            ctx
        } = this;
        // console.log(this.ctx.session.islogin, "login-----------------------");
        if (this.ctx.session.islogin) {
            // console.log(666666)
            this.ctx.body = await this.ctx.service.my.getMys({
                username: this.ctx.session.islogin
            });
        } else {
            this.ctx.body = {
                code: 3,
                info: "未登录"
            }
        }



    }
}

module.exports = MyController;