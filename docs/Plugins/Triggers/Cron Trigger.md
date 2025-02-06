
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Cron Trigger" plugin, which falls under the Triggers category.

## Cron Trigger Plugin
The "Cron Trigger" plugin is used to initiate workflows based on a specified schedule using cron expressions. This can be useful for automating tasks that need to run at regular intervals, such as daily reports, periodic data syncs, or routine maintenance tasks.

### Action
The "Cron Trigger" plugin has one primary action: **Start a Cron job**. This action schedules the workflow to start based on the defined cron expression.

### Configuration
When configuring the "Start a Cron job" action, you need to provide the following inputs:

![Screenshot 2024-05-23 at 19.22.54.png](../../../static/img/Cron%20Trigger.png)

1. **Label**: A descriptive label to identify this trigger within your workflow.
2. **Config**: The cron expression that defines the schedule for the trigger.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this trigger. For example, "Daily Report Generation".
2. **Config**: Input the cron expression that defines the schedule. Cron expressions consist of five fields representing minute, hour, day of the month, month, and day of the week.

### Cron Expression Syntax
The cron expression is a string consisting of five fields separated by spaces. Each field represents a specific time unit.

```
* * * * *
| | | | |
| | | | +----- Day of the week (0 - 7) (Sunday is both 0 and 7)
| | | +------- Month (1 - 12)
| | +--------- Day of the month (1 - 31)
| +----------- Hour (0 - 23)
+------------- Minute (0 - 59)
```

### Common Examples
- `0 0 * * *`: At midnight every day.
- `0 12 * * *`: At noon every day.
- `0 9 * * 1`: At 9:00 AM every Monday.
- `*/5 * * * *`: Every 5 minutes.

### Example Configuration
#### Configuration Fields:
- **Label**: Daily Report Generation
- **Config**: `0 0 * * *`

### Example Usage
Let's consider a scenario where you want to configure a Cron trigger to generate a daily report at midnight.

#### Configuration Input:
1. **Label**: Daily Report Generation
2. **Config**: `0 0 * * *`

In your workflow, you can insert the Cron trigger to initiate the workflow at the specified schedule.

### Workflow Integration
Here is how you might integrate the Cron trigger into a workflow:

1. **Cron Trigger**: The workflow starts with the Cron trigger that activates at the specified schedule (e.g., midnight every day).
2. **Data Processing**: The workflow proceeds to process data for the daily report.
3. **Report Generation**: The workflow generates the report and performs any necessary actions, such as saving the report or sending it via email.

### Conclusion
The Cron trigger in the WeHub Dashboard is a powerful tool for scheduling and automating workflows. By configuring the label and cron expression, you can define specific schedules to run your workflows at regular intervals. Ensure to test and validate your cron expressions to achieve the desired schedule behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
