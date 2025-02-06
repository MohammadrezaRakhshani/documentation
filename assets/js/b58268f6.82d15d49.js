"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1460],{5782:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Plugins/Proccessors/HL7 Operations","title":"HL7 Operations","description":"Introduction","source":"@site/docs/Plugins/Proccessors/HL7 Operations.md","sourceDirName":"Plugins/Proccessors","slug":"/Plugins/Proccessors/HL7 Operations","permalink":"/documentation/docs/Plugins/Proccessors/HL7 Operations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Field Mapper","permalink":"/documentation/docs/Plugins/Proccessors/Field Mapper"},"next":{"title":"JSON Operations","permalink":"/documentation/docs/Plugins/Proccessors/JSON Operations"}}');var o=s(4848),r=s(8453);const t={},a=void 0,l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"HL7 Operations Plugin",id:"hl7-operations-plugin",level:2},{value:"Actions",id:"actions",level:3},{value:"1. Parse an HL7 message",id:"1-parse-an-hl7-message",level:4},{value:"2. Produce an HL7 message",id:"2-produce-an-hl7-message",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Configuration Steps",id:"configuration-steps",level:4},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Configuration Fields:",id:"configuration-fields",level:4},{value:"Example Usage",id:"example-usage",level:3},{value:"Configuration Input:",id:"configuration-input",level:4},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:'The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "HL7 Operations" plugin, which falls under the Processors category.'}),"\n",(0,o.jsx)(n.h2,{id:"hl7-operations-plugin",children:"HL7 Operations Plugin"}),"\n",(0,o.jsx)(n.p,{children:'The "HL7 Operations" plugin is used to handle HL7 messages within your workflow. This plugin provides two actions: Parse an HL7 message and Produce an HL7 message. Each action has specific configuration requirements.'}),"\n",(0,o.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,o.jsx)(n.h4,{id:"1-parse-an-hl7-message",children:"1. Parse an HL7 message"}),"\n",(0,o.jsx)(n.p,{children:"Take an HL7 message and return the transformed data based on the schema."}),"\n",(0,o.jsx)(n.h4,{id:"2-produce-an-hl7-message",children:"2. Produce an HL7 message"}),"\n",(0,o.jsx)(n.p,{children:"Take transformed data from any format and produce the HL7 message based on the schema."}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"When configuring either of the HL7 actions, you need to provide the following inputs:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Screenshot 2024-05-29 at 15.43.00.png",src:s(7923).A+"",width:"494",height:"519"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Label"}),": A descriptive label to identify this action within your workflow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Version"}),": Select the HL7 version (Versions are: V210, V220, V230, V231, V240, V250, V251, V260, V270, V271, V280)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Trigger"}),": Select the HL7 trigger (Triggers are: ADT-A01 to ADT-A24 and BAR-P01, BAR-P02, etc.)."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"configuration-steps",children:"Configuration Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Label"}),': Provide a meaningful label for this action. For example, "Parse HL7 Admission Message".']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Version"}),": Select the appropriate HL7 version from the dropdown menu."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Trigger"}),": Select the appropriate HL7 trigger from the dropdown menu."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,o.jsx)(n.h4,{id:"configuration-fields",children:"Configuration Fields:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Label"}),": Parse HL7 Admission Message"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Version"}),": V250"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Trigger"}),": ADT-A01"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,o.jsx)(n.p,{children:'Let\'s consider a scenario where you want to configure the "Parse an HL7 message" action to parse an HL7 admission message with a specific version and trigger.'}),"\n",(0,o.jsx)(n.h4,{id:"configuration-input",children:"Configuration Input:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Label"}),": Parse HL7 Admission Message"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Version"}),": V250"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Trigger"}),": ADT-A01"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"The HL7 Operations plugin in the WeHub Dashboard is a versatile tool for managing HL7 messages within your workflows. By configuring the label, version, and trigger, you can efficiently handle the parsing and production of HL7 messages in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior."}),"\n",(0,o.jsx)(n.p,{children:"If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7923:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/HL7 Operations-0cf4d2255d2385ff5913624d0bc4a630.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(6540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);