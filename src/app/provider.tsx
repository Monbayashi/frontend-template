'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { useState } from 'react';

type ProviderPropsType = {
  /** ページのReactNode */
  children: React.ReactNode;
};

/**
 * tanstack-queryのプロバイダー
 * @param {ProviderPropsType} props
 * @returns
 */
export const Provider = ({ children }: ProviderPropsType) => {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
