"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96],{31622:function(b,u,e){e.d(u,{Jb:function(){return i},NS:function(){return f},V7:function(){return A},cK:function(){return y}});var p=e(17061),C=e.n(p),D=e(17156),j=e.n(D),m=e(15992),y=function(){var t=j()(C()().mark(function n(s){var r;return C()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.Z.post("/getinformation/submit_form",s);case 3:return r=a.sent,a.abrupt("return",r);case 7:throw a.prev=7,a.t0=a.catch(0),console.error("Failed to submit form:",a.t0),a.t0;case 11:case"end":return a.stop()}},n,null,[[0,7]])}));return function(s){return t.apply(this,arguments)}}(),c=function(n){try{var s=request.post("/getinformation/getPersonInfo",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},A=function(n){try{var s=m.Z.post("/getinformation/getData1",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},x=function(n){try{var s=request.post("/getinformation/getData2",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},O=function(n){try{var s=request.post("/getinformation/getData3",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},Z=function(n){try{var s=request.post("/getinformation/getData4",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},f=function(n){try{var s=m.Z.post("/getinformation/calculateInfo",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},i=function(n){try{var s=m.Z.post("/getinformation/getTypeData",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}}},11149:function(b,u,e){e.d(u,{Z:function(){return p}});var p="20250208"},3184:function(b,u,e){e.d(u,{bv:function(){return m},pe:function(){return c},r$:function(){return y}});var p=e(861),C=e.n(p),D=e(18698),j=e.n(D);function m(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=t.replace(/^```json\s*/,"").replace(/```$/,""),r;try{r=JSON.parse(s)}catch(l){return console.error("JSON \u89E3\u6790\u9519\u8BEF:",l),null}return n.length>0&&r&&j()(r)==="object"?Object.keys(r).filter(function(l){return!n.some(function(a){return l.includes(a)})}).reduce(function(l,a){return l[a]=r[a],l},{}):r}var y=function(n,s){var r=new TextEncoder().encode(s),l=new TextEncoder().encode(n),a=l.map(function(v,g){return v^r[g%r.length]});return btoa(String.fromCharCode.apply(String,C()(a)))},c=function(n,s){try{for(var r=n.replace(/-/g,"+").replace(/_/g,"/"),l=atob(r),a=new Uint8Array(l.length),v=0;v<l.length;v++)a[v]=l.charCodeAt(v);for(var g=new TextEncoder().encode(s),S=new Uint8Array(a.length),h=0;h<a.length;h++)S[h]=a[h]^g[h%g.length];return new TextDecoder().decode(S)}catch(M){return console.error("\u89E3\u5BC6\u5931\u8D25:",M),null}},A="mysecretkey",x="HelloWorld",O=y(x,A),Z=c(O,A);console.log("\u539F\u6587\u672C:",x),console.log("\u52A0\u5BC6\u540E:",O),console.log("\u89E3\u5BC6\u540E:",Z);var f=function(n){return n.replace(/(.{2})/g,"$1 ")},i={processJsonString:m,simpleEncryptDecrypt:y,decrypt:c,formatText:f}},2378:function(b,u,e){e.d(u,{Z:function(){return r}});var p=e(67294),C=e(26058),D=e(71230),j=e(15746),m=e(7549),y=e(93578),c=e(57210),A=e.p+"static/logo.73bb9853.png",x=e(20829),O=e(31622),Z=e(3184),f=e(11149),i=e(85893),t=C.Z.Header,n=[{key:"1",label:"Home",path:"/"}],s=function(){var a=(0,y.s0)(),v=function(){(0,x.fA)().then(function(E){console.log(E,"result"),E!=null&&E.loggedIn?(0,O.NS)({user:localStorage.getItem("user")}).then(function(P){var T=P.data||"";console.log((0,Z.r$)(T,f.Z)),a("/setting/".concat((0,Z.r$)(P.data,f.Z))),console.log(P.data)}):a("/login")})},g=function(){console.log("User logged out"),(0,x.kS)()},S=(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:c.Z.cursor,onClick:v,children:"\u6211\u7684\u62A5\u544A"}),(0,i.jsx)("p",{className:c.Z.cursor,onClick:g,children:"\u9000\u51FA"})]}),h=function(E){var P=n.find(function(T){return T.key===E.key});P&&a(P.path)};return(0,i.jsx)(t,{style:{display:"flex",alignItems:"center",padding:"0px"},children:(0,i.jsxs)(D.Z,{style:{width:"100%"},children:[(0,i.jsx)(j.Z,{span:3,children:"col-8"}),(0,i.jsxs)(j.Z,{style:{display:"flex"},span:18,children:[(0,i.jsx)("img",{src:A,alt:"Logo",className:c.Z.demologo}),(0,i.jsx)(m.Z,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],onClick:h,items:n,style:{flex:1,minWidth:0,position:"relative",fontFamily:"bold"}})]}),(0,i.jsx)(j.Z,{span:3,children:(0,i.jsx)("div",{className:c.Z.font})})]})})},r=s},88307:function(b,u,e){e.r(u),e.d(u,{default:function(){return le}});var p=e(56690),C=e.n(p),D=e(89728),j=e.n(D),m=e(61655),y=e.n(m),c=e(26389),A=e.n(c),x=e(67294),O=e(2378),Z=e(47221),f=e(26058),i=e(71230),t=e(15746),n=e(57210),s=e(91978),r={contentStyle:"contentStyle___LvtCl","h-section":"h-section___DJHpA"},l=e.p+"static/lunbo.fa8d4e84.png",a=e(85893);function v(){return(0,a.jsxs)(s.Z,{autoplay:!0,children:[(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:l,alt:""})}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:l,alt:""})}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:l,alt:""})}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:l,alt:""})})]})}var g=v,S=e.p+"static/bagua.8b2f1e51.webp",h=e(17061),M=e.n(h),E=e(17156),P=e.n(E),T=e(96974),q=e(10278),W=e(45803),_=e(23323),$=e(55999),V=e(50457),z=e(44382),I=e(39539),R=e(37026),B=e(27484),L=e.n(B),N=e(31622),U=[{label:"Female",value:"female"},{label:"Male",value:"male"}],ee=function(){var J=(0,x.useRef)(null),F=(0,T.s0)(),H=function(){var Y=P()(M()().mark(function ae(){var G,K,Q,w,k;return M()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,J.current.validateFields();case 3:return G=o.sent,G.Birth&&(G.Birth=L()(G.Birth).format("YYYY-MM-DD HH:mm:ss")),o.prev=5,o.next=8,(0,N.cK)(G);case 8:K=o.sent,K.status!==200?(W.ZP.error(K.data?K.data.message:"Submission failed"),F("/")):(w=((Q=K.data)===null||Q===void 0?void 0:Q.data)||"",w?(W.ZP.success(((k=K.data)===null||k===void 0?void 0:k.message)||"Form submitted successfully!"),F("/detail/".concat(w))):console.error("API call failed:",error.message)),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(5),console.error("API call failed:",o.t0.message);case 15:o.next=20;break;case 17:o.prev=17,o.t1=o.catch(0),W.ZP.error("Please complete the required fields!");case 20:case"end":return o.stop()}},ae,null,[[0,17],[5,12]])}));return function(){return Y.apply(this,arguments)}}();return(0,a.jsx)("div",{className:"setting-container",children:(0,a.jsxs)(_.Z,{ref:J,style:{maxWidth:800,minWidth:500},labelCol:{span:6,style:{color:"white"}},wrapperCol:{span:18},initialValues:{Gender:null,Race:null,Birth:null},children:[(0,a.jsx)(_.Z.Item,{label:"Name",name:"Name",rules:[{required:!0,message:"Please input your name!"}],children:(0,a.jsx)($.Z,{style:{width:300},placeholder:"Please input your name!"})}),(0,a.jsx)(_.Z.Item,{label:"Email",name:"Email",rules:[{required:!0,message:"Please input your email!"}],children:(0,a.jsx)($.Z,{style:{width:300},placeholder:"Please input your email!"})}),(0,a.jsx)(_.Z.Item,{label:"Gender",name:"Gender",rules:[{required:!0,message:"Please select your gender!"}],children:(0,a.jsx)(V.ZP.Group,{options:U})}),(0,a.jsx)(_.Z.Item,{label:"Birth",name:"Birth",rules:[{required:!0,message:"Please select your birth date!"}],children:(0,a.jsx)(z.Z,{style:{width:300},showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})}),(0,a.jsx)(_.Z.Item,{label:"Race",name:"Race",rules:[{required:!0,message:"Please select your race!"}],children:(0,a.jsxs)(I.Z,{style:{width:300},placeholder:"Select one",children:[(0,a.jsx)(I.Z.Option,{value:"Islam",children:"Islam"}),(0,a.jsx)(I.Z.Option,{value:"Christianity",children:"Christianity"}),(0,a.jsx)(I.Z.Option,{value:"Buddhism",children:"Buddhism"}),(0,a.jsx)(I.Z.Option,{value:"Hinduism",children:"Hinduism"}),(0,a.jsx)(I.Z.Option,{value:"None",children:"None"})]})}),(0,a.jsx)(_.Z.Item,{wrapperCol:{span:14,offset:6},children:(0,a.jsx)(R.ZP,{type:"primary",onClick:H,children:"Submit"})})]})})},d=ee,oe=Z.Z.Panel,ie=f.Z.Content,de=f.Z.Footer,ue=f.Z.Sider,re=function(){return(0,a.jsx)("div",{className:n.Z.bg2,children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(t.Z,{span:3}),(0,a.jsxs)(t.Z,{className:n.Z.mainbody,span:18,children:[(0,a.jsx)("div",{className:n.Z.Carousel1,children:(0,a.jsx)(g,{})}),(0,a.jsxs)("div",{className:n.Z.contentForm,children:[(0,a.jsx)(t.Z,{span:12,children:(0,a.jsx)("img",{src:S,className:n.Z.img,alt:""})}),(0,a.jsx)(t.Z,{span:12,children:(0,a.jsx)(d,{})})]})]}),(0,a.jsx)(t.Z,{span:3})]})})},ne=re,me=e(88948),ce={myservice:"myservice____U0_j"};function ve(){return _jsxs("div",{className:styles.myservice,children:[_jsxs("div",{className:"function1",children:[_jsx("div",{className:"radios1"}),_jsx("div",{className:"name1",children:"Name Analysis"})]}),_jsxs("div",{className:"function2",children:[_jsx("div",{className:"radios2"}),_jsx("div",{className:"name2",children:"horoscope"})]}),_jsxs("div",{className:"function3",children:[_jsx("div",{className:"radios3"}),_jsx("div",{className:"name3",children:"Qi Men Dun Jia"})]}),_jsxs("div",{className:"function4",children:[_jsx("div",{className:"radios4"}),_jsx("div",{className:"name4",children:"Xuan Kong Feixing"})]}),_jsxs("div",{className:"function5",children:[_jsx("div",{className:"radios5"}),_jsx("div",{className:"name5",children:"Eight house feng shui"})]}),_jsxs("div",{className:"function6",children:[_jsx("div",{className:"radios6"}),_jsx("div",{className:"name6",children:"Personal auspiciousness"})]})]})}var he=null,se=e(93578),te=function(X){y()(F,X);var J=A()(F);function F(H){var Y;return C()(this,F),Y=J.call(this,H),Y.state={currentComponent:""},Y}return j()(F,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:n.Z.body,children:[(0,a.jsx)(O.Z,{}),(0,a.jsx)("div",{children:(0,a.jsx)(ne,{})}),(0,a.jsx)(se.j3,{})]})}}]),F}(x.Component),le=te},88948:function(b,u,e){var p=e(17061),C=e.n(p),D=e(42122),j=e.n(D),m=e(17156),y=e.n(m),c=e(27424),A=e.n(c),x=e(67294),O=e(27484),Z=e.n(O),f=e(10278),i=e(31622),t=e(93578),n=e(85893),s=[{label:"female",value:"female"},{label:"male",value:"male"}];function r(){var a=Form.useForm(),v=_slicedToArray(a,1),g=v[0],S=useState(""),h=_slicedToArray(S,2),M=h[0],E=h[1],P=useState(""),T=_slicedToArray(P,2),q=T[0],W=T[1],_=useNavigate(),$=function(R){E(R.target.value)},V=function(R){W(R)},z=function(){var I=_asyncToGenerator(_regeneratorRuntime().mark(function R(){var B,L,N,U;return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,g.validateFields();case 2:return B=d.sent,console.log(B,"values"),L=_objectSpread(_objectSpread({},B),{},{Birth:B.Birth?dayjs(B.Birth).format("YYYY-MM-DD HH:mm:ss"):null,user:localStorage.getItem("user")}),d.prev=5,localStorage.setItem("info",JSON.stringify(L)),d.next=9,addIndexInfo(L);case 9:if(N=d.sent,N.status===200){d.next=14;break}throw message.error(N.data?N.data.message:"error1"),_("/login"),new Error("addIndexInfo failed");case 14:localStorage.getItem("session")?(_("/setting/".concat(N.data.data)),message.success((U=N.data)!==null&&U!==void 0?U:N.data.message)):(message.warning("Please log in first!"),_("/login")),d.next=20;break;case 17:d.prev=17,d.t0=d.catch(5),console.error("\u63A5\u53E3\u8C03\u7528\u5931\u8D25:",d.t0.message);case 20:case"end":return d.stop()}},R,null,[[5,17]])}));return function(){return I.apply(this,arguments)}}();return _jsx("div",{className:"setting-container",children:_jsxs(Form,{form:g,style:{maxWidth:800,minWidth:500},initialValues:{variant:"filled"},children:[_jsx(Form.Item,{name:"Name",rules:[{required:!0,message:"Please input your name!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Name\uFF1A"]}),_jsx(Input,{style:{width:300},placeholder:"Please input your name!"})]})}),_jsx(Form.Item,{name:"Email",rules:[{required:!0,message:"Please input your email!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Email\uFF1A"]}),_jsx(Input,{style:{width:300},placeholder:"Please input your email!"})]})}),_jsx(Form.Item,{name:"Gender",rules:[{required:!0,message:"Please select your gender!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Gender\uFF1A"]}),_jsx(Radio.Group,{options:s,onChange:$,value:M})]})}),_jsx(Form.Item,{name:"Birth",rules:[{required:!0,message:"Please input your birth!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Birth day\uFF1A"]}),_jsx(DatePicker,{showTime:!0,style:{width:300}})]})}),_jsx(Form.Item,{name:"Race",rules:[{required:!0,message:"Please select your race!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Race\uFF1A"]}),_jsx(Select,{style:{width:300},value:q,onChange:V,options:[{value:"Islam",label:"Islam"},{value:"Christianity",label:"Christianity"},{value:"Buddhism",label:"Buddhism"},{value:"Hinduism",label:"Hinduism"},{value:"None",label:"None"}]})]})}),_jsx(Form.Item,{children:_jsx("div",{className:"margincenter",children:_jsx(Button,{type:"primary",onClick:z,children:"Submit"})})})]})})}var l=null},57210:function(b,u){u.Z={navs:"navs___gTJmV",body:"body___bBpz1",font:"font___MHPJU",cursor:"cursor___j1fvq",mainbody:"mainbody___ElL91",demologo:"demologo___EFjct",Carousel1:"Carousel1___VlJrX",contentForm:"contentForm___wsXq0",img:"img___YOXhy",newstyles:"newstyles___BRVg5",footer:"footer___mSewN",rotate:"rotate___tR8hT",bg2:"bg2___PyyEC"}},10278:function(){}}]);
