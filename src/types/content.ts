export type Locale = 'zh' | 'en';
export type Localized = { zh: string; en: string };

export type RoomImage = {
  src: string;
  alt: Localized;
  width: number;
  height: number;
};

export type Room = {
  id: string;
  slug: Localized;
  name: Localized;
  nameEnLong: string;
  summary: Localized;
  area: number;
  maxGuests: number;
  bedWidth: number;
  bedCount: number;
  floor: number;
  bedroomCount?: number;
  livingRoomCount?: number;
  bathroomCount?: number;
  seaView: boolean;
  terrace: boolean;
  suite: boolean;
  images: RoomImage[];
  amenities: string[];
  featured: boolean;
};

export type GuideItem = {
  id: string;
  name: Localized;
  distance: Localized;
  travelTime?: Localized;
  category: 'arrival' | 'sight' | 'dining';
};
