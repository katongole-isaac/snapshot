import Button from "./Button";
import FlexContainer from "./FlexContainer";

class UserControls extends React.Component {
  state = {};
  render() {
    return (
      <>
        <FlexContainer styles="m-auto p-4 gap-4">
          <Button label="Mountains"  />
          <Button label="Beach" />
          <Button label="Glass" />
          <Button label="label" />
        </FlexContainer>
      </>
    );
  }
}

export default UserControls;
