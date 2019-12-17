import storyReducer from "./story";
import deepFreeze from "deep-freeze";

describe("story reducer", () => {
  it("should add story to the story state", () => {
    const stories = ["a", "b", "c"];
    const action = {
      type: "STORIES_ADD",
      stories
    };

    const prevState = { stories: [], error: null };
    deepFreeze(prevState);
    const expectedNewState = { stories, error: null };
    const newState = storyReducer(prevState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it("should set error object to null when stories are successfully added to story state", () => {
    const stories = ["a", "b", "c"];
    const action = {
      type: "STORIES_ADD",
      stories
    };
    const prevState = { stories: [], error: null };
    expect(storyReducer(prevState, action).error).toBeNull();
  });

  it("should set an error object when an error occurs", () => {
    const error = {
      message: "An error occurred"
    };
    const action = {
      type: "STORIES_FETCH_ERROR",
      error
    };
    const prevState = { stories: [], error: null };
    const newState = storyReducer(prevState, action);
    expect(newState.error).not.toBeNull();
  });
});
