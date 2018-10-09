"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tencent_map_key = "ZTGBZ-QMSWJ-XAEFR-F6QM2-LL5Y6-MCF2L";
var geocoder = exports.geocoder = function geocoder(lat, lon) {
    var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var fail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    return wx.request({
        url: "https://apis.map.qq.com/ws/geocoder/v1/",
        data: {
            location: lat + "," + lon,
            key: tencent_map_key,
            get_poi: 0
        },
        success: success,
        fail: fail
    });
};
var getMood = exports.getMood = function getMood(province, city, county) {
    var success = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    return wx.request({
        url: 'https://wis.qq.com/weather/common',
        data: {
            source: 'wxa',
            weather_type: 'tips',
            province: province,
            city: city,
            county: county
        },
        success: success
    });
};
//# sourceMappingURL=api.js.map
