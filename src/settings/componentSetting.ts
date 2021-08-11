// 用於配置某些組件的常規配置，而無需修改組件
import type { SorterResult } from '../components/Table';

export default {
  // 表格配置
  table: {
    // 表格接口請求通用配置，可在組件prop覆蓋
    // 支持 xxx.xxx.xxx格式
    fetchSetting: {
      // 傳給後臺的當前頁字段
      pageField: 'page',
      // 傳給後臺的每頁顯示多少條的字段
      sizeField: 'pageSize',
      // 接口返回表格數據的字段
      listField: 'items',
      // 接口返回表格總數的字段
      totalField: 'total',
    },
    // 可選的分頁選項
    pageSizeOptions: ['10', '50', '80', '100'],
    //默認每頁顯示多少條
    defaultPageSize: 10,
    // 默認排序方法
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      return {
        // 排序字段
        field,
        // 排序方式 asc/desc
        order,
      };
    },
    /// 自定義過濾方法
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  // 滾動組件配置
  scrollbar: {
    // 是否使用原生滾動樣式
    // 開啟後，菜單，彈窗，抽屜會使用原生滾動條組件
    native: false,
  },
};
