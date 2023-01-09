import { useContext, useEffect, useState } from "react";
import * as config from "../config/constants";
import { GlobalContext } from "../context/context";

export const fetchPhotos = (WrappedComponent, func) => {
  const fetchUnsplashPhotos = async (setPhotos, searchTerm) => {
    const fetchContoller = new AbortController();
    const { signal } = fetchContoller;

    let timerID = setTimeout(
      () => fetchContoller.abort(),
      config.REQUEST_TIMEOUT
    );

    try {
      setPhotos((prev) => ({ ...prev, isLoading: true }));

      //provide a custom func() for fetching photos
      const result = (await func(searchTerm, signal)).response;

      // if we get the results if time dont run the abort operation
      clearTimeout(timerID);

      setPhotos((prev) => ({ ...prev, data: result?.results }));

      setPhotos((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setPhotos((prev) => ({
        ...prev,
        error,
      }));
    }
  };

  return (props) => {
    const [photos, setPhotos] = useState({
      isLoading: false,
      data: null,
      error: null,
    });

    const { searchTerm, fetchImages } = useContext(GlobalContext);

    useEffect(() => {
      fetchUnsplashPhotos(setPhotos, searchTerm);
    }, [fetchImages]);

    return (
      <WrappedComponent
        {...props}
        isLoading={photos.isLoading}
        error={photos.error}
        data={photos.data}
      />
    );
  };
};
