const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src', 'pages', 'Products.jsx');
let content = fs.readFileSync(productsFilePath, 'utf8');

// Array of 40 distinct, valid Unsplash image IDs related to food/produce
const validImageIds = [
  "1518977676601-b53f82aba655", "1553279768-865429fa0078", "1583663848850-46af132dc08e", 
  "1586201375761-83865001e31c", "1550583724-b2692b85b150", "1618512496248-a07fe83aa8cb", 
  "1574323347407-f5e1ad6d020b", "1560806887-1e4cd0b6bac6", "1603833665858-e61d17a86224", 
  "1611080626919-7cf5a9dbab5b", "1589984662646-e7b2e4962f18", "1578916171728-46686eac8d58", 
  "1585994807490-482a98e820cb", "1632054619478-f7c81a545362", "1517595304677-8c01c0bb0df5", 
  "1611488005391-7f91cc4b744d", "1631387814421-eb378b66fa5a", "1632742186718-406a782dddc8", 
  "1571212515416-f28a3f550974", "1589301760014-d929f3979dbc", "1486297678162-eb2a19b0a32d", 
  "1615486171448-4fd1313d42e6", "1596040033229-a9821ebd058d", "1599813083167-7eaee2f47c94", 
  "1582293041079-7814c2f12063", "1596040033229-a9821ebd058d", "1598170845058-32b9d6a5da37", 
  "1576045057995-568f588f82fb", "1568584711075-3d021a7c3ca3", "1563514227147-6d2ff665a6a0", 
  "1615485966453-294db40e70ab", "1498837164805-728b74ff68bc", "1508595163013-64906a644f12"
];

let idIndex = 0;

// Replace all image: "https://images.unsplash.com/photo-..." with distinct images
const updatedContent = content.replace(/image:\s*"https:\/\/images\.unsplash\.com\/photo-[^"]+"/g, () => {
  const replacement = `image: "https://images.unsplash.com/photo-${validImageIds[idIndex % validImageIds.length]}?w=600"`;
  idIndex++;
  return replacement;
});

fs.writeFileSync(productsFilePath, updatedContent, 'utf8');
console.log(`Updated ${idIndex} images in Products.jsx`);
