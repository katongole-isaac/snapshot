import MsgContainer from "./MsgContainer";

class NoPhotos extends React.Component {
  state = {
    msg: "No Photos ",
  };

  render() {
    return (
      <>
        <MsgContainer msg={this.state.msg} />
      </>
    );
  }
}

export default NoPhotos;
