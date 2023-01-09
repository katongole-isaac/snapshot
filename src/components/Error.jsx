import MsgContainer from "./MsgContainer";

class Error extends React.Component {
  state = {
    errorMsg: "Rate Limit exceeded ! Try again later",
  };

  render() {
    return (
      <>
        <MsgContainer msg={this.state.errorMsg} />
      </>
    );
  }
}

export default Error;
