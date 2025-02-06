

## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "HTTP Channel" plugin, which falls under the Triggers category.

## HTTP Channel Plugin
The "HTTP Channel" plugin is used to trigger workflows based on HTTP requests. This plugin provides one action: **Trigger**. Below are the configuration requirements for this action.

---

### **Action: Trigger**
Trigger workflows based on incoming HTTP requests.

#### **Configurations**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Input Header** *(String)*: Add headers for the HTTP request. Users can click the **+** button to add multiple headers.
3. **Input Static Response** *(String)*: Provide a static response for the HTTP trigger.

#### **Additional Configurations (If Source Queue is Enabled)**
1. **Queue Buffer Size** *(Integer)*: Set the buffer size for the source queue.
2. **Receive Timeout** *(Integer)*: Configure the timeout (in seconds) for receiving messages from the queue.
3. **Maximum Processing Threads** *(Integer)*: Specify the maximum number of threads for processing messages.

---

### **Configuration Table**

| Field                       | Type      | Description                                                   |
|-----------------------------|-----------|---------------------------------------------------------------|
| Label                       | String    | Descriptive label for identifying the trigger action.         |
| Input Header                | String    | Add HTTP headers (supports multiple headers).                 |
| Input Static Response       | String    | Define a static response for the HTTP trigger.                |
| Queue Buffer Size (Optional)| Integer   | Buffer size for the source queue.                             |
| Receive Timeout (Optional)  | Integer   | Timeout value (in seconds) for receiving messages.            |
| Maximum Processing Threads  | Integer   | Maximum number of threads for processing queue messages.      |

---

### **Example Configuration**
Here’s an example configuration for the Trigger action:

| Field                       | Value                         |
|-----------------------------|-------------------------------|
| Label                       | HTTP Request Trigger          |
| Input Header                | Authorization: Bearer Token   |
| Input Static Response       | \{"status": "OK"}             |
| Queue Buffer Size (Optional)| 100                           |
| Receive Timeout (Optional)  | 30                            |
| Maximum Processing Threads  | 5                             |

---

### **How It Works**
1. **Add a Trigger**: Use the "HTTP Channel" plugin as the trigger for your workflow.
2. **Configure the Headers**: Specify any necessary headers for the incoming HTTP request.
3. **Static Response**: Optionally define a static response that the trigger will return.
4. **Source Queue**: If enabled, configure the buffer size, timeout, and processing threads to handle queued requests efficiently.

---

### **Conclusion**
The HTTP Channel plugin in the WeHub Dashboard allows you to seamlessly trigger workflows based on HTTP requests, with flexible options for headers, static responses, and queue configurations. This makes it ideal for integrating external systems and managing request flows effectively.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
