// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
<<<<<<< HEAD
import ExportDetail = require('../../../app/service/detail');

declare module 'egg' {
  interface IService {
    detail: AutoInstanceType<typeof ExportDetail>;
=======
import ExportAdministrator = require('../../../app/service/administrator');
import ExportCar = require('../../../app/service/car');
import ExportMy = require('../../../app/service/my');

declare module 'egg' {
  interface IService {
    administrator: AutoInstanceType<typeof ExportAdministrator>;
    car: AutoInstanceType<typeof ExportCar>;
    my: AutoInstanceType<typeof ExportMy>;
>>>>>>> 0ee5c1d86c1defd6fb3723812d99f62b0e0913b4
  }
}
