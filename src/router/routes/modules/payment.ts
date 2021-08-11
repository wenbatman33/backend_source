import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const payment: AppRouteModule = {
  path: '/payment',
  name: 'Payment',
  component: LAYOUT,
  redirect: '/payment/index',
  meta: {
    icon: 'la:money-bill',
    title: t('routes.payment.title'),
    orderNo: 11,
  },
  children: [
    {
      path: 'index',
      name: 'PaymentPage',
      component: () => import('/@/views/sys/payment/index.vue'),
      meta: {
        title: t('routes.payment.paymentInfo'),
        hideMenu: false,
      },
    },
  ],
};

export default payment;
