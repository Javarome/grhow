import {TimeZone} from "./time/TimeZone"

describe("s", () => {
  test("test", () => {
    let converted = TimeZone.convertTZ(new Date("1972-08-12T14:35:12"), "America/Los_Angeles")
    expect(converted.toUTCString()).toEqual("Sat, 12 Aug 1972 05:35:12 GMT")
  })
})
