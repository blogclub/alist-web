var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e},n=(e,a)=>t(e,r(a));import{j as p,h as u,r as c,R as m,t as d,af as b,F as f,x as y}from"./vendor.ef86dff2.js";import{a as v}from"./index.c511474b.js";import{F as j}from"./form-item.afb616ba.js";import"./index.53447b33.js";import"./index.3ab60f13.js";import"./index.esm.bc9cf174.js";import"./useTitle.391ac300.js";const g=()=>{const e=p(),{t:t}=u(),[r,a]=c.exports.useState([]);return c.exports.useEffect((()=>{v.get("settings").then((r=>{const s=r.data;200!==s.code?e({title:t(s.message),status:"error",duration:3e3,isClosable:!0}):a(s.data)}))}),[]),m.createElement(d,{w:"full"},m.createElement(b,{minChildWidth:"400px",spacing:"2"},r.map((e=>{var s;return m.createElement(j,{key:e.key,type:e.type,label:e.key,value:"bool"===e.type?"true"===e.value:e.value,readOnly:2===e.group,values:null==(s=e.values)?void 0:s.split(","),description:`${t(e.description)}(${t(0===e.group?"public":1===e.group?"private":"readonly")})`,onChange:t=>{a(r.map((r=>r.key===e.key?"bool"!==e.type?n(i({},r),{value:t}):n(i({},r),{value:"true"===e.value?"false":"true"}):r)))}})}))),m.createElement(f,{mt:"2",justify:"end"},m.createElement(y,{onClick:()=>{v.post("settings",r).then((r=>{const a=r.data;200!==a.code?e({title:t(a.message),status:"error",duration:3e3,isClosable:!0}):e({title:t(a.message),status:"success",duration:3e3,isClosable:!0})}))}},t("save"))))};export{g as default};
