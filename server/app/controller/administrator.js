'use strict';

const Controller = require('egg').Controller;

class AdministratorController extends Controller {
  //罗燕力1、登录
  async administratorLogin() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.administratorLogin(ctx.request.body);
  }
  //罗燕力2、所有书籍
  async allbooks() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.allbooks(this.ctx.request.query.pageNum, this.ctx.request.query.num);
  }
  //罗燕力3、添加书籍
  async addbooks() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.addbooks(ctx.request.body);
  }
  //罗燕力4、得到所有商品-无条件
  async getallbooks() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.getallbooks();
  }
  //罗燕力5、修改商品
  async changebooks() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.changebooks(ctx.request.body);
  }
  //罗燕力6、删除书籍
  async delbooks() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.delbooks(ctx.request.query.gid);
  }
  //罗燕力7、搜索图书
  async searchbooks() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.searchbooks(ctx.request.query.goodsname);
  }
  //罗燕力8、管理员得到用户信息（黑名单）
  async getallusers() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.getallusers();
  }
  //罗燕力9、管理员修改用户信息（黑名单）
  async changeusers() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.changeusers(ctx.request.body);
  }
  //罗燕力10、管理员得到所有用户信息（按条目数）
  async allusers() {
    const {
      ctx
    } = this;
    ctx.body = await this.ctx.service.administrator.allusers(this.ctx.request.query.pageNum, this.ctx.request.query.num);
  }

}
module.exports = AdministratorController;