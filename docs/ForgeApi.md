# ForgeApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachForgeToBuild**](#attachforgetobuild) | **POST** /forge/{forge_id}/builds | Attach a build to a Forge version|
|[**deleteForgeFromBuild**](#deleteforgefrombuild) | **DELETE** /forge/{forge_id}/builds | Unlink a build from a Forge version|
|[**listForgeBuilds**](#listforgebuilds) | **GET** /forge/{forge_id}/builds | Fetch the builds attached to a Forge version|
|[**listForges**](#listforges) | **GET** /forge | Fetch the available Forge versions|
|[**updateForge**](#updateforge) | **PUT** /forge | Update the available Forge versions|

# **attachForgeToBuild**
> Notification attachForgeToBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    ForgeApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ForgeApi(configuration);

let forgeId: string; //A forge identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The forge build data to create or update

const { status, data } = await apiInstance.attachForgeToBuild(
    forgeId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The forge build data to create or update | |
| **forgeId** | [**string**] | A forge identifier or slug | defaults to undefined|


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

# **deleteForgeFromBuild**
> Notification deleteForgeFromBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    ForgeApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ForgeApi(configuration);

let forgeId: string; //A forge identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The forge build data to create or update

const { status, data } = await apiInstance.deleteForgeFromBuild(
    forgeId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The forge build data to create or update | |
| **forgeId** | [**string**] | A forge identifier or slug | defaults to undefined|


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

# **listForgeBuilds**
> InlineObject4 listForgeBuilds()


### Example

```typescript
import {
    ForgeApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ForgeApi(configuration);

let forgeId: string; //A forge identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listForgeBuilds(
    forgeId,
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
| **forgeId** | [**string**] | A forge identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**InlineObject4**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of forge builds |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listForges**
> InlineObject3 listForges()


### Example

```typescript
import {
    ForgeApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ForgeApi(configuration);

let search: string; //Search query (optional) (default to undefined)

const { status, data } = await apiInstance.listForges(
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Search query | (optional) defaults to undefined|


### Return type

**InlineObject3**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of forges |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateForge**
> Notification updateForge()


### Example

```typescript
import {
    ForgeApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ForgeApi(configuration);

const { status, data } = await apiInstance.updateForge();
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

