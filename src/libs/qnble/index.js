/*! ********************************************************
 * QNBle
 * @author huyongkang<huyongkang@yolanda.hk>
 * @date 2021-09-01T03:59:17.427Z
 * @version 1.1.0
 *********************************************************/

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r =
      c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
    d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === 'function' && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === 'number')
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      },
    };
  throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}
function __read(o, n) {
  var m = typeof Symbol === 'function' && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error: error };
  } finally {
    try {
      if (r && !r.done && (m = i['return'])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

var _a;

var QNBleTransferType;

(function (QNBleTransferType) {
  // ???????????????
  QNBleTransferType['BLE'] = 'ble'; // ??????

  QNBleTransferType['BROADCAST'] = 'broadcast';
})(QNBleTransferType || (QNBleTransferType = {}));

var QNBleAction;

(function (QNBleAction) {
  // ??????????????????????????????????????????action
  QNBleAction['NOT_SET'] = 'not_set'; // ??????

  QNBleAction['MEASURE'] = 'measure';
  QNBleAction['MEASURE_WEIGHT'] = 'measure_weight';
  QNBleAction['SET_WIFI'] = 'set_wifi'; //Mes????????????

  QNBleAction['MES_CALIBRATION'] = 'mes_calibration';
  QNBleAction['MES_REVIEW'] = 'mes_review';
  QNBleAction['MES_PARTIAL'] = 'mes_partial';
  QNBleAction['MES_MODULE_TEST'] = 'mes_module_test';
  QNBleAction['MES_MODEL_PRODUCT'] = 'mes_model_product';
  QNBleAction['MES_READ_SN'] = 'mes_read_sn';
  QNBleAction['MES_SLEEP'] = 'mes_sleep'; // SECTION ?????????
  // ????????????????????????

  QNBleAction['SP_SYNC_CURRENT_DATA'] = 'sp_sync_current_data'; // ??????????????????

  QNBleAction['SP_SYNC_HISTORY_DATA'] = 'sp_sync_history_data'; // !SECTION
  // ?????????
  // ????????????

  QNBleAction['FG_ADJUST_SETTING'] = 'fg_adjust_setting';
})(QNBleAction || (QNBleAction = {}));

var QNBleDeviceType;

(function (QNBleDeviceType) {
  QNBleDeviceType['NORMAL_BLE_SCALE'] = 'normal_ble_scale';
  QNBleDeviceType['OTM_BROADCAST_SCALE'] = 'otm_broadcast_scale';
  QNBleDeviceType['OTO_BROADCAST_SCALE'] = 'oto_broadcast_scale';
  QNBleDeviceType['WSP_DUAL_MODE_SCALE'] = 'wsp_dual_mode_scale';
  QNBleDeviceType['WSP_EIGHT_DUAL_MODE_SCALE'] = 'wsp_eight_dual_mode_scale'; // CP30B

  QNBleDeviceType['HEIGHTWEIGHT'] = 'heightWeight'; // CP30A ????????????????????????

  QNBleDeviceType['HEIGHTWEIGHT_SINGLE_BLE'] = 'heightWeightSingleBle'; // ?????????????????????

  QNBleDeviceType['HEIGHT_WEIGHT_SCALE'] = 'height_weight_scale'; // ?????????CP20A????????????

  QNBleDeviceType['SHARE_SCALE_CL'] = 'share_scale_cl'; // ?????????CP20A

  QNBleDeviceType['SHARE_SCALE'] = 'share_scale'; // ?????????

  QNBleDeviceType['FASCIA_GUN'] = 'fascia_gun'; // ?????????SP10A

  QNBleDeviceType['SPHYGMOMANOMETER'] = 'sphygmomanometer'; // ?????????

  QNBleDeviceType['THERMOMETER'] = 'thermometer'; // ?????????

  QNBleDeviceType['BLE_KITCHEN_SCALE'] = 'ble_kitchen_scale';
})(QNBleDeviceType || (QNBleDeviceType = {}));

var QNBleGender;

(function (QNBleGender) {
  QNBleGender[(QNBleGender['MALE'] = 1)] = 'MALE';
  QNBleGender[(QNBleGender['FEMALE'] = 0)] = 'FEMALE';
})(QNBleGender || (QNBleGender = {}));

var QNBleUnit;

(function (QNBleUnit) {
  QNBleUnit['KG'] = 'kg';
  QNBleUnit['LB'] = 'lb';
  QNBleUnit['JIN'] = 'jin';
  QNBleUnit['ST'] = 'ST'; // ???????????????

  QNBleUnit['MMHG'] = 'mmHg'; // ???????????????

  QNBleUnit['KPA'] = 'kPa'; // ???????????????

  QNBleUnit['G'] = 'g'; // ???????????????

  QNBleUnit['ML'] = 'ml'; // ???????????????

  QNBleUnit['LBOZ'] = 'lb:oz'; // ???????????????

  QNBleUnit['OZ'] = 'oz'; // ???????????????

  QNBleUnit['MILKML'] = 'milkml';
})(QNBleUnit || (QNBleUnit = {}));

var MesBehavior;

(function (MesBehavior) {
  MesBehavior['START_MODULE_TEST'] = 'startModuelTest';
  MesBehavior['STOP_MODULE_TEST'] = 'stopModuelTest';
  MesBehavior['START_CALIBRATION'] = 'startCalibration';
  MesBehavior['STOP_CALIBRATION'] = 'stopCalibration';
  MesBehavior['START_BACKHOE'] = 'startBackhoe';
  MesBehavior['STOP_BACKHOE'] = 'stopBackhoe';
  MesBehavior['START_PARTIAL'] = 'startPartial';
  MesBehavior['STOP_PARTIAL'] = 'stopPartial';
  MesBehavior['START_MODEL_ID'] = 'startModelId';
  MesBehavior['STOP_MODEL_ID'] = 'stopModelId';
  MesBehavior['START_READ_SN'] = 'startReadSn';
  MesBehavior['STOP_READ_SN'] = 'stopReadSn';
  MesBehavior['START_SLEEP'] = 'startSleep';
  MesBehavior['STOP_SLEEP'] = 'stopSleep';
})(MesBehavior || (MesBehavior = {})); //????????????

var MesCalibrationType;

(function (MesCalibrationType) {
  MesCalibrationType['ZONE'] = '0kg';
  MesCalibrationType['FIFTY'] = '50kg';
  MesCalibrationType['HUNDRED'] = '100kg';
  MesCalibrationType['HUNDRED_FIFTY'] = '150kg';
})(MesCalibrationType || (MesCalibrationType = {}));

var QNBleErrorType;

(function (QNBleErrorType) {
  QNBleErrorType['SUCCESS'] = 'SUCCESS';
  QNBleErrorType['UNKNOW_ERROR'] = 'UNKNOW_ERROR';
  QNBleErrorType['GET_BLE_STATE_FAILED'] = 'GET_BLE_STATE_FAILED';
  QNBleErrorType['OPEN_BLE_ADAPTER_FAILED'] = 'OPEN_BLE_ADAPTER_FAILED';
  QNBleErrorType['CLOSE_BLE_ADAPTER_FAILED'] = 'CLOSE_BLE_ADAPTER_FAILED';
  QNBleErrorType['BLE_NATIVE_ERROR'] = 'BLE_NATIVE_ERROR';
  QNBleErrorType['BLE_PROTOCOL_ERROR'] = 'BLE_PROTOCOL_ERROR';
  QNBleErrorType['INIT_FAILED'] = 'INIT_FAILED';
  QNBleErrorType['START_BLEDEVICE_DISCOVERY_FAILED'] = 'START_BLEDEVICE_DISCOVERY_FAILED';
  QNBleErrorType['STOP_BLEDEVICE_DISCOVERY_FAILED'] = 'STOP_BLEDEVICE_DISCOVERY_FAILED';
  QNBleErrorType['BLE_STATUS_DISABLED'] = 'BLE_STATUS_DISABLED';
  QNBleErrorType['ALREADY_CONNECTED'] = 'ALREADY_CONNECTED';
  QNBleErrorType['STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE'] =
    'STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE';
  QNBleErrorType['BLE_EVENT_LISTENER_NOT_SET'] = 'BLE_EVENT_LISTENER_NOT_SET';
  QNBleErrorType['BLE_INNER_ERROR'] = 'BLE_INNER_ERROR';
  QNBleErrorType['FETCH_SDK_INFO_FAILED'] = 'FETCH_SDK_INFO_FAILED';
  QNBleErrorType['WIFI_SSID_ERROR'] = 'WIFI_SSID_ERROR';
  QNBleErrorType['WIFI_PASSWORD_ERROR'] = 'WIFI_PASSWORD_ERROR';
  QNBleErrorType['SET_WIFI_FAILED'] = 'SET_WIFI_FAILED';
  QNBleErrorType['CREATE_CONNECTION_FAILED'] = 'CREATE_CONNECTION_FAILED';
  QNBleErrorType['CLOSE_CONNECTION_FAILED'] = 'CLOSE_CONNECTION_FAILED';
  QNBleErrorType['STOP_BLE_FAILED'] = 'STOP_BLE_FAILED';
  QNBleErrorType['GET_BLE_DEVICE_SERVICES_FAILED'] = 'GET_BLE_DEVICE_SERVICES_FAILED';
  QNBleErrorType['GET_BLE_DEVICE_CHARACTERISTICS_FAILED'] = 'GET_BLE_DEVICE_CHARACTERISTICS_FAILED';
  QNBleErrorType['SEND_MEASURE_DATA_FAILED'] = 'SEND_MEASURE_DATA_FAILED';
  QNBleErrorType['REGISTER_USER_FAILED'] = 'REGISTER_USER_FAILED';
  QNBleErrorType['VISIT_USER_FAILED'] = 'VISIT_USER_FAILED';
  QNBleErrorType['CREATE_BLE_SERVER_FAILED'] = 'CREATE_BLE_SERVER_FAILED';
  QNBleErrorType['PROTOCOL_PREPARE_FAILED'] = 'PROTOCOL_PREPARE_FAILED';
})(QNBleErrorType || (QNBleErrorType = {}));

var QNBleErrorDesc =
  ((_a = {}),
  (_a[QNBleErrorType.SUCCESS] = {
    code: QNBleErrorType.SUCCESS,
    desc: '??????',
  }),
  (_a[QNBleErrorType.UNKNOW_ERROR] = {
    code: QNBleErrorType.UNKNOW_ERROR,
    desc: '????????????',
  }),
  (_a[QNBleErrorType.GET_BLE_STATE_FAILED] = {
    code: QNBleErrorType.GET_BLE_STATE_FAILED,
    desc: '????????????????????????',
  }),
  (_a[QNBleErrorType.OPEN_BLE_ADAPTER_FAILED] = {
    code: QNBleErrorType.OPEN_BLE_ADAPTER_FAILED,
    desc: '???????????????????????????',
  }),
  (_a[QNBleErrorType.CLOSE_BLE_ADAPTER_FAILED] = {
    code: QNBleErrorType.CLOSE_BLE_ADAPTER_FAILED,
    desc: '???????????????????????????',
  }),
  (_a[QNBleErrorType.BLE_NATIVE_ERROR] = {
    code: QNBleErrorType.BLE_NATIVE_ERROR,
    desc: '??????????????????????????????????????????',
  }),
  (_a[QNBleErrorType.BLE_PROTOCOL_ERROR] = {
    code: QNBleErrorType.BLE_PROTOCOL_ERROR,
    desc: '????????????????????????',
  }),
  (_a[QNBleErrorType.INIT_FAILED] = {
    code: QNBleErrorType.INIT_FAILED,
    desc: '???????????????',
  }),
  (_a[QNBleErrorType.START_BLEDEVICE_DISCOVERY_FAILED] = {
    code: QNBleErrorType.START_BLEDEVICE_DISCOVERY_FAILED,
    desc: '????????????????????????',
  }),
  (_a[QNBleErrorType.STOP_BLEDEVICE_DISCOVERY_FAILED] = {
    code: QNBleErrorType.STOP_BLEDEVICE_DISCOVERY_FAILED,
    desc: '??????????????????????????????',
  }),
  (_a[QNBleErrorType.BLE_STATUS_DISABLED] = {
    code: QNBleErrorType.BLE_STATUS_DISABLED,
    desc: '?????????????????????????????????????????????????????????????????????',
  }),
  (_a[QNBleErrorType.ALREADY_CONNECTED] = {
    code: QNBleErrorType.ALREADY_CONNECTED,
    desc: '???????????????????????????????????????????????????????????????????????????????????????????????????',
  }),
  (_a[QNBleErrorType.STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE] = {
    code: QNBleErrorType.STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE,
    desc: '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????stop',
  }),
  (_a[QNBleErrorType.BLE_EVENT_LISTENER_NOT_SET] = {
    code: QNBleErrorType.BLE_EVENT_LISTENER_NOT_SET,
    desc: '???????????????????????????????????????????????????????????????',
  }),
  (_a[QNBleErrorType.BLE_INNER_ERROR] = {
    code: QNBleErrorType.BLE_INNER_ERROR,
    desc: '???????????????????????????????????? extra ??????',
  }),
  (_a[QNBleErrorType.FETCH_SDK_INFO_FAILED] = {
    code: QNBleErrorType.FETCH_SDK_INFO_FAILED,
    desc: '??????SDK?????????????????????????????????appid?????????????????????????????????????????????????????????????????????',
  }),
  (_a[QNBleErrorType.WIFI_SSID_ERROR] = {
    code: QNBleErrorType.WIFI_SSID_ERROR,
    desc: 'wifi???ssid????????????????????????????????????1?????????32',
  }),
  (_a[QNBleErrorType.SET_WIFI_FAILED] = {
    code: QNBleErrorType.SET_WIFI_FAILED,
    desc: '????????????',
  }),
  (_a[QNBleErrorType.WIFI_PASSWORD_ERROR] = {
    code: QNBleErrorType.WIFI_PASSWORD_ERROR,
    desc: 'wifi????????????????????????64',
  }),
  (_a[QNBleErrorType.CREATE_CONNECTION_FAILED] = {
    code: QNBleErrorType.CREATE_CONNECTION_FAILED,
    desc: '??????????????????',
  }),
  (_a[QNBleErrorType.CLOSE_CONNECTION_FAILED] = {
    code: QNBleErrorType.CLOSE_CONNECTION_FAILED,
    desc: '??????????????????',
  }),
  (_a[QNBleErrorType.STOP_BLE_FAILED] = {
    code: QNBleErrorType.STOP_BLE_FAILED,
    desc: '????????????????????????',
  }),
  (_a[QNBleErrorType.GET_BLE_DEVICE_SERVICES_FAILED] = {
    code: QNBleErrorType.GET_BLE_DEVICE_SERVICES_FAILED,
    desc: '??????????????????????????????',
  }),
  (_a[QNBleErrorType.GET_BLE_DEVICE_CHARACTERISTICS_FAILED] = {
    code: QNBleErrorType.GET_BLE_DEVICE_CHARACTERISTICS_FAILED,
    desc: '?????????????????????????????????',
  }),
  (_a[QNBleErrorType.SEND_MEASURE_DATA_FAILED] = {
    code: QNBleErrorType.SEND_MEASURE_DATA_FAILED,
    desc: '????????????????????????',
  }),
  (_a[QNBleErrorType.REGISTER_USER_FAILED] = {
    code: QNBleErrorType.REGISTER_USER_FAILED,
    desc: '??????????????????',
  }),
  (_a[QNBleErrorType.CREATE_BLE_SERVER_FAILED] = {
    code: QNBleErrorType.CREATE_BLE_SERVER_FAILED,
    desc: '??????????????????????????????',
  }),
  (_a[QNBleErrorType.PROTOCOL_PREPARE_FAILED] = {
    code: QNBleErrorType.PROTOCOL_PREPARE_FAILED,
    desc: '?????????????????????',
  }),
  _a); // ???????????????

var QNBleEventNames = [
  'bluetooth_enable_change',
  'start_discovery_device',
  'stop_discovery_device',
  'ble_device_found',
  'connected',
  'disconnected',
  'connect_overtime',
]; // ???????????????

var QNDeviceEventNames = [
  'get_device_info',
  'get_unsteady_weight',
  'get_scale_data',
  'start_fetch_scale_data',
  'fetch_scale_data_fail',
  'set_wifi_success',
  'register_user_success',
  'start_measure_fat',
  'start_measure_heart',
];

var consts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  get QNBleTransferType() {
    return QNBleTransferType;
  },
  get QNBleAction() {
    return QNBleAction;
  },
  get QNBleDeviceType() {
    return QNBleDeviceType;
  },
  get QNBleGender() {
    return QNBleGender;
  },
  get QNBleUnit() {
    return QNBleUnit;
  },
  get MesBehavior() {
    return MesBehavior;
  },
  get MesCalibrationType() {
    return MesCalibrationType;
  },
  get QNBleErrorType() {
    return QNBleErrorType;
  },
  QNBleErrorDesc: QNBleErrorDesc,
  QNBleEventNames: QNBleEventNames,
  QNDeviceEventNames: QNDeviceEventNames,
});

function hasOwnProperty(obj, prop) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/**
 * ??????????????????
 * @param {any} arg
 * @example
 * isType(1) === 'number'
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function isType(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
}
function number2hex(value) {
  var str = value.toString(16).toUpperCase();
  return ('00' + str).slice(str.length);
}
function array2hex(arr) {
  return arr
    .map(function (bit) {
      return number2hex(bit);
    })
    .join('');
}
function hex2Array(hexString) {
  var byteArray = [];

  for (var i = 0; i < hexString.length; i += 2) {
    var subString = hexString.substring(i, i + 2);
    var n = Number.parseInt(subString, 16);
    byteArray.push(n);
  }

  return byteArray;
}
/**
 * ????????????????????????
 * @param {number[]} arr - ?????????????????????????????? hex2Array(rawData) ??????
 */

function extractManufactureData(arr) {
  var manufacture = [];
  var lenSignal = 0;
  var typeSignal = 0;
  var values = [];

  for (var cursor = 0; cursor < arr.length; ) {
    // ??????
    lenSignal = arr[cursor]; // console.log('lenSignal', lenSignal);

    cursor += 1; // ??????

    typeSignal = arr[cursor]; // console.log('typeSignal', typeSignal);
    // ???,?????????lenSignal - 1??????????????????type?????????

    cursor += 1;
    values = arr.slice(cursor, cursor + lenSignal - 1); // console.log('values', values);

    cursor += lenSignal - 1;

    if (typeSignal === 0xff) {
      // ????????????????????????
      manufacture = values;
      break;
    }
  }

  return manufacture;
}
function splitArray(arr) {
  // ??????????????????16???bite?????????
  var list = [];
  var temp = null;
  arr.forEach(function (value) {
    if (temp == null) {
      temp = [];
      list.push(temp);
    }

    temp.push(value);

    if (temp.length === 16) {
      temp = null;
    }
  });
  return list;
}
function ab2hex(buffer) {
  return array2hex(__spread(new Uint8Array(buffer)));
}
function ab2Array(buffer) {
  var arr = [];
  new Uint8Array(buffer).forEach(function (it) {
    return arr.push(it);
  });
  return arr;
}
function formatArrayToHex(arr) {
  return arr
    .map(function (value) {
      return number2hex(value);
    })
    .join(' ');
}
function stringToByteArray(str) {
  // NOTE ??????charCodeAt??????????????????????????????0xFFFF?????????????????????
  return str.split('').map(function (item) {
    return item.charCodeAt(0);
  });
}
function byteArrayToString(arr) {
  return arr
    .map(function (n) {
      return String.fromCharCode(n);
    })
    .join('');
}
/**
 * ??????????????????
 */

function addChecksum(cmdData) {
  var checksum = cmdData.reduce(function (acc, next) {
    return acc + next;
  }, 0); // eslint-disable-next-line no-bitwise

  cmdData.push(checksum & 0xff);
  return cmdData;
} //?????????????????????

function calcAgeWithBirthday(birthday) {
  var time = new Date();
  var by = birthday.getFullYear();
  var bm = birthday.getMonth();
  var bd = birthday.getDate();
  var ty = time.getFullYear();
  var tm = time.getMonth();
  var td = birthday.getDate();
  var age = ty - by;

  if (tm < bm) {
    //?????????????????????-1
    age--;
  } else if (tm == bm && td < bd) {
    //????????????????????????
    age--;
  }

  return age;
}
/**
 * ????????? new Date(arg) ????????????Date????????????
 * ?????????????????????YYYY-MM-DD ????????????????????? YYYY/MM/DD ???????????????ios??????????????? -
 * @param {any} arg
 */

function getNewDateInstance(arg) {
  return new Date(typeof arg === 'string' ? arg.replace(/-/g, '/') : arg);
}
function formatTime(date, fmt) {
  if (fmt === void 0) {
    fmt = 'YYYY-MM-DD HH:mm:ss';
  }

  if (date.toString() === 'Invalid Date') {
    // console.warn('[formatTime] Invalid Date');
    return '';
  }

  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    // ??????
    'q+': Math.floor((date.getMonth() + 3) / 3),
  };
  var week = {
    0: '???',
    1: '???',
    2: '???',
    3: '???',
    4: '???',
    5: '???',
    6: '???',
  };
  var dateString = fmt;

  if (/(Y+)/.test(dateString)) {
    dateString = dateString.replace(
      RegExp.$1,
      ('' + date.getFullYear()).substr(4 - RegExp.$1.length)
    );
  }

  if (/(E+)/.test(dateString)) {
    // eslint-disable-next-line no-nested-ternary
    dateString = dateString.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '??????' : '???') : '') + week[date.getDay()]
    );
  } // ?????????

  if (/(S)/.test(dateString)) {
    dateString = dateString.replace(RegExp.$1, '' + date.getMilliseconds());
  }

  Object.keys(o).forEach(function (prop) {
    if (new RegExp('(' + prop + ')').test(dateString)) {
      var value = '' + o[prop];
      dateString = dateString.replace(RegExp.$1, ('00' + value).substr(value.length));
    }
  });
  return dateString;
}
function formatDateToString(d) {
  return formatTime(d, 'YYYY-MM-DD');
}
function formatDateFullToString(d) {
  return formatTime(d, 'YYYY-MM-DD hh:mm:ss');
}
function logTimeString() {
  return formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss-S');
}
function times(num, radio) {
  return Number(num.toFixed(radio));
} // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/naming-convention

function wxPromise(fn) {
  return function (obj) {
    if (obj === void 0) {
      obj = {};
    }

    return new Promise(function (resolve, reject) {
      Object.assign(obj, {
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        },
      });
      fn(obj);
    });
  };
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function timeoutPromise(overtime, data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(data);
    }, overtime);
  });
}
/**
 * ????????????8???????????????????????????????????????
 * @param {number} h
 * @param {number} l
 */

function decodeInteger(h, l) {
  // eslint-disable-next-line no-bitwise
  var d = (h << 8) + l;
  return d;
}
/**
 * ????????????user??????????????????gender??????
 * ??????????????????
 * 1??? ??????
 * 0?????????
 */

function sealGenderParam(gender) {
  if (['male', 1, QNBleGender.MALE].includes(gender)) {
    return 1;
  }

  return 0;
}
/**
 * ???onAaBbCc????????????aa-bb-cc
 * @param {string} str
 * @param {string} [symbol=-] ?????????
 * @param {boolean} [trimHeadKebab=false]
 */

function kebabCaseAndRemoveOn(str, symbol, trimHeadKebab) {
  if (symbol === void 0) {
    symbol = '_';
  }

  if (trimHeadKebab === void 0) {
    trimHeadKebab = true;
  }

  var str1 = str.replace(new RegExp('^on'), '');
  var res = str1.replace(/([A-Z])/g, function (letter) {
    return '' + (symbol + letter.toLowerCase());
  });
  return trimHeadKebab ? res.replace(new RegExp('^' + symbol), '') : res;
}
/**
 * ??????wifi????????????
 * 0??? rssi < -100
 * 1??? rssi [-100, -85) 1?????????
 * 2??? rssi [-85, -70) 2?????????
 * 3??? rssi [-70, -55) 3?????????
 * 4??? rssi >= -55 4????????????????????????
 * @param rssi - ????????????????????????
 */

function getWifiRssiLevel(rssi) {
  if (rssi < -100) {
    return 0;
  }

  if (rssi >= -100 && rssi < -85) {
    return 1;
  }

  if (rssi >= -85 && rssi < -70) {
    return 2;
  }

  if (rssi >= -70 && rssi < -55) {
    return 3;
  }

  if (rssi >= -55) {
    return 4;
  }
}
/**
 * ????????????????????????????????????
 */

function equal(o1, o2) {
  if (o1 === o2) {
    return true;
  }

  if (_typeof(o1) !== 'object' || _typeof(o2) !== 'object') {
    return false;
  }

  var o1Keys = Object.keys(o1);
  var o2Keys = Object.keys(o2);

  if (o1Keys.length !== o2Keys.length) {
    return false;
  }

  return o1Keys.every(function (key) {
    if (!o2Keys.includes(key)) {
      return false;
    } // @ts-ignore

    var o1Val = o1[key]; // @ts-ignore

    var o2Val = o2[key];
    return equal(o1Val, o2Val);
  });
}
var utils = {
  hasOwnProperty: hasOwnProperty,
  number2hex: number2hex,
  array2hex: array2hex,
  hex2Array: hex2Array,
  extractManufactureData: extractManufactureData,
  splitArray: splitArray,
  ab2hex: ab2hex,
  ab2Array: ab2Array,
  formatArrayToHex: formatArrayToHex,
  stringToByteArray: stringToByteArray,
  addChecksum: addChecksum,
  calcAgeWithBirthday: calcAgeWithBirthday,
  formatTime: formatTime,
  formatDateToString: formatDateToString,
  formatDateFullToString: formatDateFullToString,
  logTimeString: logTimeString,
  wxPromise: wxPromise,
  timeoutPromise: timeoutPromise,
  decodeInteger: decodeInteger,
  sealGenderParam: sealGenderParam,
  kebabCaseAndRemoveOn: kebabCaseAndRemoveOn,
  equal: equal,
};

var QNBleCommonExtends =
  /** @class */
  (function () {
    function QNBleCommonExtends(_a) {
      var _b = _a === void 0 ? {} : _a,
        config = _b.config,
        operation = _b.operation;

      this.setConfig(config);
      this.setOperation(operation);
    }
    /**
     * ??????config
     * @param {QNBleTypings.QNBleConfig} config
     * @returns {void}
     */

    QNBleCommonExtends.prototype.setConfig = function (config) {
      if (config) {
        this.config = config;
      }
    };
    /**
     * ???????????????
     * @param {QNBleTypings.QNBleOperation} operation
     * @returns {void}
     */

    QNBleCommonExtends.prototype.setOperation = function (operation) {
      if (operation) {
        this.operation = operation;
      }
    };

    QNBleCommonExtends.prototype.log = function () {
      var _a;

      var params = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
      }

      var timeString = logTimeString();

      if (this.config.logger) {
        (_a = this.config.logger).log.apply(_a, __spread([timeString], params));
      } else {
        // eslint-disable-next-line no-console
        console.log.apply(console, __spread([timeString], params));
      }
    };

    return QNBleCommonExtends;
  })();

var QNBleNativeCommonExtends =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeCommonExtends, _super);

    function QNBleNativeCommonExtends(params) {
      if (params === void 0) {
        params = {};
      }

      var _this = _super.call(this) || this; // ?????????????????????http????????????
      // ?????????????????????????????????????????????????????????api????????????????????????????????????false???????????? sendHttpRequest ??????

      _this.useDefaultHttpRequest = true; // ????????????

      _this.listener = {
        onNativeBluetoothEnableChange: function onNativeBluetoothEnableChange(available) {
          return available;
        },
        onNativeStartDiscoveryDevice: function onNativeStartDiscoveryDevice() {},
        onNativeStopDiscoveryDevice: function onNativeStopDiscoveryDevice() {},
        onNativeBleDeviceFound: function onNativeBleDeviceFound(bleDevice) {
          return bleDevice;
        },
        onNativeConnected: function onNativeConnected(deviceId) {
          return deviceId;
        },
        onNativeDisconnected: function onNativeDisconnected(deviceId) {
          return deviceId;
        },
        onNativeConnectOverTime: function onNativeConnectOverTime(deviceId) {
          return deviceId;
        },
        onNativeCharacteristicValueChange: function onNativeCharacteristicValueChange(payload) {
          return payload;
        },
        onDeviceConnectStateChange: function onDeviceConnectStateChange() {},
        onError: function onError(err) {
          return err;
        },
      };

      _this.setConfig(params.config);

      _this.setOperation(params.operation);

      _this.setListener(params.listener);

      return _this;
    }
    /**
     * ??????????????????????????????
     * @param {Partial<QNBleTypings.QNBleNativeEventListener>} listener
     */

    QNBleNativeCommonExtends.prototype.setListener = function (listener) {
      if (listener) {
        Object.assign(this.listener, listener);
      }
    };

    return QNBleNativeCommonExtends;
  })(QNBleCommonExtends);

var QNBleNative =
  /** @class */
  (function (_super) {
    __extends(QNBleNative, _super);

    function QNBleNative() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }

    return QNBleNative;
  })(QNBleNativeCommonExtends);

/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.4.5';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = [...b64ch];
const b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => (tab[c] = i));
  return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom =
  typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it, fn = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src) =>
  src.replace(/[+\/]/g, (m0) => (m0 == '+' ? '-' : '_')).replace(/=+$/m, '');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
  // console.log('polyfilled');
  let u32,
    c0,
    c1,
    c2,
    asc = '';
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if (
      (c0 = bin.charCodeAt(i++)) > 255 ||
      (c1 = bin.charCodeAt(i++)) > 255 ||
      (c2 = bin.charCodeAt(i++)) > 255
    )
      throw new TypeError('invalid character found');
    u32 = (c0 << 16) | (c1 << 8) | c2;
    asc +=
      b64chs[(u32 >> 18) & 63] +
      b64chs[(u32 >> 12) & 63] +
      b64chs[(u32 >> 6) & 63] +
      b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + '==='.substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa
  ? (bin) => btoa(bin)
  : _hasBuffer
  ? (bin) => Buffer.from(bin, 'binary').toString('base64')
  : btoaPolyfill;
const _fromUint8Array = _hasBuffer
  ? (u8a) => Buffer.from(u8a).toString('base64')
  : (u8a) => {
      // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
      const maxargs = 0x1000;
      let strs = [];
      for (let i = 0, l = u8a.length; i < l; i += maxargs) {
        strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
      }
      return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 ??5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) =>
  urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (src) => unescape(encodeURIComponent(src));
//
const _encode = _hasBuffer
  ? (s) => Buffer.from(s, 'utf8').toString('base64')
  : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => (urlsafe ? _mkUriSafe(_encode(src)) : _encode(src));
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 ??5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (src) => decodeURIComponent(escape(src));
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
  // console.log('polyfilled');
  asc = asc.replace(/\s+/g, '');
  if (!b64re.test(asc)) throw new TypeError('malformed base64.');
  asc += '=='.slice(2 - (asc.length & 3));
  let u24,
    bin = '',
    r1,
    r2;
  for (let i = 0; i < asc.length; ) {
    u24 =
      (b64tab[asc.charAt(i++)] << 18) |
      (b64tab[asc.charAt(i++)] << 12) |
      ((r1 = b64tab[asc.charAt(i++)]) << 6) |
      (r2 = b64tab[asc.charAt(i++)]);
    bin +=
      r1 === 64
        ? _fromCC((u24 >> 16) & 255)
        : r2 === 64
        ? _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255)
        : _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255);
  }
  return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob
  ? (asc) => atob(_tidyB64(asc))
  : _hasBuffer
  ? (asc) => Buffer.from(asc, 'base64').toString('binary')
  : atobPolyfill;
const _decode = _hasBuffer
  ? (a) => Buffer.from(a, 'base64').toString('utf8')
  : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => (m0 == '-' ? '+' : '/')));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = _hasBuffer
  ? (a) => _U8Afrom(Buffer.from(_unURI(a), 'base64'))
  : (a) => _U8Afrom(_atob(_unURI(a)), (c) => c.charCodeAt(0));
const _noEnum = (v) => {
  return {
    value: v,
    enumerable: false,
    writable: true,
    configurable: true,
  };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
  const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
  _add('fromBase64', function () {
    return decode(this);
  });
  _add('toBase64', function (urlsafe) {
    return encode(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return encode(this, true);
  });
  _add('toBase64URL', function () {
    return encode(this, true);
  });
  _add('toUint8Array', function () {
    return toUint8Array(this);
  });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
  const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
  _add('toBase64', function (urlsafe) {
    return fromUint8Array(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return fromUint8Array(this, true);
  });
  _add('toBase64URL', function () {
    return fromUint8Array(this, true);
  });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
  extendString();
  extendUint8Array();
};
const gBase64 = {
  version: version,
  VERSION: VERSION,
  atob: _atob,
  atobPolyfill: atobPolyfill,
  btoa: _btoa,
  btoaPolyfill: btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode: encode,
  encodeURI: encodeURI,
  encodeURL: encodeURI,
  utob: utob,
  btou: btou,
  decode: decode,
  fromUint8Array: fromUint8Array,
  toUint8Array: toUint8Array,
  extendString: extendString,
  extendUint8Array: extendUint8Array,
  extendBuiltins: extendBuiltins,
};

var QNBleError =
  /** @class */
  (function (_super) {
    __extends(QNBleError, _super); // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

    function QNBleError(errorType, extraData) {
      var _this = _super.call(this) || this;

      if (errorType instanceof QNBleError) {
        return errorType;
      } // @ts-ignore

      var detail = QNBleErrorDesc[errorType] || QNBleErrorDesc[QNBleErrorType.UNKNOW_ERROR];
      _this.detail = detail; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

      _this.extra = extraData; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

      _this.message = JSON.stringify({
        detail: detail,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        extra: extraData instanceof Error ? extraData.message : extraData,
      });
      return _this;
    }

    return QNBleError;
  })(Error);

var QNScaleBiz =
  /** @class */
  (function (_super) {
    __extends(QNScaleBiz, _super);

    function QNScaleBiz(hostProtocol) {
      var _this = _super.call(this, hostProtocol) || this;
      /**
       * <bodyShape-personGoal>: <method>
       */

      _this.algorithmMap = {
        '1-1': 2,
        '1-2': 2,
        '1-3': 2,
        '2-1': 2,
        '2-2': 4,
        '2-3': 4,
        '2-4': 2,
        '2-5': 2,
        '3-1': 2,
        '3-2': 14,
        '3-3': 14,
        '3-6': 4,
        '3-7': 4,
        '4-1': 2,
        '4-2': 2,
        '4-3': 2,
      };
      _this.weightScale = 100;
      _this.bleNative = hostProtocol.bleNative;
      _this.bleDevice = hostProtocol.bleDevice;
      _this.listener = hostProtocol.listener;

      _this.prepareDeviceProp();

      return _this;
    }
    /**
     * ??????SDK???????????????????????????????????????????????????????????????????????????
     */

    QNScaleBiz.prototype.prepareDeviceProp = function () {
      var _this = this;

      var _a; // ??????

      var method = 0; // ??????

      var bodyIndexFlag = 0; // ????????????????????????

      var extraFlag = 0;

      var _b = ((_a = this.operation) === null || _a === void 0 ? void 0 : _a.user) || {},
        bodyShape = _b.bodyShape,
        personGoal = _b.personGoal;

      if (bodyShape && personGoal) {
        method = this.algorithmMap[bodyShape + '-' + personGoal];

        if (method === 14) {
          method = 4;
          this.operation.user.isSport = true;
        }
      }

      if (this.config.useSdk && this.config.sdkConfig) {
        // ????????????SDK????????????????????????SDK???????????????
        var sdkConfig = this.config.sdkConfig;

        if (sdkConfig.business_models && sdkConfig.business_models.length > 0) {
          var modelId_1 = this.bleDevice.modelId;
          sdkConfig.business_models.some(function (model) {
            _this.log('???????????????', model, '??????', method);

            if (model.internal_model === modelId_1) {
              // ???????????????????????????????????????
              if (method === 0) {
                method = model.method;
              }

              bodyIndexFlag = model.body_index_flag;
              extraFlag = model.added_index_flag;
              return true;
            }

            return false;
          });
        } // ??????????????????????????????????????????????????????

        if (method === 0) {
          method = sdkConfig.business_info.default_method;
        }

        if (bodyIndexFlag === 0) {
          bodyIndexFlag = sdkConfig.business_info.default_index_flag;
        }

        if (extraFlag === 0) {
          extraFlag = sdkConfig.business_info.default_added_flag;
        }
      }

      this.sdkObj = {
        method: method,
        bodyIndexFlag: bodyIndexFlag,
        extraFlag: extraFlag,
      };
      this.log('?????????SDK', this.sdkObj);
      return this.sdkObj;
    };
    /**
     * ?????????????????????
     * @param {TypedScaleData} scaleData ????????????????????????
     */

    QNScaleBiz.prototype.fetchScaleData = function (scaleData) {
      var _this = this;

      var _a, _b;

      if (!this.sdkObj) {
        throw new Error('???????????? prepareDeviceProp ??????');
      }

      var age =
        this.operation.user.age ||
        calcAgeWithBirthday(getNewDateInstance(this.operation.user.birthday));
      var gender = sealGenderParam(this.operation.user.gender);
      var bodyParamsObject = {
        Body_Height: scaleData.height || this.operation.user.height,
        User_Age: age,
        User_Gender: gender,
        Person_Type: 0,
      };

      if (this.operation.user.isSport) {
        // ???????????????????????????
        bodyParamsObject.Person_Type = 1;
      }

      if (this.operation.user.bodyShape && this.operation.user.personGoal) {
        // ???????????????????????????????????????
        bodyParamsObject.Person_Body_Shape = this.operation.user.bodyShape;
        bodyParamsObject.Person_Goal = this.operation.user.personGoal;
      }

      var scaleParam = {
        mac: scaleData.mac,
        scale_weight: scaleData.weight,
        scale_resistance: scaleData.resistance50,
        scale_resistance500: scaleData.resistance500,
        heart_rate: scaleData.heartRate,
      }; // ????????????????????????

      if (scaleData.resistance20_trunk) {
        scaleParam.resistance20_left_arm = scaleData.resistance20_left_arm;
        scaleParam.resistance20_left_leg = scaleData.resistance20_left_leg;
        scaleParam.resistance20_right_arm = scaleData.resistance20_right_arm;
        scaleParam.resistance20_right_leg = scaleData.resistance20_right_leg;
        scaleParam.resistance20_trunk = scaleData.resistance20_trunk;
        scaleParam.resistance100_left_arm = scaleData.resistance100_left_arm;
        scaleParam.resistance100_left_leg = scaleData.resistance100_left_leg;
        scaleParam.resistance100_right_arm = scaleData.resistance100_right_arm;
        scaleParam.resistance100_right_leg = scaleData.resistance100_right_leg;
        scaleParam.resistance100_trunk = scaleData.resistance100_trunk;
      }

      var bodyParamString = JSON.stringify(bodyParamsObject);
      var scaleParamString = JSON.stringify(scaleParam);
      this.lastMeasurementTime = new Date();
      var params = {
        app_id: this.config.appId,
        app_type: this.config.appType,
        body_param: bodyParamString,
        scale_param: scaleParamString,
        local_name: this.bleDevice.name,
        improve_flag: scaleData.hasResistance,
        manufacturer: this.bleDevice.modelId,
        // ????????????????????????
        simple: 1,
        // ??????????????????
        on_flag: 1,
        timestamp: this.lastMeasurementTime.getTime(),
        sdk_flag: 0,
      };

      if (this.operation.user.birthday) {
        params.birthday = this.operation.user.birthday;
      }

      if (this.config.useHerbalife) {
        // ??????????????????????????????
        params.calc_type = 10;
        params.version = this.operation.user.isSport ? 4 : 2;
      }

      if (this.config.useSdk) {
        params.sdk_flag = 1;
      }

      this.log('??????????????????', params);
      (_b = (_a = this.listener).onStartFetchScaleData) === null || _b === void 0
        ? void 0
        : _b.call(_a);
      return this.bleNative
        .sendHttpRequest({
          data: params,
          method: 'POST',
          url: this.config.algorithmUrl,
        })
        .then(function (data) {
          var _a, _b, _c, _d;

          if (data.code !== '200') {
            _this.log('????????????????????????', data);

            var err = new QNBleError(QNBleErrorType.SEND_MEASURE_DATA_FAILED, data);
            (_b = (_a = _this.listener).onFetchScaleDataFail) === null || _b === void 0
              ? void 0
              : _b.call(_a, err);
            throw err;
          }

          var measureData;

          if (scaleData.resistance20_trunk) {
            // ?????????
            measureData = _this.prepareEightWspMeasureData(data.resultData);
          } else {
            measureData = _this.prepareData(data.resultData);
          } // ????????????????????????????????????????????????

          if (scaleData.height) {
            measureData.stature = scaleData.height;
          }

          (_d = (_c = _this.listener).onGetScaleData) === null || _d === void 0
            ? void 0
            : _d.call(_c, {
                response: data.resultData,
                measure: measureData,
                scaleData: scaleData,
              });
          return measureData;
        })
        ['catch'](function (error) {
          var _a, _b;

          var err = new QNBleError(QNBleErrorType.SEND_MEASURE_DATA_FAILED, error);
          (_b = (_a = _this.listener).onFetchScaleDataFail) === null || _b === void 0
            ? void 0
            : _b.call(_a, err);
          throw err;
        });
    };

    QNScaleBiz.prototype.makeMeasures = function (data, isWsp, isEightWsp) {
      var measure = {};
      var flag = this.sdkObj.bodyIndexFlag;
      var useSdk = this.config.useSdk;
      var measureProps = [
        {
          prop: 'user',
          _if: true,
          value: this.operation.user,
        },
        {
          prop: 'device',
          _if: true,
          value: this.bleDevice,
        },
        {
          prop: 'time',
          _if: true,
          value: isWsp ? data.time : this.lastMeasurementTime,
        },
        {
          prop: 'score',
          _if: true,
          value: Number.parseFloat(data.score.toFixed(1)),
        },
        {
          prop: 'weight',
          _if: true,
          value: Number.parseFloat(data.weight.toFixed(2)),
        },
        {
          prop: 'bmi',
          _if: true,
          value: Number.parseFloat(data.bmi.toFixed(1)),
        },
        {
          prop: 'bodyfat',
          _if: true,
          value: Number.parseFloat(data.bodyfat.toFixed(1)),
        },
        {
          prop: 'heartRate',
          _if: true,
          value: function value() {
            if (isWsp) {
              return data.heartRate || 0;
            }

            return data.heart_rate ? Number.parseInt(data.heart_rate.toFixed(0), 10) : 0;
          },
        },
        {
          prop: 'subfat',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 4) & 0x01) === 1;
            }

            return data.subfat_flag;
          },
          value: Number.parseFloat(data.subfat.toFixed(1)),
        },
        {
          prop: 'visfat',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 5) & 0x01) === 1;
            }

            return data.visfat_flag;
          },
          value: Number.parseFloat(data.visfat.toFixed(0)),
        },
        {
          prop: 'water',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 6) & 0x01) === 1;
            }

            return data.water_flag;
          },
          value: Number.parseFloat(data.water.toFixed(1)),
        },
        {
          prop: 'muscle',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 7) & 0x01) === 1;
            }

            return data.muscle_flag;
          },
          value: Number.parseFloat(data.muscle.toFixed(1)),
        },
        {
          prop: 'bone',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 8) & 0x01) === 1;
            }

            return data.bone_flag;
          },
          value: Number.parseFloat((data.bone / 10).toFixed(2)),
        },
        {
          prop: 'bmr',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 9) & 0x01) === 1;
            }

            return data.bmr_flag;
          },
          value: Number.parseFloat((data.bmr * 10).toFixed(0)),
        },
        {
          prop: 'bodyShape',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 10) & 0x01) === 1;
            }

            return data.body_shape_flag;
          },
          value: function value() {
            if (isWsp) {
              return data.bodyShape;
            }

            return data.body_shape;
          },
        },
        {
          prop: 'protein',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 11) & 0x01) === 1;
            }

            return data.protein_flag;
          },
          value: Number.parseFloat(data.protein.toFixed(1)),
        },
        {
          prop: 'lbm',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 12) & 0x01) === 1;
            }

            return data.fat_free_weight_flag;
          },
          value: function value() {
            if (isWsp) {
              return Number.parseFloat(data.lbm.toFixed(2));
            }

            return Number.parseFloat(data.fat_free_weight.toFixed(2));
          },
        },
        {
          prop: 'muscleMass',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 13) & 0x01) === 1;
            }

            return data.sinew_flag;
          },
          value: function value() {
            if (isWsp) {
              // eslint-disable-next-line max-len
              return Number.parseFloat(data.muscleMass.toFixed(2));
            }

            return Number.parseFloat(data.sinew.toFixed(2));
          },
        },
        {
          prop: 'bodyAge',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 14) & 0x01) === 1;
            }

            return data.bodyage_flag;
          },
          value: function value() {
            if (isWsp) {
              return data.bodyAge;
            }

            return data.bodyage;
          },
        },
        {
          prop: 'heartIndex',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 17) & 0x01) === 1;
            }

            return data.cardiac_index_flag;
          },
          value: function value() {
            if (isWsp) {
              return Number.parseFloat(data.heartIndex.toFixed(1)) || 0;
            }

            return Number.parseFloat(data.cardiac_index.toFixed(1)) || 0;
          },
        },
      ];
      measureProps.forEach(function (item) {
        var _a; // this.log('makeMeasures:prop', item.prop);
        // eslint-disable-next-line @typescript-eslint/naming-convention

        var _if = typeof item._if === 'function' ? item._if() : item._if;

        if (_if) {
          var value = typeof item.value === 'function' ? item.value() : item.value;
          Object.assign(measure, ((_a = {}), (_a[item.prop] = value), _a));
        }
      });
      return measure;
    };

    QNScaleBiz.prototype.makeEigthMeasures = function (data) {
      var measure = {};
      var measureProps = [
        {
          prop: 'user',
          _if: true,
          value: this.operation.user,
        },
        {
          prop: 'device',
          _if: true,
          value: this.bleDevice,
        },
        {
          prop: 'time',
          _if: true,
          value: data.time || this.lastMeasurementTime,
        },
        {
          prop: 'score',
          _if: true,
          value: Number.parseFloat(data.score.toFixed(1)),
        },
        {
          prop: 'weight',
          _if: true,
          value: Number.parseFloat(data.weight.toFixed(2)),
        },
        {
          prop: 'bmi',
          _if: true,
          value: Number.parseFloat(data.bmi.toFixed(1)),
        },
        {
          prop: 'bodyfat',
          _if: true,
          value: Number.parseFloat(data.bodyfat.toFixed(1)),
        },
        {
          prop: 'heartRate',
          _if: true,
          value: function value() {
            return data.heartRate || 0;
          },
        },
        {
          prop: 'subfat',
          _if: true,
          value: Number.parseFloat(data.subfat.toFixed(1)),
        },
        {
          prop: 'visfat',
          _if: true,
          value: Number.parseFloat(data.visfat.toFixed(0)),
        },
        {
          prop: 'water',
          _if: true,
          value: Number.parseFloat(data.water.toFixed(1)),
        },
        {
          prop: 'muscle',
          _if: true,
          value: Number.parseFloat(data.muscle.toFixed(1)),
        },
        {
          prop: 'bone',
          _if: true,
          value: Number.parseFloat((data.bone / 10).toFixed(2)),
        },
        {
          prop: 'bmr',
          _if: true,
          value: Number.parseFloat((data.bmr * 10).toFixed(0)),
        },
        {
          prop: 'bodyShape',
          _if: true,
          value: function value() {
            return data.body_shape;
          },
        },
        {
          prop: 'protein',
          _if: true,
          value: Number.parseFloat(data.protein.toFixed(1)),
        },
        {
          prop: 'lbm',
          _if: true,
          value: function value() {
            return Number.parseFloat(data.fat_free_weight.toFixed(2));
          },
        },
        {
          prop: 'muscleMass',
          _if: true,
          value: function value() {
            return Number.parseFloat(data.sinew.toFixed(2));
          },
        },
        {
          prop: 'bodyAge',
          _if: true,
          value: function value() {
            return data.bodyage;
          },
        },
        {
          prop: 'heartIndex',
          _if: true,
          value: function value() {
            return data.heartIndex || 0;
          },
        },
        {
          prop: 'muscleRh',
          _if: function _if() {
            return data.muscle_rh;
          },
          value: function value() {
            return Number.parseFloat(data.muscle_rh.toFixed(1)) || 0;
          },
        },
        {
          prop: 'muscleLh',
          _if: function _if() {
            return data.muscle_lh;
          },
          value: function value() {
            return Number.parseFloat(data.muscle_lh.toFixed(1)) || 0;
          },
        },
        {
          prop: 'muscleT',
          _if: function _if() {
            return data.muscle_t;
          },
          value: function value() {
            return Number.parseFloat(data.muscle_t.toFixed(1)) || 0;
          },
        },
        {
          prop: 'muscleRf',
          _if: function _if() {
            return data.muscle_rf;
          },
          value: function value() {
            return Number.parseFloat(data.muscle_rf.toFixed(1)) || 0;
          },
        },
        {
          prop: 'muscleLf',
          _if: function _if() {
            return data.muscle_lf;
          },
          value: function value() {
            return Number.parseFloat(data.muscle_lf.toFixed(1)) || 0;
          },
        },
        {
          prop: 'fatRh',
          _if: function _if() {
            return data.fat_fh || data.fat_rh;
          },
          value: function value() {
            // ?????????????????????????????????????????????
            if (data.fat_fh) {
              return Number.parseFloat(data.fat_fh.toFixed(1)) || 0;
            }

            return Number.parseFloat(data.fat_rh.toFixed(1)) || 0;
          },
        },
        {
          prop: 'fatLh',
          _if: function _if() {
            return data.fat_lh;
          },
          value: function value() {
            return Number.parseFloat(data.fat_lh.toFixed(1)) || 0;
          },
        },
        {
          prop: 'fatT',
          _if: function _if() {
            return data.fat_t;
          },
          value: function value() {
            return Number.parseFloat(data.fat_t.toFixed(1)) || 0;
          },
        },
        {
          prop: 'fatRf',
          _if: function _if() {
            return data.fat_rf;
          },
          value: function value() {
            return Number.parseFloat(data.fat_rf.toFixed(1)) || 0;
          },
        },
        {
          prop: 'fatLf',
          _if: function _if() {
            return data.fat_lf;
          },
          value: function value() {
            return Number.parseFloat(data.fat_lf.toFixed(1)) || 0;
          },
        },
      ];
      measureProps.forEach(function (item) {
        var _a; // eslint-disable-next-line @typescript-eslint/naming-convention

        var _if = typeof item._if === 'function' ? item._if() : item._if;

        if (_if) {
          var value = typeof item.value === 'function' ? item.value() : item.value;
          Object.assign(measure, ((_a = {}), (_a[item.prop] = value), _a));
        }
      });
      return measure;
    };

    QNScaleBiz.prototype.prepareData = function (data) {
      if (!this.sdkObj) {
        throw new Error('???????????? prepareDeviceProp ??????');
      }

      return this.makeMeasures(data);
    };

    QNScaleBiz.prototype.prepareWspMeasureData = function (data) {
      if (!this.sdkObj) {
        throw new Error('???????????? prepareDeviceProp ??????');
      }

      return this.makeMeasures(data, true);
    };

    QNScaleBiz.prototype.prepareEightWspMeasureData = function (data) {
      if (!this.sdkObj) {
        throw new Error('???????????? prepareDeviceProp ??????');
      }

      return this.makeEigthMeasures(data);
    };
    /**
     * ??????????????????
     * @param {number} a1
     * @param {number} b1
     */

    QNScaleBiz.prototype.decodeWeight = function (a1, b1) {
      var d = decodeInteger(a1, b1);
      var weight = d / this.weightScale;

      while (weight > 250) {
        weight /= 10;
      }

      return weight;
    };
    /**
     * ??????????????????
     * @param {number} a1
     * @param {number} b1
     */

    QNScaleBiz.prototype.decodeHeight = function (a1, b1) {
      var d = decodeInteger(a1, b1);
      return d / 10;
    };

    QNScaleBiz.prototype.fakeRequest = function (weight) {
      var _this = this;

      var scaleData = {
        weight: weight,
        resistance50: 500,
        resistance500: 500,
        hasResistance: 1,
      };
      return this.fetchScaleData(scaleData).then(function (res) {
        _this.log('fakeRequest????????????', res);

        return res;
      });
    };

    return QNScaleBiz;
  })(QNBleCommonExtends);

var QNBleProtocol =
  /** @class */
  (function (_super) {
    __extends(QNBleProtocol, _super);

    function QNBleProtocol(params) {
      var _this = _super.call(this, params) || this; // serviceId

      _this.UUID_IBT_SERVICE = ''; // characteristicId_read

      _this.UUID_IBT_READ = ''; // characteristicId_write

      _this.UUID_IBT_WRITE = '';
      _this.actionFlows = new Array();
      _this.eventManager = params.eventManager;

      _this.setBleNative(params.bleNative);

      _this.setListener(params.listener);

      _this.setBleDevice(params.bleDevice);

      return _this;
    }
    /**
     * ???????????????????????????
     * @param {QNBleNative} native ?????????????????????
     * @returns {void}
     */

    QNBleProtocol.prototype.setBleNative = function (_native) {
      this.bleNative = _native || this.bleNative;
    };
    /**
     * ?????????????????????
     * @param {QNBleDevice} bleDevice
     * @returns {void}
     */

    QNBleProtocol.prototype.setBleDevice = function (bleDevice) {
      this.bleDevice = bleDevice || this.bleDevice;
    };
    /**
     * ????????????
     * @param {*} height ?????????
     * @param {*} lower ?????????
     * @returns
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleProtocol.prototype.decodeWeight = function (height, lower) {
      // eslint-disable-next-line no-bitwise
      var num = (height << 8) + lower;
      return times(num, 2);
    };
    /**
     * @param {Partial<QNBleTypings.QNDeviceEventListener>} listener
     */

    QNBleProtocol.prototype.setListener = function (listener) {
      // /**
      //  * @deprecated
      //  */
      // this.listener = {} as T;
      // // eslint-disable-next-line no-restricted-syntax,guard-for-in
      // for (const method in listener) {
      //   // eslint-disable-next-line max-len
      //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      //   (this.listener as any)[method] = new Proxy(
      //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //     (listener as any)[method],
      //     new QNEventHandler(method, this.eventManager),
      //   );
      // }
      this.listener = listener;
    };

    Object.defineProperty(QNBleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNBleProtocol.prototype, 'characteristicReadId', {
      get: function get() {
        return this.UUID_IBT_READ;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNBleProtocol.prototype, 'characteristicWriteId', {
      get: function get() {
        return this.UUID_IBT_WRITE;
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * ???????????????????????????
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 1:
              services = _a.sent();
              this.log('???????????????????????????', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(deviceId, this.serviceId),
              ];

            case 2:
              _a.sent();

              this.log('???????????????????????????????????????');
              return [
                2,
                /*return*/
                this.bleNative.enableNotify(deviceId, this.serviceId, this.characteristicReadId),
              ];
          }
        });
      });
    };
    /**
     * ?????????????????????
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.onGetData = function (payload) {
      var hexArray = formatArrayToHex(payload.data);
      this.log(
        '[\u6536\u5230] serviceId: ' +
          payload.serviceId +
          '; characteristicId: ' +
          payload.characteristicId +
          '; data: ' +
          hexArray
      );
      return this.decode(payload);
    };
    /**
     * ????????????
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.decode = function (payload) {
      return Promise.reject(new Error('decode?????????????????????????????????'));
    };
    /**
     * ?????????????????????
     * @param {Object} payload
     * @param {number[]} payload.cmdData
     * @param {string} [payload.serviceId]
     * @param {string} [payload.characteristicId] ?????????????????????
     * @param {boolean} [payload.needSum=true] ??????????????????????????????????????????
     */

    QNBleProtocol.prototype.writeData = function (_a) {
      var cmdData = _a.cmdData,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId,
        _b = _a.needSum,
        needSum = _b === void 0 ? true : _b;
      var data = needSum ? addChecksum(cmdData) : cmdData; // eslint-disable-next-line @typescript-eslint/naming-convention

      var _serviceId = serviceId || this.serviceId; // eslint-disable-next-line @typescript-eslint/naming-convention

      var _characteristicId = characteristicId || this.characteristicWriteId;

      this.log(
        '[\u5199\u5165] serviceId: ' +
          _serviceId +
          '; characteristicId: ' +
          _characteristicId +
          '; data: ' +
          formatArrayToHex(data)
      );
      return this.bleNative.writeData(this.bleDevice.deviceId, _serviceId, _characteristicId, data);
    };

    QNBleProtocol.prototype.writeCmd = function (_a) {
      var header = _a.header,
        cmd = _a.cmd,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId;
      return this.writeData({
        serviceId: serviceId,
        characteristicId: characteristicId,
        cmdData: __spread([header, cmd.length + 3], cmd),
      });
    };
    /**
     * ????????????????????????????????????????????????????????????
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleProtocol.prototype.close = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.bleServer) return [3 /*break*/, 2];
              this.log('close???????????????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.stopAdvertising(this.bleServer),
              ];

            case 1:
              _a.sent();

              return [3 /*break*/, 4];

            case 2:
              return [
                4,
                /*yield*/
                this.bleNative.closeBleConnection(this.bleDevice),
              ];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.buildAdvertisingData = function (data) {
      throw new Error('buildAdvertisingData?????????????????????????????????');
    };
    /**
     * ??????????????????
     * @param {Uint8Array} data
     */

    QNBleProtocol.prototype.doAdvertising = function (data) {
      return __awaiter(this, void 0, void 0, function () {
        var cmdData, hexData, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              cmdData = this.buildAdvertisingData(data);
              hexData = array2hex(cmdData);

              if (this.currentAdvertis === hexData) {
                this.log('????????????????????????????????????');
                return [
                  2,
                  /*return*/
                  undefined,
                ];
              }

              if (this.currentAdvertis) {
                this.log('????????????????????????????????????????????????????????????');
              }

              this.currentAdvertis = hexData;
              if (!this.bleServer) return [3 /*break*/, 2];
              this.log('?????????????????????????????????????????????', this.bleServer);
              return [
                4,
                /*yield*/
                this.bleNative.stopAdvertising(this.bleServer),
              ];

            case 1:
              _b.sent();

              return [3 /*break*/, 4];

            case 2:
              _a = this;
              return [
                4,
                /*yield*/
                this.bleNative.createBleServer(),
              ];

            case 3:
              _a.bleServer = _b.sent();
              this.log('??????????????????????????????');
              _b.label = 4;

            case 4:
              return [
                2,
                /*return*/
                this.bleNative.doAdvertising(this.bleServer, cmdData),
              ];
          }
        });
      });
    };

    return QNBleProtocol;
  })(QNBleCommonExtends);
/**
 * ?????????????????????????????????
 */

var QNBleActionFlow =
  /** @class */
  (function () {
    function QNBleActionFlow(protocol) {
      this.bleNative = protocol.bleNative;
      this.bleDevice = protocol.bleDevice;
      this.listener = protocol.listener;
      this.operation = protocol.operation;
      this.protocol = protocol;
    }

    QNBleActionFlow.prototype.accept = function (action) {
      if (this.acceptActions.indexOf(action) >= 0) {
        this.action = action;
        return true;
      } else {
        return false;
      }
    };
    /**
     * ????????????
     * @param param0
     */

    QNBleActionFlow.prototype.writeData = function (_a) {
      var cmdData = _a.cmdData,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId,
        _b = _a.needSum,
        needSum = _b === void 0 ? true : _b;
      return this.protocol.writeData({
        cmdData: cmdData,
        serviceId: serviceId,
        characteristicId: characteristicId,
        needSum: needSum,
      });
    };

    QNBleActionFlow.prototype.writeCmd = function (serviceUUID, writeUUID, header, byteList) {
      return this.writeData({
        serviceId: serviceUUID,
        characteristicId: writeUUID,
        cmdData: __spread([header, byteList.length + 3], byteList),
      });
    };

    QNBleActionFlow.prototype.log = function () {
      var _a;

      var objs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
      }

      (_a = this.bleNative).log.apply(_a, __spread(objs));
    };
    /**
     * ????????????
     * @param {*} height ?????????
     * @param {*} lower ?????????
     * @returns
     */

    QNBleActionFlow.prototype.decodeWeight = function (height, lower) {
      var num = (height << 8) + lower;
      return times(num / 100, 2);
    };

    return QNBleActionFlow;
  })();

var QNBleBaseScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(QNBleBaseScaleProtocol, _super);

    function QNBleBaseScaleProtocol() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * ?????????????????????
     */

    QNBleBaseScaleProtocol.prototype.instanceScaleBiz = function () {
      this.scaleBizImp = new QNScaleBiz(this);
    };

    return QNBleBaseScaleProtocol;
  })(QNBleProtocol);

function getDeviceTarget(nativeDevice) {
  var bleName = nativeDevice.bluetoothName;
  /**
   * 1: ?????????
   * 2: ????????????
   */

  if (bleName === 'QN-HS' && nativeDevice.manufacturer.length >= 14) {
    return 1;
  }

  if (/^K12H/.test(bleName)) {
    return 2;
  }

  return 0;
}

function HSSyncTime() {
  var d = Math.floor(Date.now() / 1000);
  return [d & 0xff, (d >> 8) & 0xff, (d >> 16) & 0xff, (d >> 24) & 0xff];
}

function buildCmd(cmd, deviceType) {
  var data = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    data[_i - 2] = arguments[_i];
  }

  var cmdData = __spread([cmd, data.length + 4, deviceType], data); // writeData?????????????????????????????????

  return cmdData;
}

var HeightWeightScaleProfile =
  /** @class */
  (function () {
    function HeightWeightScaleProfile() {
      this.defaultAction = QNBleAction.SET_WIFI;
      this.type = QNBleDeviceType.HEIGHT_WEIGHT_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    HeightWeightScaleProfile.prototype.isTargetDevice = function (nativeDevice) {
      return [1, 2].includes(getDeviceTarget(nativeDevice));
    };

    HeightWeightScaleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var deviceTarget = getDeviceTarget(nativeDevice);
      var targetDevice = {
        modelId: '0004',
        isSupportWifi: true,
        isScreenOn: true,
      };

      if (deviceTarget === 1) {
        var manufacturer = nativeDevice.manufacturer; // ????????????????????????mes????????????mes????????????mac?????????????????????, ??????26??????????????????mes

        var length_1 = manufacturer.length - 2;
        var macs = manufacturer.slice(-7, -1);

        if (length_1 > 26) {
          macs.reverse();
        }

        var sns = [
          number2hex(manufacturer[4]),
          number2hex(manufacturer[5]),
          number2hex(manufacturer[6]),
        ];
        Object.assign(targetDevice, {
          mac: macs.join(':'),
          sn: sns.join(''),
        });
      } else if (deviceTarget === 2) {
        var bleName = nativeDevice.bluetoothName;
        var sn = bleName.slice(-6);
        Object.assign(targetDevice, {
          mac: '',
          sn: sn,
        });
      }

      return targetDevice;
    };

    return HeightWeightScaleProfile;
  })();

var HeightWeightScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(HeightWeightScaleProtocol, _super);

    function HeightWeightScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000ABF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000ABF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000ABF2-0000-1000-8000-00805F9B34FB'; // ???????????????????????????

      _this.lastWeightTime = 0; // ?????????????????????????????????

      _this.currentCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(HeightWeightScaleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(HeightWeightScaleProtocol.prototype, 'characteristicReadId', {
      get: function get() {
        return this.UUID_IBT_READ;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(HeightWeightScaleProtocol.prototype, 'characteristicWriteId', {
      get: function get() {
        return this.UUID_IBT_WRITE;
      },
      enumerable: false,
      configurable: true,
    });

    HeightWeightScaleProtocol.prototype.prepare = function () {
      var _this = this;

      this.instanceScaleBiz();
      console.log('prepare:height-weight', this.operation);
      var deviceId = this.bleDevice.deviceId;
      return this.bleNative
        .findService(deviceId)
        .then(function (services) {
          _this.log('???????????????????????????', services); // ???????????????????????????

          services.some(function (service) {
            if (service.characteristicId === _this.UUID_IBT_SERVICE) {
              return true;
            }

            return false;
          });

          _this.log('deviceId', deviceId, 'serviceId', _this.serviceId);

          return timeoutPromise(100).then(function () {
            return _this.bleNative.findBleDeviceCharacteristics(deviceId, _this.serviceId);
          });
        })
        .then(function () {
          _this.log('?????????????????????'); // ???????????????

          return _this.bleNative.enableNotify(
            deviceId,
            _this.serviceId,
            _this.characteristicReadId
          );
        })
        ['catch'](function (err) {
          _this.log('prepare??????', err);

          throw err;
        });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    HeightWeightScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      return __awaiter(this, void 0, void 0, function () {
        var data, scaleType, _j, height, weight, fatEnable, timeData, cmd;

        return __generator(this, function (_k) {
          switch (_k.label) {
            case 0:
              data = payload.data;
              scaleType = data[2];
              _j = data[0];

              switch (_j) {
                case 0x10:
                  return [3 /*break*/, 1];

                case 0x12:
                  return [3 /*break*/, 10];

                case 0x14:
                  return [3 /*break*/, 12];

                case 0x61:
                  return [3 /*break*/, 16];

                case 0x63:
                  return [3 /*break*/, 18];

                case 0x65:
                  return [3 /*break*/, 23];

                case 0x67:
                  return [3 /*break*/, 25];

                case 0x69:
                  return [3 /*break*/, 29];

                case 0x6b:
                  return [3 /*break*/, 31];

                case 0x6f:
                  return [3 /*break*/, 36];

                case 0x71:
                  return [3 /*break*/, 38];

                case 0x73:
                  return [3 /*break*/, 43];

                case 0x74:
                  return [3 /*break*/, 44];
              }

              return [3 /*break*/, 47];

            case 1:
              height = this.scaleBizImp.decodeHeight(data[11], data[12]);
              weight = this.scaleBizImp.decodeWeight(data[3], data[4]);
              this.log('?????????0x10??????', height, weight);
              if (!(data[5] === 0)) return [3 /*break*/, 2]; // ?????????????????????

              (_b = (_a = this.listener).onGetUnsteadyWeight) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    weight: weight,
                  });
              return [3 /*break*/, 9];

            case 2:
              if (!(data[5] === 1)) return [3 /*break*/, 4]; // ??????????????????

              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, height, data),
              ];

            case 3:
              // ??????????????????
              _k.sent();

              return [3 /*break*/, 9];

            case 4:
              if (!(data[5] === 3)) return [3 /*break*/, 5]; // ??????????????????

              this.lastWeightTime = height === 0 ? 0 : new Date().getTime();
              (_d = (_c = this.listener).onGetUnsteadyHeight) === null || _d === void 0
                ? void 0
                : _d.call(_c, {
                    height: height,
                  });
              return [3 /*break*/, 9];

            case 5:
              if (!(data[5] === 4)) return [3 /*break*/, 8]; // ??????????????????

              (_f = (_e = this.listener).onMeasureHeightEnd) === null || _f === void 0
                ? void 0
                : _f.call(_e, {
                    weight: weight,
                    height: height,
                  });
              fatEnable = data[data.length - 2];
              if (!!fatEnable) return [3 /*break*/, 7];
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, height, data),
              ];

            case 6:
              _k.sent();

              _k.label = 7;

            case 7:
              return [3 /*break*/, 9];

            case 8:
              if (data[5] === 5);

              _k.label = 9;

            case 9:
              return [3 /*break*/, 48];

            case 10:
              this.log('?????????0x12??????');
              this.lastWeightTime = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x13, 0x9, scaleType, 0x01, 0, 0, 0, 0],
                }),
              ];

            case 11:
              _k.sent();

              return [3 /*break*/, 48];

            case 12:
              this.log('?????????0x14??????');
              if (!(this.operation.action === QNBleAction.SET_WIFI)) return [3 /*break*/, 14]; // ?????????????????????

              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(),
              ];

            case 13:
              // ?????????????????????
              _k.sent();

              return [3 /*break*/, 48];

            case 14:
              timeData = HSSyncTime();
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x20,
                    0x8,
                    scaleType,
                    timeData[0],
                    timeData[1],
                    timeData[2],
                    timeData[3],
                  ],
                }),
              ];

            case 15:
              _k.sent();

              return [3 /*break*/, 48];

            case 16:
              this.log('?????????0x61??????'); // ???????????????????????????
              // ????????????SSID??????

              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 17:
              _k.sent();

              return [3 /*break*/, 48];

            case 18:
              this.log('?????????0x63??????');
              if (!(this.currentCmdNo < this.ssidCmdData.length)) return [3 /*break*/, 20]; // ssid???????????????

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 19:
              // ssid???????????????
              _k.sent();

              return [3 /*break*/, 22];

            case 20:
              // ssid??????????????????????????????????????????wifi??????
              this.currentCmdNo = 0;
              this.log('?????????????????? WIFI?????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 21:
              _k.sent();

              _k.label = 22;

            case 22:
              return [3 /*break*/, 48];

            case 23:
              this.log('?????????0x65??????');
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 24:
              _k.sent();

              return [3 /*break*/, 48];

            case 25:
              this.log('?????????0x67??????');
              if (!(this.currentCmdNo < this.pwdCmdData.length)) return [3 /*break*/, 27]; // wifi?????????????????????

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 26:
              // wifi?????????????????????
              _k.sent();

              return [3 /*break*/, 28];

            case 27:
              // wifi?????????????????????????????????
              this.currentCmdNo = 0;
              _k.label = 28;

            case 28:
              return [3 /*break*/, 48];

            case 29:
              this.log('?????????0x69??????');
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 30:
              _k.sent();

              return [3 /*break*/, 48];

            case 31:
              this.log('?????????0x6B??????');
              if (!(this.currentCmdNo < this.dataServerUrlData.length)) return [3 /*break*/, 33]; // ???????????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 32:
              // ???????????????URL???????????????
              _k.sent();

              return [3 /*break*/, 35];

            case 33:
              // ???????????????URL??????????????????????????????????????????OTA?????????URL
              this.currentCmdNo = 0;
              this.log('?????????????????? OTA????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 34:
              _k.sent();

              _k.label = 35;

            case 35:
              return [3 /*break*/, 48];

            case 36:
              this.log('?????????0x6F??????');
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 37:
              _k.sent();

              return [3 /*break*/, 48];

            case 38:
              this.log('?????????0x71??????');
              if (!(this.currentCmdNo < this.otaServerUrlData.length)) return [3 /*break*/, 40]; // OTA?????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 39:
              // OTA?????????URL???????????????
              _k.sent();

              return [3 /*break*/, 42];

            case 40:
              // OTA?????????URL??????????????????????????????????????????????????????
              this.currentCmdNo = 0;
              cmd = this.encryptKeyCmdData;
              this.log('????????????????????????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: __spread([0x72, 0x10, 0x01], cmd),
                }),
              ];

            case 41:
              _k.sent();

              _k.label = 42;

            case 42:
              return [3 /*break*/, 48];

            case 43: {
              this.log('?????????0x73??????'); // ????????????????????????
              // ??????????????????

              (_h = (_g = this.listener).onSetWifiSuccess) === null || _h === void 0
                ? void 0
                : _h.call(_g);
              return [3 /*break*/, 48];
            }

            case 44:
              this.log('?????????0x74??????'); // ???????????????????????????

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x75, 0x04, 1],
                }),
              ];

            case 45:
              // ???????????????????????????
              _k.sent();

              this.currentCmdNo = 0;
              this.log('?????????????????? ??????????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 46:
              _k.sent(); // this.deviceEventListener
              //   && this.deviceEventListener.onSetWifiSuccess
              //   && this.deviceEventListener.onSetWifiSuccess();

              return [3 /*break*/, 48];

            case 47:
              return [3 /*break*/, 48];

            case 48:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    HeightWeightScaleProtocol.prototype.doPrepareSetWifi = function () {
      var _this = this;

      var _a = this.operation,
        _b = _a.wifiSsid,
        wifiSsid = _b === void 0 ? '' : _b,
        _c = _a.wifiPwd,
        wifiPwd = _c === void 0 ? '' : _c,
        _d = _a.dataServerUrl,
        dataServerUrl = _d === void 0 ? 'http://wifi.yolanda.hk:80/wifi_api/aios?code=' : _d,
        _e = _a.otaServerUrl,
        otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e,
        _f = _a.encryptKey,
        encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f;
      this.log('wifiSsid', wifiSsid, 'wifiPwd', wifiPwd);

      if (wifiSsid.length > 32) {
        return Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR));
      }

      if (wifiPwd.length > 64) {
        return Promise.reject(new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR));
      } // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

      var ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
      var pwdByteArray = stringToByteArray(wifiPwd);
      var dataServerUrlByteArray = stringToByteArray(dataServerUrl);
      var otaServerUrlByteArray = stringToByteArray(otaServerUrl);
      this.ssidCmdData = splitArray(ssidByteArray);
      this.pwdCmdData = splitArray(pwdByteArray);
      this.dataServerUrlData = splitArray(dataServerUrlByteArray);
      this.otaServerUrlData = splitArray(otaServerUrlByteArray);
      this.encryptKeyCmdData = stringToByteArray(encryptKey); // ?????????????????????

      this.currentCmdNo = 0;
      return Promise.resolve().then(function () {
        _this.log('??????wifi?????????????????????wifi ?????????????????? SSID ??????');

        return _this.writeData({
          cmdData: [
            0x60,
            0x04, // ??????????????????
            _this.ssidCmdData.length,
          ],
        });
      });
    };

    HeightWeightScaleProtocol.prototype.sendWifiSsid = function () {
      this.log('ssidCmdData??????', this.ssidCmdData, 'currentCmdNo', this.currentCmdNo);
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log('\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E');
      return this.writeData({
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log('\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 PWD \u6570\u636E');
      return this.writeData({
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 DATA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 OTA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.dispatchSteadyData = function (weight, height, data) {
      return __awaiter(this, void 0, void 0, function () {
        var scaleType, sendCmd, testTime, hasResistance, resistance50, resistance500, scaleData;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              scaleType = data[2];
              sendCmd = buildCmd(0x1f, scaleType, 0x10);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: sendCmd,
                }),
              ];

            case 1:
              _a.sent();

              testTime = new Date().getTime() - this.lastWeightTime;
              hasResistance = Number(testTime > 4000);
              resistance50 = decodeInteger(data[6], data[7]);
              resistance500 = decodeInteger(data[8], data[9]);
              scaleData = {
                weight: weight,
                height: height,
                resistance50: resistance50,
                resistance500: resistance500,
                hasResistance: hasResistance,
              };
              this.log('????????????', scaleData);
              return [
                2,
                /*return*/
                this.scaleBizImp.fetchScaleData(scaleData),
              ];
          }
        });
      });
    };

    HeightWeightScaleProtocol.bleProfile = new HeightWeightScaleProfile();
    return HeightWeightScaleProtocol;
  })(QNBleBaseScaleProtocol);

var SECOND_2000_YEAR = 946656000;
/**
 * ??????????????????
 * @param {number} scaleType
 */

function isHeartRateScale(scaleType) {
  return scaleType === 0x21;
}

function buildCmd$1(cmd, deviceType) {
  var data = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    data[_i - 2] = arguments[_i];
  }

  var cmdData = __spread([cmd, data.length + 4, deviceType], data); // writeData?????????????????????????????????
  // return addChecksum(cmdData);

  return cmdData;
}

var NormalBleScalebleProfile =
  /** @class */
  (function () {
    function NormalBleScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.NORMAL_BLE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    NormalBleScalebleProfile.prototype.isTargetDevice = function (nativeDevice) {
      var bleName = nativeDevice.bluetoothName;

      if (
        bleName === 'QN-Scale' ||
        bleName === 'QN-Scale1' ||
        bleName === 'ZT-Scale1' || // ?????????????????????????????????????????????
        // ??????hilink????????????????????????Hi-??????
        /^Hi-/.test(bleName)
      ) {
        return nativeDevice.manufacturer.length < 19;
      }

      return false;
    };

    NormalBleScalebleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;

      if (manufacturer.length < 13) {
        return {};
      }

      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      return {
        isScreenOn: manufacturer[5] !== 1,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return NormalBleScalebleProfile;
  })();

var NormalBleScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(NormalBleScaleProtocol, _super);

    function NormalBleScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFE0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFE1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFE3-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_SERVICES_1 = '0000FFF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ_1 = '0000FFF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE_1 = '0000FFF2-0000-1000-8000-00805F9B34FB';
      _this.hasReceived = false;
      _this.lastWeightTime = 0;
      _this.isHoltk = false;
      return _this;
    }

    Object.defineProperty(NormalBleScaleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_SERVICES_1 : this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(NormalBleScaleProtocol.prototype, 'characteristicReadId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_READ_1 : this.UUID_IBT_READ;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(NormalBleScaleProtocol.prototype, 'characteristicWriteId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_WRITE_1 : this.UUID_IBT_WRITE;
      },
      enumerable: false,
      configurable: true,
    });

    NormalBleScaleProtocol.prototype.prepare = function () {
      var _this = this; // ???????????????

      this.instanceScaleBiz();
      var deviceId = this.bleDevice.deviceId;
      console.log('prepare:normal', this.operation);
      return this.bleNative
        .findService(deviceId)
        .then(function (services) {
          _this.log('???????????????????????????', services); // ???????????????????????????

          services.some(function (service) {
            if (service === _this.UUID_IBT_SERVICES_1) {
              _this.isHoltk = true;
              return true;
            }

            return false;
          });

          _this.log('deviceId', deviceId, 'serviceId', _this.serviceId);

          return timeoutPromise(100).then(function () {
            return _this.bleNative.findBleDeviceCharacteristics(deviceId, _this.serviceId);
          });
        })
        .then(function () {
          _this.log('?????????????????????'); // ???????????????

          return _this.bleNative
            .enableNotify(deviceId, _this.serviceId, _this.characteristicReadId)
            ['catch'](function (err) {
              // ??????????????????????????????hilink??????????????????????????????serviceId
              // ?????????????????????????????????service???uuid??????
              if (_this.bleNative.name === 'QNBleNativeHuaWeiHilink') {
                _this.isHoltk = true;
                return _this.bleNative.enableNotify(
                  deviceId,
                  _this.serviceId,
                  _this.characteristicReadId
                );
              }

              throw err;
            });
        })
        ['catch'](function (err) {
          _this.log('prepare??????', err);

          throw err;
        });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    NormalBleScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d;

      return __awaiter(this, void 0, void 0, function () {
        var data, scaleType, _e, isSupportJin, isSupportSt, unitByte, weight, differ, timeData, i;

        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              data = payload.data;
              scaleType = data[2];
              _e = data[0];

              switch (_e) {
                case 0x12:
                  return [3 /*break*/, 1];

                case 0x10:
                  return [3 /*break*/, 3];

                case 0x14:
                  return [3 /*break*/, 11];
              }

              return [3 /*break*/, 13];

            case 1:
              this.scaleBizImp.weightScale = (data[10] & 0x01) === 1 ? 100 : 10;
              this.lastWeightTime = 0;
              isSupportJin = ((data[10] >> 1) & 3) > 0;
              isSupportSt = ((data[10] >> 1) & 3) === 2;
              unitByte = 1;

              switch (this.operation.unit) {
                case QNBleUnit.LB:
                  unitByte = 2;
                  break;

                case QNBleUnit.JIN:
                  unitByte = isSupportJin ? 4 : 1;
                  break;

                case QNBleUnit.ST:
                  unitByte = isSupportSt ? 8 : 2;
                  break;
              }

              (_b = (_a = this.listener).onGetDeviceInfo) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      fwVersion: data[9],
                      bleVersion: data[11],
                    },
                  });
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$1(0x13, scaleType, unitByte, 0x10, 0x00, 0x00, 0x00),
                }),
              ];

            case 2:
              _f.sent();

              return [3 /*break*/, 14];

            case 3:
              weight = this.scaleBizImp.decodeWeight(data[3], data[4]);
              if (!(data[5] === 0)) return [3 /*break*/, 4];
              this.log('??????????????????', weight);
              this.lastWeightTime = weight === 0 ? 0 : new Date().getTime();
              (_d = (_c = this.listener).onGetUnsteadyWeight) === null || _d === void 0
                ? void 0
                : _d.call(_c, {
                    weight: weight,
                  }); // ????????????????????????????????????

              this.hasReceived = false;
              return [3 /*break*/, 10];

            case 4:
              if (!(data[5] === 1)) return [3 /*break*/, 8];
              if (!isHeartRateScale(scaleType)) return [3 /*break*/, 5];
              return [3 /*break*/, 7];

            case 5:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 6:
              _f.sent();

              _f.label = 7;

            case 7:
              return [3 /*break*/, 10];

            case 8:
              if (!(data[5] === 2)) return [3 /*break*/, 10];
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 9:
              _f.sent();

              _f.label = 10;

            case 10:
              return [3 /*break*/, 14];

            case 11:
              if (!this.isHoltk) {
                return [
                  2,
                  /*return*/
                ];
              }

              differ = Date.now() / 1000 - SECOND_2000_YEAR;
              timeData = [];

              for (i = 0; i < 4; i += 1) {
                timeData.push(differ >> (i * 8));
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$1(
                    0x20,
                    scaleType,
                    timeData[0],
                    timeData[1],
                    timeData[2],
                    timeData[3]
                  ),
                }),
              ];

            case 12:
              _f.sent();

              return [3 /*break*/, 14];

            case 13:
              return [3 /*break*/, 14];

            case 14:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.prototype.dispatchSteadyData = function (weight, data) {
      return __awaiter(this, void 0, void 0, function () {
        var scaleType, sendCmd, testTime, hasResistance, resistance50, resistance500, scaleData;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              scaleType = data[2];
              sendCmd = buildCmd$1(0x1f, scaleType, 0x10);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: sendCmd,
                }),
              ];

            case 1:
              _a.sent();

              if (this.hasReceived) {
                // ???????????????????????????????????????
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.hasReceived = true;
              testTime = new Date().getTime() - this.lastWeightTime;
              hasResistance = Number(testTime > 4000);
              resistance50 = decodeInteger(data[6], data[7]);
              resistance500 = decodeInteger(data[8], data[9]);
              scaleData = {
                weight: weight,
                resistance50: resistance50,
                resistance500: resistance500,
                hasResistance: hasResistance,
              };

              if (data[5] === 2) {
                Object.assign(scaleData, {
                  heartRate: data[10],
                });
              }

              this.log('????????????', scaleData);
              return [
                2,
                /*return*/
                this.scaleBizImp.fetchScaleData(scaleData),
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.bleProfile = new NormalBleScalebleProfile();
    return NormalBleScaleProtocol;
  })(QNBleBaseScaleProtocol);

var OneToMultiBroadcastScaleProfile =
  /** @class */
  (function () {
    function OneToMultiBroadcastScaleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.OTM_BROADCAST_SCALE;
      this.transferType = QNBleTransferType.BROADCAST;
    }

    OneToMultiBroadcastScaleProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-S3';
    };

    OneToMultiBroadcastScaleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[2]),
        number2hex(manufacturer[3]),
        number2hex(manufacturer[4]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
      ];
      return {
        isScreenOn: true,
        modelId: number2hex(manufacturer[16]) + number2hex(manufacturer[15]),
        mac: macs.join(':'),
      };
    };

    return OneToMultiBroadcastScaleProfile;
  })();

var OneToMultiBroadcastScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(OneToMultiBroadcastScaleProtocol, _super);

    function OneToMultiBroadcastScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.measureCount = 0;
      return _this;
    }

    OneToMultiBroadcastScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          // ???????????????
          this.instanceScaleBiz();
          data = this.bleDevice.manufacturer;
          return [
            2,
            /*return*/
            this.decode({
              data: data,
            }),
          ];
        });
      });
    };
    /**
     * @override
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    OneToMultiBroadcastScaleProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data, weight, status, isSteady;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              data = payload.data;
              weight = Number.parseFloat(
                this.scaleBizImp.decodeWeight(data[10], data[9]).toFixed(2)
              );
              status = data[8];
              isSteady = (status & 0x1) === 1;
              if (!!isSteady) return [3 /*break*/, 1];
              (_b = (_a = this.listener).onGetUnsteadyWeight) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    weight: weight,
                  });
              return [3 /*break*/, 3];

            case 1:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 2:
              _c.sent();

              _c.label = 3;

            case 3:
              return [
                2,
                /*return*/
                this.doAdvertising(data),
              ];
          }
        });
      });
    };

    OneToMultiBroadcastScaleProtocol.prototype.buildAdvertisingData = function (data) {
      var mac1 = data[2];
      var mac2 = data[3];
      var mac3 = data[4];
      var mac4 = data[5];
      var mac5 = data[6];
      var mac6 = data[7];
      var modelIdH = data[16];
      var modelIdL = data[15];
      var unitByte = 1;

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 3;
          break;
      } // ????????????

      return [
        0xfe,
        0xfe,
        mac6,
        mac5,
        mac4,
        mac3,
        mac2,
        mac1,
        modelIdH,
        modelIdL,
        unitByte,
        0,
        0,
        0,
        0,
        0,
      ];
    };

    OneToMultiBroadcastScaleProtocol.prototype.dispatchSteadyData = function (weight, data) {
      var measureCount = decodeInteger(data[18], data[17]);

      if (this.measureCount === measureCount) {
        this.log('???????????????????????????????????????', measureCount);
        return undefined;
      }

      this.measureCount = measureCount;
      var resistance50 = decodeInteger(data[12], data[11]);
      var resistance500 = 0;
      var scaleData = {
        weight: weight,
        resistance50: resistance50,
        resistance500: resistance500,
      };
      this.log('????????????', scaleData);
      return this.scaleBizImp.fetchScaleData(scaleData);
    };

    OneToMultiBroadcastScaleProtocol.bleProfile = new OneToMultiBroadcastScaleProfile();
    return OneToMultiBroadcastScaleProtocol;
  })(QNBleBaseScaleProtocol);

function randomResistance() {
  return 480 + Math.floor(Math.random() * 40);
}

var OneToOneBroadcastScaleProfile =
  /** @class */
  (function () {
    function OneToOneBroadcastScaleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.OTO_BROADCAST_SCALE;
      this.transferType = QNBleTransferType.BROADCAST;
    }

    OneToOneBroadcastScaleProfile.prototype.isTargetDevice = function (nativeDevice) {
      var manufacturer = nativeDevice.manufacturer;
      return (
        manufacturer.length >= 26 &&
        manufacturer[2] === 0xaa &&
        (manufacturer[3] === 0xbb || manufacturer[3] === 0xcc)
      );
    };

    OneToOneBroadcastScaleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[4]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[9]),
      ];
      var appMacs = [
        number2hex(manufacturer[14]),
        number2hex(manufacturer[15]),
        number2hex(manufacturer[16]),
      ];
      return {
        isScreenOn: true,
        modelId: number2hex(manufacturer[23]) + number2hex(manufacturer[22]),
        mac: macs.join(':'),
        appMac: appMacs.join(':'),
      };
    };

    return OneToOneBroadcastScaleProfile;
  })();

var OneToOneBroadcastScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(OneToOneBroadcastScaleProtocol, _super);

    function OneToOneBroadcastScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.measureCount = 0; // ????????????????????????

      _this.baseTime = 0;
      return _this;
    }

    OneToOneBroadcastScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          // ???????????????
          this.instanceScaleBiz();
          this.baseTime = Date.now() / 1000;
          data = this.bleDevice.manufacturer;
          return [
            2,
            /*return*/
            this.decode({
              data: data,
            }),
          ];
        });
      });
    };
    /**
     * @override
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    OneToOneBroadcastScaleProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data, weight, status, isSteady, isStore;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              data = payload.data;
              weight = Number.parseFloat(
                this.scaleBizImp.decodeWeight(data[20], data[19]).toFixed(2)
              );
              status = data[17];
              isSteady = (status & 0x1) === 1;
              isStore = ((status >> 6) & 0x1) === 1;
              if (!!isStore) return [3 /*break*/, 4];
              if (!!isSteady) return [3 /*break*/, 1];
              (_b = (_a = this.listener).onGetUnsteadyWeight) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    weight: weight,
                  });
              return [3 /*break*/, 3];

            case 1:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 2:
              _c.sent();

              _c.label = 3;

            case 3:
              return [3 /*break*/, 4];

            case 4:
              return [
                2,
                /*return*/
                this.doAdvertising(data),
              ];
          }
        });
      });
    };

    OneToOneBroadcastScaleProtocol.prototype.buildAdvertisingData = function (data) {
      if (!this.appMac) {
        // ??????app mac
        var timestamp = +new Date();
        var byte1 = (timestamp >> 16) & 0xff;
        var byte2 = (timestamp >> 8) & 0xff;
        var byte3 = timestamp & 0xff;
        this.appMac = [byte1, byte2, byte3];
      }

      var status = data[17];
      var isStore = ((status >> 6) & 0x1) === 1;
      var isSteady = (status & 0x1) === 1;
      var mac1 = data[4];
      var mac2 = data[5];
      var mac3 = data[6];
      var mac4 = data[7];
      var mac5 = data[8];
      var mac6 = data[9];
      var modelIdH = data[23];
      var modelIdL = data[22];
      var nowStamp = isSteady ? Date.now() / 1000 : this.baseTime;
      var time1 = nowStamp & 0xff;
      var time2 = (nowStamp >> 8) & 0xff;
      var time3 = (nowStamp >> 16) & 0xff;
      var time4 = (nowStamp >> 24) & 0xff;
      var isSupportSt = data[3] === 0xcc;
      var unitByte = 1;

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 3;
          break;

        case QNBleUnit.ST:
          unitByte = isSupportSt ? 0 : 2;
          break;
      }

      var dataTypeByte = 0;

      if (isStore) {
        var storeTotalCount = (data[18] >> 4) & 0xf;
        dataTypeByte = data[18] & 0xf;
        this.log(
          '\u63A5\u6536\u5B58\u50A8\u6570\u636E,\u603B\u5171 ' +
            storeTotalCount +
            ' \u5F53\u524D ' +
            dataTypeByte
        );
      } else {
        dataTypeByte = isSteady ? 0xf : 0x0;
      } // ???data type???unit?????????????????????

      unitByte |= dataTypeByte << 4; // ????????????

      return [
        mac6,
        mac5,
        mac4,
        mac3,
        mac2,
        mac1,
        modelIdH,
        modelIdL,
        unitByte,
        this.appMac[2],
        this.appMac[1],
        this.appMac[0],
        time4,
        time3,
        time2,
        time1,
      ];
    };

    OneToOneBroadcastScaleProtocol.prototype.dispatchSteadyData = function (weight, data) {
      var measureCount = decodeInteger(data[25], data[24]);

      if (this.measureCount === measureCount) {
        this.log('???????????????????????????????????????', measureCount);
        return undefined;
      }

      this.measureCount = measureCount;
      var status = data[17];
      var hasResistance = status & 32;
      var resistance50 = hasResistance ? randomResistance() : 0;
      var resistance500 = hasResistance ? randomResistance() : 0;
      var scaleData = {
        weight: weight,
        resistance50: resistance50,
        resistance500: resistance500,
      };
      this.log('????????????', scaleData);
      return this.scaleBizImp.fetchScaleData(scaleData);
    };

    OneToOneBroadcastScaleProtocol.bleProfile = new OneToOneBroadcastScaleProfile();
    return OneToOneBroadcastScaleProtocol;
  })(QNBleBaseScaleProtocol);

/**
 * ????????????
 */

var UUID_TIME_SERVICES = '00001805-0000-1000-8000-00805F9B34FB'; // ????????????????????????

var UUID_TIME_WRITE_READ = '00002A2B-0000-1000-8000-00805F9B34FB';
/**
 * ???????????????????????????
 */
// ?????????

var UUID_WIFI_READ = '0000FFF1-0000-1000-8000-00805F9B34FB'; // ?????????

var UUID_WIFI_WRITE = '0000FFF2-0000-1000-8000-00805F9B34FB';
/**
 * ??????????????????
 */

var UUID_USER_SERVICES = '0000181C-0000-1000-8000-00805F9B34FB'; // ????????????????????????,????????????????????????

var UUID_USER_WRITE_READ = '00002A9F-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_USER_GRAND_UPDATE = '00002A8C-0000-1000-8000-00805F9B34FB'; // ????????????

var UUID_USER_HEIGHT_UPDATE = '00002A8E-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_USER_BIRTHDAY_UPDATE = '00002A85-0000-1000-8000-00805F9B34FB'; // ????????????

var UUID_USER_AGE_UPDATE = '00002A80-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_USER_ALGORITHM_UPDATE = '00002AFF-0000-1000-8000-00805F9B34FB';
/**
 * ????????????
 */

var UUID_WEIGHT_SERVICES = '0000181D-0000-1000-8000-00805F9B34FB'; // ????????????????????????????????????

var UUID_WEIGHT_READ = '00002A9E-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_WEIGHT_NOTIFY = '00002A9D-0000-1000-8000-00805F9B34FB';
/**
 * ????????????????????????
 */

var UUID_BODY_SERVICES = '0000181B-0000-1000-8000-00805F9B34FB'; // ??????????????????????????????(????????????)

var UUID_BODY_READ = '00002A9B-0000-1000-8000-00805F9B34FB'; // ????????????????????????

var UUID_BODY_NOTIFY = '00002A9C-0000-1000-8000-00805F9B34FB'; // ??????????????? ????????????????????????????????????

var UUID_USER_DEFINED_WRITE = '0000FFE2-0000-1000-8000-00805F9B34FB'; // ??????????????? ??????????????????????????????????????????

var UUID_USER_DEFINED_READ = '0000FFE1-0000-1000-8000-00805F9B34FB';

var WspDualScalebleProfile =
  /** @class */
  (function () {
    function WspDualScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    WspDualScalebleProfile.prototype.isTargetDevice = function (nativeDevice) {
      var manufacturer = nativeDevice.manufacturer,
        bleName = nativeDevice.bluetoothName;

      if (
        (bleName === 'QN-Scale' || /^Hi-/.test(bleName)) &&
        nativeDevice.manufacturer.length >= 19
      ) {
        var scaleInfoByte = manufacturer[10];

        if (scaleInfoByte & 16) {
          // ???????????????????????????
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    };

    WspDualScalebleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var totalUserCount = manufacturer[4];
      var registerUserCount = manufacturer[5];
      var offlineDataCount = manufacturer[6];
      var firmwareVersion = manufacturer[7];
      var scaleVersion = manufacturer[8];
      var wifiVersion = manufacturer[9];
      var scaleInfoByte = manufacturer[10];
      var hardVersion = manufacturer[17] << 8 || manufacturer[18];
      var macs = [
        number2hex(manufacturer[16]),
        number2hex(manufacturer[15]),
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
      ];
      return {
        isSupportWifi: true,
        isWspScale: true,
        isScreenOn: true,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
        totalUserCount: totalUserCount,
        registerUserCount: registerUserCount,
        offlineDataCount: offlineDataCount,
        firmwareVersion: firmwareVersion,
        scaleVersion: scaleVersion,
        wifiVersion: wifiVersion,
        scaleInfoByte: scaleInfoByte,
        hardVersion: hardVersion,
      };
    };

    return WspDualScalebleProfile;
  })();

var WspDualScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(WspDualScaleProtocol, _super);

    function WspDualScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this; // ?????????????????????????????????

      _this.currentCmdNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // ???????????????????????????wifi ssid?????????

      _this.lastReceivedWifiIno = {}; // ??????????????????wifi ssid??????

      _this.lastReceivedWifiSsidPackNo = 0; // ???????????????????????????????????????

      _this.currentSetWifiCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = []; // body????????????

      _this.bodyByteDataArr = []; // ???????????????

      _this.isStoreData = false; // ????????????

      _this.historyRecords = []; // wifi???????????????????????????

      _this.wifiNotified = false;
      return _this;
    } // ????????????????????????????????????

    WspDualScaleProtocol.prototype.delayWriteDataAfterNotify = function () {
      return __awaiter(this, void 0, void 0, function () {
        var delay;
        return __generator(this, function (_a) {
          delay = this.bleNative.name === 'QNBleNativeHuaWeiHilink' ? 200 : 50;
          return [
            2,
            /*return*/
            timeoutPromise(delay),
          ];
        });
      });
    };

    WspDualScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var services, services_1, services_1_1, serviceId, e_1_1;

        var e_1, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              // ???????????????
              this.instanceScaleBiz();
              console.log('prepare:wsp', this.operation);

              if (!this.operation.userIndex && !this.operation.isRegisterUser) {
                // ???????????????????????????????????????????????????????????????????????????????????????
                this.operation.userIndex = 0xaa;
                this.operation.userKey = 0x270f;
                this.operation.isUpdateUser = true;
              }

              return [
                4,
                /*yield*/
                this.bleNative.findService(this.bleDevice.deviceId),
              ];

            case 1:
              services = _b.sent();
              _b.label = 2;

            case 2:
              _b.trys.push([2, 7, 8, 9]);

              (services_1 = __values(services)), (services_1_1 = services_1.next());
              _b.label = 3;

            case 3:
              if (!!services_1_1.done) return [3 /*break*/, 6];
              serviceId = services_1_1.value; // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(this.bleDevice.deviceId, serviceId),
              ];

            case 4:
              // eslint-disable-next-line no-await-in-loop
              _b.sent();

              _b.label = 5;

            case 5:
              services_1_1 = services_1.next();
              return [3 /*break*/, 3];

            case 6:
              return [3 /*break*/, 9];

            case 7:
              e_1_1 = _b.sent();
              e_1 = {
                error: e_1_1,
              };
              return [3 /*break*/, 9];

            case 8:
              try {
                if (services_1_1 && !services_1_1.done && (_a = services_1['return']))
                  _a.call(services_1);
              } finally {
                if (e_1) throw e_1.error;
              }

              return [
                7,
                /*endfinally*/
              ];

            case 9:
              this.log('????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_TIME_SERVICES,
                  UUID_TIME_WRITE_READ
                ),
              ];

            case 10:
              _b.sent();

              return [
                4,
                /*yield*/
                this.doSyncTimeCmd(),
              ];

            case 11:
              _b.sent();

              if (this.operation.action === QNBleAction.SET_WIFI) {
                return [
                  2,
                  /*return*/
                  this.doNotifyWifi(),
                ];
              }

              return [
                2,
                /*return*/
                this.doPrepareMeasureWeight(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doPrepareMeasureWeight = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, isRegisterUser, deletedUserIndexArr;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              this.log('?????????????????????');
              console.log('this.operation', this.operation); // ??????????????????????????????

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES,
                  UUID_USER_DEFINED_READ
                ),
              ];

            case 1:
              // ??????????????????????????????
              _b.sent();

              this.log('????????????');
              return [
                4,
                /*yield*/
                this.doSyncUnit(),
              ];

            case 2:
              _b.sent();

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_USER_SERVICES,
                  UUID_USER_WRITE_READ
                ),
              ];

            case 3:
              _b.sent();

              (_a = this.operation),
                (isRegisterUser = _a.isRegisterUser),
                (deletedUserIndexArr = _a.deletedUserIndexArr);

              if (deletedUserIndexArr && deletedUserIndexArr.length > 0) {
                this.log('??????????????????????????????????????????????????????');
                return [
                  2,
                  /*return*/
                  this.doDeleteUser(),
                ];
              }

              if (isRegisterUser) {
                this.log('??????????????????');
                return [
                  2,
                  /*return*/
                  this.doRegisterUser(),
                ];
              }

              return [
                2,
                /*return*/
                this.prepareUserAndMeasure(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doPrepareSetWifi = function (payload) {
      if (payload === void 0) {
        payload = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          otaServerUrl,
          _f,
          encryptKey,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              (_a = __assign(__assign({}, this.operation), payload)),
                (_b = _a.wifiSsid),
                (wifiSsid = _b === void 0 ? '' : _b),
                (_c = _a.wifiPwd),
                (wifiPwd = _c === void 0 ? '' : _c),
                (_d = _a.dataServerUrl),
                (dataServerUrl =
                  _d === void 0 ? 'http://wifi.yolanda.hk:80/wifi_api/wsps?code=' : _d),
                (_e = _a.otaServerUrl),
                (otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e),
                (_f = _a.encryptKey),
                (encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f);

              if (wifiSsid.length > 32) {
                return [
                  2,
                  /*return*/
                  Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)),
                ];
              }

              if (wifiPwd.length > 64) {
                return [
                  2,
                  /*return*/
                  Promise.reject(new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)),
                ];
              }

              ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
              pwdByteArray = stringToByteArray(wifiPwd);
              dataServerUrlByteArray = stringToByteArray(dataServerUrl);
              otaServerUrlByteArray = stringToByteArray(otaServerUrl);
              this.ssidCmdData = splitArray(ssidByteArray);
              this.pwdCmdData = splitArray(pwdByteArray);
              this.dataServerUrlData = splitArray(dataServerUrlByteArray);
              this.otaServerUrlData = splitArray(otaServerUrlByteArray);
              this.encryptKeyCmdData = stringToByteArray(encryptKey);
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.doNotifyWifi(),
              ];

            case 1:
              _g.sent();

              this.log('??????wifi?????????????????????wifi ?????????????????? SSID ??????');
              return [
                2,
                /*return*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x60, 0x04, this.ssidCmdData.length],
                }),
              ];
          }
        });
      });
    };
    /**
     * ????????????
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    WspDualScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

      return __awaiter(this, void 0, void 0, function () {
        var data,
          characteristicId,
          _q,
          result,
          index,
          result,
          isRegisterUser,
          flag,
          isRealTimeData,
          isStartMeasureFat,
          isStartMeasureHeart,
          weightRatio,
          weight,
          bmi,
          year,
          month,
          dayOfMonth,
          hour,
          minute,
          second,
          time;

        return __generator(this, function (_r) {
          switch (_r.label) {
            case 0:
              (data = payload.data), (characteristicId = payload.characteristicId);
              _q = characteristicId.toUpperCase();

              switch (_q) {
                case UUID_USER_WRITE_READ:
                  return [3 /*break*/, 1];

                case UUID_USER_DEFINED_READ:
                  return [3 /*break*/, 7];

                case UUID_WEIGHT_READ:
                  return [3 /*break*/, 8];

                case UUID_BODY_READ:
                  return [3 /*break*/, 9];

                case UUID_WEIGHT_NOTIFY:
                  return [3 /*break*/, 10];

                case UUID_BODY_NOTIFY:
                  return [3 /*break*/, 11];

                case UUID_WIFI_READ:
                  return [3 /*break*/, 12];
              }

              return [3 /*break*/, 14];

            case 1:
              if (!(data[0] === 0x20 && data[1] === 0x01)) return [3 /*break*/, 5];
              result = data[2];
              if (!(result === 1)) return [3 /*break*/, 3];
              index = data[3];
              this.operation.userIndex = index;
              this.operation.isUpdateUser = true;
              (_b = (_a = this.listener).onGetRegisterUserResult) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    isSuccess: true,
                    userIndex: index,
                  });
              return [
                4,
                /*yield*/
                this.prepareUserAndMeasure(),
              ];

            case 2:
              _r.sent();

              return [3 /*break*/, 4];

            case 3:
              this.log('??????????????????');
              (_d = (_c = this.listener).onGetRegisterUserResult) === null || _d === void 0
                ? void 0
                : _d.call(_c, {
                    isSuccess: false,
                  });
              return [
                2,
                /*return*/
                Promise.reject(new QNBleError(QNBleErrorType.REGISTER_USER_FAILED)),
              ];

            case 4:
              return [3 /*break*/, 6];

            case 5:
              if (data[0] === 0x20 && data[1] === 0x02) {
                result = data[2];
                (_f = (_e = this.listener).onGetVisitUserResult) === null || _f === void 0
                  ? void 0
                  : _f.call(_e, {
                      isSuccess: result === 1,
                    });
                if (result !== 1)
                  return [
                    2,
                    /*return*/
                    Promise.reject(new QNBleError(QNBleErrorType.VISIT_USER_FAILED)),
                  ];
              }

              _r.label = 6;

            case 6:
              return [3 /*break*/, 15];

            case 7:
              if (data[0] === 0x20 && data[1] === 0x5) {
                // ?????????????????????
                (_h = (_g = this.listener).onGetDeleteUserResult) === null || _h === void 0
                  ? void 0
                  : _h.call(_g, {
                      isSuccess: true,
                    });
                isRegisterUser = this.operation.isRegisterUser;

                if (isRegisterUser) {
                  this.log('??????????????????');
                  return [
                    2,
                    /*return*/
                    this.doRegisterUser(),
                  ];
                }

                return [
                  2,
                  /*return*/
                  this.prepareUserAndMeasure(),
                ];
              }

              return [3 /*break*/, 15];

            case 8:
              return [3 /*break*/, 15];

            case 9:
              _r.label = 10;

            case 10: {
              this.log('?????? UUID_WEIGHT_NOTIFY');

              if (this.bodyByteDataArr.length >= 0) {
                this.bodyByteDataArr.splice(0, this.bodyByteDataArr.length);
              }

              flag = data[0];
              this.isStoreData = ((flag >> 4) & 0x01) === 1;
              isRealTimeData = ((flag >> 5) & 0x01) === 0;
              isStartMeasureFat = ((flag >> 6) & 0x01) === 1;
              isStartMeasureHeart = ((flag >> 7) & 0x01) === 1;
              this.log(
                'isRealTimeData',
                isRealTimeData,
                'isStartMeasureFat',
                isStartMeasureFat,
                'isStartMeasureHeart',
                isStartMeasureHeart
              );

              if (isStartMeasureFat) {
                (_k = (_j = this.listener).onStartMeasureFat) === null || _k === void 0
                  ? void 0
                  : _k.call(_j);
              } else if (isStartMeasureHeart) {
                (_m = (_l = this.listener).onStartMeasureHeart) === null || _m === void 0
                  ? void 0
                  : _m.call(_l);
              }

              if (data.length < 13) {
                return [
                  2,
                  /*return*/
                  undefined,
                ];
              }

              weightRatio = 0.05;
              weight = Number.parseFloat(
                (decodeInteger(data[2], data[1]) * weightRatio).toFixed(2)
              );

              if (isRealTimeData) {
                (_p = (_o = this.listener).onGetUnsteadyWeight) === null || _p === void 0
                  ? void 0
                  : _p.call(_o, {
                      weight: weight,
                    });
              } else {
                bmi = decodeInteger(data[12], data[11]) * 0.1;
                year = decodeInteger(data[4], data[3]);
                month = data[5];
                dayOfMonth = data[6];
                hour = data[7];
                minute = data[8];
                second = data[9];
                time = new Date();
                time.setUTCFullYear(year);
                time.setUTCMonth(month - 1);
                time.setUTCDate(dayOfMonth);
                time.setUTCHours(hour);
                time.setUTCMinutes(minute);
                time.setUTCSeconds(second);
                this.partialScaleData = {
                  weight: weight,
                  bmi: bmi,
                  time: time,
                };
              }

              return [3 /*break*/, 15];
            }

            case 11:
              this.log('?????? UUID_BODY_NOTIFY');
              this.bodyByteDataArr.push(data);
              this.log('bodyByteDataArr', this.bodyByteDataArr);

              if (this.bodyByteDataArr.length >= 2) {
                this.buildBodyData();
              }

              return [3 /*break*/, 15];

            case 12:
              // ???????????????????????????????????????
              return [
                4,
                /*yield*/
                this.handleWifiCmdData(data),
              ];

            case 13:
              // ???????????????????????????????????????
              _r.sent();

              return [3 /*break*/, 15];

            case 14:
              return [3 /*break*/, 15];

            case 15:
              return [
                2,
                /*return*/
                undefined,
              ];
          }
        });
      });
    };
    /**
     * ????????????????????????wifi
     * ?????????????????? qnble.callProtocolMethodAsync(deviceId, 'doScanWifi', ...args)
     */

    WspDualScaleProtocol.prototype.doScanWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('????????????????????????wifi');
              this.wifiInfoCache.rssi = 0;
              this.wifiInfoCache.ssid = [];
              this.lastReceivedWifiSsidPackNo = 0;
              return [
                4,
                /*yield*/
                this.doNotifyWifi(),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x55, 0x4, 0x01],
                }),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????wifi????????????
     */

    WspDualScaleProtocol.prototype.onReceiveWifiSsidData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var rssi, packInfo, packCount, packNo, ssidData, info;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              rssi = data[1] - 0xff - 1;
              packInfo = data[2];
              packCount = (packInfo >> 4) & 15;
              packNo = packInfo & 15;
              ssidData = data.slice(3, data.length - 1);
              this.log(
                'onReceiveWifiSsidData',
                'packCount',
                packCount,
                'packNo',
                packNo,
                'ssidData',
                ssidData
              );

              if (packNo > this.lastReceivedWifiSsidPackNo) {
                this.wifiInfoCache.rssi = rssi;
                this.wifiInfoCache.ssid.push(byteArrayToString(ssidData));

                if (packCount === packNo) {
                  this.log('wifi ssid base64??????', this.wifiInfoCache.ssid.join(''));
                  info = {
                    rssi: rssi,
                    ssid: gBase64.decode(this.wifiInfoCache.ssid.join('')),
                    level: getWifiRssiLevel(rssi),
                  };
                  this.log('???????????? wifi ??????', info);

                  if (!equal(this.lastReceivedWifiIno, info)) {
                    (_b = (_a = this.listener).onGetWifiInfo) === null || _b === void 0
                      ? void 0
                      : _b.call(_a, info);
                    this.lastReceivedWifiIno = info;
                  } else {
                    this.log(
                      '??????????????????????????? wifi ??????',
                      'lastReceivedWifiIno',
                      this.lastReceivedWifiIno
                    );
                  }

                  this.wifiInfoCache.rssi = 0;
                  this.wifiInfoCache.ssid = [];
                  this.lastReceivedWifiSsidPackNo = 0;
                } else {
                  this.lastReceivedWifiSsidPackNo = packNo;
                }
              } else {
                console.warn('??????????????? wifi ssid ?????????', data);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x57, 4, packInfo],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ?????????????????????????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'doSetWifi', ...args)
     */

    WspDualScaleProtocol.prototype.doSetWifi = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('doSetWifi', payload);
              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(payload),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.handleWifiCmdData = function (data) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              _g = data[0];

              switch (_g) {
                case 0x56:
                  return [3 /*break*/, 1];

                case 0x58:
                  return [3 /*break*/, 3];

                case 0x61:
                  return [3 /*break*/, 5];

                case 0x63:
                  return [3 /*break*/, 6];

                case 0x65:
                  return [3 /*break*/, 11];

                case 0x67:
                  return [3 /*break*/, 16];

                case 0x69:
                  return [3 /*break*/, 21];

                case 0x6b:
                  return [3 /*break*/, 24];

                case 0x6f:
                  return [3 /*break*/, 29];

                case 0x71:
                  return [3 /*break*/, 32];

                case 0x73:
                  return [3 /*break*/, 36];

                case 0x74:
                  return [3 /*break*/, 39];

                case 0x77:
                  return [3 /*break*/, 41];
              }

              return [3 /*break*/, 42];

            case 1:
              // ?????????????????????ssid???
              return [
                4,
                /*yield*/
                this.onReceiveWifiSsidData(data),
              ];

            case 2:
              // ?????????????????????ssid???
              _h.sent();

              return [3 /*break*/, 43];

            case 3:
              // Wi-Fi????????????
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x59, 4, 1],
                }),
              ];

            case 4:
              // Wi-Fi????????????
              _h.sent();

              (_b = (_a = this.listener).onScanWifiFinished) === null || _b === void 0
                ? void 0
                : _b.call(_a);
              return [3 /*break*/, 43];

            case 5:
              // ???????????????????????????
              // ????????????SSID??????
              if (data[2] === 1) {
                this.currentCmdNo = 0;
                this.sendWifiSsid();
              }

              return [3 /*break*/, 43];

            case 6:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.ssidCmdData.length)) return [3 /*break*/, 8]; // ssid???????????????

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 7:
              // ssid???????????????
              _h.sent();

              return [3 /*break*/, 10];

            case 8:
              // ssid??????????????????????????????????????????wifi??????
              this.currentCmdNo = 0;
              this.log('?????????????????? WIFI?????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 9:
              _h.sent();

              _h.label = 10;

            case 10:
              return [3 /*break*/, 43];

            case 11:
              if (!(data[2] === 1)) return [3 /*break*/, 15];
              if (!(this.pwdCmdData.length > 0)) return [3 /*break*/, 13];
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 12:
              _h.sent();

              return [3 /*break*/, 15];

            case 13:
              // ???wifi???????????????????????????????????????????????????URL
              this.currentCmdNo = 0;
              this.log('???wifi??????????????? 66h ??? 67h ????????????????????????????????? ??????????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 14:
              _h.sent();

              _h.label = 15;

            case 15:
              return [3 /*break*/, 43];

            case 16:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.pwdCmdData.length)) return [3 /*break*/, 18]; // wifi?????????????????????

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 17:
              // wifi?????????????????????
              _h.sent();

              return [3 /*break*/, 20];

            case 18:
              // wifi???????????????????????????????????????????????????????????????URL
              this.currentCmdNo = 0;
              this.log('?????????????????? ??????????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 19:
              _h.sent();

              _h.label = 20;

            case 20:
              return [3 /*break*/, 43];

            case 21:
              if (!(data[2] === 1)) return [3 /*break*/, 23];
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 22:
              _h.sent();

              _h.label = 23;

            case 23:
              return [3 /*break*/, 43];

            case 24:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.dataServerUrlData.length)) return [3 /*break*/, 26]; // ???????????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 25:
              // ???????????????URL???????????????
              _h.sent();

              return [3 /*break*/, 28];

            case 26:
              // ???????????????URL??????????????????????????????????????????OTA?????????URL
              this.currentCmdNo = 0;
              this.log('?????????????????? OTA????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 27:
              _h.sent();

              _h.label = 28;

            case 28:
              return [3 /*break*/, 43];

            case 29:
              if (!(data[2] === 1)) return [3 /*break*/, 31];
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 30:
              _h.sent();

              _h.label = 31;

            case 31:
              return [3 /*break*/, 43];

            case 32:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.otaServerUrlData.length)) return [3 /*break*/, 34]; // OTA?????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 33:
              // OTA?????????URL???????????????
              _h.sent();

              return [3 /*break*/, 35];

            case 34:
              // OTA?????????URL??????????????????????????????????????????????????????
              this.currentCmdNo = 0;
              this.sendEncryptKey();
              _h.label = 35;

            case 35:
              return [3 /*break*/, 43];

            case 36:
              if (!(data[2] === 0)) return [3 /*break*/, 38];
              return [
                4,
                /*yield*/
                this.sendEncryptKey(),
              ];

            case 37:
              _h.sent();

              _h.label = 38;

            case 38:
              // ???????????????????????????????????????????????????????????????
              return [3 /*break*/, 43];

            case 39:
              // ??????????????????????????????
              (_d = (_c = this.listener).onGetSetWifiResult) === null || _d === void 0
                ? void 0
                : _d.call(_c, data[2] === 1);
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x75, 4, 1],
                }),
              ];

            case 40:
              _h.sent();

              this.log('????????????');
              return [3 /*break*/, 43];

            case 41:
              // ????????????????????????
              // 0:wifi?????????
              // 1:wifi?????????
              // 2:wifi??????????????????
              // 3:wifi??????????????????
              (_f = (_e = this.listener).onGetQueryWifiConnectStatusResult) === null ||
              _f === void 0
                ? void 0
                : _f.call(_e, data[2]);
              return [3 /*break*/, 43];

            case 42:
              return [3 /*break*/, 43];

            case 43:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.buildBodyData = function () {
      var _a, _b, _c, _d;

      var data = __spread(this.bodyByteDataArr[0], this.bodyByteDataArr[1]);

      this.log('buildBodyData', 'data', data);

      if (data.length < 37) {
        // ??????????????????????????????
        this.bodyByteDataArr.splice(0, 1);
        return;
      } // ???????????????????????????????????????

      this.bodyByteDataArr.splice(0, this.bodyByteDataArr.length);
      var year = decodeInteger(data[5], data[4]);
      var month = data[6];
      var dayOfMonth = data[7];
      var hour = data[8];
      var minute = data[9];
      var second = data[10];
      var time = new Date();
      time.setUTCFullYear(year);
      time.setUTCMonth(month - 1);
      time.setUTCDate(dayOfMonth);
      time.setUTCHours(hour);
      time.setUTCMinutes(minute);
      time.setUTCSeconds(second);
      var realMassRatio = 0.05; // ?????????

      var bodyfat = decodeInteger(data[3], data[2]) * 0.1; // bmr
      // ??????/10 ?????? QNScaleBiz???ts ??? x10

      var bmr = decodeInteger(data[13], data[12]) / 10; // ????????????

      var muscle = decodeInteger(data[15], data[14]) * 0.1; // ?????????

      var muscleMass = decodeInteger(data[17], data[16]) * realMassRatio; // ????????????

      var lbm = decodeInteger(data[19], data[18]) * realMassRatio; // ?????????

      var water = decodeInteger(data[21], data[20]) * 0.1; // ??????

      var resistance50 = decodeInteger(data[23], data[22]); // ??????

      var resistance500 = decodeInteger(data[25], data[24]); // ??????
      // ??????x10 ?????? QNScaleBiz.ts??? /10???

      var bone = decodeInteger(data[27], data[26]) * realMassRatio * 10; // ??????????????????

      var visfat = data[28] & 0xff; // ????????????

      var subfat = decodeInteger(data[30], data[29]) * 0.1; // ?????????

      var protein = decodeInteger(data[32], data[31]) * 0.1; // ?????????

      var bodyAge = data[33] & 0xff; // ??????

      var heartRate = data[34] & 0xff; // ??????

      var score = decodeInteger(data[36], data[35]) * 0.1; // ??????

      var bodyShape = data[37] & 0xff; // ????????????

      var heartIndex = (data[38] & 0xff) * 0.1;
      this.log('isStoreData', this.isStoreData);

      var measureData = __assign(__assign({}, this.partialScaleData), {
        bodyfat: bodyfat,
        bmr: bmr,
        muscle: muscle,
        muscleMass: muscleMass,
        lbm: lbm,
        heartIndex: heartIndex,
        bodyShape: bodyShape,
        score: score,
        heartRate: heartRate,
        bodyAge: bodyAge,
        protein: protein,
        subfat: subfat,
        visfat: visfat,
        bone: bone,
        water: water,
        time: time,
      });

      this.log('measureData', measureData);
      var mdata = {
        measure: this.scaleBizImp.prepareWspMeasureData(measureData),
        scaleData: {
          resistance500: resistance500,
          resistance50: resistance50,
        },
        sdkObj: this.scaleBizImp.sdkObj,
      };
      this.log('mdata', mdata);

      if (this.isStoreData) {
        // ?????????????????????????????????
        this.log('????????????????????????');
        this.historyRecords.push(mdata);
      } else {
        try {
          if (this.historyRecords.length > 0) {
            this.log('???????????????????????????', this.historyRecords);
            (_b = (_a = this.listener).onGetStoredDatas) === null || _b === void 0
              ? void 0
              : _b.call(_a, __spread(this.historyRecords));
            this.historyRecords = [];
          }

          this.log('?????????????????????????????????', mdata);
          (_d = (_c = this.listener).onGetScaleData) === null || _d === void 0
            ? void 0
            : _d.call(_c, mdata);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      }
    };

    WspDualScaleProtocol.prototype.doNotifyWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.wifiNotified) {
                return [
                  2,
                  /*return*/
                  Promise.resolve(0),
                ];
              }

              this.log('??????WiFi??????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_TIME_SERVICES,
                  UUID_WIFI_READ
                ),
              ];

            case 1:
              _a.sent();

              this.wifiNotified = true;
              return [
                2,
                /*return*/
                Promise.resolve(0),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.sendWifiSsid = function () {
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log('\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E');
      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1; // this.bleApi.log(`????????? ${this.currentCmdNo} ??? PWD ??????`)

      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1; // this.bleApi.log(`????????? ${this.currentCmdNo} ??? DATA????????? ??????`)

      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1; // this.bleApi.log(`????????? ${this.currentCmdNo} ??? OTA????????? ??????`)

      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendEncryptKey = function () {
      var cmd = this.encryptKeyCmdData;
      this.log('????????????????????????');
      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x72, 20, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.doDeleteUser = function () {
      // ????????????
      var deletedUserIndexArr = this.operation.deletedUserIndexArr;
      var flag = 0;
      deletedUserIndexArr.forEach(function (value) {
        flag |= 1 << (value - 1);
      });
      return this.writeData({
        serviceId: UUID_BODY_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE,
        cmdData: [0x05, flag, 0],
      });
    };

    WspDualScaleProtocol.prototype.doRegisterUser = function () {
      var userKey = this.operation.userKey;
      var keyH = (userKey >> 8) & 0xff;
      var keyL = userKey & 0xff;
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_WRITE_READ,
        cmdData: [0x01, keyL, keyH],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doReadScaleSupport = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  UUID_WEIGHT_SERVICES,
                  UUID_WEIGHT_READ
                ),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 2:
              _a.sent();

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES,
                  UUID_BODY_READ
                ),
              ];

            case 3:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 4:
              _a.sent();

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_WEIGHT_SERVICES,
                  UUID_WEIGHT_NOTIFY
                ),
              ];

            case 5:
              _a.sent();

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES,
                  UUID_BODY_NOTIFY
                ),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doSyncTimeCmd = function () {
      var now = new Date();
      var year = now.getUTCFullYear();
      var yearH = (year >> 8) & 0xff;
      var yearL = year & 0xff;
      var month = now.getUTCMonth() + 1;
      var day = now.getUTCDate();
      var hour = now.getUTCHours();
      var minute = now.getUTCMinutes();
      var second = now.getUTCSeconds();
      var dayOffWeek = now.getUTCDay() - 1;

      if (dayOffWeek === 0) {
        dayOffWeek = 7;
      }

      this.currentCmdNo = 0; // ??????????????????????????????

      var bytes = [yearL, yearH, month, day, hour, minute, second, dayOffWeek, 0, 0];
      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_TIME_WRITE_READ,
        cmdData: bytes,
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncUnit = function () {
      var unitByte = 1; // STUB isSupportJin???isSupportSt?????????????????????????????????????????????????????????????????????

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 4;
          break;

        case QNBleUnit.ST:
          unitByte = 2;
          break;
      }

      var bytes = [0x03, 0x00, unitByte];
      return this.writeData({
        serviceId: UUID_BODY_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE,
        cmdData: bytes,
      });
    }; // ??????????????????

    WspDualScaleProtocol.prototype.prepareUserAndMeasure = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.doVisitUser(),
              ];

            case 1:
              _a.sent();

              this.log('?????????????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.doSyncUserInfo(),
              ];

            case 2:
              _a.sent();

              this.log('???????????????????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.doReadScaleSupport(),
              ];

            case 3:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doVisitUser = function () {
      var _a = this.operation,
        userIndex = _a.userIndex,
        userKey = _a.userKey;
      var secretH = (userKey >> 8) & 0xff;
      var secretL = userKey & 0xff;
      var bytes = [0x02, userIndex, secretL, secretH];
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_WRITE_READ,
        cmdData: bytes,
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncUserInfo = function () {
      return __awaiter(this, void 0, void 0, function () {
        var isUpdateUser;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              isUpdateUser = this.operation.isUpdateUser;

              if (!isUpdateUser) {
                this.log('????????????????????????');
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.log('????????????????????????');
              return [
                4,
                /*yield*/
                this.doSyncGender(),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncHeight(),
              ];

            case 2:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncBirthday(),
              ];

            case 3:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncAge(),
              ];

            case 4:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncAlgorithm(),
              ];

            case 5:
              _a.sent();

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doSyncAlgorithm = function () {
      this.log('????????????');
      var deviceMethod = this.operation.user.isSport ? 13 : 3;
      var sdkObj = this.scaleBizImp.sdkObj;
      this.log('sdkObj', sdkObj);

      if (sdkObj) {
        switch (sdkObj.method) {
          case 2:
            deviceMethod = 3;
            break;

          case 3:
            deviceMethod = 1;
            break;
          // ??????v2

          case 4:
            deviceMethod = 2;
            break;

          case 5:
            deviceMethod = 4;
            break;

          case 6:
            deviceMethod = 5;
            break;

          case 1:
            deviceMethod = 6;
            break;
        }

        if (this.operation.user.isSport) {
          deviceMethod += 10;
        }
      }

      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_ALGORITHM_UPDATE,
        cmdData: [deviceMethod, 0],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncAge = function () {
      var birthday = this.operation.user.birthday;
      var age = this.operation.user.age;
      age = age || calcAgeWithBirthday(getNewDateInstance(birthday));
      this.log('????????????', age);
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_AGE_UPDATE,
        cmdData: [age],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncBirthday = function () {
      var birthday = this.operation.user.birthday;
      var birthdayDate = getNewDateInstance(birthday);
      var year = birthdayDate.getFullYear();
      var yearH = (year >> 8) & 0xff;
      var yearL = year & 0xff;
      var month = birthdayDate.getMonth() + 1;
      var day = birthdayDate.getDate();
      this.log('????????????', formatDateToString(birthdayDate));
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_BIRTHDAY_UPDATE,
        cmdData: [yearL, yearH, month, day],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncHeight = function () {
      var height = this.operation.user.height;
      var heightH = (height >> 8) & 0xff;
      var heightL = height & 0xff;
      this.log('????????????', height);
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_HEIGHT_UPDATE,
        cmdData: [heightL, heightH],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncGender = function () {
      var gender = this.operation.user.gender; // NOTE ???????????? ???????????????????????? 0????????? 1?????????

      var genderByte = gender === QNBleGender.MALE ? 0 : 1;
      this.log('????????????', genderByte);
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_GRAND_UPDATE,
        cmdData: [genderByte],
        needSum: false,
      });
    };
    /**
     * ??????wifi????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'queryWifiConnectStatus', ...args)
     * @param {number} type 1???????????????wifi???????????? 2?????????wifi?????????????????????
     */

    WspDualScaleProtocol.prototype.queryWifiConnectStatus = function (type) {
      if (type === void 0) {
        type = 1;
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x76, 4, type],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.bleProfile = new WspDualScalebleProfile();
    return WspDualScaleProtocol;
  })(QNBleBaseScaleProtocol);

var ShareCLScaleProfile =
  /** @class */
  (function () {
    function ShareCLScaleProfile() {
      this.defaultAction = QNBleAction.SET_WIFI;
      this.type = QNBleDeviceType.SHARE_SCALE_CL;
      this.transferType = QNBleTransferType.BLE;
    } // eslint-disable-next-line class-methods-use-this

    ShareCLScaleProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-GXC';
    };

    ShareCLScaleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
      ];
      var modelIds = [number2hex(manufacturer[4]), number2hex(manufacturer[5])];
      var sns = [
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[8]),
      ];
      return {
        modelId: modelIds.join(''),
        isSupportWifi: true,
        isScreenOn: true,
        mac: macs.join(':'),
        sn: sns.join(''),
      };
    };

    return ShareCLScaleProfile;
  })();

var ShareCLScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(ShareCLScaleProtocol, _super);

    function ShareCLScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000ABF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000ABF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000ABF2-0000-1000-8000-00805F9B34FB'; // ?????????????????????????????????

      _this.currentCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(ShareCLScaleProtocol.prototype, 'action', {
      get: function get() {
        return this.operation.action || ShareCLScaleProtocol.bleProfile.defaultAction;
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    ShareCLScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var data, _g, retV;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              data = payload.data;
              _g = data[0];

              switch (_g) {
                case 0x12:
                  return [3 /*break*/, 1];

                case 0x14:
                  return [3 /*break*/, 5];

                case 0x51:
                  return [3 /*break*/, 6];

                case 0x61:
                  return [3 /*break*/, 7];

                case 0x63:
                  return [3 /*break*/, 9];

                case 0x65:
                  return [3 /*break*/, 14];

                case 0x67:
                  return [3 /*break*/, 16];

                case 0x69:
                  return [3 /*break*/, 21];

                case 0x6b:
                  return [3 /*break*/, 23];

                case 0x6f:
                  return [3 /*break*/, 28];

                case 0x71:
                  return [3 /*break*/, 30];

                case 0x73:
                  return [3 /*break*/, 34];

                case 0x79:
                  return [3 /*break*/, 35];

                case 0x81:
                  return [3 /*break*/, 38];
              }

              return [3 /*break*/, 39];

            case 1:
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status???1-???????????????2-???????????????????????????3.5?????????????????????????????????????????????????????????????????????????????????
                    0x01,
                  ],
                }),
              ];

            case 2:
              _h.sent();

              if (!(this.action === QNBleAction.SET_WIFI)) return [3 /*break*/, 4]; // ?????????????????????

              return [
                4,
                /*yield*/
                this.setWifi(),
              ];

            case 3:
              // ?????????????????????
              _h.sent();

              _h.label = 4;

            case 4:
              return [3 /*break*/, 40];

            case 5:
              return [3 /*break*/, 40];

            case 6:
              // data[2]
              // 1 ????????????
              (_a = this.sleepScaleCallback) === null || _a === void 0
                ? void 0
                : _a.call(
                    this,
                    {
                      errCode: data[2],
                    },
                    payload,
                    this
                  );
              return [3 /*break*/, 40];

            case 7:
              // ???????????????????????????
              // ????????????SSID??????
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 8:
              _h.sent();

              return [3 /*break*/, 40];

            case 9:
              if (!(this.currentCmdNo < this.ssidCmdData.length)) return [3 /*break*/, 11]; // ssid???????????????

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 10:
              // ssid???????????????
              _h.sent();

              return [3 /*break*/, 13];

            case 11:
              // ssid??????????????????????????????????????????wifi??????
              this.currentCmdNo = 0;
              this.log('?????????????????? WIFI?????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 12:
              _h.sent();

              _h.label = 13;

            case 13:
              return [3 /*break*/, 40];

            case 14:
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 15:
              _h.sent();

              return [3 /*break*/, 40];

            case 16:
              if (!(this.currentCmdNo < this.pwdCmdData.length)) return [3 /*break*/, 18]; // wifi?????????????????????

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 17:
              // wifi?????????????????????
              _h.sent();

              return [3 /*break*/, 20];

            case 18:
              // wifi?????????????????????????????????
              this.currentCmdNo = 0;
              this.log('?????????????????? ??????????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 19:
              _h.sent();

              _h.label = 20;

            case 20:
              return [3 /*break*/, 40];

            case 21:
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 22:
              _h.sent();

              return [3 /*break*/, 40];

            case 23:
              if (!(this.currentCmdNo < this.dataServerUrlData.length)) return [3 /*break*/, 25]; // ???????????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 24:
              // ???????????????URL???????????????
              _h.sent();

              return [3 /*break*/, 27];

            case 25:
              // ???????????????URL??????????????????????????????????????????OTA?????????URL
              this.currentCmdNo = 0;
              this.log('?????????????????? OTA????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 26:
              _h.sent();

              _h.label = 27;

            case 27:
              return [3 /*break*/, 40];

            case 28:
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 29:
              _h.sent();

              return [3 /*break*/, 40];

            case 30:
              if (!(this.currentCmdNo < this.otaServerUrlData.length)) return [3 /*break*/, 32]; // OTA?????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 31:
              // OTA?????????URL???????????????
              _h.sent();

              return [3 /*break*/, 33];

            case 32:
              // OTA?????????URL??????????????????????????????????????????????????????
              this.currentCmdNo = 0; // const cmd = this.encryptKeyCmdData;
              // this.log('????????????????????????');
              // await this.writeData({
              //   cmdData: [
              //     0x72,
              //     0x10,
              //     0x01,
              //     ...cmd,
              //   ],
              // });

              (_c = (_b = this.listener).onSetWifiSuccess) === null || _c === void 0
                ? void 0
                : _c.call(_b);
              (_d = this.setWifiCallback) === null || _d === void 0
                ? void 0
                : _d.call(
                    this,
                    {
                      errCode: 1,
                    },
                    payload,
                    this
                  );
              _h.label = 33;

            case 33:
              return [3 /*break*/, 40];

            case 34: {
              // ????????????????????????
              // ??????????????????
              // this.listener.onSetWifiSuccess();
              return [3 /*break*/, 40];
            }

            case 35:
              retV = {
                errCode: data[2],
              };

              if (data[2] === 0) {
                // ????????????100?????????????????????
                retV.errCode = 100;
              } else if (data[2] === 2) {
                // ???????????? ?????? 0
                retV.errCode = 0;
              }

              (_e = this.checkWifiStatusCallback) === null || _e === void 0
                ? void 0
                : _e.call(this, retV, payload, this);
              if (!(data[2] === 0)) return [3 /*break*/, 37]; // ????????????

              this.log('??????wifi???????????????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x78, 0x04, 0x01],
                }),
              ];

            case 36:
              _h.sent();

              _h.label = 37;

            case 37:
              return [3 /*break*/, 40];

            case 38:
              // data[2]
              // 1 ??????
              // 0 ??????
              (_f = this.syncDataCallback) === null || _f === void 0
                ? void 0
                : _f.call(
                    this,
                    {
                      errCode: data[2],
                    },
                    payload,
                    this
                  );
              return [3 /*break*/, 40];

            case 39:
              return [3 /*break*/, 40];

            case 40:
              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };

    ShareCLScaleProtocol.prototype.setWifi = function (operaton, callback) {
      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          otaServerUrl,
          _f,
          encryptKey,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        var _this = this;

        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              this.setWifiCallback = callback;
              (_a = __assign(__assign({}, this.operation), operaton || {})),
                (_b = _a.wifiSsid),
                (wifiSsid = _b === void 0 ? '' : _b),
                (_c = _a.wifiPwd),
                (wifiPwd = _c === void 0 ? '' : _c),
                (_d = _a.dataServerUrl),
                (dataServerUrl =
                  _d === void 0 ? 'http://wifi.yolanda.hk:80/wifi_api/aios?code=' : _d),
                (_e = _a.otaServerUrl),
                (otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e),
                (_f = _a.encryptKey),
                (encryptKey = _f === void 0 ? '' : _f);
              this.log('wifiSsid', wifiSsid, 'wifiPwd', wifiPwd);

              if (wifiSsid.length > 32) {
                return [
                  2,
                  /*return*/
                  Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)),
                ];
              }

              if (wifiPwd.length > 64) {
                return [
                  2,
                  /*return*/
                  Promise.reject(new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)),
                ];
              }

              ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
              pwdByteArray = stringToByteArray(wifiPwd);
              dataServerUrlByteArray = stringToByteArray(dataServerUrl);
              otaServerUrlByteArray = stringToByteArray(otaServerUrl);
              this.ssidCmdData = splitArray(ssidByteArray);
              this.pwdCmdData = splitArray(pwdByteArray);
              this.dataServerUrlData = splitArray(dataServerUrlByteArray);
              this.otaServerUrlData = splitArray(otaServerUrlByteArray);
              this.encryptKeyCmdData = stringToByteArray(encryptKey); // ?????????????????????

              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status???1-???????????????2-???????????????????????????3.5?????????????????????????????????????????????????????????????????????????????????
                    0x01,
                  ],
                }),
              ];

            case 1:
              _g.sent();

              return [
                2,
                /*return*/
                Promise.resolve().then(function () {
                  _this.log('????????????wifi ?????????????????? SSID ??????');

                  return _this.writeData({
                    cmdData: [
                      0x60,
                      0x04, // ??????????????????
                      _this.ssidCmdData.length,
                    ],
                  });
                }),
              ];
          }
        });
      });
    };

    ShareCLScaleProtocol.prototype.sendWifiSsid = function () {
      this.log('ssidCmdData??????', this.ssidCmdData, 'currentCmdNo', this.currentCmdNo);
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log('\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E');
      return this.writeData({
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    ShareCLScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log('\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 PWD \u6570\u636E');
      return this.writeData({
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    ShareCLScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 DATA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    ShareCLScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 OTA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };
    /**
     * ?????????????????????????????????
     */

    ShareCLScaleProtocol.prototype.sleepScale = function (callback) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('?????????????????????????????????');
              this.sleepScaleCallback = callback;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status???1-???????????????2-???????????????????????????3.5?????????????????????????????????????????????????????????????????????????????????
                    0x02,
                  ],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
                this.writeData({
                  cmdData: [0x50, 0x04, 0x01],
                }),
              ];
          }
        });
      });
    };
    /**
     * ??????wifi??????
     */

    ShareCLScaleProtocol.prototype.checkWifiStatus = function (callback) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.checkWifiStatusCallback = callback;
              this.log('??????wifi??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status???1-???????????????2-???????????????????????????3.5?????????????????????????????????????????????????????????????????????????????????
                    0x02,
                  ],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
                this.writeData({
                  cmdData: [0x78, 0x04, 0x01],
                }),
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     */

    ShareCLScaleProtocol.prototype.syncData = function (payload, callback) {
      return __awaiter(this, void 0, void 0, function () {
        var chargeTimeH,
          chargeTimeL,
          unChargeTimeH,
          unChargeTimeL,
          _a,
          offScreenStartTime,
          offScreenEndTime,
          offScreenStartHour,
          offScreenStartMin,
          offScreenEndHour,
          offScreenEndtMin;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              this.log('????????????');
              this.syncDataCallback = callback;
              chargeTimeH = (payload.syncTimeDurationInCharge >> 8) & 0xff;
              chargeTimeL = payload.syncTimeDurationInCharge & 0xff;
              unChargeTimeH = (payload.syncTimeDurationUnCharge >> 8) & 0xff;
              unChargeTimeL = payload.syncTimeDurationUnCharge & 0xff;
              (_a = __read(payload.offScreenTimeDuration, 2)),
                (offScreenStartTime = _a[0]),
                (offScreenEndTime = _a[1]);
              offScreenStartHour = Number(offScreenStartTime.split(':')[0]);
              offScreenStartMin = Number(offScreenStartTime.split(':')[1]);
              offScreenEndHour = Number(offScreenEndTime.split(':')[0]);
              offScreenEndtMin = Number(offScreenEndTime.split(':')[1]);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status???1-???????????????2-???????????????????????????3.5?????????????????????????????????????????????????????????????????????????????????
                    0x01,
                  ],
                }),
              ];

            case 1:
              _b.sent();

              return [
                2,
                /*return*/
                this.writeData({
                  cmdData: [
                    0x80,
                    0x04,
                    payload.fatSwitch,
                    chargeTimeH,
                    chargeTimeL,
                    unChargeTimeH,
                    unChargeTimeL,
                    offScreenStartHour,
                    offScreenStartMin,
                    offScreenEndHour,
                    offScreenEndtMin,
                    payload.voice,
                  ],
                }),
              ];
          }
        });
      });
    };

    ShareCLScaleProtocol.bleProfile = new ShareCLScaleProfile();
    return ShareCLScaleProtocol;
  })(QNBleProtocol);

var ShareScalebleProfile =
  /** @class */
  (function () {
    function ShareScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.SHARE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    } // eslint-disable-next-line class-methods-use-this

    ShareScalebleProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-GXC';
    };

    ShareScalebleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
      ];
      var modelIds = [number2hex(manufacturer[4]), number2hex(manufacturer[5])];
      var sns = [
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[8]),
      ];
      return {
        modelId: modelIds.join(''),
        isSupportWifi: true,
        isScreenOn: true,
        mac: macs.join(':'),
        sn: sns.join(''),
      };
    };

    return ShareScalebleProfile;
  })();

var ShareScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(ShareScaleProtocol, _super);

    function ShareScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFE0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFE1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ_1 = '0000FFE2-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFE3-0000-1000-8000-00805F9B34FB';
      _this.isHoltk = false; // ?????????????????????????????????

      _this.currentCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = [];
      return _this;
    }
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    // eslint-disable-next-line class-methods-use-this

    ShareScaleProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
          switch (payload.data[0]) {
            case 0x65:
              // payload.data[2]
              // 1 ??????
              // 0 ??????
              (_a = this.syncDataCallback) === null || _a === void 0
                ? void 0
                : _a.call(
                    this,
                    {
                      errCode: payload.data[2],
                    },
                    payload,
                    this
                  );
              break;

            case 0x68:
              (_b = this.rebootCallback) === null || _b === void 0
                ? void 0
                : _b.call(
                    this,
                    {
                      errCode: payload.data[2],
                    },
                    payload,
                    this
                  );
              break;
          }

          return [
            2,
            /*return*/
            Promise.resolve(payload),
          ];
        });
      });
    };

    ShareScaleProtocol.prototype.syncData = function (payload, callback) {
      this.log('[ShareScaleProtocol] ????????????');
      this.syncDataCallback = callback;
      var lightStartTimeHour = Number(payload.lightStartTime.split(':')[0]);
      var lightStartTimeMin = Number(payload.lightStartTime.split(':')[1]);
      var lightStartTimeSec = Number(payload.lightStartTime.split(':')[2]);
      var lightContinueTimeHour = Number(payload.lightContinueTime.split(':')[0]);
      var lightContinueTimeMin = Number(payload.lightContinueTime.split(':')[1]);
      return this.writeData({
        cmdData: [
          0x64,
          0xa,
          payload.voice,
          payload.lightSwitch,
          lightStartTimeHour,
          lightStartTimeMin,
          lightStartTimeSec,
          lightContinueTimeHour,
          lightContinueTimeMin,
        ],
      });
    };

    ShareScaleProtocol.prototype.reboot = function (callback) {
      this.log('[ShareScaleProtocol] ????????????');
      this.rebootCallback = callback;
      return this.writeData({
        cmdData: [0x69, 0x04, 0x01],
      });
    };

    ShareScaleProtocol.bleProfile = new ShareScalebleProfile();
    return ShareScaleProtocol;
  })(QNBleProtocol);

function getUnitString(unitNumber) {
  var unitMapping = {
    0: QNBleUnit.MMHG,
    1: QNBleUnit.KPA,
  }; // bit1 ???????????? 0-mmgh 1-kpa
  // @ts-ignore

  var unit = unitMapping[unitNumber];
  return unit;
}

function parseMeasureInfo(data) {
  var user = data[2];
  var year = Number('20' + data[3]);
  var month = data[4];
  var day = data[5];
  var hour = data[6];
  var minute = data[7];
  var second = data[8];
  var dateTimeString = formatTime(
    new Date(year, month - 1, day, hour, minute, second),
    'YYYY-MM-DD HH:mm:ss'
  ); // ?????????

  var hyper_h = data[9];
  var hyper_l = data[10];
  var hyper = (hyper_h << 8) + hyper_l; // ?????????

  var hypot = data[11]; // ??????

  var heartRate = data[12]; // ????????????

  var result = data[13]; // bit 0

  var unit = getUnitString(result & 1); // bit1-bit3 ?????????????????? ?????????12?????????????????????????????????

  var resultValue = (result >> 1) & 7;
  var response = {
    user: user,
    dateTimeString: dateTimeString,
    // ???????????????????????????10?????????????????????????????????????????????
    hyper: unit === QNBleUnit.KPA ? hyper / 10 : hyper,
    // ???????????????????????????10?????????????????????????????????????????????
    hypot: unit === QNBleUnit.KPA ? hypot / 10 : hypot,
    heartRate: heartRate,
    unit: unit,
    // ???????????????????????????10?????????????????????????????????????????????
    value: resultValue,
  };
  return response;
}

var SphygmomanometerProtocolProfile =
  /** @class */
  (function () {
    function SphygmomanometerProtocolProfile() {
      this.defaultAction = QNBleAction.NOT_SET;
      this.type = QNBleDeviceType.SPHYGMOMANOMETER;
      this.transferType = QNBleTransferType.BLE;
    }

    SphygmomanometerProtocolProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-Hem';
    };

    SphygmomanometerProtocolProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[4]),
      ];
      return {
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
        // bit 0-02??????????????????
        // ???????????????0-?????????????????????1-?????????????????????2-?????????????????????3-??????????????????
        spStandardType: manufacturer[10] & 7,
        // single????????????dual???????????????
        spDeviceType: number2hex(manufacturer[11]) === '05' ? 'dual' : 'single',
      };
    };

    return SphygmomanometerProtocolProfile;
  })();

var SphygmomanometerProtocol =
  /** @class */
  (function (_super) {
    __extends(SphygmomanometerProtocol, _super);

    function SphygmomanometerProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFF2-0000-1000-8000-00805F9B34FB'; // ????????????

      _this.UUID_COMPAIRE_READ = '0000FFF3-0000-1000-8000-00805F9B34FB';
      _this.UUID_COMPAIRE_WRITE = '0000FFF4-0000-1000-8000-00805F9B34FB'; // ????????????

      _this.blePaireStatus = 0; // ??????????????????

      _this.historyCount = 0; // ??????????????????????????????????????????????????????

      _this.lastReceivedHistoryData = {}; // ?????????????????????????????????????????????????????????????????????

      _this.isCancelHistoryData = false; // ????????????????????????????????????

      _this.currentRecivedHistoryDataNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // ???????????????????????????wifi ssid?????????

      _this.lastReceivedWifiIno = {}; // ??????????????????wifi ssid??????

      _this.lastReceivedWifiSsidPackNo = 0; // ???????????????????????????????????????

      _this.currentSetWifiCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(SphygmomanometerProtocol.prototype, 'action', {
      get: function get() {
        return this.operation.action || SphygmomanometerProtocol.bleProfile.defaultAction;
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * @override
     */

    SphygmomanometerProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 2:
              services = _a.sent();
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              this.log('???????????????????????????', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(deviceId, this.serviceId),
              ];

            case 4:
              _a.sent(); // if ([
              //   QNBleAction.SP_SYNC_CURRENT_DATA,
              //   QNBleAction.SP_SYNC_HISTORY_DATA,
              // ].includes(this.operation.action)) {
              // }

              this.log(
                '???????????????????????????????????????',
                'deviceId',
                deviceId,
                'serviceId',
                this.serviceId,
                'characteristicId',
                this.characteristicReadId
              );
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(deviceId, this.serviceId, this.characteristicReadId),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    SphygmomanometerProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      return __awaiter(this, void 0, void 0, function () {
        var data, _o, retValue, _p, status_1;

        return __generator(this, function (_q) {
          switch (_q.label) {
            case 0:
              data = payload.data;
              _q.label = 1;

            case 1:
              _q.trys.push([1, , 67, 68]);

              _o = data[0];

              switch (_o) {
                case 0x12:
                  return [3 /*break*/, 2];

                case 0x14:
                  return [3 /*break*/, 6];

                case 0x10:
                  return [3 /*break*/, 16];

                case 0x23:
                  return [3 /*break*/, 20];

                case 0x56:
                  return [3 /*break*/, 22];

                case 0x58:
                  return [3 /*break*/, 24];

                case 0x61:
                  return [3 /*break*/, 26];

                case 0x63:
                  return [3 /*break*/, 27];

                case 0x65:
                  return [3 /*break*/, 32];

                case 0x67:
                  return [3 /*break*/, 36];

                case 0x69:
                  return [3 /*break*/, 41];

                case 0x6b:
                  return [3 /*break*/, 44];

                case 0x6f:
                  return [3 /*break*/, 49];

                case 0x71:
                  return [3 /*break*/, 52];

                case 0x73:
                  return [3 /*break*/, 57];

                case 0x74:
                  return [3 /*break*/, 60];

                case 0x77:
                  return [3 /*break*/, 62];

                case 0xa0:
                  return [3 /*break*/, 63];
              }

              return [3 /*break*/, 65];

            case 2:
              if (!(this.lastCmd !== 0x12)) return [3 /*break*/, 4];
              return [
                4,
                /*yield*/
                this.getDeviceInfo(data),
              ];

            case 3:
              _q.sent();

              return [3 /*break*/, 5];

            case 4:
              this.log('???????????????0x12?????????????????????');
              _q.label = 5;

            case 5:
              return [3 /*break*/, 66];

            case 6:
              if (!(this.lastCmd !== 0x14)) return [3 /*break*/, 14];
              retValue = data[2];
              (_b = (_a = this.listener).onGetDeviceSetStatus) === null || _b === void 0
                ? void 0
                : _b.call(_a, retValue);
              if (!(retValue === 1)) return [3 /*break*/, 13];
              _p = this.action;

              switch (_p) {
                case QNBleAction.SP_SYNC_CURRENT_DATA:
                  return [3 /*break*/, 7];

                case QNBleAction.SP_SYNC_HISTORY_DATA:
                  return [3 /*break*/, 8];

                case QNBleAction.SET_WIFI:
                  return [3 /*break*/, 10];
              }

              return [3 /*break*/, 12];

            case 7:
              // do nothing
              // ?????????????????????10??????????????????????????????
              return [3 /*break*/, 13];

            case 8:
              // ????????????????????????
              return [
                4,
                /*yield*/
                this.prepareSyncHistoryData(),
              ];

            case 9:
              // ????????????????????????
              _q.sent();

              return [3 /*break*/, 13];

            case 10:
              // ????????????????????????wifi
              return [
                4,
                /*yield*/
                this.doScanWifi(),
              ];

            case 11:
              // ????????????????????????wifi
              _q.sent();

              return [3 /*break*/, 13];

            case 12:
              return [3 /*break*/, 13];

            case 13:
              return [3 /*break*/, 15];

            case 14:
              this.log('???????????????0x14?????????????????????');
              _q.label = 15;

            case 15:
              return [3 /*break*/, 66];

            case 16:
              if (!(this.lastCmd !== 0x10)) return [3 /*break*/, 18]; // if (this.action === QNBleAction.SP_SYNC_CURRENT_DATA) {
              //   await this.doSyncCurrentData(data);
              // } else {
              //   this.log('?????????operation.action?????????????????????????????????????????????????????????');
              // }

              return [
                4,
                /*yield*/
                this.doSyncCurrentData(data),
              ];

            case 17:
              // if (this.action === QNBleAction.SP_SYNC_CURRENT_DATA) {
              //   await this.doSyncCurrentData(data);
              // } else {
              //   this.log('?????????operation.action?????????????????????????????????????????????????????????');
              // }
              _q.sent();

              return [3 /*break*/, 19];

            case 18:
              this.log('???????????????0x10?????????????????????');
              _q.label = 19;

            case 19:
              return [3 /*break*/, 66];

            case 20:
              // if (!this.isCancelHistoryData) {
              //   await this.doSyncHistoryData(data);
              // }
              return [
                4,
                /*yield*/
                this.doSyncHistoryData(data),
              ];

            case 21:
              // if (!this.isCancelHistoryData) {
              //   await this.doSyncHistoryData(data);
              // }
              _q.sent();

              return [3 /*break*/, 66];

            case 22:
              return [
                4,
                /*yield*/
                this.onReceiveWifiSsidData(data),
              ];

            case 23:
              _q.sent();

              return [3 /*break*/, 66];

            case 24:
              // wifi????????????
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x59, 4, 1],
                }),
              ];

            case 25:
              // wifi????????????
              _q.sent();

              (_d = (_c = this.listener).onScanWifiFinished) === null || _d === void 0
                ? void 0
                : _d.call(_c);
              return [3 /*break*/, 66];

            case 26:
              // ??????ssid
              if (data[2] === 1) {
                this.currentSetWifiCmdNo = 0;
                this.log('???????????? WIFI ssid ');
                this.sendWifiSsid();
              }

              return [3 /*break*/, 66];

            case 27:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.ssidCmdData.length)) return [3 /*break*/, 29]; // ssid???????????????

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 28:
              // ssid???????????????
              _q.sent();

              return [3 /*break*/, 31];

            case 29:
              // ssid??????????????????????????????????????????wifi??????
              this.currentSetWifiCmdNo = 0;
              this.log('APP???????????? WIFI PASSWORD??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x64, 4, this.pwdCmdData.length],
                }),
              ];

            case 30:
              _q.sent();

              _q.label = 31;

            case 31:
              return [3 /*break*/, 66];

            case 32:
              if (!(data[2] === 1)) return [3 /*break*/, 35];
              if (!(this.pwdCmdData.length > 0)) return [3 /*break*/, 33];
              this.log('??????????????????');
              this.currentSetWifiCmdNo = 0;
              this.sendWifiPwd();
              return [3 /*break*/, 35];

            case 33:
              this.log('?????????????????????66h????????????????????????????????? server_url');
              this.currentSetWifiCmdNo = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 4, this.dataServerUrlData.length],
                }),
              ];

            case 34:
              _q.sent();

              _q.label = 35;

            case 35:
              return [3 /*break*/, 66];

            case 36:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.pwdCmdData.length)) return [3 /*break*/, 38]; // wifi?????????????????????

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 37:
              // wifi?????????????????????
              _q.sent();

              return [3 /*break*/, 40];

            case 38:
              // wifi?????????????????????????????????
              this.currentSetWifiCmdNo = 0; // ??????server_url

              this.log('???????????????????????? data_server_url');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 4, this.dataServerUrlData.length],
                }),
              ];

            case 39:
              _q.sent();

              _q.label = 40;

            case 40:
              return [3 /*break*/, 66];

            case 41:
              if (!(data[2] === 1)) return [3 /*break*/, 43];
              this.log('????????????SEVER URL');
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 42:
              _q.sent();

              _q.label = 43;

            case 43:
              return [3 /*break*/, 66];

            case 44:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.dataServerUrlData.length))
                return [3 /*break*/, 46]; // ???????????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 45:
              // ???????????????URL???????????????
              _q.sent();

              return [3 /*break*/, 48];

            case 46:
              // ???????????????URL??????????????????????????????????????????OTA URL??????
              this.currentSetWifiCmdNo = 0;
              this.log('?????????????????? OTA????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x6e, 4, this.otaServerUrlData.length],
                }),
              ];

            case 47:
              _q.sent();

              _q.label = 48;

            case 48:
              return [3 /*break*/, 66];

            case 49:
              if (!(data[2] === 1)) return [3 /*break*/, 51];
              this.log('????????????OTA URL');
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 50:
              _q.sent();

              _q.label = 51;

            case 51:
              return [3 /*break*/, 66];

            case 52:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.otaServerUrlData.length))
                return [3 /*break*/, 54]; // ota?????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 53:
              // ota?????????URL???????????????
              _q.sent();

              return [3 /*break*/, 56];

            case 54:
              // ota?????????URL??????????????????????????????????????????????????????
              this.currentSetWifiCmdNo = 0;
              this.log('????????????');
              return [
                4,
                /*yield*/
                this.sendEncryptKeyData(),
              ];

            case 55:
              _q.sent();

              _q.label = 56;

            case 56:
              return [3 /*break*/, 66];

            case 57:
              if (!(data[2] === 0)) return [3 /*break*/, 59];
              this.log('?????????????????????????????????');
              return [
                4,
                /*yield*/
                this.sendEncryptKeyData(),
              ];

            case 58:
              _q.sent();

              _q.label = 59;

            case 59:
              return [3 /*break*/, 66];

            case 60:
              // TODO wifi?????????????????????????????????????????????
              if (data[2] === 1) {
                (_f = (_e = this.listener).onSetWifiSuccess) === null || _f === void 0
                  ? void 0
                  : _f.call(_e);
              } else {
                (_h = (_g = this.listener).onSetWifiFail) === null || _h === void 0
                  ? void 0
                  : _h.call(_g, data[2]);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x75, 4, 1],
                }),
              ];

            case 61:
              _q.sent();

              return [3 /*break*/, 66];

            case 62:
              // ????????????????????????
              // 0:wifi?????????
              // 1:wifi?????????
              // 2:wifi??????????????????
              // 3:wifi??????????????????
              (_k = (_j = this.listener).onGetQueryWifiConnectStatusResult) === null ||
              _k === void 0
                ? void 0
                : _k.call(_j, data[2]);
              return [3 /*break*/, 66];

            case 63:
              status_1 = data[2];
              this.blePaireStatus = status_1;
              (_m = (_l = this.listener).onGetBlePaireStatus) === null || _m === void 0
                ? void 0
                : _m.call(_l, status_1);
              return [
                4,
                /*yield*/
                this.writeData({
                  characteristicId: this.UUID_COMPAIRE_WRITE,
                  cmdData: [0xa1, 4, 1],
                }),
              ];

            case 64:
              _q.sent();

              return [3 /*break*/, 66];

            case 65:
              return [3 /*break*/, 66];

            case 66:
              return [3 /*break*/, 68];

            case 67:
              this.lastCmd = data[0];
              return [
                7,
                /*endfinally*/
              ];

            case 68:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    SphygmomanometerProtocol.prototype.getDeviceInfo = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var deviceInfo,
          chargeType,
          supportChangeLanguage,
          standardType,
          deviceStatus,
          chargeStatus,
          unit,
          language,
          volume,
          historyCount,
          modelId,
          softwareVersion,
          bleVersion,
          bleProtocolVersion,
          nowDate,
          year,
          month,
          day,
          hour,
          minute,
          second,
          timeZoneOffset,
          timeZone;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              deviceInfo = data[2];
              chargeType = deviceInfo & 1;
              supportChangeLanguage = (deviceInfo >> 1) & 3;
              standardType = (deviceInfo >> 3) & 7;
              deviceStatus = data[4];
              chargeStatus = deviceStatus & 1;
              unit = getUnitString((deviceStatus >> 1) & 1);
              language = (deviceStatus >> 2) & 3;
              volume = (deviceStatus >> 4) & 7;
              historyCount = data[11];
              this.historyCount = historyCount;
              modelId = number2hex(data[12]) + number2hex(data[13]);
              softwareVersion = data[14];
              bleVersion = data[15];
              bleProtocolVersion = data[16];
              (_b = (_a = this.listener).onGetDeviceInfo) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      modelId: modelId,
                      deviceInfo: {
                        chargeType: chargeType,
                        supportChangeLanguage: supportChangeLanguage,
                        standardType: standardType,
                      },
                      deviceStatus: {
                        chargeStatus: chargeStatus,
                        unit: unit,
                        language: language,
                        volume: volume,
                      },
                      historyCount: historyCount,
                      softwareVersion: softwareVersion,
                      bleVersion: bleVersion,
                      bleProtocolVersion: bleProtocolVersion,
                    },
                  });
              nowDate = new Date();
              year = Number(('' + nowDate.getFullYear()).split('').splice(2).join(''));
              month = nowDate.getMonth() + 1;
              day = nowDate.getDate();
              hour = nowDate.getHours();
              minute = nowDate.getMinutes();
              second = nowDate.getSeconds();
              timeZoneOffset = nowDate.getTimezoneOffset() / 15;
              timeZone = Math.abs(timeZoneOffset) | (timeZoneOffset > 0 ? 0x80 : 0);
              this.log('????????????', year, month, day, hour, minute, second, timeZone);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    13,
                    year,
                    month,
                    day,
                    hour,
                    minute,
                    second, // ???????????? 0xff?????????????????????00???mmgh???01???kpa
                    0xff, // 0xff??????????????????????????? 00~05
                    0xff, // 0xFF?????????????????????00????????? ???01?????????
                    0xff,
                    timeZone,
                  ],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     */

    SphygmomanometerProtocol.prototype.doSyncCurrentData = function (data) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var measureStatus, measureCmdData, measureInfo, _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              measureStatus = data[2]; // ??????????????????

              data.splice(2, 1);
              measureCmdData = data;
              this.log(
                'doSyncCurrentData',
                'measureStatus',
                measureStatus,
                'measureCmdData',
                measureCmdData
              );
              measureInfo = parseMeasureInfo(measureCmdData);
              _g = measureStatus;

              switch (_g) {
                case 0:
                  return [3 /*break*/, 1];

                case 1:
                  return [3 /*break*/, 2];

                case 2:
                  return [3 /*break*/, 4];
              }

              return [3 /*break*/, 6];

            case 1:
              (_b = (_a = this.listener).onMeasuring) === null || _b === void 0
                ? void 0
                : _b.call(_a, measureInfo);
              return [3 /*break*/, 7];

            case 2:
              this.log('??????onMeasureSuccess');
              (_d = (_c = this.listener).onMeasureSuccess) === null || _d === void 0
                ? void 0
                : _d.call(_c, measureInfo);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x1f, 4, 0x10],
                }),
              ];

            case 3:
              _h.sent();

              return [3 /*break*/, 7];

            case 4:
              (_f = (_e = this.listener).onMeasureFail) === null || _f === void 0
                ? void 0
                : _f.call(_e, measureInfo);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x1f, 4, 0x10],
                }),
              ];

            case 5:
              _h.sent();

              return [3 /*break*/, 7];

            case 6:
              return [3 /*break*/, 7];

            case 7:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ????????????????????????????????????
     * ?????????????????? qnble.callProtocolMethodAsync(deviceId, 'prepareSyncHistoryData', ...args)
     */

    SphygmomanometerProtocol.prototype.prepareSyncHistoryData = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('????????????????????????????????????');
              this.currentRecivedHistoryDataNo = 0;
              this.isCancelHistoryData = false;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x22, 4, 1],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     */

    SphygmomanometerProtocol.prototype.doSyncHistoryData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var measureInfo;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              measureInfo = parseMeasureInfo(data);
              this.log('doSyncHistoryData', measureInfo); // ????????????????????????????????????

              if (!equal(measureInfo, this.lastReceivedHistoryData)) {
                (_b = (_a = this.listener).onGetHistoryData) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, measureInfo);
                this.lastReceivedHistoryData = measureInfo;
              } else {
                this.log(
                  'doSyncHistoryData',
                  '?????????????????????????????????',
                  'lastReceivedHistoryData',
                  this.lastReceivedHistoryData
                );
              }

              this.currentRecivedHistoryDataNo += 1; // ??????????????????????????????

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x24, 4, this.isCancelHistoryData ? 0 : 1],
                }),
              ];

            case 1:
              // ??????????????????????????????
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ????????????????????????
     * ?????????????????? qnble.callProtocolMethodAsync(deviceId, 'cancelSyncHistoryData', ...args)
     */

    SphygmomanometerProtocol.prototype.cancelSyncHistoryData = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log('????????????????????????'); // ???????????????????????????????????????????????????????????????

          this.isCancelHistoryData = true;
          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * ????????????????????????wifi
     * ?????????????????? qnble.callProtocolMethodAsync(deviceId, 'doScanWifi', ...args)
     */

    SphygmomanometerProtocol.prototype.doScanWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('????????????????????????wifi');
              this.wifiInfoCache.rssi = 0;
              this.wifiInfoCache.ssid = [];
              this.lastReceivedWifiSsidPackNo = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x55, 4, 1],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????wifi????????????
     */

    SphygmomanometerProtocol.prototype.onReceiveWifiSsidData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var rssi, packInfo, packCount, packNo, ssidData, info;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              rssi = data[1] - 0xff - 1;
              packInfo = data[2];
              packCount = (packInfo >> 4) & 15;
              packNo = packInfo & 15;
              ssidData = data.slice(3, data.length - 1);
              this.log(
                'onReceiveWifiSsidData',
                'packCount',
                packCount,
                'packNo',
                packNo,
                'ssidData',
                ssidData
              );

              if (packNo > this.lastReceivedWifiSsidPackNo) {
                this.wifiInfoCache.rssi = rssi;
                this.wifiInfoCache.ssid.push(byteArrayToString(ssidData));

                if (packCount === packNo) {
                  this.log('wifi ssid base64??????', this.wifiInfoCache.ssid.join(''));
                  info = {
                    rssi: rssi,
                    ssid: gBase64.decode(this.wifiInfoCache.ssid.join('')),
                    level: getWifiRssiLevel(rssi),
                  };
                  this.log('???????????? wifi ??????', info);

                  if (!equal(this.lastReceivedWifiIno, info)) {
                    (_b = (_a = this.listener).onGetWifiInfo) === null || _b === void 0
                      ? void 0
                      : _b.call(_a, info);
                    this.lastReceivedWifiIno = info;
                  } else {
                    this.log(
                      '??????????????????????????? wifi ??????',
                      'lastReceivedWifiIno',
                      this.lastReceivedWifiIno
                    );
                  }

                  this.wifiInfoCache.rssi = 0;
                  this.wifiInfoCache.ssid = [];
                  this.lastReceivedWifiSsidPackNo = 0;
                } else {
                  this.lastReceivedWifiSsidPackNo = packNo;
                }
              } else {
                console.warn('??????????????? wifi ssid ?????????', data);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x57, 4, packInfo],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ?????????????????????????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'doSetWifi', ...args)
     */

    SphygmomanometerProtocol.prototype.doSetWifi = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('doSetWifi', payload);
              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(payload),
              ];

            case 1:
              _a.sent(); // APP????????????WIFI SSID ??????

              this.log('APP????????????WIFI SSID??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x60, 4, this.ssidCmdData.length],
                }),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    SphygmomanometerProtocol.prototype.doPrepareSetWifi = function (payload) {
      if (payload === void 0) {
        payload = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          encryptKey,
          _f,
          otaServerUrl,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        return __generator(this, function (_g) {
          (_a = __assign(__assign({}, this.operation), payload)),
            (_b = _a.wifiSsid),
            (wifiSsid = _b === void 0 ? '' : _b),
            (_c = _a.wifiPwd),
            (wifiPwd = _c === void 0 ? '' : _c),
            (_d = _a.dataServerUrl),
            (dataServerUrl = _d === void 0 ? '' : _d),
            (_e = _a.encryptKey),
            (encryptKey = _e === void 0 ? '' : _e),
            (_f = _a.otaServerUrl),
            (otaServerUrl = _f === void 0 ? 'https://ota.yolanda.hk' : _f);
          this.log(
            'wifiSsid',
            wifiSsid,
            'wifiPwd',
            wifiPwd,
            'dataServerUrl',
            dataServerUrl,
            'encryptKey',
            encryptKey
          );

          if (wifiSsid.length > 32) {
            return [
              2,
              /*return*/
              Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)),
            ];
          }

          if (wifiPwd.length > 64) {
            return [
              2,
              /*return*/
              Promise.reject(new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)),
            ];
          }

          ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
          pwdByteArray = stringToByteArray(wifiPwd);
          this.log('pwdByteArray', pwdByteArray, 'wifiPwd', wifiPwd);
          dataServerUrlByteArray = stringToByteArray(dataServerUrl);
          otaServerUrlByteArray = stringToByteArray(otaServerUrl);
          this.ssidCmdData = splitArray(ssidByteArray);
          this.pwdCmdData = splitArray(pwdByteArray);
          this.dataServerUrlData = splitArray(dataServerUrlByteArray);
          this.otaServerUrlData = splitArray(otaServerUrlByteArray);
          this.encryptKeyCmdData = stringToByteArray(encryptKey); // ?????????????????????

          this.currentSetWifiCmdNo = 0;
          return [
            2,
            /*return*/
            Promise.resolve(0),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendWifiSsid = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          this.log(
            'ssidCmdData??????',
            this.ssidCmdData,
            'currentSetWifiCmdNo',
            this.currentSetWifiCmdNo
          );
          cmd = this.ssidCmdData[this.currentSetWifiCmdNo];
          cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

          this.currentSetWifiCmdNo += 1; // ???4???????????????????????????????????????,???4????????????????????????????????????,??????0X21,??????????????????,???????????????????????????
          // const packInfo = (cmdCount << 4) + this.currentSetWifiCmdNo;

          this.log('\u53D1\u9001\u7B2C ' + this.currentSetWifiCmdNo + ' \u5305 SSID \u6570\u636E');
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread([0x62, cmdLength, this.currentSetWifiCmdNo], cmd),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendWifiPwd = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          this.log('pwdCmdData', this.pwdCmdData);
          cmd = this.pwdCmdData[this.currentSetWifiCmdNo] || [];
          cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

          this.currentSetWifiCmdNo += 1;
          this.log('\u53D1\u9001\u7B2C ' + this.currentSetWifiCmdNo + ' \u5305 PWD \u6570\u636E'); // ???4???????????????????????????????????????,???4????????????????????????????????????,??????0X21,??????????????????,???????????????????????????
          // const packInfo = cmdCount > 0 ? ((cmdCount << 4) + this.currentSetWifiCmdNo) : 0;

          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread([0x66, cmdLength, this.currentSetWifiCmdNo], cmd),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendDataServerUrl = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          cmd = this.dataServerUrlData[this.currentSetWifiCmdNo];
          cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

          this.currentSetWifiCmdNo += 1; // ???4???????????????????????????????????????,???4????????????????????????????????????,??????0X21,??????????????????,???????????????????????????
          // const packInfo = (cmdCount << 4) + this.currentSetWifiCmdNo;

          this.log(
            '\u53D1\u9001\u7B2C ' +
              this.currentSetWifiCmdNo +
              ' \u5305 DATA\u670D\u52A1\u5668 \u6570\u636E'
          );
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread([0x6a, cmdLength, this.currentSetWifiCmdNo], cmd),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendOtaServerUrl = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          cmd = this.otaServerUrlData[this.currentSetWifiCmdNo];
          cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

          this.currentSetWifiCmdNo += 1; // ???4???????????????????????????????????????,???4????????????????????????????????????,??????0X21,??????????????????,???????????????????????????
          // const packInfo = (cmdCount << 4) + this.currentSetWifiCmdNo;

          this.log(
            '\u53D1\u9001\u7B2C ' +
              this.currentSetWifiCmdNo +
              ' \u5305 OTA\u670D\u52A1\u5668 \u6570\u636E'
          );
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread([0x70, cmdLength, this.currentSetWifiCmdNo], cmd),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendEncryptKeyData = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log('????????????');
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread(
                [0x72, this.encryptKeyCmdData.length + 4, 1],
                this.encryptKeyCmdData
              ),
            }),
          ];
        });
      });
    };
    /**
     * ??????wifi????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'queryWifiConnectStatus', ...args)
     * @param {number} type 1???????????????wifi???????????? 2?????????wifi?????????????????????
     */

    SphygmomanometerProtocol.prototype.queryWifiConnectStatus = function (type) {
      if (type === void 0) {
        type = 1;
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x76, 4, type],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     */

    SphygmomanometerProtocol.prototype.prepareBlePaire = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  this.UUID_IBT_SERVICE,
                  this.UUID_COMPAIRE_READ
                ),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    SphygmomanometerProtocol.bleProfile = new SphygmomanometerProtocolProfile();
    return SphygmomanometerProtocol;
  })(QNBleProtocol);

function getUnitString$1(unitNumber) {
  var unitMapping = {
    1: QNBleUnit.G,
    2: QNBleUnit.ML,
    4: QNBleUnit.MILKML,
    8: QNBleUnit.OZ,
    22: QNBleUnit.LBOZ,
  }; // ???????????????0x01- g???0x02- ml???0x04 - ml???????????????0x08 - fl.oz???0x10- lb???oz???
  // @ts-ignore

  var unit = unitMapping[unitNumber];
  return unit;
}

function computedWeight(weight, precision) {
  var dividePrecision = precision ? 10 : 1;
  return (weight = Number((weight / dividePrecision).toFixed(1)));
}

var BleKitchenScaleProtocolProfile =
  /** @class */
  (function () {
    function BleKitchenScaleProtocolProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.BLE_KITCHEN_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    BleKitchenScaleProtocolProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-KS';
    };

    BleKitchenScaleProtocolProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      return {
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return BleKitchenScaleProtocolProfile;
  })();

var BleKitchenScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(BleKitchenScaleProtocol, _super);

    function BleKitchenScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = 'FFF0';
      _this.UUID_IBT_READ = 'FFF1';
      _this.UUID_IBT_WRITE = 'FFF2';
      return _this;
    }

    BleKitchenScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(deviceId, this.serviceId, this.characteristicReadId),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    BleKitchenScaleProtocol.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              data = payload.data;
              _a = data[0];

              switch (_a) {
                case 0x10:
                  return [3 /*break*/, 1];
              }

              return [3 /*break*/, 3];

            case 1:
              return [
                4,
                /*yield*/
                this.onGetScaleData(data),
              ];

            case 2:
              _b.sent();

              return [3 /*break*/, 4];

            case 3:
              return [3 /*break*/, 4];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    BleKitchenScaleProtocol.prototype.onGetScaleData = function (data) {
      return __awaiter(this, void 0, void 0, function () {
        var scaleMessage,
          isPeeled,
          type,
          overWeight,
          isSteady,
          precision,
          range,
          weightUnit,
          getWeight,
          weight,
          scaleData;
        return __generator(this, function (_a) {
          scaleMessage = data[8];
          isPeeled = scaleMessage & 1;
          type = (scaleMessage >> 1) & 1;
          overWeight = (scaleMessage >> 2) & 1 ? true : false;
          isSteady = (scaleMessage >> 3) & 1;
          precision = (scaleMessage >> 4) & 1;
          range = (scaleMessage >> 7) & 1;
          weightUnit = getUnitString$1(parseInt(String(data[7]), 16));
          getWeight = Number.parseFloat(this.decodeWeight(data[9], data[10]).toFixed(2));
          weight = computedWeight(getWeight, precision);
          scaleData = {
            weight: weight,
            weightUnit: weightUnit,
            isPeeled: isPeeled,
            type: type,
            overWeight: overWeight,
            isSteady: isSteady,
            range: range,
          };
          this.listener.onGetScaleData(scaleData);
          return [
            2,
            /*return*/
            this.doAdvertising(data),
          ];
        });
      });
    };
    /**
     * ?????????????????????????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'doSetControl', ...args)
     */

    BleKitchenScaleProtocol.prototype.doSetControl = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: [0x13, 0x04, payload.control],
            }),
          ];
        });
      });
    };

    BleKitchenScaleProtocol.bleProfile = new BleKitchenScaleProtocolProfile();
    return BleKitchenScaleProtocol;
  })(QNBleProtocol);

function getUnitString$2(unitNumber) {
  var unitMapping = {
    1: QNBleUnit.G,
    2: QNBleUnit.ML,
    3: QNBleUnit.OZ,
    4: QNBleUnit.LBOZ,
    5: QNBleUnit.MILKML,
  }; // ???????????????0x01- g???0x02- ml???0x04 - ml???????????????0x08 - fl.oz???0x10- lb???oz???
  // @ts-ignore

  var unit = unitMapping[unitNumber];
  return unit;
}

var BroadcastKitchenScaleProtocolProfile =
  /** @class */
  (function () {
    function BroadcastKitchenScaleProtocolProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.OTO_BROADCAST_SCALE;
      this.transferType = QNBleTransferType.BROADCAST;
    }

    BroadcastKitchenScaleProtocolProfile.prototype.isTargetDevice = function (nativeDevice) {
      var manufacturer = nativeDevice.manufacturer;
      /**
       * ??????????????? data1(1)???data2(2)????????????7A???5F?????????APP??????
       */

      return manufacturer[0] === 0x7a && manufacturer[1] === 0x5f;
    };

    BroadcastKitchenScaleProtocolProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[9]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[14]),
      ];
      return {
        modelId: number2hex(manufacturer[6]) + number2hex(manufacturer[7]),
        mac: macs.join(':'),
      };
    };

    return BroadcastKitchenScaleProtocolProfile;
  })();

var BroadcastKitchenScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(BroadcastKitchenScaleProtocol, _super);

    function BroadcastKitchenScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.measureCount = 0;
      return _this;
    }

    BroadcastKitchenScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          data = this.bleDevice.manufacturer;
          return [
            2,
            /*return*/
            this.decode({
              data: data,
            }),
          ];
        });
      });
    };
    /**
     * @override
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    BroadcastKitchenScaleProtocol.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data,
          weight,
          scaleMessage,
          isSteady,
          weightUnitIndex,
          overWeight,
          type,
          isPeeled,
          weightUnit,
          scaleData;
        return __generator(this, function (_a) {
          data = payload.data;
          weight = Number.parseFloat(this.decodeWeight(data[3], data[4]).toFixed(2));
          scaleMessage = data[8];
          isSteady = (scaleMessage >> 7) & 1;
          weightUnitIndex = (scaleMessage >> 1) & 7;
          overWeight = (scaleMessage >> 6) & 1 ? true : false;
          type = (scaleMessage >> 5) & 1;
          isPeeled = (scaleMessage >> 4) & 1;
          weightUnit = getUnitString$2(weightUnitIndex);
          scaleData = {
            weight: weight,
            weightUnit: weightUnit,
            isPeeled: isPeeled,
            type: type,
            overWeight: overWeight,
            isSteady: isSteady,
          };
          this.listener.onGetScaleData(scaleData);
          return [
            2,
            /*return*/
            this.doAdvertising(data),
          ];
        });
      });
    };

    BroadcastKitchenScaleProtocol.bleProfile = new BroadcastKitchenScaleProtocolProfile();
    return BroadcastKitchenScaleProtocol;
  })(QNBleProtocol);

var FasciaGunMCUProtocolProfile =
  /** @class */
  (function () {
    function FasciaGunMCUProtocolProfile() {
      this.defaultAction = QNBleAction.FG_ADJUST_SETTING;
      this.transferType = QNBleTransferType.BLE;
      this.type = QNBleDeviceType.FASCIA_GUN;
    }

    FasciaGunMCUProtocolProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'Hi-QNCM10A-120C000';
    };

    FasciaGunMCUProtocolProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var modelId = number2hex(manufacturer[2]) + number2hex(manufacturer[3]);
      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      var targetDevice = {
        modelId: modelId,
        mac: macs.join(':'),
        isSupportWifi: false,
        isScreenOn: false,
      };
      return targetDevice;
    };

    return FasciaGunMCUProtocolProfile;
  })();

var FasciaGunMCUProtocol =
  /** @class */
  (function (_super) {
    __extends(FasciaGunMCUProtocol, _super);

    function FasciaGunMCUProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_READ = 'FFF1';
      _this.UUID_IBT_WRITE = 'FFF2';
      _this.UUID_IBT_SERVICE = 'FFF0';
      return _this;
    }

    FasciaGunMCUProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 2:
              services = _a.sent();
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              this.log('???????????????????????????', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(deviceId, this.serviceId),
              ];

            case 4:
              _a.sent();

              this.log('???????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(deviceId, this.serviceId, this.characteristicReadId),
              ];

            case 5:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    FasciaGunMCUProtocol.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, header, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              data = payload.data;
              header = data[0];
              _a = header;

              switch (_a) {
                case 0x10:
                  return [3 /*break*/, 1];

                case 0x21:
                  return [3 /*break*/, 3];

                case 0x31:
                  return [3 /*break*/, 4];

                case 0x41:
                  return [3 /*break*/, 5];
              }

              return [3 /*break*/, 6];

            case 1:
              // ??????????????????
              return [
                4,
                /*yield*/
                this.getDeviceInfo(data),
              ];

            case 2:
              // ??????????????????
              _b.sent();

              return [3 /*break*/, 7];

            case 3:
              // ?????????????????????????????????
              this.setDeviceWorkGearResult(data);
              return [3 /*break*/, 7];

            case 4:
              this.setDeviceWorkTimeResult(data);
              return [3 /*break*/, 7];

            case 5:
              this.setDeviceWorkModeResult(data);
              return [3 /*break*/, 7];

            case 6:
              return [3 /*break*/, 7];

            case 7:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x10 ??????????????????

    FasciaGunMCUProtocol.prototype.getDeviceInfo = function (data) {
      var _a;

      return __awaiter(this, void 0, void 0, function () {
        var id, bcuVer, bleVer, gear, gmqMode, batteryInfo;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              id = (data[2] << 8) + data[3];
              bcuVer = data[4];
              bleVer = data[5];
              gear = data[6];
              gmqMode = data[7];
              batteryInfo = data[8];
              (_a = this.listener) === null || _a === void 0
                ? void 0
                : _a.onGetDeviceInfo({
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      id: id,
                      bcuVer: bcuVer,
                      bleVer: bleVer,
                      gear: gear,
                      gmqMode: gmqMode,
                      batteryInfo: batteryInfo,
                    },
                  });
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x11,
                  cmd: [0x01],
                }),
              ];

            case 1:
              _b.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     * @param gear 1-30
     */

    FasciaGunMCUProtocol.prototype.setDeviceWorkGear = function (gear) {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              data = Number.parseInt(gear.toString());

              if (data < 1 || data > 30) {
                this.log(
                  '\u6863\u4F4D\u53C2\u6570: ' +
                    data +
                    ',\u4E0D\u5728\u6B63\u786E\u8303\u56F4\u5185,\u65E0\u6CD5\u8BBE\u7F6E'
                );
                return [
                  2,
                  /*return*/
                  Promise.reject(),
                ];
              }

              this.log('\u5C1D\u8BD5\u8BBE\u7F6E\u7B4B\u819C\u67AA\u6863\u4F4D\u4E3A: ' + data);
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x20,
                  cmd: [data],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x21

    FasciaGunMCUProtocol.prototype.setDeviceWorkGearResult = function (data) {
      var result = data[2] === 0x01;
      this.log(
        '\u7B4B\u819C\u67AA\u6863\u4F4D\u8BBE\u7F6E\u7ED3\u679C: ' + (result ? '??????' : '??????')
      );
    };
    /**
     * ????????????????????????(??????:min)
     * @param time ??????5-300 ?????? 5
     */

    FasciaGunMCUProtocol.prototype.setDeviceWorkTime = function (time) {
      return __awaiter(this, void 0, void 0, function () {
        var data, cmd;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              data = Number.parseInt((time / 5).toString()) * 5;

              if (data < 5 || data > 300) {
                this.log(
                  '\u5DE5\u4F5C\u65F6\u95F4\u53C2\u6570: ' +
                    data +
                    ',\u4E0D\u5728\u6B63\u786E\u8303\u56F4\u5185,\u65E0\u6CD5\u8BBE\u7F6E'
                );
                return [
                  2,
                  /*return*/
                  Promise.reject(),
                ];
              }

              this.log(
                '\u5C1D\u8BD5\u8BBE\u7F6E\u7B4B\u819C\u67AA\u5DE5\u4F5C\u65F6\u95F4\u4E3A: ' +
                  data +
                  'min'
              );
              cmd = [];
              cmd.push((data >> 8) & 0xff);
              cmd.push(data & 0xff);
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x30,
                  cmd: cmd,
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x31

    FasciaGunMCUProtocol.prototype.setDeviceWorkTimeResult = function (data) {
      var result = data[2] === 0x01;
      this.log(
        '\u7B4B\u819C\u67AA\u5DE5\u4F5C\u65F6\u95F4\u8BBE\u7F6E\u7ED3\u679C: ' +
          (result ? '??????' : '??????')
      );
    };
    /**
     * ???????????????????????????
     * @param mode 1 ?????? 2 ????????????
     */

    FasciaGunMCUProtocol.prototype.setDeviceWorkMode = function (mode) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log(
                '\u5C1D\u8BD5\u8BBE\u7F6E\u7B4B\u819C\u67AA\u5DE5\u4F5C\u6A21\u5F0F\u4E3A: ' + mode
              );
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x40,
                  cmd: [mode],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x41

    FasciaGunMCUProtocol.prototype.setDeviceWorkModeResult = function (data) {
      var result = data[2] === 0x01;
      this.log(
        '\u7B4B\u819C\u67AA\u5DE5\u4F5C\u6A21\u5F0F\u8BBE\u7F6E\u7ED3\u679C: ' +
          (result ? '??????' : '??????')
      );
    };

    FasciaGunMCUProtocol.bleProfile = new FasciaGunMCUProtocolProfile();
    return FasciaGunMCUProtocol;
  })(QNBleProtocol);

/**
 * ????????????
 */

var UUID_TIME_SERVICES$1 = '00001805-0000-1000-8000-00805F9B34FB'; // ????????????????????????

var UUID_TIME_WRITE_READ$1 = '00002A2B-0000-1000-8000-00805F9B34FB';
/**
 * ??????????????????
 */

var UUID_USER_SERVICES$1 = '0000181C-0000-1000-8000-00805F9B34FB'; // ????????????????????????,????????????????????????

var UUID_USER_WRITE_READ$1 = '00002A9F-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_USER_GRAND_UPDATE$1 = '00002A8C-0000-1000-8000-00805F9B34FB'; // ????????????

var UUID_USER_HEIGHT_UPDATE$1 = '00002A8E-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_USER_BIRTHDAY_UPDATE$1 = '00002A85-0000-1000-8000-00805F9B34FB'; // ????????????

var UUID_USER_AGE_UPDATE$1 = '00002A80-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_USER_ALGORITHM_UPDATE$1 = '00002AFF-0000-1000-8000-00805F9B34FB';
/**
 * ????????????
 */

var UUID_WEIGHT_SERVICES$1 = '0000181D-0000-1000-8000-00805F9B34FB'; // ????????????????????????????????????

var UUID_WEIGHT_READ$1 = '00002A9E-0000-1000-8000-00805F9B34FB'; // ??????????????????

var UUID_WEIGHT_NOTIFY$1 = '00002A9D-0000-1000-8000-00805F9B34FB';
/**
 * ????????????????????????
 */

var UUID_BODY_SERVICES$1 = '0000181B-0000-1000-8000-00805F9B34FB'; // ??????????????????????????????(????????????)

var UUID_BODY_READ$1 = '00002A9B-0000-1000-8000-00805F9B34FB'; // ????????????????????????

var UUID_BODY_NOTIFY$1 = '00002A9C-0000-1000-8000-00805F9B34FB';
/**
 * ?????????????????????
 */

var UUID_CUSTOMIZE_SERVICES = '0000FFE0-0000-1000-8000-00805F9B34FB'; // ??????????????? ????????????????????????????????????

var UUID_USER_DEFINED_WRITE$1 = '0000FFE2-0000-1000-8000-00805F9B34FB'; // ??????????????? ??????????????????????????????????????????

var UUID_USER_DEFINED_READ$1 = '0000FFE1-0000-1000-8000-00805F9B34FB';

var WspDualScalebleProfile$1 =
  /** @class */
  (function () {
    function WspDualScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    WspDualScalebleProfile.prototype.isTargetDevice = function (nativeDevice) {
      var manufacturer = nativeDevice.manufacturer,
        bleName = nativeDevice.bluetoothName;

      if (
        (bleName === 'QN-Scale' || /^Hi-/.test(bleName)) &&
        nativeDevice.manufacturer.length >= 19
      ) {
        var scaleInfoByte = manufacturer[10];

        if (scaleInfoByte & 16) {
          // ???????????????????????????
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    WspDualScalebleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var totalUserCount = manufacturer[4];
      var registerUserCount = manufacturer[5];
      var offlineDataCount = manufacturer[6];
      var firmwareVersion = manufacturer[7];
      var scaleVersion = manufacturer[8];
      var wifiVersion = manufacturer[9];
      var scaleInfoByte = manufacturer[10];
      var hardVersion = manufacturer[17] << 8 || manufacturer[18];
      var macs = [
        number2hex(manufacturer[16]),
        number2hex(manufacturer[15]),
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
      ];
      return {
        isSupportWifi: true,
        isWspScale: true,
        isScreenOn: true,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
        totalUserCount: totalUserCount,
        registerUserCount: registerUserCount,
        offlineDataCount: offlineDataCount,
        firmwareVersion: firmwareVersion,
        scaleVersion: scaleVersion,
        wifiVersion: wifiVersion,
        scaleInfoByte: scaleInfoByte,
        hardVersion: hardVersion,
      };
    };

    return WspDualScalebleProfile;
  })();

var WspDualScaleProtocol$1 =
  /** @class */
  (function (_super) {
    __extends(WspDualScaleProtocol, _super);

    function WspDualScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this; // ?????????????????????????????????

      _this.currentCmdNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // ???????????????????????????wifi ssid?????????

      _this.lastReceivedWifiIno = {}; // ??????????????????wifi ssid??????

      _this.lastReceivedWifiSsidPackNo = 0; // ???????????????????????????????????????

      _this.currentSetWifiCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = []; // body????????????

      _this.bodyByteDataArr = []; // ???????????????

      _this.isStoreData = false; // ????????????

      _this.historyRecords = []; // wifi???????????????????????????

      _this.wifiNotified = false;
      return _this;
    } // ????????????????????????????????????

    WspDualScaleProtocol.prototype.delayWriteDataAfterNotify = function () {
      return __awaiter(this, void 0, void 0, function () {
        var delay;
        return __generator(this, function (_a) {
          delay = this.bleNative.name === 'QNBleNativeHuaWeiHilink' ? 200 : 50;
          return [
            2,
            /*return*/
            timeoutPromise(delay),
          ];
        });
      });
    };

    WspDualScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var services, services_1, services_1_1, serviceId, e_1_1, e_2;

        var e_1, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              // ???????????????
              this.instanceScaleBiz();
              console.log('prepare:wsp-eight', this.operation);

              if (!this.operation.userIndex && !this.operation.isRegisterUser) {
                // ???????????????????????????????????????????????????????????????????????????????????????
                this.operation.userIndex = 0xaa;
                this.operation.userKey = 0x270f;
                this.operation.isUpdateUser = true;
              }

              if (!(this.bleNative.name === 'QNBleNativeJDIot')) return [3 /*break*/, 2];
              this.log('??????2s???????????????');
              return [
                4,
                /*yield*/
                timeoutPromise(2e3),
              ];

            case 1:
              _b.sent();

              _b.label = 2;

            case 2:
              return [
                4,
                /*yield*/
                this.bleNative.findService(this.bleDevice.deviceId),
              ];

            case 3:
              services = _b.sent();
              _b.label = 4;

            case 4:
              _b.trys.push([4, 9, 10, 11]);

              (services_1 = __values(services)), (services_1_1 = services_1.next());
              _b.label = 5;

            case 5:
              if (!!services_1_1.done) return [3 /*break*/, 8];
              serviceId = services_1_1.value; // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(this.bleDevice.deviceId, serviceId),
              ];

            case 6:
              // eslint-disable-next-line no-await-in-loop
              _b.sent();

              _b.label = 7;

            case 7:
              services_1_1 = services_1.next();
              return [3 /*break*/, 5];

            case 8:
              return [3 /*break*/, 11];

            case 9:
              e_1_1 = _b.sent();
              e_1 = {
                error: e_1_1,
              };
              return [3 /*break*/, 11];

            case 10:
              try {
                if (services_1_1 && !services_1_1.done && (_a = services_1['return']))
                  _a.call(services_1);
              } finally {
                if (e_1) throw e_1.error;
              }

              return [
                7,
                /*endfinally*/
              ];

            case 11:
              this.log('????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_TIME_SERVICES$1,
                  UUID_TIME_WRITE_READ$1
                ),
              ];

            case 12:
              _b.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 13:
              _b.sent();

              _b.label = 14;

            case 14:
              _b.trys.push([14, 16, , 17]);

              return [
                4,
                /*yield*/
                this.doSyncTimeCmd(),
              ];

            case 15:
              _b.sent();

              return [3 /*break*/, 17];

            case 16:
              e_2 = _b.sent();
              console.log('????????????error', e_2);
              return [3 /*break*/, 17];

            case 17:
              if (this.operation.action === QNBleAction.SET_WIFI) {
                return [
                  2,
                  /*return*/
                  this.doNotifyWifi(),
                ];
              }

              return [
                2,
                /*return*/
                this.doPrepareMeasureWeight(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doPrepareMeasureWeight = function () {
      return __awaiter(this, void 0, void 0, function () {
        var e_3, e_4, e_5, _a, isRegisterUser, deletedUserIndexArr;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              this.log('?????????????????????');
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_CUSTOMIZE_SERVICES,
                  UUID_USER_DEFINED_READ$1
                ),
              ];

            case 2:
              _b.sent();

              return [3 /*break*/, 4];

            case 3:
              e_3 = _b.sent();
              console.log('?????????????????????error', e_3);
              return [3 /*break*/, 4];

            case 4:
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _b.sent();

              this.log('????????????');
              _b.label = 6;

            case 6:
              _b.trys.push([6, 8, , 9]);

              return [
                4,
                /*yield*/
                this.doSyncUnit(),
              ];

            case 7:
              _b.sent();

              return [3 /*break*/, 9];

            case 8:
              e_4 = _b.sent();
              console.log('????????????error', e_4);
              return [3 /*break*/, 9];

            case 9:
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 10:
              _b.sent();

              this.log('??????????????????');
              _b.label = 11;

            case 11:
              _b.trys.push([11, 13, , 14]);

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_USER_SERVICES$1,
                  UUID_USER_WRITE_READ$1
                ),
              ];

            case 12:
              _b.sent();

              return [3 /*break*/, 14];

            case 13:
              e_5 = _b.sent();
              console.log('??????????????????error', e_5);
              return [3 /*break*/, 14];

            case 14:
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 15:
              _b.sent();

              (_a = this.operation),
                (isRegisterUser = _a.isRegisterUser),
                (deletedUserIndexArr = _a.deletedUserIndexArr);
              console.log('operation', this.operation);

              if (deletedUserIndexArr && deletedUserIndexArr.length > 0) {
                this.log('??????????????????????????????????????????????????????');
                return [
                  2,
                  /*return*/
                  this.doDeleteUser(),
                ];
              }

              if (isRegisterUser) {
                this.log('??????????????????');
                return [
                  2,
                  /*return*/
                  this.doRegisterUser(),
                ];
              }

              return [
                2,
                /*return*/
                this.prepareUserAndMeasure(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doPrepareSetWifi = function (payload) {
      if (payload === void 0) {
        payload = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          otaServerUrl,
          _f,
          encryptKey,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              (_a = __assign(__assign({}, this.operation), payload)),
                (_b = _a.wifiSsid),
                (wifiSsid = _b === void 0 ? '' : _b),
                (_c = _a.wifiPwd),
                (wifiPwd = _c === void 0 ? '' : _c),
                (_d = _a.dataServerUrl),
                (dataServerUrl = _d === void 0 ? '' : _d),
                (_e = _a.otaServerUrl),
                (otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e),
                (_f = _a.encryptKey),
                (encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f);

              if (wifiSsid.length > 32) {
                return [
                  2,
                  /*return*/
                  Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)),
                ];
              }

              if (wifiPwd.length > 64) {
                return [
                  2,
                  /*return*/
                  Promise.reject(new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)),
                ];
              }

              ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
              pwdByteArray = stringToByteArray(wifiPwd);
              dataServerUrlByteArray = stringToByteArray(dataServerUrl);
              otaServerUrlByteArray = stringToByteArray(otaServerUrl);
              this.ssidCmdData = splitArray(ssidByteArray);
              this.pwdCmdData = splitArray(pwdByteArray);
              this.dataServerUrlData = splitArray(dataServerUrlByteArray);
              this.otaServerUrlData = splitArray(otaServerUrlByteArray);
              this.encryptKeyCmdData = stringToByteArray(encryptKey);
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.doNotifyWifi(),
              ];

            case 1:
              _g.sent();

              this.log('??????wifi?????????????????????wifi ?????????????????? SSID ??????');
              return [
                2,
                /*return*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x60, 0x04, this.ssidCmdData.length],
                }),
              ];
          }
        });
      });
    };
    /**
     * ????????????
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    WspDualScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

      return __awaiter(this, void 0, void 0, function () {
        var data,
          characteristicId,
          _q,
          result,
          index,
          result,
          isRegisterUser,
          flag,
          isRealTimeData,
          isStartMeasureFat,
          isStartMeasureHeart,
          weightRatio,
          weight,
          bmi,
          year,
          month,
          dayOfMonth,
          hour,
          minute,
          second,
          time;

        return __generator(this, function (_r) {
          switch (_r.label) {
            case 0:
              (data = payload.data), (characteristicId = payload.characteristicId);
              _q = characteristicId.toUpperCase();

              switch (_q) {
                case UUID_USER_WRITE_READ$1:
                  return [3 /*break*/, 1];

                case UUID_USER_DEFINED_READ$1:
                  return [3 /*break*/, 7];

                case UUID_WEIGHT_READ$1:
                  return [3 /*break*/, 9];

                case UUID_BODY_READ$1:
                  return [3 /*break*/, 10];

                case UUID_WEIGHT_NOTIFY$1:
                  return [3 /*break*/, 11];

                case UUID_BODY_NOTIFY$1:
                  return [3 /*break*/, 12];
              }

              return [3 /*break*/, 13];

            case 1:
              if (!(data[0] === 0x20 && data[1] === 0x01)) return [3 /*break*/, 5];
              result = data[2];
              if (!(result === 1)) return [3 /*break*/, 3];
              index = data[3];
              this.operation.userIndex = index;
              this.operation.isUpdateUser = true;
              (_b = (_a = this.listener).onGetRegisterUserResult) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    isSuccess: true,
                    userIndex: index,
                  });
              return [
                4,
                /*yield*/
                this.prepareUserAndMeasure(),
              ];

            case 2:
              _r.sent();

              return [3 /*break*/, 4];

            case 3:
              this.log('??????????????????');
              (_d = (_c = this.listener).onGetRegisterUserResult) === null || _d === void 0
                ? void 0
                : _d.call(_c, {
                    isSuccess: false,
                  });
              return [
                2,
                /*return*/
                Promise.reject(new QNBleError(QNBleErrorType.REGISTER_USER_FAILED)),
              ];

            case 4:
              return [3 /*break*/, 6];

            case 5:
              if (data[0] === 0x20 && data[1] === 0x02) {
                result = data[2];
                (_f = (_e = this.listener).onGetVisitUserResult) === null || _f === void 0
                  ? void 0
                  : _f.call(_e, {
                      isSuccess: result === 1,
                    });
                if (result !== 1)
                  return [
                    2,
                    /*return*/
                    Promise.reject(new QNBleError(QNBleErrorType.VISIT_USER_FAILED)),
                  ];
              }

              _r.label = 6;

            case 6:
              return [3 /*break*/, 14];

            case 7:
              if (data[0] === 0x20 && data[1] === 0x05) {
                // ?????????????????????
                (_h = (_g = this.listener).onGetDeleteUserResult) === null || _h === void 0
                  ? void 0
                  : _h.call(_g, {
                      isSuccess: true,
                    });
                isRegisterUser = this.operation.isRegisterUser;

                if (isRegisterUser) {
                  this.log('??????????????????');
                  return [
                    2,
                    /*return*/
                    this.doRegisterUser(),
                  ];
                }

                return [
                  2,
                  /*return*/
                  this.prepareUserAndMeasure(),
                ];
              } // ???????????????????????????????????????

              return [
                4,
                /*yield*/
                this.handleWifiCmdData(data),
              ];

            case 8:
              // ???????????????????????????????????????
              _r.sent();

              return [3 /*break*/, 14];

            case 9:
              return [3 /*break*/, 14];

            case 10:
              _r.label = 11;

            case 11: {
              this.log('?????? UUID_WEIGHT_NOTIFY'); // ??????

              if (this.bodyByteDataArr.length >= 0) {
                this.bodyByteDataArr.splice(0, this.bodyByteDataArr.length);
              }

              flag = data[0];
              this.isStoreData = ((flag >> 4) & 0x01) === 1;
              isRealTimeData = ((flag >> 5) & 0x01) === 0;
              isStartMeasureFat = ((flag >> 6) & 0x01) === 1;
              isStartMeasureHeart = ((flag >> 7) & 0x01) === 1;
              this.log(
                'isRealTimeData',
                isRealTimeData,
                'isStartMeasureFat',
                isStartMeasureFat,
                'isStartMeasureHeart',
                isStartMeasureHeart
              );

              if (isStartMeasureFat) {
                (_k = (_j = this.listener).onStartMeasureFat) === null || _k === void 0
                  ? void 0
                  : _k.call(_j);
              } else if (isStartMeasureHeart) {
                (_m = (_l = this.listener).onStartMeasureHeart) === null || _m === void 0
                  ? void 0
                  : _m.call(_l);
              }

              if (data.length < 13) {
                return [
                  2,
                  /*return*/
                  undefined,
                ];
              }

              weightRatio = 0.05;
              weight = Number.parseFloat(
                (decodeInteger(data[2], data[1]) * weightRatio).toFixed(2)
              );

              if (isRealTimeData) {
                (_p = (_o = this.listener).onGetUnsteadyWeight) === null || _p === void 0
                  ? void 0
                  : _p.call(_o, {
                      weight: weight,
                    });
              } else {
                bmi = decodeInteger(data[12], data[11]) * 0.1;
                year = decodeInteger(data[4], data[3]);
                month = data[5];
                dayOfMonth = data[6];
                hour = data[7];
                minute = data[8];
                second = data[9];
                time = new Date();
                time.setUTCFullYear(year);
                time.setUTCMonth(month - 1);
                time.setUTCDate(dayOfMonth);
                time.setUTCHours(hour);
                time.setUTCMinutes(minute);
                time.setUTCSeconds(second);
                this.partialScaleData = {
                  weight: weight,
                  bmi: bmi,
                  time: time,
                };
              }

              return [3 /*break*/, 14];
            }

            case 12:
              this.log('?????? UUID_BODY_NOTIFY');
              this.bodyByteDataArr.push(data);
              this.log('bodyByteDataArr', this.bodyByteDataArr, this.bodyByteDataArr.length);

              if (this.bodyByteDataArr.length >= 3) {
                this.buildBodyData();
              }

              return [3 /*break*/, 14];

            case 13:
              return [3 /*break*/, 14];

            case 14:
              return [
                2,
                /*return*/
                undefined,
              ];
          }
        });
      });
    };
    /**
     * ????????????????????????wifi
     * ?????????????????? qnble.callProtocolMethodAsync(deviceId, 'doScanWifi', ...args)
     * 8?????????????????????????????????wifi??? ??????app??????????????????????????????ssid
     */

    WspDualScaleProtocol.prototype.doScanWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('????????????????????????wifi');
              this.wifiInfoCache.rssi = 0;
              this.wifiInfoCache.ssid = [];
              this.lastReceivedWifiSsidPackNo = 0;
              return [
                4,
                /*yield*/
                this.doNotifyWifi(),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x55, 0x4, 0x01],
                }),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????wifi????????????
     */

    WspDualScaleProtocol.prototype.onReceiveWifiSsidData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var rssi, packInfo, packCount, packNo, ssidData, info;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              rssi = data[1] - 0xff - 1;
              packInfo = data[2];
              packCount = (packInfo >> 4) & 15;
              packNo = packInfo & 15;
              ssidData = data.slice(3, data.length - 1);
              this.log(
                'onReceiveWifiSsidData',
                'packCount',
                packCount,
                'packNo',
                packNo,
                'ssidData',
                ssidData
              );

              if (packNo > this.lastReceivedWifiSsidPackNo) {
                this.wifiInfoCache.rssi = rssi;
                this.wifiInfoCache.ssid.push(byteArrayToString(ssidData));

                if (packCount === packNo) {
                  this.log('wifi ssid base64??????', this.wifiInfoCache.ssid.join(''));
                  info = {
                    rssi: rssi,
                    ssid: gBase64.decode(this.wifiInfoCache.ssid.join('')),
                    level: getWifiRssiLevel(rssi),
                  };
                  this.log('???????????? wifi ??????', info);

                  if (!equal(this.lastReceivedWifiIno, info)) {
                    (_b = (_a = this.listener).onGetWifiInfo) === null || _b === void 0
                      ? void 0
                      : _b.call(_a, info);
                    this.lastReceivedWifiIno = info;
                  } else {
                    this.log(
                      '??????????????????????????? wifi ??????',
                      'lastReceivedWifiIno',
                      this.lastReceivedWifiIno
                    );
                  }

                  this.wifiInfoCache.rssi = 0;
                  this.wifiInfoCache.ssid = [];
                  this.lastReceivedWifiSsidPackNo = 0;
                } else {
                  this.lastReceivedWifiSsidPackNo = packNo;
                }
              } else {
                console.warn('??????????????? wifi ssid ?????????', data);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x57, 4, packInfo],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ?????????????????????????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'doSetWifi', ...args)
     */

    WspDualScaleProtocol.prototype.doSetWifi = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('doSetWifi', payload);
              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(payload),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.handleWifiCmdData = function (data) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              _g = data[0];

              switch (_g) {
                case 0x56:
                  return [3 /*break*/, 1];

                case 0x58:
                  return [3 /*break*/, 3];

                case 0x61:
                  return [3 /*break*/, 5];

                case 0x63:
                  return [3 /*break*/, 6];

                case 0x65:
                  return [3 /*break*/, 11];

                case 0x67:
                  return [3 /*break*/, 16];

                case 0x69:
                  return [3 /*break*/, 21];

                case 0x6b:
                  return [3 /*break*/, 24];

                case 0x6f:
                  return [3 /*break*/, 29];

                case 0x71:
                  return [3 /*break*/, 32];

                case 0x73:
                  return [3 /*break*/, 36];

                case 0x74:
                  return [3 /*break*/, 39];

                case 0x77:
                  return [3 /*break*/, 41];
              }

              return [3 /*break*/, 42];

            case 1:
              // ?????????????????????ssid???
              return [
                4,
                /*yield*/
                this.onReceiveWifiSsidData(data),
              ];

            case 2:
              // ?????????????????????ssid???
              _h.sent();

              return [3 /*break*/, 43];

            case 3:
              // Wi-Fi????????????
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x59, 4, 1],
                }),
              ];

            case 4:
              // Wi-Fi????????????
              _h.sent();

              (_b = (_a = this.listener).onScanWifiFinished) === null || _b === void 0
                ? void 0
                : _b.call(_a);
              return [3 /*break*/, 43];

            case 5:
              // ???????????????????????????
              // ????????????SSID??????
              console.log('???????????????????????????');

              if (data[2] === 1) {
                this.currentCmdNo = 0;
                this.sendWifiSsid();
              }

              return [3 /*break*/, 43];

            case 6:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.ssidCmdData.length)) return [3 /*break*/, 8]; // ssid???????????????

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 7:
              // ssid???????????????
              _h.sent();

              return [3 /*break*/, 10];

            case 8:
              // ssid??????????????????????????????????????????wifi??????
              this.currentCmdNo = 0;
              this.log('?????????????????? WIFI?????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 9:
              _h.sent();

              _h.label = 10;

            case 10:
              return [3 /*break*/, 43];

            case 11:
              if (!(data[2] === 1)) return [3 /*break*/, 15];
              if (!(this.pwdCmdData.length > 0)) return [3 /*break*/, 13];
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 12:
              _h.sent();

              return [3 /*break*/, 15];

            case 13:
              // ???wifi???????????????????????????????????????????????????URL
              this.currentCmdNo = 0;
              this.log('???wifi??????????????? 66h ??? 67h ????????????????????????????????? ??????????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 14:
              _h.sent();

              _h.label = 15;

            case 15:
              return [3 /*break*/, 43];

            case 16:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.pwdCmdData.length)) return [3 /*break*/, 18]; // wifi?????????????????????

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 17:
              // wifi?????????????????????
              _h.sent();

              return [3 /*break*/, 20];

            case 18:
              // wifi???????????????????????????????????????????????????????????????URL
              this.currentCmdNo = 0;
              this.log('?????????????????? ??????????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 19:
              _h.sent();

              _h.label = 20;

            case 20:
              return [3 /*break*/, 43];

            case 21:
              if (!(data[2] === 1)) return [3 /*break*/, 23];
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 22:
              _h.sent();

              _h.label = 23;

            case 23:
              return [3 /*break*/, 43];

            case 24:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.dataServerUrlData.length)) return [3 /*break*/, 26]; // ???????????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 25:
              // ???????????????URL???????????????
              _h.sent();

              return [3 /*break*/, 28];

            case 26:
              // ???????????????URL??????????????????????????????????????????OTA?????????URL
              this.currentCmdNo = 0;
              this.log('?????????????????? OTA????????? ??????');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 27:
              _h.sent();

              _h.label = 28;

            case 28:
              return [3 /*break*/, 43];

            case 29:
              if (!(data[2] === 1)) return [3 /*break*/, 31];
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 30:
              _h.sent();

              _h.label = 31;

            case 31:
              return [3 /*break*/, 43];

            case 32:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.otaServerUrlData.length)) return [3 /*break*/, 34]; // OTA?????????URL???????????????

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 33:
              // OTA?????????URL???????????????
              _h.sent();

              return [3 /*break*/, 35];

            case 34:
              // OTA?????????URL??????????????????????????????????????????????????????
              this.currentCmdNo = 0;
              this.sendEncryptKey();
              _h.label = 35;

            case 35:
              return [3 /*break*/, 43];

            case 36:
              if (!(data[2] === 0)) return [3 /*break*/, 38];
              return [
                4,
                /*yield*/
                this.sendEncryptKey(),
              ];

            case 37:
              _h.sent();

              _h.label = 38;

            case 38:
              // ???????????????????????????????????????????????????????????????
              return [3 /*break*/, 43];

            case 39:
              // ??????????????????????????????
              (_d = (_c = this.listener).onGetSetWifiResult) === null || _d === void 0
                ? void 0
                : _d.call(_c, data[2] === 1);
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x75, 4, 1],
                }),
              ];

            case 40:
              _h.sent();

              this.log('????????????');
              return [3 /*break*/, 43];

            case 41:
              // ????????????????????????
              // 0:wifi?????????
              // 1:wifi?????????
              // 2:wifi??????????????????
              // 3:wifi??????????????????
              (_f = (_e = this.listener).onGetQueryWifiConnectStatusResult) === null ||
              _f === void 0
                ? void 0
                : _f.call(_e, data[2]);
              return [3 /*break*/, 43];

            case 42:
              return [3 /*break*/, 43];

            case 43:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.buildBodyData = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data,
          year,
          month,
          dayOfMonth,
          hour,
          minute,
          second,
          time,
          realMassRatio,
          bodyfat,
          bmr,
          muscle,
          muscleMass,
          lbm,
          water,
          resistance50,
          resistance500,
          bone,
          visfat,
          subfat,
          protein,
          bodyAge,
          heartRate,
          score,
          bodyShape,
          heartIndex,
          resistance20_left_leg,
          resistance100_left_leg,
          resistance20_right_leg,
          resistance100_right_leg,
          resistance20_left_arm,
          resistance100_left_arm,
          resistance20_right_arm,
          resistance100_right_arm,
          resistance20_trunk,
          resistance100_trunk,
          measureData,
          mdata,
          err_1;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              data = __spread(
                this.bodyByteDataArr[0],
                this.bodyByteDataArr[1],
                this.bodyByteDataArr[2]
              );
              this.log('buildBodyData', 'data', data);

              if (data.length < 37) {
                // ??????????????????????????????
                this.bodyByteDataArr.splice(0, 1);
                return [
                  2,
                  /*return*/
                ];
              } // ???????????????????????????????????????

              this.bodyByteDataArr.splice(0, this.bodyByteDataArr.length);
              year = decodeInteger(data[5], data[4]);
              month = data[6];
              dayOfMonth = data[7];
              hour = data[8];
              minute = data[9];
              second = data[10];
              time = new Date();
              time.setUTCFullYear(year);
              time.setUTCMonth(month - 1);
              time.setUTCDate(dayOfMonth);
              time.setUTCHours(hour);
              time.setUTCMinutes(minute);
              time.setUTCSeconds(second);
              realMassRatio = 0.05;
              bodyfat = decodeInteger(data[3], data[2]) * 0.1;
              bmr = decodeInteger(data[13], data[12]) / 10;
              muscle = decodeInteger(data[15], data[14]) * 0.1;
              muscleMass = decodeInteger(data[17], data[16]) * realMassRatio;
              lbm = decodeInteger(data[19], data[18]) * realMassRatio;
              water = decodeInteger(data[21], data[20]) * 0.1;
              resistance50 = decodeInteger(data[23], data[22]);
              resistance500 = decodeInteger(data[25], data[24]);
              bone = decodeInteger(data[27], data[26]) * realMassRatio * 10;
              visfat = data[28] & 0xff;
              subfat = decodeInteger(data[30], data[29]) * 0.1;
              protein = decodeInteger(data[32], data[31]) * 0.1;
              bodyAge = data[33] & 0xff;
              heartRate = data[34] & 0xff;
              score = decodeInteger(data[36], data[35]) * 0.1;
              bodyShape = data[37] & 0xff;
              heartIndex = (data[38] & 0xff) * 0.1;
              resistance20_left_leg = Number.parseFloat(
                (decodeInteger(data[40], data[39]) * 0.1).toFixed(2)
              );
              resistance100_left_leg = Number.parseFloat(
                (decodeInteger(data[42], data[41]) * 0.1).toFixed(2)
              );
              resistance20_right_leg = Number.parseFloat(
                (decodeInteger(data[44], data[43]) * 0.1).toFixed(2)
              );
              resistance100_right_leg = Number.parseFloat(
                (decodeInteger(data[46], data[45]) * 0.1).toFixed(2)
              );
              resistance20_left_arm = Number.parseFloat(
                (decodeInteger(data[48], data[47]) * 0.1).toFixed(2)
              );
              resistance100_left_arm = Number.parseFloat(
                (decodeInteger(data[50], data[49]) * 0.1).toFixed(2)
              );
              resistance20_right_arm = Number.parseFloat(
                (decodeInteger(data[52], data[51]) * 0.1).toFixed(2)
              );
              resistance100_right_arm = Number.parseFloat(
                (decodeInteger(data[54], data[53]) * 0.1).toFixed(2)
              );
              resistance20_trunk = Number.parseFloat(
                (decodeInteger(data[56], data[55]) * 0.1).toFixed(2)
              );
              resistance100_trunk = Number.parseFloat(
                (decodeInteger(data[58], data[57]) * 0.1).toFixed(2)
              );
              this.log('isStoreData', this.isStoreData);
              measureData = __assign(__assign({}, this.partialScaleData), {
                bodyfat: bodyfat,
                bmr: bmr,
                muscle: muscle,
                muscleMass: muscleMass,
                lbm: lbm,
                heartIndex: heartIndex,
                bodyShape: bodyShape,
                score: score,
                heartRate: heartRate,
                bodyAge: bodyAge,
                protein: protein,
                subfat: subfat,
                visfat: visfat,
                bone: bone,
                water: water,
                time: time,
                resistance20_left_arm: resistance20_left_arm,
                resistance20_left_leg: resistance20_left_leg,
                resistance20_right_arm: resistance20_right_arm,
                resistance20_right_leg: resistance20_right_leg,
                resistance20_trunk: resistance20_trunk,
                resistance100_left_arm: resistance100_left_arm,
                resistance100_left_leg: resistance100_left_leg,
                resistance100_right_arm: resistance100_right_arm,
                resistance100_right_leg: resistance100_right_leg,
                resistance100_trunk: resistance100_trunk,
              });
              this.log('measureData', measureData);
              mdata = {
                measure: measureData,
                scaleData: {
                  resistance500: resistance500,
                  resistance50: resistance50,
                },
                sdkObj: this.scaleBizImp.sdkObj,
              };
              this.log('mdata', mdata);
              if (!this.isStoreData) return [3 /*break*/, 1]; // ?????????????????????????????????

              this.log('????????????????????????');
              this.historyRecords.push(mdata);
              return [3 /*break*/, 4];

            case 1:
              _c.trys.push([1, 3, , 4]);

              if (this.historyRecords.length > 0) {
                this.log('???????????????????????????', this.historyRecords);
                (_b = (_a = this.listener).onGetStoredDatas) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, __spread(this.historyRecords));
                this.historyRecords = [];
              }

              this.log('?????????????????????????????????', mdata);
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(__assign(__assign({}, mdata.measure), mdata.scaleData)),
              ];

            case 2:
              _c.sent();

              return [3 /*break*/, 4];

            case 3:
              err_1 = _c.sent(); // eslint-disable-next-line no-console

              console.error(err_1);
              return [3 /*break*/, 4];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doNotifyWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.wifiNotified) {
                return [
                  2,
                  /*return*/
                  Promise.resolve(0),
                ];
              }

              this.log('??????WiFi??????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_CUSTOMIZE_SERVICES,
                  UUID_USER_DEFINED_READ$1
                ),
              ];

            case 1:
              _a.sent();

              this.wifiNotified = true;
              return [
                2,
                /*return*/
                Promise.resolve(0),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.sendWifiSsid = function () {
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1;
      this.log('\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E');
      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1; // this.bleApi.log(`????????? ${this.currentCmdNo} ??? PWD ??????`)

      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1; // this.bleApi.log(`????????? ${this.currentCmdNo} ??? DATA????????? ??????`)

      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // ????????????+1??????????????????????????????1?????????

      this.currentCmdNo += 1; // this.bleApi.log(`????????? ${this.currentCmdNo} ??? OTA????????? ??????`)

      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendEncryptKey = function () {
      var cmd = this.encryptKeyCmdData;
      this.log('????????????????????????');
      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: __spread([0x72, 20, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.doDeleteUser = function () {
      // ????????????
      var deletedUserIndexArr = this.operation.deletedUserIndexArr;
      var flag = 0;
      deletedUserIndexArr.forEach(function (value) {
        flag |= 1 << (value - 1);
      });
      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: [0x05, flag, 0],
      });
    };

    WspDualScaleProtocol.prototype.doRegisterUser = function () {
      console.log('Register');
      var userKey = this.operation.userKey;
      var keyH = (userKey >> 8) & 0xff;
      var keyL = userKey & 0xff;
      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_WRITE_READ$1,
        cmdData: [0x01, keyL, keyH],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doReadScaleSupport = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              // ???????????????
              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  UUID_WEIGHT_SERVICES$1,
                  UUID_WEIGHT_READ$1
                ),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 2:
              _a.sent(); // ???????????????

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES$1,
                  UUID_BODY_READ$1
                ),
              ];

            case 3:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 4:
              _a.sent();

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_WEIGHT_SERVICES$1,
                  UUID_WEIGHT_NOTIFY$1
                ),
              ];

            case 5:
              _a.sent();

              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES$1,
                  UUID_BODY_NOTIFY$1
                ),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doSyncTimeCmd = function () {
      var now = new Date();
      var year = now.getUTCFullYear();
      var yearH = (year >> 8) & 0xff;
      var yearL = year & 0xff;
      var month = now.getUTCMonth() + 1;
      var day = now.getUTCDate();
      var hour = now.getUTCHours();
      var minute = now.getUTCMinutes();
      var second = now.getUTCSeconds();
      var dayOffWeek = now.getUTCDay() - 1;

      if (dayOffWeek === 0) {
        dayOffWeek = 7;
      }

      this.currentCmdNo = 0; // ??????????????????????????????

      var bytes = [yearL, yearH, month, day, hour, minute, second, dayOffWeek, 0, 0];
      return this.writeData({
        serviceId: UUID_TIME_SERVICES$1,
        characteristicId: UUID_TIME_WRITE_READ$1,
        cmdData: bytes,
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncUnit = function () {
      var unitByte = 1; // STUB isSupportJin???isSupportSt?????????????????????????????????????????????????????????????????????

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 4;
          break;

        case QNBleUnit.ST:
          unitByte = 2;
          break;
      }

      var bytes = [0x03, 0x00, unitByte];
      return this.writeData({
        serviceId: UUID_CUSTOMIZE_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE$1,
        cmdData: bytes,
      });
    }; // ??????????????????

    WspDualScaleProtocol.prototype.prepareUserAndMeasure = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.doVisitUser(),
              ];

            case 1:
              _a.sent();

              this.log('?????????????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.doSyncUserInfo(),
              ];

            case 2:
              _a.sent();

              this.log('???????????????????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.doReadScaleSupport(),
              ];

            case 3:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doVisitUser = function () {
      var _a = this.operation,
        userIndex = _a.userIndex,
        userKey = _a.userKey;
      console.log('doVisitUser', userIndex, userKey);
      var secretH = (userKey >> 8) & 0xff;
      var secretL = userKey & 0xff;
      var bytes = [0x02, userIndex, secretL, secretH];
      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_WRITE_READ$1,
        cmdData: bytes,
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncUserInfo = function () {
      return __awaiter(this, void 0, void 0, function () {
        var isUpdateUser;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              isUpdateUser = this.operation.isUpdateUser;

              if (!isUpdateUser) {
                this.log('????????????????????????');
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.log('????????????????????????');
              return [
                4,
                /*yield*/
                this.doSyncGender(),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncHeight(),
              ];

            case 2:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncBirthday(),
              ];

            case 3:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncAge(),
              ];

            case 4:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncAlgorithm(),
              ];

            case 5:
              _a.sent();

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doSyncAlgorithm = function () {
      this.log('????????????');
      var deviceMethod = this.operation.user.isSport ? 13 : 3;
      var sdkObj = this.scaleBizImp.sdkObj;
      this.log('sdkObj', sdkObj);

      if (sdkObj) {
        switch (sdkObj.method) {
          case 2:
            deviceMethod = 3;
            break;

          case 3:
            deviceMethod = 1;
            break;
          // ??????v2

          case 4:
            deviceMethod = 2;
            break;

          case 5:
            deviceMethod = 4;
            break;

          case 6:
            deviceMethod = 5;
            break;

          case 1:
            deviceMethod = 6;
            break;
        }

        if (this.operation.user.isSport) {
          deviceMethod += 10;
        }
      }

      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_ALGORITHM_UPDATE$1,
        cmdData: [deviceMethod, 0],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncAge = function () {
      var birthday = this.operation.user.birthday;
      var age = this.operation.user.age;
      age = age || calcAgeWithBirthday(getNewDateInstance(birthday));
      this.log('????????????', age);
      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_AGE_UPDATE$1,
        cmdData: [age],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncBirthday = function () {
      var birthday = this.operation.user.birthday;
      var birthdayDate = getNewDateInstance(birthday);
      var year = birthdayDate.getFullYear();
      var yearH = (year >> 8) & 0xff;
      var yearL = year & 0xff;
      var month = birthdayDate.getMonth() + 1;
      var day = birthdayDate.getDate();
      this.log('????????????', formatDateToString(birthdayDate));
      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_BIRTHDAY_UPDATE$1,
        cmdData: [yearL, yearH, month, day],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncHeight = function () {
      var height = this.operation.user.height;
      var heightH = (height >> 8) & 0xff;
      var heightL = height & 0xff;
      this.log('????????????', height);
      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_HEIGHT_UPDATE$1,
        cmdData: [heightL, heightH],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncGender = function () {
      var gender = this.operation.user.gender; // NOTE ???????????? ???????????????????????? 0????????? 1?????????

      var genderByte = gender === QNBleGender.MALE ? 0 : 1;
      this.log('????????????', genderByte);
      return this.writeData({
        serviceId: UUID_USER_SERVICES$1,
        characteristicId: UUID_USER_GRAND_UPDATE$1,
        cmdData: [genderByte],
        needSum: false,
      });
    };
    /**
     * ??????wifi????????????
     * ????????? qnble.callProtocolMethodAsync(deviceId, 'queryWifiConnectStatus', ...args)
     * @param {number} type 1???????????????wifi???????????? 2?????????wifi?????????????????????
     */

    WspDualScaleProtocol.prototype.queryWifiConnectStatus = function (type) {
      if (type === void 0) {
        type = 1;
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_CUSTOMIZE_SERVICES,
                  characteristicId: UUID_USER_DEFINED_WRITE$1,
                  cmdData: [0x76, 4, type],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.dispatchSteadyData = function (scaleData) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log('????????????', scaleData);
          return [
            2,
            /*return*/
            this.scaleBizImp.fetchScaleData(scaleData),
          ];
        });
      });
    };

    WspDualScaleProtocol.bleProfile = new WspDualScalebleProfile$1();
    return WspDualScaleProtocol;
  })(QNBleBaseScaleProtocol);

var WspDualScaleMesProfle =
  /** @class */
  (function () {
    function WspDualScaleMesProfle() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    } // ??????????????????

    WspDualScaleMesProfle.prototype.isProduceDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-FAC';
    }; // ??????????????????

    WspDualScaleMesProfle.prototype.isProductDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-Scale' || nativeDevice.bluetoothName === 'QN-HS';
    };

    WspDualScaleMesProfle.prototype.isTargetDevice = function (nativeDevice) {
      return this.isProduceDevice(nativeDevice) || this.isProductDevice(nativeDevice);
    };

    WspDualScaleMesProfle.prototype.buildTargetDevice = function (nativeDevice) {
      var device = this.buildProduceTargetDevice(nativeDevice);

      if (device == null) {
        device = this.buildProductTargetDevice(nativeDevice);
      }

      return device;
    }; // ??????????????????????????????

    WspDualScaleMesProfle.prototype.buildProduceTargetDevice = function (nativeDevice) {
      if (!this.isProduceDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var mac1 = number2hex(manufacturer[2]);
      var mac2 = number2hex(manufacturer[3]);
      var mac3 = number2hex(manufacturer[4]);
      var mac4 = number2hex(manufacturer[5]);
      var mac5 = number2hex(manufacturer[6]);
      var mac6 = number2hex(manufacturer[7]);
      var mac = mac6 + ':' + mac5 + ':' + mac4 + ':' + mac3 + ':' + mac2 + ':' + mac1;
      var fatStatus = (manufacturer[8] << 8) + manufacturer[9];
      var moduleTestFlag = ((fatStatus >> 0) & 0x01) == 0x01; // ????????????

      var semiProductFlag = ((fatStatus >> 1) & 0x01) == 0x01; // ?????????

      var calibrationFlag = ((fatStatus >> 2) & 0x01) == 0x01; // ??????

      var reviewFlag = ((fatStatus >> 3) & 0x01) == 0x01; // ??????

      var partialFlag = ((fatStatus >> 4) & 0x01) == 0x01; // ??????

      var scaleType = manufacturer[10];
      var targetDevice = {
        moduleTestFlag: moduleTestFlag,
        semiProductFlag: semiProductFlag,
        calibrationFlag: calibrationFlag,
        reviewFlag: reviewFlag,
        partialFlag: partialFlag,
        type: QNBleDeviceType.NORMAL_BLE_SCALE,
      };

      switch (scaleType) {
        case 0x01:
          targetDevice.type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
          break;

        case 0x02:
          targetDevice.type = QNBleDeviceType.NORMAL_BLE_SCALE;
          break;

        case 0x03:
          targetDevice.type = QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE;
          break;

        case 0x04:
          targetDevice.type = QNBleDeviceType.HEIGHTWEIGHT;
          break;

        case 0x08:
          targetDevice.type = QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE;
          break;
      }

      return __assign(__assign({}, targetDevice), {
        name: nativeDevice.bluetoothName,
        isScreenOn: true,
        mac: mac,
        isSupportWifi: true,
      });
    };
    /**
     * ????????????
     */

    WspDualScaleMesProfle.prototype.buildProductTargetDevice = function (nativeDevice) {
      if (!this.isProductDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var mac = '';
      var sn = '';
      var type = QNBleDeviceType.NORMAL_BLE_SCALE;

      if (nativeDevice.bluetoothName === 'QN-HS') {
        type = QNBleDeviceType.HEIGHTWEIGHT;
      } else if (nativeDevice.bluetoothName === 'QN-HS2') {
        type = QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE;
      } else {
        if (nativeDevice.services.includes('181D')) {
          if (manufacturer.length < 17) {
            type = QNBleDeviceType.NORMAL_BLE_SCALE;
          } else {
            if (((manufacturer[10] >> 4) & 0x01) === 0x01) {
              type = QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE;
            } else {
              type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
            }
          }
        }
      }

      switch (type) {
        // TODO ??????CP30A????????????mac????????????????????????
        case QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE:
        case QNBleDeviceType.HEIGHTWEIGHT:
          sn = manufacturer
            .slice(4, -1)
            .map(function (v) {
              return String.fromCharCode(v);
            })
            .join('')
            .slice(0, 15);
          mac =
            number2hex(manufacturer[24]) +
            ':' +
            number2hex(manufacturer[23]) +
            ':' +
            number2hex(manufacturer[22]) +
            ':' +
            number2hex(manufacturer[21]) +
            ':' +
            number2hex(manufacturer[20]) +
            ':' +
            number2hex(manufacturer[19]);
          break;

        case QNBleDeviceType.NORMAL_BLE_SCALE:
          mac =
            number2hex(manufacturer[12]) +
            ':' +
            number2hex(manufacturer[11]) +
            ':' +
            number2hex(manufacturer[10]) +
            ':' +
            number2hex(manufacturer[9]) +
            ':' +
            number2hex(manufacturer[8]) +
            ':' +
            number2hex(manufacturer[7]);
          break;

        default:
          mac =
            number2hex(manufacturer[16]) +
            ':' +
            number2hex(manufacturer[15]) +
            ':' +
            number2hex(manufacturer[14]) +
            ':' +
            number2hex(manufacturer[13]) +
            ':' +
            number2hex(manufacturer[12]) +
            ':' +
            number2hex(manufacturer[11]);
          break;
      }

      var targetDevice = {
        moduleTestFlag: true,
        semiProductFlag: true,
        calibrationFlag: true,
        reviewFlag: true,
        partialFlag: true,
        scaleType: 0,
        type: type,
      };
      return __assign(__assign({}, targetDevice), {
        name: nativeDevice.bluetoothName,
        isScreenOn: true,
        mac: mac,
        sn: sn,
        isSupportWifi: true,
      });
    }; // ??????????????????

    WspDualScaleMesProfle.UUID_NOTIFY = 'FFF1'; // ??????????????????

    WspDualScaleMesProfle.UUID_WRITE = 'FFF2'; // ???????????????????????????

    WspDualScaleMesProfle.EIGHT_UUID_NOTIFY = 'FFE3'; // ???????????????????????????

    WspDualScaleMesProfle.EIGHT_UUID_WRITE = 'FFE4'; // ???????????????????????????

    WspDualScaleMesProfle.EIGHT_UUID_WIFI_NOTIFY = 'FFE1'; // ???????????????????????????

    WspDualScaleMesProfle.EIGHT_UUID_WIFI_WRITE = 'FFE2'; // ??????????????????????????????

    WspDualScaleMesProfle.HEIGHTWEIGHT_UUID_NOTIFY = 'ABF1'; // ??????????????????????????????

    WspDualScaleMesProfle.HEIGHTWEIGHT_UUID_WRITE = 'ABF2'; // ???????????????????????????????????????

    WspDualScaleMesProfle.HEIGHTWEIGHT_SINGLE_BLE_UUID_NOTIFY = '8A82'; // ???????????????????????????????????????

    WspDualScaleMesProfle.HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE = '8A83'; // ????????????

    WspDualScaleMesProfle.UUID_TIME_SERVICES = '1805'; // ????????????

    WspDualScaleMesProfle.UUID_DEVICE_SERVICES = '180A'; // ?????????????????????

    WspDualScaleMesProfle.EIGHT_UUID_DEVICE_SERVICES = 'FFE0'; // ????????????????????????

    WspDualScaleMesProfle.HEIGHTWEIGHT_UUID_DEVICE_SERVICES = 'ABF0'; // ?????????????????????????????????

    WspDualScaleMesProfle.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES = '78B2'; // sn??????

    WspDualScaleMesProfle.UUID_SN = '2A25';
    return WspDualScaleMesProfle;
  })();

var CalibrationFlow =
  /** @class */
  (function (_super) {
    __extends(CalibrationFlow, _super);

    function CalibrationFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_CALIBRATION]; //????????????

      _this.calibrationWeight = 0;
      _this.calibrationResult = false;
      _this.uuids = uuids;
      return _this;
    } //?????????

    CalibrationFlow.prototype.execute = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x11, 0x01]
          );
          (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, {
                behavior: MesBehavior.START_CALIBRATION,
              });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    CalibrationFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x12:
              //?????????????????????????????????
              this.getCalibrationWeightData(data);
              break;

            case 0x13:
              //?????????????????????????????????
              this.getCalibrationResultData(data);
              break;

            case 0x15:
              //????????????????????????SSID??????
              this.getQuickPairWifiSSIDResult();
              break;

            case 0x17:
              //????????????????????????pwd??????
              this.getQuickPairWifiPWDResult();
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * ?????????????????? 0x12
     */

    CalibrationFlow.prototype.getCalibrationWeightData = function (byteList) {
      var _a, _b;

      var retValue = byteList[3];
      var weight = (byteList[4] << 8) + byteList[5];

      if (this.calibrationWeight == weight) {
        return;
      }

      this.calibrationWeight = weight;
      this.confirmCalibrationWeightData(retValue);

      if (retValue == 5) {
        this.calibrationResult = weight == 0x01;

        if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
          // ??????????????????????????????????????????????????????
          this.setCalibrationResult();
        } else {
          this.setQuickPairWifiSSID();
        }
      } else {
        var calibrationType = MesCalibrationType.ZONE;

        switch (retValue) {
          case 2:
            calibrationType = MesCalibrationType.FIFTY;
            break;

          case 3:
            calibrationType = MesCalibrationType.HUNDRED;
            break;

          case 4:
            calibrationType = MesCalibrationType.HUNDRED_FIFTY;
            break;

          default:
            return;
        }

        (_b = (_a = this.listener).onGetCalibrationData) === null || _b === void 0
          ? void 0
          : _b.call(_a, {
              calibrationType: calibrationType,
              weight: weight,
            }); // this.deviceEventListener && this.deviceEventListener.onGetCalibrationData(calibrationType, weight)
      }
    };

    CalibrationFlow.prototype.confirmCalibrationWeightData = function (retValue) {
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, [
        0x12,
        retValue,
      ]);
    };
    /**
     * ?????????????????? 0x13
     */

    CalibrationFlow.prototype.getCalibrationResultData = function (byteList) {
      var _a, _b, _c, _d;

      var isSuccess = byteList[3] == 0x01 && this.calibrationResult;
      (_b = (_a = this.listener).onCalibrationCodeStatus) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onCalibrationCodeStatus(success)
      // this.wspMesActionCallback(MesBehavior.STOP_CALIBRATION)

      (_d = (_c = this.listener).onDeviceStateChange) === null || _d === void 0
        ? void 0
        : _d.call(_c, {
            behavior: MesBehavior.STOP_CALIBRATION,
          });
    };

    CalibrationFlow.prototype.setQuickPairWifiSSID = function () {
      var ssid = this.operation.wifiSsid || '';
      var assiiList = [];

      for (var i = 0; i < ssid.length; i++) {
        var item = ssid.substring(i, i + 1);
        item = item.charCodeAt(0).toString(16);

        if (item.length == 1) {
          item = '0' + item;
        }

        assiiList.push(item);
      }

      ssid = assiiList.join('');
      var byteList = hex2Array(ssid);
      byteList.unshift(0x14);
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, byteList);
    };

    CalibrationFlow.prototype.getQuickPairWifiSSIDResult = function () {
      this.setQuickPairWifiPWD();
    };

    CalibrationFlow.prototype.setQuickPairWifiPWD = function () {
      var pwd = this.operation.wifiPwd || '';
      var assiiList = [];

      for (var i = 0; i < pwd.length; i++) {
        var item = pwd.substring(i, i + 1);
        item = item.charCodeAt(0).toString(16);

        if (item.length == 1) {
          item = '0' + item;
        }

        assiiList.push(item);
      }

      pwd = assiiList.join('');
      var byteList = hex2Array(pwd);
      byteList.unshift(0x16);
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, byteList);
    };

    CalibrationFlow.prototype.getQuickPairWifiPWDResult = function () {
      this.setCalibrationResult();
    };

    CalibrationFlow.prototype.setCalibrationResult = function () {
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, [
        0x13,
        this.calibrationResult ? 0x01 : 0x00,
      ]);
    };

    return CalibrationFlow;
  })(QNBleActionFlow);

var PartialWeightFlow =
  /** @class */
  (function (_super) {
    __extends(PartialWeightFlow, _super);

    function PartialWeightFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_MODULE_TEST];
      _this.moduleTestWeightFlag = false;
      _this.moduleTestHeightFlag = false;
      _this.moduleTestImpFlag = false;
      _this.modelIdResult = false;
      _this.moduleTestResult = false;
      _this.segmentsRes = {};
      _this.uuids = uuids;
      return _this;
    } // ?????????

    PartialWeightFlow.prototype.execute = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          console.log('??????flow??????');
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x01, 0x01]
          );
          this.listener.onDeviceStateChange({
            behavior: MesBehavior.START_MODULE_TEST,
          });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    PartialWeightFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x01:
              // ????????????????????????
              console.log('????????????????????????');
              this.setModuleTestSnData();
              break;

            case 0x02:
              // ??????????????????sn
              this.getModuleTestSnDataResult(data);
              break;

            case 0x03:
              // ????????????????????????
              this.getModuleTestResistanceData(data);
              break;

            case 0xa3:
              // ????????????????????????(?????????)
              this.getModuleTestResistanceDataWithEightElec(data);
              break;

            case 0x04:
              // ????????????????????????
              this.getModuleTestWeightData(data);
              break;

            case 0x05:
              this.getModuleTestCmdResult(data);
              break;

            case 0x06:
              // ????????????????????????????????????
              this.getModuleTestHeightData(data);
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * ???????????????????????? 0x01
     */

    PartialWeightFlow.prototype.startModuleTest = function () {
      this.listener.onDeviceStateChange({
        behavior: MesBehavior.START_MODULE_TEST,
      });
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x01, 0x01]
      );
    };
    /**
     * ??????sn??? 0x02
     */

    PartialWeightFlow.prototype.setModuleTestSnData = function () {
      var sn = this.operation.sn;
      this.log('????????????sn???', sn);
      var assiiList = [];

      for (var i = 0; i < sn.length; i++) {
        var item = sn.substring(i, i + 1);
        item = item.charCodeAt(0).toString(16);

        if (item.length == 1) {
          item = '0' + item;
        }

        assiiList.push(item);
      }

      sn = assiiList.join('');
      var data = hex2Array(sn);
      data.unshift(0x02);
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, data);
    };

    PartialWeightFlow.prototype.getModuleTestSnDataResult = function (data) {
      var isSuccess = data[3] == 0x01;
      console.log('????????????????????????', this.listener);
      this.listener.onModuleTestWriteSnState({
        isSuccess: isSuccess,
      }); // this.deviceEventListener && this.deviceEventListener.onModuleTestWriteSnState(success)

      if (isSuccess) {
        // sn????????????????????????????????????
        this.startModuleTestWeight();
      } else {
        this.setModuleTestResult(false);
      }
    };
    /**
     * ?????????????????? 0x04
     */

    PartialWeightFlow.prototype.startModuleTestWeight = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x04, 0x01]
      );
    };

    PartialWeightFlow.prototype.getModuleTestWeightData = function (data) {
      var _a, _b;

      if (data[3] !== 0x01 || this.moduleTestWeightFlag) {
        return;
      }

      this.moduleTestWeightFlag = true;
      var weight = (data[4] << 8) + data[5];
      (_b = (_a = this.listener).onModuleTestWeightData) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            weight: weight,
          });
    };
    /**
     * ?????????????????? 0x06
     */

    PartialWeightFlow.prototype.startModuleTestHeight = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x06, 0x01]
      );
    };

    PartialWeightFlow.prototype.getModuleTestHeightData = function (data) {
      var _a, _b;

      if (data[3] !== 0x01) {
        return;
      } // ?????????????????????

      if (this.moduleTestHeightFlag) {
        return;
      } // ???????????????????????????

      this.moduleTestHeightFlag = true;
      var height = times(((data[4] << 8) + data[5]) / 10, 1);
      (_b = (_a = this.listener).onModuleTestHeightData) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            height: height,
          });
    };
    /**
     * ?????????????????? 0x03
     */

    PartialWeightFlow.prototype.startModuleTestResistance = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x03, 0x01]
      );
    };

    PartialWeightFlow.prototype.getModuleTestResistanceData = function (data) {
      if (data[3] != 0x01) {
        return;
      } // ?????????????????????

      if (this.moduleTestImpFlag) {
        return;
      } // ???????????????????????????

      this.moduleTestImpFlag = true;
      var res50 = (data[4] << 8) + data[5];
      var res500 = (data[6] << 8) + data[7];
      this.listener.onModuleTestResistanceData({
        res50: res50,
        res500: res500,
      });
    };
    /**
     * ?????????????????????
     */

    PartialWeightFlow.prototype.getModuleTestResistanceDataWithEightElec = function (data) {
      if (data.length < 15) {
        return;
      }

      var pack = data[3];

      if (pack == 1) {
        this.segmentsRes = {
          lf20: times(((data[4] << 8) + data[5]) / 10, 1),
          lf100: times(((data[6] << 8) + data[7]) / 10, 1),
          rf20: times(((data[8] << 8) + data[9]) / 10, 1),
          rf100: times(((data[10] << 8) + data[11]) / 10, 1),
          lh20: times(((data[12] << 8) + data[13]) / 10, 1),
        };
      } else {
        var secondSegmentsRes = {
          lh100: times(((data[4] << 8) + data[5]) / 10, 1),
          rh20: times(((data[6] << 8) + data[7]) / 10, 1),
          rh100: times(((data[8] << 8) + data[9]) / 10, 1),
          t20: times(((data[10] << 8) + data[11]) / 10, 1),
          t100: times(((data[12] << 8) + data[13]) / 10, 1),
        };
        var obj = Object.assign(this.segmentsRes, secondSegmentsRes);
        this.listener.onModuleTestResistanceData(obj);
      }
    };
    /**
     * ?????????????????? 0x05
     */

    PartialWeightFlow.prototype.setModuleTestResult = function (success) {
      this.moduleTestResult = success;
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, [
        0x05,
        success ? 0x01 : 0x00,
      ]);
    };

    PartialWeightFlow.prototype.getModuleTestCmdResult = function (data) {
      var isSuccess = this.moduleTestResult && data[3] == 0x01;
      this.listener.onModuleTestCodeStatus({
        isSuccess: isSuccess,
      });
      this.listener.onDeviceStateChange({
        behavior: MesBehavior.STOP_MODULE_TEST,
      });
    };

    return PartialWeightFlow;
  })(QNBleActionFlow);

var ModelProductFlow =
  /** @class */
  (function (_super) {
    __extends(ModelProductFlow, _super);

    function ModelProductFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.baseStamp2000 = Date.now() / 1000 - 946656000;
      _this.acceptActions = [QNBleAction.MES_MODEL_PRODUCT];
      _this.deviceType = 0;
      _this.isSupportQuickPair = false;
      _this.modelIdResult = false;
      _this.timerId = 0;
      _this.wifiPairFailNum = 0; // ?????????????????????????????????

      _this.currentCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = []; // body????????????

      _this.bodyByteDataArr = [];
      _this.measureResult = {};
      _this.uuids = uuids;
      return _this;
    } // ?????????

    ModelProductFlow.prototype.execute = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.setDeviceTime();
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    ModelProductFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, byteList, header, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          byteList = data;
          header = data[0];

          switch (header) {
            case 0x12:
              this.getDeviceInfo(byteList);
              break;

            case 0x14:
              this.getUnitAndScreenTimeResult();
              break;

            case 0x21:
              this.getDeviceTimeResult();

            case 0x10:
              this.getMeasureData(byteList);
              break;

            case 0x41:
              this.getModelIdAndWeightResult(byteList);
              break;

            case 0x49:
              this.getHeightWeightConfigResult(byteList);
              break;

            case 0x61:
              this.getSsidTotalPackResult(byteList);
              break;

            case 0x63:
              this.getWifiSsidDataResult(byteList);
              break;

            case 0x65:
              this.getWifiPwdTotalPackDataResult(byteList);
              break;

            case 0x67:
              this.getWifiPwdDataResult(byteList);
              break;

            case 0x69:
              this.getServerUrlTotalPackDataResult(byteList);
              break;

            case 0x6b:
              this.getServerUrlDataResult(byteList);
              break;

            case 0x6f:
              this.getWifiOtaTotalPackDataResult(byteList);
              break;

            case 0x71:
              this.getWifiOtaDataResult(byteList);
              break;

            case 0x73:
              this.getWifiEncryptDataResult(byteList);
              break;

            case 0x74:
              this.getWifiConnectNetResult(byteList);
              break;

            case 0x77:
              this.getScaleWifiStatusResult(byteList);
              break;

            case 0x78:
              this.getWifiConnectServerResult(byteList);
              break;
          }

          if (header != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = byteList[2];

          switch (type) {
            case 0x51:
              // ????????????
              this.getModelIdDataResult(byteList);
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    }; // 0x20

    ModelProductFlow.prototype.setDeviceTime = function () {
      var _a, _b;

      var byteList = [this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT ? 0x50 : 0x00];

      for (var i = 0; i < 4; i += 1) {
        byteList.push((this.baseStamp2000 >> (i * 8)) & 0xff);
      }

      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x20, byteList);
      (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            behavior: MesBehavior.START_MODEL_ID,
          });
      this.listener.onDeviceStateChange({
        behavior: MesBehavior.START_MODEL_ID,
      });
    }; // 0x12

    ModelProductFlow.prototype.getDeviceInfo = function (byteList) {
      if (byteList.length < 15) {
        return;
      }

      this.deviceType = byteList[2];
      this.isSupportQuickPair = (byteList[10] >> 6 && 0x01) == 0x01;
      this.setUnitAndScreenTime();
    }; // 0x13

    ModelProductFlow.prototype.setUnitAndScreenTime = function () {
      var byteList = [this.deviceType];

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          byteList.push(0x02);
          break;

        case QNBleUnit.JIN:
          byteList.push(0x04);
          break;

        case QNBleUnit.ST:
          byteList.push(0x03);
          break;

        default:
          byteList.push(0x01);
          break;
      }

      byteList.push(0x10);
      var isHeartRate = this.operation.isHeartRate ? 0x00 : 0x01;
      byteList.push(isHeartRate);
      byteList.push(0x00);
      byteList.push(0x00);
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x13, byteList);
    }; // 0x14

    ModelProductFlow.prototype.getUnitAndScreenTimeResult = function () {}; // 0x21

    ModelProductFlow.prototype.getDeviceTimeResult = function () {}; // 0x10

    ModelProductFlow.prototype.getMeasureData = function (byteList) {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      if (this.bleDevice.type === QNBleDeviceType.WSP_DUAL_MODE_SCALE) {
        if (byteList.length < 11) {
          return;
        }

        var weight_1 = this.decodeWeight(byteList[3], byteList[4]);
        var res50_1 = byteList[7] + (byteList[6] << 8);
        var res500_1 = byteList[9] + (byteList[8] << 8);
        var state_1 = byteList[5];

        if (state_1 !== 1) {
          (_b = (_a = this.listener).onGetUnsteadyWeight) === null || _b === void 0
            ? void 0
            : _b.call(_a, {
                weight: weight_1,
              }); // this.deviceEventListener && this.deviceEventListener.onGetUnreadyWeightData(weight)
        } else {
          this.confirmReceiveMeasureData();
          this.listener.onGetOriginScaleData({
            weight: weight_1,
            res50: res50_1,
            res500: res500_1,
          });
        }

        return;
      }

      if (this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT) {
        if (byteList.length < 16) {
          return;
        }

        var weight_2 = this.decodeWeight(byteList[3], byteList[4]);
        var height = times(((byteList[11] << 8) + byteList[12]) / 10, 1);
        var res50_2 = byteList[7] + (byteList[6] << 8);
        var res500_2 = byteList[9] + (byteList[8] << 8);
        var state_2 = byteList[5];

        if (state_2 !== 1) {
          (_d = (_c = this.listener).onGetUnsteadyHeightWeight) === null || _d === void 0
            ? void 0
            : _d.call(_c, {
                weight: weight_2,
                height: height,
              });
        } else {
          this.confirmReceiveMeasureData();
          this.listener.onGetOriginScaleData({
            weight: weight_2,
            height: height,
            res50: res50_2,
            res500: res500_2,
          });
        }

        return;
      }

      if (this.bleDevice.type === QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE) {
        if (byteList.length < 8) {
          return;
        }

        var weight_3 = this.decodeWeight(byteList[5], byteList[6]);
        this.listener.onGetUnsteadyWeight({
          weight: weight_3,
        }); // this.deviceEventListener && this.deviceEventListener.onGetUnreadyWeightData(weight)

        if (byteList.length >= 19 && byteList[1] == 0x13) {
          this.measureResult = {
            weight: this.decodeWeight(byteList[4], byteList[5]),
            lf20: times(((byteList[6] << 8) + byteList[7]) / 10, 1),
            lf100: times(((byteList[8] << 8) + byteList[9]) / 10, 1),
            rf20: times(((byteList[10] << 8) + byteList[11]) / 10, 1),
            rf100: times(((byteList[12] << 8) + byteList[13]) / 10, 1),
            lh20: times(((byteList[14] << 8) + byteList[15]) / 10, 1),
            lh100: times(((byteList[16] << 8) + byteList[17]) / 10, 1),
          };
        } else if (byteList.length >= 13 && byteList[1] == 0x0d) {
          var result = {
            rh20: times(((byteList[4] << 8) + byteList[5]) / 10, 1),
            rh100: times(((byteList[6] << 8) + byteList[7]) / 10, 1),
            t20: times(((byteList[8] << 8) + byteList[9]) / 10, 1),
            t100: times(((byteList[10] << 8) + byteList[11]) / 10, 1),
          };
          var obj = Object.assign(this.measureResult, result);
          this.confirmReceiveMeasureData();
          this.listener.onGetOriginScaleData(obj);
        }

        return;
      } // ???????????????

      if (byteList.length < 11) {
        return;
      }

      var weight = this.decodeWeight(byteList[3], byteList[4]);
      var res50 = byteList[7] + (byteList[6] << 8);
      var res500 = byteList[9] + (byteList[8] << 8);
      var state = byteList[5];

      if (state != 1) {
        (_f = (_e = this.listener).onGetUnsteadyWeight) === null || _f === void 0
          ? void 0
          : _f.call(_e, {
              weight: weight,
            }); // this.deviceEventListener && this.deviceEventListener.onGetUnreadyWeightData(weight)
      } else {
        this.confirmReceiveMeasureData();
        (_h = (_g = this.listener).onGetOriginScaleData) === null || _h === void 0
          ? void 0
          : _h.call(_g, {
              weight: weight,
              res50: res50,
              res500: res500,
            });
      }
    }; // 0x1F

    ModelProductFlow.prototype.confirmReceiveMeasureData = function () {
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x1f, [
        this.deviceType,
        0x10,
      ]);
    }; // 0x40 ????????????ID

    ModelProductFlow.prototype.setDeviceID = function () {
      var _this = this;

      var utcTime1 = this.baseStamp2000 & 0xff;
      var utcTime2 = (this.baseStamp2000 >> 8) & 0xff;
      var utcTime3 = (this.baseStamp2000 >> 16) & 0xff;
      var utcTime4 = (this.baseStamp2000 >> 24) & 0xff;
      var macByteList = hex2Array(this.bleDevice.mac.split(':').join(''));

      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        macByteList = macByteList.reverse();
      }

      var key =
        (utcTime1 ^ utcTime2 ^ utcTime3 ^ utcTime4) +
        ((macByteList[0] << 1) +
          (macByteList[1] << 1) +
          (macByteList[2] << 1) +
          (macByteList[3] << 2) +
          (macByteList[4] << 2) +
          (macByteList[5] << 2));
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x40, [
        this.deviceType,
        key & 0xff,
      ]);
      setTimeout(function () {
        // ??????????????????????????????????????????????????????
        _this.setDeviceModelIDAndWeight();
      }, 500);
    };

    ModelProductFlow.prototype.setDeviceModelIDAndWeight = function () {
      var utcTime1 = this.baseStamp2000 & 0xff;
      var utcTime2 = (this.baseStamp2000 >> 8) & 0xff;
      var utcTime3 = (this.baseStamp2000 >> 16) & 0xff;
      var utcTime4 = (this.baseStamp2000 >> 24) & 0xff;
      var macByteList = hex2Array(this.bleDevice.mac.split(':').join(''));

      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        macByteList = macByteList.reverse();
      }

      var cmdSource =
        ((utcTime1 + 1) ^ (utcTime2 + 1) ^ (utcTime3 + 1) ^ (utcTime4 + 1)) +
        ((macByteList[0] >> 1) +
          (macByteList[1] >> 1) +
          (macByteList[2] >> 1) +
          (macByteList[3] >> 2) +
          (macByteList[4] >> 2) +
          (macByteList[5] >> 2));
      var cmd = cmdSource & 0xff;
      var modeIdByteList = hex2Array(this.operation.modelId);
      var aliIdByteList = [0, 0];
      var minWeightList = hex2Array(this.operation.minWeight);
      var maxWeightList = hex2Array(this.operation.maxWeight);
      var overrideWeightList = hex2Array(this.operation.overrideWeight);
      var byteList = [this.deviceType];

      if (this.bleDevice.type !== QNBleDeviceType.NORMAL_BLE_SCALE) {
        byteList.push(cmd);
      }

      byteList.push(modeIdByteList[0], modeIdByteList[1]);
      byteList.push(aliIdByteList[0], aliIdByteList[1]);
      byteList.push(minWeightList[0], minWeightList[1]);
      byteList.push(maxWeightList[0], maxWeightList[1]);
      byteList.push(overrideWeightList[0], overrideWeightList[1]);

      switch (this.operation.batteryType) {
        case 9:
          byteList.push(0x03);
          break;

        case 3:
          byteList.push(0x01);
          break;

        case 2:
          byteList.push(0x02);
          break;

        default:
          byteList.push(0x00);
          break;
      }

      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, cmd, byteList);
      } else {
        this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x43, byteList);
      }
    }; // 0x41

    ModelProductFlow.prototype.getModelIdAndWeightResult = function (byteList) {
      var _a, _b;

      if (byteList.length < 9) {
        return;
      }

      var sucessCondition = this.bleDevice.type === QNBleDeviceType.NORMAL_BLE_SCALE ? 0 : 1;
      var isSuccess = byteList[7] == sucessCondition;
      (_b = (_a = this.listener).onGetWriteModelIdResult) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onGetWriteModelIdResult(success)

      if (isSuccess) {
        this.startWifiConfig();
      } else {
        this.setModelIdDataResult(false);
      }
    }; // ????????????wifi

    ModelProductFlow.prototype.startWifiConfig = function () {
      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        // ?????????????????????????????????
        this.listener.onGetWifiResult({
          isSuccess: true,
        });
        this.setModelIdDataResult(true);
      } else {
        if (this.isSupportQuickPair) {
          this.checkScaleWifiStatus();
        } else {
          this.setWifiSsidTotalPackData();
        }
      }
    }; // ??????wifi??????

    ModelProductFlow.prototype.prepareWifiData = function () {
      var _a = this.operation,
        _b = _a.wifiSsid,
        wifiSsid = _b === void 0 ? '' : _b,
        _c = _a.wifiPwd,
        wifiPwd = _c === void 0 ? '' : _c,
        _d = _a.dataServerUrl,
        dataServerUrl = _d === void 0 ? 'http://wifi.yolanda.hk:80/wifi_api/wsps?code=' : _d,
        _e = _a.otaServerUrl,
        otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e,
        _f = _a.encryptKey,
        encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f; // eslint-disable-next-line no-console

      this.log(
        'ssid:',
        wifiSsid,
        'pwd:',
        wifiPwd,
        'dataServerUrl',
        dataServerUrl,
        'otaServerUrl',
        otaServerUrl,
        'encryptKey',
        encryptKey
      );
      var ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
      var pwdByteArray = stringToByteArray(wifiPwd);
      var dataServerUrlByteArray = stringToByteArray(dataServerUrl);
      var otaServerUrlByteArray = stringToByteArray(otaServerUrl);
      this.ssidCmdData = splitArray(ssidByteArray);
      this.pwdCmdData = splitArray(pwdByteArray);
      this.dataServerUrlData = splitArray(dataServerUrlByteArray);
      this.otaServerUrlData = splitArray(otaServerUrlByteArray);
      this.encryptKeyCmdData = stringToByteArray(encryptKey);
    }; // 0x76 ??????wifi??????

    ModelProductFlow.prototype.checkScaleWifiStatus = function () {
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x76, [0x02]);
    };

    ModelProductFlow.prototype.getScaleWifiStatusResult = function (byteList) {
      var _a, _b;

      if (byteList.length < 4) {
        return;
      }

      var isSuccess = byteList[2] == 0x02;

      if (isSuccess) {
        (_b = (_a = this.listener).onGetWifiResult) === null || _b === void 0
          ? void 0
          : _b.call(_a, {
              isSuccess: isSuccess,
            });
        this.setModelIdDataResult(true); // this.deviceEventListener && this.deviceEventListener.onGetWifiResult(isSuccess)
      } else {
        this.setWifiSsidTotalPackData();
      }
    }; // 0x60

    ModelProductFlow.prototype.setWifiSsidTotalPackData = function () {
      var _this = this;

      this.prepareWifiData();
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x60, [
        this.ssidCmdData.length,
      ]);
      this.timerId = setTimeout(function () {
        _this.wifiPairFailNum += 1;

        if (_this.wifiPairFailNum >= 4) {
          _this.setModelIdDataResult(false);
        } else {
          _this.setWifiSsidTotalPackData();
        }
      }, 500);
    }; // 0x61

    ModelProductFlow.prototype.getSsidTotalPackResult = function (byteList) {
      this.timerId && clearTimeout(this.timerId);
      this.timerId = undefined;

      if (byteList[2] === 0x00) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiSsidData(1);
      }
    }; // 0x62

    ModelProductFlow.prototype.setWifiSsidData = function (index) {
      var byteList = this.ssidCmdData[index - 1];
      byteList.unshift(index);
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x62, byteList);
    }; // 0x63

    ModelProductFlow.prototype.getWifiSsidDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.ssidCmdData.length) {
        this.setWifiPwdTotalPackData();
      } else {
        this.setWifiSsidData(curPack + 1);
      }
    }; // 0x64

    ModelProductFlow.prototype.setWifiPwdTotalPackData = function () {
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x64, [
        this.pwdCmdData.length,
      ]);
    }; // 0x65

    ModelProductFlow.prototype.getWifiPwdTotalPackDataResult = function (byteList) {
      if (byteList[2] == 0) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiPwdData(1);
      }
    }; // 0x66

    ModelProductFlow.prototype.setWifiPwdData = function (index) {
      if (this.pwdCmdData.length == 0) {
        this.setWifiServerUrlTotalPackData();
      } else {
        var byteList = this.pwdCmdData[index - 1];
        byteList.unshift(index);
        this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x66, byteList);
      }
    }; // 0x67

    ModelProductFlow.prototype.getWifiPwdDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.pwdCmdData.length) {
        this.setWifiServerUrlTotalPackData();
      } else {
        this.setWifiPwdData(curPack + 1);
      }
    }; // 0x68

    ModelProductFlow.prototype.setWifiServerUrlTotalPackData = function () {
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x68, [
        this.dataServerUrlData.length,
      ]);
    }; // 0x69

    ModelProductFlow.prototype.getServerUrlTotalPackDataResult = function (byteList) {
      if (byteList[2] === 0) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiServerUrlData(1);
      }
    }; // 0x6A

    ModelProductFlow.prototype.setWifiServerUrlData = function (index) {
      var byteList = this.dataServerUrlData[index - 1];
      byteList.unshift(index);
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x6a, byteList);
    }; // 0x6B

    ModelProductFlow.prototype.getServerUrlDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.dataServerUrlData.length) {
        this.setWifiOtaTotalPackData();
      } else {
        this.setWifiServerUrlData(curPack + 1);
      }
    }; // 0x6E

    ModelProductFlow.prototype.setWifiOtaTotalPackData = function () {
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x6e, [
        this.otaServerUrlData.length,
      ]);
    }; // 0x6F

    ModelProductFlow.prototype.getWifiOtaTotalPackDataResult = function (byteList) {
      if (byteList[2] == 0) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiOtaData(1);
      }
    }; // 0x70

    ModelProductFlow.prototype.setWifiOtaData = function (index) {
      var byteList = this.otaServerUrlData[index - 1];
      byteList.unshift(index);
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x70, byteList);
    }; // 0x71

    ModelProductFlow.prototype.getWifiOtaDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.otaServerUrlData.length) {
        this.setWifiEncryptData();
      } else {
        this.setWifiOtaData(curPack + 1);
      }
    }; // 0x72

    ModelProductFlow.prototype.setWifiEncryptData = function () {
      var byteList = this.encryptKeyCmdData;
      byteList.unshift(byteList.length);
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x72, byteList);
    }; // 0x73

    ModelProductFlow.prototype.getWifiEncryptDataResult = function (byteList) {
      if (byteList[2] == 0) {
        this.setModelIdDataResult(false);
      }
    }; // 0x74

    ModelProductFlow.prototype.getWifiConnectNetResult = function (byteList) {
      this.writeCmd(this.uuids.wifi.serviceUUID, this.uuids.wifi.writeUUID, 0x75, [0x01]);

      if (byteList[2] == 0) {
        // this.deviceEventListener && this.deviceEventListener.onGetWifiResult(false)
        this.setModelIdDataResult(false);
      }
    }; // 0x78

    ModelProductFlow.prototype.getWifiConnectServerResult = function (byteList) {
      var _a, _b;

      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.bleDevice.type === QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE
          ? WspDualScaleMesProfle.EIGHT_UUID_WIFI_WRITE
          : WspDualScaleMesProfle.UUID_WRITE,
        0x79,
        [0x01]
      );
      var isSuccess = byteList[2] == 0x01;
      (_b = (_a = this.listener).onGetWifiResult) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onGetWifiResult(success)

      if (this.bleDevice.type !== QNBleDeviceType.HEIGHTWEIGHT) {
        this.setModelIdDataResult(isSuccess);
      }
    };
    /**
     * ???????????????????????????(????????????) 0x48
     */

    ModelProductFlow.prototype.startHeightWeightConfig = function () {
      var _a, _b, _c, _d, _e, _f;

      console.log('??????????????????', this.operation);
      var byteList = [this.deviceType, 0x00, 0x00, 0x00];
      var modeIdByteList = hex2Array(this.operation.modelId);
      var minWeightList = hex2Array(this.operation.minWeight);
      var maxWeightList = hex2Array(this.operation.maxWeight);
      byteList.push(
        (_a = modeIdByteList[0]) !== null && _a !== void 0 ? _a : 0,
        (_b = modeIdByteList[1]) !== null && _b !== void 0 ? _b : 0
      );
      byteList.push(
        (_c = minWeightList[0]) !== null && _c !== void 0 ? _c : 0,
        (_d = minWeightList[1]) !== null && _d !== void 0 ? _d : 0
      );
      byteList.push(
        (_e = maxWeightList[0]) !== null && _e !== void 0 ? _e : 0,
        (_f = maxWeightList[1]) !== null && _f !== void 0 ? _f : 0
      );
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x48, byteList);
    };
    /**
     * ????????????????????????????????? 0x49
     */

    ModelProductFlow.prototype.getHeightWeightConfigResult = function (byteList) {
      var isSuccess = byteList[3] === 1;
      this.listener.onGetWriteModelIdResult({
        isSuccess: isSuccess,
      });
      this.setModelIdDataResult(isSuccess);
    };
    /**
     * ?????????????????? 0x51
     */

    ModelProductFlow.prototype.setModelIdDataResult = function (success) {
      this.modelIdResult = success;
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, [
        0x51,
        success ? 0x01 : 0x00,
      ]);
    };

    ModelProductFlow.prototype.getModelIdDataResult = function (byteList) {
      var _this = this;

      var _a, _b;

      var isSuccess = byteList[3] === 1 && this.modelIdResult;
      (_b = (_a = this.listener).onReviewCodeStatus) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          });

      if (isSuccess) {
        // setTimeout(() => {
        this.setDeviceSleepMode();
        setTimeout(function () {
          var _a, _b;

          (_b = (_a = _this.listener).onDeviceStateChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, {
                behavior: MesBehavior.STOP_MODEL_ID,
              });
        }, 1000); // }, 200);
      }
    }; // 0x50

    ModelProductFlow.prototype.setDeviceSleepMode = function () {
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0x50, [
        this.deviceType,
      ]);
    };

    return ModelProductFlow;
  })(QNBleActionFlow);

var PartialWeightFlow$1 =
  /** @class */
  (function (_super) {
    __extends(PartialWeightFlow, _super);

    function PartialWeightFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_PARTIAL];
      _this.uuids = uuids;
      return _this;
    } //?????????

    PartialWeightFlow.prototype.execute = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x31, 0x01]
          );
          this.listener.onDeviceStateChange({
            behavior: MesBehavior.START_PARTIAL,
          });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    PartialWeightFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x32:
              //?????????????????????
              this.getPartialWeightData(data);
              break;

            case 0x33:
              //??????????????????????????????
              this.getPartialWeightDataResult(data);
              break;

            case 0x41:
              //????????????
              this.getPartialWeightData(data);
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * ?????????????????? 0x32
     */

    PartialWeightFlow.prototype.getPartialWeightData = function (byteList) {
      this.setPartialWeightDataResult(1);
      var weight = this.decodeWeight(byteList[3], byteList[4]);
      this.listener.onGetPartialWeightData({
        weight: weight,
      }); // const success = this.deviceEventListener && this.deviceEventListener.onGetPartialWeightData(weight)
    }; //1???????????? 2 ???????????? 3 ????????????

    PartialWeightFlow.prototype.setPartialWeightDataResult = function (state) {
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, [
        0x32,
        state,
      ]);
    };
    /**
     * ?????????????????????????????? 0x33
     */

    PartialWeightFlow.prototype.getPartialWeightDataResult = function (byteList) {
      var isSuccess = byteList[3] === 0x01;
      this.listener.onPartialCodeStatus({
        isSuccess: isSuccess,
      }); // this.deviceEventListener && this.deviceEventListener.onPartialCodeStatus(success)

      this.listener.onDeviceStateChange({
        behavior: MesBehavior.STOP_PARTIAL,
      });
    };

    return PartialWeightFlow;
  })(QNBleActionFlow);

var ReviewFlow =
  /** @class */
  (function (_super) {
    __extends(ReviewFlow, _super);

    function ReviewFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_REVIEW];
      _this.uuids = uuids;
      return _this;
    } //?????????

    ReviewFlow.prototype.execute = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x21, 0x01]
          );
          (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, {
                behavior: MesBehavior.START_BACKHOE,
              });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    ReviewFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x22:
              //?????????????????????
              this.getReviewWeightData(data);
              break;

            case 0x23:
              //??????????????????????????????
              this.getReviewWeightDataResult(data);
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * ???????????? 0x21
     */

    ReviewFlow.prototype.enterReview = function () {
      var _a, _b;

      (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            behavior: MesBehavior.START_BACKHOE,
          }); // this.listener.onDeviceStateChange({behavior:MesBehavior.START_BACKHOE)

      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x21, 0x01]
      );
    };
    /**
     * ?????????????????? 0x22
     */

    ReviewFlow.prototype.getReviewWeightData = function (byteList) {
      var _a, _b;

      this.setReviewWeightDataResult(1);
      var weight = this.decodeWeight(byteList[3], byteList[4]);
      (_b = (_a = this.listener).onGetReviewWeightData) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            weight: weight,
          }); // const success = this.deviceEventListener && this.deviceEventListener.onGetReviewWeightData(weight)
    }; //1 ??????????????? 2 ???????????? 3 ????????????

    ReviewFlow.prototype.setReviewWeightDataResult = function (state) {
      this.writeCmd(this.uuids.produce.serviceUUID, this.uuids.produce.writeUUID, 0xfd, [
        0x22,
        state,
      ]);
    };
    /**
     * ?????????????????????????????? 0x23
     */

    ReviewFlow.prototype.getReviewWeightDataResult = function (byteList) {
      var _a, _b, _c, _d;

      var isSuccess = byteList[3] == 0x01 && byteList[3] == 0x01;
      (_b = (_a = this.listener).onReviewCodeStatus) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onReviewCodeStatus(success)

      (_d = (_c = this.listener).onDeviceStateChange) === null || _d === void 0
        ? void 0
        : _d.call(_c, {
            behavior: MesBehavior.STOP_BACKHOE,
          });
    };

    return ReviewFlow;
  })(QNBleActionFlow);

var WspMes = {
  WspDualScaleMesProfle: WspDualScaleMesProfle,
  CalibrationFlow: CalibrationFlow,
  ModuleTestFlow: PartialWeightFlow,
  ModelProductFlow: ModelProductFlow,
  PartialWeightFlow: PartialWeightFlow$1,
  ReviewFlow: ReviewFlow,
};

var WspDualScaleMesProfle$1 = WspMes.WspDualScaleMesProfle,
  CalibrationFlow$1 = WspMes.CalibrationFlow,
  ReviewFlow$1 = WspMes.ReviewFlow,
  PartialWeightFlow$2 = WspMes.PartialWeightFlow,
  ModuleTestFlow = WspMes.ModuleTestFlow,
  ModelProductFlow$1 = WspMes.ModelProductFlow;

var WspDualScaleMesProtocol =
  /** @class */
  (function (_super) {
    __extends(WspDualScaleMesProtocol, _super);

    function WspDualScaleMesProtocol() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * ?????????????????????????????????????????????
     *
     * @memberof WspDualScaleMesProtocol
     */

    WspDualScaleMesProtocol.prototype.prepare = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var uuids;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.bleNative.findService(this.bleDevice.deviceId),
              ];

            case 1:
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID: WspDualScaleMesProfle$1.UUID_TIME_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.UUID_WRITE,
                },
                wifi: {
                  serviceUUID: WspDualScaleMesProfle$1.UUID_TIME_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.UUID_WRITE,
                },
              };
              if (!(this.bleDevice.type === QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE))
                return [3 /*break*/, 4]; // ?????????

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.EIGHT_UUID_NOTIFY
                ),
              ];

            case 2:
              // ?????????
              _c.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.EIGHT_UUID_WIFI_NOTIFY
                ),
              ];

            case 3:
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID: WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.EIGHT_UUID_WRITE,
                },
                wifi: {
                  serviceUUID: WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.EIGHT_UUID_WIFI_WRITE,
                },
              };
              return [3 /*break*/, 6];

            case 4:
              if (!(this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT)) return [3 /*break*/, 6]; // ??????????????? CP30B

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_NOTIFY
                ),
              ];

            case 5:
              // ??????????????? CP30B
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_WRITE,
                },
                wifi: {
                  serviceUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_WRITE,
                },
              };
              _c.label = 6;

            case 6:
              if (!(this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE))
                return [3 /*break*/, 8]; // ???????????????????????? CP30A

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_NOTIFY
                ),
              ];

            case 7:
              // ???????????????????????? CP30A
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE,
                },
                wifi: {
                  serviceUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE,
                },
              };
              return [3 /*break*/, 10];

            case 8:
              // ?????????
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.UUID_TIME_SERVICES,
                  WspDualScaleMesProfle$1.UUID_NOTIFY
                ),
              ];

            case 9:
              // ?????????
              _c.sent();

              _c.label = 10;

            case 10:
              if (this.operation.action === QNBleAction.MES_READ_SN) {
                (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, {
                      behavior: MesBehavior.STOP_READ_SN,
                    });
              }

              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.UUID_SN
                ),
              ];

            case 11:
              _c.sent();

              this.actionFlows.push(new CalibrationFlow$1(this, uuids));
              this.actionFlows.push(new ReviewFlow$1(this, uuids));
              this.actionFlows.push(new PartialWeightFlow$2(this, uuids));
              this.actionFlows.push(new ModuleTestFlow(this, uuids));
              this.actionFlows.push(new ModelProductFlow$1(this, uuids));
              this.applyFlow();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleMesProtocol.prototype.applyFlow = function () {
      var e_1, _a;

      try {
        for (var _b = __values(this.actionFlows), _c = _b.next(); !_c.done; _c = _b.next()) {
          var flow = _c.value;

          if (flow.accept(this.operation.action)) {
            flow.action = this.operation.action;
            this.currentFlow = flow;
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1,
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b['return'])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      if (this.currentFlow) {
        this.currentFlow.execute();
      }
    };
    /**
     * ????????????
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    WspDualScaleMesProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d;

      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, sn, _e, _f, num, item;

        var e_2, _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              (data = payload.data), (characteristicId = payload.characteristicId);

              if (characteristicId === WspDualScaleMesProfle$1.UUID_SN) {
                sn = '';

                try {
                  // eslint-disable-next-line no-restricted-syntax
                  for (_e = __values(payload.data), _f = _e.next(); !_f.done; _f = _e.next()) {
                    num = _f.value;
                    item = String.fromCharCode(num);
                    sn += item;
                  }
                } catch (e_2_1) {
                  e_2 = {
                    error: e_2_1,
                  };
                } finally {
                  try {
                    if (_f && !_f.done && (_g = _e['return'])) _g.call(_e);
                  } finally {
                    if (e_2) throw e_2.error;
                  }
                }

                (_b = (_a = this.listener).onGetSnCode) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, {
                      sn: sn,
                    });

                if (this.operation.action === QNBleAction.MES_READ_SN) {
                  (_d = (_c = this.listener).onDeviceStateChange) === null || _d === void 0
                    ? void 0
                    : _d.call(_c, {
                        behavior: MesBehavior.STOP_READ_SN,
                      });
                }
              }

              if (!this.currentFlow) return [3 /*break*/, 2];
              return [
                4,
                /*yield*/
                this.currentFlow.decode(payload),
              ];

            case 1:
              _h.sent();

              _h.label = 2;

            case 2:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /************  ????????????  *************/

    /**
     * ???????????? 0x41
     * 0x00 ???????????? 0x01 ???????????? 0x02 ?????????
     * 0x04 ???????????? 0x08 ???????????? 0x10 ??????  0x02 ?????????
     */

    WspDualScaleMesProtocol.prototype.resetStation = function (station) {
      // this.writeCmd(this.getProduceUUID().serviceUUID, this.getProduceUUID().writeUUID, 0xFD, [0x41, station])
    };

    WspDualScaleMesProtocol.prototype.getCurrentFlow = function () {
      return this.currentFlow;
    };

    WspDualScaleMesProtocol.bleProfile = new WspDualScaleMesProfle$1();
    WspDualScaleMesProtocol.WspMes = WspMes;
    return WspDualScaleMesProtocol;
  })(QNBleProtocol);

var SECOND_2000_YEAR$1 = 946656000;
/**
 * ??????????????????
 * @param {number} scaleType
 */

function isHeartRateScale$1(scaleType) {
  return scaleType === 0x21;
}

function buildCmd$2(cmd, deviceType) {
  var data = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    data[_i - 2] = arguments[_i];
  }

  var cmdData = __spread([cmd, data.length + 4, deviceType], data); // writeData?????????????????????????????????
  // return addChecksum(cmdData);

  return cmdData;
}

var NormalBleScaleBleProfle =
  /** @class */
  (function () {
    function NormalBleScaleBleProfle() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.NORMAL_BLE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    NormalBleScaleBleProfle.prototype.isTargetDevice = function (nativeDevice) {
      var bleName = nativeDevice.bluetoothName;

      if (
        bleName === 'QN-Scale' ||
        bleName === 'QN-Scale1' ||
        bleName === 'ZT-Scale1' || // ?????????????????????????????????????????????
        // ??????hilink????????????????????????Hi-??????
        /^Hi-/.test(bleName)
      ) {
        return nativeDevice.manufacturer.length < 19;
      }

      return false;
    };

    NormalBleScaleBleProfle.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;

      if (manufacturer.length === 0) {
        return {};
      }

      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      return {
        isScreenOn: manufacturer[5] !== 1,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return NormalBleScaleBleProfle;
  })();

var NormalBleScaleProtocol$1 =
  /** @class */
  (function (_super) {
    __extends(NormalBleScaleProtocol, _super);

    function NormalBleScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = 'FFE0';
      _this.UUID_IBT_READ = 'FFE1';
      _this.UUID_IBT_WRITE = 'FFE3';
      _this.UUID_IBT_SERVICES_1 = 'FFF0';
      _this.UUID_IBT_READ_1 = 'FFF1';
      _this.UUID_IBT_WRITE_1 = 'FFF2';
      _this.hasReceived = false;
      _this.lastWeightTime = 0;
      _this.isHoltk = false;
      return _this;
    }

    Object.defineProperty(NormalBleScaleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_SERVICES_1 : this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(NormalBleScaleProtocol.prototype, 'characteristicReadId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_READ_1 : this.UUID_IBT_READ;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(NormalBleScaleProtocol.prototype, 'characteristicWriteId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_WRITE_1 : this.UUID_IBT_WRITE;
      },
      enumerable: false,
      configurable: true,
    });

    NormalBleScaleProtocol.prototype.prepare = function () {
      var _this = this; // ???????????????

      this.instanceScaleBiz();
      var deviceId = this.bleDevice.deviceId;
      return this.bleNative
        .findService(deviceId)
        .then(function (services) {
          _this.log('???????????????????????????', services); // ???????????????????????????

          services.some(function (service) {
            if (service.characteristicId === _this.UUID_IBT_SERVICES_1) {
              _this.isHoltk = true;
              return true;
            }

            return false;
          });

          _this.log('deviceId', deviceId, 'serviceId', _this.serviceId);

          return timeoutPromise(100).then(function () {
            return _this.bleNative.findBleDeviceCharacteristics(deviceId, _this.serviceId);
          });
        })
        .then(function () {
          _this.log('?????????????????????'); // ???????????????

          return _this.bleNative
            .enableNotify(deviceId, _this.serviceId, _this.characteristicReadId)
            ['catch'](function (err) {
              // ??????????????????????????????hilink??????????????????????????????serviceId
              // ?????????????????????????????????service???uuid??????
              if (_this.bleNative.name === 'QNBleNativeHuaWeiHilink') {
                _this.isHoltk = true;
                return _this.bleNative.enableNotify(
                  deviceId,
                  _this.serviceId,
                  _this.characteristicReadId
                );
              }

              throw err;
            });
        })
        ['catch'](function (err) {
          _this.log('prepare??????', err);

          throw err;
        });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    NormalBleScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d;

      return __awaiter(this, void 0, void 0, function () {
        var data, scaleType, _e, isSupportJin, isSupportSt, unitByte, weight, differ, timeData, i;

        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              data = payload.data;
              scaleType = data[2];
              _e = data[0];

              switch (_e) {
                case 0x12:
                  return [3 /*break*/, 1];

                case 0x10:
                  return [3 /*break*/, 3];

                case 0x14:
                  return [3 /*break*/, 11];
              }

              return [3 /*break*/, 13];

            case 1:
              this.scaleBizImp.weightScale = (data[10] & 0x01) === 1 ? 100 : 10;
              this.lastWeightTime = 0;
              isSupportJin = ((data[10] >> 1) & 3) > 0;
              isSupportSt = ((data[10] >> 1) & 3) === 2;
              unitByte = 1;

              switch (this.operation.unit) {
                case QNBleUnit.LB:
                  unitByte = 2;
                  break;

                case QNBleUnit.JIN:
                  unitByte = isSupportJin ? 4 : 1;
                  break;

                case QNBleUnit.ST:
                  unitByte = isSupportSt ? 8 : 2;
                  break;
              }

              (_b = (_a = this.listener).onGetDeviceInfo) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      fwVersion: data[9],
                      bleVersion: data[11],
                    },
                  });
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$2(0x13, scaleType, unitByte, 0x10, 0x00, 0x00, 0x00),
                }),
              ];

            case 2:
              _f.sent();

              return [3 /*break*/, 14];

            case 3:
              weight = this.scaleBizImp.decodeWeight(data[3], data[4]);
              if (!(data[5] === 0)) return [3 /*break*/, 4];
              this.log('??????????????????', weight);
              this.lastWeightTime = weight === 0 ? 0 : new Date().getTime();
              (_d = (_c = this.listener).onGetUnsteadyWeight) === null || _d === void 0
                ? void 0
                : _d.call(_c, {
                    weight: weight,
                  }); // ????????????????????????????????????

              this.hasReceived = false;
              return [3 /*break*/, 10];

            case 4:
              if (!(data[5] === 1)) return [3 /*break*/, 8];
              if (!isHeartRateScale$1(scaleType)) return [3 /*break*/, 5];
              return [3 /*break*/, 7];

            case 5:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 6:
              _f.sent();

              _f.label = 7;

            case 7:
              return [3 /*break*/, 10];

            case 8:
              if (!(data[5] === 2)) return [3 /*break*/, 10];
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 9:
              _f.sent();

              _f.label = 10;

            case 10:
              return [3 /*break*/, 14];

            case 11:
              if (!this.isHoltk) {
                return [
                  2,
                  /*return*/
                ];
              }

              differ = Date.now() / 1000 - SECOND_2000_YEAR$1;
              timeData = [];

              for (i = 0; i < 4; i += 1) {
                timeData.push(differ >> (i * 8));
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$2(
                    0x20,
                    scaleType,
                    timeData[0],
                    timeData[1],
                    timeData[2],
                    timeData[3]
                  ),
                }),
              ];

            case 12:
              _f.sent();

              return [3 /*break*/, 14];

            case 13:
              return [3 /*break*/, 14];

            case 14:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.prototype.dispatchSteadyData = function (weight, data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var scaleType, sendCmd, testTime, hasResistance, resistance50, resistance500, scaleData;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              scaleType = data[2];
              sendCmd = buildCmd$2(0x1f, scaleType, 0x10);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: sendCmd,
                }),
              ];

            case 1:
              _c.sent();

              if (this.hasReceived) {
                // ???????????????????????????????????????
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.hasReceived = true;
              testTime = new Date().getTime() - this.lastWeightTime;
              hasResistance = Number(testTime > 4000);
              resistance50 = decodeInteger(data[6], data[7]);
              resistance500 = decodeInteger(data[8], data[9]);
              scaleData = {
                weight: weight,
                resistance50: resistance50,
                resistance500: resistance500,
                hasResistance: hasResistance,
              };

              if (data[5] === 2) {
                Object.assign(scaleData, {
                  heartRate: data[10],
                });
              }

              this.log('????????????', scaleData); // @ts-ignore

              (_b = (_a = this.listener).onGetScaleData) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    scaleData: scaleData,
                  });
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.bleProfile = new NormalBleScaleBleProfle();
    return NormalBleScaleProtocol;
  })(QNBleBaseScaleProtocol);

var ThermometerProtocolProfile =
  /** @class */
  (function () {
    function ThermometerProtocolProfile() {
      this.defaultAction = QNBleAction.MEASURE;
      this.type = QNBleDeviceType.THERMOMETER;
      this.transferType = QNBleTransferType.BLE;
    }

    ThermometerProtocolProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-Thermo';
    };

    ThermometerProtocolProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[4]),
      ];
      return {
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return ThermometerProtocolProfile;
  })();

var ThermometerProtocol =
  /** @class */
  (function (_super) {
    __extends(ThermometerProtocol, _super);

    function ThermometerProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFF2-0000-1000-8000-00805F9B34FB'; // ????????????

      _this.UUID_COMPAIRE_READ = '0000FFF3-0000-1000-8000-00805F9B34FB';
      _this.UUID_COMPAIRE_WRITE = '0000FFF4-0000-1000-8000-00805F9B34FB'; // ????????????

      _this.blePaireStatus = 0; // ??????????????????

      _this.historyCount = 0; // ??????????????????????????????????????????????????????

      _this.lastReceivedHistoryData = {}; // ?????????????????????????????????????????????????????????????????????

      _this.isCancelHistoryData = false; // ????????????????????????????????????

      _this.currentRecivedHistoryDataNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // ???????????????????????????wifi ssid?????????

      _this.lastReceivedWifiIno = {}; // ??????????????????wifi ssid??????

      _this.lastReceivedWifiSsidPackNo = 0; // ???????????????????????????????????????

      _this.currentSetWifiCmdNo = 0; // wifi??????????????????

      _this.ssidCmdData = []; // wifi??????????????????

      _this.pwdCmdData = []; // ??????????????????????????????

      _this.dataServerUrlData = []; // OTA????????????????????????

      _this.otaServerUrlData = []; // ??????????????????

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(ThermometerProtocol.prototype, 'action', {
      get: function get() {
        return this.operation.action || ThermometerProtocol.bleProfile.defaultAction;
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * @override
     */

    ThermometerProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 2:
              services = _a.sent();
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              this.log('???????????????????????????', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(deviceId, this.serviceId),
              ];

            case 4:
              _a.sent(); // if ([
              //   QNBleAction.SP_SYNC_CURRENT_DATA,
              //   QNBleAction.SP_SYNC_HISTORY_DATA,
              // ].includes(this.operation.action)) {
              // }

              this.log(
                '???????????????????????????????????????',
                'deviceId',
                deviceId,
                'serviceId',
                this.serviceId,
                'characteristicId',
                this.characteristicReadId
              );
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(deviceId, this.serviceId, this.characteristicReadId),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    ThermometerProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data, _c, status_1;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              data = payload.data;
              _d.label = 1;

            case 1:
              _d.trys.push([1, , 14, 15]);

              _c = data[0];

              switch (_c) {
                case 0x12:
                  return [3 /*break*/, 2];

                case 0x10:
                  return [3 /*break*/, 6];

                case 0xa0:
                  return [3 /*break*/, 10];
              }

              return [3 /*break*/, 12];

            case 2:
              if (!(this.lastCmd !== 0x12)) return [3 /*break*/, 4];
              return [
                4,
                /*yield*/
                this.getDeviceInfo(data),
              ];

            case 3:
              _d.sent();

              return [3 /*break*/, 5];

            case 4:
              this.log('???????????????0x12?????????????????????');
              _d.label = 5;

            case 5:
              return [3 /*break*/, 13];

            case 6:
              if (!(this.lastCmd !== 0x10)) return [3 /*break*/, 8];
              return [
                4,
                /*yield*/
                this.onRecieveCurrentData(data),
              ];

            case 7:
              _d.sent();

              return [3 /*break*/, 9];

            case 8:
              this.log('???????????????0x10?????????????????????');
              _d.label = 9;

            case 9:
              return [3 /*break*/, 13];

            case 10:
              status_1 = data[2];
              this.blePaireStatus = status_1;
              (_b = (_a = this.listener).onGetBlePaireStatus) === null || _b === void 0
                ? void 0
                : _b.call(_a, status_1);
              return [
                4,
                /*yield*/
                this.writeData({
                  characteristicId: this.UUID_COMPAIRE_WRITE,
                  cmdData: [0xa1, 4, 1],
                }),
              ];

            case 11:
              _d.sent();

              return [3 /*break*/, 13];

            case 12:
              return [3 /*break*/, 13];

            case 13:
              return [3 /*break*/, 15];

            case 14:
              this.lastCmd = data[0];
              return [
                7,
                /*endfinally*/
              ];

            case 15:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    ThermometerProtocol.prototype.getDeviceInfo = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var macs, modelId, modeByte;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              macs = [
                number2hex(data[10]),
                number2hex(data[9]),
                number2hex(data[8]),
                number2hex(data[7]),
                number2hex(data[6]),
                number2hex(data[5]),
              ];
              modelId = number2hex(data[11]) + number2hex(data[12]);
              modeByte = data[2];
              (_b = (_a = this.listener).onGetDeviceInfo) === null || _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      mac: macs.join(':'),
                      modelId: modelId,
                      deviceStatus: {
                        unit: (modeByte >> 3) & 1,
                        mode: (modeByte >> 4) & 15,
                      },
                      historyCount: 0,
                      softwareVersion: data[13],
                      bleVersion: data[14],
                      bleProtocolVersion: data[15],
                    },
                  }); // ????????????13??????

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x13, 0x04, 0x01],
                }),
              ];

            case 1:
              // ????????????13??????
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     */

    ThermometerProtocol.prototype.onRecieveCurrentData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var modeByte, value;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              modeByte = data[2];
              value = Number.parseInt(number2hex(data[3]) + number2hex(data[4]), 16) / 10;
              return [
                4,
                /*yield*/
                (_b = (_a = this.listener).onGetCurrentData) === null || _b === void 0
                  ? void 0
                  : _b.call(_a, {
                      value: value,
                      unit: (modeByte >> 3) & 1,
                      mode: (modeByte >> 4) & 15,
                    }),
              ];

            case 1:
              _c.sent();

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x1f, 0x04, 0x10],
                }),
              ];

            case 2:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     */

    ThermometerProtocol.prototype.prepareBlePaire = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('??????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  this.UUID_IBT_SERVICE,
                  this.UUID_COMPAIRE_READ
                ),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    ThermometerProtocol.bleProfile = new ThermometerProtocolProfile();
    return ThermometerProtocol;
  })(QNBleProtocol);

var QNBleProtocols = {
  HeightWeightScaleProtocol: HeightWeightScaleProtocol,
  NormalBleScaleProtocol: NormalBleScaleProtocol,
  OneToMultiBroadcastScaleProtocol: OneToMultiBroadcastScaleProtocol,
  OneToOneBroadcastScaleProtocol: OneToOneBroadcastScaleProtocol,
  WspDualScaleProtocol: WspDualScaleProtocol,
  ShareCLScaleProtocol: ShareCLScaleProtocol,
  ShareScaleProtocol: ShareScaleProtocol,
  WspDualScaleMesProtocol: WspDualScaleMesProtocol,
  SphygmomanometerProtocol: SphygmomanometerProtocol,
  ThermometerProtocol: ThermometerProtocol,
  BleKitchenScaleProtocol: BleKitchenScaleProtocol,
  BroadcastKitchenScaleProtocol: BroadcastKitchenScaleProtocol,
  FasciaGunMCUProtocol: FasciaGunMCUProtocol,
  NormalBleScaleMesProtocol: NormalBleScaleProtocol$1,
  EightElectrodeScaleProtocol: WspDualScaleProtocol$1,
};

var QNEvent =
  /** @class */
  (function () {
    function QNEvent(_a) {
      var type = _a.type,
        name = _a.name,
        detail = _a.detail;
      this.type = type;
      this.name = name;
      this.detail = detail;
    }

    return QNEvent;
  })();

/**
 * ?????????????????????
 * @param {string} word
 * @returns {string}
 */
// function capitalizeFirstLetter(word: string): string {
//   return word.replace(/([a-zA-Z])/, (letter) => letter.toUpperCase());
// }
// /**
//  * ???????????????
//  * ???aa-bb-xx ??????aaBbXx
//  * @param {string} str
//  * @param {boolean} [ignoreHeadKebab=false] - ???????????????
//  * ??????true???-webkit-border-radius?????????webkitBorderRadius
//  */
// function camelCase(str: string, ignoreHeadKebab = false): string {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return str.replace(
//     /([:\-_]+(.))/g,
//     (_, separator, letter: string, offset) => (
//       offset >= Number(ignoreHeadKebab) ? letter.toUpperCase() : letter),
//   );
// }

/**
 * ???????????????
 * ???aa-bb-xx??????AaBbXx
 * @param {string} str - input
 * @returns {string}
 */
// function pascalCase(str: string): string {
//   return capitalizeFirstLetter(camelCase(str));
// }
// /**
//  * ?????????bluetooth_enable_change??????onBluetoothEnableChange
//  * @param {T} eventName
//  */
// function camelEventName<T>(eventName: T): T {
//   return `on${pascalCase(eventName as unknown as string)}` as unknown as T;
// }
// function deprecatedEventWarn(eventName: QNBleTypings.QNEventName) {
//   // ?????????????????????????????????
//   const deprecatedEvents = [
//     'start_discovery_device',
//     'stop_discovery_device',
//   ];
//   if (deprecatedEvents.includes(eventName)) {
//     // eslint-disable-next-line no-console
//     console.warn(`????????????????????????[${eventName}]??????????????????????????????????????????????????????????????????????????????????????????????????????????????????`);
//   }
// }

var QNEventManager =
  /** @class */
  (function () {
    function QNEventManager() {
      // eslint-disable-next-line max-len
      this.handlers = new Map();
    }
    /**
     * ??????????????????
     * @private
     * @static
     * @param {(eventName: QNBleTypings.QNEventName} eventName - ?????????
     * @returns {QNBleTypings.QNEventType | false}
     */
    // eslint-disable-next-line max-len

    QNEventManager.getEventType = function (eventName) {
      if (eventName === 'error') {
        return 'error';
      }

      if (eventName === 'ready') {
        return 'ready';
      }

      if (QNBleEventNames.includes(eventName)) {
        return 'ble';
      }

      if (QNDeviceEventNames.includes(eventName)) {
        return 'device';
      }

      return false;
    };
    /**
     * ??????????????????
     * @param {string} eventName - ?????????
     * @param {QNBleTypings.QNEventHandler} handler - ????????????
     * @returns {QNEventManager}
     */

    QNEventManager.prototype.on = function (eventName, handler) {
      var targetHanders = this.handlers.get(eventName);

      if (!targetHanders) {
        targetHanders = new Array();
        this.handlers.set(eventName, targetHanders);
      }

      if (!targetHanders.includes(handler)) {
        targetHanders.push(handler);
      }

      return this;
    }; //
    // eslint-disable-next-line max-len

    QNEventManager.prototype.off = function (eventName, handler) {
      if (this.handlers.get(eventName)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        var handlerIsBoolean = isType(handler) === 'boolean';

        if (handlerIsBoolean && handler) {
          this.handlers.set(eventName, []);
        } else if (!handlerIsBoolean) {
          var targetHandlers = this.handlers.get(eventName);
          var tarIndex = targetHandlers.findIndex(function (h) {
            return h === handler;
          });

          if (tarIndex > -1) {
            targetHandlers.splice(tarIndex, 1);
          }
        }
      }

      return this;
    };
    /**
     * ??????????????????
     * @private
     * @param {QNBleTypings.QNEventName} eventName - ?????????
     * @param {unknown} [payload] - ????????????
     * @returns {QNEventManager}
     */

    QNEventManager.prototype.dispatch = function (eventName, payload) {
      var targetHandlers = this.handlers.get(eventName);

      if (!targetHandlers || targetHandlers.length === 0) {
        // eslint-disable-next-line no-console
        console.warn('\u672A\u76D1\u542C\u7684\u4E8B\u4EF6[' + eventName + ']');
        return this;
      }

      var e = new QNEvent({
        type: 'ble',
        name: eventName,
        detail: payload,
      });
      targetHandlers === null || targetHandlers === void 0
        ? void 0
        : targetHandlers.forEach(function (handler) {
            try {
              handler(e);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error('????????????', error);
            }
          });
      return this;
    };
    /**
     * ????????????????????????
     */

    QNEventManager.prototype.clearListeners = function () {
      this.handlers.clear();
      return this;
    };

    return QNEventManager;
  })();

/**
 * ??????????????????
 */

var QNEventSystem =
  /** @class */
  (function () {
    function QNEventSystem() {
      this.eventManager = new QNEventManager();
    } //

    QNEventSystem.prototype.on = function (eventName, handler) {
      this.eventManager.on(eventName, handler);
      return this;
    };
    /**
     * ??????????????????
     * @param {QNEventName} eventName - ?????????????????????
     * @param {QNBleTypings.QNEventHandler} handler - ????????????????????????????????????boolean???????????????????????????
     * @returns {T}
     */

    QNEventSystem.prototype.off = function (eventName, handler) {
      var handlerIsBoolean = isType(handler) === 'boolean';

      if (handlerIsBoolean && handler) {
        this.eventManager.off(eventName, handler);
      } else if (!handlerIsBoolean) {
        this.eventManager.off(eventName, handler);
      }

      return this;
    };
    /**
     * ??????????????????
     * @private
     * @param {QNBleTypings.QNEventName} eventName - ?????????
     * @param {unknown} [payload] - ????????????
     * @returns {T}
     */

    QNEventSystem.prototype.dispatch = function (eventName, payload) {
      this.eventManager.dispatch(eventName, payload);
      return this;
    };
    /**
     * ????????????????????????
     */

    QNEventSystem.prototype.clearListeners = function () {
      this.eventManager.clearListeners();
      return this;
    };

    return QNEventSystem;
  })();

var QNBleDevice =
  /** @class */
  (function () {
    function QNBleDevice(nativeDevice, protocol) {
      var _this = this;

      var _a; // ????????????

      this.isScreenOn = false; // ????????????wifi

      this.isSupportWifi = false; // ??????????????????

      this.isWspScale = false;
      this.Protocol = protocol;
      this.nativeDevice = nativeDevice;
      var moreData = protocol.bleProfile.buildTargetDevice(nativeDevice);
      Object.assign(this, {
        type: (_a = moreData.type) !== null && _a !== void 0 ? _a : protocol.bleProfile.type,
        transferType: protocol.bleProfile.transferType,
        manufacturer: nativeDevice.manufacturer,
        rssi: nativeDevice.rssi,
        name: nativeDevice.bluetoothName,
        deviceId: nativeDevice.deviceId,
        services: nativeDevice.services,
        mac: nativeDevice.mac,
      });
      [
        'mac',
        'sn',
        'modelId',
        'isScreenOn',
        'isSupportWifi',
        'isWspScale',
        'totalUserCount',
        'registerUserCount',
        'offlineDataCount',
        'firmwareVersion',
        'scaleVersion',
        'wifiVersion',
        'scaleInfoByte',
        'hardVersion',
        'spStandardType',
        'spDeviceType',
      ].forEach(function (prop) {
        var _a;

        if (Object.prototype.hasOwnProperty.call(moreData, prop)) {
          Object.assign(_this, ((_a = {}), (_a[prop] = moreData[prop]), _a));
        }
      });
    }

    return QNBleDevice;
  })();

var QNProtocolManager =
  /** @class */
  (function () {
    function QNProtocolManager() {
      // eslint-disable-next-line max-len
      this.records = new Map();
    }

    QNProtocolManager.prototype.hasProtocol = function (deviceId) {
      return this.records.has(deviceId);
    };

    QNProtocolManager.prototype.getProtocol = function (deviceId) {
      return this.records.get(deviceId) || null;
    };

    QNProtocolManager.prototype.setProtocol = function (protocolImp) {
      return this.records.set(protocolImp.bleDevice.deviceId, protocolImp);
    };

    QNProtocolManager.prototype.removeProtocol = function (deviceId) {
      return this.records['delete'](deviceId);
    };

    QNProtocolManager.prototype.clear = function () {
      return this.records.clear();
    };

    QNProtocolManager.prototype.values = function () {
      return this.records.values();
    };

    QNProtocolManager.prototype.keys = function () {
      return this.records.keys();
    };

    QNProtocolManager.prototype.enries = function () {
      return this.records.entries();
    };

    return QNProtocolManager;
  })();

var version$1 = '1.1.0';

/* eslint-disable max-len */
var http = {
  /**
   * js??????ajax??????
   * >>??????new XMLHttpRequest ??????????????????,?????????????????????IE?????????(IE6??????????????????XMLHttpRequest)
   * >>??????es6??????,?????????????????????????????????,????????????babel?????????es5?????? https://babeljs.cn/docs/setup/#installation
   *  @param settings ??????????????????jQuery ajax
   *  ???????????????,data????????????????????????Content-Type??????
   *  Content-Type                        data                                     ??????
   *  application/x-www-form-urlencoded   'name=??????&age=12'???{name:'??????',age:12}  ???????????????,???&??????
   *  application/json                     name=??????&age=12'                        json?????????
   *  multipart/form-data                  new FormData()                           FormData??????,??????FormData??????,??????????????????Content-Type
   *  ??????:????????????????????????????????????.?????????????????????????????????????????????
   */
  ajax: function ajax(settings) {
    var e_1, _a;

    if (settings === void 0) {
      settings = {};
    } // ?????????????????????

    var _s = __assign(
      {
        url: '',
        type: 'GET',
        responseType: 'json',
        async: true,
        data: null,
        headers: {},
        timeout: 20000,
        beforeSend: function beforeSend(_xhr) {},
        success: function success(_result, _status, _xhr) {},
        error: function error(_xhr, _status, _error) {},
        complete: function complete(_xhr, _status) {},
      },
      settings
    ); // ????????????

    if (!_s.url || !_s.type || !_s.responseType) {
      // eslint-disable-next-line no-alert
      alert('????????????');
      return;
    } // ??????XMLHttpRequest????????????

    var xhr = new XMLHttpRequest(); // ????????????????????????

    xhr.addEventListener('loadstart', function (_e) {
      _s.beforeSend(xhr);
    }); // ????????????????????????

    xhr.addEventListener('load', function (e) {
      var status = xhr.status;

      if ((status >= 200 && status < 300) || status === 304) {
        var result = void 0;

        if (xhr.responseType === 'text') {
          result = xhr.responseText;
        } else if (xhr.responseType === 'document') {
          result = xhr.responseXML;
        } else {
          result = xhr.response;
        } // ??????:?????????200??????????????????/????????????,???????????????????????????

        _s.success(result, status, xhr);
      } else {
        _s.error(xhr, status, e);
      }
    }); // ????????????

    xhr.addEventListener('loadend', function (_e) {
      _s.complete(xhr, xhr.status);
    }); // ????????????

    xhr.addEventListener('error', function (e) {
      _s.error(xhr, xhr.status, e);
    }); // ????????????

    xhr.addEventListener('timeout', function (e) {
      _s.error(xhr, 408, e);
    });
    var useUrlParam = false;

    var sType = _s.type.toUpperCase(); // ?????????"??????"??????,??????data???????????????url???

    if (sType === 'GET' || sType === 'DELETE') {
      useUrlParam = true;
      _s.url += http.getUrlParam(_s.url, _s.data);
    }

    if (sType === 'POST' || sType === 'PUT') {
      _s.headers = __assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        _s.headers
      );
    } // ???????????????

    xhr.open(_s.type, _s.url, _s.async); // ?????????????????????????????????

    xhr.responseType = _s.responseType;

    try {
      // ???????????????
      // eslint-disable-next-line no-restricted-syntax
      for (var _b = __values(Object.keys(_s.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value; // @ts-ignore

        xhr.setRequestHeader(key, _s.headers[key]);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1,
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b['return'])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    } // ??????????????????

    if (_s.async && _s.timeout) {
      xhr.timeout = _s.timeout;
    } // sysConsole({ type: 'log', label: 'http::ajax' }, _s);
    // ????????????.?????????????????????,??????????????????null.??????,????????????????????????????????????Content-Type??????

    xhr.send(useUrlParam ? null : http.getQueryData(_s.data));
  },
  ajaxPromise: function ajaxPromise(settings) {
    if (settings === void 0) {
      settings = {};
    }

    return new Promise(function (resolve, reject) {
      http.ajax(
        __assign(__assign({}, settings), {
          success: function success(res) {
            resolve(res);
          },
          error: function error(_xhr, _status, _error2) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({
              xhr: _xhr,
              status: _status,
              detail: _error2,
            });
          },
        })
      );
    });
  },
  // ?????????data??????url????????????
  getUrlParam: function getUrlParam(url, data) {
    if (!data) {
      return '';
    }

    var paramsStr = data instanceof Object ? http.getQueryString(data) : data;
    return url.indexOf('?') !== -1 ? paramsStr : '?' + paramsStr;
  },
  // ??????ajax????????????
  getQueryData: function getQueryData(data) {
    if (!data) {
      return null;
    }

    if (typeof data === 'string') {
      return data;
    }

    if (data instanceof FormData) {
      return data;
    }

    return http.getQueryString(data);
  },
  // ??????????????????????????????
  getQueryString: function getQueryString(data) {
    var paramsArr = [];

    if (data instanceof Object) {
      Object.keys(data).forEach(function (key) {
        // @ts-ignore
        var val = data[key]; // todo ??????Date????????????????????????api????????????

        paramsArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
      });
    }

    return paramsArr.join('&');
  },
};

function createError(err, type) {
  if (type === void 0) {
    type = QNBleErrorType.UNKNOW_ERROR;
  }

  if (err instanceof QNBleError) {
    return err;
  }

  return new QNBleError(type, err);
}
/**
 * ????????????????????????
 */

var log = function log(errorType) {
  return function logW(target, name, descriptor) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    var oldValue = descriptor.value; // eslint-disable-next-line no-param-reassign

    descriptor.value = function f() {
      var _this = this;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      } // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment

      var logHandler = this.log || function () {}; // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment

      var errorHandler = this._onError || function () {};

      try {
        logHandler.call.apply(logHandler, __spread([this, 'Calling [' + name + '] with'], args)); // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

        var callbackRes = oldValue.apply(this, args);

        if (isType(callbackRes) === 'promise') {
          return callbackRes['catch'](function (err) {
            var error = createError(err, errorType);
            logHandler.call(_this, 'Error occurred in [' + name + ']', err);
            errorHandler.call(_this, error);
            throw error;
          });
        }

        return callbackRes;
      } catch (err) {
        var error = createError(err, errorType);
        logHandler.call(this, 'Error occurred in [' + name + ']', err);
        errorHandler.call(this, error);
        throw error;
      }
    };

    return descriptor;
  };
};

var QNBle =
  /** @class */
  (function (_super) {
    __extends(QNBle, _super);

    function QNBle(params) {
      if (params === void 0) {
        params = {};
      }

      var _this = _super.call(this) || this;

      _this.version = version$1; // ????????????????????????true??????????????????false???????????????

      _this.bleScannerState = false; // ??????????????????

      _this.bleEnableState = false; // ????????????????????????????????????QNBleDevice??????

      _this.protocolManager = new QNProtocolManager();
      _this.bleServer = null; // ??????????????????????????????

      _this.bleNative = null;
      _this.config = QNBle.getStaticConfig(); // ??????????????????

      _this.operation = QNBle.getStaticOperation();
      var bleNative = params.bleNative,
        config = params.config,
        operation = params.operation;

      _this.setBleNative(bleNative);

      _this.setConfig(config);

      _this.setOperation(operation); // ?????????QNBleNative?????????????????????

      _this.bleNativeListener = {
        onNativeBluetoothEnableChange: function onNativeBluetoothEnableChange(available) {
          _this.onBleEnableChange(available);
        },
        onNativeStartDiscoveryDevice: function onNativeStartDiscoveryDevice() {
          _this.onStartScan();
        },
        onNativeStopDiscoveryDevice: function onNativeStopDiscoveryDevice() {
          _this.onStopScan();
        },
        onNativeBleDeviceFound: function onNativeBleDeviceFound(nativeDevice) {
          _this.onDeviceFound(nativeDevice);
        },
        onNativeConnected: function onNativeConnected(deviceId) {
          _this.log('[QNBle]: ??????native?????? onNativeConnected', deviceId); // eslint-disable-next-line @typescript-eslint/no-floating-promises

          _this.onConnected(deviceId);
        },
        onNativeDisconnected: function onNativeDisconnected(deviceId) {
          if (_this.protocolManager.hasProtocol(deviceId)) {
            var bleDevice = _this.protocolManager.getProtocol(deviceId).bleDevice;

            _this.onDisconnected(bleDevice);
          } else {
            _this.onDisconnected(null);
          }
        },
        onNativeConnectOverTime: function onNativeConnectOverTime(deviceId) {
          var _a, _b;

          _this.log('[QNBle:onNativeConnectOverTime]'); // this.dispatch('connect_overtime', deviceId);
          // ???????????????????????????????????????

          _this.unmountProtocol(deviceId);

          (_b = (_a = _this.bleEventListener).onConnectOverTime) === null || _b === void 0
            ? void 0
            : _b.call(_a, {
                deviceId: deviceId,
              });
        },
        onNativeCharacteristicValueChange: function onNativeCharacteristicValueChange(payload) {
          _this.onCharacteristicValueChange(payload);
        },
        onError: function onError(err) {
          var error = createError(err, QNBleErrorType.BLE_NATIVE_ERROR);

          _this._onError(error);
        },
      };
      return _this;
    }

    QNBle.getStaticConfig = function () {
      // ???????????????
      // algorithmUrl: 'https://third-api.yolanda.hk/open_api/calcs/measure',
      // ???????????????
      //  algorithmUrl: 'http://sit.third-api.yolanda.hk/open_api/calcs/measure',
      return {
        appId: '',
        // ????????????????????????
        appType: 'xcx_third',
        algorithmUrl: 'https://third-api.yolanda.hk/open_api/calcs/measure',
        // algorithmUrl: 'http://sit.third-api.yolanda.hk/open_api/calcs/measure',
        // ????????????????????????????????????????????????????????????????????????????????????????????????
        autoStopDiscovery: true,
        // ??????????????????
        connectOverTime: 15e3,
        useSdk: false,
        sdkUrl: 'https://third-api.yolanda.hk/open_api/third/get_business_models',
        useHerbalife: false,
        logger: console,
        // ??????
        protocols: QNBle.getProtocols(),
        // ????????????on???????????????????????????????????????
        multipleListenersEnable: false,
      };
    };

    QNBle.getStaticOperation = function () {
      return {
        // ????????????????????????wifi?????????
        action: QNBleAction.MEASURE_WEIGHT,
        // ????????????
        user: null,
        // ??????
        unit: QNBleUnit.KG,
        // ????????????
        config: {},
        // wifi??????
        wifiSsid: '',
        // wifi??????
        wifiPwd: '',
        // ??????????????????
        dataServerUrl: undefined,
        // OTA????????????
        otaServerUrl: undefined,
        // ????????????
        encryptKey: undefined,
      };
    };
    /**
     * ??????????????????????????????
     * @public
     */

    QNBle.getProtocols = function () {
      return Object.values(QNBleProtocols);
    };

    QNBle.prototype.log = function () {
      var _a;

      var params = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
      }

      var timeString = logTimeString();

      if (this.config.logger) {
        (_a = this.config.logger).log.apply(_a, __spread([timeString], params));
      } else {
        // eslint-disable-next-line no-console
        console.log.apply(console, __spread([timeString], params));
      }
    };
    /**
     *
     */

    QNBle.prototype.setBleEventListener = function (listener) {
      this.bleEventListener = listener;

      if (this.bleNative) {
        this.bleNative.setListener(this.bleNativeListener);
      } // this.bleEventListener = {} as QNBleTypings.QNBleEventListener;
      // /**
      //  * @deprecated
      //  */
      // // eslint-disable-next-line no-restricted-syntax, guard-for-in
      // for (const method in listener) {
      //   // eslint-disable-next-line max-len
      //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      //   (this.bleEventListener as any)[method] = new Proxy(
      //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //     (listener as any)[method],
      //     new QNEventHandler(method, this.eventManager),
      //   );
      // }
    }; // setBleEventListener(listener: Partial<QNBleTypings.QNBleEventListener>) {
    //   // this.bleEventListener = {} as QNBleTypings.QNBleEventListener;
    //   // for (let method in listener) {
    //   //   (this.bleEventListener as any)[method] = new Proxy(
    //   //     (listener as any)[method],
    //   //     new QNEventHandler(method, this.eventManager)
    //   //   );
    //   // }
    //   this.bleEventListener = listener as any;
    // }

    /**
     * ???????????????
     * @param {QNBleNative} bleNative ???????????????????????????
     * @param {QNBleConfig} [config={}] ????????????
     * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
     */

    QNBle.prototype.init = function (bleNative, config) {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.setBleNative(bleNative);
              this.setConfig(config);
              this.log('?????????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.init(),
              ];

            case 1:
              res = _a.sent();
              this.bleEnableState = res.available;
              this.initReturnValue = res;
              if (!this.config.useSdk) return [3 /*break*/, 3]; // ??????SDK?????????????????????SDK???????????????

              return [
                4,
                /*yield*/
                this.fetchSdkConfig(),
              ];

            case 2:
              // ??????SDK?????????????????????SDK???????????????
              _a.sent();

              _a.label = 3;

            case 3:
              this._onReady(res);

              return [
                2,
                /*return*/
                this.initReturnValue,
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????????????????????????????????????????????????????????????????init
     */

    QNBle.prototype.releaseBleSource = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.bleNative.release && this.bleNative.release();
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    QNBle.prototype._onError = function (error) {
      // this.dispatch('error', error);
      this.onError(error);
    };
    /**
     * ?????????????????????????????????
     * @param {QNBleError | Error} err
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBle.prototype.onError = function (err) {
      // const error = err instanceof QNBleError
      //   ? err
      //   : new QNBleError(QNBleErrorType.UNKNOW_ERROR, err);
      // this.dispatch('error', error);
    };
    /**
     * ?????????????????????????????????
     */

    QNBle.prototype._onReady = function (payload) {
      // this.dispatch('ready', payload);
      this.onReady(payload);
    };
    /**
     * ???????????????????????????ready??????
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBle.prototype.onReady = function (payload) {};
    /**
     * ????????????????????????
     * @returns {Promise<boolean>}
     */

    QNBle.prototype.checkBleStatus = function () {
      // this.log('checkBleStatus', this.bleEnableState);
      if (!this.bleEnableState) {
        return Promise.reject(new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED));
      }

      this.log('checkBleStatus??????');
      return Promise.resolve(true);
    };
    /**
     * ??????config
     * @param {QNBleConfig} config
     * @returns {void}
     */

    QNBle.prototype.setConfig = function (config) {
      if (config) {
        Object.assign(this.config, config);
      }

      if (this.bleNative) {
        this.bleNative.setConfig(this.config);
      }
    };
    /**
     * ???????????????????????????
     * @param {QNBleNative} native ?????????????????????
     * @returns {void}
     */

    QNBle.prototype.setBleNative = function (_native) {
      this.bleNative = _native || this.bleNative;

      if (this.bleNative) {
        this.bleNative.setListener(this.bleNativeListener);
      }
    };
    /**
     * ???????????????
     * @param {QNBleOperation} operation
     * @returns {void}
     */

    QNBle.prototype.setOperation = function (operation) {
      if (operation) {
        Object.assign(this.operation, operation);
      }

      this.operation.config = __assign(__assign({}, this.config), this.operation.config || {});

      if (this.bleNative) {
        this.bleNative.setOperation(this.operation);
      }
    };
    /**
     * ???????????????????????????
     */

    QNBle.prototype.getBluetoothAdapterState = function () {
      var _a;

      return (_a = this.bleNative) === null || _a === void 0
        ? void 0
        : _a.getBluetoothAdapterState();
    };
    /**
     * ???????????????????????????????????????????????????????????????????????????????????????????????????
     * @returns {Promise<void>}
     */

    QNBle.prototype.startBleDeviceDiscovery = function (params) {
      if (params === void 0) {
        params = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleStatus(),
              ];

            case 1:
              _a.sent();

              if (!this.bleScannerState) return [3 /*break*/, 4]; // ????????????????????????????????????????????????????????????????????????

              this.log('????????????????????????????????????????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.bleNative.stopScan(),
              ];

            case 2:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [
                4,
                /*yield*/
                this.bleNative.startScan(params),
              ];

            case 5:
              _a.sent();

              this.bleScannerState = true;
              this.onStartScan();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ????????????
     * @param {boolean} [force = false] - ??????????????????
     */

    QNBle.prototype.stopBleDeviceDiscovery = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.bleScannerState) return [3 /*break*/, 2];
              return [
                4,
                /*yield*/
                this.bleNative.stopScan(),
              ];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              this.bleScannerState = false;
              this.onStopScan();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {Partial<QNBleTypings.QNBleOperation>} [operation] - ????????????
     * @returns {Promise<any>}
     */

    QNBle.prototype.createBleConnection = function (bleDevice, listener, operation) {
      return __awaiter(this, void 0, void 0, function () {
        var p, error_1, error_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleStatus(),
              ];

            case 1:
              _a.sent();

              if (!(this.config.useSdk && !this.config.sdkConfig)) return [3 /*break*/, 3];
              return [
                4,
                /*yield*/
                this.fetchSdkConfig(),
              ];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              // ??????????????????????????????operation
              // this.createConnectionOperationMap.set(bleDevice.deviceId, operation);
              // ???????????????????????????
              if (this.protocolManager.hasProtocol(bleDevice.deviceId)) {
                this.log(
                  '\u5DF2\u8FDE\u63A5(' +
                    bleDevice.deviceId +
                    ':' +
                    bleDevice.name +
                    ')\u8BBE\u5907\uFF0C\u4E0D\u518D\u8FDE\u63A5'
                ); // throw new QNBleError(QNBleErrorType.ALREADY_CONNECTED);
                // @ts-ignore

                return [
                  2,
                  /*return*/
                  Promise.resolve(this.protocolManager.getProtocol(bleDevice.deviceId)),
                ];
              }

              p = this.prepareProtocol(bleDevice, operation, listener);

              if (!bleDevice.transferType) {
                throw new Error('????????????transferType');
              }

              if (!(bleDevice.transferType === QNBleTransferType.BLE)) return [3 /*break*/, 9];
              if (!(this.config.autoStopDiscovery && this.bleScannerState)) return [3 /*break*/, 6];
              this.log('???????????????????????????????????????');
              return [
                4,
                /*yield*/
                this.stopBleDeviceDiscovery(),
              ];

            case 4:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _a.sent();

              _a.label = 6;

            case 6:
              _a.trys.push([6, 8, , 9]);

              return [
                4,
                /*yield*/
                this.bleNative.createBleConnection(bleDevice, this.config.connectOverTime),
              ];

            case 7:
              _a.sent();

              this.log('[QNBle]:??????native??????createBleConnection????????????');
              return [3 /*break*/, 9];

            case 8:
              error_1 = _a.sent(); // ????????????

              this.unmountProtocol(bleDevice.deviceId);
              throw error_1;

            case 9:
              if (!(bleDevice.transferType === QNBleTransferType.BROADCAST))
                return [3 /*break*/, 16];
              _a.label = 10;

            case 10:
              _a.trys.push([10, 13, , 14]);

              if (!!this.bleScannerState) return [3 /*break*/, 12];
              return [
                4,
                /*yield*/
                this.startBleDeviceDiscovery(),
              ];

            case 11:
              _a.sent();

              _a.label = 12;

            case 12:
              return [3 /*break*/, 14];

            case 13:
              error_2 = _a.sent(); // ????????????

              this.unmountProtocol(bleDevice.deviceId);
              throw error_2;

            case 14:
              // ?????????????????????????????????
              return [
                4,
                /*yield*/
                this.onConnected(bleDevice.deviceId),
              ];

            case 15:
              // ?????????????????????????????????
              _a.sent();

              _a.label = 16;

            case 16:
              // @ts-ignore
              return [
                2,
                /*return*/
                p,
              ];
          }
        });
      });
    };

    QNBle.prototype.prepareProtocol = function (bleDevice, operation, listener) {
      this.log('[QNBle] prepareProtocol', bleDevice, operation); // ????????????????????????

      var protocolImp = new bleDevice.Protocol({
        bleNative: this.bleNative,
        config: this.config,
        operation: __assign(__assign({}, this.operation), operation),
        bleDevice: bleDevice,
        listener: listener,
        eventManager: this.eventManager,
      });
      this.protocolManager.setProtocol(protocolImp);
      this.log('[QNBle] protocolManager', this.protocolManager);
      return protocolImp;
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @returns {Promise<any>}
     */

    QNBle.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var protocolImp;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.protocolManager.hasProtocol(bleDevice.deviceId)) {
                return [
                  2,
                  /*return*/
                  bleDevice,
                ];
              }

              if (!(bleDevice.transferType === QNBleTransferType.BLE)) return [3 /*break*/, 2]; // ?????????????????????????????????????????????????????? onDisconnectd ??????
              // this.unmountProtocol(bleDevice.deviceId);

              return [
                4,
                /*yield*/
                this.bleNative.closeBleConnection(bleDevice),
              ];

            case 1:
              // ?????????????????????????????????????????????????????? onDisconnectd ??????
              // this.unmountProtocol(bleDevice.deviceId);
              _a.sent();

              return [3 /*break*/, 4];

            case 2:
              if (!(bleDevice.transferType === QNBleTransferType.BROADCAST))
                return [3 /*break*/, 4];
              protocolImp = this.protocolManager.getProtocol(bleDevice.deviceId);
              return [
                4,
                /*yield*/
                protocolImp.close(),
              ];

            case 3:
              _a.sent(); // ??????????????????????????????

              this.onDisconnected(bleDevice);
              _a.label = 4;

            case 4:
              return [
                2,
                /*return*/
                bleDevice,
              ];
          }
        });
      });
    };
    /**
     * ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * @returns {Promise<any>}
     */

    QNBle.prototype.stop = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, _b, protocolImp, e_1_1;

        var e_1, _c;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              this.log('???stop???????????????');
              return [
                4,
                /*yield*/
                this.stopBleDeviceDiscovery(),
              ];

            case 1:
              _d.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(100),
              ];

            case 2:
              _d.sent();

              _d.label = 3;

            case 3:
              _d.trys.push([3, 9, 10, 11]);

              (_a = __values(this.protocolManager.values())), (_b = _a.next());
              _d.label = 4;

            case 4:
              if (!!_b.done) return [3 /*break*/, 8];
              protocolImp = _b.value;
              this.log(
                '\u5728stop\u4E2D\u65AD\u5F00(' +
                  protocolImp.bleDevice.deviceId +
                  '-' +
                  protocolImp.bleDevice.name +
                  ')\u8FDE\u63A5'
              ); // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                this.closeBleConnection(protocolImp.bleDevice),
              ];

            case 5:
              // eslint-disable-next-line no-await-in-loop
              _d.sent(); // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                timeoutPromise(100),
              ];

            case 6:
              // eslint-disable-next-line no-await-in-loop
              _d.sent();

              _d.label = 7;

            case 7:
              _b = _a.next();
              return [3 /*break*/, 4];

            case 8:
              return [3 /*break*/, 11];

            case 9:
              e_1_1 = _d.sent();
              e_1 = {
                error: e_1_1,
              };
              return [3 /*break*/, 11];

            case 10:
              try {
                if (_b && !_b.done && (_c = _a['return'])) _c.call(_a);
              } finally {
                if (e_1) throw e_1.error;
              }

              return [
                7,
                /*endfinally*/
              ];

            case 11:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBle.prototype.onBleEnableChange = function (available) {
      var _a, _b;

      this.log('[QNBle]: ???????????????????????????', available); // this.createConnectionOperationMap.clear();

      this.bleEnableState = available; // this.dispatch('bluetooth_enable_change', available);

      (_b = (_a = this.bleEventListener).onBluetoothEnableChange) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            available: available,
          });
    };

    QNBle.prototype.onStartScan = function () {
      var _a, _b;

      this.log('?????????????????????'); // this.dispatch('start_discovery_device');

      (_b = (_a = this.bleEventListener).onStartDiscoveryDevice) === null || _b === void 0
        ? void 0
        : _b.call(_a);
    };

    QNBle.prototype.onStopScan = function () {
      var _a, _b;

      this.log('?????????????????????'); // this.dispatch('stop_discovery_device');

      (_b = (_a = this.bleEventListener).onStopDiscoveryDevice) === null || _b === void 0
        ? void 0
        : _b.call(_a);
    };
    /**
     * ???????????????
     */

    QNBle.prototype.onDeviceFound = function (nativeDevice) {
      // if (nativeDevice.mac != '98:F4:AB:97:1F:AE' && nativeDevice.mac != 'C4:5B:BE:B8:C4:1E' ) return
      var _a, _b;

      this.log('QNBle:onDeviceFound', 'nativeDevice', nativeDevice);

      if (!this.bleEnableState) {
        this.log('????????????????????????????????????????????????????????????');
        return;
      }

      if (this.protocolManager.hasProtocol(nativeDevice.deviceId)) {
        var bleDevice = this.protocolManager.getProtocol(nativeDevice.deviceId).bleDevice; // ????????????????????????

        if (bleDevice.transferType === QNBleTransferType.BROADCAST) {
          // ??????????????????????????????
          this.onCharacteristicValueChange({
            deviceId: nativeDevice.deviceId,
            serviceId: '',
            characteristicId: '',
            data: nativeDevice.manufacturer,
          }); // ????????????????????????

          return;
        }
      }

      var ProtocolToUse = this.getWhatProtocolToApply(nativeDevice);

      if (ProtocolToUse) {
        var targetDevice_1 = new QNBleDevice(nativeDevice, ProtocolToUse); // ?????????????????????????????????

        if (this.config.useSdk && this.config.sdkConfig) {
          // ????????????SDK????????????????????????SDK???????????????
          var sdkConfig_1 = this.config.sdkConfig;

          if (sdkConfig_1.business_models && sdkConfig_1.business_models.length > 0) {
            var modelId_1 = targetDevice_1.modelId;
            sdkConfig_1.business_models.some(function (model) {
              if (model.internal_model === modelId_1) {
                targetDevice_1.displayName =
                  model.dis_model || sdkConfig_1.business_info.default_model;
              }
            });
          }
        }

        this.log('QNBle:onDeviceFound', '??????????????? QNBleDevice', targetDevice_1);
        (_b = (_a = this.bleEventListener).onBleDeviceFound) === null || _b === void 0
          ? void 0
          : _b.call(_a, targetDevice_1);
      }
    };
    /**
     * ???????????????????????????
     * @param {QNBleDevice} bleDevice
     */

    QNBle.prototype.onConnected = function (deviceId) {
      var _a, _b, _c;

      return __awaiter(this, void 0, void 0, function () {
        var protocolImp, err_1;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              // ????????????????????????
              this.log('??????????????????', deviceId);
              protocolImp = this.protocolManager.getProtocol(deviceId);
              return [
                4,
                /*yield*/
                (_a = this.protocolInterceptor) === null || _a === void 0
                  ? void 0
                  : _a.call(this, {
                      bleNative: this.bleNative,
                      ctx: this,
                      protocolImp: protocolImp,
                    }),
              ];

            case 1:
              // ??????????????????
              protocolImp = _d.sent() || protocolImp;
              _d.label = 2;

            case 2:
              _d.trys.push([2, 5, , 6]);

              if (!protocolImp) return [3 /*break*/, 4];
              this.protocolManager.setProtocol(protocolImp);
              (_c = (_b = this.bleEventListener).onConnected) === null || _c === void 0
                ? void 0
                : _c.call(_b, {
                    deviceId: deviceId,
                  });
              return [
                4,
                /*yield*/
                protocolImp.prepare(),
              ];

            case 3:
              _d.sent();

              _d.label = 4;

            case 4:
              return [3 /*break*/, 6];

            case 5:
              err_1 = _d.sent();

              this._onError(new QNBleError(QNBleErrorType.UNKNOW_ERROR, err_1));

              return [3 /*break*/, 6];

            case 6:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????
     * @param {QNBleDevice} bleDevice
     */

    QNBle.prototype.onDisconnected = function (bleDevice) {
      var _a, _b, _c, _d;

      this.log('???????????????', bleDevice);

      if (bleDevice) {
        // this.dispatch('disconnected', bleDevice);
        // ????????????
        this.unmountProtocol(bleDevice.deviceId);
        (_b = (_a = this.bleEventListener).onDisconnected) === null || _b === void 0
          ? void 0
          : _b.call(_a, {
              deviceId: bleDevice.deviceId,
            });
      } else {
        (_d = (_c = this.bleEventListener).onDisconnected) === null || _d === void 0
          ? void 0
          : _d.call(_c, {
              deviceId: '',
            });
      }
    };
    /**
     * ?????????????????????????????????
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    QNBle.prototype.onCharacteristicValueChange = function (payload) {
      if (this.protocolManager.hasProtocol(payload.deviceId)) {
        var protocolImp = this.protocolManager.getProtocol(payload.deviceId);
        protocolImp.onGetData(payload)['catch'](function (err) {
          throw err;
        });
      } else {
        this.log('?????????????????????????????????', payload.deviceId);
      }
    };
    /**
     * ???????????????????????????
     * @param {QNBleNativeDevice} nativeDevice
     * @returns {typeof QNBleBaseScaleProtocol}
     */

    QNBle.prototype.getWhatProtocolToApply = function (nativeDevice) {
      return this.config.protocols.find(function (protocol) {
        return protocol.bleProfile.isTargetDevice(nativeDevice);
      });
    };

    QNBle.prototype.sendHttpRequest = function (request) {
      var _this = this;

      this.log('[QNBle::sendHttpRequest]');
      return http
        .ajaxPromise({
          url: request.url,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: request.data,
          type: request.method || 'GET',
          responseType: request.dataType || 'json',
        })
        .then(function (res) {
          _this.log('??????????????????', request, res, _typeof(res)); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return typeof res === 'string' ? JSON.parse(res) : res;
        })
        ['catch'](function (err) {
          _this.log('????????????', err);

          throw err;
        });
    };
    /**
     * ?????????????????????
     */

    QNBle.prototype.fetchSdkConfig = function () {
      return __awaiter(this, void 0, void 0, function () {
        var appId, params, request, httpRequestHandler, res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              appId = this.config.appId;
              params = {
                app_id: appId,
              };
              request = {
                data: params,
                method: 'GET',
                url: this.config.sdkUrl,
              };
              this.log('??????SDK??????', request);
              httpRequestHandler = this.bleNative.useDefaultHttpRequest
                ? this.sendHttpRequest.bind(this)
                : this.bleNative.sendHttpRequest.bind(this.bleNative);
              return [
                4,
                /*yield*/
                httpRequestHandler(request),
              ];

            case 1:
              res = _a.sent();

              if ('' + res.code !== '20000') {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw res;
              }

              this.config.sdkConfig = res.data;
              this.log('SDK?????????', res.data);
              this.setConfig();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????????????????????????????
     * @param {string} deviceId
     * @param {string} fn ????????????????????????
     * @param {any[]} args ????????????????????????????????????????????????????????????????????????????????????????????????
     * @returns ????????????????????????
     */

    QNBle.prototype.callProtocolMethod = function (deviceId, fn, args) {
      var _a;

      if (args === void 0) {
        args = [];
      } // eslint-disable-next-line max-len

      var protocolImp = this.protocolManager.getProtocol(deviceId); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

      return (_a = protocolImp === null || protocolImp === void 0 ? void 0 : protocolImp[fn]) ===
        null || _a === void 0
        ? void 0
        : _a.call.apply(_a, __spread([protocolImp], args));
    };
    /**
     * ????????????????????????????????????????????????
     * @param {string} deviceId
     * @param {string} fn ????????????????????????
     * @param {any[]} args ????????????????????????????????????????????????????????????????????????????????????????????????
     * @returns {Promise<any>}
     */

    QNBle.prototype.callProtocolMethodAsync = function (deviceId, fn, args) {
      return __awaiter(this, void 0, void 0, function () {
        var protocolImp, result, error_3;

        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              protocolImp = this.protocolManager.getProtocol(deviceId);
              if (!(protocolImp && fn in protocolImp)) return [3 /*break*/, 4];
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                (_a = protocolImp[fn]).call.apply(_a, __spread([protocolImp], args)),
              ];

            case 2:
              result = _b.sent();
              return [
                2,
                /*return*/
                result,
              ];

            case 3:
              error_3 = _b.sent();
              return [
                2,
                /*return*/
                Promise.reject(error_3),
              ];

            case 4:
              return [
                2,
                /*return*/
                Promise.reject(
                  new Error('protocol method ' + fn + ' on deviceId: ' + deviceId + ' not exist')
                ),
              ];
          }
        });
      });
    };
    /**
     * ????????????
     * @param {string} deviceId
     */

    QNBle.prototype.unmountProtocol = function (deviceId) {
      this.log('[QNBle:unmountProtocol]', deviceId);
      return this.protocolManager.removeProtocol(deviceId);
    };

    var _a;

    __decorate(
      [
        log(QNBleErrorType.INIT_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [QNBleNative, Object]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'init',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.START_BLEDEVICE_DISCOVERY_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'startBleDeviceDiscovery',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.STOP_BLEDEVICE_DISCOVERY_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'stopBleDeviceDiscovery',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.CREATE_CONNECTION_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [
          QNBleDevice,
          typeof (_a = typeof T !== 'undefined' && T) === 'function' ? _a : Object,
          Object,
        ]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'createBleConnection',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.CLOSE_CONNECTION_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [QNBleDevice]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'closeBleConnection',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.STOP_BLE_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'stop',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.FETCH_SDK_INFO_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'fetchSdkConfig',
      null
    );

    return QNBle;
  })(QNEventSystem);

var QNBleNativeDevice =
  /** @class */
  (function () {
    function QNBleNativeDevice(payload) {
      this.deviceId = payload.deviceId;
      this.bluetoothName = payload.bluetoothName;
      this.mac = payload.mac || payload.deviceId;
      this.manufacturer = payload.manufacturer;
      this.services = payload.services;
      this.rssi = payload.rssi;
      this.device = payload.device;
    }

    return QNBleNativeDevice;
  })();

var QNBleNativeMP =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeMP, _super);

    function QNBleNativeMP(mpwx) {
      var _this = _super.call(this) || this;

      _this.name = 'QNBleNativeMP'; // ?????????????????????http????????????
      // ?????????????????????????????????????????????????????????api????????????????????????????????????false???????????? sendHttpRequest ??????

      _this.useDefaultHttpRequest = false; // ????????????

      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.mpwx = null; //??????????????????wx?????????????????????bleServer

      _this.inited = false;
      _this.mpwx = mpwx;
      return _this;
    }
    /**
     * ?????????
     * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
     */

    QNBleNativeMP.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, ret, e_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 3, , 4]);

              wx.onBluetoothDeviceFound(this.onDeviceFound.bind(this));
              wx.onBLEConnectionStateChange(this.onDeviceConnectStateChange.bind(this));
              wx.onBLECharacteristicValueChange(this.onDeviceValueChange.bind(this));
              wx.onBluetoothAdapterStateChange(this.onBluetoothAdapterStateChange.bind(this)); // ??????????????????????????????????????????????????????????????????????????????????????????
              // this.log('???[QNBleNativeMP::init]?????????????????????????????????');
              // await this.closeBluetoothAdapter();

              return [
                4,
                /*yield*/
                this.openBluetoothAdapter(),
              ];

            case 1:
              // ??????????????????????????????????????????????????????????????????????????????????????????
              // this.log('???[QNBleNativeMP::init]?????????????????????????????????');
              // await this.closeBluetoothAdapter();
              _b.sent(); // await this.checkBleAvailable();

              _a = this;
              return [
                4,
                /*yield*/
                this.getBluetoothAdapterState(),
              ];

            case 2:
              // await this.checkBleAvailable();
              _a.bleState = _b.sent();
              ret = __assign(
                {
                  bleEnableState: this.bleState.available,
                },
                this.bleState
              );
              this.inited = true;
              return [
                2,
                /*return*/
                ret,
              ];

            case 3:
              e_1 = _b.sent();
              this.inited = true;
              console.log('????????????', e_1);
              return [3 /*break*/, 4];

            case 4:
              return [
                2,
                /*return*/
                {
                  bleEnableState: false,
                  available: false,
                  discovering: false,
                },
              ];
          }
        });
      });
    };

    QNBleNativeMP.prototype.release = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          wx.offBluetoothDeviceFound(this.onDeviceFound.bind(this));
          wx.offBLEConnectionStateChange(this.onDeviceConnectStateChange.bind(this));
          wx.offBLECharacteristicValueChange(this.onDeviceValueChange.bind(this));
          wx.offBluetoothAdapterStateChange(this.onBluetoothAdapterStateChange.bind(this));
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    QNBleNativeMP.prototype.getBluetoothAdapterState = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, error_1, err;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);

              this.log('???????????????????????????');
              return [
                4,
                /*yield*/
                wxPromise(wx.getBluetoothAdapterState)(),
              ];

            case 1:
              res = _a.sent();
              return [
                2,
                /*return*/
                res,
              ];

            case 2:
              error_1 = _a.sent();
              err = new QNBleError(QNBleErrorType.GET_BLE_STATE_FAILED, error_1);
              throw err;

            case 3:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMP.prototype.openBluetoothAdapter = function () {
      return __awaiter(this, void 0, void 0, function () {
        var error_2, err;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);

              this.log('?????????????????????');
              return [
                4,
                /*yield*/
                wxPromise(wx.openBluetoothAdapter)({
                  mode: 'central',
                }),
              ];

            case 1:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return [
                2,
                /*return*/
                _a.sent(),
              ];

            case 2:
              error_2 = _a.sent();
              err = new QNBleError(QNBleErrorType.OPEN_BLE_ADAPTER_FAILED, error_2);
              throw err;

            case 3:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMP.prototype.closeBluetoothAdapter = function () {
      return __awaiter(this, void 0, void 0, function () {
        var error_3, err;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);

              this.log('?????????????????????');
              return [
                4,
                /*yield*/
                wxPromise(wx.closeBluetoothAdapter)(),
              ];

            case 1:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return [
                2,
                /*return*/
                _a.sent(),
              ];

            case 2:
              error_3 = _a.sent();
              err = new QNBleError(QNBleErrorType.CLOSE_BLE_ADAPTER_FAILED, error_3);
              throw err;

            case 3:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????????????????
     */

    QNBleNativeMP.prototype.checkBleAvailable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, err;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this;
              return [
                4,
                /*yield*/
                this.getBluetoothAdapterState(),
              ];

            case 1:
              _a.bleState = _b.sent();

              if (!this.bleState.available) {
                err = new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED); // this.dispatch('error', err);

                return [
                  2,
                  /*return*/
                  Promise.reject(err),
                ];
              }

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };
    /**
     * ????????????
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.startScan = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          if (this.bleState.discovering) {
            this.log('??????????????????');
            return [
              2,
              /*return*/
              Promise.resolve(this.bleState),
            ];
          }

          return [
            2,
            /*return*/
            wxPromise(wx.startBluetoothDevicesDiscovery)({
              allowDuplicatesKey: true,
            }),
          ];
        });
      });
    };
    /**
     * ????????????
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.stopScan = function () {
      this.log('??????????????????');
      return wxPromise(wx.stopBluetoothDevicesDiscovery)();
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {number} connectOverTime - ?????????????????????
     */

    QNBleNativeMP.prototype.createBleConnection = function (bleDevice, connectOverTime) {
      if (connectOverTime === void 0) {
        connectOverTime = 15e3;
      }

      return __awaiter(this, void 0, void 0, function () {
        var deviceId, err_1, error;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              // await this.checkBleAvailable();
              this.log('???????????????????????????', bleDevice);
              deviceId = bleDevice.deviceId;
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, , 4]); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

              return [
                4,
                /*yield*/
                wxPromise(wx.createBLEConnection)({
                  deviceId: deviceId,
                  timeout: connectOverTime,
                }),
              ];

            case 2:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              _a.sent();

              return [3 /*break*/, 4];

            case 3:
              err_1 = _a.sent();
              error = err_1; // 0????????????-1????????????

              if (hasOwnProperty(error, 'code') && [0, -1].includes(error.code));
              else if (error.code === 10012) {
                // ????????????
                this.onConnectOverTime(deviceId);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw error;
              }

              return [3 /*break*/, 4];

            case 4:
              return [
                2,
                /*return*/
                bleDevice,
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {Promise<void>}
     */

    QNBleNativeMP.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          try {
            return [
              2,
              /*return*/
              wxPromise(wx.closeBLEConnection)({
                deviceId: bleDevice.deviceId,
              }),
            ];
          } catch (err) {
            error = err; // 0????????????10006????????????

            if (hasOwnProperty(error, 'code') && [0, 10006].includes(error.code));
            else {
              // eslint-disable-next-line @typescript-eslint/no-throw-literal
              throw error;
            }
          }

          return [
            2,
            /*return*/
            bleDevice,
          ];
        });
      });
    };
    /**
     * ??????????????????????????????
     * @param {string} deviceId
     * @returns {Promise<any[]>}
     */

    QNBleNativeMP.prototype.findService = function (deviceId) {
      return __awaiter(this, void 0, void 0, function () {
        var services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('findService', deviceId);
              return [
                4,
                /*yield*/
                wxPromise(wx.getBLEDeviceServices)({
                  deviceId: deviceId,
                }),
              ];

            case 1:
              services = _a.sent().services;
              console.log('findService:result', services); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

              return [
                2,
                /*return*/
                services.map(function (service) {
                  Object.assign(service, {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    uuid: service.uuid.toUpperCase(),
                  }); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

                  return service.uuid;
                }),
              ];
          }
        });
      });
    };
    /**
     * ?????????????????????????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.findBleDeviceCharacteristics = function (deviceId, serviceId) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log('[findBleDeviceCharacteristics]', 'deviceId', deviceId, 'serviceId', serviceId); // await this.checkBleAvailable();

          return [
            2,
            /*return*/
            wxPromise(wx.getBLEDeviceCharacteristics)({
              deviceId: deviceId,
              serviceId: serviceId,
            }),
          ];
        });
      });
    };
    /**
     * ???????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.enableNotify = function (deviceId, serviceId, characteristicId) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          this.log('???????????????', deviceId, serviceId, characteristicId);
          return [
            2,
            /*return*/
            wxPromise(wx.notifyBLECharacteristicValueChange)({
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
              state: true,
            }),
          ];
        });
      });
    };
    /**
     * ???????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.readBleCharacteristicValue = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          this.log('???????????????', deviceId, serviceId, characteristicId);
          return [
            2,
            /*return*/
            wxPromise(wx.readBLECharacteristicValue)({
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
            }),
          ];
        });
      });
    };
    /**
     * ?????????????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleNativeMP.prototype.writeData = function (deviceId, serviceId, characteristicId, cmdData) {
      // this.log('??????', characteristicId.substr(4, 4), ':', formatArrayToHex(cmdData));
      var ab = new ArrayBuffer(cmdData.length);
      var dv = new DataView(ab);
      cmdData.forEach(function (value, index) {
        dv.setUint8(index, value);
      });
      return wxPromise(wx.writeBLECharacteristicValue)({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: ab,
      });
    };

    QNBleNativeMP.prototype.onBluetoothAdapterStateChange = function (newBleState) {
      // ?????????????????????
      if (this.inited && this.bleState.available !== newBleState.available) {
        this.listener.onNativeBluetoothEnableChange(newBleState.available);
      } // NOTE ?????????????????????????????????startDiscovery???stopDiscovery???????????????
      // if (this.bleState.discovering !== newBleState.discovering) {
      //   // ??????????????????????????????????????????????????????
      //   if (newBleState.discovering) {
      //     this.listener.onNativeStartDiscoveryDevice();
      //   } else {
      //     this.listener.onNativeStopDiscoveryDevice();
      //   }
      // }

      this.bleState = newBleState;
    };
    /**
     * ?????????????????????
     * @param {WxOnBluetoothDeviceFoundRes} payload
     * @returns {void}
     */

    QNBleNativeMP.prototype.onDeviceFound = function (payload) {
      var _this = this;

      payload.devices.forEach(function (device) {
        var advertisData = device.advertisData;

        if (advertisData == null) {
          return;
        }

        var manufacturer = ab2Array(advertisData);
        var d = {
          deviceId: device.deviceId,
          bluetoothName: device.localName,
          manufacturer: manufacturer,
          rssi: device.RSSI,
          device: device,
          services: device.advertisServiceUUIDs,
        };

        _this.listener.onNativeBleDeviceFound(new QNBleNativeDevice(d));
      });
    }; // ???????????????????????????

    QNBleNativeMP.prototype.onDeviceConnectStateChange = function (res) {
      if (res.connected) {
        this.listener.onNativeConnected(res.deviceId);
      } else {
        this.listener.onNativeDisconnected(res.deviceId);
      }
    }; // ????????????

    QNBleNativeMP.prototype.onConnectOverTime = function (deviceId) {
      this.listener.onNativeConnectOverTime(deviceId);
    };

    QNBleNativeMP.prototype.onDeviceValueChange = function (device) {
      var deviceId = device.deviceId,
        value = device.value,
        serviceId = device.serviceId,
        characteristicId = device.characteristicId;
      var data = ab2Array(value);
      this.listener.onNativeCharacteristicValueChange({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        data: data,
      });
    };
    /**
     * ????????????????????????????????????????????????
     */

    QNBleNativeMP.prototype.createBleServer = function () {
      return __awaiter(this, void 0, void 0, function () {
        var server;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('???????????????????????????', this.mpwx != null);
              if (!(this.mpwx != null)) return [3 /*break*/, 2];
              return [
                4,
                /*yield*/
                wxPromise(this.mpwx.createBLEPeripheralServer)(),
              ];

            case 1:
              server = _a.sent().server;
              return [
                2,
                /*return*/
                server,
              ];

            case 2:
              return [
                2,
                /*return*/
                null,
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????service data????????????
     * @param {QNBleTypings.QNBleServer} server
     * @param {number[]} data
     */

    QNBleNativeMP.prototype.doAdvertising = function (server, data) {
      var uuids = [];
      var h = [];
      data.forEach(function (item) {
        h.push(number2hex(item));
      });
      var uidformat = 'XXXX-XX-XX-XX-XXXXXX';
      var uidFormatIndex = 0;
      var uid = uidformat.replace(/X/g, function () {
        var s = h[uidFormatIndex];
        uidFormatIndex += 1;
        return s;
      });
      uuids.push(uid);
      this.log('????????????', formatArrayToHex(data), uuids);
      return server.startAdvertising({
        advertiseRequest: {
          connectable: false,
          serviceUuids: uuids,
        },
        // ?????????????????????
        powerLevel: 'high',
      });
    };
    /**
     * ????????????
     * @param {QNBleTypings.QNBleServer} server
     */

    QNBleNativeMP.prototype.stopAdvertising = function (server) {
      this.log('??????????????????');
      return server.stopAdvertising();
    };
    /**
     * ??????????????????
     * @param {QNBleTypings.QNBleServer)} server
     */

    QNBleNativeMP.prototype.closeServer = function (server) {
      var _this = this;

      return server
        .stopAdvertising()
        .then(function () {
          return server.close();
        })
        .then(function () {
          _this.log('??????????????????');
        });
    };

    QNBleNativeMP.prototype.sendHttpRequest = function (request) {
      var _this = this;

      return wxPromise(wx.request)({
        url: request.url,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: request.data,
        method: request.method,
        dataType: request.dataType || 'json',
      })
        .then(function (res) {
          _this.log('??????????????????', request, res); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return res.data;
        })
        ['catch'](function (err) {
          _this.log('????????????', err);

          throw err;
        });
    };

    return QNBleNativeMP;
  })(QNBleNativeCommonExtends);

var genereteCallMethods = function genereteCallMethods(isAndroid, jsbridge) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return new Promise(function (resolve, reject) {
        var _a;

        if (jsbridge[method]) {
          console.log('\u8C03\u7528\u65B9\u6CD5: ' + method);
          (_a = jsbridge[method]) === null || _a === void 0
            ? void 0
            : _a.call(
                jsbridge,
                data,
                function (res) {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  var result = typeof res === 'string' ? JSON.parse(res) : res; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

                  if (
                    (result === null || result === void 0 ? void 0 : result.error_code) &&
                    (result === null || result === void 0 ? void 0 : result.error_code) !== 0
                  ) {
                    reject(result);
                  } else {
                    resolve(result);
                  }
                },
                function (err) {
                  reject(typeof err === 'string' ? JSON.parse(err) : err);
                }
              );
        } else {
          reject();
        }
      });
    };
  }

  return function (method, data) {
    if (data === void 0) {
      data = {};
    }

    return new Promise(function (resolve, reject) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      jsbridge.callHandler(method, data, function (res) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        var code = res === null || res === void 0 ? void 0 : res.error_code;

        if (code !== 0) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          reject(res.error_msg);
        } else {
          resolve(res);
        }
      });
    });
  };
};

var generateRegisterListener = function generateRegisterListener(isAndroid, jsbridge) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, fn) {
      var _a;

      console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method);
      (_a = jsbridge === null || jsbridge === void 0 ? void 0 : jsbridge[method]) === null ||
      _a === void 0
        ? void 0
        : _a.call(jsbridge, {
            fn: fn,
          });
    };
  }

  return function (method, fn) {
    jsbridge.registerHandler(method, fn);
  };
};

var QNBleNativeQN =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeQN, _super);

    function QNBleNativeQN(jsbridge, _a) {
      var isAndroid = (_a === void 0 ? {} : _a).isAndroid;

      var _this = _super.call(this) || this;

      _this.name = 'QNBleNativeQN'; // ???????????????????????????

      _this.characteristicResovled = new Map();
      _this.deviceServiceCached = new Map(); // ????????????

      _this.bleState = {
        available: false,
        discovering: false,
      };
      console.log(
        '\u5F53\u524D\u84DD\u7259\u5E93\u73AF\u5883\u4E3A: ' + (isAndroid ? '??????' : 'ios')
      );
      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.jsbridge = jsbridge;
      _this.callMethod = genereteCallMethods(isAndroid, jsbridge);
      _this.registerListener = generateRegisterListener(isAndroid, jsbridge);
      return _this;
    }
    /**
     * ??????js????????????
     * @param method ?????????
     * @param data ????????????
     */

    QNBleNativeQN.prototype.callMethod = function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return Promise.resolve([method, data]);
    };

    QNBleNativeQN.prototype.getBluetoothAdapterState = function () {
      throw new Error('getBluetoothAdapterState Method not implemented.');
    };

    QNBleNativeQN.prototype.openBluetoothAdapter = function () {
      throw new Error('openBluetoothAdapterMethod not implemented.');
    };

    QNBleNativeQN.prototype.closeBluetoothAdapter = function () {
      throw new Error('closeBluetoothAdapter Method not implemented.');
    };

    QNBleNativeQN.prototype.findBleDeviceCharacteristics = function (deviceId, serviceId) {
      return Promise.resolve();
    };

    QNBleNativeQN.prototype.sendHttpRequest = function (request) {
      throw new Error('sendHttpRequest Method not implemented.');
    };

    QNBleNativeQN.prototype.createBleServer = function () {
      throw new Error('createBleServer Method not implemented.');
    };

    QNBleNativeQN.prototype.doAdvertising = function (server, data) {
      throw new Error('doAdvertising Method not implemented.');
    };

    QNBleNativeQN.prototype.stopAdvertising = function (server) {
      throw new Error('stopAdvertising Method not implemented.');
    };

    QNBleNativeQN.prototype.closeServer = function (server) {
      throw new Error('closeServer Method not implemented.');
    };
    /**
     * ????????????????????????????????????
     */

    QNBleNativeQN.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('???????????????');
              this.registerListener('onBluetoothDeviceFound', this.onDeviceFound.bind(this));
              this.registerListener(
                'onBLEConnectionStateChange',
                this.onDeviceConnectStateChange.bind(this)
              );
              this.registerListener(
                'onBLECharacteristicValueChange',
                this.onDeviceValueChange.bind(this)
              );
              this.registerListener(
                'onBluetoothAdapterStateChange',
                this.onBluetoothAdapterStateChange.bind(this)
              );
              this.registerListener(
                'onBLEDeviceCharacteristics',
                this.onBLEDeviceCharacteristics.bind(this)
              );
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                this.callMethod('getBluetoothAdapterState'),
              ];

            case 2:
              res = _a.sent();
              this.log('?????????????????????', res);
              return [
                2,
                /*return*/
                {
                  bleEnableState: res.available,
                  available: res.available,
                  discovering: false,
                },
              ];

            case 3:
              e_1 = _a.sent();
              return [
                2,
                /*return*/
                {
                  bleEnableState: true,
                  available: false,
                  discovering: false,
                },
              ];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????????????????
     */

    QNBleNativeQN.prototype.checkBleAvailable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, err;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this;
              return [
                4,
                /*yield*/
                this.callMethod('getBluetoothAdapterState'),
              ];

            case 1:
              _a.bleState = _b.sent();

              if (!this.bleState.available) {
                err = new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED); // this.dispatch('error', err);

                return [
                  2,
                  /*return*/
                  Promise.reject(err),
                ];
              }

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    }; // ??????????????????

    QNBleNativeQN.prototype.startScan = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              if (this.bleState.discovering) {
                this.log('??????????????????');
                return [
                  2,
                  /*return*/
                ];
              }

              return [
                2,
                /*return*/
                this.callMethod('startBluetoothDevicesDiscovery'),
              ];
          }
        });
      });
    }; // ????????????

    QNBleNativeQN.prototype.stopScan = function () {
      this.log('?????????????????????');
      return this.callMethod('stopBluetoothDevicesDiscovery');
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {number} connectOverTime - ?????????????????????
     */

    QNBleNativeQN.prototype.createBleConnection = function (bleDevice, connectOverTime) {
      return __awaiter(this, void 0, void 0, function () {
        var err_1, error;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              this.log('???????????????????????????', bleDevice);
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4, , 5]);

              return [
                4,
                /*yield*/
                this.callMethod('createBLEConnection', {
                  deviceId: bleDevice.deviceId,
                }),
              ];

            case 3:
              _a.sent();

              return [3 /*break*/, 5];

            case 4:
              err_1 = _a.sent();
              this.log('??????????????????', err_1);
              error = err_1; // 0????????????-1????????????

              if (hasOwnProperty(error, 'code') && [0, -1].includes(error.code));
              else if (error.code === 10012) {
                // ????????????
                this.listener.onNativeConnectOverTime(bleDevice.deviceId);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw error;
              }

              return [3 /*break*/, 5];

            case 5:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {Promise<void>}
     */

    QNBleNativeQN.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
          try {
            return [
              2,
              /*return*/
              this.callMethod('closeBLEConnection', {
                deviceId: bleDevice.deviceId,
              }),
            ];
          } catch (err) {
            error = err; // 0????????????10006????????????

            if (hasOwnProperty(error, 'code') && [0, 10006].includes(error.code));
            else {
              // eslint-disable-next-line @typescript-eslint/no-throw-literal
              throw error;
            }
          }

          return [
            2,
            /*return*/
            bleDevice,
          ];
        });
      });
    };

    QNBleNativeQN.prototype.findService = function (deviceId) {
      return __awaiter(this, void 0, void 0, function () {
        var _this = this;

        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          // this.log("??????????????????")
          if (this.deviceServiceCached.get(deviceId) !== undefined) {
            return [
              2,
              /*return*/
              this.deviceServiceCached.get(deviceId),
            ];
          }

          return [
            2,
            /*return*/
            new Promise(function (resolve) {
              _this.characteristicResovled.set(deviceId, resolve);
            }),
          ];
        });
      });
    };
    /**
     * ???????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeQN.prototype.enableNotify = function (deviceId, serviceId, characteristicId) {
      return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('???????????????', deviceId, serviceId, characteristicId);
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                this.callMethod('notifyBLECharacteristicValueChange', {
                  deviceId: deviceId,
                  serviceId: serviceId,
                  characteristicId: characteristicId,
                  state: true,
                }),
              ];

            case 2:
              return [
                2,
                /*return*/
                _a.sent(),
              ];

            case 3:
              e_2 = _a.sent();
              console.log('???????????????', e_2);
              return [3 /*break*/, 4];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeQN.prototype.readBleCharacteristicValue = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (characteristicId.length === 4) {
            this.log('??????', characteristicId);
          } else {
            this.log('??????', characteristicId.substr(4, 4));
          }

          return [
            2,
            /*return*/
            this.callMethod('readBLECharacteristicValue', {
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
            }),
          ];
        });
      });
    };
    /**
     * ?????????????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleNativeQN.prototype.writeData = function (deviceId, serviceId, characteristicId, cmdData) {
      var arry = new Array();
      cmdData.forEach(function (it) {
        arry.push(it);
      });
      var cmdStr = array2hex(arry);
      return this.callMethod('writeBLECharacteristicValue', {
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: cmdStr,
      });
    };

    QNBleNativeQN.prototype.onBluetoothAdapterStateChange = function (newBleState) {
      this.listener.onNativeBluetoothEnableChange(newBleState.available); // NOTE ?????????????????????????????????startDiscovery???stopDiscovery???????????????
      // if (this.bleState.discovering !== newBleState.discovering) {
      //   // ??????????????????????????????????????????????????????
      //   if (newBleState.discovering) {
      //     this.listener.onNativeStartDiscoveryDevice();
      //   } else {
      //     this.listener.onNativeStopDiscoveryDevice();
      //   }
      // }

      this.bleState = newBleState;
    };
    /**
     * ???????????????????????????
     * @param data
     */

    QNBleNativeQN.prototype.onBLEDeviceCharacteristics = function (data) {
      var deviceId = data.deviceId,
        characteristics = data.characteristics; // this.log("??????onBLEDeviceCharacteristics", data, this.characteristicResovled.get(deviceId))

      this.deviceServiceCached.set(deviceId, characteristics);

      if (this.characteristicResovled.get(deviceId) != undefined) {
        this.characteristicResovled.get(deviceId)(characteristics);
        this.characteristicResovled['delete'](deviceId);
      }
    };
    /**
     * ?????????????????????
     * @param {WxOnBluetoothDeviceFoundRes} payload
     * @returns {void}
     */

    QNBleNativeQN.prototype.onDeviceFound = function (payload) {
      var name = payload.name,
        deviceId = payload.deviceId,
        rssi = payload.rssi,
        advertisData = payload.advertisData,
        advertisServiceUUIDs = payload.advertisServiceUUIDs;

      if (!advertisData) {
        return;
      }

      var item = {
        deviceId: deviceId,
        bluetoothName: name,
        manufacturer: hex2Array(advertisData),
        rssi: rssi,
        device: payload,
        services: advertisServiceUUIDs,
      };
      this.listener.onNativeBleDeviceFound(new QNBleNativeDevice(item));
    }; // ???????????????????????????

    QNBleNativeQN.prototype.onDeviceConnectStateChange = function (res) {
      if (res.connected) {
        this.listener.onNativeConnected(res.deviceId);
      } else {
        this.characteristicResovled['delete'](res.deviceId);
        this.deviceServiceCached['delete'](res.deviceId);
        this.listener.onNativeDisconnected(res.deviceId);
      }
    };

    QNBleNativeQN.prototype.onDeviceValueChange = function (device) {
      var deviceId = device.deviceId,
        serviceId = device.serviceId,
        characteristicId = device.characteristicId,
        value = device.value; // if (characteristicId.length == 4) {
      //   this.log("??????", characteristicId, value)
      // } else {
      //   this.log("??????", characteristicId.substr(4, 4), value)
      // }

      var data = hex2Array(value);
      this.listener.onNativeCharacteristicValueChange({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        data: data,
      });
    };

    QNBleNativeQN.prototype.supportAdvertising = function () {
      return false;
    };

    return QNBleNativeQN;
  })(QNBleNativeCommonExtends);

var genereteCallMethods$1 = function genereteCallMethods(isAndroid, jsbridge) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return new Promise(function (resolve, reject) {
        var _a;

        if (jsbridge[method]) {
          console.log('\u5C1D\u8BD5\u8C03\u7528\u65B9\u6CD5: ' + method, '??????: ', data);
          (_a = jsbridge[method]) === null || _a === void 0
            ? void 0
            : _a.call(
                jsbridge,
                data,
                function (res) {
                  console.log('\u8C03\u7528\u65B9\u6CD5: ' + method, '??????: ', data, '?????????', res); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

                  var result = typeof res === 'string' ? JSON.parse(res) : res; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

                  if (
                    (result === null || result === void 0 ? void 0 : result.error_code) &&
                    (result === null || result === void 0 ? void 0 : result.error_code) !== 0
                  ) {
                    reject(result);
                  } else {
                    resolve(result);
                  }
                },
                function (err) {
                  console.error(
                    '\u8C03\u7528\u65B9\u6CD5: ' + method + '\u5931\u8D25',
                    '??????: ',
                    data,
                    '????????????:' + err
                  );
                  reject(typeof err === 'string' ? JSON.parse(err) : err);
                }
              );
        } else {
          reject(new Error('not exists method ' + method));
        }
      });
    };
  }

  return function (method, data) {
    if (data === void 0) {
      data = {};
    }

    return new Promise(function (resolve, reject) {
      console.log('\u5C1D\u8BD5\u8C03\u7528\u65B9\u6CD5: ' + method, '??????: ', data); // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

      jsbridge.callHandler(
        method,
        data,
        function (res) {
          console.log('\u8C03\u7528\u65B9\u6CD5: ' + method, '??????: ', data, '?????????', res); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access

          var code = res.error_code || 0;

          if (code !== 0) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            reject(res);
          } else {
            resolve(res);
          }
        },
        function (res) {
          console.error(
            '\u8C03\u7528\u65B9\u6CD5: ' + method + '\u5931\u8D25',
            '??????: ',
            data,
            '????????????:' + res
          );
          reject(res);
        }
      );
    });
  };
};

var generateRegisterListener$1 = function generateRegisterListener(isAndroid, jsbridge) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, fn) {
      var _a;

      console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method);
      (_a = jsbridge === null || jsbridge === void 0 ? void 0 : jsbridge[method]) === null ||
      _a === void 0
        ? void 0
        : _a.call(
            jsbridge,
            {
              fn: fn,
            },
            function () {
              console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method + '\uFF0C\u6210\u529F');
            },
            function () {
              console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method + '\uFF0C\u5931\u8D25');
            }
          );
    };
  }

  return function (method, fn) {
    console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method);
    jsbridge.registerHandler(method, fn);
  };
};

var QNBleNativeMultiPages =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeMultiPages, _super);

    function QNBleNativeMultiPages(jsbridge, _a) {
      var isAndroid = (_a === void 0 ? {} : _a).isAndroid;

      var _this = _super.call(this) || this;

      _this.name = 'QNBleNativeMultiPages'; // ???????????????????????????

      _this.characteristicResovled = new Map();
      _this.deviceServiceCached = new Map(); // ????????????

      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.connectingDevcies = [];
      _this.connectedDevices = {};
      console.log(
        '\u5F53\u524D\u84DD\u7259\u5E93\u73AF\u5883\u4E3A: ' + (isAndroid ? '??????' : 'ios'),
        jsbridge
      );
      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.jsbridge = jsbridge;
      _this.callMethod = genereteCallMethods$1(isAndroid, jsbridge);
      _this.registerListener = generateRegisterListener$1(isAndroid, jsbridge);
      return _this;
    }

    Object.defineProperty(QNBleNativeMultiPages.prototype, 'connectedDeviceIds', {
      get: function get() {
        return Object.keys(this.connectedDevices || {});
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * ??????js????????????
     * @param method ?????????
     * @param data ????????????
     */

    QNBleNativeMultiPages.prototype.callMethod = function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return Promise.resolve([method, data]);
    };

    QNBleNativeMultiPages.prototype.getBluetoothAdapterState = function () {
      throw new Error('getBluetoothAdapterState Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.openBluetoothAdapter = function () {
      throw new Error('openBluetoothAdapterMethod not implemented.');
    };

    QNBleNativeMultiPages.prototype.closeBluetoothAdapter = function () {
      throw new Error('closeBluetoothAdapter Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.sendHttpRequest = function (request) {
      throw new Error('sendHttpRequest Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.createBleServer = function () {
      throw new Error('createBleServer Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.doAdvertising = function (server, data) {
      throw new Error('doAdvertising Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.stopAdvertising = function (server) {
      throw new Error('stopAdvertising Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.closeServer = function (server) {
      throw new Error('closeServer Method not implemented.');
    };
    /**
     * ????????????????????????????????????
     */

    QNBleNativeMultiPages.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, available, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('???????????????');
              this.registerListener('onBleDeviceFound', this.onDeviceFoundArray.bind(this));
              this.registerListener(
                'onBleCharacteristicValueChange',
                this.onDeviceValueChange.bind(this)
              );
              this.registerListener(
                'onBleAuthorityChange',
                this.onBluetoothAdapterStateChange.bind(this)
              );
              this.registerListener(
                'onBleConnectionStateChange',
                this.onBleConnectionStateChange.bind(this)
              );
              _a.label = 1;

            case 1:
              _a.trys.push([1, 5, , 6]);

              return [
                4,
                /*yield*/
                this.callMethod('fetchBleGlobalState'),
              ];

            case 2:
              res = _a.sent();
              this.log('?????????????????????', res);
              available = res.bleEnableState === 'poweredOn' && res.locationSwitchOpened !== false;
              this.connectingDevcies = res.connectingDevcies || [];
              this.connectedDevices = res.connectedDevices || {};
              if (!(!available && res.bleEnableState === 'uninit')) return [3 /*break*/, 4]; // ???????????????????????????????????????

              return [
                4,
                /*yield*/
                this.callMethod('initBleAdapter'),
              ];

            case 3:
              // ???????????????????????????????????????
              _a.sent();

              _a.label = 4;

            case 4:
              this.bleState = {
                available: available,
                discovering: res.bleScannerState,
              };
              return [
                2,
                /*return*/
                {
                  bleEnableState: available,
                  available: available,
                  discovering: res.bleScannerState,
                },
              ];

            case 5:
              e_1 = _a.sent();
              this.log('??????????????????');
              this.bleState = {
                available: false,
                discovering: false,
              };
              return [
                2,
                /*return*/
                {
                  bleEnableState: true,
                  available: false,
                  discovering: false,
                },
              ];

            case 6:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ???????????????????????????????????????
     */

    QNBleNativeMultiPages.prototype.checkBleAvailable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var err;
        return __generator(this, function (_a) {
          if (!this.bleState.available) {
            err = new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED); // this.dispatch('error', err);

            return [
              2,
              /*return*/
              Promise.reject(err),
            ];
          }

          return [
            2,
            /*return*/
            Promise.resolve(),
          ];
        });
      });
    }; // ??????????????????

    QNBleNativeMultiPages.prototype.startScan = function (params) {
      if (params === void 0) {
        params = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              if (this.bleState.discovering) {
                this.log('??????????????????');
                return [
                  2,
                  /*return*/
                ];
              }

              return [
                2,
                /*return*/
                this.callMethod('startBleDevicesDiscovery', params),
              ];
          }
        });
      });
    }; // ????????????

    QNBleNativeMultiPages.prototype.stopScan = function () {
      this.log('?????????????????????');
      return this.callMethod('stopBleDevicesDiscovery');
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {number} connectOverTime - ?????????????????????
     */

    QNBleNativeMultiPages.prototype.createBleConnection = function (bleDevice, connectOverTime) {
      return __awaiter(this, void 0, void 0, function () {
        var err_1, error;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.connectedDeviceIds.includes(bleDevice.deviceId)) {
                // ????????????????????????????????????
                this.listener.onNativeConnected(bleDevice.deviceId);
                this.findBleDeviceCharacteristics(bleDevice.deviceId);
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              this.log('???????????????????????????', bleDevice);
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4, , 5]);

              return [
                4,
                /*yield*/
                this.callMethod('createBleConnection', {
                  deviceId: bleDevice.deviceId,
                }),
              ];

            case 3:
              _a.sent();

              return [3 /*break*/, 5];

            case 4:
              err_1 = _a.sent();
              this.log('??????????????????', err_1);
              error = err_1; // 0????????????-1????????????

              if (hasOwnProperty(error, 'code') && [0, -1].includes(error.code));
              else if (error.code === 10012) {
                // ????????????
                this.listener.onNativeConnectOverTime(bleDevice.deviceId);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw error;
              }

              return [3 /*break*/, 5];

            case 5:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * ??????????????????
     * @param {QNBleDevice} bleDevice - ??????????????????
     * @param {Promise<void>}
     */

    QNBleNativeMultiPages.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
          try {
            return [
              2,
              /*return*/
              this.callMethod('closeBleConnection', {
                deviceId: bleDevice.deviceId,
              }),
            ];
          } catch (err) {
            error = err; // 0????????????10006????????????

            if (hasOwnProperty(error, 'code') && [0, 10006].includes(error.code));
            else {
              // eslint-disable-next-line @typescript-eslint/no-throw-literal
              throw error;
            }
          }

          return [
            2,
            /*return*/
            bleDevice,
          ];
        });
      });
    };

    QNBleNativeMultiPages.prototype.findService = function (deviceId) {
      return __awaiter(this, void 0, void 0, function () {
        var _this = this;

        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          // this.log("??????????????????")
          if (this.deviceServiceCached.get(deviceId) !== undefined) {
            return [
              2,
              /*return*/
              this.deviceServiceCached.get(deviceId),
            ];
          }

          return [
            2,
            /*return*/
            new Promise(function (resolve) {
              _this.characteristicResovled.set(deviceId, resolve);
            }),
          ];
        });
      });
    };
    /**
     * ???????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMultiPages.prototype.enableNotify = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('???????????????', deviceId, serviceId, characteristicId);
              return [
                4,
                /*yield*/
                this.callMethod('notifyBleCharacteristicValueChange', {
                  deviceId: deviceId,
                  serviceId: serviceId,
                  characteristicId: characteristicId,
                  state: true,
                }),
              ];

            case 1:
              return [
                2,
                /*return*/
                _a.sent(),
              ];
          }
        });
      });
    };
    /**
     * ???????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMultiPages.prototype.readBleCharacteristicValue = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (characteristicId.length === 4) {
            this.log('??????', characteristicId);
          } else {
            this.log('??????', characteristicId.substr(4, 4));
          }

          return [
            2,
            /*return*/
            this.callMethod('readBleCharacteristicValue', {
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
            }),
          ];
        });
      });
    };
    /**
     * ?????????????????????
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleNativeMultiPages.prototype.writeData = function (
      deviceId,
      serviceId,
      characteristicId,
      cmdData
    ) {
      var arry = new Array();
      cmdData.forEach(function (it) {
        arry.push(it);
      });
      var cmdStr = array2hex(arry);
      return this.callMethod('writeBleCharacteristicValue', {
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: cmdStr,
      });
    };

    QNBleNativeMultiPages.prototype.onBluetoothAdapterStateChange = function (res) {
      return __awaiter(this, void 0, void 0, function () {
        var newBleState, available;
        return __generator(this, function (_a) {
          this.log('onBluetoothAdapterStateChange', res);
          newBleState = typeof res === 'string' ? JSON.parse(res) : res;
          available =
            newBleState.bleEnableState === 'poweredOn' &&
            newBleState.locationSwitchOpened !== false;
          this.listener.onNativeBluetoothEnableChange(available);
          this.bleState = {
            available: available,
            discovering: newBleState.bleScannerState,
          };
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    QNBleNativeMultiPages.prototype.findBleDeviceCharacteristics = function (deviceId, serviceId) {
      if (serviceId === void 0) {
        serviceId = '';
      }

      return __awaiter(this, void 0, void 0, function () {
        var characteristicsArray, characteristics;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.callMethod('findBleDeviceCharacteristics', {
                  deviceId: deviceId,
                  services: serviceId ? [serviceId] : [],
                }),
              ];

            case 1:
              characteristicsArray = _a.sent().characteristics;
              characteristics =
                characteristicsArray.map(function (v) {
                  return v.characteristicId;
                }) || [];
              this.deviceServiceCached.set(deviceId, characteristics);

              if (this.characteristicResovled.get(deviceId) != undefined) {
                this.characteristicResovled.get(deviceId)(characteristics);
                this.characteristicResovled['delete'](deviceId);
              }

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMultiPages.prototype.onDeviceFoundArray = function (data) {
      var _this = this;

      this.log('onDeviceFoundArray', data);
      var devices = (typeof data === 'string' ? JSON.parse(data) : data).devices;
      devices === null || devices === void 0
        ? void 0
        : devices.forEach(function (device) {
            _this.onDeviceFound(device);
          });
    };
    /**
     * ?????????????????????
     * @param {WxOnBluetoothDeviceFoundRes} payload
     * @param {boolean} forCalc ?????????????????????????????????
     * @returns {void}
     */

    QNBleNativeMultiPages.prototype.onDeviceFound = function (payload, forCalc) {
      if (forCalc === void 0) {
        forCalc = false;
      }

      this.log('onDeviceFound', payload, forCalc);
      var _a = payload.name,
        name = _a === void 0 ? '' : _a,
        deviceId = payload.deviceId,
        rssi = payload.rssi,
        _b = payload.advertisData,
        advertisData = _b === void 0 ? '' : _b,
        advertisServiceUUIDs = payload.advertisServiceUUIDs;

      if (advertisData.length == 0) {
        return;
      }

      var item = {
        deviceId: deviceId,
        bluetoothName: name,
        manufacturer: hex2Array(advertisData),
        rssi: rssi,
        device: payload,
        services: advertisServiceUUIDs,
      };
      var qnBleNativeDevice = new QNBleNativeDevice(item);

      if (!forCalc) {
        this.listener.onNativeBleDeviceFound(qnBleNativeDevice);
      }

      return qnBleNativeDevice;
    };

    QNBleNativeMultiPages.prototype.onDeviceValueChange = function (device) {
      var _a = typeof device === 'string' ? JSON.parse(device) : device,
        deviceId = _a.deviceId,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId,
        value = _a.value; // if (characteristicId.length == 4) {
      //   this.log("??????", characteristicId, value)
      // } else {
      //   this.log("??????", characteristicId.substr(4, 4), value)
      // }

      var data = hex2Array(value);
      this.listener.onNativeCharacteristicValueChange({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        data: data,
      });
    };

    QNBleNativeMultiPages.prototype.onBleConnectionStateChange = function (state) {
      return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.callMethod('fetchBleGlobalState'),
              ];

            case 1:
              res = _a.sent();
              data = typeof state === 'string' ? JSON.parse(state) : state;
              this.connectingDevcies = res.connectingDevcies || [];
              this.connectedDevices = res.connectedDevices || {};

              if (data.state === 'connected') {
                this.listener.onNativeConnected(data.deviceId);
                this.findBleDeviceCharacteristics(data.deviceId);
              } else if (data.state === 'disconnect') {
                this.characteristicResovled['delete'](data.deviceId);
                this.deviceServiceCached['delete'](data.deviceId);
                this.listener.onNativeDisconnected(data.deviceId);
              }

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMultiPages.prototype.supportAdvertising = function () {
      return false;
    };

    return QNBleNativeMultiPages;
  })(QNBleNativeCommonExtends);

var index = {
  QNBleNativeMP: QNBleNativeMP,
  QNBleNativeQN: QNBleNativeQN,
  QNBleNativeMultiPages: QNBleNativeMultiPages,
};

var QNMPPlugin =
  /** @class */
  (function (_super) {
    __extends(QNMPPlugin, _super);

    function QNMPPlugin(config) {
      return (
        _super.call(this, {
          bleNative: new QNBleNativeMP(config.mpwx || wx),
          config: __assign(__assign({}, config), {
            useSdk: true,
            protocols: [
              QNBleProtocols.NormalBleScaleProtocol,
              QNBleProtocols.OneToOneBroadcastScaleProtocol,
              QNBleProtocols.OneToMultiBroadcastScaleProtocol,
              QNBleProtocols.WspDualScaleProtocol,
              QNBleProtocols.HeightWeightScaleProtocol,
              QNBleProtocols.EightElectrodeScaleProtocol,
            ],
          }),
        }) || this
      );
    }

    return QNMPPlugin;
  })(QNBle);

var QNMPPlugin$1 =
  /** @class */
  (function () {
    function QNMPPlugin() {
      this._qnble = new QNBle();
    }

    QNMPPlugin.prototype.init = function (config) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return this._qnble.init(
        new QNBleNativeQN(config.jsbridge, {
          isAndroid: config.isAndroid,
        }),
        __assign(__assign({}, config), {
          protocols: [
            QNBleProtocols.NormalBleScaleMesProtocol,
            QNBleProtocols.FasciaGunMCUProtocol,
            QNBleProtocols.WspDualScaleMesProtocol,
          ],
        })
      );
    };

    Object.defineProperty(QNMPPlugin.prototype, 'bleApi', {
      get: function get() {
        return this._qnble;
      },
      enumerable: false,
      configurable: true,
    });
    return QNMPPlugin;
  })();

var QNMultiPagesPlugin =
  /** @class */
  (function () {
    function QNMultiPagesPlugin() {
      this._qnble = new QNBle();
    }

    QNMultiPagesPlugin.prototype.init = function (config) {
      return __awaiter(this, void 0, void 0, function () {
        var initValue;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.nativeApi = new QNBleNativeMultiPages(config.jsbridge, {
                isAndroid: config.isAndroid,
              });
              return [
                4,
                /*yield*/
                this._qnble.init(this.nativeApi, __assign({}, config)),
              ];

            case 1:
              initValue = _a.sent();
              return [
                2,
                /*return*/
                initValue,
              ];
          }
        });
      });
    };

    QNMultiPagesPlugin.prototype.buildNativeDevice = function (deviceId) {
      if (!this.connectedDeviceIds.includes(deviceId)) {
        return null;
      } // ??????????????????QNNativeDevice???????????????

      return this.nativeApi.onDeviceFound(this.nativeApi.connectedDevices[deviceId], true);
    }; // ????????????????????????????????? ??????????????????????????????

    QNMultiPagesPlugin.prototype.mockReConnectDevice = function (deviceId, listener, operation) {
      return __awaiter(this, void 0, void 0, function () {
        var qnBleNativeDevice, qnBleDevice;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.connectedDeviceIds.includes(deviceId)) {
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              qnBleNativeDevice = this.buildNativeDevice(deviceId);
              qnBleDevice = new QNBleDevice(
                qnBleNativeDevice,
                this.bleApi.getWhatProtocolToApply(qnBleNativeDevice)
              ); // ?????????????????????

              return [
                4,
                /*yield*/
                this.bleApi.createBleConnection(qnBleDevice, listener, operation),
              ];

            case 1:
              // ?????????????????????
              _a.sent();

              return [
                2,
                /*return*/
                qnBleDevice,
              ];
          }
        });
      });
    };

    Object.defineProperty(QNMultiPagesPlugin.prototype, 'connectedDevices', {
      get: function get() {
        return this.nativeApi.connectedDevices || {};
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNMultiPagesPlugin.prototype, 'connectedDeviceIds', {
      // ??????????????????id
      get: function get() {
        return this.nativeApi.connectedDeviceIds || [];
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNMultiPagesPlugin.prototype, 'bleStateAvailable', {
      // ????????????????????????
      get: function get() {
        return this.nativeApi.bleState.available;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNMultiPagesPlugin.prototype, 'bleApi', {
      get: function get() {
        return this._qnble;
      },
      enumerable: false,
      configurable: true,
    });
    return QNMultiPagesPlugin;
  })();

export default QNBle;
export {
  QNBleBaseScaleProtocol,
  QNBleCommonExtends,
  QNBleDevice,
  QNBleError,
  QNBleNative,
  QNBleNativeCommonExtends,
  QNBleNativeDevice,
  index as QNBleNatives,
  QNBleProtocol,
  QNBleProtocols,
  consts as QNConsts,
  QNEvent,
  QNEventManager,
  QNEventSystem,
  QNMPPlugin$1 as QNMESPlugin,
  QNMPPlugin,
  QNMultiPagesPlugin,
  QNProtocolManager,
  QNScaleBiz,
  utils as QNUtils,
};
