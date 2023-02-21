(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n.n(c),a=n(5),r=n(2),i=n(4),o=n.n(i),l=n(1),d=(n(17),n(18),n(19),n(3)),j=n.n(d),u=n(0),m=function(e){var t=e.post,n=e.selectedPost,c=e.setSelectedPostId;return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==t.id}),onClick:function(){return function(e){var s=t.id!==(null===n||void 0===n?void 0:n.id);c(s?e.id:null)}(t)},children:(null===n||void 0===n?void 0:n.id)===t.id?"Close":"Open"})})]})},b=function(e){var t=e.posts,n=e.selectedPost,c=e.setSelectedPostId;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(m,{post:e,selectedPost:n,setSelectedPostId:c},e.id)}))})]})]})},h=n(11),O="https://mate.academy/students-api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),p(300).then((function(){return fetch(O+e,c)})).then((function(e){return e.json()}))}var f=function(e){return x(e)},v=function(e,t){return x(e,"POST",t)},N=function(e){return x(e,"DELETE")},y=function(e){return v("/comments",e)},g=function(e){return N("/comments/".concat(e))},w=(n(21),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),C=function(e){var t=e.isLoadingComent,n=e.postId,c=e.onAddComment,s=Object(l.useState)(""),a=Object(r.a)(s,2),i=a[0],o=a[1],d=Object(l.useState)(""),m=Object(r.a)(d,2),b=m[0],h=m[1],O=Object(l.useState)(""),p=Object(r.a)(O,2),x=p[0],f=p[1],v=Object(l.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],w=Object(l.useState)(!1),C=Object(r.a)(w,2),S=C[0],k=C[1],P=Object(l.useState)(!1),E=Object(r.a)(P,2),I=E[0],F=E[1];return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),i&&b&&x){var t={postId:n,name:i,email:b,body:x};k(!1),g(!1),F(!1),c(t),f("")}else k(!b),g(!i),F(!x)},children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":y}),value:i,onChange:function(e){g(!1),o(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),y&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})})]}),y&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"emeil",name:"email",id:"comment-author-email",placeholder:"email@test.com",pattern:"[^@]+@[^@]+\\.[a-zA-Z]{2,6}",className:j()("input",{"is-danger":S}),value:b,onChange:function(e){k(!1),h(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),S&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":I}),value:x,onChange:function(e){F(!1),f(e.target.value)}})}),I&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":t}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){o(""),h(""),f(""),k(!1),g(!1),F(!1)},children:"Clear"})})]})]})},S=function(e){var t=e.comment,n=e.deleteComment,c=t.body,s=t.email,a=t.name,r=t.id;return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:a}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(r)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:c})]})},k=function(e){var t=e.selectedPost,n=e.onNewCommentFormOpened,c=e.isNewCommentFormOpened,s=t.id,i=t.title,d=t.body,j=Object(l.useState)([]),m=Object(r.a)(j,2),b=m[0],O=m[1],p=Object(l.useState)(!1),x=Object(r.a)(p,2),v=x[0],N=x[1],k=Object(l.useState)(!1),P=Object(r.a)(k,2),E=P[0],I=P[1],F=Object(l.useState)(!1),T=Object(r.a)(F,2),D=T[0],L=T[1],A=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,f("/comments?postId=".concat(s));case 4:t=e.sent,N("error"in t),O(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(!0);case 12:return e.prev=12,I(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){A()}),[s]);var U=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.filter((function(e){return e.id!==t})),O(n),e.prev=2,e.next=5,g(t);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),new Error("Don't delete comment");case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(a.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,y(t);case 4:n=e.sent,c=[].concat(Object(h.a)(b),[n]),O(c),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Don't add comment");case 12:return e.prev=12,L(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),M=!b.length&&!E&&!v,_=!v&&!E&&!c;return Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(s,": ").concat(i)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:d})]}),Object(u.jsxs)("div",{className:"block",children:[E&&Object(u.jsx)(w,{}),v&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),M&&Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),b.length>0&&!E&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),b.map((function(e){return Object(u.jsx)(S,{comment:e,deleteComment:U},e.id)}))]}),_&&Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:n,children:"Write a comment"})]}),c&&Object(u.jsx)(C,{isLoadingComent:D,postId:t.id,onAddComment:B})]})})},P=n(10),E=function(e){var t=e.users,n=e.selectedUserId,c=e.onSelectUserId,s=Object(l.useState)(!1),a=Object(r.a)(s,2),i=a[0],o=a[1],d=t.find((function(e){return e.id===n})),m=function(){o((function(e){return!e}))},b=Object(P.useDetectClickOutside)({onTriggered:function(){o(!1)}});return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:j()("dropdown",{"is-active":i}),ref:b,children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:m,children:[Object(u.jsx)("span",{children:(null===d||void 0===d?void 0:d.name)||"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(u.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item",{"is-active":(null===d||void 0===d?void 0:d.id)===e.id}),onClick:function(){return t=e.id,c(t),void m();var t},children:e.name},e.id)}))})})]})},I=function(e){return f("/posts?userId=".concat(e))},F=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(l.useState)(null),i=Object(r.a)(s,2),d=i[0],m=i[1],h=Object(l.useState)([]),O=Object(r.a)(h,2),p=O[0],x=O[1],v=Object(l.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],C=Object(l.useState)(null),S=Object(r.a)(C,2),P=S[0],F=S[1],T=Object(l.useState)(!1),D=Object(r.a)(T,2),L=D[0],A=D[1],U=Object(l.useState)(!1),B=Object(r.a)(U,2),M=B[0],_=B[1],J=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/users");case 3:t=e.sent,c(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Can't load users");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){J()}),[]);var q=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!1),g(!0),e.next=5,I(t);case 5:n=e.sent,A("error"in n),x(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),A(!0);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){d&&q(d)}),[d]);var W=Object(l.useMemo)((function(){return p.find((function(e){return e.id===P}))}),[P]),z=d&&0===p.length&&!y&&!L,G=d&&p.length>0&&!y,Y=(null===W||void 0===W?void 0:W.userId)===d,Z=Object(l.useCallback)((function(){_(!0)}),[]);return Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(E,{users:n,selectedUserId:d,onSelectUserId:function(e){m(e)}})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!d&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),y&&Object(u.jsx)(w,{}),L&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),z&&Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),G&&Object(u.jsx)(b,{posts:p,selectedPost:W,setSelectedPostId:function(e){F(e||null),_(!1)}})]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":Y}),children:W&&Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(k,{selectedPost:W,isNewCommentFormOpened:M,onNewCommentFormOpened:Z})})})]})})})};s.a.render(Object(u.jsx)(F,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ec46108b.chunk.js.map