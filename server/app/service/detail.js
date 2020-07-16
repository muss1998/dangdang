const Service = require('egg').Service;
class DetailService extends Service {



  async addDetail(queryObj) {
    const sql = `select * from goods where gid=${queryObj.gid}`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  async detailpl(obj) {
    const sql3 = await this.app.mysql.query(`select * from user where username="${obj.username}"`)
     
      obj.uid = sql3[0].uid
    const data = await this.app.mysql.query(`insert into comments (gid,uid,comments,score,pjimg) values (${obj.gid},${obj.uid},"${obj.comments}",${obj.score},"${obj.img}")`);
    return data
      ;

  }

	async addDetail(queryObj) {
		const sql = `select * from goods where gid=${queryObj.gid}`
		const data = await this.app.mysql.query(sql);
		return data;
	}


	async showpl(queryObj) {
		const sql =
			`select * from comments where gid = "${queryObj.gid}"`
		const data = await this.app.mysql.query(sql);
		return data
	}

}
module.exports = DetailService;
