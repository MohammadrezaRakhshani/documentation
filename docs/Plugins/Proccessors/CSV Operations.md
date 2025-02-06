
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "CSV Operations" plugin, which falls under the Processors category.

## CSV Operations Plugin
The "CSV Operations" plugin is used to handle CSV data within your workflow. This plugin provides two actions: PARSE and PRODUCE. Each action has specific configuration requirements.

### Actions

#### 1. PARSE
Parse a CSV file and extract its details.

#### Configuration for PARSE

![Screenshot 2024-05-28 at 12.53.35.png](../../../static/img/CSV%20Operations-1.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Delimiter**: Input the delimiter used in the CSV file.
3. **Schema**: Select the schema.
4. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

### Example Configuration for PARSE
#### Configuration Fields:
- **Label**: Parse CSV Data
- **Delimiter**: ,
- **Schema**: CSVSchema
- **Truncate Fields**:
   - **Truncate Level**: 100

### Example Usage for PARSE
Let's consider a scenario where you want to configure the PARSE action to parse a CSV file with a specific delimiter and schema, and optionally truncate fields.

#### Configuration Input:
1. **Label**: Parse CSV Data
2. **Delimiter**: ,
3. **Schema**: CSVSchema
4. **Truncate Fields**:
   - **Truncate Level**: 100

#### 2. PRODUCE
Produce a CSV file from the given input.

#### Configuration for PRODUCE

![Screenshot 2024-05-28 at 12.54.01.png](../../../static/img/CSV%20Operations-2.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

### Example Configuration for PRODUCE
#### Configuration Fields:
- **Label**: Produce CSV Data
- **Schema**: CSVSchema
- **Truncate Fields**:
   - **Truncate Level**: 100

### Example Usage for PRODUCE
Let's consider a scenario where you want to configure the PRODUCE action to generate a CSV file with a specific schema, and optionally truncate fields.

#### Configuration Input:
1. **Label**: Produce CSV Data
2. **Schema**: CSVSchema
3. **Truncate Fields**:
   - **Truncate Level**: 100

### Conclusion
The CSV Operations plugin in the WeHub Dashboard is a versatile tool for managing CSV data within your workflows. By configuring the label, delimiter, schema, and truncate fields options, you can efficiently handle CSV parsing and production in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
