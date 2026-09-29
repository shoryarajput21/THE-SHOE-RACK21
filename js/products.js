// PRODUCT DATA: add, edit or delete entries in the list at the bottom.
// IMAGES: the two images per product are generated placeholders. Replace by passing real paths, e.g. ["assets/images/p1.jpg","assets/images/p1-2.jpg"] (or https URLs) as the "images" field.
const shoeArt=(c,b="#ece8e1",t=0,label="")=>{const w=(label||"").split(" "),h=Math.ceil(w.length/2),ls=[w.slice(0,h).join(" "),w.slice(h).join(" ")].filter(Boolean),e=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");return "data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='${b}'/><text x='200' y='${ls.length>1?135:145}' text-anchor='middle' font-family='sans-serif' font-size='26' font-weight='700' fill='#1f1f21'>${ls.map((l,i)=>`<tspan x='200' dy='${i?32:0}'>${e(l)}</tspan>`).join("")}</text><text x='200' y='250' text-anchor='middle' font-family='sans-serif' font-size='13' fill='#77787b'>Photo coming soon</text></svg>`)};
const COLOR_HEX={Black:"#1c1c1c",White:"#f2f2f2",Brown:"#6b4a32",Tan:"#b98a5a",Navy:"#1f2f4d",Grey:"#77787b",Red:"#a33a32",Beige:"#cdbba0"};
const USE={Sneakers:"street style",Sports:"training sessions",Running:"daily runs",Casual:"relaxed everyday wear",Formal:"office and events",Boots:"cooler days and city walks",Sandals:"warm weather",Slippers:"home and quick errands",Loafers:"smart-casual outfits"};
const _R=document.body.dataset.root||"",FALLBACK={};
// Drop real photos in assets/images/ named TSR001.jpg (main) and TSR001-2.jpg (hover). Missing files fall back to generated art.
const IMG=(id,c,n)=>{const a=["#ece8e1","#d8d4cc","#e2ddd3","#d2cdc3"].map(b=>shoeArt("",b,0,n)),l=["",-2,-3,-4].map(k=>_R+"assets/images/"+id+(k||"")+".jpg");l.forEach((u,i)=>FALLBACK[u]=a[i]);return l};
addEventListener("error",e=>{const t=e.target;if(t&&t.tagName==="IMG"&&!("nofb" in t.dataset)){const s=t.getAttribute("src"),f=FALLBACK[s];if(f)t.src=f;else if(/^https?:/.test(s)&&!t.dataset.fb){t.dataset.fb=1;t.src=shoeArt("","#ece8e1",0,"Image unavailable")}}},true);
const mk=(id,name,category,gender,price,originalPrice,rating,reviewCount,colors,tags="")=>({id,name,category,gender,price,originalPrice,discount:Math.round(100-price/originalPrice*100),rating,reviewCount,
images:IMG(id,colors,name),sizes:category==="Slippers"||category==="Sandals"?[6,7,8,9,10]:[6,7,8,9,10,11],colors,
description:`${name} is a ${category.toLowerCase()} pair made for ${USE[category]}. [Replace with your own product description.]`,features:["Cushioned insole for comfort","Durable outsole grip","Easy to style every day"],stock:!tags.includes("oos"),sku:id,isNew:tags.includes("new"),isBest:tags.includes("best")});
const products=[
mk("TSR001","Street Runner Sneakers","Sneakers","Men",1499,2499,4.6,124,["Black","White"],"best"),
mk("TSR002","Cloud Step Sneakers","Sneakers","Women",1699,2699,4.5,98,["White","Beige"],"new best"),
mk("TSR003","Court Classic Sneakers","Sneakers","Unisex",1799,2499,4.4,76,["White","Navy"],"new"),
mk("TSR004","Urban Low Sneakers","Sneakers","Men",1399,2199,4.3,61,["Grey","Black"]),
mk("TSR005","Velocity Sports Shoes","Sports","Men",1999,3299,4.7,210,["Red","Black"],"best"),
mk("TSR006","Flex Train Sports Shoes","Sports","Women",1899,2999,4.5,88,["Grey","Red"],"new"),
mk("TSR007","Stride Running Shoes","Running","Men",2199,3499,4.6,143,["Navy","Grey"],"best"),
mk("TSR008","Breeze Running Shoes","Running","Women",1999,3199,4.4,67,["Beige","White"],"new"),
mk("TSR009","Everyday Canvas Casuals","Casual","Men",1199,1999,4.2,54,["Navy","Brown"]),
mk("TSR010","Weekend Slip-On Casuals","Casual","Women",1099,1899,4.3,72,["Tan","Black"],"best"),
mk("TSR011","Daily Walk Casuals","Casual","Unisex",1299,1999,4.1,39,["Grey","Beige"],"new"),
mk("TSR012","Oxford Formal Shoes","Formal","Men",2499,3999,4.6,131,["Black","Brown"],"best"),
mk("TSR013","Derby Formal Shoes","Formal","Men",2299,3499,4.4,58,["Brown","Black"]),
mk("TSR014","Block Heel Formals","Formal","Women",2199,3299,4.3,44,["Black","Tan"],"new"),
mk("TSR015","City Chelsea Boots","Boots","Men",2999,4499,4.7,96,["Brown","Black"],"best"),
mk("TSR016","Trail Lace-Up Boots","Boots","Unisex",3199,4699,4.5,52,["Tan","Black"],"new"),
mk("TSR017","Ankle Boots","Boots","Women",2799,3999,4.4,47,["Black","Beige"]),
mk("TSR018","Strap Sandals","Sandals","Men",899,1499,4.2,63,["Brown","Black"]),
mk("TSR019","Comfort Sandals","Sandals","Women",999,1699,4.4,81,["Tan","White"],"best"),
mk("TSR020","Cushion Slides","Slippers","Unisex",599,999,4.3,150,["Black","Navy"],"best"),
mk("TSR021","Home Soft Slippers","Slippers","Women",499,899,4.1,35,["Beige","Grey"]),
mk("TSR022","Penny Loafers","Loafers","Men",1899,2999,4.5,69,["Brown","Black"],"new"),
mk("TSR023","Suede Loafers","Loafers","Women",1999,3099,4.4,41,["Tan","Navy"]),
mk("TSR024","Driver Loafers","Loafers","Men",1799,2799,4.3,33,["Navy","Tan"],"oos"),
mk("TSR025","Retro Runner Sneakers","Sneakers","Women",1599,2599,4.5,57,["White","Red"],"new"),
mk("TSR026","High-Top Street Sneakers","Sneakers","Men",1899,2999,4.4,49,["Black","White"],"best"),
mk("TSR027","Pulse Gym Trainers","Sports","Men",1799,2799,4.3,62,["Black","Grey"]),
mk("TSR028","Sprint Pro Sports Shoes","Sports","Unisex",2399,3799,4.6,118,["Navy","Red"],"new best"),
mk("TSR029","Marathon Lite Running Shoes","Running","Unisex",2599,3999,4.7,174,["White","Navy"],"best"),
mk("TSR030","Tempo Running Shoes","Running","Men",1899,2999,4.2,46,["Black","Red"]),
mk("TSR031","Linen Espadrille Casuals","Casual","Women",999,1699,4.2,38,["Beige","Tan"],"new"),
mk("TSR032","Denim Canvas Casuals","Casual","Men",1099,1799,4.1,29,["Navy","Grey"]),
mk("TSR033","Monk Strap Formals","Formal","Men",2699,4199,4.5,64,["Brown","Black"],"new"),
mk("TSR034","Pointed Pump Formals","Formal","Women",1999,3199,4.3,37,["Black","Beige"]),
mk("TSR035","Desert Boots","Boots","Men",2599,3899,4.4,55,["Tan","Brown"],"best"),
mk("TSR036","Combat Boots","Boots","Women",2899,4299,4.5,43,["Black","Brown"],"new"),
mk("TSR037","Kolhapuri Style Sandals","Sandals","Women",799,1399,4.3,92,["Tan","Brown"],"best"),
mk("TSR038","Sport Sandals","Sandals","Men",1099,1799,4.2,51,["Black","Navy"]),
mk("TSR039","Foam Slides","Slippers","Men",549,949,4.2,87,["Black","Grey"]),
mk("TSR040","Tassel Loafers","Loafers","Men",1999,3099,4.4,40,["Black","Brown"],"new")
];
const SAMPLE_REVIEWS=[{n:"Sample Customer A",p:"Street Runner Sneakers",r:5,t:"Absolutely loved the quality and fitting.",d:"2026-01-12"},{n:"Sample Customer B",p:"Oxford Formal Shoes",r:4,t:"Looks sharp and feels comfortable through the day.",d:"2026-02-03"},{n:"Sample Customer C",p:"Cushion Slides",r:5,t:"Soft sole and easy to wear all day.",d:"2026-02-20"},{n:"Sample Customer D",p:"City Chelsea Boots",r:5,t:"Great finish and easy to style.",d:"2026-03-05"}];
// Load products from js/products-data.js (published) or this browser's saved admin preview (localStorage)
(()=>{const norm=l=>l.map(p=>({...p,images:(p.images||[]).map(u=>/^(data:|https?:|\/\/)/.test(u)?u:_R+u.replace(/^\//,""))}));
let d=typeof PRODUCTS_DATA!=="undefined"&&Array.isArray(PRODUCTS_DATA)?PRODUCTS_DATA:null;
try{const l=JSON.parse(localStorage.getItem("tsr_products"));if(Array.isArray(l)&&l.length)d=l}catch(e){}
if(d&&d.length)products.splice(0,products.length,...norm(d))})();
