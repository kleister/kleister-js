# Kleister.ForgeApi

All URIs are relative to *http://http:/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendForgeToBuild**](ForgeApi.md#appendForgeToBuild) | **POST** /forge/{forge_id}/builds | Assign a build to a Forge version
[**deleteForgeFromBuild**](ForgeApi.md#deleteForgeFromBuild) | **DELETE** /forge/{forge_id}/builds | Unlink a build from a Forge version
[**listForgeBuilds**](ForgeApi.md#listForgeBuilds) | **GET** /forge/{forge_id}/builds | Fetch the builds assigned to a Forge version
[**listForges**](ForgeApi.md#listForges) | **GET** /forge | Fetch the available Forge versions
[**searchForges**](ForgeApi.md#searchForges) | **GET** /forge/{forge_id} | Search for available Forge versions
[**updateForge**](ForgeApi.md#updateForge) | **PUT** /forge | Update the available Forge versions



## appendForgeToBuild

> [Build] appendForgeToBuild(forgeId, params)

Assign a build to a Forge version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ForgeApi();
let forgeId = "forgeId_example"; // String | A forge UUID or slug
let params = new Kleister.ForgeBuildParams(); // ForgeBuildParams | The build data to append
apiInstance.appendForgeToBuild(forgeId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgeId** | **String**| A forge UUID or slug | 
 **params** | [**ForgeBuildParams**](ForgeBuildParams.md)| The build data to append | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteForgeFromBuild

> [Build] deleteForgeFromBuild(forgeId, params)

Unlink a build from a Forge version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ForgeApi();
let forgeId = "forgeId_example"; // String | A forge UUID or slug
let params = new Kleister.ForgeBuildParams(); // ForgeBuildParams | The build data to unlink
apiInstance.deleteForgeFromBuild(forgeId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgeId** | **String**| A forge UUID or slug | 
 **params** | [**ForgeBuildParams**](ForgeBuildParams.md)| The build data to unlink | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listForgeBuilds

> [Build] listForgeBuilds(forgeId)

Fetch the builds assigned to a Forge version

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ForgeApi();
let forgeId = "forgeId_example"; // String | A forge UUID or slug
apiInstance.listForgeBuilds(forgeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgeId** | **String**| A forge UUID or slug | 

### Return type

[**[Build]**](Build.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listForges

> [Forge] listForges()

Fetch the available Forge versions

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ForgeApi();
apiInstance.listForges().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Forge]**](Forge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchForges

> [Forge] searchForges(forgeId)

Search for available Forge versions

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ForgeApi();
let forgeId = "forgeId_example"; // String | A search token to search Forge versions
apiInstance.searchForges(forgeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgeId** | **String**| A search token to search Forge versions | 

### Return type

[**[Forge]**](Forge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateForge

> Object updateForge()

Update the available Forge versions

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.ForgeApi();
apiInstance.updateForge().then((data) => {
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

