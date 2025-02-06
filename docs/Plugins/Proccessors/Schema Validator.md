
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Schema Validator" plugin, which falls under the Processors category.

## Schema Validator Plugin
The "Schema Validator" plugin is used to validate data against a schema within your workflow. This plugin provides one action: Validate Schema.

### Action

#### Validate Schema
Validate data against a specified schema.

### Configuration
When configuring the Validate Schema action, you need to provide the following inputs:

![Screenshot 2024-05-29 at 17.04.07.png](../../../static/img/Schema%20Validator.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Schema**: Select the schema to validate against.
3. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Validate Order Schema".
2. **Schema**: Select the schema to validate against.
3. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level if truncation is enabled.

### Example Configuration
#### Configuration Fields:
- **Label**: Validate Order Schema
- **Schema**: OrderSchema
- **Truncate Fields**:
   - **Truncate Level**: 100

### Example Usage
Let's consider a scenario where you want to configure the Validate Schema action to validate data against an order schema and optionally truncate fields.

#### Configuration Input:
1. **Label**: Validate Order Schema
2. **Schema**: OrderSchema
3. **Truncate Fields**:
   - **Truncate Level**: 100

### Conclusion
The Schema Validator plugin in the WeHub Dashboard is a versatile tool for validating data against a specified schema within your workflows. By configuring the label, schema, and truncate fields options, you can efficiently validate data in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
