'use strict';

const Controller = require('egg').Controller;

class CarController extends Controller {
    async getCar() {
        const {
            ctx
        } = this;
        ctx.body = await ctx.service.car.getCars(ctx.request.query);
    }
}

module.exports = CarController;