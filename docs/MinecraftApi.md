# MinecraftApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachMinecraftToBuild**](#attachminecrafttobuild) | **POST** /minecraft/{minecraft_id}/builds | Attach a build to a Minecraft version|
|[**deleteMinecraftFromBuild**](#deleteminecraftfrombuild) | **DELETE** /minecraft/{minecraft_id}/builds | Unlink a build from a Minecraft version|
|[**listMinecraftBuilds**](#listminecraftbuilds) | **GET** /minecraft/{minecraft_id}/builds | Fetch the builds attached to a Minecraft version|
|[**listMinecrafts**](#listminecrafts) | **GET** /minecraft | Fetch the available Minecraft versions|
|[**updateMinecraft**](#updateminecraft) | **PUT** /minecraft | Update the available Minecraft versions|

# **attachMinecraftToBuild**
> Notification attachMinecraftToBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    MinecraftApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new MinecraftApi(configuration);

let minecraftId: string; //A minecraft identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The minecraft build data to create or update

const { status, data } = await apiInstance.attachMinecraftToBuild(
    minecraftId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The minecraft build data to create or update | |
| **minecraftId** | [**string**] | A minecraft identifier or slug | defaults to undefined|


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**412** | Resource is already attached |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMinecraftFromBuild**
> Notification deleteMinecraftFromBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    MinecraftApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new MinecraftApi(configuration);

let minecraftId: string; //A minecraft identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The minecraft build data to create or update

const { status, data } = await apiInstance.deleteMinecraftFromBuild(
    minecraftId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The minecraft build data to create or update | |
| **minecraftId** | [**string**] | A minecraft identifier or slug | defaults to undefined|


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**412** | Resource is not attached |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMinecraftBuilds**
> InlineObject2 listMinecraftBuilds()


### Example

```typescript
import {
    MinecraftApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new MinecraftApi(configuration);

let minecraftId: string; //A minecraft identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listMinecraftBuilds(
    minecraftId,
    search,
    sort,
    order,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **minecraftId** | [**string**] | A minecraft identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject2**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of minecraft builds |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMinecrafts**
> InlineObject1 listMinecrafts()


### Example

```typescript
import {
    MinecraftApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new MinecraftApi(configuration);

let search: string; //Search query (optional) (default to undefined)

const { status, data } = await apiInstance.listMinecrafts(
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Search query | (optional) defaults to undefined|


### Return type

**InlineObject1**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of minecrafts |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMinecraft**
> Notification updateMinecraft()


### Example

```typescript
import {
    MinecraftApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new MinecraftApi(configuration);

const { status, data } = await apiInstance.updateMinecraft();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Notification**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plain success message |  -  |
|**503** | Remote source is nit available |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

