
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Teams" plugin, which falls under the Apps category.

## Teams Plugin
The "Teams" plugin is used to send messages to Microsoft Teams channels through a configured webhook. This plugin provides one action: **Send Message**. Below are the configuration requirements for this action.

---

### **Action: Send Message**
Send a message to a Microsoft Teams channel using a webhook URL.

#### **Configurations**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Timeout** *(Integer)*: Set a timeout value (in seconds) for the message delivery.
3. **Webhook URL** *(String)*: Provide the Microsoft Teams webhook URL for sending the message.

---

### **Configuration Table**

| Field         | Type      | Description                                         |
|---------------|-----------|-----------------------------------------------------|
| Label         | String    | Descriptive label for identifying the action.       |
| Timeout       | Integer   | Timeout value in seconds for message delivery.      |
| Webhook URL   | String    | Microsoft Teams webhook URL to send the message.    |

---

### **Example Configuration**
Here’s an example configuration for sending a message:

| Field         | Value                                      |
|---------------|--------------------------------------------|
| Label         | Notify Team                               |
| Timeout       | 30                                         |
| Webhook URL   | https://example.webhook.office.com/hooks/123 |

---

### **How It Works**
1. **Set Up Webhook**: Ensure you have a valid webhook URL configured in Microsoft Teams.
2. **Configure Plugin**: Input the label, timeout, and webhook URL in the configuration settings.
3. **Send Messages**: The action will deliver a message to the specified Teams channel via the webhook.

---

### **Conclusion**
The Teams plugin in the WeHub Dashboard simplifies communication by automating message delivery to Microsoft Teams channels. With its easy configuration and seamless integration, it ensures your teams stay updated in real time.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
