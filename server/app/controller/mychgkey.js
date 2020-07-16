'use strict';

const Controller = require('egg').Controller;

class MychgkeyController extends Controller {
    async myChgUser() {
        const {
            ctx
        } = this;
        var obj1 = this.ctx.request.body
        var result = await this.ctx.service.mychgkey.myChgUsers1(obj1)
        if (result.length != 0) {
            ctx.body = {
                info: "该用户名已存在",
                code: 303
            }
        } else {
            var obj = await this.ctx.service.mychgkey.myChgUsers(obj1);
            if (obj.affectedRows != 0) {
                this.ctx.session.islogin = ctx.request.body.newusername
                this.ctx.body = {
                    code: 1,
                    info: "用户名修改成功"
                }
            } else {
                this.ctx.body = {
                    code: 0,
                    info: "用户名修改失败"
                }
            }
        }






    };

    async myChgKey() {
        const {
            ctx
        } = this;
        // console.log(ctx.request.body,'body');
        var obj = await this.ctx.service.mychgkey.myChgKeys(ctx.request.body);
        if (obj.affectedRows != 0) {
            this.ctx.session.islogin = false
            this.ctx.body = {
                code: 1,
                info: "密码修改成功,请重新登录"
            }
        } else {
            this.ctx.body = {
                code: 0,
                info: "密码修改失败"
            }
        }

    }
    async myChgImg() {
        const {
            ctx
        } = this;
        // console.log(ctx.request.body,'body');
        var obj = await this.ctx.service.mychgkey.myChgImgs(ctx.request.body);
        if (obj.affectedRows != 0) {
            this.ctx.body = {
                code: 1,
                info: "头像修改成功"
            }
        } else {
            this.ctx.body = {
                code: 0,
                info: "头像修改失败"
            }
        }

    }
    async getcar() {
        const {
            ctx
        } = this;
        var obj = await this.ctx.service.mychgkey.getcar(ctx.request.body);
        ctx.body = obj;

    }
    //删购物车
    async deleteCar() {
        const {
            ctx
        } = this;
        var obj = await this.ctx.service.mychgkey.deleteCar(ctx.request.body);
        if (obj.affectedRows != 0) {
            this.ctx.body = {
                code: 1,
                info: "购物车删除成功"
            }
        } else {
            this.ctx.body = {
                code: 0,
                info: "购物车删除失败"
            }
        }

    }
    //增加订单

    async addorder() {
        const {
            ctx
        } = this;
        var obj = await this.ctx.service.mychgkey.addorder(ctx.request.body);
        ctx.body = obj;
    }
}

module.exports = MychgkeyController;