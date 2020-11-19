import { BrowserEnum } from '../enums/Browser.enum';

/**
 * 以`at `开头
 * @param s
 */
function isChrome(s: string): boolean {
  let res = false;
  for (const line of s.split('\n')) {
    if (line.trim().startsWith('at ')) {
      res = true;
      break;
    }
  }
  return res;
}

export function getBrowserFlag(s: string): BrowserEnum {
  if (isChrome(s)) {
    return BrowserEnum.CHROME;
  } else {
    return BrowserEnum.FIREFOX;
  }
}
