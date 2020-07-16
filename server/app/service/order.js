const Service = require('egg').Service;
class OrderService extends Service {
	async order(obj) {
		var search1 = `select imgsrc,goodsname,price from goods where gid=${obj.gid}`
		var search2 = `select number from cartable where gid=${obj.gid}`
		var search3 = `select total from order where gid=${obj.gid}`
		var result1 = await this.app.mysql.query(search1)
		var result2 = await this.app.mysql.query(search2)
		var result3 = await this.app.mysql.query(search3)
		return {
			result1: result1,
			result2: result2,
			result3: result3,

		}
	}
}
module.exports = OrderService;
