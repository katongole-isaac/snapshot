import MsgContainer from "./MsgContainer";

class Error extends React.Component {
  state = {
    networkError: "Failed to fetch",
    errorMsg: "Rate Limit exceeded ! Try again later",
  };

  render() {
    if (this.props.error instanceof TypeError)
      return <MsgContainer msg={this.state.networkError} />;

    return <MsgContainer msg={this.state.errorMsg} />;
  }
}

export default Error;
