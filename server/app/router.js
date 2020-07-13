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
  router.get('/car', controller.car.getCar);//购物车
  router.post('/my', controller.my.getMy);//个人中心

};