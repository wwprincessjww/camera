Blockly.Blocks['usb_camera_take_picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take a picture with USB camera and save as")
        .appendField(new Blockly.FieldTextInput("image.jpg"), "FILENAME");
    this.setColour(230);
    this.setTooltip("Takes a picture using a USB camera and saves it with the specified name.");
    this.setHelpUrl("");
  }
};
