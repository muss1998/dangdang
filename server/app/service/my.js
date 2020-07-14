const Service = require('egg').Service;
class MyService extends Service {
    async getMys(car) {
        // console.log(car,"传入的的参数");
        const data = await this.app.mysql.query(`select * from user where uid='${car.uid}'`);
        // console.log(data);
        return data[0];//返回的直接是用户的信息的对象
    }
}
module.exports = MyService; 