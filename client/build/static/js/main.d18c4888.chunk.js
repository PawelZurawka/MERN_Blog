(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){e.exports=n(284)},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},170:function(e,t){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},244:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),o=n.n(c),l=n(10),s=n(11),u=n(14),i=n(12),p=n(13),m=n(28),f=(n(115),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),d=(n(116),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),h=n(24),E=(n(117),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(h.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))})))}),g=Object(m.e)((function(e){return r.a.createElement(E,e)})),b=(n(123),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(d,null),r.a.createElement(g,{links:e}))}}]),t}(r.a.Component)),v=function(e){var t=e.children;return r.a.createElement(f,null,r.a.createElement(b,null),t)},O=(n(124),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),j=n(23),P=n(55),y=n(39),_=n(7),w=n.n(_),N=n(41),k=n(42),S=n.n(k),C="https://blog-mernapp.herokuapp.com/";function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){return e.posts.request},R=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},A=function(e){return"app/".concat("posts","/").concat(e)},T=A("LOAD_POSTS"),I=A("LOAD_SINGLE_POST"),B=A("START_REQUEST"),F=A("END_REQUEST"),L=A("ERROR_REQUEST"),U=A("RESET_REQUEST"),M=A("LOAD_POSTS_PAGE"),Q=function(e){return{payload:e,type:T}},X=function(){return{type:B}},G=function(){return{type:F}},J=function(e){return{error:e,type:L}},V=function(){return{type:U}},H=function(e){return{payload:e,type:M}},W={data:[],singlePost:{},amount:0,postsPerPage:10,presentPage:1,request:{pending:!1,error:null,success:null}};var Y=n(22),z=(n(143),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Y.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),K=(n(144),function(e){var t=e.children,n=Object(Y.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),Z=(n(145),n(105)),$=n.n(Z),ee=function(e){var t=e.children,n=Object(Y.a)(e,["children"]);return r.a.createElement("div",Object.assign({},n,{className:"html-box"}),$()(t))},te=function(e){var t=e.id,n=e.title,a=e.content,c=e.author;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(K,null,n),r.a.createElement("p",null,"Author: ",c),r.a.createElement(ee,null,function(e,t){return e.length<1?"Error":e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"..."}(a,250)),r.a.createElement(z,{variant:"primary"},r.a.createElement(h.b,{to:"/posts/".concat(t)},"Read more")))},ne=function(e){var t=e.posts;return r.a.createElement("section",{className:"posts-list"},t.map((function(e){return r.a.createElement(te,Object.assign({key:e.id},e))})))},ae=n(54),re=(n(239),function(){return r.a.createElement(ae.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),ce=n(33),oe=(n(240),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Y.a)(e,["variant","children"]);return r.a.createElement(ae.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(ce.c,null);case"success":return r.a.createElement(ce.a,null);case"warning":case"error":return r.a.createElement(ce.b,null);default:return r.a.createElement(ce.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),le=(n(241),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.state={presentPage:n.props.initialPage||1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,n=this.changePage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},t>1?r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return n(t-1)}},"<"):"",Object(P.a)(Array(e)).map((function(e,a){return r.a.createElement("li",{key:++a,onClick:function(){n(a)},className:"pagination__list__item".concat(a===t?" pagination__list__item--active":"")},a)})),t===e&&0!==e?"":r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return n(t+1)}},">")))}}]),t}(r.a.Component)),se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadPostsByPage)(e.initialPage,e.postsPerPage)}},{key:"componentWillUnmount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.request,a=e.pages,c=e.pagination,o=e.presentPage,l=this.loadPostsPage;return!1===n.pending&&!0===n.success&&t.length>0&&!0===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{posts:t}),r.a.createElement(le,{pages:a,onPageChange:l,initialPage:o})):!1===n.pending&&!0===n.success&&t.length>0&&!1===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{posts:t})):!1===n.pending&&null!=n.error?r.a.createElement(oe,{variant:"error"},n.error):!1===n.pending&&!0===n.success&&0===t.length?r.a.createElement(oe,{variant:"info"},"No posts"):!0===n.pending||null===n.success?r.a.createElement(re,null):r.a.createElement(oe,{variant:"info"},"Something went wrong!")}}]),t}(r.a.Component);se.defaultProps={initialPage:1,postsPerPage:10,pagination:!0};var ue=se,ie=Object(j.b)((function(e){return{posts:(n=e,n.posts.data),request:q(e),pages:R(e),presentPage:(t=e,t.posts.presentPage)};var t,n}),(function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(N.a)(w.a.mark((function n(a){var r,c,o,l;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(X()),n.prev=1,r=(e-1)*t,c=t,n.next=6,S.a.get("".concat("/api","/posts/range/").concat(r,"/").concat(c));case 6:o=n.sent,l={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},a(H(l)),a(G()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(J(n.t0.message));case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},resetRequest:function(){return e(V())}}}))(ue),pe=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Blog"),r.a.createElement(ie,{pagination:!1,postsPerPage:3}))},me=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.count;return e=0===t?"No posts":t,r.a.createElement("div",null,"Posts amount: ",e)}}]),t}(r.a.Component),fe=Object(j.b)((function(e){return{count:(t=e,t.posts.amount)};var t}))(me),de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,"Posts list"),r.a.createElement(fe,null),r.a.createElement(ie,null))},he=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Contact"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street"),r.a.createElement("p",null,"Stone Mountain, GA 30083"),r.a.createElement("p",null,"Mobile Number: 207-914-3411"))},Ee=function(){return r.a.createElement("h1",null,"404 Not Found")},ge=n(43),be=n(106),ve=n(107),Oe=(n(244),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadPost,n=e.resetRequest;t(e.match.params.id),n()}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.request,a=e.location;return!1===n.pending&&!0===n.success&&null!==t?r.a.createElement("article",null,r.a.createElement(K,null,t.title),r.a.createElement(ge.FacebookProvider,{appId:"437479826881005"},r.a.createElement(ge.ShareButton,{className:"fb-share-button",href:"".concat(C).concat(a.pathname)},r.a.createElement(be.a,{icon:ve.a,className:"fb-icon"}),"Share on Facebook")),r.a.createElement("p",null,"Author: ",t.author),r.a.createElement(ee,null,t.content),r.a.createElement(ge.FacebookProvider,{appId:"437479826881005"},r.a.createElement(ge.Comments,{href:"".concat(C).concat(a.pathname)}))):!0===n.pending||null===n.success?r.a.createElement(re,null):!1===n.pending&&null!==n.error?r.a.createElement(oe,{variant:"error"},n.error):!1===n.pending&&!0===n.success?r.a.createElement(oe,{variant:"info"},"No posts"):r.a.createElement(oe,{variant:"info"},"Something went wrong!")}}]),t}(r.a.Component)),je=Object(m.e)((function(e){return r.a.createElement(Oe,e)})),Pe=Object(j.b)((function(e){return{post:(t=e,t.posts.singlePost),request:q(e)};var t}),(function(e){return{loadPost:function(t){return e(function(e){return function(){var t=Object(N.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X()),t.prev=1,t.next=4,S.a.get("".concat("/api","/posts/").concat(e));case 4:a=t.sent,n({payload:a.data,type:I}),n(G()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(J(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(V())}}}))(je),ye=function(){return r.a.createElement(Pe,null)},_e=n(108),we=n.n(_e),Ne=(n(277),n(278),n(279),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(Y.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),ke=(n(280),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)});n(281);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:Ce({},t,Object(y.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:Ce({},t,{content:e})})},n.addPost=function(e){var t=n.props.addPost,a=n.state.post;e.preventDefault(),t(a)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.addPost,c=this.props.request;return c.error?r.a.createElement(oe,{variant:"error"},c.error):c.success?r.a.createElement(oe,{variant:"success"},"Post has been added!"):c.pending?r.a.createElement(re,null):r.a.createElement("form",{onSubmit:a},r.a.createElement(Ne,{label:"Title",value:e.title,onChange:t,name:"title"}),r.a.createElement(Ne,{label:"Author",value:e.author,onChange:t,name:"author"}),r.a.createElement(ke,null,"Edit post content"),r.a.createElement(we.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement(z,{variant:"primary"},"Add post"))}}]),t}(r.a.Component),De=Object(j.b)((function(e){return{request:q(e)}}),(function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(N.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(X()),t.prev=1,t.next=4,S.a.post("".concat("/api","/posts"),e);case 4:a=t.sent,n(Q(a.data)),n(G()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(J(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(V())}}}))(xe),qe=function(){return r.a.createElement(De,null)},Re=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:pe}),r.a.createElement(m.a,{path:"/posts",exact:!0,component:de}),r.a.createElement(m.a,{path:"/contact",exact:!0,component:he}),r.a.createElement(m.a,{path:"/posts/new",exact:!0,component:qe}),r.a.createElement(m.a,{path:"/posts/:id",exact:!0,component:ye}),r.a.createElement(m.a,{component:Ee})))}}]),t}(r.a.Component),Ae=(n(282),n(283),n(29)),Te=n(109),Ie=Object(Ae.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case T:return D({},e,{data:t.payload});case I:return D({},e,{singlePost:t.payload});case B:return D({},e,{request:{pending:!0,error:null,success:null}});case F:return D({},e,{request:{pending:!1,error:null,success:!0}});case L:return D({},e,{request:{pending:!1,error:t.error,success:!1}});case U:return D({},e,{request:{pending:!1,error:null,success:null}});case M:return D({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(P.a)(t.payload.posts)});default:return e}}}),Be=Object(Ae.e)(Ie,Object(Ae.d)(Object(Ae.a)(Te.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement((function(){return r.a.createElement(j.a,{store:Be},r.a.createElement(h.a,null,r.a.createElement(Re,null)))}),null),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.d18c4888.chunk.js.map