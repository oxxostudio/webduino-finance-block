+(function(window, document) {

  'use strict';

  function finance_stock(callback) {
    $.post('https://script.google.com/macros/s/AKfycbwXNkTBijbLIBCZ22oRP3ZqGUoYB4QQIvy4PUQrWaN1R1pHP57g/exec', {
        type: 'stock'
      },
      function(data) {
        callback([data, 'stock']);
      });
  }

  function finance_stock_data(name, type, e) {
    let result = e[0];
    let reply = 0;
    if (e[1] == 'stock') {
      for (let i = 0; i < result.length; i++) {
        if (result[i].name == name || result[i].uid == name) {
          reply = result[i][type];
        }
      }
      if (reply == 0) {
        return '查無資料';
      } else {
        return reply;
      }
    } else {
      return '資料格式錯誤';
    }
  }

  function finance_rate(callback) {
    $.post('https://script.google.com/macros/s/AKfycbz3x2FzVG_pH0nlcrcfB2q4nsNjXBQLnkanpfIi9E_3_2mZagR4/exec', {
        type: 'rate'
      },
      function(data) {
        callback([data, 'rate']);
      });
  }

  function finance_rate_data(name, type, e) {
    let arr = e[0];
    if (e[1] == 'rate') {
      type = type * 1 - 1;
      return arr[name][type];
    } else {
      return '資料格式錯誤';
    }
  }




  window.finance_rate_data = finance_rate_data;
  window.finance_rate = finance_rate;
  window.finance_stock_data = finance_stock_data;
  window.finance_stock = finance_stock;

}(window, window.document));
