const Service = require('egg').Service;
class OrderService extends Service {
	async order(obj) {
		//获取购物车里相同username的所有东西信息
		var search1 = `select * from ordertable where username='${obj.username}'`;

		// var search2 = `select goodsname,imgsrc,price, from order where gid=${obj.gid}`
		var result1 = await this.app.mysql.query(search1)
		// var result2 = await this.app.mysql.query(search2)
		// var result3 = await this.app.mysql.query(search3)
		// console.log(result1)
		var arr1=[];
		var test='';
		for(let i=0;i<result1.length;i++){
			test= await this.app.mysql.query(`select goodsname,imgsrc,price from goods where gid=${result1[i].gid}`);
			arr1.push(test[0])
		}
		console.log(arr1)
		return arr1;
		
	}
}

module.exports = OrderService; 

