Blockly.Blocks['finance_stock'] = {
  init: function() {
    this.appendValueInput("name")
      .setCheck(null)
      .appendField("取得");
    this.appendDummyInput()
      .appendField("股票資訊");
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
        ["即時股價", "price"],
        ["漲跌", "change"]
      ]), "type");
    this.setOutput(true, null);
    this.setColour(180);
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
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



Blockly.Blocks['finance_rate_data'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("幣別")
      .appendField(new Blockly.FieldDropdown([
        ["美金 ( USD )", "美金(USD)"],
        ["港幣 ( HKD )", "港幣(HKD)"],
        ["英鎊 ( GBP )", "英鎊(GBP)"],
        ["澳幣 ( AUD )", "澳幣(AUD)"],
        ["加拿大幣 ( CAD )", "加拿大幣(CAD)"],
        ["新加坡幣 ( SGD )", "新加坡幣(SGD)"],
        ["瑞士法郎 ( CHF )", "瑞士法郎(CHF)"],
        ["日圓 ( JPY )", "日圓(JPY)"],
        ["南非幣 ( ZAR )", "南非幣(ZAR)"],
        ["瑞典幣 ( SEK )", "瑞典幣(SEK)"],
        ["紐元 ( NZD )", "紐元(NZD)"],
        ["泰幣 ( THB )", "泰幣(THB)"],
        ["菲國比索 ( PHP )", "菲國比索(PHP)"],
        ["印尼幣 ( IDR )", "印尼幣(IDR)"],
        ["歐元 ( EUR )", "歐元(EUR)"],
        ["韓元 ( KRW )", "韓元(KRW)"],
        ["越南盾 ( VND )", "越南盾(VND)"],
        ["馬來幣 ( MYR )", "馬來幣(MYR)"],
        ["人民幣 ( CNY )", "人民幣(CNY)"]
      ]), "location")
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
