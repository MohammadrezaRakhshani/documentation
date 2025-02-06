
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "AWS Secret Manager" plugin, which falls under the Processors category.

## AWS Secret Manager Plugin
The "AWS Secret Manager" plugin allows seamless interaction with AWS Secrets Manager to manage secrets for your applications. This plugin provides four actions: **Get**, **Put**, **Create**, and **Delete**. Below are the configuration requirements for each action.

---

### **Actions**

#### **1. Get (Processor)**
Retrieve secrets from AWS Secrets Manager.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS Secrets Manager connection.
3. **Input Version ID** *(String)*: Specify the version ID of the secret to retrieve.
4. **Input Version Stage** *(String)*: Specify the version stage of the secret to retrieve.
5. **Select Schema** *(Dropdown)*: Choose the schema for processing the secret data.
6. **Outputs Section**:
   - **Manual** *(Toggle)*: Enable to manually define output fields.
     - **Name** *(String)*: Specify the output name.
     - **Type** *(Dropdown)*: Choose the output type.
   - **Truncate Fields** *(Toggle)*: Enable to truncate fields.
     - **Truncate Level** *(Integer)*: Specify the truncate level.

---

#### **2. Put (Processor)**
Store a secret value in AWS Secrets Manager.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS Secrets Manager connection.

---

#### **3. Create (Processor)**
Create a new secret in AWS Secrets Manager.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS Secrets Manager connection.

---

#### **4. Delete (Processor)**
Delete a secret from AWS Secrets Manager.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS Secrets Manager connection.

---

### **Configuration Tables**

#### Get Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS Secrets Manager connection.   |
| Input Version ID    | String    | Specify the version ID of the secret.                |
| Input Version Stage | String    | Specify the version stage of the secret.             |
| Select Schema       | Dropdown  | Choose the schema for processing the data.           |
| Outputs Section - Manual | Toggle | Enable to manually define output fields.             |
| - Name              | String    | Specify the output name.                              |
| - Type              | Dropdown  | Choose the output type.                               |
| Outputs Section - Truncate Fields | Toggle | Enable to truncate fields.                        |
| - Truncate Level    | Integer   | Specify the truncate level.                          |

#### Put, Create, and Delete Actions
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS Secrets Manager connection.   |

---

### **Example Configurations**

#### Get Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Retrieve Secret                |
| Select Connection   | AWS_Secret_Connection_1        |
| Input Version ID    | 12345                          |
| Input Version Stage | AWSCURRENT                     |
| Select Schema       | Secret_Schema                  |
| Outputs Section     | Manual - Enabled               |
| - Name              | SecretKey                      |
| - Type              | STRING                         |
| Outputs Section     | Truncate Fields - Enabled      |
| - Truncate Level    | 10                             |

#### Put Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Store Secret                   |
| Select Connection   | AWS_Secret_Connection_2        |

---

### **Conclusion**
The AWS Secret Manager plugin in the WeHub Dashboard simplifies secure management of secrets, allowing retrieval, storage, creation, and deletion with ease. Its flexible configurations ensure seamless integration into your workflows.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
