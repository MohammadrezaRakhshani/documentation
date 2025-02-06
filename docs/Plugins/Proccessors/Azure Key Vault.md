
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "Azure Key Vault" plugin, which falls under the Processors category.

## Azure Key Vault Plugin
The "Azure Key Vault" plugin enables seamless interaction with Azure Key Vault for managing secrets, keys, and certificates. This plugin provides three actions: **Create**, **Get**, and **Delete**. Below are the configuration requirements for each action.

---

### **Actions**

#### **1. Create (Processor)**
Create a new secret, key, or certificate in Azure Key Vault.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an Azure Key Vault connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resource to create (e.g., Secret, Key, Certificate).

---

#### **2. Get (Processor)**
Retrieve a secret, key, or certificate from Azure Key Vault.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an Azure Key Vault connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resource to retrieve (e.g., Secret, Key, Certificate).
4. **Input Version** *(String)*: Specify the version of the resource to retrieve (optional).

---

#### **3. Delete (Processor)**
Delete a secret, key, or certificate from Azure Key Vault.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an Azure Key Vault connection.
3. **Select Resource Type** *(Dropdown)*: Specify the type of resource to delete (e.g., Secret, Key, Certificate).

---

### **Configuration Tables**

#### Create Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an Azure Key Vault connection.       |
| Select Resource Type| Dropdown  | Specify the type of resource to create.               |

#### Get Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an Azure Key Vault connection.       |
| Select Resource Type| Dropdown  | Specify the type of resource to retrieve.             |
| Input Version       | String    | Specify the version of the resource (optional).       |

#### Delete Action
| Field               | Type      | Description                                           |
|---------------------|-----------|-------------------------------------------------------|
| Label               | String    | Descriptive label for identifying the action.         |
| Select Connection   | Dropdown  | Select or create an Azure Key Vault connection.       |
| Select Resource Type| Dropdown  | Specify the type of resource to delete.               |

---

### **Example Configurations**

#### Create Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Create Secret                  |
| Select Connection   | Azure_KeyVault_Connection_1    |
| Select Resource Type| Secret                         |

#### Get Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Retrieve Key                   |
| Select Connection   | Azure_KeyVault_Connection_2    |
| Select Resource Type| Key                            |
| Input Version       | 12345                          |

#### Delete Action
| Field               | Value                           |
|---------------------|---------------------------------|
| Label               | Delete Certificate             |
| Select Connection   | Azure_KeyVault_Connection_3    |
| Select Resource Type| Certificate                    |

---

### **Conclusion**
The Azure Key Vault plugin in the WeHub Dashboard simplifies secure management of secrets, keys, and certificates. With flexible configurations for creating, retrieving, and deleting resources, it ensures seamless integration into your workflows.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
