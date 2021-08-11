import { isDevMode } from '/@/utils/env';

// 緩存默認過期時間
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// 開啟緩存加密後，加密密鑰。採用aes加密
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_',
};

// 是否加密緩存，默認生產環境加密
export const enableStorageEncryption = !isDevMode();
