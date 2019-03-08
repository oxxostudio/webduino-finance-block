Blockly.JavaScript['finance_stock'] = function(block) {
  var code = 'await finance_stock();\n';
  return code;
};

Blockly.JavaScript['finance_stock_data'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var type = block.getFieldValue('type');
  var code = 'finance_stock_data(' + name + ',"' + type + '")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['finance_rate'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'await finance_rate();\n';
  return code;
};


Blockly.JavaScript['finance_rate_data'] = function(block) {
  var name = block.getFieldValue('name');
  var type = block.getFieldValue('type');
  var code = 'finance_rate_data("' + name + '","' + type + '")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
