
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Key->Value Transformation" plugin, which falls under the Processors category.

## Key->Value Transformation Plugin
The "Key->Value Transformation" plugin is used to transform key-value pairs within your workflow. This plugin provides one action: key-value.

### Action

#### key-value
Transform key-value pairs for use in the workflow.

### Configuration
When configuring the key-value action, you need to provide the following inputs:

![Screenshot 2024-05-28 at 12.09.57.png](../../../static/img/Key%20Value%20Transformation.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Data Type**: Select the data type (Types are: GUID, STRING, INTEGER, FLOAT, BOOL).
3. **Value**: Input the value.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Transform Key-Value Pair".
2. **Data Type**: Select the data type from GUID, STRING, INTEGER, FLOAT, BOOL.
3. **Value**: Input the value.

### Example Configuration
#### Configuration Fields:
- **Label**: Transform Key-Value Pair
- **Data Type**: STRING
- **Value**: ExampleValue

### Example Usage
Let's consider a scenario where you want to configure the key-value action to transform a key-value pair with a specific data type and value.

#### Configuration Input:
1. **Label**: Transform Key-Value Pair
2. **Data Type**: STRING
3. **Value**: ExampleValue

### Conclusion
The Key->Value Transformation plugin in the WeHub Dashboard is a versatile tool for transforming key-value pairs within your workflows. By configuring the label, data type, and value, you can efficiently handle key-value transformations in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
