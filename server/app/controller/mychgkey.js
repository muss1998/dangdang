'use strict';

const Controller = require('egg').Controller;

class MychgkeyController extends Controller {
    async myChgUser() {
        const {
            ctx
        } = this;
        // console.log(ctx.request.body,'body');
        var obj=await this.ctx.service.mychgkey.myChgUsers(ctx.request.body);
        if(obj.affectedRows!=0){
            this.ctx.body={
                code:1,
                info:"用户名修改成功"
            }
        }else{
            this.ctx.body={
                code:0,
                info:"用户名修改失败"
            }
        }
        
    };

    async myChgKey() {
        const {
            ctx
        } = this;
        // console.log(ctx.request.body,'body');
        var obj=await this.ctx.service.mychgkey.myChgKeys(ctx.request.body);
        if(obj.affectedRows!=0){
            this.ctx.body={
                code:1,
                info:"密码修改成功"
            }
        }else{
            this.ctx.body={
                code:0,
                info:"密码修改失败"
            }
        }
        
    }
}

module.exports = MychgkeyController;