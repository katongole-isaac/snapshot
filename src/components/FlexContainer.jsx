class FlexContainer extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className={`d-flex justify-content-center  ${this.props.styles}`}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default FlexContainer;
