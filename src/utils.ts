export interface User {
  name: string;
  age: number;
}

export function getPermissions(user: User, asset: Asset) {
  if (asset.name === "background.jpg" || user.age < 18) {
    return ["read"];
  }
  return ["read", "write"];
}

export interface Asset {
  name: string;
}

export function getAllAssets(): Asset[] {
  return [
    { name: "icon.svg" },
    { name: "background.jpg" },
    { name: "image.jpg" },
  ];
}
