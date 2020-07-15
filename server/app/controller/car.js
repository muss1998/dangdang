'use strict';

const Controller = require('egg').Controller;

class CarController extends Controller {
    async getCar() {
        const {
            ctx
        } = this;
        if (this.ctx.session.islogin) {
            this.ctx.body = await this.ctx.service.car.getCars({
                username: this.ctx.session.islogin
            });
        } else {
            this.ctx.body = {
                code: 3,
                info: "未登录"
            }
        }
        // ctx.body = await ctx.service.car.getCars(ctx.request.body);
    }
}

module.exports = CarController;