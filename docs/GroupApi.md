# GroupApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachGroupToMod**](#attachgrouptomod) | **POST** /groups/{group_id}/mods | Attach a mod to group|
|[**attachGroupToPack**](#attachgrouptopack) | **POST** /groups/{group_id}/packs | Attach a pack to group|
|[**attachGroupToUser**](#attachgrouptouser) | **POST** /groups/{group_id}/users | Attach a user to group|
|[**createGroup**](#creategroup) | **POST** /groups | Create a new group|
|[**deleteGroup**](#deletegroup) | **DELETE** /groups/{group_id} | Delete a specific group|
|[**deleteGroupFromMod**](#deletegroupfrommod) | **DELETE** /groups/{group_id}/mods | Unlink a mod from group|
|[**deleteGroupFromPack**](#deletegroupfrompack) | **DELETE** /groups/{group_id}/packs | Unlink a pack from group|
|[**deleteGroupFromUser**](#deletegroupfromuser) | **DELETE** /groups/{group_id}/users | Unlink a user from group|
|[**listGroupMods**](#listgroupmods) | **GET** /groups/{group_id}/mods | Fetch all mods attached to group|
|[**listGroupPacks**](#listgrouppacks) | **GET** /groups/{group_id}/packs | Fetch all packs attached to group|
|[**listGroupUsers**](#listgroupusers) | **GET** /groups/{group_id}/users | Fetch all users attached to group|
|[**listGroups**](#listgroups) | **GET** /groups | Fetch all available groups|
|[**permitGroupMod**](#permitgroupmod) | **PUT** /groups/{group_id}/mods | Update mod perms for group|
|[**permitGroupPack**](#permitgrouppack) | **PUT** /groups/{group_id}/packs | Update pack perms for group|
|[**permitGroupUser**](#permitgroupuser) | **PUT** /groups/{group_id}/users | Update user perms for group|
|[**showGroup**](#showgroup) | **GET** /groups/{group_id} | Fetch a specific group|
|[**updateGroup**](#updategroup) | **PUT** /groups/{group_id} | Update a specific group|

# **attachGroupToMod**
> Notification attachGroupToMod(permitGroupModRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitGroupModRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitGroupModRequest: PermitGroupModRequest; //The group mod data to permit

const { status, data } = await apiInstance.attachGroupToMod(
    groupId,
    permitGroupModRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitGroupModRequest** | **PermitGroupModRequest**| The group mod data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **attachGroupToPack**
> Notification attachGroupToPack(permitGroupPackRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitGroupPackRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitGroupPackRequest: PermitGroupPackRequest; //The group pack data to permit

const { status, data } = await apiInstance.attachGroupToPack(
    groupId,
    permitGroupPackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitGroupPackRequest** | **PermitGroupPackRequest**| The group pack data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **attachGroupToUser**
> Notification attachGroupToUser(permitPackUserRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitPackUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitPackUserRequest: PermitPackUserRequest; //The group user data to permit

const { status, data } = await apiInstance.attachGroupToUser(
    groupId,
    permitPackUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackUserRequest** | **PermitPackUserRequest**| The group user data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **createGroup**
> Group createGroup(createGroupRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    CreateGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let createGroupRequest: CreateGroupRequest; //The group data to create

const { status, data } = await apiInstance.createGroup(
    createGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRequest** | **CreateGroupRequest**| The group data to create | |


### Return type

**Group**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a group |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroup**
> Notification deleteGroup()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **deleteGroupFromMod**
> Notification deleteGroupFromMod(deleteGroupFromModRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    DeleteGroupFromModRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let deleteGroupFromModRequest: DeleteGroupFromModRequest; //The group mod data to unlink

const { status, data } = await apiInstance.deleteGroupFromMod(
    groupId,
    deleteGroupFromModRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGroupFromModRequest** | **DeleteGroupFromModRequest**| The group mod data to unlink | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **deleteGroupFromPack**
> Notification deleteGroupFromPack(deleteGroupFromPackRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    DeleteGroupFromPackRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let deleteGroupFromPackRequest: DeleteGroupFromPackRequest; //The group pack data to unlink

const { status, data } = await apiInstance.deleteGroupFromPack(
    groupId,
    deleteGroupFromPackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGroupFromPackRequest** | **DeleteGroupFromPackRequest**| The group pack data to unlink | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **deleteGroupFromUser**
> Notification deleteGroupFromUser(deletePackFromUserRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    DeletePackFromUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let deletePackFromUserRequest: DeletePackFromUserRequest; //The group user data to unlink

const { status, data } = await apiInstance.deleteGroupFromUser(
    groupId,
    deletePackFromUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePackFromUserRequest** | **DeletePackFromUserRequest**| The group user data to unlink | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **listGroupMods**
> ListGroupMods200Response listGroupMods()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listGroupMods(
    groupId,
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
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListGroupMods200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of group mods |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listGroupPacks**
> ListGroupPacks200Response listGroupPacks()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listGroupPacks(
    groupId,
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
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListGroupPacks200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of group packs |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listGroupUsers**
> ListGroupUsers200Response listGroupUsers()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listGroupUsers(
    groupId,
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
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListGroupUsers200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of group users |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listGroups**
> ListGroups200Response listGroups()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listGroups(
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

**ListGroups200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of groups |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permitGroupMod**
> Notification permitGroupMod(permitGroupModRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitGroupModRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitGroupModRequest: PermitGroupModRequest; //The group mod data to permit

const { status, data } = await apiInstance.permitGroupMod(
    groupId,
    permitGroupModRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitGroupModRequest** | **PermitGroupModRequest**| The group mod data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **permitGroupPack**
> Notification permitGroupPack(permitGroupPackRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitGroupPackRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitGroupPackRequest: PermitGroupPackRequest; //The group pack data to permit

const { status, data } = await apiInstance.permitGroupPack(
    groupId,
    permitGroupPackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitGroupPackRequest** | **PermitGroupPackRequest**| The group pack data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **permitGroupUser**
> Notification permitGroupUser(permitPackUserRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    PermitPackUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let permitPackUserRequest: PermitPackUserRequest; //The group user data to permit

const { status, data } = await apiInstance.permitGroupUser(
    groupId,
    permitPackUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackUserRequest** | **PermitPackUserRequest**| The group user data to permit | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


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

# **showGroup**
> Group showGroup()


### Example

```typescript
import {
    GroupApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)

const { status, data } = await apiInstance.showGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


### Return type

**Group**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a group |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroup**
> Group updateGroup(createGroupRequest)


### Example

```typescript
import {
    GroupApi,
    Configuration,
    CreateGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new GroupApi(configuration);

let groupId: string; //A group identifier or slug (default to undefined)
let createGroupRequest: CreateGroupRequest; //The group data to update

const { status, data } = await apiInstance.updateGroup(
    groupId,
    createGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRequest** | **CreateGroupRequest**| The group data to update | |
| **groupId** | [**string**] | A group identifier or slug | defaults to undefined|


### Return type

**Group**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a group |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

