"use strict";(self.webpackChunkgoscrum=self.webpackChunkgoscrum||[]).push([[784],{5784:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});r(2791);var a=r(5705),n=r(3504),i=r(6871),o=r(8472),t=r(1830),d=r.n(t),u=(r(5205),r(184)),l={NODE_ENV:"production",PUBLIC_URL:"/goscrum",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_ENDPOINT;function c(){var e=(0,i.s0)(),s="* Campo obligatorio",r=o.Ry().shape({userName:o.Z_().min(4,"La cantidad m\xednima de caracteres es 4").required(s),password:o.Z_().required(s)}),t=(0,a.TA)({initialValues:{userName:"",password:""},validationSchema:r,onSubmit:function(){var s=N.userName,r=N.password;fetch("https:".concat(l,"auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s,password:r})}).then((function(e){return e.json()})).then((function(s){var r,a;200===s.status_code?(localStorage.setItem("token",null===s||void 0===s||null===(r=s.result)||void 0===r?void 0:r.token),localStorage.setItem("userName",null===s||void 0===s||null===(a=s.result)||void 0===a?void 0:a.user.userName),e("/",{replace:!0})):d().fire({title:"Credenciales inv\xe1lidas",text:"Por favor introduzca credenciales v\xe1lidas",confirmButtonText:"Aceptar",width:"400px",timer:1e4,timerProgressBar:!0})}))}}),c=t.handleChange,m=t.handleSubmit,h=t.errors,p=t.touched,v=t.handleBlur,N=t.values;return(0,u.jsx)("div",{className:"auth",children:(0,u.jsxs)("form",{onSubmit:m,children:[(0,u.jsx)("h1",{children:"Iniciar sesi\xf3n"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{children:"Nombre de usuario"}),(0,u.jsx)("input",{type:"text",name:"userName",onChange:c,onBlur:v,value:N.userName,className:h.userName&&p.userName?"error":""}),h.userName&&p.userName&&(0,u.jsxs)("span",{className:"error-message",children:[h.userName," "]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{children:"Contrase\xf1a"}),(0,u.jsx)("input",{type:"password",name:"password",onChange:c,onBlur:v,value:N.password,className:h.password&&p.password?"error":""}),h.password&&p.password&&(0,u.jsxs)("span",{className:"error-message",children:[h.password," "]})]}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{type:"submit",children:"Iniciar sesi\xf3n"})}),(0,u.jsx)("div",{children:(0,u.jsx)(n.rU,{to:"/register",children:"Registrarme"})})]})})}},5205:function(){}}]);
//# sourceMappingURL=784.713ef0f4.chunk.js.map