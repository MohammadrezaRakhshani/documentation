
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "AWS SQS" plugin, which is available in both the Triggers and Processors categories.

## AWS SQS Plugin
The "AWS SQS" (Amazon Simple Queue Service) plugin allows seamless interaction with SQS queues for sending, receiving, and managing messages. This plugin provides four actions: **Publish**, **Subscribe**, **Delete Message**, and **Purge Queue**. Below are the configuration requirements for each action.

---

### **Actions**

#### **1. Publish (Processor)**
Send messages to an SQS queue.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS SQS connection.
3. **Input Queue URL** *(String)*: Specify the URL of the SQS queue.
4. **FIFO Queue** *(Toggle)*: Enable if using a FIFO queue.
5. **Select Schema** *(Dropdown)*: Choose the schema for processing the data.
6. **Input Section**:
   - **Manual** *(Toggle)*: Enable to manually define input fields.
     - **Name** *(String)*: Specify the input name.
     - **Type** *(Dropdown)*: Choose the input type.
   - **Truncate Fields** *(Toggle)*: Enable to truncate fields.
     - **Truncate Level** *(Integer)*: Specify the truncate level.

---

#### **2. Subscribe (Trigger)**
Listen for messages on an SQS queue and trigger workflows.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS SQS connection.
3. **Input Queue URL** *(String)*: Specify the URL of the SQS queue.
4. **FIFO Queue** *(Toggle)*: Enable if using a FIFO queue.
   - **Attributes**: If enabled, define attributes for the queue.
     - **Name** *(String)*: Specify the attribute name.
     - **Type** *(Dropdown)*: Choose the attribute type.

---

#### **3. Delete Message (Processor)**
Delete a message from an SQS queue.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS SQS connection.
3. **Input Queue URL** *(String)*: Specify the URL of the SQS queue.

---

#### **4. Purge Queue (Processor)**
Purge all messages from an SQS queue.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS SQS connection.
3. **Input Queue URL** *(String)*: Specify the URL of the SQS queue.

---

### **Configuration Tables**

#### Publish Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS SQS connection.              |
| Input Queue URL     | String    | Specify the URL of the SQS queue.                    |
| FIFO Queue          | Toggle    | Enable if using a FIFO queue.                        |
| Select Schema       | Dropdown  | Choose the schema for processing the data.           |
| Input Section - Manual | Toggle | Enable to manually define input fields.              |
| - Name              | String    | Specify the input name.                              |
| - Type              | Dropdown  | Choose the input type.                               |
| Input Section - Truncate Fields | Toggle | Enable to truncate fields.                      |
| - Truncate Level    | Integer   | Specify the truncate level.                          |

#### Subscribe Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS SQS connection.              |
| Input Queue URL     | String    | Specify the URL of the SQS queue.                    |
| FIFO Queue          | Toggle    | Enable if using a FIFO queue.                        |
| Attributes - Name   | String    | Specify the attribute name (if FIFO Queue enabled).   |
| Attributes - Type   | Dropdown  | Choose the attribute type (if FIFO Queue enabled).    |

#### Delete Message Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS SQS connection.              |
| Input Queue URL     | String    | Specify the URL of the SQS queue.                    |

#### Purge Queue Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS SQS connection.              |
| Input Queue URL     | String    | Specify the URL of the SQS queue.                    |

---

### **Example Configurations**

#### Publish Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Send Alert                     |
| Select Connection   | AWS_SQS_Connection_1           |
| Input Queue URL     | https://sqs.us-east-1.amazonaws.com/123456789/myQueue |
| FIFO Queue          | Enabled                        |
| Select Schema       | Alert_Schema                   |
| Input Section       | Manual - Enabled               |
| - Name              | Alert_Type                     |
| - Type              | STRING                         |

#### Subscribe Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Monitor Queue                  |
| Select Connection   | AWS_SQS_Connection_2           |
| Input Queue URL     | https://sqs.us-east-1.amazonaws.com/123456789/myQueue |
| FIFO Queue          | Enabled                        |
| Attributes - Name   | Priority                       |
| Attributes - Type   | STRING                         |

---

### **Conclusion**
The AWS SQS plugin in the WeHub Dashboard provides powerful tools to manage and automate message handling in SQS queues. With its configurable actions for publishing, subscribing, deleting messages, and purging queues, it ensures seamless integration with your workflows.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
