'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async order() {
        const {
            ctx
        } = this;
        var result = await this.ctx.service.order.order({
            username: this.ctx.session.islogin
        });
        ctx.body = result
    }

}

module.exports = OrderController;