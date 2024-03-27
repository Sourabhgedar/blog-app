import { blogApiSlice } from "../rtk/mainQuery";
import { queries } from "./queryEndpoits";

const blogApiEnhancedSlice = blogApiSlice.enhanceEndpoints({});
import { BlogApiResponse } from "./Types/blogsTypes";

const blogListApiSlice = blogApiEnhancedSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogList: builder.query<BlogApiResponse[], void>({
      query: queries.getBlogs.query, 
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetBlogListQuery,
} = blogListApiSlice;

export default blogListApiSlice;
