import React from "react";
import SearchBar from "./SearchBar";
import "../css/App.css";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };
  render() {
    return (
      <div className="ui container top-margin ">
        <SearchBar onSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
