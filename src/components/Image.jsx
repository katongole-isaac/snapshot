class Image extends React.Component {
  render() {
    return (
      <>
        {/* <div className=" image-container  w-25 border border-danger   "> */}
        <div>

        <img
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt}
          className={` card-img-top  border-0 image flex-grow-1  ${this.props.styles}`}
        />
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Image;
