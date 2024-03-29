
export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
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
  q:string
}