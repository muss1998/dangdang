const Service = require('egg').Service;
class MyService extends Service {
    async getMys(car) {
        console.log(car,555);
        const data = await this.app.mysql.query(`select * from user where username like '%${car.username}%'`);
        console.log(data);
        return data;
    }
}
module.exports = MyService;