# PackApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachBuildToVersion**](#attachbuildtoversion) | **POST** /packs/{pack_id}/builds/{build_id}/versions | Attach a version to a build|
|[**attachPackToGroup**](#attachpacktogroup) | **POST** /packs/{pack_id}/groups | Attach a group to pack|
|[**attachPackToUser**](#attachpacktouser) | **POST** /packs/{pack_id}/users | Attach a user to pack|
|[**createBuild**](#createbuild) | **POST** /packs/{pack_id}/builds | Create a new build for a pack|
|[**createPack**](#createpack) | **POST** /packs | Create a new pack|
|[**deleteBuild**](#deletebuild) | **DELETE** /packs/{pack_id}/builds/{build_id} | Delete a specific build for a pack|
|[**deleteBuildFromVersion**](#deletebuildfromversion) | **DELETE** /packs/{pack_id}/builds/{build_id}/versions | Unlink a version from a build|
|[**deletePack**](#deletepack) | **DELETE** /packs/{pack_id} | Delete a specific pack|
|[**deletePackFromGroup**](#deletepackfromgroup) | **DELETE** /packs/{pack_id}/groups | Unlink a group from pack|
|[**deletePackFromUser**](#deletepackfromuser) | **DELETE** /packs/{pack_id}/users | Unlink a user from pack|
|[**listBuildVersions**](#listbuildversions) | **GET** /packs/{pack_id}/builds/{build_id}/versions | Fetch all versions attached to build|
|[**listBuilds**](#listbuilds) | **GET** /packs/{pack_id}/builds | Fetch all available builds for a pack|
|[**listPackGroups**](#listpackgroups) | **GET** /packs/{pack_id}/groups | Fetch all groups attached to pack|
|[**listPackUsers**](#listpackusers) | **GET** /packs/{pack_id}/users | Fetch all users attached to pack|
|[**listPacks**](#listpacks) | **GET** /packs | Fetch all available packs|
|[**permitPackGroup**](#permitpackgroup) | **PUT** /packs/{pack_id}/groups | Update group perms for pack|
|[**permitPackUser**](#permitpackuser) | **PUT** /packs/{pack_id}/users | Update user perms for pack|
|[**showBuild**](#showbuild) | **GET** /packs/{pack_id}/builds/{build_id} | Fetch a specific build for a pack|
|[**showPack**](#showpack) | **GET** /packs/{pack_id} | Fetch a specific pack|
|[**updateBuild**](#updatebuild) | **PUT** /packs/{pack_id}/builds/{build_id} | Update a specific build for a pack|
|[**updatePack**](#updatepack) | **PUT** /packs/{pack_id} | Update a specific pack|

# **attachBuildToVersion**
> Notification attachBuildToVersion(attachBuildToVersionRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    AttachBuildToVersionRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let buildId: string; //A build identifier or slug (default to undefined)
let attachBuildToVersionRequest: AttachBuildToVersionRequest; //The build version data to create or delete

const { status, data } = await apiInstance.attachBuildToVersion(
    packId,
    buildId,
    attachBuildToVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachBuildToVersionRequest** | **AttachBuildToVersionRequest**| The build version data to create or delete | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **buildId** | [**string**] | A build identifier or slug | defaults to undefined|


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

# **attachPackToGroup**
> Notification attachPackToGroup(permitPackGroupRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    PermitPackGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let permitPackGroupRequest: PermitPackGroupRequest; //The pack group data to permit

const { status, data } = await apiInstance.attachPackToGroup(
    packId,
    permitPackGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackGroupRequest** | **PermitPackGroupRequest**| The pack group data to permit | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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

# **attachPackToUser**
> Notification attachPackToUser(permitPackUserRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    PermitPackUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let permitPackUserRequest: PermitPackUserRequest; //The pack user data to permit

const { status, data } = await apiInstance.attachPackToUser(
    packId,
    permitPackUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackUserRequest** | **PermitPackUserRequest**| The pack user data to permit | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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

# **createBuild**
> Build createBuild(createBuildRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    CreateBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let createBuildRequest: CreateBuildRequest; //The build data to create

const { status, data } = await apiInstance.createBuild(
    packId,
    createBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBuildRequest** | **CreateBuildRequest**| The build data to create | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


### Return type

**Build**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a build |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPack**
> Pack createPack(createPackRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    CreatePackRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let createPackRequest: CreatePackRequest; //The pack data to create

const { status, data } = await apiInstance.createPack(
    createPackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPackRequest** | **CreatePackRequest**| The pack data to create | |


### Return type

**Pack**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a pack |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBuild**
> Notification deleteBuild()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let buildId: string; //A build identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteBuild(
    packId,
    buildId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **buildId** | [**string**] | A build identifier or slug | defaults to undefined|


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
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**400** | Failed to execute action for resource |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBuildFromVersion**
> Notification deleteBuildFromVersion(attachBuildToVersionRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    AttachBuildToVersionRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let buildId: string; //A build identifier or slug (default to undefined)
let attachBuildToVersionRequest: AttachBuildToVersionRequest; //The build version data to create or delete

const { status, data } = await apiInstance.deleteBuildFromVersion(
    packId,
    buildId,
    attachBuildToVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachBuildToVersionRequest** | **AttachBuildToVersionRequest**| The build version data to create or delete | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **buildId** | [**string**] | A build identifier or slug | defaults to undefined|


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

# **deletePack**
> Notification deletePack()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)

const { status, data } = await apiInstance.deletePack(
    packId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**400** | Failed to execute action for resource |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePackFromGroup**
> Notification deletePackFromGroup(deletePackFromGroupRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    DeletePackFromGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let deletePackFromGroupRequest: DeletePackFromGroupRequest; //The pack group data to unlink

const { status, data } = await apiInstance.deletePackFromGroup(
    packId,
    deletePackFromGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePackFromGroupRequest** | **DeletePackFromGroupRequest**| The pack group data to unlink | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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

# **deletePackFromUser**
> Notification deletePackFromUser(deletePackFromUserRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    DeletePackFromUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let deletePackFromUserRequest: DeletePackFromUserRequest; //The pack user data to unlink

const { status, data } = await apiInstance.deletePackFromUser(
    packId,
    deletePackFromUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePackFromUserRequest** | **DeletePackFromUserRequest**| The pack user data to unlink | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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

# **listBuildVersions**
> ListBuildVersions200Response listBuildVersions()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let buildId: string; //A build identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listBuildVersions(
    packId,
    buildId,
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
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **buildId** | [**string**] | A build identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListBuildVersions200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of version builds |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBuilds**
> ListBuilds200Response listBuilds()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listBuilds(
    packId,
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
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListBuilds200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of build |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPackGroups**
> ListPackGroups200Response listPackGroups()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listPackGroups(
    packId,
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
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListPackGroups200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of pack groups |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPackUsers**
> ListPackUsers200Response listPackUsers()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listPackUsers(
    packId,
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
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListPackUsers200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of pack users |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPacks**
> ListPacks200Response listPacks()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listPacks(
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
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListPacks200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of packs |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permitPackGroup**
> Notification permitPackGroup(permitPackGroupRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    PermitPackGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let permitPackGroupRequest: PermitPackGroupRequest; //The pack group data to permit

const { status, data } = await apiInstance.permitPackGroup(
    packId,
    permitPackGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackGroupRequest** | **PermitPackGroupRequest**| The pack group data to permit | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permitPackUser**
> Notification permitPackUser(permitPackUserRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    PermitPackUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let permitPackUserRequest: PermitPackUserRequest; //The pack user data to permit

const { status, data } = await apiInstance.permitPackUser(
    packId,
    permitPackUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackUserRequest** | **PermitPackUserRequest**| The pack user data to permit | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


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
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showBuild**
> Build showBuild()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let buildId: string; //A build identifier or slug (default to undefined)

const { status, data } = await apiInstance.showBuild(
    packId,
    buildId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **buildId** | [**string**] | A build identifier or slug | defaults to undefined|


### Return type

**Build**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a build |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showPack**
> Pack showPack()


### Example

```typescript
import {
    PackApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)

const { status, data } = await apiInstance.showPack(
    packId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


### Return type

**Pack**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a pack |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBuild**
> Build updateBuild(createBuildRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    CreateBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let buildId: string; //A build identifier or slug (default to undefined)
let createBuildRequest: CreateBuildRequest; //The build data to update

const { status, data } = await apiInstance.updateBuild(
    packId,
    buildId,
    createBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBuildRequest** | **CreateBuildRequest**| The build data to update | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **buildId** | [**string**] | A build identifier or slug | defaults to undefined|


### Return type

**Build**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a build |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePack**
> Pack updatePack(createPackRequest)


### Example

```typescript
import {
    PackApi,
    Configuration,
    CreatePackRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new PackApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let createPackRequest: CreatePackRequest; //The pack data to update

const { status, data } = await apiInstance.updatePack(
    packId,
    createPackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPackRequest** | **CreatePackRequest**| The pack data to update | |
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


### Return type

**Pack**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a pack |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

