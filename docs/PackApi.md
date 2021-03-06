# Kleister.PackApi

All URIs are relative to *http://try.kleister.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendBuildToVersion**](PackApi.md#appendBuildToVersion) | **POST** /packs/{pack_id}/builds/{build_id}/versions | Assign a version to a build
[**appendPackToTeam**](PackApi.md#appendPackToTeam) | **POST** /packs/{pack_id}/teams | Assign a team to pack
[**appendPackToUser**](PackApi.md#appendPackToUser) | **POST** /packs/{pack_id}/users | Assign a user to pack
[**createBuild**](PackApi.md#createBuild) | **POST** /packs/{pack_id}/builds | Create a new build for a pack
[**createPack**](PackApi.md#createPack) | **POST** /packs | Create a new pack
[**deleteBuild**](PackApi.md#deleteBuild) | **DELETE** /packs/{pack_id}/builds/{build_id} | Delete a specific build for a pack
[**deleteBuildFromVersion**](PackApi.md#deleteBuildFromVersion) | **DELETE** /packs/{pack_id}/builds/{build_id}/versions | Unlink a version from a build
[**deletePack**](PackApi.md#deletePack) | **DELETE** /packs/{pack_id} | Delete a specific pack
[**deletePackFromTeam**](PackApi.md#deletePackFromTeam) | **DELETE** /packs/{pack_id}/teams | Remove a team from pack
[**deletePackFromUser**](PackApi.md#deletePackFromUser) | **DELETE** /packs/{pack_id}/users | Remove a user from pack
[**listBuildVersions**](PackApi.md#listBuildVersions) | **GET** /packs/{pack_id}/builds/{build_id}/versions | Fetch all versions assigned to build
[**listBuilds**](PackApi.md#listBuilds) | **GET** /packs/{pack_id}/builds | Fetch all available builds for a pack
[**listPackTeams**](PackApi.md#listPackTeams) | **GET** /packs/{pack_id}/teams | Fetch all teams assigned to pack
[**listPackUsers**](PackApi.md#listPackUsers) | **GET** /packs/{pack_id}/users | Fetch all users assigned to pack
[**listPacks**](PackApi.md#listPacks) | **GET** /packs | Fetch all available packs
[**permitPackTeam**](PackApi.md#permitPackTeam) | **PUT** /packs/{pack_id}/teams | Update team perms for pack
[**permitPackUser**](PackApi.md#permitPackUser) | **PUT** /packs/{pack_id}/users | Update user perms for pack
[**showBuild**](PackApi.md#showBuild) | **GET** /packs/{pack_id}/builds/{build_id} | Fetch a specific build for a pack
[**showPack**](PackApi.md#showPack) | **GET** /packs/{pack_id} | Fetch a specific pack
[**updateBuild**](PackApi.md#updateBuild) | **PUT** /packs/{pack_id}/builds/{build_id} | Update a specific build for a pack
[**updatePack**](PackApi.md#updatePack) | **PUT** /packs/{pack_id} | Update a specific pack



## appendBuildToVersion

> GeneralError appendBuildToVersion(packId, buildId, buildVersion)

Assign a version to a build

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let buildId = "buildId_example"; // String | A build UUID or slug
let buildVersion = new Kleister.BuildVersionParams(); // BuildVersionParams | The version data to append to build
apiInstance.appendBuildToVersion(packId, buildId, buildVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **buildId** | **String**| A build UUID or slug | 
 **buildVersion** | [**BuildVersionParams**](BuildVersionParams.md)| The version data to append to build | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendPackToTeam

> GeneralError appendPackToTeam(packId, packTeam)

Assign a team to pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let packTeam = new Kleister.PackTeamParams(); // PackTeamParams | The pack team data to assign
apiInstance.appendPackToTeam(packId, packTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **packTeam** | [**PackTeamParams**](PackTeamParams.md)| The pack team data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendPackToUser

> GeneralError appendPackToUser(packId, packUser)

Assign a user to pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let packUser = new Kleister.PackUserParams(); // PackUserParams | The pack user data to assign
apiInstance.appendPackToUser(packId, packUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **packUser** | [**PackUserParams**](PackUserParams.md)| The pack user data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBuild

> Build createBuild(packId, build)

Create a new build for a pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let build = new Kleister.Build(); // Build | The build data to create
apiInstance.createBuild(packId, build).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **build** | [**Build**](Build.md)| The build data to create | 

### Return type

[**Build**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPack

> Pack createPack(pack)

Create a new pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let pack = new Kleister.Pack(); // Pack | The pack data to create
apiInstance.createPack(pack).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pack** | [**Pack**](Pack.md)| The pack data to create | 

### Return type

[**Pack**](Pack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBuild

> GeneralError deleteBuild(packId, buildId)

Delete a specific build for a pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let buildId = "buildId_example"; // String | A build UUID or slug
apiInstance.deleteBuild(packId, buildId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **buildId** | **String**| A build UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteBuildFromVersion

> GeneralError deleteBuildFromVersion(packId, buildId, buildVersion)

Unlink a version from a build

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let buildId = "buildId_example"; // String | A build UUID or slug
let buildVersion = new Kleister.BuildVersionParams(); // BuildVersionParams | The version data to unlink from build
apiInstance.deleteBuildFromVersion(packId, buildId, buildVersion).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **buildId** | **String**| A build UUID or slug | 
 **buildVersion** | [**BuildVersionParams**](BuildVersionParams.md)| The version data to unlink from build | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePack

> GeneralError deletePack(packId)

Delete a specific pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
apiInstance.deletePack(packId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePackFromTeam

> GeneralError deletePackFromTeam(packId, packTeam)

Remove a team from pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let packTeam = new Kleister.PackTeamParams(); // PackTeamParams | The pack team data to delete
apiInstance.deletePackFromTeam(packId, packTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **packTeam** | [**PackTeamParams**](PackTeamParams.md)| The pack team data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePackFromUser

> GeneralError deletePackFromUser(packId, packUser)

Remove a user from pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let packUser = new Kleister.PackUserParams(); // PackUserParams | The pack user data to delete
apiInstance.deletePackFromUser(packId, packUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **packUser** | [**PackUserParams**](PackUserParams.md)| The pack user data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listBuildVersions

> [BuildVersion] listBuildVersions(packId, buildId)

Fetch all versions assigned to build

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let buildId = "buildId_example"; // String | A build UUID or slug
apiInstance.listBuildVersions(packId, buildId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **buildId** | **String**| A build UUID or slug | 

### Return type

[**[BuildVersion]**](BuildVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBuilds

> [Build] listBuilds(packId)

Fetch all available builds for a pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
apiInstance.listBuilds(packId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPackTeams

> [TeamPack] listPackTeams(packId)

Fetch all teams assigned to pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
apiInstance.listPackTeams(packId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 

### Return type

[**[TeamPack]**](TeamPack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPackUsers

> [UserPack] listPackUsers(packId)

Fetch all users assigned to pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
apiInstance.listPackUsers(packId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 

### Return type

[**[UserPack]**](UserPack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPacks

> [Pack] listPacks()

Fetch all available packs

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
apiInstance.listPacks().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Pack]**](Pack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permitPackTeam

> GeneralError permitPackTeam(packId, packTeam)

Update team perms for pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let packTeam = new Kleister.PackTeamParams(); // PackTeamParams | The pack team data to update
apiInstance.permitPackTeam(packId, packTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **packTeam** | [**PackTeamParams**](PackTeamParams.md)| The pack team data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permitPackUser

> GeneralError permitPackUser(packId, packUser)

Update user perms for pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let packUser = new Kleister.PackUserParams(); // PackUserParams | The pack user data to update
apiInstance.permitPackUser(packId, packUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **packUser** | [**PackUserParams**](PackUserParams.md)| The pack user data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showBuild

> Build showBuild(packId, buildId)

Fetch a specific build for a pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let buildId = "buildId_example"; // String | A build UUID or slug
apiInstance.showBuild(packId, buildId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **buildId** | **String**| A build UUID or slug | 

### Return type

[**Build**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showPack

> Pack showPack(packId)

Fetch a specific pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
apiInstance.showPack(packId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 

### Return type

[**Pack**](Pack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBuild

> Build updateBuild(packId, buildId, build)

Update a specific build for a pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let buildId = "buildId_example"; // String | A build UUID or slug
let build = new Kleister.Build(); // Build | The build data to update
apiInstance.updateBuild(packId, buildId, build).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **buildId** | **String**| A build UUID or slug | 
 **build** | [**Build**](Build.md)| The build data to update | 

### Return type

[**Build**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePack

> Pack updatePack(packId, pack)

Update a specific pack

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.PackApi();
let packId = "packId_example"; // String | A pack UUID or slug
let pack = new Kleister.Pack(); // Pack | The pack data to update
apiInstance.updatePack(packId, pack).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packId** | **String**| A pack UUID or slug | 
 **pack** | [**Pack**](Pack.md)| The pack data to update | 

### Return type

[**Pack**](Pack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

