'use strict';

const Controller = require('egg').Controller;

class MyController extends Controller {
    async getMy() {
        const {
            ctx
        } = this;
<<<<<<< HEAD
        console.log(this.ctx.request.body,'body');
        this.ctx.body = await this.ctx.service.my.getMys(ctx.request.body);
=======
        // console.log(this.ctx.session.islogin, "login-----------------------");
        if (this.ctx.session.islogin) {
            this.ctx.body = await this.ctx.service.my.getMys({
                username: this.ctx.session.islogin
            });
        } else {
            this.ctx.body = {
                code: 3,
                info: "未登录"
            }
        }


>>>>>>> 9b8a30f92d3a9164b94f3aa4e8ce295b3972b685
    }
}

module.exports = MyController;