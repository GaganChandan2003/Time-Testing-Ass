const time = require("./time");


describe("Testing Time Function",()=>
{
  it("should be in secconds",()=>
  {
    expect(time(5200)).toBe("5 seconds");
  })
  it("should be in minute",()=>
  {
    expect(time(60000)).toBe("1 minute");
  })
  it("should be in minutes",()=>
  {
    expect(time(180000)).toBe("3 minutes");
  })
  it("should be in minutes and seconds",()=>
  {
    expect(time(200000)).toBe("3 minutes 20 seconds");
  })
})