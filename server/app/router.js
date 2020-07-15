'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const {
    router,
    controller
  } = app;
  // router.get('/', controller.home.index);

  router.get('/addDetail', controller.detail.addDetail);//商品详情
  //罗燕力1、管理员登录 ruleForm: {pass: "",checkPass: "", name: ""}
  router.post('/administratorLogin', controller.administrator.administratorLogin); 
  //罗燕力2、管理员得到所有书籍 - 按条目数
  router.get('/allbooks', controller.administrator.allbooks);
  //罗燕力3、管理员添加书籍
  router.post('/addbooks', controller.administrator.addbooks);
  //罗燕力4、无条件得到所有商品
  router.get('/getallbooks', controller.administrator.getallbooks);
  //罗燕力5、管理员修改书籍信息
  router.post('/changebooks', controller.administrator.changebooks);
  //罗燕力6、管理员删除图书表
  router.get('/delbooks', controller.administrator.delbooks);
  //罗燕力7、管理员搜索图书
  router.get('/searchbooks', controller.administrator.searchbooks);


  //ljx
  router.get('/car', controller.car.getCar);//购物车
  router.post('/my', controller.my.getMy);//个人中心
  


  router.post('/search', controller.user.search);//查看是否有该用户
  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);



};

