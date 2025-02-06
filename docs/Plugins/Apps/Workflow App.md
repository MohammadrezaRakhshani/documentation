

## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Workflow App" plugin, which falls under the Apps category.

## Workflow App Plugin
The "Workflow App" plugin is used to invoke a workflow app created within the WeHub platform. This plugin provides one action: **Invoke**. Below are the configuration requirements for this action.

---

### **Action: Invoke**
Invoke a workflow app from within your workflow.

**Description**: This action allows you to call and execute a workflow app created through the "Create App" feature in the Workflow component.

#### **Configurations**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Workflow** *(Select Option)*: Choose the workflow app to invoke. This list updates dynamically whenever a workflow is converted into an app.

---

### **Configuration Table**

| Field            | Type          | Description                                             |
|------------------|---------------|---------------------------------------------------------|
| Label            | String        | Descriptive label for identifying the action.           |
| Select Workflow  | Select Option | Dropdown list of available workflow apps to invoke.     |

---

### **Example Configuration**
Here’s an example configuration for invoking a workflow app:

| Field            | Value                 |
|------------------|-----------------------|
| Label            | Trigger Email Workflow |
| Select Workflow  | Email_Notification_App |

---

### **How It Works**
1. **Create a Workflow App**: Use the "Create App" feature in the Workflow component to convert workflows into apps.
2. **Configure the Plugin**: Input the label and select the desired workflow app in the configuration settings.
3. **Invoke Workflow App**: This action triggers the selected workflow app during execution.

---

### **Conclusion**
The Workflow App plugin in the WeHub Dashboard simplifies the invocation of reusable workflow apps, enabling efficient modular workflows. With its easy-to-use configuration, it integrates seamlessly into your automation processes.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
