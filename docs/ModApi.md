# ModApi

All URIs are relative to *https://try.kleister.eu/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachModToGroup**](#attachmodtogroup) | **POST** /mods/{mod_id}/groups | Attach a group to mod|
|[**attachModToUser**](#attachmodtouser) | **POST** /mods/{mod_id}/users | Attach a user to mod|
|[**attachVersionToBuild**](#attachversiontobuild) | **POST** /mods/{mod_id}/versions/{version_id}/builds | Attach a build to a version|
|[**createMod**](#createmod) | **POST** /mods | Create a new mod|
|[**createModAvatar**](#createmodavatar) | **POST** /mods/{mod_id}/avatar | Upload an avatar for the defined mod|
|[**createPackAvatar**](#createpackavatar) | **POST** /packs/{pack_id}/avatar | Upload an avatar for the defined pack|
|[**createVersion**](#createversion) | **POST** /mods/{mod_id}/versions | Create a new version for a mod|
|[**deleteMod**](#deletemod) | **DELETE** /mods/{mod_id} | Delete a specific mod|
|[**deleteModAvatar**](#deletemodavatar) | **DELETE** /mods/{mod_id}/avatar | Delete the avatar for the defined mod|
|[**deleteModFromGroup**](#deletemodfromgroup) | **DELETE** /mods/{mod_id}/groups | Unlink a group from mod|
|[**deleteModFromUser**](#deletemodfromuser) | **DELETE** /mods/{mod_id}/users | Unlink a user from mod|
|[**deletePackAvatar**](#deletepackavatar) | **DELETE** /packs/{pack_id}/avatar | Delete the avatar for the defined pack|
|[**deleteVersion**](#deleteversion) | **DELETE** /mods/{mod_id}/versions/{version_id} | Delete a specific version for a mod|
|[**deleteVersionFromBuild**](#deleteversionfrombuild) | **DELETE** /mods/{mod_id}/versions/{version_id}/builds | Unlink a build from a version|
|[**listModGroups**](#listmodgroups) | **GET** /mods/{mod_id}/groups | Fetch all groups attached to mod|
|[**listModUsers**](#listmodusers) | **GET** /mods/{mod_id}/users | Fetch all users attached to mod|
|[**listMods**](#listmods) | **GET** /mods | Fetch all available mods|
|[**listVersionBuilds**](#listversionbuilds) | **GET** /mods/{mod_id}/versions/{version_id}/builds | Fetch all builds attached to version|
|[**listVersions**](#listversions) | **GET** /mods/{mod_id}/versions | Fetch all available versions for a mod|
|[**permitModGroup**](#permitmodgroup) | **PUT** /mods/{mod_id}/groups | Update group perms for mod|
|[**permitModUser**](#permitmoduser) | **PUT** /mods/{mod_id}/users | Update user perms for mod|
|[**showMod**](#showmod) | **GET** /mods/{mod_id} | Fetch a specific mod|
|[**showVersion**](#showversion) | **GET** /mods/{mod_id}/versions/{version_id} | Fetch a specific version for a mod|
|[**updateMod**](#updatemod) | **PUT** /mods/{mod_id} | Update a specific mod|
|[**updateVersion**](#updateversion) | **PUT** /mods/{mod_id}/versions/{version_id} | Update a specific version for a mod|

# **attachModToGroup**
> Notification attachModToGroup(permitPackGroupRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    PermitPackGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let permitPackGroupRequest: PermitPackGroupRequest; //The mod group data to permit

const { status, data } = await apiInstance.attachModToGroup(
    modId,
    permitPackGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackGroupRequest** | **PermitPackGroupRequest**| The mod group data to permit | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **attachModToUser**
> Notification attachModToUser(permitPackUserRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    PermitPackUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let permitPackUserRequest: PermitPackUserRequest; //The mod user data to permit

const { status, data } = await apiInstance.attachModToUser(
    modId,
    permitPackUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackUserRequest** | **PermitPackUserRequest**| The mod user data to permit | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **attachVersionToBuild**
> Notification attachVersionToBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let versionId: string; //A version identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The version build data to create or delete

const { status, data } = await apiInstance.attachVersionToBuild(
    modId,
    versionId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The version build data to create or delete | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **versionId** | [**string**] | A version identifier or slug | defaults to undefined|


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

# **createMod**
> Mod createMod(createModRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    CreateModRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let createModRequest: CreateModRequest; //The mod data to create

const { status, data } = await apiInstance.createMod(
    createModRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createModRequest** | **CreateModRequest**| The mod data to create | |


### Return type

**Mod**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a mod |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createModAvatar**
> ModAvatar createModAvatar()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.createModAvatar(
    modId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**ModAvatar**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a mod avatar |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPackAvatar**
> PackAvatar createPackAvatar()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.createPackAvatar(
    packId,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**PackAvatar**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a pack avatar |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createVersion**
> Version createVersion(createVersionRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    CreateVersionRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let createVersionRequest: CreateVersionRequest; //The version data to create

const { status, data } = await apiInstance.createVersion(
    modId,
    createVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createVersionRequest** | **CreateVersionRequest**| The version data to create | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


### Return type

**Version**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a version |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMod**
> Notification deleteMod()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteMod(
    modId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **deleteModAvatar**
> ModAvatar deleteModAvatar()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteModAvatar(
    modId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


### Return type

**ModAvatar**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a mod avatar |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**400** | Failed to execute action for resource |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteModFromGroup**
> Notification deleteModFromGroup(deletePackFromGroupRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    DeletePackFromGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let deletePackFromGroupRequest: DeletePackFromGroupRequest; //The mod group data to unlink

const { status, data } = await apiInstance.deleteModFromGroup(
    modId,
    deletePackFromGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePackFromGroupRequest** | **DeletePackFromGroupRequest**| The mod group data to unlink | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **deleteModFromUser**
> Notification deleteModFromUser(deletePackFromUserRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    DeletePackFromUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let deletePackFromUserRequest: DeletePackFromUserRequest; //The mod user data to unlink

const { status, data } = await apiInstance.deleteModFromUser(
    modId,
    deletePackFromUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePackFromUserRequest** | **DeletePackFromUserRequest**| The mod user data to unlink | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **deletePackAvatar**
> PackAvatar deletePackAvatar()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let packId: string; //A pack identifier or slug (default to undefined)

const { status, data } = await apiInstance.deletePackAvatar(
    packId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packId** | [**string**] | A pack identifier or slug | defaults to undefined|


### Return type

**PackAvatar**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a pack avatar |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**400** | Failed to execute action for resource |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteVersion**
> Notification deleteVersion()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let versionId: string; //A version identifier or slug (default to undefined)

const { status, data } = await apiInstance.deleteVersion(
    modId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **versionId** | [**string**] | A version identifier or slug | defaults to undefined|


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

# **deleteVersionFromBuild**
> Notification deleteVersionFromBuild(attachMinecraftToBuildRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    AttachMinecraftToBuildRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let versionId: string; //A version identifier or slug (default to undefined)
let attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest; //The version build data to create or delete

const { status, data } = await apiInstance.deleteVersionFromBuild(
    modId,
    versionId,
    attachMinecraftToBuildRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachMinecraftToBuildRequest** | **AttachMinecraftToBuildRequest**| The version build data to create or delete | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **versionId** | [**string**] | A version identifier or slug | defaults to undefined|


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

# **listModGroups**
> ListModGroups200Response listModGroups()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listModGroups(
    modId,
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
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListModGroups200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of mod groups |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listModUsers**
> ListModUsers200Response listModUsers()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listModUsers(
    modId,
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
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListModUsers200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of mod users |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMods**
> ListMods200Response listMods()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listMods(
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

**ListMods200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of mods |  -  |
|**403** | User is not authorized |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listVersionBuilds**
> ListVersionBuilds200Response listVersionBuilds()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let versionId: string; //A version identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listVersionBuilds(
    modId,
    versionId,
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
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **versionId** | [**string**] | A version identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListVersionBuilds200Response**

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

# **listVersions**
> ListVersions200Response listVersions()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let search: string; //Search query (optional) (default to undefined)
let sort: string; //Sorting column (optional) (default to undefined)
let order: 'asc' | 'desc'; //Sorting order (optional) (default to 'asc')
let limit: number; //Paging limit (optional) (default to 100)
let offset: number; //Paging offset (optional) (default to 0)

const { status, data } = await apiInstance.listVersions(
    modId,
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
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **search** | [**string**] | Search query | (optional) defaults to undefined|
| **sort** | [**string**] | Sorting column | (optional) defaults to undefined|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sorting order | (optional) defaults to 'asc'|
| **limit** | [**number**] | Paging limit | (optional) defaults to 100|
| **offset** | [**number**] | Paging offset | (optional) defaults to 0|


### Return type

**ListVersions200Response**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of version |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permitModGroup**
> Notification permitModGroup(permitPackGroupRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    PermitPackGroupRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let permitPackGroupRequest: PermitPackGroupRequest; //The mod group data to permit

const { status, data } = await apiInstance.permitModGroup(
    modId,
    permitPackGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackGroupRequest** | **PermitPackGroupRequest**| The mod group data to permit | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **permitModUser**
> Notification permitModUser(permitPackUserRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    PermitPackUserRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let permitPackUserRequest: PermitPackUserRequest; //The mod user data to permit

const { status, data } = await apiInstance.permitModUser(
    modId,
    permitPackUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permitPackUserRequest** | **PermitPackUserRequest**| The mod user data to permit | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


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

# **showMod**
> Mod showMod()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)

const { status, data } = await apiInstance.showMod(
    modId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


### Return type

**Mod**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a mod |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showVersion**
> Version showVersion()


### Example

```typescript
import {
    ModApi,
    Configuration
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let versionId: string; //A version identifier or slug (default to undefined)

const { status, data } = await apiInstance.showVersion(
    modId,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **versionId** | [**string**] | A version identifier or slug | defaults to undefined|


### Return type

**Version**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a version |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMod**
> Mod updateMod(createModRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    CreateModRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let createModRequest: CreateModRequest; //The mod data to update

const { status, data } = await apiInstance.updateMod(
    modId,
    createModRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createModRequest** | **CreateModRequest**| The mod data to update | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|


### Return type

**Mod**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a mod |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateVersion**
> Version updateVersion(createVersionRequest)


### Example

```typescript
import {
    ModApi,
    Configuration,
    CreateVersionRequest
} from 'kleisterjs';

const configuration = new Configuration();
const apiInstance = new ModApi(configuration);

let modId: string; //A mod identifier or slug (default to undefined)
let versionId: string; //A version identifier or slug (default to undefined)
let createVersionRequest: CreateVersionRequest; //The version data to update

const { status, data } = await apiInstance.updateVersion(
    modId,
    versionId,
    createVersionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createVersionRequest** | **CreateVersionRequest**| The version data to update | |
| **modId** | [**string**] | A mod identifier or slug | defaults to undefined|
| **versionId** | [**string**] | A version identifier or slug | defaults to undefined|


### Return type

**Version**

### Authorization

[Basic](../README.md#Basic), [Header](../README.md#Header), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The details for a version |  -  |
|**400** | Failed to parse request |  -  |
|**403** | User is not authorized |  -  |
|**404** | Resource not found |  -  |
|**422** | Failed to validate request |  -  |
|**500** | Some internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

