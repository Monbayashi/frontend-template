import { MainLayout } from '@/components/projects/main-layout';

export const ExamplePage1 = () => {
  return (
    <MainLayout routeId="example-page-1">
      <div>
        <h2 className="mb-1 text-2xl font-semibold">Example Page 1</h2>
        <h3 className="mb-8 text-sm font-medium text-slate-600">ここにいろいろ機能を書く予定</h3>
      </div>
    </MainLayout>
  );
};
