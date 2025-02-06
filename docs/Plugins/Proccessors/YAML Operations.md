
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "YAML Operations" plugin, which falls under the Processors category.

## YAML Operations Plugin
The "YAML Operations" plugin is used to work with YAML (YAML Ain't Markup Language) data within your workflow. This plugin provides two actions: Parse YAML and Produce YAML. Each action has specific configuration requirements.

### Actions

#### 1. Parse YAML
Get a YAML as input and extract its details as output.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Select Schema**: Choose the schema for parsing the YAML input.
3. **Truncate Fields** (optional): Toggle button to enable field truncation.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

#### 2. Produce YAML
Generate a YAML file from the provided input data.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Select Schema**: Choose the schema for generating the YAML output.
3. **Truncate Fields** (optional): Toggle button to enable field truncation.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

### Example Configuration Tables

#### Parse YAML Action
| Field                | Description                                            |
|----------------------|--------------------------------------------------------|
| Label                | Parse YAML                                             |
| Select Schema        | Choose the schema for parsing the YAML input           |
| Truncate Fields      | Optional: Enable field truncation                      |
| Truncate Level       | Optional: Input the truncate level if truncation is enabled|

#### Produce YAML Action
| Field                | Description                                            |
|----------------------|--------------------------------------------------------|
| Label                | Produce YAML                                           |
| Select Schema        | Choose the schema for generating the YAML output       |
| Truncate Fields      | Optional: Enable field truncation                      |
| Truncate Level       | Optional: Input the truncate level if truncation is enabled|

### Conclusion
The YAML Operations plugin in the WeHub Dashboard allows you to parse and generate YAML data with ease. By configuring the label, schema, and optional truncation fields, you can efficiently manage YAML data within your workflows. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
