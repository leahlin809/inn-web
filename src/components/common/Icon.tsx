type IconName = 'menu' | 'close' | 'arrow' | 'chevronLeft' | 'chevronRight' | 'minus' | 'plus' | 'external' | 'phone' | 'pin';

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    menu: <><path d="M3 7h18M3 17h18" /></>,
    close: <><path d="m5 5 14 14M19 5 5 19" /></>,
    arrow: <><path d="M4 12h15M14 7l5 5-5 5" /></>,
    chevronLeft: <path d="m15 5-7 7 7 7" />,
    chevronRight: <path d="m9 5 7 7-7 7" />,
    minus: <path d="M5 12h14" />,
    plus: <><path d="M5 12h14M12 5v14" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6H5V6h6" /></>,
    phone: <path d="M7 4 4 7c1.7 6.3 6.7 11.3 13 13l3-3-4-4-2.4 2.4a15 15 0 0 1-5-5L11 8Z" />,
    pin: <><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
