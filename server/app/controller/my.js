'use strict';

const Controller = require('egg').Controller;

class MyController extends Controller {
    async getMy() {
        const {
            ctx
        } = this;
        // console.log(ctx.request.body,'body');
        this.ctx.body = await this.ctx.service.my.getMys(ctx.request.body);

    }
}

module.exports = MyController;