
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "HL7 Operations" plugin, which falls under the Processors category.

## HL7 Operations Plugin
The "HL7 Operations" plugin is used to handle HL7 messages within your workflow. This plugin provides two actions: Parse an HL7 message and Produce an HL7 message. Each action has specific configuration requirements.

### Actions

#### 1. Parse an HL7 message
Take an HL7 message and return the transformed data based on the schema.

#### 2. Produce an HL7 message
Take transformed data from any format and produce the HL7 message based on the schema.

### Configuration
When configuring either of the HL7 actions, you need to provide the following inputs:

![Screenshot 2024-05-29 at 15.43.00.png](../../../static/img/HL7%20Operations.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Version**: Select the HL7 version (Versions are: V210, V220, V230, V231, V240, V250, V251, V260, V270, V271, V280).
3. **Trigger**: Select the HL7 trigger (Triggers are: ADT-A01 to ADT-A24 and BAR-P01, BAR-P02, etc.).

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Parse HL7 Admission Message".
2. **Version**: Select the appropriate HL7 version from the dropdown menu.
3. **Trigger**: Select the appropriate HL7 trigger from the dropdown menu.

### Example Configuration
#### Configuration Fields:
- **Label**: Parse HL7 Admission Message
- **Version**: V250
- **Trigger**: ADT-A01

### Example Usage
Let's consider a scenario where you want to configure the "Parse an HL7 message" action to parse an HL7 admission message with a specific version and trigger.

#### Configuration Input:
1. **Label**: Parse HL7 Admission Message
2. **Version**: V250
3. **Trigger**: ADT-A01

### Conclusion
The HL7 Operations plugin in the WeHub Dashboard is a versatile tool for managing HL7 messages within your workflows. By configuring the label, version, and trigger, you can efficiently handle the parsing and production of HL7 messages in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
