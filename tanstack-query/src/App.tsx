import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { fetchPost } from "./util/fetch";
import { useCallback } from "react";
import { FetchGetAllPost, Post } from "./types/response";

function App() {
  const {
    data: TODO_ALL_DATA,
    // error,
    // status,
    // fetchStatus,
    // isLoading,
    // isFetching,
    // isError,
    // isStale,
    refetch,
  } = useQuery({
    queryKey: ["all-todos"],
    queryFn: fetchPost.GET_ALL,
    // gcTime: 1,
    // refetchOnMount: true, // refetchOnMount는 데이터가 stale 상태일 경우, mount마다 refetch를 실행하는 옵션이다.
    // staleTime: Infinity, // 1분,
    retry: 1,
    refetchOnWindowFocus: true,
    select: (data: FetchGetAllPost) => {
      // select로 반환될 데이터를 가공해서 data에 반환하는게 가능하다
      console.log("fetchAllPosts");
      return data.map((item: Post) => {
        return item.title;
      });
    },
  });
  const { data: POST } = useQuery({
    queryKey: ["todo", "1"],
    queryFn: async () => {
      return await fetchPost.GET("1");
    },
    gcTime: 1,
    refetchOnMount: true, // refetchOnMount는 데이터가 stale 상태일 경우, mount마다 refetch를 실행하는 옵션이다.
    staleTime: Infinity, // 1분,
    retry: 1,
    refetchOnWindowFocus: true,
  });

  const handleClickRefetch = useCallback(() => {
    refetch();
  }, [refetch]);
  return (
    <div>
      <h1>Tanstack query v5</h1>
      <button type="button" onClick={handleClickRefetch}>
        Refresh All Posts
      </button>

      <div style={{ display: "flex" }}>
        <div>
          <h1>/todo item names</h1>
          {TODO_ALL_DATA &&
            TODO_ALL_DATA.map((name: string, index: number) => (
              <div key={`${name}-${index}`}>{name}</div>
            ))}
        </div>
        <div style={{ width: "200px" }}>
          <h1>/todo/1 item</h1>
          {POST && <span>{JSON.stringify(POST)}</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
