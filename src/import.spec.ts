import { Import } from "./import";

describe("Importer Tests", () => {
  it("should create Import instance", () => {
    const i = new Import();
    expect(i).toBeTruthy();
  });

  it("should print a log message", () => {
    const logSpy = spyOn(console, "log").and.callThrough();
    const i = new Import();
    i.import("missing/", "output");
    expect(logSpy).toHaveBeenCalled();
  });
});
