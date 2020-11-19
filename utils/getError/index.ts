import { BrowserEnum } from '../../enums/Browser.enum';
import { chromeImpl } from './impl/chrome.impl';
import { firefoxImpl } from './impl/firefox.impl';
import { LK_Error } from '../../interfaces/error-message.interface';

function index(s: string, browser: BrowserEnum): LK_Error {
  // TODO: 考虑使用更优的设计模式实现
  if (browser === BrowserEnum.CHROME) {
    return chromeImpl(s);
  } else {
    return firefoxImpl(s);
  }
}

export default index;
