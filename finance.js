+(function (window, document) {

  'use strict';

  window._stock_ = '';
  window.finance_stock = function () {
    return fetch('https://script.google.com/macros/s/AKfycbwXNkTBijbLIBCZ22oRP3ZqGUoYB4QQIvy4PUQrWaN1R1pHP57g/exec', {
      method: 'post',
      body: encodeURI(JSON.stringify({ type: 'stock' })), // fetch 的中文會變亂碼，要用 encodeURI 轉換
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      _stock_ = data;
      console.log(data);
    });
  }

  window.finance_stock_data = function (name, type) {
    let result = _stock_;
    let reply = 'no';
    for (let i = 0; i < result.length; i++) {
      if (result[i].name == name || result[i].uid == name) {
        reply = result[i][type];
      }
    }
    if (reply == 'no') {
      return '查無資料';
    } else {
      return reply;
    }
  }

  window._rate_ = '';
  window.finance_rate = function (callback) {
    return fetch('https://script.google.com/macros/s/AKfycbz3x2FzVG_pH0nlcrcfB2q4nsNjXBQLnkanpfIi9E_3_2mZagR4/exec', {
      method: 'post',
      body: encodeURI(JSON.stringify({ type: 'rate' })), // fetch 的中文會變亂碼，要用 encodeURI 轉換
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      _rate_ = data;
      console.log(data);
    });
  }

  window.finance_rate_data = function (name, type) {
    let arr = _rate_;
    type = type * 1 - 1;
    return arr[name][type];
  }





}(window, window.document));
