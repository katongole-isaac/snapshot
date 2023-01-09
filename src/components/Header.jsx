import FlexContainer from "./FlexContainer";

class Header extends React.Component {
  render() {
    return (
      <>
        <FlexContainer styles=" align-items-center p-4 w-100">
          <h1 className="font-weight-bolder title-header">SnapShot</h1>
        </FlexContainer>
      </>
    );
  }
}

export default Header;
