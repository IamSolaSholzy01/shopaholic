/* @flow */
import type { PlainStyle, Style } from './Types';

// currently used to initiate the velocity style object to 0
export default function mapToZero(obj: Style | PlainStyle): PlainStyle {
  let ret: PlainStyle = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key as keyof PlainStyle] = 0;
    }
  }
  return ret;
}