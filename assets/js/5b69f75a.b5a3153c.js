"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[254],{2952:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Plugins/Proccessors/CosmosDB","title":"CosmosDB","description":"Introduction","source":"@site/docs/Plugins/Proccessors/CosmosDB.md","sourceDirName":"Plugins/Proccessors","slug":"/Plugins/Proccessors/CosmosDB","permalink":"/documentation/docs/Plugins/Proccessors/CosmosDB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CosmosDB Table","permalink":"/documentation/docs/Plugins/Proccessors/CosmosDB Table"},"next":{"title":"Introduction","permalink":"/documentation/docs/Plugins/Proccessors/Date Formatter"}}');var t=i(4848),s=i(8453);const o={},r=void 0,l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"CosmosDB Plugin",id:"cosmosdb-plugin",level:2},{value:"Actions",id:"actions",level:3},{value:"1. Delete database",id:"1-delete-database",level:4},{value:"2. Get database",id:"2-get-database",level:4},{value:"3. Insert database",id:"3-insert-database",level:4},{value:"Configuration for Delete Database, Get Database, and Insert Database",id:"configuration-for-delete-database-get-database-and-insert-database",level:3},{value:"Configuration Steps for Delete Database, Get Database, and Insert Database",id:"configuration-steps-for-delete-database-get-database-and-insert-database",level:4},{value:"Example Configuration for Delete Database, Get Database, and Insert Database",id:"example-configuration-for-delete-database-get-database-and-insert-database",level:3},{value:"Configuration Fields:",id:"configuration-fields",level:4},{value:"Example Usage for Delete Database, Get Database, and Insert Database",id:"example-usage-for-delete-database-get-database-and-insert-database",level:3},{value:"Configuration Input:",id:"configuration-input",level:4},{value:"4. Query database",id:"4-query-database",level:4},{value:"Configuration for Query Database",id:"configuration-for-query-database",level:3},{value:"Configuration Steps for Query Database",id:"configuration-steps-for-query-database",level:4},{value:"Example Configuration for Query Database",id:"example-configuration-for-query-database",level:3},{value:"Configuration Fields:",id:"configuration-fields-1",level:4},{value:"Example Usage for Query Database",id:"example-usage-for-query-database",level:3},{value:"Configuration Input:",id:"configuration-input-1",level:4},{value:"Additional Configuration for Inputs",id:"additional-configuration-for-inputs",level:3},{value:"Example Configuration for Additional Inputs",id:"example-configuration-for-additional-inputs",level:3},{value:"Configuration Fields:",id:"configuration-fields-2",level:4},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:'The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "CosmosDB" plugin, which falls under the Processors category.'}),"\n",(0,t.jsx)(n.h2,{id:"cosmosdb-plugin",children:"CosmosDB Plugin"}),"\n",(0,t.jsx)(n.p,{children:'The "CosmosDB" plugin is used to interact with CosmosDB within your workflow. This plugin provides four actions: Delete database, Get database, Insert database, and Query database. Each action has specific configuration requirements.'}),"\n",(0,t.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,t.jsx)(n.h4,{id:"1-delete-database",children:"1. Delete database"}),"\n",(0,t.jsx)(n.p,{children:"Delete a database in CosmosDB."}),"\n",(0,t.jsx)(n.h4,{id:"2-get-database",children:"2. Get database"}),"\n",(0,t.jsx)(n.p,{children:"Retrieve a database from CosmosDB."}),"\n",(0,t.jsx)(n.h4,{id:"3-insert-database",children:"3. Insert database"}),"\n",(0,t.jsx)(n.p,{children:"Insert data into a CosmosDB database."}),"\n",(0,t.jsx)(n.h3,{id:"configuration-for-delete-database-get-database-and-insert-database",children:"Configuration for Delete Database, Get Database, and Insert Database"}),"\n",(0,t.jsx)(n.p,{children:"When configuring any of these actions, you need to provide the following inputs:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": A descriptive label to identify this action within your workflow."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),": Select an existing connection to your CosmosDB server or create a new connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": Input the partition key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": Input the container name."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"configuration-steps-for-delete-database-get-database-and-insert-database",children:"Configuration Steps for Delete Database, Get Database, and Insert Database"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot 2024-05-28 at 14.03.51.png",src:i(4152).A+"",width:"490",height:"595"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),': Provide a meaningful label for this action. For example, "Insert Data into CosmosDB".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select an existing CosmosDB connection from the dropdown menu."}),"\n",(0,t.jsx)(n.li,{children:'If no connection exists, click on "Create new connection" and follow the prompts to establish a new connection.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": Input the partition key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": Input the container name."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-configuration-for-delete-database-get-database-and-insert-database",children:"Example Configuration for Delete Database, Get Database, and Insert Database"}),"\n",(0,t.jsx)(n.h4,{id:"configuration-fields",children:"Configuration Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": Insert Data into CosmosDB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),": CosmosDBConnection1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": /partitionKey"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": myContainer"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-usage-for-delete-database-get-database-and-insert-database",children:"Example Usage for Delete Database, Get Database, and Insert Database"}),"\n",(0,t.jsx)(n.p,{children:"Let's consider a scenario where you want to configure the Insert Database action to insert data into a CosmosDB database with a specific connection, partition key, and container name."}),"\n",(0,t.jsx)(n.h4,{id:"configuration-input",children:"Configuration Input:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": Insert Data into CosmosDB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),": Select your authorized CosmosDB connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": /partitionKey"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": myContainer"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"4-query-database",children:"4. Query database"}),"\n",(0,t.jsx)(n.p,{children:"Query data from a CosmosDB database."}),"\n",(0,t.jsx)(n.h3,{id:"configuration-for-query-database",children:"Configuration for Query Database"}),"\n",(0,t.jsx)(n.p,{children:"When configuring the Query Database action, you need to provide the following inputs:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": A descriptive label to identify this action within your workflow."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),": Select an existing connection to your CosmosDB server or create a new connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": Input the partition key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": Input the container name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query"}),": Input the query (Example: ",(0,t.jsx)(n.code,{children:"select * from c where c.id=%v"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"configuration-steps-for-query-database",children:"Configuration Steps for Query Database"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot 2024-05-28 at 14.03.26.png",src:i(9763).A+"",width:"490",height:"962"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),': Provide a meaningful label for this action. For example, "Query Data from CosmosDB".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select an existing CosmosDB connection from the dropdown menu."}),"\n",(0,t.jsx)(n.li,{children:'If no connection exists, click on "Create new connection" and follow the prompts to establish a new connection.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": Input the partition key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": Input the container name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query"}),": Input the query (Example: ",(0,t.jsx)(n.code,{children:"select * from c where c.id=%v"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-configuration-for-query-database",children:"Example Configuration for Query Database"}),"\n",(0,t.jsx)(n.h4,{id:"configuration-fields-1",children:"Configuration Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": Query Data from CosmosDB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),": CosmosDBConnection1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": /partitionKey"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": myContainer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query"}),": select * from c where c.id=%v"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-usage-for-query-database",children:"Example Usage for Query Database"}),"\n",(0,t.jsx)(n.p,{children:"Let's consider a scenario where you want to configure the Query Database action to query data from a CosmosDB database with a specific connection, partition key, container name, and query."}),"\n",(0,t.jsx)(n.h4,{id:"configuration-input-1",children:"Configuration Input:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Label"}),": Query Data from CosmosDB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connection"}),": Select your authorized CosmosDB connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Partition Key"}),": /partitionKey"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Container Name"}),": myContainer"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query"}),": select * from c where c.id=%v"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-configuration-for-inputs",children:"Additional Configuration for Inputs"}),"\n",(0,t.jsx)(n.p,{children:'If you need to add additional inputs, click on the "Add" button and provide the following configurations:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": Input the name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Path"}),": Input the path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value"}),": Input the value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": Select the type (Types are: INT32, INT64, FLOAT32, DOUBLE, STRING, BYTE, DATE, DATETIME, BOOLEAN, OBJECT, ARRAY, ANY)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-configuration-for-additional-inputs",children:"Example Configuration for Additional Inputs"}),"\n",(0,t.jsx)(n.h4,{id:"configuration-fields-2",children:"Configuration Fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": userId"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Path"}),": /data/userId"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value"}),": 12345"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": INT32"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The CosmosDB plugin in the WeHub Dashboard is a versatile tool for interacting with CosmosDB within your workflows. By configuring the label, connection, partition key, container name, and query (if applicable), you can efficiently manage data operations in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior."}),"\n",(0,t.jsx)(n.p,{children:"If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4152:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/CosmosDB-1-4e7dba8a47a22ddc6daab17437b76bbf.png"},9763:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/CosmosDB-2-6ac5ff56ee0d800b2f46769cee4129b8.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var a=i(6540);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);