
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "ESR Producer" plugin, which falls under the Apps category.

## ESR Producer Plugin
The "ESR Producer" plugin is used to handle the production of employee-related data within your workflow. This plugin provides two actions: Produce Employee Attendance and Produce Flexible Worker (J_51401). Each action has specific configuration requirements.

### Actions

#### 1. Produce Employee Attendance
This action is used to produce employee attendance records.

#### Configuration

![Screenshot 2024-05-27 at 10.46.19.png](../../../static/img/ESR%20Producer-1.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Trust Identifier**: Input the trust identifier.
3. **Source System Code**: Input the source system code.
4. **Period Type**: Input the period type.
5. **Seed**: Input the seed value.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Produce Employee Attendance".
2. **Trust Identifier**: Input the trust identifier.
3. **Source System Code**: Input the source system code.
4. **Period Type**: Input the period type.
5. **Seed**: Input the seed value.

### Example Configuration
#### Configuration Fields:
- **Label**: Produce Employee Attendance
- **Trust Identifier**: Trust123
- **Source System Code**: SRC001
- **Period Type**: Monthly
- **Seed**: 12345

### Example Usage
Let's consider a scenario where you want to configure the Produce Employee Attendance action to generate attendance records for a specific trust.

#### Configuration Input:
1. **Label**: Produce Employee Attendance
2. **Trust Identifier**: Trust123
3. **Source System Code**: SRC001
4. **Period Type**: Monthly
5. **Seed**: 12345

### 2. Produce Flexible Worker (J_51401)
This action is used to produce records for flexible workers.

#### Configuration

![Screenshot 2024-05-27 at 10.45.50.png](../../../static/img/ESR%20Producer-2.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Trust Identifier**: Input the trust identifier.
3. **Seed**: Input the seed value.
4. **Vacancy Reference**: Input the vacancy reference.
5. **Supplier Reference**: Input the supplier reference.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Produce Flexible Worker (J_51401)".
2. **Trust Identifier**: Input the trust identifier.
3. **Seed**: Input the seed value.
4. **Vacancy Reference**: Input the vacancy reference.
5. **Supplier Reference**: Input the supplier reference.

### Example Configuration
#### Configuration Fields:
- **Label**: Produce Flexible Worker (J_51401)
- **Trust Identifier**: Trust123
- **Seed**: 12345
- **Vacancy Reference**: VAC001
- **Supplier Reference**: SUP001

### Example Usage
Let's consider a scenario where you want to configure the Produce Flexible Worker (J_51401) action to generate records for flexible workers for a specific trust.

#### Configuration Input:
1. **Label**: Produce Flexible Worker (J_51401)
2. **Trust Identifier**: Trust123
3. **Seed**: 12345
4. **Vacancy Reference**: VAC001
5. **Supplier Reference**: SUP001

### Conclusion
The ESR Producer plugin in the WeHub Dashboard is a versatile tool for managing employee-related data production within your workflows. By configuring the label, trust identifier, source system code, period type, seed, vacancy reference, and supplier reference, you can efficiently handle data production in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
