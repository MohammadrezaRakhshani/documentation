[[_TOC_]]


## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "CosmosDB Table" plugin, which falls under the Processors category.

## CosmosDB Table Plugin
The "CosmosDB Table" plugin is used to interact with a CosmosDB Table within your workflow. This plugin provides six actions: CUSTOM, DELETE, INSERT, GET, UPDATE, and UPSERT. Each action has specific configuration requirements.

### Actions

#### 1. CUSTOM
Execute a custom CosmosDB Table query.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **Columns**: Input the columns, separated by commas. Users can add as many columns as needed.
5. **CosmosDB Table Query**: Input the query (by typing "/" you can access fields from manual input or the selected schema).

**Inputs Section:**
1. **Schema**: Select the schema.
2. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
3. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

#### 2. DELETE
Delete a record from a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **PartitionKey**: Input the partition key.

**NOTE**: This action takes a row key and removes it, and returns status (true/false) and an error if anything happens.

#### 3. INSERT
Insert a record into a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **PartitionKey**: Input the partition key.

**NOTE**: This action takes a row key and data as input and returns the row key of the inserted data.

#### 4. GET
Retrieve a record from a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **PartitionKey**: Input the partition key.

**NOTE**: This action takes a row key as input and returns the data.

#### 5. UPDATE
Update a record in a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.

**NOTE**: This action takes the whole data as input, updates it, and returns status (true/false) and an error if anything happens.

#### 6. UPSERT
Upsert a record in a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.

**NOTE**: This action takes the whole data as input, upserts it, and returns status (true/false) and an error if anything happens.

### Example Configuration Tables

#### CUSTOM Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Execute Custom Query                                  |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| Columns                 | id, name, email                                       |
| CosmosDB Table Query    | SELECT * FROM users WHERE id=/id                      |
| Inputs Section          | Schema: CustomSchema, Manual: Off, Truncate Fields: Off|

#### DELETE Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Delete Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| PartitionKey            | partitionKey                                          |

#### INSERT Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Insert Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| PartitionKey            | partitionKey                                          |

#### GET Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Get Record                                            |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| PartitionKey            | partitionKey                                          |

#### UPDATE Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Update Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |

#### UPSERT Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Upsert Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |

### Conclusion
The CosmosDB Table plugin in the WeHub Dashboard is a versatile tool for managing CosmosDB Table operations within your workflows. By configuring the label, connection, table name, columns, and other settings, you can efficiently handle various database operations in different scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
[[_TOC_]]


## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "CosmosDB Table" plugin, which falls under the Processors category.

## CosmosDB Table Plugin
The "CosmosDB Table" plugin is used to interact with a CosmosDB Table within your workflow. This plugin provides six actions: CUSTOM, DELETE, INSERT, GET, UPDATE, and UPSERT. Each action has specific configuration requirements.

### Actions

#### 1. CUSTOM
Execute a custom CosmosDB Table query.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **Columns**: Input the columns, separated by commas. Users can add as many columns as needed.
5. **CosmosDB Table Query**: Input the query (by typing "/" you can access fields from manual input or the selected schema).

**Inputs Section:**
1. **Schema**: Select the schema.
2. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
3. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

#### 2. DELETE
Delete a record from a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **PartitionKey**: Input the partition key.

**NOTE**: This action takes a row key and removes it, and returns status (true/false) and an error if anything happens.

#### 3. INSERT
Insert a record into a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **PartitionKey**: Input the partition key.

**NOTE**: This action takes a row key and data as input and returns the row key of the inserted data.

#### 4. GET
Retrieve a record from a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.
4. **PartitionKey**: Input the partition key.

**NOTE**: This action takes a row key as input and returns the data.

#### 5. UPDATE
Update a record in a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.

**NOTE**: This action takes the whole data as input, updates it, and returns status (true/false) and an error if anything happens.

#### 6. UPSERT
Upsert a record in a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your CosmosDB server or create a new connection.
3. **Table name**: Input the table name.

**NOTE**: This action takes the whole data as input, upserts it, and returns status (true/false) and an error if anything happens.

### Example Configuration Tables

#### CUSTOM Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Execute Custom Query                                  |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| Columns                 | id, name, email                                       |
| CosmosDB Table Query    | SELECT * FROM users WHERE id=/id                      |
| Inputs Section          | Schema: CustomSchema, Manual: Off, Truncate Fields: Off|

#### DELETE Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Delete Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| PartitionKey            | partitionKey                                          |

#### INSERT Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Insert Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| PartitionKey            | partitionKey                                          |

#### GET Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Get Record                                            |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |
| PartitionKey            | partitionKey                                          |

#### UPDATE Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Update Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |

#### UPSERT Action
| Field                   | Description                                           |
|-------------------------|-------------------------------------------------------|
| Label                   | Upsert Record                                         |
| Connection              | CosmosDBConnection1                                   |
| Table name              | users                                                 |

### Conclusion
The CosmosDB Table plugin in the WeHub Dashboard is a versatile tool for managing CosmosDB Table operations within your workflows. By configuring the label, connection, table name, columns, and other settings, you can efficiently handle various database operations in different scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
