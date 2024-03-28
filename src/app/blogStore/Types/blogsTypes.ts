  interface ArticleSource {
    id: string | null;
    name: string;
  }
  interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }
  
  export interface BlogApiResponse {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  
  export interface GetTopHeadlinesParams {
    country: string;
    category: string;
    apiKey: string | undefined;
    page: number;
    pageSize: number;
  }