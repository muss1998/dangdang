// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCar = require('../../../app/controller/car');
import ExportHome = require('../../../app/controller/home');
import ExportMy = require('../../../app/controller/my');

declare module 'egg' {
  interface IController {
    car: ExportCar;
    home: ExportHome;
    my: ExportMy;
  }
}
