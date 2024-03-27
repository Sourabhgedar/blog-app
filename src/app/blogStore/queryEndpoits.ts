export const queries = {
    getBlogs: {
      query: () => ({
        url: `todos`,
        method: 'GET',
      }),
    },
  } as const;
  