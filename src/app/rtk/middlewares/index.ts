/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogApiSlice } from '../mainQuery';
const rtkMiddleware = [blogApiSlice.middleware];
export const storeMiddleware = (defaultMiddleWares: any, extraMiddleWares: any) => {
  return defaultMiddleWares({ serializableCheck: false })
    .concat(rtkMiddleware)
    .concat(extraMiddleWares)
}
