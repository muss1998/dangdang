'use strict';

const Controller = require('egg').Controller;

class TocarController extends Controller {
    async tocar() {
        const {
            ctx
        } = this;
        console.log(this.ctx.session.islogin)
        if (this.ctx.session.islogin) {
            this.ctx.body = await this.ctx.service.tocar.tocar({ gid: this.ctx.request.body.gid, num: this.ctx.request.body.num, username: this.ctx.session.islogin });
        } else {
            // return { code: 4000, info: { title: "请登录" }}
            this.ctx.body = {
                code: 4000,
                info: "请登录"
            }
        }



    }

}

module.exports = TocarController;

