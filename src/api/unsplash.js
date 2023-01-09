import { createApi } from "unsplash-js";

export  const unsplash = createApi({
  accessKey: process.env.REACT_APP_API_ACCESS_KEY,
});
