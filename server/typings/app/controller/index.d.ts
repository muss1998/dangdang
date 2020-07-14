// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdministrator = require('../../../app/controller/administrator');
import ExportCar = require('../../../app/controller/car');
import ExportHome = require('../../../app/controller/home');
import ExportMy = require('../../../app/controller/my');

declare module 'egg' {
  interface IController {
    administrator: ExportAdministrator;
    car: ExportCar;
    home: ExportHome;
    my: ExportMy;
  }
}
