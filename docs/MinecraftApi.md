# Kleister.MinecraftApi

All URIs are relative to *http://http:/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendMinecraftToBuild**](MinecraftApi.md#appendMinecraftToBuild) | **POST** /minecraft/{minecraft_id}/builds | Assign a build to a Minecraft version
[**deleteMinecraftFromBuild**](MinecraftApi.md#deleteMinecraftFromBuild) | **DELETE** /minecraft/{minecraft_id}/builds | Unlink a build from a Minecraft version
[**listMinecraftBuilds**](MinecraftApi.md#listMinecraftBuilds) | **GET** /minecraft/{minecraft_id}/builds | Fetch the builds assigned to a Minecraft version
[**listMinecrafts**](MinecraftApi.md#listMinecrafts) | **GET** /minecraft | Fetch the available Minecraft versions
[**searchMinecrafts**](MinecraftApi.md#searchMinecrafts) | **GET** /minecraft/{minecraft_id} | Search for available Minecraft versions
[**updateMinecraft**](MinecraftApi.md#updateMinecraft) | **PUT** /minecraft | Update the available Minecraft versions



## appendMinecraftToBuild

> [Build] appendMinecraftToBuild(minecraftId, params)

Assign a build to a Minecraft version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.MinecraftApi();
let minecraftId = "minecraftId_example"; // String | A minecraft UUID or slug
let params = new Kleister.MinecraftBuildParams(); // MinecraftBuildParams | The build data to append
apiInstance.appendMinecraftToBuild(minecraftId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minecraftId** | **String**| A minecraft UUID or slug | 
 **params** | [**MinecraftBuildParams**](MinecraftBuildParams.md)| The build data to append | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMinecraftFromBuild

> [Build] deleteMinecraftFromBuild(minecraftId, params)

Unlink a build from a Minecraft version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.MinecraftApi();
let minecraftId = "minecraftId_example"; // String | A minecraft UUID or slug
let params = new Kleister.MinecraftBuildParams(); // MinecraftBuildParams | The build data to unlink
apiInstance.deleteMinecraftFromBuild(minecraftId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minecraftId** | **String**| A minecraft UUID or slug | 
 **params** | [**MinecraftBuildParams**](MinecraftBuildParams.md)| The build data to unlink | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listMinecraftBuilds

> [Build] listMinecraftBuilds(minecraftId)

Fetch the builds assigned to a Minecraft version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.MinecraftApi();
let minecraftId = "minecraftId_example"; // String | A minecraft UUID or slug
apiInstance.listMinecraftBuilds(minecraftId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minecraftId** | **String**| A minecraft UUID or slug | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMinecrafts

> [Minecraft] listMinecrafts()

Fetch the available Minecraft versions

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.MinecraftApi();
apiInstance.listMinecrafts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Minecraft]**](Minecraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchMinecrafts

> [Minecraft] searchMinecrafts(minecraftId)

Search for available Minecraft versions

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.MinecraftApi();
let minecraftId = "minecraftId_example"; // String | A search token to search Minecraft versions
apiInstance.searchMinecrafts(minecraftId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minecraftId** | **String**| A search token to search Minecraft versions | 

### Return type

[**[Minecraft]**](Minecraft.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMinecraft

> Object updateMinecraft()

Update the available Minecraft versions

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.MinecraftApi();
apiInstance.updateMinecraft().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

