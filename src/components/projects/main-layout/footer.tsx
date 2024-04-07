export const Footer = () => {
  return (
    <footer id="page-footer" className="flex grow-0 items-center border-t border-slate-100">
      <div className="container mx-auto flex flex-col space-y-2 px-4 py-6 text-center text-sm font-medium text-slate-600 md:flex-row md:justify-between md:space-y-0 md:text-start lg:px-8 xl:max-w-7xl">
        <div>
          © <span className="font-semibold">Santcare</span>
        </div>
        <div className="inline-flex items-center justify-center">
          Created by
          <span className="pl-2 font-medium text-indigo-600 transition hover:text-indigo-700">
            ケアテック開発事業部
          </span>
        </div>
      </div>
    </footer>
  );
};
