'use strict';

const Controller = require('egg').Controller;

class TocarController extends Controller {
    async tocar() {
        const {
            ctx
        } = this;

        if(this.ctx.session.islogin){
            console.log(ctx.request.query)
            this.ctx.body = await this.ctx.service.tocar.tocar({uid:ctx.request.query.uid,num:ctx.request.query.num,username:this.ctx.session.islogin});
        
        }else{
            // return { code: 4000, info: { title: "请登录" }}
            this.ctx.body={
                code: 4000,
                info: "请登录"
            }  
        }
        // console.log(ctx.request.query,66666)
        // this.ctx.body = await this.ctx.service.tocar.tocar(ctx.request.query);
            

    }

}

module.exports = TocarController;