
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "PostgreSQL" plugin, which falls under the Processors category.

## PostgreSQL Plugin
The "PostgreSQL" plugin is used to interact with a PostgreSQL database within your workflow. This plugin provides six actions: CUSTOM, DELETE, INSERT, SELECT, UPDATE, and UPSERT. Each action has specific configuration requirements.

### Actions

#### 1. CUSTOM
Execute a custom SQL query.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your PostgreSQL server or create a new connection.
3. **SQL Query**: Input the SQL query (by typing "/" you can access fields from manual input or the selected schema).

**Inputs Section:**
1. **Schema**: Select the schema.
2. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
3. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**Outputs Section:**
- Exactly the same as the Inputs Section.

#### 2. DELETE
Delete records from a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your PostgreSQL server or create a new connection.
3. **Table name**: Input the table name.
4. **Condition**: Input the condition (condition after WHERE clause like name=/name, using "/" to access fields from manual input or the selected schema).
5. **Schema**: Select the schema.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

#### 3. INSERT
Insert records into a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your PostgreSQL server or create a new connection.
3. **Table name**: Input the table name.
4. **Columns**: Input the columns. Users can add as many columns as needed and map them with selected input from the schema or manual input.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

#### 4. SELECT
Select records from a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your PostgreSQL server or create a new connection.
3. **Table name**: Input the table name.
4. **Columns**: Input the columns. Users can add as many columns as needed.
5. **Conditions**: Input the conditions (condition after WHERE clause like name=/name, using "/" to access fields from manual input or the selected schema).
6. **Order**: Input the order.
7. **Limit**: Input the limit.
8. **Offset**: Input the offset.

**Optional Configurations:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**Outputs Section:**
- Exactly the same as the Inputs Section.

#### 5. UPDATE
Update records in a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your PostgreSQL server or create a new connection.
3. **Table name**: Input the table name.
4. **Columns**: Input the columns. Users can add as many columns as needed and map them with selected input from the schema or manual input.
5. **Conditions**: Input the conditions (condition after WHERE clause like name=/name, using "/" to access fields from manual input or the selected schema).

**Inputs Section:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
   - **Schema**: Select the schema.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**Query Section:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
   - **Schema**: Select the schema.

#### 6. UPSERT
Insert or update records in a table.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your PostgreSQL server or create a new connection.
3. **Table name**: Input the table name.
4. **Columns**: Input the columns. Users can add as many columns as needed and map them with selected input from the schema or manual input.
5. **Conditions**: Input the conditions (condition after WHERE clause like name=/name, using "/" to access fields from manual input or the selected schema).

**Inputs Section:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
   - **Schema**: Select the schema.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

### Example Configuration Tables

#### CUSTOM Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Execute Custom SQL                                     |
| Connection        | PostgreSQLConnection1                                  |
| SQL Query         | SELECT * FROM users                                    |
| Inputs Section    | Schema: CustomSchema, Manual: Off, Truncate Fields: Off|
| Outputs Section   | Schema: CustomSchema, Manual: Off, Truncate Fields: Off|

#### DELETE Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Delete Records                                         |
| Connection        | PostgreSQLConnection1                                  |
| Table name        | users                                                  |
| Condition         | id = /id                                               |
| Schema            | DeleteSchema                                           |
| Manual            | Off                                                    |
| Truncate Fields   | Off                                                    |

#### INSERT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Insert Records                                         |
| Connection        | PostgreSQLConnection1                                  |
| Table name        | users                                                  |
| Columns           | id, name, email                                        |
| Manual            | Off                                                    |
| Truncate Fields   | Off                                                    |

#### SELECT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Select Records                                         |
| Connection        | PostgreSQLConnection1                                  |
| Table name        | users                                                  |
| Columns           | id, name, email                                        |
| Conditions        | name LIKE /name                                        |
| Order             | name ASC                                               |
| Limit             | 10                                                     |
| Offset            | 0                                                      |
| Inputs Section    | Schema: SelectSchema, Manual: Off, Truncate Fields: Off|
| Outputs Section   | Schema: SelectSchema, Manual: Off, Truncate Fields: Off|

#### UPDATE Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Update Records                                         |
| Connection        | PostgreSQLConnection1                                  |
| Table name        | users                                                  |
| Columns           | name, email                                            |
| Conditions        | id = /id                                               |
| Inputs Section    | Schema: UpdateSchema, Manual: Off, Truncate Fields: Off|
| Query Section     | Schema: QuerySchema, Manual: Off, Truncate Fields: Off |

#### UPSERT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Upsert Records                                         |
| Connection        | PostgreSQLConnection1                                  |
| Table name        | users                                                  |
| Columns           | id, name, email                                        |
| Conditions        | id = /id                                               |
| Inputs Section    | Schema: UpsertSchema, Manual: Off, Truncate Fields: Off|

### Conclusion
The PostgreSQL plugin in the WeHub Dashboard is a versatile tool for managing database operations within your workflows. By configuring the label, connection, table name, columns, conditions, and other settings, you can efficiently handle various database operations in different scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
