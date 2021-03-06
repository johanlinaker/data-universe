import { FlyControls } from 'three_examples/controls/FlyControls';
import { DeviceOrientationControls } from 'three_examples/controls/DeviceOrientationControls';

export function createFlyControls(camera, container) {
  const controls = new FlyControls(camera, container);

  controls.movementSpeed = 10.0;
  controls.rollSpeed = Math.PI / 24;
  controls.autoForward = false;
  controls.dragToLook = false;

  return controls;
}

export function createVRControls(camera, container) {
  const controls = new DeviceOrientationControls(camera, container);
  controls.connect();

  return controls;
}
