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
  //罗燕力2、管理员得到所有书籍
  router.get('/allbooks', controller.administrator.allbooks);
  router.get('/car', controller.car.getCar);//购物车
  router.post('/my', controller.my.getMy);//个人中心
  


  router.post('/search', controller.user.search);//查看是否有该用户
  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);



};

