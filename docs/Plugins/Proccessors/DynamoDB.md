
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "DynamoDB" plugin, which falls under the Processors category.

## DynamoDB Plugin
The "DynamoDB" plugin enables seamless interaction with AWS DynamoDB for managing data in tables. This plugin provides five actions: **Read**, **Insert**, **Update**, **Upsert**, and **Delete**. Below are the configuration requirements for each action.

---

### **Actions**

#### **1. Read (Processor)**
Retrieve data from a DynamoDB table.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create a DynamoDB connection.
3. **Select Table Name** *(Dropdown)*: Specify the name of the table to read data from.
4. **Batch Read** *(Toggle)*: Enable to perform a batch read operation.
5. **Select Schema** *(Dropdown)*: Choose the schema for processing the data.
6. **Outputs Section**:
   - **Manual** *(Toggle)*: Enable to manually define output fields.
     - **Name** *(String)*: Specify the output name.
     - **Type** *(Dropdown)*: Choose the output type.
   - **Truncate Fields** *(Toggle)*: Enable to truncate fields.
     - **Truncate Level** *(Integer)*: Specify the truncate level.
7. **Primary Keys**:
   - **Add Primary Key** *(Button)*: Add primary keys by specifying the name and type.
     - **Name** *(String)*: Specify the primary key name.
     - **Type** *(Dropdown)*: Choose the primary key type.

---

#### **2. Insert (Processor)**
Insert new data into a DynamoDB table.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create a DynamoDB connection.
3. **Select Table Name** *(Dropdown)*: Specify the name of the table to insert data into.
4. **Batch Read** *(Toggle)*: Enable to perform a batch insert operation.
5. **Select Schema** *(Dropdown)*: Choose the schema for processing the data.
6. **Outputs Section**:
   - **Manual** *(Toggle)*: Enable to manually define output fields.
     - **Name** *(String)*: Specify the output name.
     - **Type** *(Dropdown)*: Choose the output type.
   - **Truncate Fields** *(Toggle)*: Enable to truncate fields.
     - **Truncate Level** *(Integer)*: Specify the truncate level.

---

#### **3. Update (Processor)**
Update existing data in a DynamoDB table.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create a DynamoDB connection.
3. **Select Table Name** *(Dropdown)*: Specify the name of the table to update data in.
4. **Batch Read** *(Toggle)*: Enable to perform a batch update operation.
5. **Select Schema** *(Dropdown)*: Choose the schema for processing the data.
6. **Outputs Section**:
   - **Manual** *(Toggle)*: Enable to manually define output fields.
     - **Name** *(String)*: Specify the output name.
     - **Type** *(Dropdown)*: Choose the output type.
   - **Truncate Fields** *(Toggle)*: Enable to truncate fields.
     - **Truncate Level** *(Integer)*: Specify the truncate level.

---

#### **4. Upsert (Processor)**
Insert or update data in a DynamoDB table.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create a DynamoDB connection.
3. **Select Table Name** *(Dropdown)*: Specify the name of the table to upsert data into.
4. **Batch Read** *(Toggle)*: Enable to perform a batch upsert operation.
5. **Select Schema** *(Dropdown)*: Choose the schema for processing the data.
6. **Outputs Section**:
   - **Manual** *(Toggle)*: Enable to manually define output fields.
     - **Name** *(String)*: Specify the output name.
     - **Type** *(Dropdown)*: Choose the output type.
   - **Truncate Fields** *(Toggle)*: Enable to truncate fields.
     - **Truncate Level** *(Integer)*: Specify the truncate level.

---

#### **5. Delete (Processor)**
Delete data from a DynamoDB table.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create a DynamoDB connection.
3. **Select Table Name** *(Dropdown)*: Specify the name of the table to delete data from.

---

### **Configuration Tables**

#### Common Fields
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create a DynamoDB connection.              |
| Select Table Name   | Dropdown  | Specify the name of the DynamoDB table.              |

#### Read Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Batch Read          | Toggle    | Enable to perform a batch read operation.            |
| Select Schema       | Dropdown  | Choose the schema for processing the data.           |
| Primary Keys        | Button    | Add primary keys by specifying name and type.         |
| Outputs Section - Manual | Toggle | Enable to manually define output fields.             |
| Outputs Section - Truncate Fields | Toggle | Enable to truncate fields.                          |
| - Truncate Level    | Integer   | Specify the truncate level.                          |

---

### **Example Configurations**

#### Read Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Fetch Customer Data            |
| Select Connection   | DynamoDB_Connection_1          |
| Select Table Name   | CustomerTable                  |
| Batch Read          | Enabled                        |
| Select Schema       | Customer_Schema                |
| Primary Keys        | Name: CustomerID, Type: STRING |
| Outputs Section     | Manual - Enabled               |
| - Name              | CustomerName                   |
| - Type              | STRING                         |
| Outputs Section     | Truncate Fields - Enabled      |
| - Truncate Level    | 5                              |

---

### **Conclusion**
The DynamoDB plugin in the WeHub Dashboard simplifies the management of data in DynamoDB tables. With its flexible configurations for reading, inserting, updating, upserting, and deleting, it ensures efficient data handling within your workflows.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
