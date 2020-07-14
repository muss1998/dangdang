const Service = require('egg').Service;

class UserService extends Service {
	async search(obj) {
		var result1=await this.app.mysql.query(`select * from user where username = '${obj.username}'`);
		return result1;
	}
	
  async login(obj) {
	var result1=await this.app.mysql.query(`select * from user where username = '${obj.username}'`);
	return result1;
  }
  
  async register(obj) {
	var result1=await this.app.mysql.query(`insert into user (username,password) values ("${obj.username}","${obj.password}")`)
  }
}

module.exports = UserService;