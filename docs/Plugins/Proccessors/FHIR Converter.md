
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "FHIR Converter" plugin, which falls under the Processors category.

## FHIR Converter Plugin
The "FHIR Converter" plugin is used to convert various healthcare data formats into FHIR (Fast Healthcare Interoperability Resources) format within your workflow. This plugin provides three actions: HL7 v2 to FHIR, FHIR STU3 to R4, and CCDA to FHIR. Each action has specific configuration requirements.

### Actions

#### 1. HL7 v2 to FHIR
Convert HL7 v2 messages to FHIR format.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Select Root Template**: Choose the root template for the conversion.

#### 2. FHIR STU3 to R4
Convert FHIR STU3 format to FHIR R4 format.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Select Root Template**: Choose the root template for the conversion.

#### 3. CCDA to FHIR
Convert CCDA (Consolidated Clinical Document Architecture) to FHIR format.

**Configurations:**
1. **Label**: A descriptive label to identify this action within your workflow.
2. **Select Root Template**: Choose the root template for the conversion.

### Example Configuration Tables

#### HL7 v2 to FHIR Action
| Field                | Description                                            |
|----------------------|--------------------------------------------------------|
| Label                | Convert HL7 v2 to FHIR                                 |
| Select Root Template | Choose the root template for conversion                |

#### FHIR STU3 to R4 Action
| Field                | Description                                            |
|----------------------|--------------------------------------------------------|
| Label                | Convert FHIR STU3 to FHIR R4                           |
| Select Root Template | Choose the root template for conversion                |

#### CCDA to FHIR Action
| Field                | Description                                            |
|----------------------|--------------------------------------------------------|
| Label                | Convert CCDA to FHIR                                   |
| Select Root Template | Choose the root template for conversion                |

### Conclusion
The FHIR Converter plugin in the WeHub Dashboard is a powerful tool for converting healthcare data formats into FHIR. By configuring the label and selecting the appropriate root template, you can easily perform conversions across various healthcare data standards.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
