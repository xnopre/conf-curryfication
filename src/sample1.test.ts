function add(a: number, b: number) {
  return a + b;
}

const addc = (a: number) => (b: number) => a + b;

describe("Sample 1", function () {
  it("should add", function () {
    expect(add(3, 6)).toEqual(9);
  });

  it("should add with curry", function () {
    expect(addc(3)(6)).toEqual(9);
  });
});
