(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6263)}])},6263:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return index_page}});var s=t(5893),n=t(8583),i=t(7294),l=t(1678),c=t.n(l);let ElapsedTime=e=>{let[a,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{let a;let s=Date.now(),n=(s-e.createdTime)/1e3;if(n<60)a="".concat(Math.round(n),"s");else if(n<3600)a="".concat(Math.round(n/60),"m");else if(n<=86400)a="".concat(Math.round(n/3600),"h");else{let t=new Date(e.createdTime),s=t.getDate(),n=t.toLocaleString("en-US",{month:"short"}),i=t.getFullYear()===new Date().getFullYear()?"":" ".concat(t.getFullYear());a="".concat(n," ").concat(s).concat(i)}t(a)},[e.createdTime]),(0,s.jsx)("span",{className:c().date,children:a})};var r=t(3935);let Portal=e=>{let{children:a}=e,[t,s]=(0,i.useState)();return(0,i.useEffect)(()=>{let e=document.createElement("div");return document.body.appendChild(e),s(e),()=>{document.body.removeChild(e)}},[]),t?r.createPortal(a,t):null};var d=t(8046),o=t.n(d);let Loading=e=>e.visible?(0,s.jsx)(Portal,{children:(0,s.jsx)("div",{className:o().container,children:(0,s.jsx)("div",{className:o().loader})})}):null;var u=t(9258),_=t(8139),h=t(9399),x=t.n(h);let ModalBody=e=>(0,s.jsx)("div",{className:x().body,children:e.children}),Modal=e=>(0,s.jsx)(Portal,{children:e.open&&(0,s.jsxs)("div",{className:x().container,children:[(0,s.jsx)("div",{className:x().background,onClick:e.onClose}),(0,s.jsx)("div",{className:x().card,children:e.children})]})});var p=t(5379),m=t(5293),k=t.n(m);let BasicHeader=e=>{let[a,t]=(0,i.useState)(!1),onLogout=async()=>{t(!1),confirm("Logout?")&&await p.O.auth.signOut()};return(0,s.jsxs)("div",{className:k().container,children:[(0,s.jsxs)("div",{className:k().main,children:[(0,s.jsx)("div",{className:k().title,children:"deus-template"}),null===e.user?(0,s.jsxs)("div",{onClick:()=>t(!0),children:[(0,s.jsx)("div",{className:k().loginBtn,children:(0,s.jsx)("span",{className:k().loginText,children:"Login with Email"})}),(0,s.jsx)("div",{className:k().hamburgerIcon})]}):(0,s.jsxs)("div",{onClick:onLogout,children:[(0,s.jsx)("div",{className:k().userBtn,children:(0,s.jsx)("span",{className:k().userName,children:e.user.name})}),(0,s.jsx)("div",{className:k().hamburgerIcon})]})]}),(0,s.jsx)(Modal,{open:null===e.user&&a,onClose:()=>t(!1),children:(0,s.jsx)(ModalBody,{children:(0,s.jsx)(u.gx,{supabaseClient:p.O,providers:[],appearance:{theme:_.rD},redirectTo:location.origin})})})]})};var v=t(2557),g=t(6819),b=t(6221),j=t(749),N=t.n(j);let PrivateTask=e=>{let{task:a}=e,[t,n]=(0,i.useState)(),[l,c]=(0,i.useState)(""),r=t===a.id,toggleDone=async()=>{await v.x.private.tasks.patch({body:{taskId:a.id,done:!a.done,label:a.label}}).catch(g.F),await e.fetchTasks()},deleteTask=async()=>{await v.x.private.tasks.delete({body:{taskId:a.id}}).catch(g.F),await e.fetchTasks()},updateTaskLabel=async()=>{await v.x.private.tasks.patch({body:{taskId:a.id,done:a.done,label:l}}).catch(g.F),n(void 0),c(""),await e.fetchTasks()};return(0,s.jsxs)("label",{children:[(0,s.jsxs)("div",{className:N().editGroup,children:[(0,s.jsx)("input",{type:"checkbox",checked:a.done,onChange:toggleDone}),r?(0,s.jsx)("input",{type:"text",value:l,className:N().labelInput,onChange:e=>{c(e.target.value)}}):(0,s.jsx)("span",{children:a.label})]}),(0,s.jsxs)("div",{className:N().btnGroup,children:[(0,s.jsx)("input",{type:"button",value:"DELETE",className:N().btn,onClick:deleteTask}),r?(0,s.jsx)("input",{type:"button",value:"SAVE",className:N().btn,onClick:updateTaskLabel}):(0,s.jsx)("input",{type:"button",value:"EDIT",className:N().btn,onClick:()=>{n(a.id),c(a.label)}})]})]})};var T=t(8535),f=t.n(T),index_page=()=>{let[e]=(0,n.KO)(b.L),a=(0,i.useRef)(null),[t,l]=(0,i.useState)(),[c,r]=(0,i.useState)(""),[d,o]=(0,i.useState)(),[u,_]=(0,i.useState)(""),isPrivateTask=a=>(null==e?void 0:e.id)===a.author.userId,fetchTasks=async()=>{let e=await v.x.public.tasks.$get().catch(g.F);null!==e&&l(e)},createTask=async e=>{e.preventDefault(),c&&a.current&&(await v.x.private.tasks.post({body:{label:c,image:d}}).catch(g.F),r(""),o(void 0),_(""),a.current.value="",await fetchTasks())};return((0,i.useEffect)(()=>{fetchTasks()},[null==e?void 0:e.id]),(0,i.useEffect)(()=>{if(!d)return;let e=URL.createObjectURL(d);return _(e),()=>{URL.revokeObjectURL(e)}},[d]),t)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(BasicHeader,{user:e}),(0,s.jsx)("div",{className:f().container,children:(0,s.jsxs)("ul",{className:f().tasks,children:[e&&(0,s.jsxs)("li",{className:f().createTask,children:[(0,s.jsx)("input",{type:"text",placeholder:"What is happening?!",value:c,onChange:e=>{r(e.target.value)},className:f().createTaskInput}),d&&(0,s.jsx)("img",{src:u,className:f().taskImage}),(0,s.jsx)("input",{type:"file",ref:a,accept:".png,.jpg,.jpeg,.gif,.webp,.svg",onChange:e=>{var a;o(null===(a=e.target.files)||void 0===a?void 0:a[0])}}),(0,s.jsx)("button",{onClick:createTask,className:f().postBtn,children:"POST"})]}),t.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("li",{className:f().taskHeader,children:[(0,s.jsx)("div",{className:f().authorName,children:e.author.name}),(0,s.jsx)(ElapsedTime,{createdTime:e.createdTime})]}),(0,s.jsxs)("li",{className:f().label,children:[isPrivateTask(e)?(0,s.jsx)(PrivateTask,{task:e,fetchTasks:fetchTasks}):(0,s.jsx)("span",{children:e.label}),e.image&&(0,s.jsx)("img",{src:e.image.url,alt:e.label,className:f().taskImage})]})]},e.id))]})})]}):(0,s.jsx)(Loading,{visible:!0})}},1678:function(e){e.exports={date:"ElapsedTime_date__gNhQH"}},8046:function(e){e.exports={container:"Loading_container__wV1ri",loader:"Loading_loader__cpdbt",load:"Loading_load__8NQtO"}},9399:function(e){e.exports={container:"Modal_container__jKKR0",background:"Modal_background__4SbAJ",card:"Modal_card__ZLmjL",header:"Modal_header__Pfr2K",body:"Modal_body__KZX7m"}},5293:function(e){e.exports={container:"BasicHeader_container__ASIaK",main:"BasicHeader_main__Vqufr",title:"BasicHeader_title__YIFTt",userBtn:"BasicHeader_userBtn__wlK48",userIcon:"BasicHeader_userIcon__UecGa",userName:"BasicHeader_userName__KiR1h",loginText:"BasicHeader_loginText__dkqm6",loginBtn:"BasicHeader_loginBtn__Zy9wD",hamburgerIcon:"BasicHeader_hamburgerIcon__FvwxJ"}},749:function(e){e.exports={editGroup:"PrivateTask_editGroup__1StDE",btnGroup:"PrivateTask_btnGroup__cLZZi",labelInput:"PrivateTask_labelInput__coxgP",btn:"PrivateTask_btn__vo6__"}},8535:function(e){e.exports={container:"index_container___q52_",tasks:"index_tasks__ExTXY",createTask:"index_createTask__NMC14",createTaskInput:"index_createTaskInput__3gEMd",taskHeader:"index_taskHeader__8Y33Y",authorName:"index_authorName__oQHVu",label:"index_label__4mSN7",postBtn:"index_postBtn__obOzR",taskImage:"index_taskImage__ShrIs",labelInput:"index_labelInput__lFqLc"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);