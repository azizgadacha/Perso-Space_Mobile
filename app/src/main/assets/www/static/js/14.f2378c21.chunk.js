(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[14],{468:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(196),r=n.n(a),i=function(e){return e<2?{label:"Poor",color:r.a.errorMain}:e<3?{label:"Weak",color:r.a.warningDark}:e<4?{label:"Normal",color:r.a.orangeMain}:e<5?{label:"Good",color:r.a.successMain}:e<6?{label:"Strong",color:r.a.successDark}:void 0},c=function(e){var t=0;return e.length>5&&t++,e.length>7&&t++,function(e){return new RegExp(/[0-9]/).test(e)}(e)&&t++,function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&t++,function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&t++,t}},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(5),r=n(81),i=n(503),c=n(258),o=n(1),s=["icon","sx"];function l(e){var t=e.icon,n=e.sx,l=Object(r.a)(e,s);return Object(o.jsx)(c.a,Object(a.a)({component:i.a,icon:t,sx:Object(a.a)({},n)},l))}},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(5),r=n(81),i=n(465),c=n(462),o=n(1),s=["searchQuery"];function l(e){e.searchQuery;var t=Object(r.a)(e,s);return Object(o.jsxs)(i.a,Object(a.a)(Object(a.a)({},t),{},{children:[Object(o.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsx)(c.a,{variant:"body2",align:"center",children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 No results found for"})]}))}},501:function(e,t,n){"use strict";n(0);var a=n(43),r=n(431),i=n(31),c=n(432),o=n(99),s=n(696),l=n(1);t.a=function(e){var t=Object(a.a)(),n=Object(r.a)(t.breakpoints.down("sm"));return Object(l.jsx)(i.a,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(l.jsx)(i.a,{item:!0,children:Object(l.jsx)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:Object(l.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(l.jsxs)(o.a,{color:t.palette.secondary.main,gutterBottom:!0,variant:"h3",children:["Delete ",e.type]}),Object(l.jsx)(s.a,{}),Object(l.jsxs)(o.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:["Are you sure to delete ","User"==e.type?e.obj.username:"Widget"==e.type?e.obj.WidgetName:e.name," ?"]})]})})})})}},527:function(e,t,n){"use strict";n(0);var a=n(43),r=n(431),i=n(31),c=n(432),o=n(99),s=n(1);t.a=function(e){var t=Object(a.a)(),n=Object(r.a)(t.breakpoints.down("sm"));return Object(s.jsx)(i.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center","stroke-linecap":"round",children:Object(s.jsx)(i.a,{item:!0,xs:12,children:Object(s.jsx)(i.a,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(s.jsx)(i.a,{item:!0,children:Object(s.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(s.jsxs)(o.a,{color:t.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:["Edit ",e.type]}),Object(s.jsxs)(o.a,{variant:"caption",fontSize:"16px",textAlign:n?"center":"",children:["Edit ",e.name]})]})})})})})}},528:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(5),r=n(18),i=n(580),c=n(755),o=n(0),s=n(1),l=Object(r.a)(i.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}}));Object(r.a)(c.a)((function(e){var t=e.theme;return{width:240,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function d(e){var t=e.numSelected;return Object(s.jsx)(o.Fragment,{children:Object(s.jsx)(l,{sx:Object(a.a)({},t>0&&{color:"primary.main",bgcolor:"primary.lighter"})})})}},532:function(e,t,n){"use strict";var a=n(5),r=(n(190),n(0)),i=n(426),c=n(439),o=n(525),s=n(258),l=n(132),d=n(22),j=n(9),u=n(431),b=n(31),p=n(501),h=n(3),m=n(12),x=n(26),g=n(448),O=n(454),f=n(345),y=n.n(f),v=n(91),w=n.n(v),S=n(79),C=n(750),k=n(133),I=n(30),W=n(1),R=function(e){var t,n,a,i=e.obj,c=e.type,o=Object(r.useState)(!1),s=Object(m.a)(o,2),l=s[0],u=s[1],p=Object(d.c)((function(e){return e.account})),f=Object(d.b)(),v=Object(I.g)(),R=Object(I.i)().id;return Object(W.jsx)(r.Fragment,{children:Object(W.jsxs)(b.a,{container:!0,alignItems:"center",children:[Object(W.jsx)(b.a,{xs:6,children:Object(W.jsx)(g.a,{sx:{ml:0,mr:3,mt:2},children:Object(W.jsx)(S.a,{children:l?Object(W.jsx)(C.a,(t={variant:"contained",fullWidth:!0,size:"large",loading:!0,loadingPosition:"start",startIcon:Object(W.jsx)(y.a,{})},Object(h.a)(t,"variant","outlined"),Object(h.a)(t,"children",k.i),t)):Object(W.jsx)(O.a,{disableElevation:!0,fullWidth:!0,onClick:function(){"User"==c?(n="api/User/deleteUser",a={token:p.token,user_id:p.user._id,userDeleted_id:i._id}):"Widget"==c&&(i.sourceDB?(n="api/Data/deleteLinkWidget",a={token:p.token,superiorID:R,type:i.type,WidgetName:i.WidgetName,idData:i.idData}):(n="api/Widget/deleteWidget",a={token:p.token,WidgetName:i.WidgetName,superiorID:i.superior_id})),u(!0),w.a.post(x.a.API_SERVER+n,a).then((function(e){e.data.notConnected?(f({type:j.Q}),v.push("/login"),f({type:j.i,payload:{text:"You are no longer connected",severity:"error"}})):e.data.success?(f({type:j.o}),f("User"==c?{type:j.gb,payload:{user:e.data.user}}:{type:j.A,payload:{widget:e.data.widget}}),f({type:j.i,payload:{text:"".concat(c," has been deleted"),severity:"success"}}),f({type:j.o})):(f({type:j.o}),v.push(x.a.defaultPath),f({type:j.i,payload:{text:e.data.msg,severity:"error"}}))})).catch((function(e){f({type:j.o}),f({type:j.i,payload:{text:"internel problem please try later",severity:"error"}})}))},type:"submit",size:"large",variant:"contained",color:"error",children:j.x})})})}),Object(W.jsx)(b.a,{xs:6,children:Object(W.jsx)(g.a,{sx:{mt:2,marginLeft:1},children:Object(W.jsx)(S.a,{children:Object(W.jsx)(O.a,{disableElevation:!0,size:"large",disabled:l,onClick:function(){f({type:j.o})},fullWidth:!0,variant:"contained",color:"secondary",children:k.f})})})})]})})},E={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:100},P={padding:"50px",zIndex:100,maxWidth:"95%",borderRadius:3,position:"absolute",top:"50%",left:"50%",radius:3,transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"0px solid #000"};t.a=function(e){var t=Object(u.a)((function(e){return e.breakpoints.down("sm")})),n=Object(d.b)();Object(d.c)((function(e){return e.account}));Object(r.useEffect)((function(){return function(){n({type:j.p})}}),[]);var h=Object(d.c)((function(e){return e.modal})),m=function(){n({type:j.o})};return Object(W.jsx)(r.Fragment,{children:Object(W.jsx)(c.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:h.ModalDeleteState,onClose:m,closeAfterTransition:!0,BackdropProps:{timeout:500},children:Object(W.jsx)("div",{style:E,children:Object(W.jsx)(o.a,{onClickAway:m,children:Object(W.jsx)(i.a,{in:h.ModalDeleteState,children:Object(W.jsx)(s.a,{sx:t?Object(a.a)({width:300},P):Object(a.a)({width:450},P),children:Object(W.jsxs)(l.a,{children:[Object(W.jsx)(p.a,{obj:h.objet,type:e.type}),Object(W.jsx)(b.a,{container:!0,alignItems:"center",children:Object(W.jsx)(R,{obj:h.objet,type:e.type})})]})})})})})})})}},745:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(5),i=n(3),c=n(190),o=n(0),s=n.n(o),l=n(706),d=n(337),j=n(462),u=n(577),b=n(578),p=n(579),h=n(575),m=n(576),x=n(569),g=n(132),O=n(91),f=n.n(O),y=n(26),v=n(22),w=n(9),S=n(566),C=n(574),k=n(571),I=n(258),W=n(1);function R(e){var t=e.order,n=e.orderBy,a=(e.rowCount,e.headLabel),i=(e.numSelected,e.onRequestSort);e.onSelectAllClick;return Object(W.jsx)(C.a,{children:Object(W.jsxs)(h.a,{children:[Object(W.jsx)(m.a,{padding:"checkbox"}),a.map((function(e){return Object(W.jsx)(m.a,{align:e.alignRight,sortDirection:n===e.id&&t,children:Object(W.jsxs)(k.a,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){i(e,a)}),children:[e.label,n===e.id?Object(W.jsx)(I.a,{sx:Object(r.a)({},S.a),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var E=n(18),P=n(580),B=n(755),A=n(762),z=n(751),N=n(761),F=n(443),_=n(131),L=n(479),M=Object(E.a)(P.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),D=Object(E.a)(B.a)((function(e){var t=e.theme;return{width:240,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function U(e){var t=e.numSelected,n=e.filterName,a=e.onFilterName,i=Object(v.b)();return Object(W.jsx)(o.Fragment,{children:Object(W.jsxs)(M,{sx:Object(r.a)({},t>0&&{color:"primary.main",bgcolor:"primary.lighter"}),children:[t>0?Object(W.jsxs)(j.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(W.jsx)(D,{sx:{mr:2,ml:0},value:n,onChange:a,placeholder:"Search user...",startAdornment:Object(W.jsx)(A.a,{position:"start",children:Object(W.jsx)(L.a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}),t>0?Object(W.jsx)(z.a,{title:"Delete",children:Object(W.jsx)(N.a,{children:Object(W.jsx)(L.a,{icon:"eva:trash-2-fill"})})}):Object(W.jsx)(F.a,{children:Object(W.jsx)(_.a,{sx:{width:125,mr:0,mb:2,mt:3},variant:"contained",onClick:function(){i({type:w.U})},startIcon:Object(W.jsx)(L.a,{icon:"eva:plus-fill"}),children:"New User"})})]})})}n(32),n(322),n(189),n(697),n(699);n(220);var q=n(103),T=n.n(q),V=n(489),G=n(532),Q=n(426),Y=n(439),J=n(525),$=n(464),H=n(445),X=n(470),Z=n(471),K=n(431),ee=n(459),te=n(572),ne=n(31),ae=n(69),re=n(79),ie=n(468),ce=n(251),oe=n(133),se=n(30),le=n(478),de=n.n(le),je={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0, .2)",zIndex:100},ue={padding:"50px",zIndex:100,minWidth:"320px",maxWidth:"80%",borderRadius:5,position:"absolute",top:"50%",left:"50%",radius:3,transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"0px solid #000",boxShadow:24,pt:2,px:4,pb:3},be=Object(ce.a)((function(e){return{redButton:Object(i.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(i.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(r.a)({},e.typography.customInput),root:{alignSelf:"center",justifyContent:"center",alignItems:"center",display:"flex","& > *":{margin:e.spacing(1)},"&:hover .AvatarBackdrop":{opacity:.5}},input:{display:"none"},large:{width:e.spacing(20),height:e.spacing(20),"&:hover .imageBackdrop":{opacity:.5}}}})),pe=function(e){var t=Object(o.useState)(!1),n=Object(a.a)(t,2),i=(n[0],n[1],be()),c=(Object(ie.a)(),Object(K.a)((function(e){return e.breakpoints.down("sm")}))),s=(Object(se.g)(),Object(v.b)());Object(v.c)((function(e){return e.account}));Object(o.useEffect)((function(){return function(){s({type:w.q})}}),[]);var l=function(){s({type:w.q})},u=Object(v.c)((function(e){return e.modal}));return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)(Y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:u.ModalInformation,onClose:l,closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},children:Object(W.jsx)("div",{style:je,children:Object(W.jsx)(J.a,{onClickAway:l,children:Object(W.jsx)(Q.a,{in:u.ModalInformation,children:Object(W.jsxs)(I.a,{sx:Object(r.a)({},ue),children:[Object(W.jsx)(ee.a,{sx:{float:"right"},label:"close",children:Object(W.jsx)(de.a,{onClick:l,color:"disabled"})}),Object(W.jsxs)(g.a,{children:[Object(W.jsx)("grid",{children:Object(W.jsx)(j.a,{sx:{mt:1},id:"child-modal-title",gutterBottom:!0,variant:"h4",align:"center",children:"User Information               "})}),Object(W.jsx)(te.a,{fullWidth:!0,sx:{mb:3},className:i.root,children:Object(W.jsx)($.a,{src:"".concat(y.a.API_SERVER).concat(u.user.photo),className:i.large})}),Object(W.jsxs)(ne.a,{container:!0,spacing:3,children:[Object(W.jsx)(ne.a,{item:!0,md:6,xs:6,children:Object(W.jsxs)(ne.a,{item:!0,xs:6,children:[Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",fontSize:"17px",textAlign:c?"center":"",children:"Name :"}),Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",color:"black",fontSize:"18px",textAlign:c?"center":"",children:u.user.username})]})}),Object(W.jsx)(ne.a,{item:!0,md:6,xs:6,children:Object(W.jsxs)(ne.a,{item:!0,md:6,children:[Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",fontSize:"17px",textAlign:c?"center":"",children:"Phone :"}),Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",color:"black",fontSize:"18px",textAlign:c?"center":"",children:u.user.phone})]})}),Object(W.jsx)(ne.a,{item:!0,md:6,xs:12,children:Object(W.jsxs)(ne.a,{item:!0,xs:12,children:[Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",fontSize:"17px",textAlign:c?"center":"",children:"Email :"}),Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",color:"black",fontSize:"18px",textAlign:c?"center":"",children:u.user.email})]})}),Object(W.jsx)(ne.a,{item:!0,md:12,xs:12,children:Object(W.jsxs)(ne.a,{item:!0,md:12,children:[Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",fontSize:"17px",textAlign:c?"center":"",children:"Role :"}),Object(W.jsx)(j.a,{fullWidth:!0,label:"First name",name:"firstName",id:"username",color:"black",fontSize:"18px",textAlign:c?"center":"",children:u.user.role})]})}),Object(W.jsx)(ne.a,{md:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center","stroke-linecap":"round",children:Object(W.jsx)(ne.a,{item:!0,xs:12,md:12,children:Object(W.jsx)(ne.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",children:Object(W.jsx)(ne.a,{item:!0,mb:2,children:Object(W.jsx)(d.a,{alignItems:"center",justifyContent:"center",children:Object(W.jsx)(ne.a,{container:!0,sx:{mt:3.75},alignItems:"center",children:Object(W.jsx)(ne.a,{md:12,container:!0,alignItems:"center",children:Object(W.jsx)(re.a,{children:Object(W.jsx)(_.a,{onClick:l,disableElevation:!0,fullWidth:!0,type:"submit",size:"large",variant:"contained",color:"secondary",children:oe.e})})})})})})})})})]})]})]})})})})})})},he=n(746),me=n(436),xe=n(750),ge=n(345),Oe=n.n(ge),fe=Object(ce.a)((function(e){return{redButton:Object(i.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(i.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(r.a)({},e.typography.customInput),root:{alignSelf:"center",justifyContent:"center",alignItems:"center",display:"flex","& > *":{margin:e.spacing(1)},"&:hover .AvatarBackdrop":{opacity:.5}},input:{display:"none"},large:{width:e.spacing(20),height:e.spacing(20),"&:hover .imageBackdrop":{opacity:.5}}}})),ye=function(e){var t=e.objet;window.location.pathname.includes("html")?window.location.hash:window.location.pathname;var n=Object(o.useState)(!1),r=Object(a.a)(n,2),c=r[0],s=r[1],l=[{value:"administrateur",label:"administrateur"},{value:"simple employer",label:"simple employer"}],d=(fe(),Object(ie.a)(),Object(v.b)()),j=Object(v.c)((function(e){return e.account}));Object(o.useEffect)((function(){return function(){d({type:w.u})}}),[]);Object(v.c)((function(e){return e.modal}));var u=function(){d({type:w.u})},b=Object(se.g)();return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)(X.a,{initialValues:{role:t.role},validationSchema:Z.a().shape({role:Z.b().required("role is required")}),onSubmit:function(e,n){var a=n.setErrors,r=n.setStatus,i=n.setSubmitting;if(s(!0),t.role==e.role)r({success:!1}),a({submit:"you didn't change any thing"}),i(!1),s(!1);else try{f.a.post(y.a.API_SERVER+"api/User/editUser",{token:j.token,role:e.role,userID:t._id,user_id:j.user._id}).then((function(e){e.data.notConnected?(d({type:w.Q}),b.push("/login"),d({type:w.i,payload:{text:"You are no longer connected",severity:"error"}})):e.data.success?(d({type:w.hb,payload:{user:e.data.user}}),d({type:w.u}),d({type:w.i,payload:{text:"user modified with success",severity:"success"}})):e.data.administratorProblem&&(r({success:!1}),i(!1),s(!1),d({type:w.u}),d({type:w.db,payload:{user:e.data.user}}),b.push(y.a.defaultPath),d({type:w.i,payload:{text:"you are no longer an administrateur",severity:"error"}}))})).catch((function(e){s(!1),d({type:w.u}),b.push(y.a.defaultPath),d({type:w.i,payload:{text:"externel error please try later",severity:"error"}})}))}catch(c){r({success:!1}),i(!1),s(!1),d({type:w.u}),b.push(y.a.defaultPath),d({type:w.i,payload:{text:"externel error please try later",severity:"error"}})}},children:function(e){var t,n,a=e.errors,r=(e.setFieldValue,e.handleBlur),o=e.handleChange,s=e.handleSubmit,d=e.isSubmitting,j=e.touched,b=e.values;return Object(W.jsxs)("form",{noValidate:!0,onSubmit:s,children:[Object(W.jsx)(ne.a,{item:!0,lg:12,md:12,mt:3,sm:12,xs:12,children:Object(W.jsx)(te.a,{fullWidth:!0,error:Boolean(j.role&&a.role),children:Object(W.jsx)(he.a,(t={fullWidth:!0,onChange:o,required:!0,select:!0,SelectProps:{native:!0},variant:"outlined",id:"role",name:"role",value:b.role,label:"Role",onBlur:r,error:j.role&&Boolean(a.role)},Object(i.a)(t,"onChange",o),Object(i.a)(t,"children",l.map((function(e){return Object(W.jsx)("option",{value:e.value,children:e.label},e.value)}))),t))})}),Object(W.jsxs)(I.a,{sx:{mt:2},children:[a.submit&&Object(W.jsx)(I.a,{sx:{mt:1},children:Object(W.jsx)(me.a,{severity:"error",children:a.submit})}),Object(W.jsxs)(ne.a,{container:!0,alignItems:"center",children:[Object(W.jsx)(ne.a,{xs:6,children:Object(W.jsx)(I.a,{sx:{mr:1,mt:2},children:Object(W.jsx)(re.a,{children:c?Object(W.jsx)(xe.a,(n={variant:"contained",fullWidth:!0,size:"large",loading:!0,loadingPosition:"start",startIcon:Object(W.jsx)(Oe.a,{})},Object(i.a)(n,"variant","outlined"),Object(i.a)(n,"children",oe.h),n)):Object(W.jsx)(_.a,{disabled:d,disableElevation:!0,fullWidth:!0,type:"submit",size:"large",variant:"contained",color:"secondary",children:oe.g})})})}),Object(W.jsx)(ne.a,{xs:6,children:Object(W.jsx)(I.a,{sx:{mt:2,marginLeft:1},children:Object(W.jsx)(re.a,{children:Object(W.jsx)(_.a,{disableElevation:!0,disabled:d,size:"large",onClick:u,fullWidth:!0,variant:"contained",color:"error",children:oe.f})})})})]})]})]})}})})},ve=n(527),we={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:100},Se={padding:"50px",zIndex:100,maxWidth:"90%",borderRadius:3,position:"absolute",top:"50%",left:"50%",radius:3,transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"0px solid #000"},Ce=function(e){var t=Object(K.a)((function(e){return e.breakpoints.down("sm")})),n=Object(v.b)();Object(v.c)((function(e){return e.account}));Object(o.useEffect)((function(){return function(){n({type:w.p})}}),[]);var a=Object(v.c)((function(e){return e.modal})),i=function(){n({type:w.u})};return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)(Y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:a.ModalEditState,onClose:i,closeAfterTransition:!0,BackdropProps:{timeout:500},children:Object(W.jsx)("div",{style:we,children:Object(W.jsx)(J.a,{onClickAway:i,children:Object(W.jsx)(Q.a,{in:a.ModalEditState,children:Object(W.jsx)(I.a,{sx:t?Object(r.a)({width:300},Se):Object(r.a)({width:450},Se),children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(ve.a,{type:e.type,name:a.objet.username}),Object(W.jsx)(ye,{objet:a.objet,type:e.type})]})})})})})})})},ke=n(191),Ie=n.n(ke),We=n(194),Re=n.n(We),Ee=n(701),Pe=n.n(Ee),Be=n(43),Ae=function(e){var t=e.userPar,n=Object(v.b)(),a=(Object(se.g)(),Object(Be.a)());Object(K.a)(a.breakpoints.down("sm")),Object(K.a)(a.breakpoints.down("lg")),Object(K.a)(a.breakpoints.down("md")),Object(K.a)(a.breakpoints.down("xl"));return Object(W.jsxs)(o.Fragment,{children:[Object(W.jsx)(m.a,{sx:{minWidth:"100%"},component:"th",scope:"row",padding:"none",children:Object(W.jsxs)(d.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(W.jsx)($.a,{alt:t.username,src:"".concat(y.a.API_SERVER).concat(t.photo)}),Object(W.jsx)(j.a,{variant:"subtitle2",noWrap:!0,children:t.username})]})}),Object(W.jsx)(m.a,{align:"left",sx:{minWidth:"100%"},children:Object(W.jsxs)(d.a,{sx:{mr:2},direction:"column",justifyContent:"space-between",children:[Object(W.jsx)(_.a,{sx:{mb:1},onClick:function(){n({type:w.T,payload:{objet:t}})},variant:"outlined",color:"info",children:Object(W.jsx)(Ie.a,{})}),Object(W.jsx)(_.a,{sx:{mb:1},onClick:function(){n({type:w.S,payload:{objet:t}})},variant:"outlined",color:"error",children:Object(W.jsx)(Re.a,{})}),Object(W.jsx)(_.a,{variant:"outlined",sx:{mb:1},onClick:function(){n({type:w.V,payload:{user:t}})},color:"info",children:Object(W.jsx)(Pe.a,{})})]})})]})},ze=n(573),Ne=n(92),Fe={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0, .2)",zIndex:100},_e=Object(ce.a)((function(e){return{largeImage:{width:e.spacing(20),height:e.spacing(20),top:"50%",left:"50%",right:"50%",bottom:"50%",transform:"translate(-2%,2%)",borderRadius:"50%",overflow:"hidden",border:"1px solid grey"},uploadBtn:{height:"0%",width:"100%",position:"absolute",bottom:"0",left:"50%",transform:"translateX(-50%)",textAlign:"center",color:"wheat",lineHeight:"160px",fontFamily:"sans-serif",fontSize:"16px",cursor:"pointer",backgroundColor:"#000000",opacity:"0.8"},redButton:Object(i.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(i.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(r.a)({},e.typography.customInput),root:{alignSelf:"center",justifyContent:"center",alignItems:"center",display:"flex","& > *":{margin:e.spacing(1)},"&:hover .AvatarBackdrop":{opacity:.5}},input:{display:"none"},large:{width:e.spacing(20),height:e.spacing(20),"&:hover .imageBackdrop":{opacity:.5}}}})),Le=function(e){var t=Object(Ne.a)(),n={padding:"50px",zIndex:100,minWidth:"330px",borderRadius:5,position:"absolute",top:"50%",left:"50%",radius:3,transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"0px solid #000",boxShadow:24,pt:2,px:4,pb:3},c=Object(v.c)((function(e){return e.account})),l=Object(o.useState)(!1),u=Object(a.a)(l,2),b=u[0],p=u[1],h=[{value:"administrateur",label:"administrateur"},{value:"simple employer",label:"simple employer"}],m=s.a.useState("/static/images/avatar_1.png"),x=Object(a.a)(m,2),O=x[0],S=x[1],C=_e(),k=Object(ie.a)(),R=(Object(K.a)((function(e){return e.breakpoints.down("sm")})),Object(se.g)()),E=Object(v.b)();Object(o.useEffect)((function(){return function(){E({type:w.p})}}),[]);var P=Object(v.c)((function(e){return e.modal})),B=function(){S("/static/images/avatar_1.png"),E({type:w.p})};return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)(Y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:P.ModalState,onClose:B,closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},children:Object(W.jsx)("div",{style:Fe,children:Object(W.jsx)(J.a,{onClickAway:B,children:Object(W.jsx)(Q.a,{in:P.ModalState,children:Object(W.jsx)(I.a,{sx:Object(r.a)({},n),children:Object(W.jsx)(g.a,{children:Object(W.jsx)(X.a,{initialValues:{username:"",email:"",role:"administrateur",phone:"",submit:null},validationSchema:Z.a().shape({email:Z.b().email("Must be a valid email").max(100,"must contain only 100 digits").required("Email is required"),username:Z.b().required("Username is required"),phone:Z.b().required().matches(/^[0-9]+$/,"Must be only digits").min(8,"Must be exactly 8 digits").max(8,"Must be exactly 8 digits"),role:Z.b().required("role is required")}),onSubmit:function(e,t){var n=t.setErrors,a=t.setStatus,r=t.setSubmitting;p(!0);try{var i=new FormData;i.append("username",e.username),i.append("email",e.email),i.append("phone",parseInt(e.phone)),i.append("file",e.file),i.append("role",e.role),i.append("token",c.token),i.append("sendtphoto",e.sendtphoto),f.a.post(y.a.API_SERVER+"api/User/register",i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.notConnected?(E({type:w.Q}),R.push("/login"),E({type:w.i,payload:{text:"You are no longer connected",severity:"error"}})):e.data.success?(E({type:w.d,payload:{user:e.data.user}}),p(!1),E({type:w.p}),S("/static/images/avatar_1.png"),E({type:w.i,payload:{text:"User added successfully",severity:"success"}})):(a({success:!1}),n({submit:e.data.msg}),r(!1),p(!1))})).catch((function(e){a({success:!1}),n({submit:e.response.data.msg}),r(!1),p(!1)}))}catch(o){k.current&&(a({success:!1}),n({submit:o.message}),r(!1),p(!1))}},children:function(e){var n,a,r,c=e.errors,o=e.setFieldValue,s=e.setStatus,l=e.setSubmitting,u=e.setErrors,m=e.handleBlur,x=e.handleChange,g=e.handleSubmit,f=e.isSubmitting,y=e.touched,v=e.values;return Object(W.jsxs)("form",{noValidate:!0,onSubmit:g,children:[Object(W.jsx)(d.a,{alignItems:"center",justifyContent:"center",spacing:1,children:Object(W.jsx)(d.a,{alignItems:"center",justifyContent:"center",spacing:1,children:Object(W.jsx)(j.a,{color:t.palette.secondary.main,gutterBottom:!0,variant:"h3",children:"Add User"})})}),Object(W.jsx)(ne.a,{marginBottom:1,children:Object(W.jsx)(te.a,{fullWidth:!0,className:C.root,children:Object(W.jsxs)("div",{className:C.largeImage,id:"divStyle",children:[Object(W.jsx)("img",{src:O,id:"photo"}),Object(W.jsx)("input",(n={type:"file",id:"file",accept:"image/*",onChange:function(e){e.target.files[0].name.toLowerCase().endsWith(".png")||e.target.files[0].name.toLowerCase().endsWith(".jpg")||e.target.files[0].name.toLowerCase().endsWith(".jpeg")?(!function(e){var t=e.target,n=new FileReader;n.readAsDataURL(t.files[0]),n.onload=function(e){S(e.target.result)}}(e),x(e),o("file",e.target.files[0]),o("sendtphoto",!0)):(s({success:!1}),u({submit:"You should enter PNG or JPG photo "}),l(!1),p(!1))}},Object(i.a)(n,"id","file"),Object(i.a)(n,"type","file"),n)),Object(W.jsx)("label",{htmlFor:"file",className:C.uploadBtn,id:"labelStyle",children:"Choose Photo"})]})})}),Object(W.jsxs)(d.a,{spacing:2,id:"transition-modal-title",children:[Object(W.jsx)(d.a,{direction:{xs:"column",sm:"row"},spacing:12,children:Object(W.jsx)(ne.a,{container:!0,spacing:2,children:Object(W.jsx)(ne.a,{item:!0,xs:12,children:Object(W.jsxs)(ne.a,{container:!0,spacing:ae.b,children:[Object(W.jsx)(ne.a,{item:!0,lg:6,md:6,sm:6,xs:12,children:Object(W.jsxs)(te.a,{fullWidth:!0,error:Boolean(y.username&&c.username),children:[Object(W.jsx)(he.a,{label:"username",required:!0,variant:"outlined",id:"outlined-adornment-username-register",name:"username",value:v.username,onBlur:m,onChange:x}),y.username&&c.username&&Object(W.jsx)(ze.a,{error:!0,id:"standard-weight-helper-text--username",children:c.username})]})}),Object(W.jsx)(ne.a,{item:!0,lg:6,md:6,sm:6,xs:12,children:Object(W.jsxs)(te.a,{fullWidth:!0,error:Boolean(y.email&&c.email),children:[Object(W.jsx)(he.a,{label:"Email",required:!0,variant:"outlined",id:"outlined-adornment-email-register",type:"email",value:v.email,name:"email",onBlur:m,onChange:x}),y.email&&c.email&&Object(W.jsx)(ze.a,{error:!0,id:"standard-weight-helper-text--register",children:c.email})]})})]})})})}),Object(W.jsx)(d.a,{direction:{xs:"column",sm:"row"},spacing:2,children:Object(W.jsx)(ne.a,{container:!0,spacing:3,children:Object(W.jsx)(ne.a,{item:!0,xs:12,children:Object(W.jsxs)(ne.a,{container:!0,spacing:ae.b,children:[Object(W.jsx)(ne.a,{item:!0,lg:6,md:6,sm:6,xs:12,children:Object(W.jsxs)(te.a,{fullWidth:!0,error:Boolean(y.phone&&c.phone),children:[Object(W.jsx)(he.a,{label:"phone",required:!0,variant:"outlined",id:"outlined-adornment-phone-register",type:"phone",value:v.phone,name:"phone",onBlur:m,onChange:x}),y.phone&&c.phone&&Object(W.jsxs)(ze.a,{error:!0,id:"standard-weight-helper-text--register",children:[" ",c.phone," "]})]})}),Object(W.jsx)(ne.a,{item:!0,lg:6,md:6,sm:6,xs:12,children:Object(W.jsx)(te.a,{fullWidth:!0,error:Boolean(y.role&&c.role),children:Object(W.jsx)(he.a,(a={fullWidth:!0,onChange:x,required:!0,select:!0,SelectProps:{native:!0},variant:"outlined",id:"role",name:"role",value:v.role,label:"Role",onBlur:m,error:y.role&&Boolean(c.role)},Object(i.a)(a,"onChange",x),Object(i.a)(a,"children",h.map((function(e){return Object(W.jsx)("option",{value:e.value,children:e.label},e.value)}))),a))})})]})})})})]}),Object(W.jsxs)(I.a,{sx:{mt:2},children:[c.submit&&Object(W.jsx)(I.a,{sx:{mt:1},children:Object(W.jsx)(me.a,{severity:"error",children:c.submit})}),Object(W.jsxs)(ne.a,{container:!0,alignItems:"center",children:[Object(W.jsx)(ne.a,{xs:6,children:Object(W.jsx)(I.a,{sx:{mr:1,mt:2},children:Object(W.jsx)(re.a,{children:b?Object(W.jsx)(xe.a,(r={variant:"contained",fullWidth:!0,size:"large",loading:!0,loadingPosition:"start",startIcon:Object(W.jsx)(Oe.a,{})},Object(i.a)(r,"variant","outlined"),Object(i.a)(r,"children",oe.c),r)):Object(W.jsx)(_.a,{disabled:f,disableElevation:!0,fullWidth:!0,type:"submit",size:"large",variant:"contained",color:"secondary",children:oe.a})})})}),Object(W.jsx)(ne.a,{xs:6,children:Object(W.jsx)(I.a,{sx:{mt:2,marginLeft:1},children:Object(W.jsx)(re.a,{children:Object(W.jsx)(_.a,{disableElevation:!0,disabled:f,size:"large",onClick:B,fullWidth:!0,variant:"contained",color:"error",children:oe.f})})})})]})]})]})}})})})})})})})})},Me=n(469),De=n(444),Ue=n(528),qe=n(20),Te=n(529),Ve=Object(qe.a)(Array(6)).map((function(e,t){return{id:Te.a.datatype.uuid(),name:Te.a.name.findName(),emaill:Te.a.name.findName(),role:Te.a.name.findName(),phone:Te.a.name.findName()}})),Ge=[{id:"username",label:"User name",alignRight:"left"},{id:"email",label:"Email",alignRight:"left"},{id:"phone",label:"Phone",alignRight:"left"},{id:"role",label:"Role",alignRight:"left"},{id:"action",label:"           Activites",alignLeft:"center"}],Qe=function(e){var t=Object(o.useState)(0),n=Object(a.a)(t,2),r=n[0],i=n[1],s=Object(o.useState)("asc"),l=Object(a.a)(s,2),j=l[0],g=l[1],O=Object(o.useState)([]),f=Object(a.a)(O,2),y=f[0],v=f[1],w=Object(o.useState)("username"),S=Object(a.a)(w,2),C=S[0],k=S[1],E=Object(o.useState)(""),P=Object(a.a)(E,2),B=P[0],A=(P[1],Object(o.useState)(5)),z=Object(a.a)(A,2),N=z[0],F=z[1];function _(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var L=r>0?Math.max(0,(1+r)*N-Ve.length):0,M=function(e,t,n){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n?Object(c.filter)(e,(function(e){return-1!==e.username.toLowerCase().indexOf(n.toLowerCase())})):a.map((function(e){return e[0]}))}(Ve,function(e,t){return"desc"===e?function(e,n){return _(e,n,t)}:function(e,n){return-_(e,n,t)}}(j,C),B);return Object(W.jsxs)(o.Fragment,{children:[Object(W.jsx)(Ue.a,{numSelected:y.length,filterName:B}),Object(W.jsx)(T.a,{children:Object(W.jsx)(u.a,{sx:{minWidth:600},children:Object(W.jsxs)(b.a,{children:[Object(W.jsx)(R,{order:j,orderBy:C,headLabel:Ge,rowCount:6,numSelected:y.length,onRequestSort:function(e,t){g(C===t&&"asc"===j?"desc":"asc"),k(t)},onSelectAllClick:function(e){if(e.target.checked){var t=Ve.map((function(e){return e.username}));v(t)}else v([])}}),Object(W.jsxs)(p.a,{children:[M.slice(r*N,r*N+N).map((function(e){var t=e._id,n=e.username,a=-1!==y.indexOf(n);return Object(W.jsx)(o.Fragment,{children:Object(W.jsxs)(h.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:a,"aria-checked":a,children:[Object(W.jsx)(m.a,{padding:"checkbox"}),Object(W.jsx)(m.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)(d.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(W.jsx)(De.a,{variant:"circular",width:40,height:40}),Object(W.jsx)(De.a,{width:"40%"})]})}),Object(W.jsxs)(m.a,{align:"left",children:["  ",Object(W.jsx)(De.a,{width:"60%"})]}),Object(W.jsxs)(m.a,{align:"left",children:["  ",Object(W.jsx)(De.a,{width:"60%"})]}),Object(W.jsxs)(m.a,{align:"left",children:["  ",Object(W.jsx)(De.a,{width:"60%"})]}),Object(W.jsx)(m.a,{align:"left",children:Object(W.jsx)(I.a,{sx:{"& button":{m:1}},children:Object(W.jsxs)("div",{children:[Object(W.jsx)(De.a,{sx:{width:110}}),Object(W.jsx)(De.a,{sx:{width:80}})]})})})]},t)})})),L>0&&Object(W.jsx)(h.a,{style:{height:53*L},children:Object(W.jsx)(m.a,{colSpan:6})})]})]})})}),Object(W.jsx)(x.a,{rowsPerPageOptions:[5,10,25],component:"div",count:Ve.length,rowsPerPage:N,page:r,onPageChange:function(e,t){i(t)},onRowsPerPageChange:function(e){F(parseInt(e.target.value,10)),i(0)}})]})},Ye=(Object(ce.a)((function(e){return{modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3},redButton:Object(i.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(i.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(r.a)({},e.typography.customInput),root:{alignSelf:"center",justifyContent:"center",alignItems:"center",display:"flex","& > *":{margin:e.spacing(1)}},input:{display:"none"},large:{width:e.spacing(20),height:e.spacing(20)}}})),[{id:"username",label:"User name",alignRight:"left"},{id:"action",label:"Activites",alignRight:"left"}]);function Je(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}t.default=function(e){var t=s.a.useState("/static/images/avatar_1.png"),n=Object(a.a)(t,2),r=(n[0],n[1],s.a.useState(!1)),i=Object(a.a)(r,2),O=(i[0],i[1],s.a.useState(0)),S=Object(a.a)(O,2),C=(S[0],S[1]),k=s.a.useState(""),I=Object(a.a)(k,2),E=(I[0],I[1]);Object(o.useEffect)((function(){!function(e){var t=Object(Me.b)(e);C(t),E(Object(Me.a)(t))}("123456")}),[]);var P=Object(o.useState)(!1),B=Object(a.a)(P,2),A=(B[0],B[1],s.a.useState(!1)),z=Object(a.a)(A,2),N=(z[0],z[1],Object(se.g)()),F=Object(v.b)(),_=Object(v.c)((function(e){return e.account})),L=Object(v.c)((function(e){return e.user})),M=Object(o.useState)(!1),D=Object(a.a)(M,2),q=D[0],Q=D[1],Y=Object(o.useState)([]),J=Object(a.a)(Y,2),$=(J[0],J[1]);Object(o.useEffect)((function(){return function(){F({type:w.p})}}),[]),Object(o.useEffect)((function(){f.a.post(y.a.API_SERVER+"api/users/all",{id:_.user._id,user_id:_.user._id,token:_.token}).then((function(e){e.data.notConnected?(F({type:w.Q}),N.push("/login"),N.go(0),F({type:w.i,payload:{text:"You are no longer connected",severity:"error"}})):e.data.administratorProblem?(F({type:w.db,payload:{user:e.data.user}}),N.push(y.a.defaultPath),F({type:w.i,payload:{text:"You are no longer an administrateur",severity:"error"}})):(F({type:w.M,payload:{users:e.data.users}}),$(L.users),Q(!0))}))}),[]),Object(o.useEffect)((function(){return function(){F({type:w.o})}}),[]);var H=Object(o.useState)(0),X=Object(a.a)(H,2),Z=X[0],ee=X[1],te=Object(o.useState)("asc"),ne=Object(a.a)(te,2),ae=ne[0],re=ne[1],ie=Object(o.useState)([]),ce=Object(a.a)(ie,2),oe=ce[0],le=ce[1],de=Object(o.useState)("username"),je=Object(a.a)(de,2),ue=je[0],be=je[1],he=Object(o.useState)(""),me=Object(a.a)(he,2),xe=me[0],ge=me[1],Oe=Object(o.useState)(5),fe=Object(a.a)(Oe,2),ye=fe[0],ve=fe[1],we=Z>0?Math.max(0,(1+Z)*ye-L.users.length):0,Se=function(e,t,n){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n?Object(c.filter)(e,(function(e){return-1!==e.phone.toString().indexOf(n.toLowerCase())||-1!==e.username.toLowerCase().indexOf(n.toLowerCase())||-1!==e.email.toLowerCase().indexOf(n.toLowerCase())||-1!==e.email.toLowerCase().indexOf(n.toLowerCase())||-1!==e.role.toLowerCase().indexOf(n.toLowerCase())})):a.map((function(e){return e[0]}))}(L.users,function(e,t){return"desc"===e?function(e,n){return Je(e,n,t)}:function(e,n){return-Je(e,n,t)}}(ae,ue),xe),ke=0===Se.length,Ie=Object(v.c)((function(e){return e.modal}));Object(v.c)((function(e){return e.modal}));var We=Object(Be.a)();Object(K.a)(We.breakpoints.down("sm")),Object(K.a)(We.breakpoints.down("lg")),Object(K.a)(We.breakpoints.down("md")),Object(K.a)(We.breakpoints.down("xl"));return Object(W.jsxs)(o.Fragment,{children:[Object(W.jsx)(l.a,{xs:12,sx:{mb:3},children:Object(W.jsx)(d.a,{direction:"row",alignItems:"center",justifyContent:"space-between",mt:1,mb:1,children:Object(W.jsx)(j.a,{sx:{ml:1,mb:1,mt:1},variant:"h4",gutterBottom:!0,children:"User Liste"})})}),Object(W.jsx)(g.a,{children:Object(W.jsx)(l.a,{children:q?Object(W.jsxs)(o.Fragment,{children:[Object(W.jsx)(U,{sx:{minWidth:"100%"},numSelected:oe.length,filterName:xe,onFilterName:function(e){ge(e.target.value)}}),Object(W.jsx)(T.a,{children:Object(W.jsx)(u.a,{sx:{minWidth:"100%"},children:Object(W.jsxs)(b.a,{sx:{ml:2,minWidth:"30%"},children:[Object(W.jsx)(R,{order:ae,orderBy:ue,headLabel:Ye,rowCount:L.users.length,numSelected:oe.length,onRequestSort:function(e,t){re(ue===t&&"asc"===ae?"desc":"asc"),be(t)},onSelectAllClick:function(e){if(e.target.checked){var t=L.users.map((function(e){return e.username}));le(t)}else le([])}}),Object(W.jsxs)(p.a,{children:[Se.slice(Z*ye,Z*ye+ye).map((function(e){var t=e._id,n=e.username,a=e.email,r=e.phone,i=e.role,c=e.photo,s=-1!==oe.indexOf(n);return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)(h.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:s,"aria-checked":s,sx:{minWidth:"100%"},children:Object(W.jsx)(Ae,{userPar:{_id:t,username:n,phone:r,role:i,photo:c,email:a}})},t)})})),we>0&&Object(W.jsx)(h.a,{style:{height:53*we},children:Object(W.jsx)(m.a,{colSpan:6})})]}),ke&&Object(W.jsx)(p.a,{children:Object(W.jsx)(h.a,{children:Object(W.jsx)(m.a,{align:"center",colSpan:6,sx:{py:3},children:Object(W.jsx)(V.a,{searchQuery:xe})})})})]})})}),Object(W.jsx)(x.a,{rowsPerPageOptions:[5,10,25],component:"div",count:L.users.length,rowsPerPage:ye,page:Z,onPageChange:function(e,t){ee(t)},onRowsPerPageChange:function(e){ve(parseInt(e.target.value,10)),ee(0)}})]}):Object(W.jsx)(Qe,{})})}),Ie.ModalDeleteState&&Object(W.jsx)(G.a,{handleClose:function(){F({type:w.o})},type:"User"}),Ie.ModalEditState&&Object(W.jsx)(Ce,{type:"User"}),Ie.ModalInformation&&Object(W.jsx)(pe,{type:"User"}),Object(W.jsx)(Le,{})]})}}}]);
//# sourceMappingURL=14.f2378c21.chunk.js.map