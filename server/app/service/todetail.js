const Service = require('egg').Service;
class TodetailService extends Service {
    async todetail(uid) {
        console.log(uid);
        const sql = `select * from  comments (gid,comments,score,pjimg)  values (${uid.gid},${uid.comments}, ${uid.score},"${uid.pjimg}")`
        const data = await this.app.mysql.query(sql);
        console.log(data);
        return data;
    }
}
module.exports = TodetailService;