import{e as j,v as z,_ as $}from"./index.d9a8a349.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               */import{d as K,r as L,c as G,b0 as J,C as l,D as S,aI as d,aH as n,aM as m,u as Q,aN as _,aK as b,aJ as C,aE as V,a6 as X,aX as q,bb as W,bC as Y,bF as Z,b6 as tt,bG as et,bH as at,aU as ot,aV as nt,bI as ut,bE as rt}from"./arco.cd87ac27.js";import{u as dt}from"./loading.1ec94507.js";import{e as A,a as B,u as lt,b as st,h as U,s as it,f as y,g as pt}from"./serial.3518333f.js";import"./chart.19f3a5b6.js";import"./vue.a1682e6c.js";const mt={class:"container"},ft={name:"SearchTable"},xt=K({...ft,setup(ct){const p=j(),{loading:N,setLoading:E}=dt(!1),{t:v}=z.exports.useI18n(),u=L({nowPage:1,bandwidthOption:{0:"25KHz",1:"12.5KHz"},modeOption:{0:"FM",1:"AM",2:"USB"},powerOption:{0:"\u4F4E",1:"\u4E2D",2:"\u9AD8"},toneOption:{1:"\u4E9A\u97F3\u9891",2:"\u6570\u5B57\u4E9A\u97F3",3:"\u53CD\u5411\u6570\u5B57\u4E9A\u97F3"},CTCSSOption:[67,69.3,71.9,74.4,77,79.7,82.5,85.4,88.5,91.5,94.8,97.4,100,103.5,107.2,110.9,114.8,118.8,123,127.3,131.8,136.5,141.3,146.2,151.4,156.7,159.8,162.2,165.5,167.9,171.3,173.8,177.3,179.9,183.5,186.2,189.9,192.8,196.6,199.5,203.5,206.5,210.7,218.1,225.7,229.1,233.6,241.8,250.3,254.1],DCSOption:[23,25,26,31,32,36,43,47,51,53,54,65,71,72,73,74,114,115,116,122,125,131,132,134,143,145,152,155,156,162,165,172,174,205,212,223,225,226,243,244,245,246,251,252,255,261,263,265,266,271,274,306,311,315,325,331,332,343,346,351,356,364,365,371,411,412,413,423,431,432,445,446,452,454,455,462,464,465,466,503,506,516,523,526,532,546,565,606,612,624,627,631,632,654,662,664,703,712,723,731,732,734,743,754],stepOption:[2.5,5,6.25,10,12.5,25,8.33,.01,.05,.1,.25,.5,1,1.25,9,15,20,30,50,100,125,200,250,500],scrambOption:["1","2","3","4","5","6","7","8","9","10"],pttidOption:["\u4E0A\u7EBF\u7801","\u4E0B\u7EBF\u7801","\u4E0A\u7EBF+\u4E0B\u7EBF\u7801","Quindar\u7801"],renderData:[]});(()=>{const c=[];Array.from({length:200}).map(I=>{c.push({})}),u.renderData=c})();const h=G(()=>[{title:v("searchTable.columns.index"),dataIndex:"index",slotName:"index",width:70},{title:"\u4FE1\u9053\u540D\u79F0",dataIndex:"name",slotName:"name",width:200},{title:"\u5E26\u5BBD",dataIndex:"bandwidth",slotName:"bandwidth",width:150},{title:"\u63A5\u6536\u9891\u7387",dataIndex:"rx",slotName:"rx",width:150},{title:"\u53D1\u9001\u9891\u7387",dataIndex:"tx",slotName:"tx",width:150},{title:"\u53D1\u9001\u529F\u7387",dataIndex:"power",slotName:"power",width:150},{title:"\u63A5\u6536\u4E9A\u97F3\u7C7B\u578B",dataIndex:"rxTone",slotName:"rxTone",width:150},{title:"\u63A5\u6536\u4E9A\u97F3\u9891\uFF08Hz\uFF09",dataIndex:"rxCTCSS",slotName:"rxCTCSS",width:150},{title:"\u63A5\u6536\u4E9A\u97F3\u6570\u7801",dataIndex:"rxDCS",slotName:"rxDCS",width:150},{title:"\u53D1\u9001\u4E9A\u97F3\u7C7B\u578B",dataIndex:"txTone",slotName:"txTone",width:150},{title:"\u53D1\u9001\u4E9A\u97F3\u9891\uFF08Hz\uFF09",dataIndex:"txCTCSS",slotName:"txCTCSS",width:150},{title:"\u53D1\u9001\u4E9A\u97F3\u6570\u7801",dataIndex:"txDCS",slotName:"txDCS",width:150},{title:"\u9891\u7387\u6B65\u8FDB",dataIndex:"step",slotName:"step",width:150},{title:"\u5012\u9891",dataIndex:"reverse",slotName:"reverse",width:150},{title:"\u52A0\u5BC6",dataIndex:"scramb",slotName:"scramb",width:150},{title:"\u7E41\u5FD9\u7981\u53D1",dataIndex:"busy",slotName:"busy",width:150},{title:"\u4FE1\u4EE4\u7801",dataIndex:"pttid",slotName:"pttid",width:150},{title:"\u4FE1\u9053\u6A21\u5F0F",dataIndex:"mode",slotName:"mode",width:150},{title:"DTMF\u89E3\u7801",dataIndex:"dtmf",slotName:"dtmf",width:150},{title:"\u64CD\u4F5C",dataIndex:"operate",slotName:"operate",width:150}]),P=async()=>{var w,g,F;if(p.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await A(p.connectPort),E(!0);let c=new Uint8Array(3200);for(let e=0;e<3200;e+=128){const r=await B(p.connectPort,e,128,(w=p.configuration)==null?void 0:w.uart);c.set(r,e)}let I=new Uint8Array(3200);for(let e=3920;e<7120;e+=128){const r=await B(p.connectPort,e,128,(g=p.configuration)==null?void 0:g.uart);I.set(r,e-3920)}const O=[];for(let e=0;e<3200;e+=16){const r=lt(c.subarray(e,e+16));console.log(r);const a={};a.rx=r.substr(24,8)!="ffffffff"?parseInt(r.substr(24,8),16)/1e5:void 0,a.rx&&(a.offset=r.substr(16,8)!="00000000"?parseInt(r.substr(16,8),16)/1e5:void 0,a.txcodeflag=r.substr(9,1),a.txcodeflag=="1"&&(a.tx=a.rx+a.offset),a.txcodeflag=="2"&&(a.tx=a.rx-a.offset),a.txTone=parseInt(r.substr(10,1),16)>0?parseInt(r.substr(10,1),16).toString():void 0,a.rxTone=parseInt(r.substr(11,1),16)>0?parseInt(r.substr(11,1),16).toString():void 0,a.txTone=="1"&&(a.txCTCSS=u.CTCSSOption[parseInt(r.substr(12,2),16)]),(a.txTone=="2"||a.txTone=="3")&&(a.txDCS=u.DCSOption[parseInt(r.substr(12,2),16)]),a.rxTone=="1"&&(a.rxCTCSS=u.CTCSSOption[parseInt(r.substr(14,2),16)]),(a.rxTone=="2"||a.rxTone=="3")&&(a.rxDCS=u.DCSOption[parseInt(r.substr(14,2),16)]),a.step=u.stepOption[parseInt(r.substr(2,2),16)],a.scramb=parseInt(r.substr(0,2),16)>0?parseInt(r.substr(0,2),16).toString():void 0,a.power_reverse_busy_width=parseInt(r.substr(6,2),16),a.reverse=!!(a.power_reverse_busy_width>>0&1),a.bandwidth=(a.power_reverse_busy_width>>1&1).toString(),a.power=(a.power_reverse_busy_width>>2&3).toString(),a.busy=!!(a.power_reverse_busy_width>>4&1),a.pttid_dtmf=parseInt(r.substr(4,2),16),a.pttid=u.pttidOption[(a.pttid_dtmf>>1)-1],a.dtmf=!!(a.pttid_dtmf>>0&1),a.mode=parseInt(r.substr(8,1),16).toString(),a.name=st(I.subarray(e,e+16),(F=p.configuration)==null?void 0:F.charset)),O.push(a)}u.renderData=O,E(!1)},k=async()=>{var g,F;if(p.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await A(p.connectPort),E(!0);let c=new Uint8Array(3200),I=new Uint8Array(200),O=new Uint8Array(3200),w=0;u.renderData.map(e=>{var r;if(e.rx){let a="";a+=parseInt(e.scramb)>0?parseInt(e.scramb).toString(16).padStart(2,"0"):"00",a+=u.stepOption.indexOf(e.step)>=0?u.stepOption.indexOf(e.step).toString(16).padStart(2,"0"):"00";let f=u.pttidOption.indexOf(e.pttid)+1<<1;f+=e.dtmf?1:0,a+=f.toString(16).padStart(2,"0");let i=e.busy?1<<4:0;switch(i+=e.power<<2,i+=e.bandwidth<<1,i+=e.reverse?1:0,a+=i.toString(16).padStart(2,"0"),a+=e.mode?e.mode.toString(16):"0",e.tx>0&&e.tx>e.rx?a+="1":e.tx>0&&e.tx<e.rx?a+="2":a+="0",a+=parseInt(e.txTone)>0?e.txTone.toString(16):"0",a+=parseInt(e.rxTone)>0?e.rxTone.toString(16):"0",e.txTone){case"1":a+=u.CTCSSOption.indexOf(e.txCTCSS).toString(16).padStart(2,"0");break;case"2":case"3":a+=u.DCSOption.indexOf(e.txDCS).toString(16).padStart(2,"0");break;default:a+="00"}switch(e.rxTone){case"1":a+=u.CTCSSOption.indexOf(e.rxCTCSS).toString(16).padStart(2,"0");break;case"2":case"3":a+=u.DCSOption.indexOf(e.rxDCS).toString(16).padStart(2,"0");break;default:a+="00"}const D=e.tx&&e.rx?Math.abs(parseInt((e.tx*1e5).toFixed(0))-parseInt((e.rx*1e5).toFixed(0))):NaN;a+=Number.isNaN(D)?"00000000":D.toString(16).padStart(8,"0"),a+=parseInt((e.rx*1e5).toFixed(0)).toString(16).padStart(8,"0"),console.log(a),c.set(U(a),w),I.set([197],w>>4);const T=new Uint8Array(16);T.set(it(e.name,(r=p.configuration)==null?void 0:r.charset).subarray(0,16),0),O.set(T,w)}else c.set(U("ffffffffffffffffffffffffffffffff"),w),I.set([15],w>>4),O.set(U("ffffffffffffffffffffffffffffffff"),w);w+=16});for(let e=0;e<3200;e+=128)await y(p.connectPort,e,c.slice(e,e+128),128,(g=p.configuration)==null?void 0:g.uart);await y(p.connectPort,3424,I,200);for(let e=3920;e<7120;e+=128)await y(p.connectPort,e,O.slice(e-3920,e-3920+128),128,(F=p.configuration)==null?void 0:F.uart);await pt(p.connectPort),E(!1)},M=async c=>{u.renderData[c]={}};return(c,I)=>{const O=J("Breadcrumb"),w=X,g=q,F=W,e=Y,r=Z,a=tt,f=et,i=at,D=ot,T=nt,R=ut,H=rt;return l(),S("div",mt,[d(O,{items:["\u5199\u9891","\u4FE1\u9053\u7BA1\u7406"]}),d(H,{class:"general-card",title:c.$t("\u4FE1\u9053\u7BA1\u7406")},{default:n(()=>[d(r,{style:{"margin-bottom":"16px"}},{default:n(()=>[d(e,{span:12},{default:n(()=>[d(F,null,{default:n(()=>[d(g,{type:"primary",onClick:P},{icon:n(()=>[d(w)]),default:n(()=>[m(" \u4ECE\u8BBE\u5907\u8BFB\u53D6 ")]),_:1}),d(g,{onClick:k},{icon:n(()=>[d(w)]),default:n(()=>[m(" \u5199\u5165\u8BBE\u5907 ")]),_:1})]),_:1})]),_:1})]),_:1}),d(R,{loading:Q(N),columns:h.value,data:u.renderData,style:{"margin-top":"20px"},pagination:{pageSize:15,current:u.nowPage},onPageChange:I[0]||(I[0]=o=>{u.nowPage=o})},{index:n(({record:o,rowIndex:s})=>[m(_((u.nowPage-1)*15+s+1),1)]),name:n(({record:o,rowIndex:s})=>[d(a,{modelValue:o.name,"onUpdate:modelValue":t=>o.name=t},null,8,["modelValue","onUpdate:modelValue"])]),bandwidth:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.bandwidth,"onUpdate:modelValue":t=>o.bandwidth=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(Object.keys(u.bandwidthOption),t=>(l(),V(f,{value:t},{default:n(()=>{var x;return[m(_((x=u.bandwidthOption[t])!=null?x:t),1)]}),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),tx:n(({record:o,rowIndex:s})=>[d(D,{modelValue:o.tx,"onUpdate:modelValue":t=>o.tx=t,precision:5},null,8,["modelValue","onUpdate:modelValue"])]),rx:n(({record:o,rowIndex:s})=>[d(D,{modelValue:o.rx,"onUpdate:modelValue":t=>o.rx=t,precision:5},null,8,["modelValue","onUpdate:modelValue"])]),power:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.power,"onUpdate:modelValue":t=>o.power=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(Object.keys(u.powerOption),t=>(l(),V(f,{value:t},{default:n(()=>{var x;return[m(_((x=u.powerOption[t])!=null?x:t),1)]}),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),rxTone:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.rxTone,"onUpdate:modelValue":t=>o.rxTone=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(Object.keys(u.toneOption),t=>(l(),V(f,{value:t},{default:n(()=>{var x;return[m(_((x=u.toneOption[t])!=null?x:t),1)]}),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),rxCTCSS:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.rxCTCSS,"onUpdate:modelValue":t=>o.rxCTCSS=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.CTCSSOption,t=>(l(),V(f,{value:t},{default:n(()=>[m(_(t.toFixed(1)),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),rxDCS:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.rxDCS,"onUpdate:modelValue":t=>o.rxDCS=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.DCSOption,t=>(l(),V(f,{value:t},{default:n(()=>[m(_("0"+t),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),txTone:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.txTone,"onUpdate:modelValue":t=>o.txTone=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(Object.keys(u.toneOption),t=>(l(),V(f,{value:t},{default:n(()=>{var x;return[m(_((x=u.toneOption[t])!=null?x:t),1)]}),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),txCTCSS:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.txCTCSS,"onUpdate:modelValue":t=>o.txCTCSS=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.CTCSSOption,t=>(l(),V(f,{value:t},{default:n(()=>[m(_(t.toFixed(1)),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),txDCS:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.txDCS,"onUpdate:modelValue":t=>o.txDCS=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.DCSOption,t=>(l(),V(f,{value:t},{default:n(()=>[m(_("0"+t),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),step:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.step,"onUpdate:modelValue":t=>o.step=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.stepOption,t=>(l(),V(f,{value:t},{default:n(()=>[m(_(t.toFixed(1)),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),reverse:n(({record:o,rowIndex:s})=>[d(T,{modelValue:o.reverse,"onUpdate:modelValue":t=>o.reverse=t},null,8,["modelValue","onUpdate:modelValue"])]),scramb:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.scramb,"onUpdate:modelValue":t=>o.scramb=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.scrambOption,t=>(l(),V(f,null,{default:n(()=>[m(_(t),1)]),_:2},1024))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),busy:n(({record:o,rowIndex:s})=>[d(T,{modelValue:o.busy,"onUpdate:modelValue":t=>o.busy=t},null,8,["modelValue","onUpdate:modelValue"])]),pttid:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.pttid,"onUpdate:modelValue":t=>o.pttid=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(u.pttidOption,t=>(l(),V(f,null,{default:n(()=>[m(_(t),1)]),_:2},1024))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),mode:n(({record:o,rowIndex:s})=>[d(i,{modelValue:o.mode,"onUpdate:modelValue":t=>o.mode=t,"allow-clear":""},{default:n(()=>[(l(!0),S(b,null,C(Object.keys(u.modeOption),t=>(l(),V(f,{value:t},{default:n(()=>{var x;return[m(_((x=u.modeOption[t])!=null?x:t),1)]}),_:2},1032,["value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),dtmf:n(({record:o,rowIndex:s})=>[d(T,{modelValue:o.dtmf,"onUpdate:modelValue":t=>o.dtmf=t},null,8,["modelValue","onUpdate:modelValue"])]),operate:n(({record:o,rowIndex:s})=>[d(g,{onClick:t=>M((u.nowPage-1)*15+s)},{default:n(()=>[m("\u6E05\u7A7A")]),_:2},1032,["onClick"])]),_:1},8,["loading","columns","data","pagination"])]),_:1},8,["title"])])}}});const Bt=$(xt,[["__scopeId","data-v-613b0cfe"]]);export{Bt as default};
