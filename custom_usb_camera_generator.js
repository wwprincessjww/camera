Blockly.Python['usb_camera_take_picture'] = function(block) {
  var text_filename = block.getFieldValue('FILENAME');
  var code = `take_picture_with_usb_camera('${text_filename}')\n`;
  return code;
};
