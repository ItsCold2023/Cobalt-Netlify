import{r as v,R as n,j as f}from"./index-20ec6b44.js";const i=new EventTarget;function d(e){const[s,a]=v.useState(localStorage.getItem(e)),o=`set ${e}`;return v.useEffect(()=>{function t(){a(localStorage.getItem(e))}return i.addEventListener(o,t),()=>i.removeEventListener(o,t)}),[s,t=>{t===null?localStorage.removeItem(e):localStorage.setItem(e,t),a(t),i.dispatchEvent(new Event(o))}]}const c=(e,s)=>{var[a,o]=d(e);return[a===null?s:a,o]};var y=()=>c("history","[]"),p=()=>c("appearance","default"),E=()=>d("title"),b=()=>d("icon"),L=()=>c("customStyle",""),S=()=>c("borderRadius","default"),h=()=>c("installedExtensions","[]"),x=()=>c("favorites","[]"),A=()=>c("panelWidth","352px");function I({defaultTitle:e}){const[s]=p(),[a]=E(),[o]=b(),[t]=L(),[u]=S();return n.useEffect(()=>{var l,m;(l=document.querySelector("#customStyle"))==null||l.remove();var r=document.createElement("style");r.id="customStyle",r.innerHTML=t,(m=document.querySelector("head"))==null||m.appendChild(r)},[t]),document.body.setAttribute("data-appearance",s),document.body.setAttribute("data-border-radius",u),n.useEffect(()=>{var r=e||"Cobalt",l=a||r||"";document.title=l},[a]),n.useEffect(()=>{var r=o||"/logos/logo.svg";for(var l of document.querySelectorAll("link[rel*='icon']"))l.setAttribute("href",r)},[o]),n.useEffect(()=>{document.body.setAttribute("data-appearance",s)},[s]),n.useEffect(()=>{document.body.setAttribute("data-border-radius",u)},[u]),f.jsx(f.Fragment,{})}export{I as H,h as a,x as b,A as c,L as d,E as e,b as f,p as g,S as h,y as u};
