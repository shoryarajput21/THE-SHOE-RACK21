// ===== CHECKOUT: sends the order to your WhatsApp =====
// WhatsApp number: edit "whatsappNumber" in js/config.js (country code + number, no + or spaces).
// Buy Now on the product page opens checkout.html?buy=1 with only that product.
if(new URLSearchParams(location.search).get("buy"))Cart.key="buynow";

// EDIT THIS FUNCTION to change the WhatsApp message layout. *text* makes text bold in WhatsApp.
function buildOrderMessage(d,orderId){
  const s=Cart.summary(),list=Cart.items().filter(i=>byId(i.id));
  const items=list.map((i,n)=>{const p=byId(i.id);return `${n+1}. ${p.name} (${p.sku})\n   Size: ${i.size} | Color: ${i.color} | Qty: ${i.q} | ${money(p.price*i.q)}`}).join("\n");
  return `*NEW ORDER - ${SITE_CONFIG.brandName}*\nOrder ID: ${orderId}\n\n*CUSTOMER*\nName: ${d.n}\nMobile: ${d.m}\nEmail: ${d.e}\nAddress: ${d.a}, ${d.c}, ${d.s} - ${d.p}\n\n*ITEMS*\n${items}\n\n*BILL*\nSubtotal (MRP): ${money(s.mrp)}\nDiscount: -${money(s.disc)}\nShipping: ${s.ship?money(s.ship):"Free"}\n*Total: ${money(s.total)}*\n\nPayment preference: ${d.pay}\nNote: ${d.o||"-"}`;
}

document.addEventListener("DOMContentLoaded",()=>{const f=$("#cof");if(!f)return;
  f.addEventListener("submit",e=>{e.preventDefault();
    if(!Cart.items().length)return toast("Your cart is empty");
    if(!f.checkValidity())return f.reportValidity();
    const d=Object.fromEntries(new FormData(f)),id="TSR-"+Date.now().toString().slice(-8),url=waLink(buildOrderMessage(d,id));
    store.set("lastOrder",{id,url});
    store.set(Cart.key,[]);Cart.render();updateCounts();      // order sent: empty the list
    if(!window.open(url,"_blank"))location.href=url;           // open WhatsApp with the order details
    f.hidden=true;const done=$("#done");done.hidden=false;
    done.innerHTML=`<h2>Almost done!</h2><p>Your order <b>${id}</b> is ready in WhatsApp. <b>Press Send</b> in WhatsApp to place it. We will reply to confirm and share payment details.</p><a class="btn wa" href="${url}" target="_blank" rel="noopener">Open WhatsApp again</a> <a class="btn ghost" href="${ROOT}shop.html">Continue shopping</a>`});
});
