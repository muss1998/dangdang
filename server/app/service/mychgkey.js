const Service = require('egg').Service;
class MychgkeysService extends Service {
    async myChgUsers(car) {
        // console.log(car,"传入的的参数");
        const data = await this.app.mysql.query(`update  user set username = '${car.newusername}' where username='${car.username}'`);
        console.log(data);
        return data;
    }

    async myChgKeys(car) {
        // console.log(car,"传入的的参数");
        const data = await this.app.mysql.query(`update  user set password = '${car.newpassword}' where username='${car.username}'`);
        console.log(data);
        return data;
    }
}
module.exports = MychgkeysService; 