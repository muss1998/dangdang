const Service = require('egg').Service;
class AdministratorService extends Service {
    async administratorLogin(userinfo) {
        var data = await this.app.mysql.query(`select * from user where username = '${userinfo.name}' and password='${userinfo.pass}'`);
        if (data[0]) {
            this.ctx.session.administratorname = userinfo.name
            return {
                code: 1,
                info: "登录成功",
                imgsrc:data[0].imgsrc
            }
        } else {
            return {
                code: 0,
                info: "登录失败"
            }
        }
    }
    async allbooks() {
        var data = await this.app.mysql.query(`select * from goods`);
        return data
    }
}

module.exports = AdministratorService;