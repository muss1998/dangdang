'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
    async order() {
        const {
            ctx
        } = this;
		var result=await this.ctx.service.order.order(this.ctx.request.body)
		ctx.body=result
    }

}

module.exports = OrderController;