const parseDate = require("./");

describe("basic", () => {
  it("parse string", () => {
    expect(parseDate("738720000000").toString()).toBe(
      new Date("1993-05-30T00:00:00.000Z").toString()
    );

    expect(parseDate("1995-05-30").toString()).toBe(
      new Date("1995-05-30T00:00:00.000Z").toString()
    );
  });

  it("parse number", () => {
    expect(parseDate(738720000000).toString()).toBe(
      new Date("1993-05-30T00:00:00.000Z").toString()
    );
  });

  it("parse date", () => {
    const date = new Date();
    expect(parseDate(date).toString()).toBe(date.toString());
  });

  it("parse invalid date", () => {
    expect(parseDate()).toBe(null);

    expect(parseDate(null)).toBe(null);

    expect(parseDate(undefined)).toBe(null);

    expect(parseDate("")).toBe(null);

    expect(parseDate("😄")).toBe(null);

    expect(parseDate("today")).toBe(null);
  });
});
