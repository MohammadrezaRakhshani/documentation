
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Rule Engine" plugin, which falls under the Processors category.

## Rule Engine Plugin
The "Rule Engine" plugin is used to apply rules to your data within your workflow. This plugin provides flexible configuration options for defining and applying rules.

### Action

#### Rule Engine
Apply a rule to your data.

### Configuration
When configuring the Rule Engine action, you need to provide the following inputs:

![Screenshot 2024-05-28 at 18.39.21.png](../../../static/img/Rule%20Engine.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Rule**: Input the rule to be applied.
3. **Input**: Configure the input schema and truncation settings.
   - **Using Schema**: Toggle button to indicate if a schema is used.
   - **Schema**: Select the input schema.
   - **Truncate Field** (optional): Toggle button to truncate fields.
   - **Truncate Level**: If "Truncate Field" is turned on, input the truncate level.
4. **Output**: Configure the output schema and truncation settings.
   - **Using Schema**: Toggle button to indicate if a schema is used.
   - **Schema**: Select the output schema.
   - **Truncate Field** (optional): Toggle button to truncate fields.
   - **Truncate Level**: If "Truncate Field" is turned on, input the truncate level.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Apply Business Rules".
2. **Rule**: Input the rule to be applied.
3. **Input**:
   - **Using Schema**: Toggle on if using a schema.
   - **Schema**: Select the input schema.
   - **Truncate Field**: Toggle on if you want to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.
4. **Output**:
   - **Using Schema**: Toggle on if using a schema.
   - **Schema**: Select the output schema.
   - **Truncate Field**: Toggle on if you want to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

### Example Configuration
#### Configuration Fields:
- **Label**: Apply Business Rules
- **Rule**: if (input.value > 100) \{ output.value = 'High'; } else \{ output.value = 'Low'; }
- **Input**:
   - **Using Schema**: On
   - **Schema**: InputSchema
   - **Truncate Field**: On
   - **Truncate Level**: 50
- **Output**:
   - **Using Schema**: On
   - **Schema**: OutputSchema
   - **Truncate Field**: On
   - **Truncate Level**: 50

### Example Usage
Let's consider a scenario where you want to configure the Rule Engine action to apply a business rule to your data with specific input and output schemas, and optionally truncate fields.

#### Configuration Input:
1. **Label**: Apply Business Rules
2. **Rule**: if (input.value > 100) \{ output.value = 'High'; } else \{ output.value = 'Low'; }
3. **Input**:
   - **Using Schema**: Toggle on
   - **Schema**: InputSchema
   - **Truncate Field**: Toggle on
   - **Truncate Level**: 50
4. **Output**:
   - **Using Schema**: Toggle on
   - **Schema**: OutputSchema
   - **Truncate Field**: Toggle on
   - **Truncate Level**: 50

### Conclusion
The Rule Engine plugin in the WeHub Dashboard is a versatile tool for applying rules to your data within your workflows. By configuring the label, rule, input schema, output schema, and truncation settings, you can efficiently apply business rules in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
