'use strict';

/**此文件根据业务需求对app自定义的方法进行封装**/
var us = require('../../lib/underscore.js');
var handle = {
  setStorage: function setStorage(option, _complete) {
    var key = option.key;
    var val = option.val;
    if (_complete && typeof _complete === 'function') {
      //异步
      wx.setStorage({
        key: key,
        data: val,
        complete: function complete(data) {
          if (us.isFunction(_complete)) {
            _complete(data);
          }
        }
      });
    } else {
      //同步
      try {
        return wx.setStorageSync(key, val);
      } catch (e) {
        console.error(e);
      }
    }
  },
  removeStorage: function removeStorage(option, _complete2) {
    var key = option.key;
    if (_complete2 && typeof _complete2 === 'function') {
      //异步
      wx.removeStorage({
        key: key,
        complete: function complete(data) {
          if (us.isFunction(_complete2)) {
            _complete2(data);
          }
        }
      });
    } else {
      //同步
      try {
        return wx.removeStorageSync(key);
      } catch (e) {
        console.error(e);
      }
    }
  },
  getStorage: function getStorage(option, _complete3) {
    var key = option.key;
    if (_complete3 && typeof _complete3 === 'function') {
      //异步
      wx.getStorage({
        key: key,
        complete: function complete(data) {
          if (us.isFunction(_complete3)) {
            _complete3(data);
          }
        }
      });
    } else {
      //同步
      try {
        return wx.getStorageSync(key);
      } catch (e) {
        console.error(e);
      }
    }
  },
  clearStorage: function clearStorage() {
    try {
      return wx.clearStorageSync();
    } catch (e) {
      console.error(e);
    }
  }
};
module.exports = handle;
//# sourceMappingURL=service.js.map
