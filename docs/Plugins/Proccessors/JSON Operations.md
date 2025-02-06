
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "JSON Operation" plugin, which falls under the Processors category.

## JSON Operation Plugin
The "JSON Operation" plugin is used to handle JSON data within your workflow. This plugin provides two actions: Parse JSON and Produce JSON. Each action has the same configuration requirements.

### Actions

#### 1. Parse JSON
Get a JSON as input and get its details in the output.

#### 2. Produce JSON
Produce a JSON from the given input.

### Configuration

![Screenshot 2024-05-28 at 11.34.31.png](../../../static/img/JSON%20Operations.png)

When configuring either of the JSON actions, you need to provide the following inputs:

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Parse JSON Data".
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level.

### Example Configuration
#### Configuration Fields:
- **Label**: Parse JSON Data
- **Schema**: JSONSchema
- **Truncate Fields**:
   - **Truncate Level**: 100

### Example Usage
Let's consider a scenario where you want to configure the Parse JSON action to parse a JSON input with a specific schema, and optionally truncate fields.

#### Configuration Input:
1. **Label**: Parse JSON Data
2. **Schema**: JSONSchema
3. **Truncate Fields**:
   - **Truncate Level**: 100

### Conclusion
The JSON Operation plugin in the WeHub Dashboard is a versatile tool for managing JSON data within your workflows. By configuring the label, schema, and truncate fields options, you can efficiently handle JSON parsing and production in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
