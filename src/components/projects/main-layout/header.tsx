import { MenuIcon } from '@/components/projects/main-layout/menu-icon';

type HeaderProps = {
  toggleNav: () => void;
  disabled: boolean;
};

export const Header = (props: HeaderProps) => {
  return (
    <header
      id="page-header"
      className={`${props.disabled ? '' : 'lg:pl-64'} fixed end-0 start-0 top-0 z-10 flex h-20 flex-none items-center border-b border-slate-100 bg-white/90 backdrop-blur-sm`}
    >
      <div className="container mx-auto flex justify-between px-4 lg:px-8">
        <div className="flex items-center">
          <div className="lg:block">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border-slate-100 bg-slate-100 px-2.5 py-2 font-semibold leading-6 text-slate-800 hover:border-slate-200 hover:bg-slate-200 hover:text-slate-800 focus:outline-none focus:ring focus:ring-indigo-500 active:border-slate-100 active:bg-slate-100"
              onClick={() => props.toggleNav()}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <span>〇〇〇〇　〇〇〇〇様</span>
        </div>
        {/* <!-- END Right Section --> */}
      </div>
    </header>
  );
};
