
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Constant Value Generator" plugin, which falls under the Processors category.

## Constant Value Generator Plugin
The "Constant Value Generator" plugin is used to generate constant values for use in other plugins within your workflow. This plugin provides one action: Generate Constant Value.

### Action

#### Generate Constant Value
Generate constant values for use in other plugins.

### Configuration
When configuring the Generate Constant Value action, you need to provide the following inputs:

![Screenshot 2024-05-28 at 12.02.13.png](../../../static/img/Constant%20Value%20Generator.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Name**: Input the name of the constant value.
3. **Type**: Select the type of the constant value (Types are: GUID, STRING, INTEGER, FLOAT, BOOL, CURRENT_TIME).
4. **Value**: Input the value.

Additionally, there is an "Add" button. When the user clicks on this button, they need to add another set of configurations: Name, Type, and Value.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Generate Constant Values".
2. **Name**: Input the name of the constant value.
3. **Type**: Select the type from GUID, STRING, INTEGER, FLOAT, BOOL, CURRENT_TIME.
4. **Value**: Input the value.

To add another constant value, click on the "Add" button and provide the following configurations:
1. **Name**: Input the name of the additional constant value.
2. **Type**: Select the type from GUID, STRING, INTEGER, FLOAT, BOOL, CURRENT_TIME.
3. **Value**: Input the value.

### Example Configuration
#### Configuration Fields:
- **Label**: Generate Constant Values
- **Name**: Constant1
- **Type**: STRING
- **Value**: ExampleValue

To add another constant value:
- **Name**: Constant2
- **Type**: INTEGER
- **Value**: 123

### Example Usage
Let's consider a scenario where you want to configure the Generate Constant Value action to create constant values for use in other plugins.

#### Configuration Input:
1. **Label**: Generate Constant Values
2. **Name**: Constant1
3. **Type**: STRING
4. **Value**: ExampleValue

To add another constant value, click the "Add" button and input the following:
1. **Name**: Constant2
2. **Type**: INTEGER
3. **Value**: 123

### Conclusion
The Constant Value Generator plugin in the WeHub Dashboard is a versatile tool for generating constant values within your workflows. By configuring the label, name, type, and value, you can efficiently create constant values for use in other plugins. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.

