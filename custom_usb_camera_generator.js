Blockly.Python['usb_camera_take_picture'] = function(block) {
  var filename = block.getFieldValue('FILENAME');
  var code = `
import cv2

def take_picture(filename):
    cap = cv2.VideoCapture(0)  # Open the USB camera
    if not cap.isOpened():
        raise Exception("Could not open USB camera")
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(filename, frame)
    else:
        raise Exception("Failed to capture image")
    cap.release()

take_picture("${filename}")
`;
  return code;
};
