// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCar = require('../../../app/service/car');
import ExportMy = require('../../../app/service/my');

declare module 'egg' {
  interface IService {
    car: AutoInstanceType<typeof ExportCar>;
    my: AutoInstanceType<typeof ExportMy>;
  }
}
