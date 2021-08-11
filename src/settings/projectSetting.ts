import type { ProjectConfig } from '/#/config';
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';
import { SIDE_BAR_BG_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST } from './designSetting';
import { primaryColor } from '../../build/config/themeConfig';

// ! 改動後需要清空瀏覽器緩存
const setting: ProjectConfig = {
  // 是否顯示SettingButton
  showSettingButton: false,
  // 是否顯示主題切換按鈕
  showDarkModeToggle: true,
  // 設置按鈕位置 可選項
  // SettingButtonPositionEnum.AUTO: 自動選擇
  // SettingButtonPositionEnum.HEADER: 位於頭部
  // SettingButtonPositionEnum.FIXED: 固定在右側
  settingButtonPosition: SettingButtonPositionEnum.AUTO,
  // 權限模式,默認前端角色權限模式
  // ROUTE_MAPPING: 前端模式（菜單由路由生成，默認）
  // ROLE：前端模式（菜單路由分開）
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  // 權限緩存存放位置。默認存放於localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,
  // 會話超時處理方案
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳轉到登錄頁
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登錄彈窗，覆蓋當前頁面
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
  // 項目主題色
  themeColor: primaryColor,
  // 網站灰色模式，用於可能悼念的日期開啟
  grayMode: false,
  // 色弱模式
  colorWeak: false,
  // 是否取消菜單,頂部,多標籤頁顯示, 用於可能內嵌在別的系統內
  fullContent: false,
  // 主題內容寬度
  contentMode: ContentEnum.FULL,
  // 是否顯示logo
  showLogo: true,
  // 是否顯示底部信息 copyright
  showFooter: false,
  // 頭部配置
  headerSetting: {
    // 背景色
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    // 固定頭部
    fixed: true,
    // 是否顯示頂部
    show: true,
    // 主題
    theme: ThemeEnum.LIGHT,
    // 開啟鎖屏功能
    useLockPage: true,
    /// 顯示全屏按鈕
    showFullScreen: false,
    // 顯示文檔按鈕
    showDoc: false,
    // 顯示消息中心按鈕
    showNotice: true,
    // 顯示菜單搜索按鈕
    showSearch: true,
  },

  // 菜單配置
  menuSetting: {
    // 背景色
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    // 是否固定住菜單
    fixed: true,
    // 菜單摺疊
    collapsed: false,
    // 摺疊菜單時候是否顯示菜單名
    collapsedShowTitle: false,
    // 是否可拖拽
    canDrag: false,
    // 是否顯示
    show: true,
    // Whether to show dom
    hidden: false,
    // 菜單寬度
    menuWidth: 210,
    // 菜單模式
    mode: MenuModeEnum.INLINE,
    // 菜單類型
    type: MenuTypeEnum.SIDEBAR,
    // 菜單主題
    theme: ThemeEnum.DARK,
    // 分割菜單
    split: false,
    // 頂部菜單佈局
    topMenuAlign: 'center',
    // 摺疊觸發器的位置
    trigger: TriggerEnum.HEADER,
    // 手風琴模式，只展示一個菜單
    accordion: true,
    // 在路由切換的時候關閉左側混合菜單展開菜單
    closeMixSidebarOnChange: false,
    // 左側混合菜單模塊切換觸發方式 ‘click’ |'hover'
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // 是否固定左側混合菜單
    mixSideFixed: false,
  },

  // 多標籤
  multiTabsSetting: {
    // 刷新後是否保留已經打開的標籤頁
    cache: false,
    // 開啟
    show: true,
    // 是否可以拖拽
    canDrag: true,
    // 開啟快速操作
    showQuick: true,
    // 是否顯示刷新那妞
    showRedo: true,
    // 是否顯示摺疊按鈕
    showFold: true,
  },

  // 動畫配置
  transitionSetting: {
    //  是否開啟切換動畫
    enable: true,
    // 動畫名
    basicTransition: RouterTransitionEnum.FADE_SIDE,
    // 是否打開頁面切換loading
    openPageLoading: true,
    //是否打開頁面切換頂部進度條
    openNProgress: false,
  },
  // 是否開啟KeepAlive緩存  開發時候最好關閉,不然每次都需要清除緩存
  openKeepAlive: true,
  // 自動鎖屏時間，為0不鎖屏。 單位分鐘 默認1個小時
  lockTime: 0,
  // 顯示麵包屑
  showBreadCrumb: true,
  // 顯示麵包屑圖標
  showBreadCrumbIcon: false,

  // 是否使用全局錯誤捕獲
  useErrorHandle: false,

  // 是否開啟回到頂部
  useOpenBackTop: true,

  //  是否可以嵌入iframe頁面
  canEmbedIFramePage: true,

  // 切換界面的時候是否刪除未關閉的message及notify
  closeMessageOnSwitch: true,

  // 切換界面的時候是否取消已經發送但是未響應的http請求。
  // 如果開啟,想對單獨接口覆蓋。可以在單獨接口設置
  removeAllHttpPending: false,
};

export default setting;
