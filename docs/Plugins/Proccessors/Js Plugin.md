

## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "JS" plugin, which falls under the Processors category.

## JS Plugin
The "JS" plugin is used to run JavaScript code within your workflow. This plugin provides one action: RUN SCRIPT. Each action has specific configuration requirements.

### Actions

#### 1. RUN SCRIPT
Execute a JavaScript script.

**Configurations:**
1. **Script**: Input the JavaScript code to be executed.
2. **Parameters**:
   - **Input Name**: Name of the input parameter.
   - **Select input Type**: Type of the input parameter.
   - **Select output Type**: Type of the output parameter.

**Inputs Section:**
1. **Manual** (optional): Toggle button to manually add inputs.
   - **Name**: Input the name.
   - **Type**: Select the type.
   - **Schema**: Select the schema.
2. **Truncate Fields** (optional): Toggle button to truncate fields.
   - **Truncate Level**: Input the truncate level if truncation is enabled.

**NOTE**: In the script, you can access your inputs by using the "input" keyword. For example, to access an input field named "name", use "input.name".

### Example Configuration Tables

#### RUN SCRIPT Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Script            | console.log(input.name);                               |
| Parameters        |                                                        |
| - Input Name      | name                                                   |
| - Input Type      | STRING                                                 |
| - Output Type     | STRING                                                 |
| Inputs Section    | Manual: Off, Truncate Fields: Off                      |

#### Inputs Section (Manual Enabled)
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Name              | Input Name                                             |
| Type              | Input Type                                             |
| Schema            | Input Schema                                           |
| Truncate Fields   | Truncate Level                                         |

### Example Usage
Let's consider a scenario where you want to configure the RUN SCRIPT action to execute a script that logs an input name.

#### Configuration Input:
1. **Script**: console.log(input.name);
2. **Parameters**:
   - **Input Name**: name
   - **Select input Type**: STRING
   - **Select output Type**: STRING
3. **Inputs Section**:
   - **Manual**: Off
   - **Truncate Fields**: Off

### Conclusion
The JS plugin in the WeHub Dashboard is a versatile tool for running JavaScript code within your workflows. By configuring the script, parameters, and optional inputs section, you can efficiently execute JavaScript code in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
