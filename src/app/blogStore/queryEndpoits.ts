import { GetTopHeadlinesParams } from './Types/blogsTypes'
export const queries = {
  getBlogs: {
    query: ({ country, category, apiKey, page, pageSize }: GetTopHeadlinesParams) => ({
      url: `top-headlines`,
      method: 'GET',
      params: { country, category, apiKey, page, pageSize },
    }),
  },
} as const;
