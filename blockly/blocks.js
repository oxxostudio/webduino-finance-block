Blockly.Blocks['finance_stock'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("取得股票資訊");
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
    this.appendValueInput("name")
      .setCheck(null)
      .appendField("股票名稱 or 代號");
    this.appendDummyInput()
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([
        ["即時股價", "price"],
        ["漲跌幅", "change"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['finance_rate'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("取得台灣銀行牌告匯率");
    this.appendStatementInput("do")
      .setCheck(null)
      .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



Blockly.Blocks['finance_rate_data'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("幣別")
      .appendField(new Blockly.FieldDropdown([
        ["美金 - USD", "USD"],
        ["港幣 - HKD", "HKD"],
        ["英鎊 - GBP", "GBP"],
        ["澳幣 - AUD", "AUD"],
        ["加拿大幣 - CAD", "CAD"],
        ["新加坡幣 - SGD", "SGD"],
        ["瑞士法郎 - CHF", "CHF"],
        ["日圓 - JPY", "JPY"],
        ["南非幣 - ZAR", "ZAR"],
        ["瑞典幣 - SEK", "SEK"],
        ["紐元 - NZD", "NZD"],
        ["泰幣 - THB", "THB"],
        ["菲國比索 - PHP", "PHP"],
        ["印尼幣 - IDR", "IDR"],
        ["歐元 - EUR", "EUR"],
        ["韓元 - KRW", "KRW"],
        ["越南盾 - VND", "VND"],
        ["馬來幣 - MYR", "MYR"],
        ["人民幣 - CNY", "CNY"]
      ]), "name")
      .appendField("類別")
      .appendField(new Blockly.FieldDropdown([
        ["買入", "1"],
        ["賣出", "2"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("http://rate.bot.com.tw/xrt?Lang=zh-TW");
  }
};
