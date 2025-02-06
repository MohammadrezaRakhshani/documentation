

## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Sub-Workflow Trigger" plugin, which falls under the Triggers category.

## Sub-Workflow Trigger Plugin
The "Sub-Workflow Trigger" plugin is used to handle sub-workflows within your main workflow. This plugin provides three actions: Trigger, Output, and Invoke. Each action has specific configuration requirements.

### Actions

#### 1. Trigger
The trigger for running sub-workflows.

#### Configuration
1. **Label**: A descriptive label to identify this action within your workflow.

If the "Using schema for outputs/inputs" toggle button is turned on, provide the following configuration:
1. **Schema**: Select the schema.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

If neither toggle button is selected and the "Add" button is clicked, provide the following configurations:
1. **Name**: Input the name.
2. **Path**: Input the path.
3. **Type**: Select the type (Types are `INT32`, `INT64`, `FLOAT32`, `DOUBLE`, `STRING`, `DATE`, `DATETIME`, `BOOLEAN`, `OBJECT`, `ARRAY`, `ANY`).

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Start Sub-Workflow".
2. **Using schema for outputs/inputs** (optional):
   - **Schema**: Select the schema.
3. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level.
4. **Add** (if neither toggle button is selected):
   - **Name**: Provide the name.
   - **Path**: Provide the path.
   - **Type**: Select the type from INT32, INT64, FLOAT32, DOUBLE, STRING, DATE, DATETIME, BOOLEAN, OBJECT, ARRAY, ANY.

### Example Configuration
#### Configuration Fields:
- **Label**: Start Sub-Workflow
- **Using schema for outputs/inputs**:
   - **Schema**: MySchema
- **Truncate Fields**:
   - **Truncate Level**: 100
- **Add**:
   - **Name**: outputField
   - **Path**: /data/output
   - **Type**: STRING

### Example Usage
Let's consider a scenario where you want to configure the Trigger action to start a sub-workflow with specific outputs and inputs using a schema.

#### Configuration Input:
1. **Label**: Start Sub-Workflow
2. **Using schema for outputs/inputs**:
   - **Schema**: MySchema
3. **Truncate Fields**:
   - **Truncate Level**: 100
4. **Add**:
   - **Name**: outputField
   - **Path**: /data/output
   - **Type**: STRING

### 2. Output
Save output of workflow in it.

#### Configuration
The configuration for this action is exactly like the Trigger action.

1. **Label**: A descriptive label to identify this action within your workflow.

If the "Using schema for outputs/inputs" toggle button is turned on, provide the following configuration:
1. **Schema**: Select the schema.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

If neither toggle button is selected and the "Add" button is clicked, provide the following configurations:
1. **Name**: Input the name.
2. **Path**: Input the path.
3. **Type**: Select the type (Types are INT32, INT64, FLOAT32, DOUBLE, STRING, DATE, DATETIME, BOOLEAN, OBJECT, ARRAY, ANY).

### Example Configuration
#### Configuration Fields:
- **Label**: Save Sub-Workflow Output
- **Using schema for outputs/inputs**:
   - **Schema**: MySchema
- **Truncate Fields**:
   - **Truncate Level**: 100
- **Add**:
   - **Name**: resultField
   - **Path**: /data/result
   - **Type**: STRING

### Example Usage
Let's consider a scenario where you want to configure the Output action to save the output of a sub-workflow with specific fields using a schema.

#### Configuration Input:
1. **Label**: Save Sub-Workflow Output
2. **Using schema for outputs/inputs**:
   - **Schema**: MySchema
3. **Truncate Fields**:
   - **Truncate Level**: 100
4. **Add**:
   - **Name**: resultField
   - **Path**: /data/result
   - **Type**: STRING

### 3. Invoke
Invoke sub-workflow in your main workflow.

#### Configuration
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Sub Workflow**: Select the sub-workflow to invoke.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Invoke Sub-Workflow".
2. **Sub Workflow**: Select the sub-workflow to invoke from the dropdown menu.

### Example Configuration
#### Configuration Fields:
- **Label**: Invoke Sub-Workflow
- **Sub Workflow**: SubWorkflow1

### Example Usage
Let's consider a scenario where you want to configure the Invoke action to call a sub-workflow within your main workflow.

#### Configuration Input:
1. **Label**: Invoke Sub-Workflow
2. **Sub Workflow**: SubWorkflow1

### Conclusion
The Sub-Workflow Trigger plugin in the WeHub Dashboard is a versatile tool for managing sub-workflows within your main workflows. By configuring the label, schema, truncate level, name, path, type, and sub-workflow, you can efficiently handle sub-workflow execution in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
