// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdministrator = require('../../../app/controller/administrator');
import ExportCar = require('../../../app/controller/car');
import ExportDetail = require('../../../app/controller/detail');
import ExportHome = require('../../../app/controller/home');
import ExportMy = require('../../../app/controller/my');
import ExportTocar = require('../../../app/controller/tocar');

declare module 'egg' {
  interface IController {
    administrator: ExportAdministrator;
    car: ExportCar;
    detail: ExportDetail;
    home: ExportHome;
    my: ExportMy;
    tocar: ExportTocar;
  }
}
