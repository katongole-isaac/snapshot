export default class extends React.Component {
  render() {
    return (
      <>
        <div className=" p-4 my-3 d-flex justify-content-center  ">
          {
            <span className="text-dark" style={{ fontSize: "1.3em"  }}>
              {this.props.msg}
            </span>
          }
        </div>
      </>
    );
  }
}
