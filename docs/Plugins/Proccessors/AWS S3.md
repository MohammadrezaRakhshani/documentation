
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "AWS S3 Manager" plugin, which falls under the Processors category.

## AWS S3 Manager Plugin
The "AWS S3 Manager" plugin enables seamless interaction with Amazon S3 for managing resources such as objects and buckets. This plugin provides four actions: **Create**, **Get**, **Delete**, and **List**. Below are the configuration requirements for each action.

---

### **Actions**

#### **1. Create (Processor)**
Create resources in AWS S3.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS S3 connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resource to create (e.g., Bucket, Object).

---

#### **2. Get (Processor)**
Retrieve resources from AWS S3.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS S3 connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resource to retrieve (e.g., Bucket, Object).

---

#### **3. Delete (Processor)**
Delete resources from AWS S3.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS S3 connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resource to delete (e.g., Bucket, Object).

---

#### **4. List (Processor)**
List resources in AWS S3.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS S3 connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resources to list (e.g., Buckets, Objects).

---

### **Configuration Table**

| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an AWS S3 connection.               |
| Select Resource Type| Dropdown  | Specify the type of resource (e.g., Bucket, Object).  |

---

### **Example Configurations**

#### Create Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Create S3 Bucket               |
| Select Connection   | AWS_S3_Connection_1            |
| Select Resource Type| Bucket                         |

#### Get Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Retrieve S3 Object             |
| Select Connection   | AWS_S3_Connection_2            |
| Select Resource Type| Object                         |

#### Delete Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Delete S3 Object               |
| Select Connection   | AWS_S3_Connection_3            |
| Select Resource Type| Object                         |

#### List Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | List S3 Buckets                |
| Select Connection   | AWS_S3_Connection_4            |
| Select Resource Type| Buckets                        |

---

### **Conclusion**
The AWS S3 Manager plugin in the WeHub Dashboard provides powerful tools to manage resources in S3, allowing you to create, retrieve, delete, and list buckets and objects seamlessly. With its flexible configurations, it integrates efficiently into your workflows.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
