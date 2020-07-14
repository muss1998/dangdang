// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
<<<<<<< HEAD
import ExportDetail = require('../../../app/controller/detail');
=======
import ExportAdministrator = require('../../../app/controller/administrator');
import ExportCar = require('../../../app/controller/car');
<<<<<<< HEAD
=======
>>>>>>> 0ee5c1d86c1defd6fb3723812d99f62b0e0913b4
import ExportHome = require('../../../app/controller/home');
>>>>>>> 20dc716ed8bc9a89640d9a7a82c02f247d162df8
import ExportMy = require('../../../app/controller/my');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
<<<<<<< HEAD
    detail: ExportDetail;
=======
    administrator: ExportAdministrator;
    car: ExportCar;
<<<<<<< HEAD
=======
>>>>>>> 0ee5c1d86c1defd6fb3723812d99f62b0e0913b4
    home: ExportHome;
>>>>>>> 20dc716ed8bc9a89640d9a7a82c02f247d162df8
    my: ExportMy;
    user: ExportUser;
  }
}
