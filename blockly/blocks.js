Blockly.Blocks['finance_stock'] = {
  init: function() {
    this.appendValueInput("name")
      .setCheck(null)
      .appendField("取得");
    this.appendDummyInput()
      .appendField("即時股價");
    this.appendStatementInput("do")
      .setCheck(null)
      .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['finance_stock_data'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["即時股價", "1"],
        ["漲跌", "2"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
