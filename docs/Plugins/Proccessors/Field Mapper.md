
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Field Mapper" plugin, which falls under the Processors category.

## Field Mapper Plugin
The "Field Mapper" plugin is used to map fields from one structure to another within your workflow. This plugin provides flexible configuration options for transforming data fields.

### Action

#### Field Mapper
Map fields from one structure to another.

### Configuration
When configuring the Field Mapper action, you need to provide the following inputs:

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Mapper**: Define the field mappings. You can add multiple mappers as needed. Each mapper requires the following configurations:
   - **Input Type**: Select the input type for the field (Types are: String, Integer, Float, Boolean).
   - **Input Name**: Input the name of the field to be mapped.
   - **Output Type**: Select the output type for the field (Types are: String, Integer, Float, Boolean).
   - **Output Name**: Input the name of the target field.

To add another field mapping, click on the "Add" button and provide the additional mappings.

#### Configuration Steps

![Screenshot 2024-05-28 at 12.33.14.png](../../../static/img/Field%20Mapper.png)

1. **Label**: Provide a meaningful label for this action. For example, "Field Mapping for Order Data".
2. **Mapper**:
   - **Input Type**: Select the input type from String, Integer, Float, Boolean.
   - **Input Name**: Input the name of the field to be mapped.
   - **Output Type**: Select the output type from String, Integer, Float, Boolean.
   - **Output Name**: Input the name of the target field.
   - Click on the "Add" button to add more mappings as needed.

### Example Configuration
#### Configuration Fields:
- **Label**: Field Mapping for Order Data
   - **Input Type**: String
   - **Input Name**: customerName
   - **Output Type**: String
   - **Output Name**: clientName


### Example Usage
Let's consider a scenario where you want to configure the Field Mapper action to map fields from an order data structure to a target structure with different field names and types.

#### Configuration Input:
1. **Label**: Field Mapping for Order Data
2. **Mapper #1**:
   - **Input Type**: String
   - **Input Name**: customerName
   - **Output Type**: String
   - **Output Name**: clientName


### Conclusion
The Field Mapper plugin in the WeHub Dashboard is a versatile tool for mapping fields within your workflows. By configuring the label and field mappings, you can efficiently transform data structures in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
