
# Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Mark Error" plugin, which falls under the Processors category.

# Mark Error Plugin
The "Mark Error" plugin is used to flag data or steps in your workflow that encounter issues or require attention. This can be particularly useful for debugging and handling exceptions within your workflows.

## Action
The "Mark Error" plugin has one primary action: Mark. This action is used to label and annotate errors within the workflow.

## Configuration
When configuring the "Mark Error" plugin, you need to provide the following inputs:

![Screenshot 2024-05-23 at 16.23.41.png](../../../static/img/Mark%20Error.png)

### Label
A descriptive label to identify this error marker within your workflow.
### Message
A custom message that describes the error or provides additional context.

## Configuration Steps
### Label
Provide a meaningful label for this action. For example, "Invalid Data Error".
### Message
Input a detailed message that explains the nature of the error. This message can include information about what went wrong or steps to resolve the issue.

## Example Configuration
### Configuration Fields:
- Label: Invalid Data Error
- Message: "The input data is invalid due to missing required fields."

## Example Usage
Let's consider a scenario where you are processing data and want to flag any records that have missing required fields.

### Configuration Input:
- Label: Invalid Data Error
- Message: "The input data is invalid due to missing required fields."

In your workflow, you can insert the "Mark Error" plugin at the point where you check for required fields. If a record is found to be missing required fields, the "Mark" action will be triggered, labeling this step with the provided error message.

# Workflow Integration
Here is how you might integrate the "Mark Error" plugin into a workflow:

### 1- Data Input:
The workflow starts by receiving data input.
### 2- Validation Check:
A processor checks if the data contains all required fields.
If the data is valid, the workflow proceeds to the next step.
If the data is invalid, the "Mark Error" plugin is triggered.
### 3- Mark Error:
The "Mark Error" plugin labels the step with the configured label and message.
### 4- Error Handling:
The workflow can then branch to an error handling process, such as notifying a user or logging the error for further investigation.

# Conclusion
The `Mark Error` plugin in the WeHub Dashboard is a valuable tool for handling exceptions and errors within your workflows. By configuring the label and message, you can provide clear and actionable information about any issues that arise, making it easier to debug and manage your workflows effectively.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.