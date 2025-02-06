

## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Type Converter" plugin, which falls under the Processors category.

## Type Converter Plugin
The "Type Converter" plugin is used to convert the input type to the desired output type within your workflow. This plugin provides one action: Type Converter. Each action has specific configuration requirements.

### Actions

#### 1. Type Converter
Convert input type to the desired output type.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Parameters**:
   - **Input Name**: Name of the input parameter.
   - **Select input Type**: Type of the input parameter.
   - **Select output Type**: Type of the output parameter.

### Example Configuration Tables

#### Type Converter Action
| Field             | Description                                            |
|-------------------|--------------------------------------------------------|
| Label             | Convert Type                                           |
| Parameters        |                                                        |
| - Input Name      | age                                                    |
| - Input Type      | STRING                                                 |
| - Output Type     | INTEGER                                                |

### Example Usage
Let's consider a scenario where you want to configure the Type Converter action to convert a string input to an integer output.

#### Configuration Input:
1. **Label**: Convert Type
2. **Parameters**:
   - **Input Name**: age
   - **Select input Type**: STRING
   - **Select output Type**: INTEGER

### Conclusion
The Type Converter plugin in the WeHub Dashboard is a versatile tool for converting input types to desired output types within your workflows. By configuring the label and parameters, you can efficiently convert data types in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
