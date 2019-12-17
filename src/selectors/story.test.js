import { getReadableStories } from "./story";

describe("story selector", () => {
  it("should retrieve readable stories from store", () => {
    const storyState = {
      error: null,
      stories: [
        { objectID: "1", title: "foo" },
        { objectID: "2", title: "bar" }
      ]
    };
    const archiveState = ["1"];
    const state = { storyState, archiveState };
    const expectedReadableStories = [{ objectID: "2", title: "bar" }];
    expect(getReadableStories(state)).toEqual(expectedReadableStories);
  });
});
