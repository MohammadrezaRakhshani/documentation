
# HTTP Operations

## Introduction

The "HTTP Operations" plugin is a versatile tool designed to facilitate HTTP operations within your application or system. With this plugin, you can seamlessly integrate HTTP triggers, client requests, and responses into your workflow.

# Actions


# 1. Trigger

The _Trigger_ action allows you to set up HTTP endpoints that can initiate specific operations/workflows when accessed. This can be particularly useful for handling incoming requests from external systems or users.

### 1.1. Configuration Options
•	Label: A descriptive name for the instance you are creating.
•	Header: Define headers that you are expecting from the incoming request. Every defined header will be extracted from the request header and is accessible in string format.

### 1.2. I/O
**1.2.1. Input**
- None

**1.2.2. Output** 

- Payload (byte)
- Headers (string)

### 1.3. Usage
Every workflow must contain at least one Trigger plugin for them to be able to start. How workflows start or receive incoming data can vary based on the technology the Triggers they are representing.

Endpoint: The URL path where the trigger will be accessible. HTTP Trigger creates a unique Restful endpoint for any user or system to access a specific workflow. This generated endpoint will only be accessible if the workflow is Published.


## HTTP Method: _POST_
**Parameters:**
The request must contain a payload, an Authorization header with a valid Bearer Token, and any custom headers defined earlier in the configuration of the plugin.

# 2. Client
The Client action enables your application to make HTTP requests to external servers or APIs. This allows you to fetch data, interact with services, or perform other operations over the web.

### 2.1. Configuration Options
- **_Label:_** A descriptive name for the instance you are creating.

- **_Connection:_** Select a pre-existing connection containing the details of target endpoint and authentication methods.

- **_Path:_** Trailing path which will be appended to the end of the address provided in the latter connection.

- **_Method:_** Method of the request

- _**Override Path:**_ This radio button allows the original target path of the connection to be replaced with a manual path, provided either in the configuration or dynamically through the input.
Static Payload: If this radio button is active, the dynamic payload of input will be ignored and the provided static payload will be used for the request.

- _**Header:**_ Define headers that the endpoint is expecting from the incoming request.

### 2.2. I/O

2.1.1. Input
- Headers (String)
- Payload (Byte)

2.2.2. Output
- Payload (Byte)
- Status (Integer)
- Headers (String)

# 3. Response
The Response action allows you to send HTTP responses back to the client or requester. This can be used to provide feedback, deliver data, or communicate the outcome of an operation.

### 3.1. Configuration Options
- **_Label:_** A descriptive name for the instance you are creating.

### 3.2. I/O

3.2.1 Input
- Payload (Byte)
- Status (Integer)

3.2.2. Output
- Payload (Byte)
- Status (Integer)

### 3.3. Usage
Using the provided inputs, we can send a customized status or payload back to the client or requester.


