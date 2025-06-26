# FabricApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachFabricToBuild**](#attachfabrictobuild) | **POST** /fabric/{fabric_id}/builds | Attach a build to a Fabric version|
|[**deleteFabricFromBuild**](#deletefabricfrombuild) | **DELETE** /fabric/{fabric_id}/builds | Unlink a build from a Fabric version|
|[**listFabricBuilds**](#listfabricbuilds) | **GET** /fabric/{fabric_id}/builds | Fetch the builds attached to a Fabric version|
|[**listFabrics**](#listfabrics) | **GET** /fabric | Fetch the available Fabric versions|
|[**updateFabric**](#updatefabric) | **PUT** /fabric | Update the available Fabric versions|

# **attachFabricToBuild**
> Notification attachFabricToBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    FabricApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new FabricApi(configuration);

let fabricId: string; //A fabric identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The fabric build data to create or update

const { status, data } = await apiInstance.attachFabricToBuild(
    fabricId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The fabric build data to create or update | |
| **fabricId** | [**string**] | A fabric identifier or slug | defaults to undefined|


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

# **deleteFabricFromBuild**
> Notification deleteFabricFromBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    FabricApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new FabricApi(configuration);

let fabricId: string; //A fabric identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The fabric build data to create or update

const { status, data } = await apiInstance.deleteFabricFromBuild(
    fabricId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The fabric build data to create or update | |
| **fabricId** | [**string**] | A fabric identifier or slug | defaults to undefined|


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

# **listFabricBuilds**
> InlineObject10 listFabricBuilds()


### Example

```typescript
import {
    FabricApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new FabricApi(configuration);

let fabricId: string; //A fabric identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listFabricBuilds(
    fabricId,
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
| **fabricId** | [**string**] | A fabric identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject10**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of fabric builds |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFabrics**
> InlineObject9 listFabrics()


### Example

```typescript
import {
    FabricApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new FabricApi(configuration);

let search: string; //Search query (optional) (default to undefined)

const { status, data } = await apiInstance.listFabrics(
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Search query | (optional) defaults to undefined|


### Return type

**InlineObject9**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of fabrics |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFabric**
> Notification updateFabric()


### Example

```typescript
import {
    FabricApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new FabricApi(configuration);

const { status, data } = await apiInstance.updateFabric();
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

