export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/funding',
    '/dashboard/listen',
    '/dashboard/agency_signup',
    '/dashboard/brand_list',
    '/dashboard/exit_strategy',
    '/dashboard/retail_sales',
    '/dashboard/creators_dash',
    '/dashboard/ambassadors',
    '/dashboard/storelists',
    '/dashboard/singleStoreInfo',
  ],
};
