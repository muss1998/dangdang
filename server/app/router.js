'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //罗燕力1、管理员登录 ruleForm: {pass: "",checkPass: "", name: ""}
  router.post('/administratorLogin', controller.administrator.administratorLogin); 
  //罗燕力2、管理员得到所有书籍
  router.get('/allbooks', controller.administrator.allbooks);

  
};
