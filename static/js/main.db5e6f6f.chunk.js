(this["webpackJsonpReact-Query-example"]=this["webpackJsonpReact-Query-example"]||[]).push([[0],{54:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),o=n.n(c),a=n(43),i=n.n(a),s=(n(54),n(55),n(9)),j=n(88),u=(n(20),n(48),n(4)),b=n.n(u),h=n(10),d=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/React-Query-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_SERVER:"https://api.themoviedb.org/3"}).REACT_APP_SERVER,"/books"));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!!!");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/React-Query-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_SERVER:"https://api.themoviedb.org/3"}).REACT_APP_SERVER,"/books/").concat(t),{method:"Delete"});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.json().message);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/React-Query-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_SERVER:"https://api.themoviedb.org/3"}).REACT_APP_SERVER,"/books/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.json().message);case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(7),p=function(e){var t=e.children;return Object(r.jsx)(O.Box,{sx:{width:"100%",maxWidth:1024,mx:"auto"},children:t})},m=n(25),f=n.n(m),E=n(17),S=n(35),_=n(89),v=function(e){var t=e.author,n=e.title,c=e.id,o=Object(S.b)(),a=Object(_.a)(x),i=a.mutateAsync,s=a.isLoading,j=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(c);case 2:o.invalidateQueries("books");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(O.Flex,{p:"3",width:"100%",alignItems:"center",children:[Object(r.jsxs)(E.b,{component:O.Link,to:"/update-book/".concat(c),mr:"auto",children:[" ",n," "]}),Object(r.jsxs)(O.Text,{children:[" ",t," "]}),Object(r.jsx)(O.Button,{ml:"5",onClick:j,children:s?Object(r.jsx)(f.a,{type:"ThreeDots",color:"#fff",height:10}):"Remove"})]})},R=function(){var e=Object(j.a)("books",d),t=e.data,n=e.error,c=e.isLoading,o=e.isError;return c?Object(r.jsx)(p,{children:Object(r.jsx)(O.Flex,{py:"5",justifyContent:"center",children:Object(r.jsx)(f.a,{type:"ThreeDots",color:"#ccc",height:30})})}):o?Object(r.jsxs)("span",{children:["Error: ",n.message]}):Object(r.jsx)(p,{children:Object(r.jsx)(O.Flex,{flexDirection:"column",alignItems:"center",children:t.map((function(e){var t=e.author,n=e.title,c=e.id;return Object(r.jsx)(v,{author:t,title:n,id:c},c)}))})})},T=n(30),g=n(47),k=function(e){var t=e.defaultValues,n=e.onFormSubmit,c=e.isLoading,o=Object(g.a)({defaultValues:t}),a=o.register,i=(0,o.handleSubmit)((function(e){n(e)}));return Object(r.jsxs)("form",{onSubmit:i,children:[Object(r.jsxs)(O.Box,{sx:{marginBottom:3},children:[Object(r.jsx)(T.b,{htmlFor:"title",children:"Title"}),Object(r.jsx)(T.a,{ref:a,id:"title",name:"title",type:"text"})]}),Object(r.jsxs)(O.Box,{sx:{marginBottom:3},children:[Object(r.jsx)(T.b,{htmlFor:"author",children:"Author"}),Object(r.jsx)(T.a,{ref:a,id:"author",name:"author",type:"text"})]}),Object(r.jsx)(O.Button,{children:c?Object(r.jsx)(f.a,{type:"ThreeDots",color:"#fff",height:10}):"Submit"})]})},w=n.p+"static/media/logo.9e65bb88.png",y=function(){return Object(r.jsx)(O.Flex,{bg:"black",color:"white",justifyContent:"center",children:Object(r.jsx)(p,{children:Object(r.jsxs)(O.Flex,{px:2,width:"100%",alignItems:"center",children:[Object(r.jsx)(O.Image,{size:20,src:w}),Object(r.jsx)(E.b,{component:O.Link,variant:"nav",to:"/",children:"React Query CRUD"}),Object(r.jsx)(O.Box,{mx:"auto"}),Object(r.jsx)(E.b,{component:O.Link,variant:"nav",to:"/create-book",children:"+ Add new book"})]})})})},P=function(){var e=Object(s.f)(),t=Object(_.a)(l),n=t.mutateAsync,c=t.isLoading,o=function(){var t=Object(h.a)(b.a.mark((function t(r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(r);case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)(p,{children:Object(r.jsxs)(O.Box,{sx:{py:3},children:[Object(r.jsx)(O.Heading,{sx:{marginBottom:3},children:"Create New Book"}),Object(r.jsx)(k,{onFormSubmit:o,isLoading:c})]})})};var A=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/update-book/id",children:Object(r.jsx)("./UpdateBook.jsx",{})}),Object(r.jsx)(s.a,{path:"/create-book",children:Object(r.jsx)(P,{})}),Object(r.jsx)(s.a,{path:"/",children:Object(r.jsx)(R,{})})]})]})},C=n(40),D=n(46),B=n.n(D),F=new(n(87).a);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(S.a,{client:F,children:Object(r.jsx)(C.ThemeProvider,{theme:B.a,children:Object(r.jsx)(E.a,{children:Object(r.jsx)(A,{})})})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.db5e6f6f.chunk.js.map