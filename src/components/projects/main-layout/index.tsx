'use client';
import { Footer } from '@/components/projects/main-layout/footer';
import { Header } from '@/components/projects/main-layout/header';
import { Sidebar } from '@/components/projects/main-layout/sidebar';
import { routesKeyType } from '@/utils/routes';
import { useState } from 'react';

type MainLayoutProps = {
  routeId: routesKeyType;
  children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  const [disabled, setDisabled] = useState(false);
  const toggleNav = () => {
    setDisabled((pre) => !pre);
    console.log(disabled);
  };
  return (
    <div
      id="page-container"
      className={`${disabled || 'lg:ps-64'} mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-white`}
    >
      <Sidebar routeId={props.routeId} disabled={disabled} toggleNav={toggleNav} />
      <Header disabled={disabled} toggleNav={toggleNav} />
      <main id="page-content" className="flex max-w-full flex-auto flex-col pt-20">
        <div className="container mx-auto space-y-10 px-4 py-8 lg:space-y-16 lg:px-8 lg:py-12 xl:max-w-7xl">
          {/* <!-- Quick Stats --> */}
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
