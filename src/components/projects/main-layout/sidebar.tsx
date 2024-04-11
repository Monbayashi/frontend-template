import { Menu01 } from '@/components/projects/main-layout/menu-01';
import { routes, routesKeyType } from '@/utils/routes';
import Image from 'next/image';
import Link from 'next/link';

type SidebarProps = {
  routeId: routesKeyType;
  disabled: boolean;
  toggleNav: () => void;
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <nav
      id="page-sidebar"
      className={`${props.disabled ? 'hidden' : ''} fixed inset-y-0 start-0 z-20 flex h-full w-80 flex-col overflow-auto bg-slate-100 transition-transform duration-500 ease-out lg:w-64 lg:translate-x-0`}
      aria-label="Main Sidebar Navigation"
    >
      <div className="flex h-20 w-full flex-none items-center justify-between px-8">
        <a className="span-medium inline-flex items-center gap-2 text-lg tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100">
          <Image
            src="/saint-care.svg"
            alt="saint-care"
            className="mx-auto"
            height={20}
            width={20}
            priority
          />
          <span>SantCare Chant</span>
        </a>
        <div className="lg:hidden">
          <button
            type="button"
            className="flex size-10 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400"
            onClick={() => props.toggleNav()}
          >
            <svg
              className="hi-solid hi-x -mx-1 inline-block size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- END Sidebar Header --> */}

      {/* <!-- Main Navigation --> */}
      <div className="flex grow flex-col">
        <ul className="w-full grow space-y-1.5 px-8 py-4">
          {Object.keys(routes).map((key) => {
            const value = routes[key as routesKeyType];
            const isActived = value.id === props.routeId;
            const className =
              'inline-flex items-center gap-2 rounded-lg p-2 text-md span-semibold transition';
            return isActived ? (
              <li key={value.id}>
                <Link href={value.href} className={`${className} bg-indigo-100 text-indigo-900`}>
                  <span>{value.title}</span>
                </Link>
              </li>
            ) : (
              <li key={value.id}>
                <Link
                  href={value.href}
                  className={`${className} text-slate-600 hover:bg-indigo-100 hover:text-indigo-900`}
                >
                  <span>{value.title}</span>
                </Link>
              </li>
            );
          })}
          <li
            key="001"
            className="span-semibold inline-flex items-center gap-2 rounded-lg p-2 text-lg transition"
          >
            <span>BI・経営データ</span>
          </li>
          <Menu01 />
          <Menu01 />
        </ul>
        <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <ul className="w-full space-y-1.5 px-8 py-4">
          <li>
            <a className="text-md span-semibold inline-flex items-center gap-2 rounded-lg p-2 text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900">
              <span>Setting</span>
            </a>
          </li>
          <li>
            <Link
              href="/login"
              className="text-md span-semibold inline-flex items-center gap-2 rounded-lg p-2 text-slate-600 transition hover:bg-indigo-100 hover:text-indigo-900"
            >
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- END Main Navigation --> */}
    </nav>
  );
};
