

## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Stage Object" plugin, which falls under the Processors category.

## Stage Object Plugin
The "Stage Object" plugin is used to create staged objects within your workflow. This plugin provides one action: Create Stage Object.

### Action

#### Create Stage Object
Create a staged object for use in the workflow.

### Configuration
When configuring the Create Stage Object action, you need to provide the following inputs:

![Screenshot 2024-05-28 at 12.05.56.png](../../../static/img/Stage%20Object.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Create Staged Order".
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level.

### Example Configuration
#### Configuration Fields:
- **Label**: Create Staged Order
- **Schema**: OrderSchema
- **Truncate Fields**:
   - **Truncate Level**: 100

### Example Usage
Let's consider a scenario where you want to configure the Create Stage Object action to create a staged order object with a specific schema, and optionally truncate fields.

#### Configuration Input:
1. **Label**: Create Staged Order
2. **Schema**: OrderSchema
3. **Truncate Fields**:
   - **Truncate Level**: 100

### Conclusion
The Stage Object plugin in the WeHub Dashboard is a versatile tool for creating staged objects within your workflows. By configuring the label, schema, and truncate fields options, you can efficiently handle the creation of staged objects in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
