'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
//返回给前端数据，传入值id
    async addDetail() {
      const { ctx } = this;
      ctx.body = await this.ctx.service.detail.addDetail(ctx.request.query);
    }
 
}

module.exports = DetailController;
