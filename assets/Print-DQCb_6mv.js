import{P as e,dn as t}from"./Portal-BXribIKZ.js";import{l as n,p as r,w as i}from"./endpoints-fNU3Sv4w.js";import{i as a}from"./Alert-BUl0Z-ab.js";import{n as o}from"./format-IW_DOtOc.js";async function s(e){let t=await n(e.id);return new Blob([t.data],{type:`application/pdf`})}function c(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),URL.revokeObjectURL(n)}async function l(e,t){c(t??await s(e),`${e.billNumber}.pdf`)}async function u(e,t){let n=t??await s(e),r=new File([n],`${e.billNumber}.pdf`,{type:`application/pdf`});if(navigator.share&&navigator.canShare?.({files:[r]}))await navigator.share({title:`Invoice ${e.billNumber}`,text:`Invoice ${e.billNumber} - Total: ₹${e.totalAmount.toFixed(2)}`,files:[r]});else{let t=encodeURIComponent(`Invoice ${e.billNumber}\nTotal: ₹${e.totalAmount.toFixed(2)}\nCustomer: ${e.customerName||`N/A`}`),n=e.customerPhone?e.customerPhone.replace(/\D/g,``):``;window.open(n?`https://wa.me/${n}?text=${t}`:`https://wa.me/?text=${t}`,`_blank`)}}async function d(e,t,n,r,i){try{await e(t,i)}catch(e){if(a(e))return;r&&r(n)}}async function f(e,t){let n=t??await s(e),r=URL.createObjectURL(n),i=window.open(r,`_blank`);if(!i){window.location.href=r;return}let a=()=>{try{i.focus(),i.print()}catch{}};i.addEventListener(`load`,a,{once:!0}),setTimeout(a,1500),setTimeout(()=>{try{URL.revokeObjectURL(r)}catch{}},6e4)}var p=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),m=e=>`₹${e.toFixed(2)}`;function h(e,t){let n=t?.shopName||t?.ownerName||`Receipt`,r=[];t?.shopAddress&&r.push(t.shopAddress),t?.ownerPhone&&r.push(`Ph: ${t.ownerPhone}`),t?.ownerEmail&&r.push(t.ownerEmail),t?.gstNumber&&r.push(`GSTIN: ${t.gstNumber}`),t?.shopInfo&&r.push(t.shopInfo);let i=[];e.customerName&&i.push(`Name: ${e.customerName}`),e.customerPhone&&i.push(`Ph: ${e.customerPhone}`),e.customerEmail&&i.push(e.customerEmail);let a=e.orderDetails,s=[];a&&(a.orderRef&&s.push(`Order #: ${a.orderRef}`),a.orderStatus&&s.push(`Status: ${a.orderStatus}`),a.deliveryMode&&s.push(`Mode: ${a.deliveryMode}`),a.deliveryAddress&&s.push(`Addr: ${a.deliveryAddress}`),a.deliveryFee>0&&s.push(`Delivery Fee: ${m(a.deliveryFee)}`),a.courierName&&s.push(`Courier: ${a.courierName}`),a.trackingId&&s.push(`Tracking: ${a.trackingId}`),a.estimatedDeliveryDate&&s.push(`ETA: ${a.estimatedDeliveryDate}`),a.customerNotes&&s.push(`Cust note: ${a.customerNotes}`),a.shopNotes&&s.push(`Shop note: ${a.shopNotes}`));let c=e.items.map(e=>`<div class="item">
      <div class="iname">${p(e.productName)}</div>
      ${e.uniqueId?`<div class="icode">${p(e.uniqueId)}</div>`:``}
      <div class="iline"><span>${e.quantity.toString()} x ${m(e.unitSellingPrice)}</span><span>${m(e.totalPrice)}</span></div>
      ${e.unitMRP>e.unitSellingPrice?`<div class="iextra">MRP ${m(e.unitMRP)} (save ${m(e.unitMRP-e.unitSellingPrice)}/u)</div>`:``}
      ${e.taxPercent>0?`<div class="iextra">Tax ${e.taxPercent}% (incl.)</div>`:``}
    </div>`).join(``),l=(e.refundedItems??[]).map(e=>{let t=o(e.refundedAt);return`<div class="item">
      <div class="iname">${p(e.productName)}</div>
      <div class="iline"><span>${e.quantity} x ${m(e.unitSellingPrice)}</span><span>-${m(e.quantity*e.unitSellingPrice)}</span></div>
      ${e.discountReverted>0?`<div class="iextra">Disc reverted: ${m(e.discountReverted)}</div>`:``}
      <div class="iextra">Refunded: ${p(t)}${e.refundedBy?` by `+p(e.refundedBy):``}</div>
    </div>`}).join(``),u=`<div>Status: ${p(e.status)}</div>`,d=e.paidAt?`<div>Paid at: ${p(o(e.paidAt))}</div>`:``;return`
    <div class="hdr">
      <div class="shop">${p(n)}</div>
      ${r.map(e=>`<div class="sub">${p(e)}</div>`).join(``)}
    </div>
    <div class="rule"></div>
    <div class="meta">
      <div><b>Bill #:</b> ${p(e.billNumber)}</div>
      <div><b>Date:</b> ${p(o(e.billDate))}</div>
      ${u}
      ${i.map(e=>`<div>${p(e)}</div>`).join(``)}
    </div>
    ${s.length?`<div class="rule"></div><div class="meta">${s.map(e=>`<div>${p(e)}</div>`).join(``)}</div>`:``}
    <div class="rule"></div>
    <div class="items">${c}</div>
    ${l?`<div class="rule"></div><div class="meta"><b>Refunded items</b></div><div class="items">${l}</div>`:``}
    <div class="rule"></div>
    <div class="totals">
      <div class="row"><span>Subtotal</span><span>${m(e.subTotal)}</span></div>
      ${e.taxAmount>0?`<div class="row dim"><span>Tax (incl.)</span><span>${m(e.taxAmount)}</span></div>`:``}
      ${e.itemDiscountTotal>0?`<div class="row"><span>Item Discount</span><span>-${m(e.itemDiscountTotal)}</span></div>`:``}
      ${e.discountAmount>0?`<div class="row"><span>Bill Discount</span><span>-${m(e.discountAmount)}</span></div>`:``}
      ${a&&a.deliveryFee>0?`<div class="row"><span>Delivery Fee</span><span>${m(a.deliveryFee)}</span></div>`:``}
      <div class="row total"><span>TOTAL</span><span>${m(e.totalAmount)}</span></div>
      ${e.paidAmount>0?`<div class="row dim"><span>Paid</span><span>${m(e.paidAmount)}</span></div>`:``}
      ${e.refundedAmount>0?`<div class="row dim"><span>Refunded</span><span>-${m(e.refundedAmount)}</span></div>`:``}
      ${e.paymentMode?`<div class="row dim"><span>Mode</span><span>${p(e.paymentMode)}</span></div>`:``}
      ${d}
    </div>
    ${e.notes?`<div class="rule"></div><div class="notes">${p(e.notes)}</div>`:``}
    <div class="rule"></div>
    <div class="ftr">Thank you!</div>
  `}var g={"80mm":{widthMm:80,pageSize:`80mm auto`,label:`80mm thermal`},"58mm":{widthMm:57,pageSize:`57mm auto`,label:`58mm thermal (ISO C8)`},b7:{widthMm:88,pageSize:`88mm 125mm`,label:`ISO B7 (88×125 mm)`}};async function _(e,t,n={}){let a=n.paper?g[n.paper]:g[`80mm`],o=n.widthMm??a.widthMm,s=n.widthMm&&!n.paper?`${n.widthMm}mm auto`:a.pageSize,c=!e.items||e.items.length===0,l=!t;if(c||l){let[n,a]=await Promise.all([c?r(e.id).then(e=>e.data.result??null):Promise.resolve(null),l?i().then(e=>e.data.result??null):Promise.resolve(null)]);n&&(e=n),a&&(t=a)}let u=h(e,t),d=`<!doctype html>
<html><head><meta charset="utf-8"><title>${p(e.billNumber)}</title>
<style>
  @page { size: ${s}; margin: 2mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    width: ${o}mm;
    /* Inter / Segoe UI / Arial cover the ₹ glyph well; falls back to monospace
       for the receipt look on systems where the sans options are missing. */
    font-family: 'Courier New', 'DejaVu Sans Mono', 'Consolas', ui-monospace, monospace;
    font-size: 11px;
    line-height: 1.35;
    color: #000;
    padding: 2mm;
    /* Long words / SKUs / addresses wrap instead of getting clipped. */
    word-break: break-word;
    overflow-wrap: anywhere;
  }
  .hdr { text-align: center; margin-bottom: 4px; }
  .shop { font-size: 14px; font-weight: 700; letter-spacing: 0.02em; }
  .sub { font-size: 10px; }
  .rule { border-top: 1px dashed #000; margin: 4px 0; }
  .meta div, .notes { font-size: 11px; }
  .item { margin-bottom: 4px; }
  .iname { font-weight: 700; }
  .icode { font-size: 10px; color: #444; }
  .iextra { font-size: 10px; color: #444; padding-left: 6px; }
  .iline { display: flex; justify-content: space-between; gap: 6px; font-size: 11px; }
  .iline span:last-child { white-space: nowrap; }
  .totals .row { display: flex; justify-content: space-between; gap: 6px; }
  .totals .row.total { font-weight: 800; font-size: 13px; margin-top: 4px; border-top: 1px solid #000; padding-top: 3px; }
  .totals .row.dim { color: #444; }
  .notes { font-style: italic; margin-top: 2px; }
  .ftr { text-align: center; margin-top: 6px; font-weight: 700; }
  /* Force browser print preview to honor narrow width even on screen */
  @media screen { body { box-shadow: 0 0 0 1px #ddd; margin: 12px auto; } }
</style></head>
<body>${u}</body></html>`,f=window.open(``,`_blank`,`width=420,height=720`);if(!f){let e=new Blob([d],{type:`text/html`}),t=URL.createObjectURL(e),n=document.createElement(`iframe`);n.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0`,n.src=t,n.onload=()=>{try{n.contentWindow?.focus(),n.contentWindow?.print()}catch{}setTimeout(()=>{URL.revokeObjectURL(t),n.remove()},6e4)},document.body.appendChild(n);return}f.document.open(),f.document.write(d),f.document.close();let m=()=>{try{f.focus(),f.print()}catch{}};f.addEventListener(`load`,m,{once:!0}),setTimeout(m,300)}var v=t(),y=e((0,v.jsx)(`path`,{d:`M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z`}),`Download`),b=e((0,v.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),x=e((0,v.jsx)(`path`,{d:`M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z`}),`Print`);export{s as a,_ as c,l as i,u as l,b as n,d as o,y as r,f as s,x as t};