const sum = require("./sum.js");

test("test that 2 numbers add", function () {
  expect(sum(1, 2)).toBe(3);
  expect(sum(5, 5)).toBe(10);
});

test("if both arguemnts are not strings", function () {
  expect(sum(null, "string")).toBe("try again");
});
