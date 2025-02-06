"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[429],{165:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"Plugins/Proccessors/Redis Cache","title":"Redis Cache","description":"Introduction","source":"@site/docs/Plugins/Proccessors/Redis Cache.md","sourceDirName":"Plugins/Proccessors","slug":"/Plugins/Proccessors/Redis Cache","permalink":"/documentation/docs/Plugins/Proccessors/Redis Cache","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"PostgreSQL","permalink":"/documentation/docs/Plugins/Proccessors/PostgreSQL"},"next":{"title":"Rule Engine","permalink":"/documentation/docs/Plugins/Proccessors/Rule Engine"}}');var s=i(4848),t=i(8453);const c={},r=void 0,l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Redis Cache Plugin",id:"redis-cache-plugin",level:2},{value:"Actions",id:"actions",level:3},{value:"1. add key",id:"1-add-key",level:4},{value:"2. delete key",id:"2-delete-key",level:4},{value:"3. get key",id:"3-get-key",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Configuration Steps",id:"configuration-steps",level:4},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Configuration Fields:",id:"configuration-fields",level:4},{value:"Example Usage",id:"example-usage",level:3},{value:"Configuration Input:",id:"configuration-input",level:4},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:'The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Redis Cache" plugin, which falls under the Processors category.'}),"\n",(0,s.jsx)(n.h2,{id:"redis-cache-plugin",children:"Redis Cache Plugin"}),"\n",(0,s.jsx)(n.p,{children:'The "Redis Cache" plugin is used to interact with Redis cache within your workflow. This plugin provides three actions: add key, delete key, and get key. Each action has the same configuration requirements.'}),"\n",(0,s.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.h4,{id:"1-add-key",children:"1. add key"}),"\n",(0,s.jsx)(n.p,{children:"Add a key to the Redis cache."}),"\n",(0,s.jsx)(n.h4,{id:"2-delete-key",children:"2. delete key"}),"\n",(0,s.jsx)(n.p,{children:"Delete a key from the Redis cache."}),"\n",(0,s.jsx)(n.h4,{id:"3-get-key",children:"3. get key"}),"\n",(0,s.jsx)(n.p,{children:"Get the value of a key from the Redis cache."}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"When configuring any of the Redis Cache actions, you need to provide the following inputs:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screenshot 2024-05-28 at 12.48.10.png",src:i(2097).A+"",width:"492",height:"438"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),": A descriptive label to identify this action within your workflow."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connection"}),": Select an existing connection to your Redis server or create a new connection."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"configuration-steps",children:"Configuration Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),': Provide a meaningful label for this action. For example, "Add Key to Redis Cache".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connection"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select an existing Redis connection from the dropdown menu."}),"\n",(0,s.jsx)(n.li,{children:'If no connection exists, click on "Create new connection" and follow the prompts to establish a new connection.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"configuration-fields",children:"Configuration Fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),": Add Key to Redis Cache"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connection"}),": RedisConnection1"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsx)(n.p,{children:"Let's consider a scenario where you want to configure the add key action to add a key to the Redis cache with a specific connection."}),"\n",(0,s.jsx)(n.h4,{id:"configuration-input",children:"Configuration Input:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),": Add Key to Redis Cache"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Connection"}),": Select your authorized Redis connection."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"The Redis Cache plugin in the WeHub Dashboard is a versatile tool for managing keys within the Redis cache in your workflows. By configuring the label and connection, you can efficiently handle key additions, deletions, and retrievals in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior."}),"\n",(0,s.jsx)(n.p,{children:"If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2097:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/Redis Cache-24f67d3eb2309b61cfd28db6abe0c2dc.png"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var o=i(6540);const s={},t=o.createContext(s);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);