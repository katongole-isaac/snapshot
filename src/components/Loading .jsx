import MsgContainer from "./MsgContainer";

export default class extends React.Component {
  render() {
    let msg = (
      <>
        <div className="spinner-grow spinner-grow-sm " role="status"></div>
      </>
    );
    return (
      <>
        <MsgContainer msg={msg} />
      </>
    );
  }
}
