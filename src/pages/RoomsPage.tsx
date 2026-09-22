import { PageMeta } from '../components/common/PageMeta';
import { PageIntro } from '../components/common/Primitives';
import { RoomCard } from '../components/rooms/RoomCard';
import { rooms } from '../data/rooms';
import { useI18n } from '../i18n/I18nContext';

export default function RoomsPage() {
  const { t } = useI18n();
  return <><PageMeta page="rooms" image="/images/rooms/liqiu-detail-2.webp" /><div className="page shell"><PageIntro title={t('rooms.title')} text={t('rooms.intro')} /><div className="rooms-grid rooms-grid--page">{rooms.map((room, index) => <RoomCard key={room.id} room={room} priority={index < 2} />)}</div><p className="room-policy-note">{t('rooms.childNote')}</p></div></>;
}
