import { GlobalContext } from "../context/context";
import withRouter from "../higherOrderFunc/withRouter";
import FlexContainer from "./FlexContainer";
import Image from "./Image";
import { fetchPhotos } from "../api/fetch";
import ImageCard from "./ImageCard";
import getPhotoList from "../api/getPhotoList";
import Error from "./Error";
import SearchTitle from "./SearchTitle";
import NoPhotos from "./NoPhotos";
import Loading from "./Loading ";

class FetchImageDisplay extends React.Component {
  static contextType = GlobalContext;

  render() {
    const { isLoading, data, error } = this.props;

    if (data?.length === 0) return <NoPhotos />;

    if (error) {
      return <Error />;
    }

    if (isLoading) return <Loading />;

    return (
      <>
        <div className=" w-100 vh-100  image-section">
          {data?.map(({ id, urls, alt_description }) => (
            <Image key={id} src={urls.thumb} />
          ))}
        </div>
      </>
    );
  }
}

export default fetchPhotos(withRouter(FetchImageDisplay), getPhotoList);
