'use strict';

const Controller = require('egg').Controller;

class AdministratorController extends Controller {
  //罗燕力1、登录
  async administratorLogin() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.administratorLogin(ctx.request.body);
  }
  //罗燕力2、所有书籍
  async allbooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.allbooks(this.ctx.request.query.pageNum, this.ctx.request.query.num);
  }
  //罗燕力3、添加书籍
  async addbooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.addbooks(ctx.request.body);
  }
  //罗燕力4、得到所有商品-无条件
  async getallbooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.getallbooks();
  }
  //罗燕力5、修改商品
  async changebooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.changebooks(ctx.request.body);
  }
  //罗燕力6、删除书籍
  async delbooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.delbooks(ctx.request.query.gid);
  }
  //罗燕力7、搜索图书
  async searchbooks() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.administrator.searchbooks(ctx.request.query.goodsname);
  }
}

module.exports = AdministratorController;