'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  router.get('/addDetail', controller.detail.addDetail);//商品详情
  router.get('/tocar', controller.tocar.tocar);//添加到购物车
  //罗燕力1、管理员登录 ruleForm: {pass: "",checkPass: "", name: ""}
  router.post('/administratorLogin', controller.administrator.administratorLogin); 
  //罗燕力2、管理员得到所有书籍
  router.get('/allbooks', controller.administrator.allbooks);
  router.get('/car', controller.car.getCar);//购物车
  
  router.post('/my', controller.my.getMy);//个人中心
  

};

