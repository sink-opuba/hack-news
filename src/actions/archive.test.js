import { doArchiveStory } from "./archive";

describe("archive action creator", () => {
  it("should archive stories by id", () => {
    const id = "2";
    const expectedAction = {
      type: "STORY_ARCHIVE",
      id
    };
    expect(doArchiveStory(id)).toEqual(expectedAction);
  });
});
