// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdministrator = require('../../../app/controller/administrator');
import ExportHome = require('../../../app/controller/home');

declare module 'egg' {
  interface IController {
    administrator: ExportAdministrator;
    home: ExportHome;
  }
}
