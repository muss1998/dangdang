'use strict';

const Controller = require('egg').Controller;
const fs = require("fs");
var path = require("path");
class DetailController extends Controller {
	//返回给前端数据，传入值id
	async addDetail() {
<<<<<<< HEAD
		const { ctx } = this;
=======
		const {
			ctx
		} = this;
>>>>>>> 923b9b43aef430d9e4cb01d618d438416abde0e0
		ctx.body = await this.ctx.service.detail.addDetail(ctx.request.query);
	}

	async detailpl() {
<<<<<<< HEAD
		const { ctx } = this;
		console.log()
		//   console.log(this.ctx.session.islogin)
		ctx.request.body.username = this.ctx.session.islogin
		//let result=await this.ctx.service.detail.detailpl({username:this.ctx.session.islogin},ctx.request.body);
		let result = await this.ctx.service.detail.detailpl(ctx.request.body);
		if (result.affectedRows != 0) {
			ctx.body = {
				code:200,
				info: "提交成功"
			}
		}else{
			ctx.body = {
				code:300,
				info: "提交失败"
=======
		const {
			ctx
		} = this;
		let result = await this.ctx.service.detail.detailpl(ctx.request.body);
		ctx.body = {
			info: "提交成功"
		}
	}

	async showpl() {
		const {
			ctx
		} = this;
		let result = await this.ctx.service.detail.showpl(ctx.request.body);
		if(result[0]){
			ctx.body={
				data:result
			}
		}else{
			ctx.body={
				data:"暂无评论"
>>>>>>> 923b9b43aef430d9e4cb01d618d438416abde0e0
			}
		}
	}

	async uploadImg() {
		const {
			ctx
		} = this;
		const dest = '/public/upload/';
		const file = ctx.request.files[0];
<<<<<<< HEAD
		//console.log(ctx.request.files[0])
=======
		console.log(ctx.request.files[0])
>>>>>>> 923b9b43aef430d9e4cb01d618d438416abde0e0

		//__dirname---egg-mysql/app/controller     
		//path.dirname(__dirname)---egg-mysql/app/
		let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
		// 处理文件，比如上传到云端  或 放到指定的目录
		await fs.copyFileSync(file.filepath, to);
		fs.unlinkSync(file.filepath);
		// 返回图片路径
		let cluster = this.app.config.cluster.listen;
		ctx.body = {
			"code": 0,
			"msg": "",
			"data": {
				"src": `http://localhost:${cluster.port}${dest}${path.basename(file.filepath)}`
			}
		}

	}

<<<<<<< HEAD
=======


>>>>>>> 923b9b43aef430d9e4cb01d618d438416abde0e0
}

module.exports = DetailController;
