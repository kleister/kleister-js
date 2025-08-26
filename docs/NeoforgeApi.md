# NeoforgeApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachNeoforgeToBuild**](#attachneoforgetobuild) | **POST** /neoforge/{neoforge_id}/builds | Attach a build to a Neoforge version|
|[**deleteNeoforgeFromBuild**](#deleteneoforgefrombuild) | **DELETE** /neoforge/{neoforge_id}/builds | Unlink a build from a Neoforge version|
|[**listNeoforgeBuilds**](#listneoforgebuilds) | **GET** /neoforge/{neoforge_id}/builds | Fetch the builds attached to a Neoforge version|
|[**listNeoforges**](#listneoforges) | **GET** /neoforge | Fetch the available Neoforge versions|
|[**updateNeoforge**](#updateneoforge) | **PUT** /neoforge | Update the available Neoforge versions|

# **attachNeoforgeToBuild**
> Notification attachNeoforgeToBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    NeoforgeApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new NeoforgeApi(configuration);

let neoforgeId: string; //A neoforge identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The neoforge build data to create or update

const { status, data } = await apiInstance.attachNeoforgeToBuild(
    neoforgeId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The neoforge build data to create or update | |
| **neoforgeId** | [**string**] | A neoforge identifier or slug | defaults to undefined|


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

# **deleteNeoforgeFromBuild**
> Notification deleteNeoforgeFromBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    NeoforgeApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new NeoforgeApi(configuration);

let neoforgeId: string; //A neoforge identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The neoforge build data to create or update

const { status, data } = await apiInstance.deleteNeoforgeFromBuild(
    neoforgeId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The neoforge build data to create or update | |
| **neoforgeId** | [**string**] | A neoforge identifier or slug | defaults to undefined|


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

# **listNeoforgeBuilds**
> InlineObject6 listNeoforgeBuilds()


### Example

```typescript
import {
    NeoforgeApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new NeoforgeApi(configuration);

let neoforgeId: string; //A neoforge identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listNeoforgeBuilds(
    neoforgeId,
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
| **neoforgeId** | [**string**] | A neoforge identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject6**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of neoforge builds |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listNeoforges**
> InlineObject5 listNeoforges()


### Example

```typescript
import {
    NeoforgeApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new NeoforgeApi(configuration);

let search: string; //Search query (optional) (default to undefined)

const { status, data } = await apiInstance.listNeoforges(
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Search query | (optional) defaults to undefined|


### Return type

**InlineObject5**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of neoforges |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateNeoforge**
> Notification updateNeoforge()


### Example

```typescript
import {
    NeoforgeApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new NeoforgeApi(configuration);

const { status, data } = await apiInstance.updateNeoforge();
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

