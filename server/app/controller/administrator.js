'use strict';

const Controller = require('egg').Controller;

class AdministratorController extends Controller {
  async administratorLogin() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.administratorLogin(ctx.request.body);
  }
  async allbooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.allbooks();
  }
  
}

module.exports = AdministratorController;