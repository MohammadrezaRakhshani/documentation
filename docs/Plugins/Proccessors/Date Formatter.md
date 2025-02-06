
# Introduction

The "Date Formatter" plugin is designed to transform date formats according to specified input and output configurations. This plugin is essential for ensuring date consistency across different systems and locales.

# Installation

In you Workflow designer search **_Date Formatter_** when find the plugin Drag and Drop it to your workflow.

# Overview

The "Date Formatter" plugin has one primary action: Format Date. This action allows users to change the format of an input date based on specified configurations, including country, timezone, and date format.

# Usage Guide

## Step 1: Selecting Action:

- Open the workflow where you want to use the "Date Formatter" plugin.
- Add the "Date Formatter" plugin to your workflow.
- Select the "Format Date" action from the plugin's list of actions.

## Step 2: Configuration

Explain the configuration process in detail:

![Screenshot 2024-05-12 at 14.00.58.png](../../../static/img/Date%20Formatter.png)

### Label:
- **Description:** Enter a descriptive label for the plugin instance. This helps identify the specific use of the plugin within your workflow.
- **Example:** _"Format Date for Report Generation"_

### **Input Country and Timezone:**


|Input| Description | Example |
|--|--|--|
| Input Country | Choose the country associated with the input date format | United States |
| Input Timezone | Select the timezone for the input date | PST (Pacific Standard Time) |



 **Input Format:**

 **Description:** Select the format of the input date. Available options include:

- **ANSIC**
- **Unix Date**
- **RFC3339**
- **Example:** "RFC3339"

### **Output Country and Timezone:**


| Output| Description | Example |
|--|--|--|
| Output Country | Choose the country associated with the output date format | United Kingdom |
| Output Timezone | Select the timezone for the output date | GMT (Greenwich Mean Time) |



**Output Format:**

 **Description:** Select the desired format for the output date. Available options mirror those of the input format.

- **Example:** "ANSIC"

## **Step 3: Execution**
Once all configurations are set, execute the workflow to apply the date formatting.
The plugin will transform the input date according to the specified configurations and provide the formatted output.

## Examples: Formatting US Date to UK Date Format

 **Inputs**
| Inputs | Example |
|--|--|
| Input Label | US to UK Date Conversion |
| Input Country | United States |
| Input Timezone | EST (Eastern Standard Time) |
| Input Format |RFC3339|

**Outputs**

| Outputs | Example |
|--|--|
| Output Country | United Kingdom |
| Output Timezone | GMT |
| Output Format | ANSIC |


 **Result:** 

`The input date "2023-05-20T12:34:56Z" is transformed to "Sat May 20 12:34:56 2023 GMT."`
