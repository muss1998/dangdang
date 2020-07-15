// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAdministrator = require('../../../app/service/administrator');
import ExportCar = require('../../../app/service/car');
import ExportDetail = require('../../../app/service/detail');
import ExportMy = require('../../../app/service/my');
<<<<<<< HEAD
import ExportTocar = require('../../../app/service/tocar');
=======
import ExportMychgkey = require('../../../app/service/mychgkey');
>>>>>>> 957cdb03a9e421c3e3dabad0cfc37940ea7f440e
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    administrator: AutoInstanceType<typeof ExportAdministrator>;
    car: AutoInstanceType<typeof ExportCar>;
    detail: AutoInstanceType<typeof ExportDetail>;
    my: AutoInstanceType<typeof ExportMy>;
<<<<<<< HEAD
    tocar: AutoInstanceType<typeof ExportTocar>;
=======
    mychgkey: AutoInstanceType<typeof ExportMychgkey>;
>>>>>>> 957cdb03a9e421c3e3dabad0cfc37940ea7f440e
    user: AutoInstanceType<typeof ExportUser>;
  }
}
