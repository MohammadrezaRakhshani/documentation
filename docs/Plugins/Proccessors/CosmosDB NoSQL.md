[[_TOC_]]


## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "CosmosDB NoSQL" plugin, which falls under the Processors category.

## CosmosDB NoSQL Plugin
The "CosmosDB NoSQL" plugin is used to interact with a CosmosDB NoSQL database within your workflow. This plugin provides eight actions: Stored Procedure, CUSTOM, DELETE, INSERT, SELECT, UPDATE, UPSERT, and PATCH. Each action has specific configuration requirements.

### Actions

#### 1. Stored Procedure
Execute a stored procedure on the CosmosDB NoSQL database.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Stored Procedure**: Input the stored procedure name (best practice is to have the same name for both function and stored procedure in your CosmosDB dashboard).
5. **Container Name**: Input or select the container name.

**NOTE**: This action takes data and returns the result of your function. In defining the function for the stored procedure, the first field should be the partitionKey, followed by whatever you put to pass to your function like this: [partitionKey, []byte input of plugin].

#### 2. CUSTOM
Execute a custom CosmosDB NoSQL query.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key (leave empty to perform a cross-partition query).
4. **Container Name**: Input or select the container name.
5. **SQL**: Input the SQL query.

**Inputs Section:**
1. **Schema**: Select the schema.
2. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
3. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**Outputs Section:**
- Exactly the same as the Inputs Section.

#### 3. DELETE
Delete a record from a CosmosDB NoSQL container.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Container Name**: Input the container name.
5. **Condition**: Input the condition (e.g., containerName.name=/name, using "/" to access fields from manual input or the selected schema; always put container name before field names).

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: This action gets an ID and returns the affected row in the response.

#### 4. INSERT
Insert a record into a CosmosDB NoSQL container.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Container Name**: Input the container name.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: This action takes data, saves it in the data field of the record, and returns the ID of the inserted data.

#### 5. SELECT
Select records from a CosmosDB NoSQL container.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Container Name**: Input the container name.
5. **Columns**: Input the columns. Users can add as many columns as needed.
6. **Conditions**: Input the conditions (e.g., containerName.name=/name, using "/" to access fields from manual input or the selected schema; always put container name before field names).
7. **Order**: Input the order.
8. **Limit**: Input the limit.
9. **Offset**: Input the offset.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: This action can have no input. Output is an array of strings that include the ID and data of each record.

#### 6. UPDATE
Update a record in a CosmosDB NoSQL container.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Container Name**: Input the container name.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: This action takes the ID and data, updates the whole data of that record.

#### 7. UPSERT
Upsert a record in a CosmosDB NoSQL container.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Container Name**: Input the container name.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: This action takes the ID and data and upserts the record.

#### 8. PATCH
Patch a record in a CosmosDB NoSQL container.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **PartitionKey**: Input the partition key.
4. **Container Name**: Input the container name.
5. **Columns**: Input the columns. Users can add as many columns as needed and map them with selected input from the schema or manual input. In this action please provide proper path (exp: .data.child.0.name) as you can see in example this way you can address field of your db for patch no need to container name or anything else in path.


**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: For mapping columns, the container name should also be included like ContainerName.name. This action takes an ID and patches the field and value you chose in the Map Columns part.

### Example Configuration Tables

#### Stored Procedure Action
| Field           | Description                                            |
|-----------------|--------------------------------------------------------|
| Label           | Execute Stored Procedure                               |
| Connection      | CosmosDBConnection1                                    |
| PartitionKey    | partitionKey                                           |
| Stored Procedure| storedProcedureName                                    |
| Container Name  | containerName                                          |

#### CUSTOM Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Execute Custom Query                                   |
| Connection        | CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| SQL               | SELECT * FROM containerName WHERE id=/id               |
| Inputs Section    | Schema: CustomSchema, Manual: Off, Truncate Fields: Off|
| Outputs Section   | Schema: CustomSchema, Manual: Off, Truncate Fields: Off|

#### DELETE Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Delete Record                                          |
| Connection        | CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| Condition         | containerName.name=/name                               |

#### INSERT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Insert Record                                          |
| Connection        || CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| Manual            | Off                                                    |
| Truncate Fields   | Off                                                    |

#### SELECT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Select Records                                         |
| Connection        | CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| Columns           | id, name, data                                         |
| Conditions        | containerName.name=/name                               |
| Order             | name ASC                                               |
| Limit             | 10                                                     |
| Offset            | 0                                                      |
| Inputs Section    | Schema: SelectSchema, Manual: Off, Truncate Fields: Off|
| Outputs Section   | Schema: SelectSchema, Manual: Off, Truncate Fields: Off|

#### UPDATE Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Update Record                                          |
| Connection        | CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| Manual            | Off                                                    |
| Truncate Fields   | Off                                                    |

#### UPSERT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Upsert Record                                          |
| Connection        | CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| Manual            | Off                                                    |
| Truncate Fields   | Off                                                    |

#### PATCH Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Patch Record                                           |
| Connection        | CosmosDBConnection1                                    |
| PartitionKey      | partitionKey                                           |
| Container Name    | containerName                                          |
| Columns           | containerName.name, containerName.value                |
| Manual            | Off                                                    |
| Truncate Fields   | Off                                                    |

### Conclusion
The CosmosDB NoSQL plugin in the WeHub Dashboard is a versatile tool for managing CosmosDB NoSQL operations within your workflows. By configuring the label, connection, partition key, container name, columns, and other settings, you can efficiently handle various database operations in different scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
