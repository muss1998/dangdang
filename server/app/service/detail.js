const Service = require('egg').Service;
class DetailService extends Service {



  async addDetail(queryObj) {
    const sql = `select * from goods where gid=${queryObj.gid}`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  async detailpl(obj) {
    //console.log(obj)
    const sql3 = await this.app.mysql.query(`select * from user where username="${obj.username}"`)
    /*[ RowDataPacket {
      uid: 9,
      username: 'objobj',
      password: '1234567',
      imgsrc:
       'http://img4.imgtn.bdimg.com/it/u=1659322401,3609956675&fm=26&gp=0.jpg',
      type: 1,
      blacklist: '否' } ]*/
     
      obj.uid = sql3[0].uid
    console.log(obj);
    const data = await this.app.mysql.query(`insert into comments (gid,uid,comments,score,pjimg) values (${obj.gid},${obj.uid},"${obj.comments}",${obj.score},"${obj.img}")`);
    console.log(data + "2222222222")
    return data
      ;

  }

	async addDetail(queryObj) {
		const sql = `select * from goods where gid=${queryObj.gid}`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	async detailpl(queryObj) {
		const sql =
			`insert into comments (mid,gid,uid,comments,score,pjimg) values (${querObj.mid},${querObj.gid},${querObj.uid},"${querObj.comments}",${querObj.score},"${querObj.pjimg})"`
		const data = await this.app.mysql.query(sql);
	}


	async showpl(queryObj) {
		const sql =
			`select * from comments where gid = "${queryObj.gid}"`
		const data = await this.app.mysql.query(sql);
		return data
	}


}
module.exports = DetailService;
