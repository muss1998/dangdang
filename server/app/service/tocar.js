const Service = require('egg').Service;
class TocarService extends Service {
    async tocar(uid) {
        console.log(uid);
        const sql = `INSERT  INTO  cartable (gid,number,username)  VALUES (${uid.gid}, ${uid.num}, "${uid.username}")`
        const data = await this.app.mysql.query(sql);
        console.log(data);
        return data;
    }
}
module.exports = TocarService;