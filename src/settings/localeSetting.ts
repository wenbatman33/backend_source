import type { DropMenu } from '../components/Dropdown';
import type { LocaleSetting, LocaleType } from '/#/config';

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: 'zh_CN',
  EN_US: 'en',
};

export const localeSetting: LocaleSetting = {
  // 是否顯示語言選擇器
  showPicker: true,
  // 當前語言
  locale: LOCALE.ZH_CN,
  // 默認語言
  fallback: LOCALE.ZH_CN,
  // 允許的語言
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};

// 語言列表
export const localeList: DropMenu[] = [
  {
    text: '簡體中文',
    event: LOCALE.ZH_CN,
  },
  {
    text: 'English',
    event: LOCALE.EN_US,
  },
];
