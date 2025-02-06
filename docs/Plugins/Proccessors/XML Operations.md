
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "XML Operation" plugin, which falls under the Processors category.

## XML Operation Plugin
The "XML Operation" plugin is used to handle XML data within your workflow. This plugin provides two actions: Produce and Parse. Each action has the same configuration requirements.

### Actions

#### 1. Produce
Produce XML from the given input.

#### 2. Parse
Parse XML and extract its details in the output.

### Configuration
When configuring either of the XML actions, you need to provide the following inputs:

![Screenshot 2024-05-28 at 12.40.23.png](../../../static/img/XML%20Operations.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Indent**: Input the indent level for formatting the XML.
3. **Schema**: Select the schema.
4. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Produce XML Data".
2. **Indent**: Input the indent level for formatting the XML.
3. **Schema**: Select the schema.
4. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level.

### Example Configuration
#### Configuration Fields:
- **Label**: Produce XML Data
- **Indent**: 2
- **Schema**: XMLSchema
- **Truncate Fields**:
   - **Truncate Level**: 100

### Example Usage
Let's consider a scenario where you want to configure the Produce action to generate XML with a specific indent level and schema, and optionally truncate fields.

#### Configuration Input:
1. **Label**: Produce XML Data
2. **Indent**: 2
3. **Schema**: XMLSchema
4. **Truncate Fields**:
   - **Truncate Level**: 100

### Conclusion
The XML Operation plugin in the WeHub Dashboard is a versatile tool for managing XML data within your workflows. By configuring the label, indent level, schema, and truncate fields options, you can efficiently handle XML production and parsing in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
