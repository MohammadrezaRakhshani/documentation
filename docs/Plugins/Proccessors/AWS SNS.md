
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into Triggers, Processors, and Apps. This documentation provides an overview of the "AWS SNS" plugin, which is available in both the Triggers and Processors categories.

## AWS SNS Plugin
The "AWS SNS" (Amazon Simple Notification Service) plugin enables seamless integration with AWS SNS for publishing and subscribing to messages. This plugin provides two actions: **Publish** (Processor) and **Subscribe** (Trigger). Below are the configuration requirements for each action.

---

### **Action: Publish (Processor)**
Send messages to an AWS SNS topic.

#### **Configurations**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS SNS connection.
3. **Input Topic Arn** *(String)*: Specify the ARN (Amazon Resource Name) of the SNS topic to publish the message.

---

### **Action: Subscribe (Trigger)**
Subscribe to an AWS SNS topic and trigger workflows based on messages.

#### **Configurations**
1. **Label** *(String)*: A descriptive label to identify this action within your workflow.
2. **Select Connection** *(Dropdown)*: Choose or create an AWS SNS connection.
3. **Input Topic Arn** *(String)*: Specify the ARN of the SNS topic to subscribe to.
4. **Input Endpoint** *(String)*: Specify the endpoint to receive messages (e.g., URL, phone number, etc.).
5. **Select Protocol Type** *(Dropdown)*: Choose the protocol for message delivery (e.g., HTTP, HTTPS, SMS, etc.).

---

### **Configuration Table**

#### Publish Action
| Field            | Type      | Description                                        |
|------------------|-----------|----------------------------------------------------|
| Label            | String    | Descriptive label for identifying the action.      |
| Select Connection| Dropdown  | Select or create an AWS SNS connection.            |
| Input Topic Arn  | String    | Specify the ARN of the topic to publish the message.|

#### Subscribe Action
| Field             | Type      | Description                                       |
|-------------------|-----------|---------------------------------------------------|
| Label             | String    | Descriptive label for identifying the action.     |
| Select Connection | Dropdown  | Select or create an AWS SNS connection.           |
| Input Topic Arn   | String    | Specify the ARN of the topic to subscribe to.     |
| Input Endpoint    | String    | Specify the endpoint to receive messages.         |
| Select Protocol Type| Dropdown| Choose the protocol for message delivery.         |

---

### **Example Configuration**

#### Publish Action
| Field            | Value                           |
|------------------|---------------------------------|
| Label            | Notify Users                   |
| Select Connection| AWS_Connection_1               |
| Input Topic Arn  | arn:aws:sns:us-east-1:123456789:myTopic |

#### Subscribe Action
| Field             | Value                           |
|-------------------|---------------------------------|
| Label             | Monitor Alerts                 |
| Select Connection | AWS_Connection_2               |
| Input Topic Arn   | arn:aws:sns:us-east-1:123456789:alertTopic |
| Input Endpoint    | https://myendpoint.example.com |
| Select Protocol Type| HTTPS                         |

---

### **How It Works**
1. **Publish**:
   - Use the "Publish" action to send messages to a specified SNS topic.
   - Configure the label, connection, and topic ARN for targeted message delivery.

2. **Subscribe**:
   - Use the "Subscribe" action to listen for messages on an SNS topic and trigger workflows.
   - Specify the endpoint and protocol type to ensure proper message handling.

---

### **Conclusion**
The AWS SNS plugin in the WeHub Dashboard streamlines message publishing and subscription with Amazon SNS. Its flexible configuration options allow seamless integration into workflows for real-time notifications and data processing.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
