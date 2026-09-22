/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

type RouterLocation = { pathname: string; search: string; hash: string };
type RouterContextValue = {
  location: RouterLocation;
  navigate: (to: string, options?: { replace?: boolean }) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);
const navigationEvent = 'wiseadom:navigate';
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

function stripBase(pathname: string) {
  if (!basePath) return pathname;
  if (pathname === basePath) return '/';
  return pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) : pathname;
}

function withBase(pathname: string) {
  if (!basePath || pathname === basePath || pathname.startsWith(`${basePath}/`)) return pathname;
  return pathname.startsWith('/') ? `${basePath}${pathname}` : pathname;
}

function readLocation(): RouterLocation {
  return { pathname: stripBase(window.location.pathname), search: window.location.search, hash: window.location.hash };
}

export function BrowserRouter({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const sync = () => setLocation(readLocation());
    window.addEventListener('popstate', sync);
    window.addEventListener(navigationEvent, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(navigationEvent, sync);
    };
  }, []);

  const value = useMemo<RouterContextValue>(() => ({
    location,
    navigate(to, options) {
      const next = new URL(to, window.location.href);
      const method = options?.replace ? 'replaceState' : 'pushState';
      window.history[method](null, '', `${withBase(next.pathname)}${next.search}${next.hash}`);
      window.dispatchEvent(new Event(navigationEvent));
    },
  }), [location]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

function useRouter() {
  const router = useContext(RouterContext);
  if (!router) throw new Error('Router components must be rendered inside BrowserRouter.');
  return router;
}

export function useLocation() { return useRouter().location; }

export function useParams(): { locale?: string; slug?: string } {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  return { locale: parts[0], slug: parts[1] === 'rooms' ? parts[2] : undefined };
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: string };

export function Link({ to, onClick, target, children, ...props }: LinkProps) {
  const { navigate } = useRouter();
  const href = to.startsWith('/') ? withBase(to) : to;
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || (target && target !== '_self')) return;
    const next = new URL(href, window.location.href);
    if (next.origin !== window.location.origin) return;
    event.preventDefault();
    navigate(`${next.pathname}${next.search}${next.hash}`);
  };
  return <a {...props} href={href} target={target} onClick={handleClick}>{children}</a>;
}

export function NavLink({ to, end = false, className, ...props }: LinkProps & { end?: boolean }) {
  const { pathname } = useLocation();
  const targetPath = stripBase(new URL(to, window.location.href).pathname).replace(/\/$/, '') || '/';
  const currentPath = pathname.replace(/\/$/, '') || '/';
  const active = end ? currentPath === targetPath : currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  const classes = [className, active ? 'active' : ''].filter(Boolean).join(' ');
  return <Link {...props} to={to} className={classes} aria-current={active ? 'page' : undefined} />;
}

export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const { navigate } = useRouter();
  useEffect(() => navigate(to, { replace }), [navigate, replace, to]);
  return null;
}
