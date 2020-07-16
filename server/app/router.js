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



  router.post('/car', controller.car.getCar); // 罗婧馨1、购物车
  router.post('/my', controller.my.getMy); //罗婧馨2、个人中心
  router.post('/mychgusern', controller.mychgkey.myChgUser); //罗婧馨3、个人中心改用户名
  router.post('/mychgkey', controller.mychgkey.myChgKey); //罗婧馨4、个人中心改密码
  router.post('/mychgimg', controller.mychgkey.myChgImg); //罗婧馨4、个人中心改密码
  router.post('/addorder', controller.mychgkey.addorder); //罗婧馨6、增加订单表
  router.post('/getcar', controller.mychgkey.getcar) //罗婧馨7、查购物车
  router.post('/deleteCar', controller.mychgkey.deleteCar) //罗婧馨8、删除购物车



  router.post('/search', controller.user.search); //查看是否有该用户
  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);


  //雷香

  // router.get('/', controller.home.index);
  //雷香1、商品详情
  router.get('/addDetail', controller.detail.addDetail);
  //雷香2、添加到购物车
  router.post('/tocar', controller.tocar.tocar);
  router.post('/tocar', controller.tocar.tocar); //添加到购物车
  router.post('/detailpl', controller.detail.detailpl); //添加评论
  router.post('/uploadImg', controller.detail.uploadImg); //上传图片到服务器并保存
  router.post('/showpl', controller.detail.showpl)


  //罗婧馨

  router.post('/order', controller.order.order); //订单结算界面




  //雷磊
  router.post('/search', controller.user.search); //查看是否有该用户
  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);


};