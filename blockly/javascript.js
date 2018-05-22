Blockly.JavaScript['finance_stock'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'finance_stock('+name+',function(data){\n' +
      statements_do + '\n});';;
  return code;
};

Blockly.JavaScript['finance_stock_data'] = function(block) {
  var type = block.getFieldValue('type');
  var code = 'finance_stock_data(data,"' + type + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

