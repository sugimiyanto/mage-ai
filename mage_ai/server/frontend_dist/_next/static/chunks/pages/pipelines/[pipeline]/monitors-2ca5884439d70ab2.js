(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7713],{17150:function(e,t,n){"use strict";n.d(t,{i:function(){return p},p:function(){return a}});var r=n(82394),i=n(75582),o=n(3645),u=n(98781);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=function(e,t){if(!e)return[];var n=Object.entries(e).reduce((function(e,t){var n=(0,i.Z)(t,2),r=(n[0],n[1].data),o={};return Object.entries(r).forEach((function(t){var n=(0,i.Z)(t,2),r=n[0],u=n[1],c={};r in e&&(c=e[r]);var a={};Object.entries(u).forEach((function(e){var t,n=(0,i.Z)(e,2),r=n[0],o=n[1],u=null!==(t=c)&&void 0!==t&&t[r]?c[r]:0;a[r]=u+o})),o[r]=l(l({},c),a)})),l(l({},e),o)}),{});return t.map((function(e){return l({date:e},n[e]||{})}))},s=o.E.reduce((function(e,t){return l(l({},e),{},(0,r.Z)({},t,0))}),{}),d=new Set(o.E),p=function(e,t){var n;if(!e)return{groupedPipelineRunData:[],pipelineRunCountByPipelineType:{},totalPipelineRunCount:0,ungroupedPipelineRunData:[]};var o=(n={},(0,r.Z)(n,u.qL.INTEGRATION,l({},s)),(0,r.Z)(n,u.qL.PYSPARK,{}),(0,r.Z)(n,u.qL.PYTHON,l({},s)),(0,r.Z)(n,u.qL.STREAMING,l({},s)),n),c=0,a=Object.entries(e).reduce((function(e,t){var n=(0,i.Z)(t,2),r=(n[0],n[1].data),u={},a={};return Object.entries(r).forEach((function(t){var n=(0,i.Z)(t,2),r=n[0],s=n[1],p={},f={};r in e.grouped?(p=l({},e.grouped[r]),u[r]=l({},p)):u[r]={},r in e.ungrouped&&(f=l({},e.ungrouped[r]));var h={},g={};Object.entries(s).forEach((function(t){var n=(0,i.Z)(t,2),s=n[0],v=n[1];"null"===s||null===s||(r in e.grouped&&s in e.grouped[r]&&(p[s]=l({},e.grouped[r][s])),h[s]={},Object.entries(v).forEach((function(e){var t,n,r,u=(0,i.Z)(e,2),l=u[0],a=u[1],v=null!==(t=p)&&void 0!==t&&null!==(n=t[s])&&void 0!==n&&n[l]?p[s][l]:0;h[s][l]=v+a;var b=null!==(r=f)&&void 0!==r&&r[l]?f[l]:0;g[l]=b+a,d.has(l)&&(o[s][l]=(o[s][l]||0)+a),c+=a})),u[r][s]=l(l({},p[s]),h[s]),a[r]=l(l({},f),g))}))})),{grouped:l(l({},e.grouped),u),ungrouped:l(l({},e.ungrouped),a)}}),{grouped:{},ungrouped:{}}),p=[],f=[];return t.forEach((function(e){p.push(l({date:e},a.grouped[e]||{})),f.push(l({date:e},a.ungrouped[e]||{}))})),{groupedPipelineRunData:p,pipelineRunCountByPipelineType:o,totalPipelineRunCount:c,ungroupedPipelineRunData:f}}},67591:function(e,t,n){"use strict";var r=n(26304),i=n(82394),o=n(21831),u=(n(82684),n(84969)),c=n(90948),l=n(81354),a=n(67778),s=n(29989),d=n(17066),p=n(29179),f=n(65376),h=n(48072),g=n(98677),v=n(84181),b=n(24903),m=n(67971),j=n(26226),O=n(19711),Z=n(52359),x=n(23831),y=n(73942),P=n(2005),E=n(49125),_=n(344),w=n(28598),T=["height","width","xAxisLabel","yAxisLabel"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=e.backgroundColor,n=e.colors,r=e.data,i=e.getXValue,m=(e.getYValue,e.height),j=e.keys,Z=e.margin,E=e.numYTicks,T=e.showLegend,k=e.tooltipLeftOffset,I=void 0===k?0:k,L=e.width,D=e.xLabelFormat,A=e.yLabelFormat,M=(0,p.Z)(),C=M.hideTooltip,R=M.showTooltip,S=M.tooltipData,U=M.tooltipLeft,F=M.tooltipOpen,V=M.tooltipTop,Y=L-(Z.left+Z.right),B=m-(Z.bottom+Z.top),q=r.reduce((function(e,t){var n=t,r=j.reduce((function(e,t){return Number(n[t])&&(e+=Number(n[t])),e}),0);return e.push(r),e}),[]),X=(0,g.Z)({domain:r.map(i),padding:.4,range:[0,Y],round:!1}),z=(0,v.Z)({domain:[0,Math.max.apply(Math,(0,o.Z)(q))],range:[B,0],round:!0}),G=(0,b.Z)({domain:j,range:n});return(0,w.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,w.jsxs)("svg",{height:m,width:L,children:[(0,w.jsx)("rect",{fill:t||x.Z.background.chartBlock,height:m,rx:14,width:L,x:0,y:0}),(0,w.jsx)(a.Z,{height:B,left:Z.left,scale:z,stroke:"black",strokeOpacity:.2,top:Z.top,width:Y}),(0,w.jsx)(s.Z,{left:Z.left,top:Z.top,children:(0,w.jsx)(l.Z,{color:G,data:r,keys:j,value:function(e,t){return e[t]||0},x:i,xScale:X,yScale:z,children:function(e){return e.map((function(e){return e.bars.map((function(t){return(0,w.jsx)("rect",{fill:t.color,height:t.height,onMouseLeave:C,onMouseMove:function(e){var n=(0,h.Z)(e),r=t.x+t.width/2+I;R({tooltipData:t,tooltipLeft:r,tooltipTop:(null===n||void 0===n?void 0:n.y)+10})},width:t.width,x:t.x,y:t.y},"bar-stack-".concat(e.index,"-").concat(t.index))}))}))}})}),(0,w.jsx)(u.Z,{hideTicks:!0,left:Z.left,numTicks:E,scale:z,stroke:x.Z.content.muted,tickFormat:function(e){return A?A(e):(0,_.P5)(e)},tickLabelProps:function(){return{fill:x.Z.content.muted,fontFamily:P.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:Z.top}),(0,w.jsx)(c.Z,{hideTicks:!0,left:Z.left,scale:X,stroke:x.Z.content.muted,tickFormat:D,tickLabelProps:function(){return{fill:x.Z.content.muted,fontFamily:P.ry,fontSize:11,textAnchor:"middle"}},top:B+Z.top})]}),T&&(0,w.jsx)("div",{style:{display:"flex",fontSize:"14px",justifyContent:"center",position:"absolute",top:Z.top/2-10,width:"100%"},children:(0,w.jsx)(d.Z,{direction:"row",labelMargin:"0 15px 0 0",scale:G})}),F&&S&&(0,w.jsxs)(f.Z,{left:U,style:N(N({},f.j),{},{backgroundColor:x.Z.background.page,borderRadius:"".concat(y.TR,"px"),padding:".3rem .4rem"}),top:V,children:[(0,w.jsx)(O.ZP,{bold:!0,color:G(S.key),children:S.key}),(0,w.jsx)(O.ZP,{children:S.bar.data[S.key]}),(0,w.jsx)(O.ZP,{children:i(S.bar.data)})]})]})}t.Z=function(e){var t=e.height,n=e.width,i=e.xAxisLabel,o=e.yAxisLabel,u=(0,r.Z)(e,T);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{style:{height:t,marginBottom:E.iI,width:n},children:[o&&(0,w.jsx)(m.Z,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,w.jsx)(Z.Z,{children:(0,w.jsx)(O.ZP,{center:!0,muted:!0,small:!0,children:o})})}),(0,w.jsx)("div",{style:{height:t,width:o?0===n?n:n-28:n},children:(0,w.jsx)(j.Z,{children:function(e){var t=e.height,n=e.width;return(0,w.jsx)(I,N(N({},u),{},{height:t,width:n}))}})}),i&&(0,w.jsx)("div",{style:{paddingLeft:o?36:0,paddingTop:4},children:(0,w.jsx)(O.ZP,{center:!0,muted:!0,small:!0,children:i})})]})})}},66050:function(e,t,n){"use strict";var r;n.d(t,{V:function(){return r}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(r||(r={}))},3645:function(e,t,n){"use strict";n.d(t,{E:function(){return o},h:function(){return r}});n(98781);var r,i=n(66050);!function(e){e.BLOCK_RUN_COUNT="block_run_count",e.BLOCK_RUN_TIME="block_run_time",e.PIPELINE_RUN_COUNT="pipeline_run_count",e.PIPELINE_RUN_TIME="pipeline_run_time"}(r||(r={}));var o=[i.V.RUNNING,i.V.COMPLETED,i.V.FAILED]},93348:function(e,t,n){"use strict";n.d(t,{TR:function(){return d},U5:function(){return l},Xm:function(){return o},Z4:function(){return s},fq:function(){return c},kJ:function(){return a}});var r,i,o,u=n(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var c,l,a,s=(r={},(0,u.Z)(r,o.API,(function(){return"API"})),(0,u.Z)(r,o.EVENT,(function(){return"event"})),(0,u.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(c||(c={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(a||(a={}));var d=(i={},(0,u.Z)(i,a.CREATED_AT,"Created at"),(0,u.Z)(i,a.NAME,"Name"),(0,u.Z)(i,a.PIPELINE,"Pipeline"),(0,u.Z)(i,a.STATUS,"Status"),(0,u.Z)(i,a.TYPE,"Type"),i)},67400:function(e,t,n){"use strict";n.r(t);var r=n(77837),i=n(75582),o=n(82394),u=n(38860),c=n.n(u),l=n(82684),a=n(12691),s=n.n(a),d=n(92083),p=n.n(d),f=n(38626),h=n(67591),g=n(67971),v=n(87372),b=n(10919),m=n(87465),j=n(41788),O=n(86673),Z=n(19711),x=n(82531),y=n(92953),P=n(10503),E=n(93348),_=n(49125),w=n(90211),T=n(17150),k=n(42305),N=n(28598);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=f.default.div.withConfig({displayName:"monitors__GradientTextStyle",componentId:"sc-1is2m2l-0"})(["background:linear-gradient(90deg,#7D55EC 28.12%,#2AB2FE 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;"]);function A(e){var t=e.pipeline.uuid,n=(0,l.useState)(null),r=n[0],u=n[1],c=x.ZP.pipeline_schedules.pipelines.list(t).data,a=(0,l.useMemo)((function(){return null===c||void 0===c?void 0:c.pipeline_schedules}),[c]),d=(0,l.useMemo)((function(){return null===a||void 0===a?void 0:a.reduce((function(e,t){return L(L({},e),{},(0,o.Z)({},null===t||void 0===t?void 0:t.id,t))}),{})}),[a]),f=x.ZP.pipelines.detail(t,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,j=(0,l.useMemo)((function(){return L(L({},null===f||void 0===f?void 0:f.pipeline),{},{uuid:t})}),[f,t]),I=x.ZP.monitor_stats.detail("pipeline_run_count",{pipeline_uuid:null===j||void 0===j?void 0:j.uuid}).data,A=((null===I||void 0===I?void 0:I.monitor_stat)||{}).stats,M=(0,l.useMemo)((function(){return(0,k.Y_)()}),[]),C=(0,l.useMemo)((function(){return(0,T.p)(A,M)}),[M,A]),R=(0,l.useMemo)((function(){if(A)return Object.entries(A).reduce((function(e,t){var n=(0,i.Z)(t,2),r=n[0],u=n[1].data,c=M.map((function(e){return L({date:e},u[e]||{})}));return L(L({},e),{},(0,o.Z)({},r,c))}),{})}),[M,A]),S=(0,l.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[]);return(0,N.jsx)(m.Z,{breadcrumbs:S,errors:r,monitorType:y.a_.PIPELINE_RUNS,pipeline:j,setErrors:u,children:(0,N.jsxs)(O.Z,{mt:2,mx:2,children:[(0,N.jsx)(O.Z,{ml:1,children:(0,N.jsx)(D,{children:(0,N.jsx)(v.Z,{children:"All pipeline runs"})})}),(0,N.jsx)(O.Z,{mt:1,children:(0,N.jsx)(h.Z,{colors:y.NU,data:C,getXValue:function(e){return e.date},height:200,keys:y.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:y.CD,xLabelFormat:function(e){return p()(e).format("MMM DD")}})}),R&&Object.entries(R).map((function(e){var n,r=(0,i.Z)(e,2),o=r[0],u=r[1],c=null===d||void 0===d?void 0:d[o];return(0,N.jsxs)(O.Z,{mt:3,children:[(0,N.jsxs)(g.Z,{alignItems:"center",children:[(0,N.jsx)(O.Z,{mx:1,children:(0,N.jsx)(D,{children:(0,N.jsx)(Z.ZP,{bold:!0,large:!0,children:(0,w.kC)(null===(n=E.Z4[null===c||void 0===c?void 0:c.schedule_type])||void 0===n?void 0:n.call(E.Z4))})})}),(0,N.jsx)(s(),{as:"/pipelines/".concat(t,"/triggers/").concat(null===c||void 0===c?void 0:c.id),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,N.jsx)(b.Z,{children:(0,N.jsxs)(g.Z,{alignItems:"center",children:[(0,N.jsx)(v.Z,{level:5,children:(null===c||void 0===c?void 0:c.name)||o}),(0,N.jsx)(O.Z,{ml:1}),(0,N.jsx)(P._Q,{default:!0,size:2*_.iI})]})})})]}),(0,N.jsx)(O.Z,{mt:1,children:(0,N.jsx)(h.Z,{colors:y.NU,data:u,getXValue:function(e){return e.date},height:200,keys:y.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:y.CD,xLabelFormat:function(e){return p()(e).format("MMM DD")}})})]},o)}))]})})}A.getInitialProps=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.pipeline,e.abrupt("return",{pipeline:{uuid:n}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=(0,j.Z)(A)},89677:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors",function(){return n(67400)}])}},function(e){e.O(0,[844,9902,5896,2714,5239,1424,1005,2437,4738,9774,2888,179],(function(){return t=89677,e(e.s=t);var t}));var t=e.O();_N_E=t}]);