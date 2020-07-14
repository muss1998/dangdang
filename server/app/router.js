'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  //罗燕力1、管理员登录 ruleForm: {pass: "",checkPass: "", name: ""}
  router.post('/administratorLogin', controller.administrator.administratorLogin); 
  //罗燕力2、管理员得到所有书籍
  router.get('/allbooks', controller.administrator.allbooks);
  
  router.post('/car', controller.car.getCar);//购物车
  router.post('/my', controller.my.getMy);//个人中心
  router.post('/mychgusern', controller.mychgkey.myChgUser);//个人中心改用户名
  router.post('/mychgkey', controller.mychgkey.myChgKey);//个人中心改密码


  
};

