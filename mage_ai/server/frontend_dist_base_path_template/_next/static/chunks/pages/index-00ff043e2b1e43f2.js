(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{55006:function(n,e,u){"use strict";u.r(e);var i=u(82684),t=u(34376),s=u(40761),a=u(35686),r=u(87432),o=u(66916),c=["/sign-in","/oauth"];e.default=function(){var n=(0,t.useRouter)(),e=n.asPath,u=e.split("?")[0],f=a.ZP.statuses.list().data,l=(0,i.useMemo)((function(){var n;return null==f||null===(n=f.statuses)||void 0===n?void 0:n[0]}),[f]);(0,i.useEffect)((function(){(0,r.xf)()&&(0,o.a3)()}),[]),(0,i.useEffect)((function(){if(c.includes(u))n.replace(e);else if(l){var i=null==l?void 0:l.require_user_authentication,t=s.Z.isLoggedIn();if(i&&!t)n.replace("/sign-in");else{var a=null==l?void 0:l.is_instance_manager,r=e;"/"===u&&(r=a?"/manage":"/overview"),n.replace(r)}}}),[u,e,l,n])}},48312:function(n,e,u){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return u(55006)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=48312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);