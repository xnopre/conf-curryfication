import { Asset, getAllAssets, getPermissions, User } from "./utils";

const monique: User = { name: "Monique", age: 19 };

function serializeName(asset: Asset) {
  return { name: asset.name };
}

function serializeAll(user: User) {
  return function (asset: Asset) {
    return {
      name: asset.name,
      permissions: getPermissions(user, asset),
    };
  };
}

describe("Sample 3", function () {
  it("should get all assets", function () {
    expect(getAllAssets()).toEqual([
      { name: "icon.svg" },
      { name: "background.jpg" },
      { name: "image.jpg" },
    ]);
  });

  it("should get permissions", function () {
    expect(getPermissions(monique, { name: "icon.svg" })).toEqual([
      "read",
      "write",
    ]);
  });

  it("should serialize names", function () {
    const assets = getAllAssets();
    const result = assets.map(serializeName);
    expect(result).toEqual([
      { name: "icon.svg" },
      { name: "background.jpg" },
      { name: "image.jpg" },
    ]);
  });

  it("should serialize with permissions", function () {
    const user = monique;
    const assets = getAllAssets();
    const result = assets.map(serializeAll(user));
    expect(result).toEqual([
      { name: "icon.svg", permissions: ["read", "write"] },
      { name: "background.jpg", permissions: ["read"] },
      { name: "image.jpg", permissions: ["read", "write"] },
    ]);
  });
});
