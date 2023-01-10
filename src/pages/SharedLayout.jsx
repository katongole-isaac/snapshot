import FetchImageDisplay from "../components/FetchImageDisplay";
import Header from "../components/Header";
import UserControls from "../components/UserControls";
import UserInput from "../components/UserInput";
import React from "react";
import { GlobalContext } from "../context/context";
import { Outlet } from "react-router-dom";
import FlexContainer from "../components/FlexContainer";
import SearchTitle from "../components/SearchTitle";

const rootPath = "/";

class SharedLayout extends React.Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      fetchImages: true, // used to trigger fetch
      displayName: "",
    };
    this.setState = this.setState.bind(this);
  }

  handleChange = (e) => {
    //Only allow those characters.

    const searchTermPattern = /^[a-zA-Z\-_\d@\s]*$/i;

    if (!searchTermPattern.test(e.target.value)) return;

    this.setState({ searchTerm: e.target.value });
  };

  //when there is a change in fetchImages , fetch
  handleSearchClick = () => {
    this.setState((prev) => ({
      ...prev,
      fetchImages: !prev.fetchImages,
      displayName: prev.searchTerm,
    }));
  };

  render() {
    return (
      <>
        <GlobalContext.Provider
          value={{
            searchTerm: this.state.searchTerm,
            setState: this.setState,
            fetchImages: this.state.fetchImages,
            handleChange: this.handleChange,
            handleSearchClick: this.handleSearchClick,
            displayName: this.state.displayName,
          }}
        >
          <div className="container-fluid app">
            <div
              className="container-fluid sharedLayout m-auto
            
        "
            >
              <Header />
              <UserInput />
              {/* <UserControls /> */}
              {window.location.pathname === rootPath ? (
                <>
                  <FlexContainer styles="p-4 m-2 w-100 image-header ">
                    <SearchTitle />
                  </FlexContainer>
                  <FetchImageDisplay />
                </>
              ) : (
                <Outlet />
              )}
            </div>
          </div>
        </GlobalContext.Provider>
      </>
    );
  }
}

export default SharedLayout;
