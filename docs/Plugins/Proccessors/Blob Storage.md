
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "Blob Storage" plugin, which falls under the Processors category.

## Blob Storage Plugin
The "Blob Storage" plugin is used to manage files and objects in cloud storage within your workflow. This plugin provides six actions: Upload, Download, Delete, List, Copy, and Move. Each action has specific configuration requirements, including the type of each input.

### Actions

#### 1. Upload
Upload content to a specified blob container.

**Configurations:**
1. **Label** (String): A descriptive label to identify this action within your workflow.
2. **Content** (Bytes): The content to be uploaded in bytes.
3. **Container Name** (String): The name of the blob container.
4. **Blob Storage Connection**: Select an existing blob storage connection or create a new one.

#### 2. Download
Download content from a specified blob container.

**Configurations:**
1. **Label** (String): A descriptive label to identify this action within your workflow.
2. **Blob Storage Connection**: Select an existing blob storage connection or create a new one.
3. **Container Name** (String): The name of the blob container.

#### 3. Delete
Delete content from a specified blob container.

**Configurations:**
1. **Label** (String): A descriptive label to identify this action within your workflow.
2. **Blob Storage Connection**: Select an existing blob storage connection or create a new one.
3. **Container Name** (String): The name of the blob container.

#### 4. List
List contents within a specified blob container path.

**Configurations:**
1. **Label** (String): A descriptive label to identify this action within your workflow.
2. **Path** (String): The path within the blob container to list contents.
3. **Container Name** (String): The name of the blob container.
4. **Blob Storage Connection**: Select an existing blob storage connection or create a new one.

#### 5. Copy
Copy content from one location to another within the blob container.

**Configurations:**
1. **Label** (String): A descriptive label to identify this action within your workflow.
2. **Source** (String): The source location within the blob container.
3. **Destination** (String): The destination location within the blob container.
4. **Container Name** (String): The name of the blob container.
5. **Blob Storage Connection**: Select an existing blob storage connection or create a new one.

#### 6. Move
Move content from one location to another within the blob container.

**Configurations:**
1. **Label** (String): A descriptive label to identify this action within your workflow.
2. **Source** (String): The source location within the blob container.
3. **Destination** (String): The destination location within the blob container.
4. **Container Name** (String): The name of the blob container.
5. **Blob Storage Connection**: Select an existing blob storage connection or create a new one.

### Example Configuration Tables

#### Upload Action
| Field               | Type   | Description                                            |
|---------------------|--------|--------------------------------------------------------|
| Label              | String | Upload Content                                         |
| Content            | Bytes  | Content to be uploaded in bytes                        |
| Container Name     | String | The name of the blob container                         |
| Blob Storage Connection | -  | Select or create a blob storage connection             |

#### Download Action
| Field               | Type   | Description                                            |
|---------------------|--------|--------------------------------------------------------|
| Label              | String | Download Content                                       |
| Container Name     | String | The name of the blob container                         |
| Blob Storage Connection | -  | Select or create a blob storage connection             |

#### Delete Action
| Field               | Type   | Description                                            |
|---------------------|--------|--------------------------------------------------------|
| Label              | String | Delete Content                                         |
| Container Name     | String | The name of the blob container                         |
| Blob Storage Connection | -  | Select or create a blob storage connection             |

#### List Action
| Field               | Type   | Description                                            |
|---------------------|--------|--------------------------------------------------------|
| Label              | String | List Contents                                          |
| Path               | String | The path within the blob container to list contents    |
| Container Name     | String | The name of the blob container                         |
| Blob Storage Connection | -  | Select or create a blob storage connection             |

#### Copy Action
| Field               | Type   | Description                                            |
|---------------------|--------|--------------------------------------------------------|
| Label              | String | Copy Content                                           |
| Source             | String | The source location within the blob container          |
| Destination        | String | The destination location within the blob container     |
| Container Name     | String | The name of the blob container                         |
| Blob Storage Connection | -  | Select or create a blob storage connection             |

#### Move Action
| Field               | Type   | Description                                            |
|---------------------|--------|--------------------------------------------------------|
| Label              | String | Move Content                                           |
| Source             | String | The source location within the blob container          |
| Destination        | String | The destination location within the blob container     |
| Container Name     | String | The name of the blob container                         |
| Blob Storage Connection | -  | Select or create a blob storage connection             |

### Conclusion
The Blob Storage plugin in the WeHub Dashboard is a versatile tool for managing content within cloud storage. By configuring the label, container name, paths, and connections, you can efficiently handle various storage operations in different scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
