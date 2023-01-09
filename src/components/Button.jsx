

class Button extends React.Component {
  
  render() {
    return (
      <>
        <button className={`btn btn-sm  btn-primary ${this.props.styles}  `}>
          <div className="d-flex gap-1">
            {this.props.icon}
            {this.props.label}
          </div>
        </button>
      </>
    );
  }
}

export default Button;
