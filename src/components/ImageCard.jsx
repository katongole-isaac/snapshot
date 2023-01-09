import Image from "./Image";

class ImageCard extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="card " style={{ width: "18rem" }}>
          <Image src={this.props.src} />
          <div className="card-body">
            <p className="card-text">{this.props.alt_description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ImageCard;
