
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Redis Cache" plugin, which falls under the Processors category.

## Redis Cache Plugin
The "Redis Cache" plugin is used to interact with Redis cache within your workflow. This plugin provides three actions: add key, delete key, and get key. Each action has the same configuration requirements.

### Actions

#### 1. add key
Add a key to the Redis cache.

#### 2. delete key
Delete a key from the Redis cache.

#### 3. get key
Get the value of a key from the Redis cache.

### Configuration
When configuring any of the Redis Cache actions, you need to provide the following inputs:

![Screenshot 2024-05-28 at 12.48.10.png](../../../static/img/Redis%20Cache.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your Redis server or create a new connection.

#### Configuration Steps
1. **Label**: Provide a meaningful label for this action. For example, "Add Key to Redis Cache".
2. **Connection**: 
   - Select an existing Redis connection from the dropdown menu.
   - If no connection exists, click on "Create new connection" and follow the prompts to establish a new connection.

### Example Configuration
#### Configuration Fields:
- **Label**: Add Key to Redis Cache
- **Connection**: RedisConnection1

### Example Usage
Let's consider a scenario where you want to configure the add key action to add a key to the Redis cache with a specific connection.

#### Configuration Input:
1. **Label**: Add Key to Redis Cache
2. **Connection**: Select your authorized Redis connection.

### Conclusion
The Redis Cache plugin in the WeHub Dashboard is a versatile tool for managing keys within the Redis cache in your workflows. By configuring the label and connection, you can efficiently handle key additions, deletions, and retrievals in various scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
