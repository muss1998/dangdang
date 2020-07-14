// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
<<<<<<< HEAD
import ExportDetail = require('../../../app/controller/detail');
=======
import ExportAdministrator = require('../../../app/controller/administrator');
import ExportCar = require('../../../app/controller/car');
>>>>>>> 0ee5c1d86c1defd6fb3723812d99f62b0e0913b4
import ExportHome = require('../../../app/controller/home');
import ExportMy = require('../../../app/controller/my');

declare module 'egg' {
  interface IController {
<<<<<<< HEAD
    detail: ExportDetail;
=======
    administrator: ExportAdministrator;
    car: ExportCar;
>>>>>>> 0ee5c1d86c1defd6fb3723812d99f62b0e0913b4
    home: ExportHome;
    my: ExportMy;
  }
}
