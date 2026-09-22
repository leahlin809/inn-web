import type { Room } from '../types/content';
import { assetPath } from '../utils/assetPath';

const image = (src: string, zh: string, en: string, width = 200, height = 200) => ({
  src: assetPath(src), alt: { zh, en }, width, height,
});

export const rooms: Room[] = [
  {
    id: 'xiaoman', slug: { zh: 'xiaoman', en: 'xiaoman' }, name: { zh: '小满', en: 'Xiaoman' },
    nameEnLong: 'Lesser Fullness of Grain',
    summary: { zh: '一层双人房，推门即达露台。', en: 'A first-floor double room opening onto a terrace.' },
    area: 15, maxGuests: 2, bedWidth: 1.5, bedCount: 1, floor: 1,
    seaView: false, terrace: true, suite: false,
    images: [
      image('/images/rooms/xiaoman-detail-1.jpg', '小满客房与床铺', 'Xiaoman guest room and bed', 1179, 857),
      image('/images/rooms/xiaoman-detail-2.jpg', '小满客房茶饮细节', 'Tea served in the Xiaoman guest room', 1440, 1920),
    ],
    amenities: ['terrace', 'smartRoom', 'wifi'], featured: false,
  },
  {
    id: 'xiaoxue', slug: { zh: 'xiaoxue', en: 'xiaoxue' }, name: { zh: '小雪', en: 'Xiaoxue' },
    nameEnLong: 'Lesser Snow',
    summary: { zh: '位于二层的安静双人房，带独立露台。', en: 'A quiet second-floor double room with a private terrace.' },
    area: 15, maxGuests: 2, bedWidth: 1.5, bedCount: 1, floor: 2,
    seaView: false, terrace: true, suite: false,
    images: [
      image('/images/rooms/xiaoxue-detail-2.webp', '小雪客房全景', 'Wide view of Xiaoxue guest room', 1920, 1080),
      image('/images/rooms/xiaoxue-detail-1.webp', '小雪房门与室内陈设', 'Xiaoxue doorway and interior details', 1920, 1080),
    ], amenities: ['terrace', 'smartRoom', 'wifi'], featured: false,
  },
  {
    id: 'guyu', slug: { zh: 'guyu', en: 'guyu' }, name: { zh: '谷雨', en: 'Guyu' },
    nameEnLong: 'Grain Rain',
    summary: { zh: '一层大床房，25㎡空间连接露台。', en: 'A 25 m² first-floor king room connected to a terrace.' },
    area: 25, maxGuests: 2, bedWidth: 1.8, bedCount: 1, floor: 1,
    seaView: false, terrace: true, suite: false,
    images: [
      image('/images/rooms/guyu-detail-1.jpg', '谷雨客房与大床', 'Guyu room and king bed', 1179, 863),
      image('/images/rooms/guyu-detail-2.jpg', '谷雨客房花艺陈设', 'Floral arrangement in the Guyu guest room', 1440, 1080),
    ],
    amenities: ['terrace', 'smartRoom', 'wifi'], featured: false,
  },
  {
    id: 'bailu', slug: { zh: 'bailu', en: 'bailu' }, name: { zh: '白露', en: 'Bailu' },
    nameEnLong: 'White Dew',
    summary: { zh: '二层30㎡大床房，艺术陈设与露台相连。', en: 'A 30 m² second-floor king room with art and a terrace.' },
    area: 30, maxGuests: 2, bedWidth: 1.8, bedCount: 1, floor: 2,
    seaView: false, terrace: true, suite: false,
    images: [
      image('/images/rooms/bailu-detail-2.webp', '白露客房床铺与艺术画作', 'Bailu bed and artwork', 1920, 1080),
      image('/images/rooms/bailu-detail-1.webp', '白露客房入口与艺术陈设', 'Bailu entrance and art details', 1920, 1080),
    ], amenities: ['terrace', 'smartRoom', 'wifi'], featured: false,
  },
  {
    id: 'liqiu', slug: { zh: 'liqiu-haijing-taofang', en: 'liqiu-seaview-suite' },
    name: { zh: '立秋海景套房', en: 'Liqiu Seaview Suite' }, nameEnLong: 'The Beginning of Autumn',
    summary: { zh: '一室一厅海景套房，45㎡空间面向海面。', en: 'A 45 m² one-bedroom seaview suite facing the coast.' },
    area: 45, maxGuests: 2, bedWidth: 1.8, bedCount: 1, floor: 2,
    bedroomCount: 1, livingRoomCount: 1, bathroomCount: 1,
    seaView: true, terrace: true, suite: true,
    images: [
      image('/images/rooms/liqiu-detail-2.webp', '立秋海景套房卧室', 'Liqiu Seaview Suite bedroom', 1920, 1080),
      image('/images/rooms/liqiu-detail-1.webp', '立秋海景套房入口与艺术陈设', 'Liqiu suite entry and artwork', 1920, 1080),
    ], amenities: ['seaView', 'terrace', 'suite', 'smartRoom', 'wifi'], featured: true,
  },
  {
    id: 'lixia', slug: { zh: 'lixia-haijing-taofang', en: 'lixia-seaview-suite' },
    name: { zh: '立夏海景套房', en: 'Lixia Seaview Suite' }, nameEnLong: 'The Beginning of Summer',
    summary: { zh: '一室一厅海景套房，在二层露台远望岛屿。', en: 'A one-bedroom seaview suite with island views from its second-floor terrace.' },
    area: 45, maxGuests: 2, bedWidth: 1.8, bedCount: 1, floor: 2,
    bedroomCount: 1, livingRoomCount: 1, bathroomCount: 1,
    seaView: true, terrace: true, suite: true,
    images: [
      image('/images/rooms/lixia-detail-1.jpg', '立夏海景套房庭院外观', 'Garden exterior of Lixia Seaview Suite', 1440, 1080),
      image('/images/rooms/lixia-detail-2.jpg', '立夏海景套房远眺海面', 'Sea view from Lixia Seaview Suite', 1080, 1440),
    ],
    amenities: ['seaView', 'terrace', 'suite', 'smartRoom', 'wifi'], featured: true,
  },
];

export function findRoom(locale: 'zh' | 'en', slug: string) {
  return rooms.find((room) => room.slug[locale] === slug || room.id === slug);
}
