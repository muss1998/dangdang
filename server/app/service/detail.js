const Service = require('egg').Service;
class DetailService extends Service {

  
  async addDetail(queryObj) {
        const sql=`select * from goods where gid=${queryObj.gid}`
        const data = await this.app.mysql.query(sql);
        return data;
      }
	  
  async detailpl(queryObj) {
        const sql=`insert into comments`
        const data = await this.app.mysql.query(sql);
        return data;
      }

}
module.exports = DetailService;