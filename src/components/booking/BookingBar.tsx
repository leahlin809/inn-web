import { useMemo, useState } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { siteSettings } from '../../data/site';
import { Icon } from '../common/Icon';

const isoToday = () => new Date().toISOString().slice(0, 10);
const addDays = (date: string, days: number) => {
  const value = new Date(`${date}T12:00:00`); value.setDate(value.getDate() + days); return value.toISOString().slice(0, 10);
};

export function BookingBar({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [open, setOpen] = useState(false);
  const transferId = `booking-transfer-${compact ? 'compact' : 'hero'}`;
  const guestSummary = useMemo(() => `${adults + children} ${t('booking.peopleUnit')} · ${roomCount} ${t('booking.roomUnit')}`, [adults, children, roomCount, t]);

  const counter = (label: string, value: number, setValue: (next: number) => void, min: number, max: number) => <div className="guest-row"><span>{label}</span><div><button type="button" onClick={() => setValue(Math.max(min, value - 1))} disabled={value <= min} aria-label={`${label} -`}><Icon name="minus" /></button><output>{value}</output><button type="button" onClick={() => setValue(Math.min(max, value + 1))} disabled={value >= max} aria-label={`${label} +`}><Icon name="plus" /></button></div></div>;

  return <form className={`booking-bar${compact ? ' booking-bar--compact' : ''}`} onSubmit={(event) => event.preventDefault()} noValidate>
    <div className="date-field"><label htmlFor={`checkin-${compact}`}>{t('booking.checkIn')}</label><input id={`checkin-${compact}`} type="date" min={isoToday()} value={checkIn} onChange={(event) => { const value = event.target.value; setCheckIn(value); if (checkOut && checkOut <= value) setCheckOut(addDays(value, 1)); }} /></div>
    <div className="date-field"><label htmlFor={`checkout-${compact}`}>{t('booking.checkOut')}</label><input id={`checkout-${compact}`} type="date" min={checkIn ? addDays(checkIn, 1) : isoToday()} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} /></div>
    <div className="guest-field"><span>{t('booking.guests')}</span><button className="guest-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>{guestSummary}</button>
      {open && <div className="guest-popover">{counter(t('booking.adults'), adults, setAdults, 1, 8)}{counter(t('booking.children'), children, setChildren, 0, 4)}{counter(t('booking.roomCount'), roomCount, setRoomCount, 1, 6)}</div>}
    </div>
    <a className="booking-submit" href={siteSettings.bookingUrl} target="_blank" rel="noreferrer" aria-describedby={transferId}>{t('booking.search')}<Icon name="external" /></a>
    <p className="booking-transfer-note" id={transferId}>{t('booking.transferNote')}</p>
  </form>;
}
