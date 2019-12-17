import { doAddStories } from "./story";

describe("story action creator", () => {
  it("should add stories", () => {
    const stories = ["a", "b", "c"];
    const expectedAction = {
      type: "STORIES_ADD",
      stories
    };
    expect(doAddStories(stories)).toEqual(expectedAction);
  });
});
