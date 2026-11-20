const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "src/pages/Products.jsx");
let content = fs.readFileSync(file, "utf8");

const imageMap = {
  2: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
  3: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600",
  4: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=600",
  5: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
  6: "/images/dairy/milk.png",
  7: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600",
  8: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600",
  9: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bac6?w=600",
  10: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600",
  11: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600",
  12: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600",
  13: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600",
  14: "https://images.unsplash.com/photo-1585994807490-482a98e820cb?w=600",
  15: "https://images.unsplash.com/photo-1632054619478-f7c81a545362?w=600",
  16: "https://images.unsplash.com/photo-1517595304677-8c01c0bb0df5?w=600",
  17: "https://images.unsplash.com/photo-1611488005391-7f91cc4b744d?w=600",
  18: "/images/dairy/paneer.png",
  19: "/images/dairy/ghee.png",
  20: "/images/dairy/yogurt.png",
  21: "/images/dairy/white_butter.png",
  22: "/images/dairy/mozzarella.png",
  23: "https://images.unsplash.com/photo-1615486171448-4fd1313d42e6?w=600",
  24: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
  25: "https://images.unsplash.com/photo-1599813083167-7eaee2f47c94?w=600",
  26: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=600",
  27: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600",
  28: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600",
  29: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600",
  30: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600",
  31: "https://images.unsplash.com/photo-1615485966453-294db40e70ab?w=600",
  32: "https://images.unsplash.com/photo-1498837164805-728b74ff68bc?w=600",
  33: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600",
  34: "https://images.unsplash.com/photo-1595856728516-724bc2f8c5c7?w=600", // Peas (Replaced 404)
  35: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600",
  36: "https://images.unsplash.com/photo-1605336043818-f2e7b8daebf6?w=600", // Okra
  37: "https://images.unsplash.com/photo-1540148426941-859a16f3d9d3?w=600", // Garlic
  38: "https://images.unsplash.com/photo-1596706077364-e4099cbda7dc?w=600", // Ginger
  39: "https://images.unsplash.com/photo-1563236052-87893a903ef8?w=600", // Green beans
  40: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600", // Cucumber
  41: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=600", // Radish
  42: "https://images.unsplash.com/photo-1628103138804-d50d7e4dbce4?w=600", // Bottle Gourd
  43: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600", // Pumpkin
  44: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600", // Sweet Potato
  45: "https://images.unsplash.com/photo-1593105559379-3732cce6c342?w=600", // Beetroot
  46: "https://images.unsplash.com/photo-1611077543888-84226d71b87a?w=600", // Celery
  47: "https://images.unsplash.com/photo-1601314983084-25e24347781b?w=600", // Zucchini
  48: "https://images.unsplash.com/photo-1606859359691-3829023ebc69?w=600", // Mushrooms
  49: "https://images.unsplash.com/photo-1518568740560-333139a27e72?w=600", // Asparagus
  50: "https://images.unsplash.com/photo-1602035889721-6674e2d3b27b?w=600", // Leeks
  51: "https://images.unsplash.com/photo-1599557457492-959c87840131?w=600", // Turnip
  52: "https://images.unsplash.com/photo-1555541999-73f1d82b2fa6?w=600"  // Mint (Replaced)
};

const updatedContent = content.replace(/id:\s*(\d+),\s*name:\s*"[^"]+",\s*category:\s*"[^"]+",\s*seller:\s*"[^"]+",\s*price:\s*\d+,\s*quantity:\s*\d+,\s*image:\s*"([^"]+)"/g, (match, id, oldUrl) => {
  if (imageMap[id]) {
    return match.replace(oldUrl, imageMap[id]);
  }
  return match;
});

fs.writeFileSync(file, updatedContent, "utf8");
console.log("Images successfully updated!");

