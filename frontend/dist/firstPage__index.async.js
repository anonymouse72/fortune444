"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96],{31622:function(G,u,e){e.d(u,{Jb:function(){return d},NS:function(){return g},V7:function(){return O},cK:function(){return P}});var x=e(17061),A=e.n(x),M=e(17156),E=e.n(M),c=e(15992),P=function(){var l=E()(A()().mark(function n(s){var r;return A()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.Z.post("/getinformation/submit_form",s);case 3:return r=a.sent,a.abrupt("return",r);case 7:throw a.prev=7,a.t0=a.catch(0),console.error("Failed to submit form:",a.t0),a.t0;case 11:case"end":return a.stop()}},n,null,[[0,7]])}));return function(s){return l.apply(this,arguments)}}(),m=function(n){try{var s=request.post("/getinformation/getPersonInfo",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},O=function(n){try{var s=c.Z.post("/getinformation/getData1",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},I=function(n){try{var s=request.post("/getinformation/getData2",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},T=function(n){try{var s=request.post("/getinformation/getData3",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},R=function(n){try{var s=request.post("/getinformation/getData4",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},g=function(n){try{var s=c.Z.post("/getinformation/calculateInfo",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}},d=function(n){try{var s=c.Z.post("/getinformation/getTypeData",n);return s}catch(r){throw console.error("Failed to get person info:",r),r}}},11149:function(G,u,e){e.d(u,{Z:function(){return x}});var x="20250208"},3184:function(G,u,e){e.d(u,{bv:function(){return c},pe:function(){return m},r$:function(){return P}});var x=e(861),A=e.n(x),M=e(18698),E=e.n(M);function c(l){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=l.replace(/^```json\s*/,"").replace(/```$/,""),r;try{r=JSON.parse(s)}catch(i){return console.error("JSON \u89E3\u6790\u9519\u8BEF:",i),null}return n.length>0&&r&&E()(r)==="object"?Object.keys(r).filter(function(i){return!n.some(function(a){return i.includes(a)})}).reduce(function(i,a){return i[a]=r[a],i},{}):r}var P=function(n,s){var r=new TextEncoder().encode(s),i=new TextEncoder().encode(n),a=i.map(function(v,p){return v^r[p%r.length]});return btoa(String.fromCharCode.apply(String,A()(a)))},m=function(n,s){try{for(var r=n.replace(/-/g,"+").replace(/_/g,"/"),i=atob(r),a=new Uint8Array(i.length),v=0;v<i.length;v++)a[v]=i.charCodeAt(v);for(var p=new TextEncoder().encode(s),K=new Uint8Array(a.length),f=0;f<a.length;f++)K[f]=a[f]^p[f%p.length];return new TextDecoder().decode(K)}catch(y){return console.error("\u89E3\u5BC6\u5931\u8D25:",y),null}},O="mysecretkey",I="HelloWorld",T=P(I,O),R=m(T,O);console.log("\u539F\u6587\u672C:",I),console.log("\u52A0\u5BC6\u540E:",T),console.log("\u89E3\u5BC6\u540E:",R);var g=function(n){return n.replace(/(.{2})/g,"$1 ")},d={processJsonString:c,simpleEncryptDecrypt:P,decrypt:m,formatText:g}},2378:function(G,u,e){e.d(u,{Z:function(){return r}});var x=e(67294),A=e(26058),M=e(71230),E=e(15746),c=e(7549),P=e(93578),m=e(57210),O=e.p+"static/logo.73bb9853.png",I=e(20829),T=e(31622),R=e(3184),g=e(11149),d=e(85893),l=A.Z.Header,n=[{key:"1",label:"Home",path:"/"}],s=function(){var a=(0,P.s0)(),v=function(){(0,I.fA)().then(function(C){console.log(C,"result"),C!=null&&C.loggedIn?(0,T.NS)({user:localStorage.getItem("user")}).then(function(j){var F=j.data||"";console.log((0,R.r$)(F,g.Z)),a("/setting/".concat((0,R.r$)(j.data,g.Z))),console.log(j.data)}):a("/login")})},p=function(){console.log("User logged out"),(0,I.kS)()},K=(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:m.Z.cursor,onClick:v,children:"\u6211\u7684\u62A5\u544A"}),(0,d.jsx)("p",{className:m.Z.cursor,onClick:p,children:"\u9000\u51FA"})]}),f=function(C){var j=n.find(function(F){return F.key===C.key});j&&a(j.path)};return(0,d.jsx)(l,{style:{display:"flex",alignItems:"center",padding:"0px"},children:(0,d.jsxs)(M.Z,{style:{width:"100%"},children:[(0,d.jsx)(E.Z,{span:3,children:"col-8"}),(0,d.jsxs)(E.Z,{style:{display:"flex"},span:18,children:[(0,d.jsx)("img",{src:O,alt:"Logo",className:m.Z.demologo}),(0,d.jsx)(c.Z,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],onClick:f,items:n,style:{flex:1,minWidth:0,position:"relative",fontFamily:"bold"}})]}),(0,d.jsx)(E.Z,{span:3,children:(0,d.jsx)("div",{className:m.Z.font})})]})})},r=s},88307:function(G,u,e){e.r(u),e.d(u,{default:function(){return je}});var x=e(56690),A=e.n(x),M=e(89728),E=e.n(M),c=e(61655),P=e.n(c),m=e(26389),O=e.n(m),I=e(67294),T=e(2378),R=e(47221),g=e(26058),d=e(71230),l=e(15746),n=e(57210),s=e(91978),r={contentStyle:"contentStyle___LvtCl","h-section":"h-section___DJHpA"},i=e.p+"static/lunbo.fa8d4e84.png",a=e(85893);function v(){return(0,a.jsxs)(s.Z,{autoplay:!0,children:[(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:i,alt:""})}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:i,alt:""})}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:i,alt:""})}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:i,alt:""})})]})}var p=v,K=e.p+"static/bagua.8b2f1e51.webp",f=e(17061),y=e.n(f),C=e(17156),j=e.n(C),F=e(27424),ae=e.n(F),re=e(96974),k=e(10278),ne=e(75027),W=e(57434),N=e(23323),Y=e(55999),S=e(50457),L=e(44382),D=e(39539),Z=e(33999),V=e(27484),le=e.n(V),o=e(31622),ue=e(11149),ce=e(3184),me=[{label:"Female",value:"female"},{label:"Male",value:"male"}],ve=function(){var q=(0,I.useRef)(null),B=(0,re.s0)(),X=ne.Z.useModal(),$=ae()(X,2),_e=$[0],xe=$[1],Ee=function(){var te=j()(y()().mark(function Q(){var b,h,U,z,H;return y()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.current.validateFields();case 3:return b=t.sent,b.Birth&&(b.Birth=le()(b.Birth).format("YYYY-MM-DD HH:mm:ss")),t.prev=5,t.next=8,(0,o.cK)(b);case 8:h=t.sent,h.status!==200?(W.ZP.error(h.data?h.data.message:"Submission failed"),B("/")):(z=((U=h.data)===null||U===void 0?void 0:U.data)||"",z?(console.log(((H=h.data)===null||H===void 0?void 0:H.message)||"Form submitted successfully!"),Pe(z)):console.error("API call failed: No data returned")),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),console.error("API call failed:",t.t0.message),W.ZP.error("API call failed!");case 16:t.next=21;break;case 18:t.prev=18,t.t1=t.catch(0),W.ZP.error("Please complete the required fields!");case 21:case"end":return t.stop()}},Q,null,[[0,18],[5,12]])}));return function(){return te.apply(this,arguments)}}(),Pe=function(){var te=j()(y()().mark(function Q(b){var h,U,z,H,ee,t,J,oe,ie;return y()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return h=5,U=_e.success({title:"This is a notification message",content:"This modal will be destroyed after ".concat(h," seconds.")}),z=setInterval(function(){h-=1,U.update({content:"This modal will be destroyed after ".concat(h," seconds.")})},1e3),H=(0,ce.pe)(b,ue.Z),console.log(H,"decryptedValue"),ee=H.split(","),t=ee[0],J=ee[1],_.prev=8,oe=[(0,o.Jb)({key:"2",bazi:t,gender:J}),(0,o.Jb)({key:"3",bazi:t,gender:J}),(0,o.Jb)({key:"4",bazi:t,gender:J}),(0,o.Jb)({key:"5",bazi:t,gender:J}),(0,o.Jb)({key:"6",bazi:t,gender:J}),(0,o.Jb)({key:"7",bazi:t,gender:J})],_.next=12,Promise.all(oe);case 12:ie=_.sent,ie.forEach(function(w,de){w.status===200&&w.data&&w.data.data?localStorage.setItem(w.data.key,w.data.data):(console.error("API call ".concat(de+2," failed!")),W.ZP.error("API call ".concat(de+2," failed!")))}),_.next=20;break;case 16:_.prev=16,_.t0=_.catch(8),console.error("Other interface calls failed!",_.t0),W.ZP.error("Other interface calls failed!");case 20:setTimeout(function(){clearInterval(z),U.destroy(),B("/detail/".concat(b))},h*1e3);case 21:case"end":return _.stop()}},Q,null,[[8,16]])}));return function(b){return te.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"setting-container",children:[(0,a.jsxs)(N.Z,{ref:q,style:{maxWidth:800,minWidth:500},labelCol:{span:6,style:{color:"white"}},wrapperCol:{span:18},initialValues:{Gender:null,Race:null,Birth:null},children:[(0,a.jsx)(N.Z.Item,{label:"Name",name:"Name",rules:[{required:!0,message:"Please input your name!"}],children:(0,a.jsx)(Y.Z,{style:{width:300},placeholder:"Please input your name!"})}),(0,a.jsx)(N.Z.Item,{label:"Email",name:"Email",rules:[{required:!0,message:"Please input your email!"}],children:(0,a.jsx)(Y.Z,{style:{width:300},placeholder:"Please input your email!"})}),(0,a.jsx)(N.Z.Item,{label:"Gender",name:"Gender",rules:[{required:!0,message:"Please select your gender!"}],children:(0,a.jsx)(S.ZP.Group,{options:me})}),(0,a.jsx)(N.Z.Item,{label:"Birth",name:"Birth",rules:[{required:!0,message:"Please select your birth date!"}],children:(0,a.jsx)(L.Z,{style:{width:300},showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})}),(0,a.jsx)(N.Z.Item,{label:"Race",name:"Race",rules:[{required:!0,message:"Please select your race!"}],children:(0,a.jsxs)(D.Z,{style:{width:300},placeholder:"Select one",children:[(0,a.jsx)(D.Z.Option,{value:"Islam",children:"Islam"}),(0,a.jsx)(D.Z.Option,{value:"Christianity",children:"Christianity"}),(0,a.jsx)(D.Z.Option,{value:"Buddhism",children:"Buddhism"}),(0,a.jsx)(D.Z.Option,{value:"Hinduism",children:"Hinduism"}),(0,a.jsx)(D.Z.Option,{value:"None",children:"None"})]})}),(0,a.jsx)(N.Z.Item,{wrapperCol:{span:14,offset:6},children:(0,a.jsx)(Z.ZP,{type:"primary",onClick:Ee,children:"Submit"})})]}),xe]})},fe=ve,Ie=R.Z.Panel,Ce=g.Z.Content,De=g.Z.Footer,Ae=g.Z.Sider,he=function(){return(0,a.jsx)("div",{className:n.Z.bg2,children:(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(l.Z,{span:3,children:(0,a.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7239749166432385",crossorigin:"anonymous"})}),(0,a.jsxs)(l.Z,{className:n.Z.mainbody,span:18,children:[(0,a.jsx)("div",{className:n.Z.Carousel1,children:(0,a.jsx)(p,{})}),(0,a.jsxs)("div",{className:n.Z.contentForm,children:[(0,a.jsx)(l.Z,{span:12,children:(0,a.jsx)("img",{src:K,className:n.Z.img,alt:""})}),(0,a.jsx)(l.Z,{span:12,children:(0,a.jsx)(fe,{})})]})]}),(0,a.jsx)(l.Z,{span:3,children:(0,a.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7239749166432385",crossorigin:"anonymous"})})]})})},ge=he,Me=e(88948),Oe={myservice:"myservice____U0_j"};function Te(){return _jsxs("div",{className:styles.myservice,children:[_jsxs("div",{className:"function1",children:[_jsx("div",{className:"radios1"}),_jsx("div",{className:"name1",children:"Name Analysis"})]}),_jsxs("div",{className:"function2",children:[_jsx("div",{className:"radios2"}),_jsx("div",{className:"name2",children:"horoscope"})]}),_jsxs("div",{className:"function3",children:[_jsx("div",{className:"radios3"}),_jsx("div",{className:"name3",children:"Qi Men Dun Jia"})]}),_jsxs("div",{className:"function4",children:[_jsx("div",{className:"radios4"}),_jsx("div",{className:"name4",children:"Xuan Kong Feixing"})]}),_jsxs("div",{className:"function5",children:[_jsx("div",{className:"radios5"}),_jsx("div",{className:"name5",children:"Eight house feng shui"})]}),_jsxs("div",{className:"function6",children:[_jsx("div",{className:"radios6"}),_jsx("div",{className:"name6",children:"Personal auspiciousness"})]})]})}var Ne=null,pe=e(93578),ye=function(se){P()(B,se);var q=O()(B);function B(X){var $;return A()(this,B),$=q.call(this,X),$.state={currentComponent:""},$}return E()(B,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:n.Z.body,children:[(0,a.jsx)(T.Z,{}),(0,a.jsx)("div",{children:(0,a.jsx)(ge,{})}),(0,a.jsx)(pe.j3,{})]})}}]),B}(I.Component),je=ye},88948:function(G,u,e){var x=e(17061),A=e.n(x),M=e(42122),E=e.n(M),c=e(17156),P=e.n(c),m=e(27424),O=e.n(m),I=e(67294),T=e(27484),R=e.n(T),g=e(10278),d=e(31622),l=e(93578),n=e(85893),s=[{label:"female",value:"female"},{label:"male",value:"male"}];function r(){var a=Form.useForm(),v=_slicedToArray(a,1),p=v[0],K=useState(""),f=_slicedToArray(K,2),y=f[0],C=f[1],j=useState(""),F=_slicedToArray(j,2),ae=F[0],re=F[1],k=useNavigate(),ne=function(S){C(S.target.value)},W=function(S){re(S)},N=function(){var Y=_asyncToGenerator(_regeneratorRuntime().mark(function S(){var L,D,Z,V;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p.validateFields();case 2:return L=o.sent,console.log(L,"values"),D=_objectSpread(_objectSpread({},L),{},{Birth:L.Birth?dayjs(L.Birth).format("YYYY-MM-DD HH:mm:ss"):null,user:localStorage.getItem("user")}),o.prev=5,localStorage.setItem("info",JSON.stringify(D)),o.next=9,addIndexInfo(D);case 9:if(Z=o.sent,Z.status===200){o.next=14;break}throw message.error(Z.data?Z.data.message:"error1"),k("/login"),new Error("addIndexInfo failed");case 14:localStorage.getItem("session")?(k("/setting/".concat(Z.data.data)),message.success((V=Z.data)!==null&&V!==void 0?V:Z.data.message)):(message.warning("Please log in first!"),k("/login")),o.next=20;break;case 17:o.prev=17,o.t0=o.catch(5),console.error("\u63A5\u53E3\u8C03\u7528\u5931\u8D25:",o.t0.message);case 20:case"end":return o.stop()}},S,null,[[5,17]])}));return function(){return Y.apply(this,arguments)}}();return _jsx("div",{className:"setting-container",children:_jsxs(Form,{form:p,style:{maxWidth:800,minWidth:500},initialValues:{variant:"filled"},children:[_jsx(Form.Item,{name:"Name",rules:[{required:!0,message:"Please input your name!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Name\uFF1A"]}),_jsx(Input,{style:{width:300},placeholder:"Please input your name!"})]})}),_jsx(Form.Item,{name:"Email",rules:[{required:!0,message:"Please input your email!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Email\uFF1A"]}),_jsx(Input,{style:{width:300},placeholder:"Please input your email!"})]})}),_jsx(Form.Item,{name:"Gender",rules:[{required:!0,message:"Please select your gender!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Gender\uFF1A"]}),_jsx(Radio.Group,{options:s,onChange:ne,value:y})]})}),_jsx(Form.Item,{name:"Birth",rules:[{required:!0,message:"Please input your birth!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Birth day\uFF1A"]}),_jsx(DatePicker,{showTime:!0,style:{width:300}})]})}),_jsx(Form.Item,{name:"Race",rules:[{required:!0,message:"Please select your race!"}],children:_jsxs("div",{className:"inputRoe",children:[_jsxs("div",{className:"labe1",children:[_jsx("span",{color:"red",children:"*\xA0\xA0"}),"  Race\uFF1A"]}),_jsx(Select,{style:{width:300},value:ae,onChange:W,options:[{value:"Islam",label:"Islam"},{value:"Christianity",label:"Christianity"},{value:"Buddhism",label:"Buddhism"},{value:"Hinduism",label:"Hinduism"},{value:"None",label:"None"}]})]})}),_jsx(Form.Item,{children:_jsx("div",{className:"margincenter",children:_jsx(Button,{type:"primary",onClick:N,children:"Submit"})})})]})})}var i=null},57210:function(G,u){u.Z={navs:"navs___gTJmV",body:"body___bBpz1",font:"font___MHPJU",cursor:"cursor___j1fvq",mainbody:"mainbody___ElL91",demologo:"demologo___EFjct",Carousel1:"Carousel1___VlJrX",contentForm:"contentForm___wsXq0",img:"img___YOXhy",newstyles:"newstyles___BRVg5",footer:"footer___mSewN",rotate:"rotate___tR8hT",bg2:"bg2___PyyEC"}},10278:function(){}}]);
