
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "ESR Parser" plugin, which falls under the Apps category.

## ESR Parser Plugin
The "ESR Parser" plugin is used to parse ESR files within your workflow. This plugin provides two actions: Generic Outbound Retrofit Interface and Generic Outbound Rostering Interface. Each action has specific configuration requirements.

### Actions

#### a. Generic Outbound Retrofit Interface
This action parses 'Retrofit Interface' ESR files.

#### Configuration

![Screenshot 2024-05-27 at 19.06.41.png](../../../static/img/ESR%20parser-1.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Separator**: Input the separator used in the file.
3. **Schema**: Select the schema.
4. **Publish output on Message Broker** (optional): Toggle button to publish output on a message broker.
5. **Truncate Fields** (optional): Toggle button to truncate fields.

If the "Publish output on Message Broker" toggle button is turned on, you do not need to configure the schema, but you need to select:
1. **Broker Type**: Select the broker type.

If the "Truncate Fields" toggle button is turned on, provide the following configurations:
1. **Truncate Level**: Input the truncate level.
2. **Schema**: Select the schema.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Parse Retrofit Interface".
2. **Separator**: Input the separator used in the file.
3. **Schema**: Select the schema.
4. **Publish output on Message Broker** (optional):
   - **Broker Type**: Select the broker type (if applicable).
5. **Truncate Fields** (optional):
   - **Truncate Level**: Input the truncate level.
   - **Schema**: Select the schema.

### Example Configuration
#### Configuration Fields:
- **Label**: Parse Retrofit Interface
- **Separator**: ,
- **Schema**: RetrofitSchema
- **Publish output on Message Broker**:
   - **Broker Type**: Kafka
- **Truncate Fields**:
   - **Truncate Level**: 100
   - **Schema**: RetrofitSchema

### Example Usage
Let's consider a scenario where you want to configure the Generic Outbound Retrofit Interface action to parse a retrofit interface ESR file with a specific separator and schema, and optionally publish the output on a message broker.

#### Configuration Input:
1. **Label**: Parse Retrofit Interface
2. **Separator**: ,
3. **Schema**: RetrofitSchema
4. **Publish output on Message Broker**:
   - **Broker Type**: Kafka
5. **Truncate Fields**:
   - **Truncate Level**: 100
   - **Schema**: RetrofitSchema

### b. Generic Outbound Rostering Interface
This action parses 'Rostering Interface' ESR files.

#### Configuration

![Screenshot 2024-05-27 at 19.15.38.png](../../../static/img/ESR%20Parser-2.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Separator**: Input the separator used in the file.
3. **Schema**: Select the schema.
4. **Publish output on Message Broker** (optional): Toggle button to publish output on a message broker.
5. **Compress** (optional): Toggle button to compress fields.

If the "Publish output on Message Broker" toggle button is turned on, you need to select:
1. **Broker Type**: Select the broker type.

If the "Compress" toggle button is turned on, provide the following configurations:
1. **Truncate Level**: Input the truncate level.
2. **Schema**: Select the schema.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Parse Rostering Interface".
2. **Separator**: Input the separator used in the file.
3. **Schema**: Select the schema.
4. **Publish output on Message Broker** (optional):
   - **Broker Type**: Select the broker type (if applicable).
5. **Compress** (optional):
   - **Truncate Level**: Input the truncate level.
   - **Schema**: Select the schema.

### Example Configuration
#### Configuration Fields:
- **Label**: Parse Rostering Interface
- **Separator**: ;
- **Schema**: RosteringSchema
- **Publish output on Message Broker**:
   - **Broker Type**: RabbitMQ
- **Compress**:
   - **Truncate Level**: 200
   - **Schema**: RosteringSchema

### Example Usage
Let's consider a scenario where you want to configure the Generic Outbound Rostering Interface action to parse a rostering interface ESR file with a specific separator and schema, and optionally publish the output on a message broker.

#### Configuration Input:
1. **Label**: Parse Rostering Interface
2. **Separator**: ;
3. **Schema**: RosteringSchema
4. **Publish output on Message Broker**:
   - **Broker Type**: RabbitMQ
5. **Compress**:
   - **Truncate Level**: 200
   - **Schema**: RosteringSchema

### Conclusion
The ESR Parser plugin in the WeHub Dashboard is a versatile tool for parsing ESR files within your workflows. By configuring the label, separator, schema, broker type, truncate level, and compress options, you can efficiently handle ESR file parsing in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.

