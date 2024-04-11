'use client';
import { Footer } from '@/components/projects/main-layout/footer';
import { Header } from '@/components/projects/main-layout/header';
import { Sidebar } from '@/components/projects/main-layout/sidebar';
import { Modal } from '@/components/ui-parts/modal-window';
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
    <>
      <div className="container z-50 mx-auto px-4 lg:px-16">
        <Modal
          isOpen={true}
          onOk={() => console.log('ok')}
          onCancel={() => console.log('cancel')}
        />
      </div>
      <div
        id="page-container"
        className={`${disabled || 'lg:ps-64'} mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-white`}
      >
        <Sidebar routeId={props.routeId} disabled={disabled} toggleNav={toggleNav} />
        <Header disabled={disabled} toggleNav={toggleNav} />
        <main id="page-content" className="flex max-w-full flex-auto flex-col pt-20">
          <h1 className="container mx-auto p-4 text-2xl font-semibold lg:px-16 lg:py-8">
            汎用実績登録
          </h1>
        </main>
        <Footer />
      </div>
    </>
  );
};
