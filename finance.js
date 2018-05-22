+(function(window, document) {

  'use strict';

  function finance_stock(name, callback) {
    $.post('https://script.google.com/macros/s/AKfycbxfzHxi1ok-NxVGBN5vAU-VuyGpYV0VQt8TSGeMe8w0Ompvw6o/exec', {
        name: name
      },
      function(data) {
        callback([data, 'stock']);
      });
  }

  function finance_stock_data(e,type) {
    let result = e[0];
    if (e[1] == 'stock') {
      type = type * 1 - 1;
      return result[type];
    } else {
      return '資料格式錯誤';
    }
  }

  window.finance_stock_data = finance_stock_data;
  window.finance_stock = finance_stock;

}(window, window.document));
