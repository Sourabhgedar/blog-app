import { GetTopHeadlinesParams } from './Types/blogsTypes'
export const queries = {
  getBlogs: {
    query: (queryParams: GetTopHeadlinesParams) => ({
      url: `top-headlines`,
      method: 'GET',
      params: queryParams,
    }),
  },
} as const;
