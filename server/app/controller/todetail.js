'use strict';

const Controller = require('egg').Controller;

class TodetailController extends Controller {
    async todetail() {
        const {
            ctx
        } = this;
        console.log(ctx.request.query);
        ctx.body = await this.ctx.service.todetail.todetail(ctx.request.query);
    }
}

module.exports = TodetailController;