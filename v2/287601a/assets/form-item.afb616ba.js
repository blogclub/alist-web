import{h as e,R as a,ad as n,ae as l,P as t,ag as r,ah as o,ai as s,aj as u,ak as d,al as c,am as g,an as m,ao as h}from"./vendor.ef86dff2.js";const i=i=>{var v;const{t:C}=e();return a.createElement(n,{shadow:"md",p:"2",rounded:"lg",isRequired:i.required},a.createElement(l,null,C(i.label)),"string"===i.type?a.createElement(t,{isReadOnly:i.readOnly,value:i.value,onChange:e=>{i.onChange&&i.onChange(e.target.value)}}):"text"===i.type?a.createElement(r,{isReadOnly:i.readOnly,value:i.value,onChange:e=>{i.onChange&&i.onChange(e.target.value)}}):"bool"===i.type?a.createElement(o,{isReadOnly:i.readOnly,isChecked:i.value,onChange:()=>{i.onChange&&i.onChange()}}):"select"===i.type?a.createElement(s,{isDisabled:i.readOnly,value:i.value,onChange:e=>{i.onChange&&i.onChange(e.target.value)}},a.createElement("option",{value:""},C("select")),null==(v=i.values)?void 0:v.map((e=>a.createElement("option",{key:e,value:e},C(e))))):"number"===i.type?a.createElement(u,{defaultValue:i.value,onChange:(e,a)=>{i.onChange&&i.onChange(a)}},a.createElement(d,null),a.createElement(c,null,a.createElement(g,null),a.createElement(m,null))):null,i.description&&a.createElement(h,null,C(i.description)))};export{i as F};
