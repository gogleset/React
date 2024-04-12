import path from "../constant/path";
import { FetchGetAllPost, FetchGetPost } from "../types/response";

function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

export const fetchPost = {
  GET: async (id: string) => {
    return await request<FetchGetPost>(`${path.requestGetPath.post}${id}`);
  },
  GET_ALL: async () => {
    return await request<FetchGetAllPost>(path.requestGetPath.allPost);
  },
};
