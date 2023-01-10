import * as config from "../config/constants";
import randomPageNumber from "../utils/randomPageNumber";
import { unsplash } from "./unsplash";
export default function (searchTerm, signal) {
  
  //signal (arg)  => is used for aborting requests
  const photosOptions = {
    page: randomPageNumber(),
    perPage: 24,
  };
  const emptyStr = /^\s+$/;

  const queryOptions = {
    query: searchTerm.trim() ,
    page: 1,
    perPage: 20,
    color: config.COLORS[randomPageNumber(config.COLORS.length)],
    orientation: "portrait",
  };

  if (typeof searchTerm === "undefined" || searchTerm === "" || emptyStr.test(searchTerm) )
    return unsplash.photos.list(photosOptions, {
      signal,
    });

  return unsplash.search.getPhotos(queryOptions, {
    signal,
  });
}
