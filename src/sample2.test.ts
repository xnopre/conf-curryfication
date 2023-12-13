import { User } from "./utils";

const alice = { name: "Alice", age: 17 };
const bob = { name: "Bob", age: 16 };
const monique = { name: "Monique", age: 19 };
const georges = { name: "Georges", age: 21 };
const users: User[] = [alice, bob, monique, georges];

function isAgeOver(age: number, user: User) {
  return user.age > age;
}

const isAgeOverC = (age: number) => (user: User) => user.age > age;

const isMajor = isAgeOverC(18);

describe("Sample 2", function () {
  it("should filter", function () {
    expect(isAgeOver(18, alice)).toBe(false);
    expect(isAgeOver(18, monique)).toBe(true);
  });
  it("should filter with curry", function () {
    expect(isAgeOverC(18)(alice)).toBe(false);
    expect(isAgeOverC(18)(monique)).toBe(true);
  });
  it("should filter with curry", function () {
    expect(isMajor(alice)).toBe(false);
    expect(isMajor(monique)).toBe(true);
  });
  it("should filter list with isMajor", function () {
    const majors = users.filter(isMajor);
    expect(majors).toEqual([monique, georges]);
  });
});
