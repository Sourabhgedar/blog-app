export type Params<P> = P;
export type Headers<H> = H;
export type Body<B> = B;

export type QueryDefinition<P, H, B> = {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  params?: Params<P>;
  headers?: Headers<H>;
  body?: Body<B>;
};
