
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "OpenAI" plugin, which falls under the Processors category.

## OpenAI Plugin
The "OpenAI" plugin allows seamless interaction with OpenAI's models for tasks like text generation, summarization, and classification. This plugin provides three actions: **Generation**, **Summarization**, and **Classification**. Below are the configuration requirements for each action.

---

### **Actions**

#### **1. Generation (Processor)**
Generate creative or informative text using OpenAI's models.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Input API Key** *(String)*: Provide your OpenAI API key.
3. **Select Model Type** *(Dropdown)*: Choose the model type (e.g., GPT-3, GPT-4).
4. **Input Temperature** *(Number)*: Set the creativity level (0 to 2). Higher values produce more creative responses.
5. **Input Max Token** *(Dropdown)*: Choose the maximum token length for the output.
   - **Short**: 0-100 tokens.
   - **Medium**: 100-200 tokens.
   - **Long**: 200-500 tokens.

---

#### **2. Summarization (Processor)**
Summarize long text into concise summaries using OpenAI's models.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Input API Key** *(String)*: Provide your OpenAI API key.
3. **Select Model Type** *(Dropdown)*: Choose the model type (e.g., GPT-3, GPT-4).
4. **Input Temperature** *(Number)*: Set the creativity level (0 to 2). Higher values produce more diverse summaries.
5. **Input Max Token** *(Dropdown)*: Choose the maximum token length for the summary.
   - **Short**: 0-100 tokens.
   - **Medium**: 100-200 tokens.
   - **Long**: 200-500 tokens.

---

#### **3. Classification (Processor)**
Classify text into predefined categories using OpenAI's models.

**Configurations:**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Input API Key** *(String)*: Provide your OpenAI API key.
3. **Select Model Type** *(Dropdown)*: Choose the model type (e.g., GPT-3, GPT-4).
4. **Input Temperature** *(Number)*: Set the creativity level (0 to 2). Higher values produce more diverse responses.
5. **Input Max Token** *(Dropdown)*: Choose the maximum token length for the output.
   - **Short**: 0-100 tokens.
   - **Medium**: 100-200 tokens.
   - **Long**: 200-500 tokens.
6. **Input Categories** *(String)*: Specify the categories for classification.

---

### **Configuration Tables**

#### Common Fields for All Actions
| Field                | Type      | Description                                           |
|----------------------|-----------|-------------------------------------------------------|
| Label                | String    | Descriptive label for identifying the action.         |
| Input API Key        | String    | Provide your OpenAI API key.                         |
| Select Model Type    | Dropdown  | Choose the model type (e.g., GPT-3, GPT-4).          |
| Input Temperature    | Number    | Set creativity level (0 to 2).                       |
| Input Max Token      | Dropdown  | Choose the maximum token length (Short, Medium, Long).|

#### Additional Field for Classification Action
| Field                | Type      | Description                                           |
|----------------------|-----------|-------------------------------------------------------|
| Input Categories     | String    | Specify the categories for classification.           |

---

### **Example Configurations**

#### Generation Action
| Field                | Value                           |
|----------------------|---------------------------------|
| Label                | Generate Email Content          |
| Input API Key        | sk-**************************** |
| Select Model Type    | GPT-4                           |
| Input Temperature    | 1.0                             |
| Input Max Token      | Medium                          |

#### Summarization Action
| Field                | Value                           |
|----------------------|---------------------------------|
| Label                | Summarize Report               |
| Input API Key        | sk-**************************** |
| Select Model Type    | GPT-3.5                        |
| Input Temperature    | 0.7                             |
| Input Max Token      | Long                            |

#### Classification Action
| Field                | Value                           |
|----------------------|---------------------------------|
| Label                | Classify Feedback              |
| Input API Key        | sk-**************************** |
| Select Model Type    | GPT-4                           |
| Input Temperature    | 0.5                             |
| Input Max Token      | Short                           |
| Input Categories     | Positive, Neutral, Negative     |

---

### **Conclusion**
The OpenAI plugin in the WeHub Dashboard provides advanced AI capabilities for text generation, summarization, and classification. Its flexible configurations make it a powerful tool for integrating AI into your workflows.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
