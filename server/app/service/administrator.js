const Service = require('egg').Service;
class AdministratorService extends Service {
    //罗燕力1、-登录
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
    //罗燕力2、-首页得到所有商品
    async allbooks(pageNum, num) {
        if (pageNum == undefined) {
            pageNum = 7;
        }
        if (num == undefined) {
            num = 1;
        }
        var books = await this.app.mysql.query(`select * from goods limit ${pageNum*(num-1)},${pageNum}`);
        var countID = await this.app.mysql.query(`select count(gid) as totalNum from goods`)
        return {
            books: books,
            countID: countID[0].totalNum
        };
    }
    //罗燕力3、-管理员添加商品 addbooks
    async addbooks(book) {
        var data = await this.app.mysql.query(`insert into goods(goodsname,imgsrc,price,pjnumber,scnumber,keywords,author) values ('${book.goodsname}','${book.imgsrc}',${book.price},${book.pjnumber},${book.scnumber},'${book.keywords}','${book.author}')`);
        if (data.affectedRows!=0) {
            return {
                code: 1,
                info: "添加成功"
            }
        } else {
            return {
                code: 0,
                info: "添加失败"
            }
        }
    }
    //罗燕力4、-管理员无条件得到所有商品
    async getallbooks() {
        var books = await this.app.mysql.query(`select * from goods`);
        var countID = await this.app.mysql.query(`select count(gid) as totalNum from goods`)
        return {
            books: books,
            countID: countID[0].totalNum
        };
    }
    //罗燕力5、-管理员页面修改书籍信息
    async changebooks(books) {
        var obj = await this.app.mysql.query(`update goods set imgsrc='${books.imgsrc}',goodsname='${books.goodsname}',author='${books.author}',keywords='${books.keywords}',price=${books.price},price=${books.price},scnumber=${books.scnumber} where gid=${books.gid}`)
        return obj;
    }
    //罗燕力6、-管理员页面删除书籍
    async delbooks(gid) {
        var obj = await this.app.mysql.query(`delete from goods where gid = ${gid}`);
        if (obj.affectedRows!=0) {
            return {
                code: 1,
                info: "删除成功"
            }
        } else {
            return {
                code: 0,
                info: "删除失败"
            }
        }
    }
    //罗燕力7、-管理员页面搜索书籍
    async searchbooks(goodsname) {
        var obj = await this.app.mysql.query(`select * from goods where goodsname like "%${goodsname}%" or "${goodsname}%" or "%${goodsname}"`);
        return obj;
    }
}

module.exports = AdministratorService;