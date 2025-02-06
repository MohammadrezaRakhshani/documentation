
## Introduction
The WeHub Dashboard offers a variety of plugins to enhance and automate your workflows. These plugins are categorized into three types: Triggers, Processors, and Apps. This documentation provides an overview of the "SFTP Client" plugin, which falls under the Processors category.

## SFTP Client Plugin
The "SFTP Client" plugin is used to manage files and folders on an SFTP server within your workflow. This plugin provides several actions to interact with the SFTP server. Each action has specific configuration requirements.

### Actions

#### 1. Copy file
Copy a file to the new location on SFTP.

#### Configuration for Copy file

![Screenshot 2024-05-29 at 17.05.29.png](../../../static/img/SFTP%20Client-1.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.
4. **File name**: Input the file name.
5. **Destination directory**: Input the destination directory.

#### 2. Create folder
Create a new folder on SFTP.

#### Configuration for Create folder

![Screenshot 2024-05-29 at 17.06.10.png](../../../static/img/SFTP%20Client-2.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.

#### 3. Delete file
Delete a file on SFTP.

#### Configuration for Delete file

![Screenshot 2024-05-29 at 17.06.36.png](../../../static/img/SFTP%20Client-3.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.
4. **File name**: Input the file name.

#### 4. Delete folder
Delete a folder on SFTP.

#### Configuration for Delete folder

![Screenshot 2024-05-29 at 17.07.04.png](../../../static/img/SFTP%20Client-4.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.

#### 5. Download file
Download a file from SFTP.

#### Configuration for Download file

![Screenshot 2024-05-29 at 17.07.29.png](../../../static/img/SFTP%20Client-5.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.

#### 6. List files
List all files in a folder on SFTP.

#### Configuration for List files

![Screenshot 2024-05-29 at 17.07.54.png](../../../static/img/SFTP%20Client-6.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.

#### 7. Move file
Move a file to the new location on SFTP.

#### Configuration for Move file

![Screenshot 2024-05-29 at 17.08.30.png](../../../static/img/SFTP%20Client-7.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.
4. **File name**: Input the file name.
5. **Destination directory**: Input the destination directory.

#### 8. Move folder
Move a folder to the new location on SFTP.

#### Configuration for Move folder

![Screenshot 2024-05-29 at 17.09.01.png](../../../static/img/SFTP%20Client-8.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.
4. **Destination directory**: Input the destination directory.

#### 9. Upload file
Upload a file to the location on SFTP.

#### Configuration for Upload file

![Screenshot 2024-05-29 at 17.09.19.png](../../../static/img/SFTP%20Client-9.png)

1. **Label**: A descriptive label to identify this action within your workflow.
2. **Connection**: Select an existing connection to your SFTP server or create a new connection.
3. **Source directory**: Input the source directory.
4. **File name**: Input the file name.

### Example Configurations
#### Example Configuration for Copy file
- **Label**: Copy File to New Location
- **Connection**: SFTPConnection1
- **Source directory**: /source/path
- **File name**: example.txt
- **Destination directory**: /destination/path

### Example Configuration for Create folder
- **Label**: Create New Folder
- **Connection**: SFTPConnection1
- **Source directory**: /new/folder/path

### Example Configuration for Delete file
- **Label**: Delete File
- **Connection**: SFTPConnection1
- **Source directory**: /source/path
- **File name**: example.txt

### Example Configuration for Delete folder
- **Label**: Delete Folder
- **Connection**: SFTPConnection1
- **Source directory**: /source/folder/path

### Example Configuration for Download file
- **Label**: Download File
- **Connection**: SFTPConnection1

### Example Configuration for List files
- **Label**: List Files in Folder
- **Connection**: SFTPConnection1
- **Source directory**: /source/folder/path

### Example Configuration for Move file
- **Label**: Move File to New Location
- **Connection**: SFTPConnection1
- **Source directory**: /source/path
- **File name**: example.txt
- **Destination directory**: /destination/path

### Example Configuration for Move folder
- **Label**: Move Folder to New Location
- **Connection**: SFTPConnection1
- **Source directory**: /source/folder/path
- **Destination directory**: /destination/folder/path

### Example Configuration for Upload file
- **Label**: Upload File to SFTP
- **Connection**: SFTPConnection1
- **Source directory**: /upload/path
- **File name**: example.txt

### Conclusion
The SFTP Client plugin in the WeHub Dashboard is a versatile tool for managing files and folders on an SFTP server within your workflows. By configuring the label, connection, source directory, file name, and destination directory, you can efficiently handle various SFTP operations in different scenarios. Ensure to test and validate your configurations to achieve the desired workflow behavior.

If you have any further questions or need additional assistance, please refer to the WeHub Dashboard support documentation or contact our support team.
