describe("FizzBuzz", function() {
  it("pass 1 receive 1", function() {
    expect(FizzBuzz(1)).toEqual(1)
  });
  it("pass 2 receive 2", function() {
    expect(FizzBuzz(2)).toEqual(2)
  });
  it("pass 3 receive Fizz", function() {
    expect(FizzBuzz(3)).toEqual("Fizz")
  });
  it("pass 5 receive Buzz", function() {
    expect(FizzBuzz(5)).toEqual("Buzz")
  });
  it("pass 6 return Fizz", function() {
    expect(FizzBuzz(6)).toEqual("Fizz")
  });
  it("pass 10 return Buzz", function() {
    expect(FizzBuzz(10)).toEqual("Buzz")
  });
  it("pass 15 return FizzBuzz", function() {
    expect(FizzBuzz(15)).toEqual("FizzBuzz")
  });
});
