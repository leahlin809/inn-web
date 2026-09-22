import type { Localized } from '../types/content';

const defaultBookingUrl = 'https://hotels.ctrip.com/hotels/114398984.html';
const mapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent('霞浦松港后岐村鹤鼻头89号海景花园21幢')}&view=map&src=wiseadom&callnative=1`;

export const siteSettings = {
  name: { zh: '霞浦·海明居民宿', en: 'wiseadom · Haimingju' } satisfies Localized,
  shortName: { zh: '海明居', en: 'wiseadom' } satisfies Localized,
  opened: 2023,
  address: {
    zh: '霞浦松港后岐村鹤鼻头89号海景花园21幢',
    en: 'Building 21, Seaview Garden, No. 89 Hebitou, Houqi Village, Songgang, Xiapu',
  } satisfies Localized,
  phone: '+86 182 5939 8787',
  wechat: 'Wiseadom336699',
  maintenanceEmail: 'leahlin809@gmail.com',
  social: { zh: '微信视频号：海明居溜达溜达的日子', en: 'WeChat Channels: 海明居溜达溜达的日子' } satisfies Localized,
  ctripHotelId: '114398984',
  bookingUrl: import.meta.env.VITE_BOOKING_URL || defaultBookingUrl,
  mapUrl,
  siteUrl: import.meta.env.VITE_SITE_URL || window.location.origin,
  facilities: [
    'seaViewRooms', 'garden', 'terrace', 'publicBeach', 'smartRoom', 'wifi',
    'parking', 'taxi', 'carRental', 'suites',
  ],
} as const;
