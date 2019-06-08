# Kleister.ModApi

All URIs are relative to *http://try.kleister.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendModToTeam**](ModApi.md#appendModToTeam) | **POST** /mods/{mod_id}/teams | Assign a team to mod
[**appendModToUser**](ModApi.md#appendModToUser) | **POST** /mods/{mod_id}/users | Assign a user to mod
[**appendVersionToBuild**](ModApi.md#appendVersionToBuild) | **POST** /mods/{mod_id}/versions/{version_id}/builds | Assign a build to a version
[**createMod**](ModApi.md#createMod) | **POST** /mods | Create a new mod
[**createVersion**](ModApi.md#createVersion) | **POST** /mods/{mod_id}/versions | Create a new version for a mod
[**deleteMod**](ModApi.md#deleteMod) | **DELETE** /mods/{mod_id} | Delete a specific mod
[**deleteModFromTeam**](ModApi.md#deleteModFromTeam) | **DELETE** /mods/{mod_id}/teams | Remove a team from mod
[**deleteModFromUser**](ModApi.md#deleteModFromUser) | **DELETE** /mods/{mod_id}/users | Remove a user from mod
[**deleteVersion**](ModApi.md#deleteVersion) | **DELETE** /mods/{mod_id}/versions/{version_id} | Delete a specific version for a mod
[**deleteVersionFromBuild**](ModApi.md#deleteVersionFromBuild) | **DELETE** /mods/{mod_id}/versions/{version_id}/builds | Unlink a build from a version
[**listModTeams**](ModApi.md#listModTeams) | **GET** /mods/{mod_id}/teams | Fetch all teams assigned to mod
[**listModUsers**](ModApi.md#listModUsers) | **GET** /mods/{mod_id}/users | Fetch all users assigned to mod
[**listMods**](ModApi.md#listMods) | **GET** /mods | Fetch all available mods
[**listVersionBuilds**](ModApi.md#listVersionBuilds) | **GET** /mods/{mod_id}/versions/{version_id}/builds | Fetch all builds assigned to version
[**listVersions**](ModApi.md#listVersions) | **GET** /mods/{mod_id}/versions | Fetch all available versions for a mod
[**permitModTeam**](ModApi.md#permitModTeam) | **PUT** /mods/{mod_id}/teams | Update team perms for mod
[**permitModUser**](ModApi.md#permitModUser) | **PUT** /mods/{mod_id}/users | Update user perms for mod
[**showMod**](ModApi.md#showMod) | **GET** /mods/{mod_id} | Fetch a specific mod
[**showVersion**](ModApi.md#showVersion) | **GET** /mods/{mod_id}/versions/{version_id} | Fetch a specific version for a mod
[**updateMod**](ModApi.md#updateMod) | **PUT** /mods/{mod_id} | Update a specific mod
[**updateVersion**](ModApi.md#updateVersion) | **PUT** /mods/{mod_id}/versions/{version_id} | Update a specific version for a mod



## appendModToTeam

> GeneralError appendModToTeam(modId, modTeam)

Assign a team to mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let modTeam = new Kleister.ModTeamParams(); // ModTeamParams | The mod team data to assign
apiInstance.appendModToTeam(modId, modTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **modTeam** | [**ModTeamParams**](ModTeamParams.md)| The mod team data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendModToUser

> GeneralError appendModToUser(modId, modUser)

Assign a user to mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let modUser = new Kleister.ModUserParams(); // ModUserParams | The mod user data to assign
apiInstance.appendModToUser(modId, modUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **modUser** | [**ModUserParams**](ModUserParams.md)| The mod user data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendVersionToBuild

> GeneralError appendVersionToBuild(modId, versionId, versionBuild)

Assign a build to a version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let versionId = "versionId_example"; // String | A version UUID or slug
let versionBuild = new Kleister.VersionBuildParams(); // VersionBuildParams | The build data to append to version
apiInstance.appendVersionToBuild(modId, versionId, versionBuild).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **versionId** | **String**| A version UUID or slug | 
 **versionBuild** | [**VersionBuildParams**](VersionBuildParams.md)| The build data to append to version | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMod

> Mod createMod(mod)

Create a new mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let mod = new Kleister.Mod(); // Mod | The mod data to create
apiInstance.createMod(mod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mod** | [**Mod**](Mod.md)| The mod data to create | 

### Return type

[**Mod**](Mod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVersion

> Version createVersion(modId, version)

Create a new version for a mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let version = new Kleister.Version(); // Version | The version data to create
apiInstance.createVersion(modId, version).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **version** | [**Version**](Version.md)| The version data to create | 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMod

> GeneralError deleteMod(modId)

Delete a specific mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
apiInstance.deleteMod(modId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteModFromTeam

> GeneralError deleteModFromTeam(modId, modTeam)

Remove a team from mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let modTeam = new Kleister.ModTeamParams(); // ModTeamParams | The mod team data to delete
apiInstance.deleteModFromTeam(modId, modTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **modTeam** | [**ModTeamParams**](ModTeamParams.md)| The mod team data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteModFromUser

> GeneralError deleteModFromUser(modId, modUser)

Remove a user from mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let modUser = new Kleister.ModUserParams(); // ModUserParams | The mod user data to delete
apiInstance.deleteModFromUser(modId, modUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **modUser** | [**ModUserParams**](ModUserParams.md)| The mod user data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVersion

> GeneralError deleteVersion(modId, versionId)

Delete a specific version for a mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let versionId = "versionId_example"; // String | A version UUID or slug
apiInstance.deleteVersion(modId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **versionId** | **String**| A version UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteVersionFromBuild

> GeneralError deleteVersionFromBuild(modId, versionId, versionBuild)

Unlink a build from a version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let versionId = "versionId_example"; // String | A version UUID or slug
let versionBuild = new Kleister.VersionBuildParams(); // VersionBuildParams | The build data to unlink from version
apiInstance.deleteVersionFromBuild(modId, versionId, versionBuild).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **versionId** | **String**| A version UUID or slug | 
 **versionBuild** | [**VersionBuildParams**](VersionBuildParams.md)| The build data to unlink from version | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listModTeams

> [TeamMod] listModTeams(modId)

Fetch all teams assigned to mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
apiInstance.listModTeams(modId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 

### Return type

[**[TeamMod]**](TeamMod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listModUsers

> [UserMod] listModUsers(modId)

Fetch all users assigned to mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
apiInstance.listModUsers(modId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 

### Return type

[**[UserMod]**](UserMod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMods

> [Mod] listMods()

Fetch all available mods

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
apiInstance.listMods().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Mod]**](Mod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVersionBuilds

> [BuildVersion] listVersionBuilds(modId, versionId)

Fetch all builds assigned to version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let versionId = "versionId_example"; // String | A version UUID or slug
apiInstance.listVersionBuilds(modId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **versionId** | **String**| A version UUID or slug | 

### Return type

[**[BuildVersion]**](BuildVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listVersions

> [Version] listVersions(modId)

Fetch all available versions for a mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
apiInstance.listVersions(modId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 

### Return type

[**[Version]**](Version.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permitModTeam

> GeneralError permitModTeam(modId, modTeam)

Update team perms for mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let modTeam = new Kleister.ModTeamParams(); // ModTeamParams | The mod team data to update
apiInstance.permitModTeam(modId, modTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **modTeam** | [**ModTeamParams**](ModTeamParams.md)| The mod team data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permitModUser

> GeneralError permitModUser(modId, modUser)

Update user perms for mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let modUser = new Kleister.ModUserParams(); // ModUserParams | The mod user data to update
apiInstance.permitModUser(modId, modUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **modUser** | [**ModUserParams**](ModUserParams.md)| The mod user data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showMod

> Mod showMod(modId)

Fetch a specific mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
apiInstance.showMod(modId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 

### Return type

[**Mod**](Mod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showVersion

> Version showVersion(modId, versionId)

Fetch a specific version for a mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let versionId = "versionId_example"; // String | A version UUID or slug
apiInstance.showVersion(modId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **versionId** | **String**| A version UUID or slug | 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMod

> Mod updateMod(modId, mod)

Update a specific mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let mod = new Kleister.Mod(); // Mod | The mod data to update
apiInstance.updateMod(modId, mod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **mod** | [**Mod**](Mod.md)| The mod data to update | 

### Return type

[**Mod**](Mod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVersion

> Version updateVersion(modId, versionId, version)

Update a specific version for a mod

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ModApi();
let modId = "modId_example"; // String | A mod UUID or slug
let versionId = "versionId_example"; // String | A version UUID or slug
let version = new Kleister.Version(); // Version | The version data to update
apiInstance.updateVersion(modId, versionId, version).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modId** | **String**| A mod UUID or slug | 
 **versionId** | **String**| A version UUID or slug | 
 **version** | [**Version**](Version.md)| The version data to update | 

### Return type

[**Version**](Version.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

