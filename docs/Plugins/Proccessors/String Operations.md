
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "String Operations" plugin, which falls under the Processors category.

## String Operations Plugin
The "String Operations" plugin is used to handle various string manipulations within your workflow. This plugin provides four actions: Replace, Compress, Decompress, and Convert. Each action has specific configuration requirements.

### Actions

#### 1. Replace
Replace a token in a string with a specified value.

#### Configuration for Replace

![Screenshot 2024-05-28 at 16.23.40.png](../../../static/img/String%20Operations-1.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Config**: Input the configuration for the replacement.
3. **Token**: Input the token to be replaced. Users can add multiple tokens as needed.

#### Configuration Steps for Replace
1. **Label**: Provide a meaningful label for this action. For example, "Replace Token in String".
2. **Config**: Input the configuration details for the replacement.
3. **Token**: Input the token to be replaced. Click "Add" to add more tokens as needed.

### Example Configuration for Replace
#### Configuration Fields:
- **Label**: Replace Token in String
- **Config**: \{"replace": "newValue"}
- **Token**: oldValue

### Example Usage for Replace
Let's consider a scenario where you want to configure the Replace action to replace a token in a string with a new value.

#### Configuration Input:
1. **Label**: Replace Token in String
2. **Config**: \{"replace": "newValue"}
3. **Token**: oldValue

#### 2. Compress
Compress a string.

#### Configuration for Compress

![Screenshot 2024-05-28 at 16.24.07.png](../../../static/img/String%20Operations-2.png)

1. **Label**: A descriptive label to identify this action within your workflow.

#### Configuration Steps for Compress
1. **Label**: Provide a meaningful label for this action. For example, "Compress String".

### Example Configuration for Compress
#### Configuration Fields:
- **Label**: Compress String

### Example Usage for Compress
Let's consider a scenario where you want to configure the Compress action to compress a string.

#### Configuration Input:
1. **Label**: Compress String

#### 3. Decompress
Decompress a string.

#### Configuration for Decompress

![Screenshot 2024-05-28 at 16.24.07.png](../../../static/img/String%20Operations-3.png)

1. **Label**: A descriptive label to identify this action within your workflow.

#### Configuration Steps for Decompress
1. **Label**: Provide a meaningful label for this action. For example, "Decompress String".

### Example Configuration for Decompress
#### Configuration Fields:
- **Label**: Decompress String

### Example Usage for Decompress
Let's consider a scenario where you want to configure the Decompress action to decompress a string.

#### Configuration Input:
1. **Label**: Decompress String

#### 4. Convert
Convert a string to a specified type.

#### Configuration for Convert

![Screenshot 2024-05-28 at 16.25.26.png](../../../static/img/String%20Operations-4.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Inputs**: Users can add multiple inputs as needed by clicking on the "Add" button. Each input requires the following configurations:
   - **Name**: Input the name.
   - **Type**: Select the type (Types are: INT32, INT64, FLOAT32, DOUBLE, STRING, BYTE, DATE, DATETIME, BOOLEAN, OBJECT, ARRAY, ANY).

#### Configuration Steps for Convert
1. **Label**: Provide a meaningful label for this action. For example, "Convert String to Integer".
2. **Inputs**: Click on the "Add" button and provide the following configurations for each input:
   - **Name**: Input the name.
   - **Type**: Select the type from INT32, INT64, FLOAT32, DOUBLE, STRING, BYTE, DATE, DATETIME, BOOLEAN, OBJECT, ARRAY, ANY.

### Example Configuration for Convert
#### Configuration Fields:
- **Label**: Convert String to Integer
- **Input #1**:
   - **Name**: inputValue
   - **Type**: INT32

### Example Usage for Convert
Let's consider a scenario where you want to configure the Convert action to convert a string to an integer.

#### Configuration Input:

1. **Label**: Convert String to Integer
2. **Input #1**:
   - **Name**: inputValue
   - **Type**: INT32

### Conclusion
The String Operations plugin in the WeHub Dashboard is a versatile tool for managing various string manipulations within your workflows. By configuring the label, inputs, and other specific settings, you can efficiently handle string replacements, compressions, decompressions, and conversions in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
