import React from "react";

type QueryClientProps = {
  children: React.ReactNode;
};

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 서버상태를 관리하는 client 객체
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
// QueryClient를 사용하여 캐시와 상호 작용할 수 있다.
// QueryClient에서 모든 query 또는 mutation에 기본 옵션을 추가할 수 있으며, 종류가 상당하므로 공식 문서를 참고해보자

const MyQueryClientProvider = ({ children }: QueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools buttonPosition="top-right" />
      {children}
    </QueryClientProvider>
  );
};

// react-query를 사용하기 위해서는 QueryClientProvider를 최상단에서 감싸주고 QueryClient 인스턴스를 client props로 넣어 애플리케이션에 연결해야 한다.

export default MyQueryClientProvider;
