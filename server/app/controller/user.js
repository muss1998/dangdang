'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	async search() {
		const {
			ctx
		} = this;
		var obj = this.ctx.request.body
		var result = await this.ctx.service.user.search(obj)
		if (result.length!=0) {
			ctx.body = {
				info: "该用户名已存在",
				code: 303
			}
		} else {
			ctx.body = {
				info: "该用户名可以使用",
				code: 200
			}
		}
	}

	async login() {
		const {
			ctx
		} = this;
		var obj = this.ctx.request.body
		var result = await this.ctx.service.user.login(obj)
		if (result[0]) {
			if (obj.password == result[0].password) {
				this.ctx.session.islogin=obj.username
				ctx.body = {
					info: "登录成功",
					code: 200
				}
			} else {
				ctx.body = {
					info: "密码错误，请检查后重新输入",
					code: 403
				}
			}
		} else {
			ctx.body = {
				info: "该用户名不存在,请检查后重新输入",
				code: 404
			}
		}
	}

	async register() {
		const {
			ctx
		} = this;
		var obj = this.ctx.request.body
		var result = await this.ctx.service.user.search(obj)
		console.log(result.length)
		if (result.length == 0) {
			var result1 = await this.ctx.service.user.register(obj)
			ctx.body = {
				info: "注册成功",
				code: 200
			}
		} else {
			ctx.body = {
				info: "该用户名已存在",
				code: 303
			}
		}
	}
}

module.exports = UserController;
