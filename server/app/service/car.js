const Service = require('egg').Service;
class CarService extends Service {
    async getCars(car) {
        //用username查询出该用户所有添加进购物车的商品的gid
        const data = await this.app.mysql.query(`select * from cartable where username like '%${car.username}%'`);
        var result =[];
        for(let i=0;i<data.length;i++){//根据商品的gid进行循环获取全部商品信息
            result.push(await this.app.mysql.query(`select * from goods where gid=${data[i].gid}`)) 
        }
        console.log({result})
        return {result,data};
    }
}
module.exports = CarService;