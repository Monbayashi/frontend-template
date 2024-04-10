'use client';

import { useState } from 'react';

export const Menu01 = () => {
  return <MenuGroup />;
};

type MenuGroupProps = {
  groupName: string;
  groupIcon: React.ReactNode;
  items: {
    id: string;
    href: string;
    menuTitle: string;
  }[];
};

const MenuGroup = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleMenuOpen = () => {
    setIsExpanded((pre) => !pre);
  };

  return (
    <li className="active" id="account-accordion">
      <button
        type="button"
        className="flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300"
        onClick={toggleMenuOpen}
        aria-expanded={isExpanded}
        aria-controls="account-accordion-content"
      >
        <UserIcon />
        <span>マスタ管理</span>
        {isExpanded ? <ExpandOpenIcon /> : <ExpandCloseIcon />}
      </button>

      <div
        id="account-accordion-content"
        className={`${isExpanded || 'hidden'} hs-accordion-content w-full overflow-hidden transition-[height] duration-300`}
        aria-labelledby="account-accordion"
      >
        <ul className="ps-2 pt-2">
          <li>
            <a
              className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
              href="#"
            >
              リンク1
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
              href="#"
            >
              リンク2
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
              href="#"
            >
              リンク3
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

const UserIcon = () => (
  <svg
    className="size-5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="15" r="3"></circle>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M10 15H6a4 4 0 0 0-4 4v2"></path>
    <path d="m21.7 16.4-.9-.3"></path>
    <path d="m15.2 13.9-.9-.3"></path>
    <path d="m16.6 18.7.3-.9"></path>
    <path d="m19.1 12.2.3-.9"></path>
    <path d="m19.6 18.7-.4-1"></path>
    <path d="m16.8 12.3-.4-1"></path>
    <path d="m14.3 16.6 1-.4"></path>
    <path d="m20.7 13.8 1-.4"></path>
  </svg>
);

const ExpandOpenIcon = () => (
  <svg
    className="ms-auto size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6"></path>
  </svg>
);

const ExpandCloseIcon = () => (
  <svg
    className="ms-auto size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);
