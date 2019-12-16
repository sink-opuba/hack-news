import React, { useState } from "react";
import { connect } from "react-redux"
import { Button } from "./Button";
import { doFetchStories } from "../actions/story";

const SearchStories = ({ onFetchStories }) => {
  const [query, setQuery] = useState("");
  const onChange = event => {
    const { value } = event.target;
    setQuery(value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (query) {
      onFetchStories(query);
      setQuery("");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={query} onChange={onChange} />
      <Button type="submit">Search</Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query))
});

export default connect(null, mapDispatchToProps)(SearchStories);
