
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "JWT Operations" plugin, which falls under the Processors category.

## JWT Operations Plugin
The "JWT Operations" plugin is used to handle JSON Web Tokens (JWT) within your workflow. This plugin provides one action: Create JWT Parser.

### Action

#### Create JWT Parser
Create a parser for JSON Web Tokens (JWT).

### Configuration
When configuring the Create JWT Parser action, you need to provide the following inputs:

![Screenshot 2024-05-28 at 12.44.00.png](../../../static/img/JWT%20Operations.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Truncate Fields" toggle button is turned on, provide the following configuration:
1. **Truncate Level**: Input the truncate level.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "JWT Parser for Auth Tokens".
2. **Schema**: Select the schema.
3. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level.

### Example Configuration
#### Configuration Fields:
- **Label**: JWT Parser for Auth Tokens
- **Schema**: AuthSchema
- **Truncate Fields**:
   - **Truncate Level**: 50

### Example Usage
Let's consider a scenario where you want to configure the Create JWT Parser action to parse JWTs with a specific schema, and optionally truncate fields.

#### Configuration Input:
1. **Label**: JWT Parser for Auth Tokens
2. **Schema**: AuthSchema
3. **Truncate Fields**:
   - **Truncate Level**: 50

### Conclusion
The JWT Operations plugin in the WeHub Dashboard is a versatile tool for managing JSON Web Tokens within your workflows. By configuring the label, schema, and truncate fields options, you can efficiently handle JWT parsing in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
