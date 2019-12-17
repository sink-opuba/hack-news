import archiveReducer from "./archive";
import deepFreeze from "deep-freeze";

describe("archive story", () => {
  it("should add story to archive story state", () => {
    const action = {
      type: "STORY_ARCHIVE",
      id: "2"
    };
    const prevState = [];
    deepFreeze(prevState);
    const newState = archiveReducer(prevState, action);
    expect(newState).toContain(action.id);
  });
});
