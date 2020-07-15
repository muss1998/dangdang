// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdministrator = require('../../../app/controller/administrator');
import ExportCar = require('../../../app/controller/car');
import ExportDetail = require('../../../app/controller/detail');
import ExportMy = require('../../../app/controller/my');
import ExportTocar = require('../../../app/controller/tocar');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    administrator: ExportAdministrator;
    car: ExportCar;
    detail: ExportDetail;
    my: ExportMy;
    tocar: ExportTocar;
    user: ExportUser;
  }
}
