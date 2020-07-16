const Service = require('egg').Service;
class MychgkeysService extends Service {
    async myChgUsers(car) {
        // console.log(car,"传入的的参数");
        await this.app.mysql.query(`update  cartable set username = '${car.newusername}' where username='${car.username}'`);
        const data = await this.app.mysql.query(`update  user set username = '${car.newusername}' where username='${car.username}'`);
        // console.log(data);
        return data;
    }
    async myChgUsers1(obj) {
        var result1 = await this.app.mysql.query(`select * from user where username = '${obj.newusername}'`);
        return result1;
    }
    async myChgKeys(car) {
        // console.log(car,"传入的的参数");
        const data = await this.app.mysql.query(`update  user set password = '${car.newpassword}' where username='${car.username}'`);
        // console.log(data);
        return data;
    }
    async myChgImgs(car) {
        // console.log(car,"传入的的参数");
        const data = await this.app.mysql.query(`update  user set imgsrc = '${car.newimgsrc}' where username='${car.username}'`);
        // console.log(data);
        return data;
    }

    async getcar(obj) {
        const data = await this.app.mysql.query(`select * from cartable where username = '${obj.username1}'`);
        // console.log(data);
        return data;
    }
    async deleteCar(obj) {
        const data = await this.app.mysql.query(`delete from cartable where cid = ${obj.cid}`);
        // console.log(data);
        return data;
    }
    //增加订单表

    async addorder(obj) {
        console.log(obj);
        await this.app.mysql.query(`delete from cartable where gid = ${obj.gid} and username = '${obj.username1}' `)
        const data = await this.app.mysql.query(`insert into ordertable(gid,total,username) values (${obj.gid},${obj.total},'${obj.username1}')`);
        // console.log(data);
        return data;
    }
}
module.exports = MychgkeysService;