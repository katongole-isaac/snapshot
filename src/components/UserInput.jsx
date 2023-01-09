import { GlobalContext } from "../context/context";
import FlexContainer from "./FlexContainer";

class UserInput extends React.Component {
  static contextType = GlobalContext; // consuming the value of context i.e GlobalContext

  render() {
    let { searchTerm, handleChange, handleSearchClick } = this.context;
    return (
      <>
        <div className="  d-flex">
          <div className=" align-items-center d-flex  shadow p-2 bg-white gap-1 rounded user-input-container">
            <input
              autoComplete="off"
              type="text"
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => handleChange(e)}
              className="form-control  shadow-none border-0"
            />
            <div className="d-flex justify-content-center">
              <span
                className={` material-symbols-outlined search  ${
                  searchTerm ? " search-active" : ""
                }`}
                onClick={handleSearchClick}
              >
                search
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserInput;
