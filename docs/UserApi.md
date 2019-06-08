# Kleister.UserApi

All URIs are relative to *http://try.kleister.tech/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendUserToMod**](UserApi.md#appendUserToMod) | **POST** /users/{user_id}/mods | Assign a mod to user
[**appendUserToPack**](UserApi.md#appendUserToPack) | **POST** /users/{user_id}/packs | Assign a pack to user
[**appendUserToTeam**](UserApi.md#appendUserToTeam) | **POST** /users/{user_id}/teams | Assign a team to user
[**createUser**](UserApi.md#createUser) | **POST** /users | Create a new user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /users/{user_id} | Delete a specific user
[**deleteUserFromMod**](UserApi.md#deleteUserFromMod) | **DELETE** /users/{user_id}/mods | Remove a mod from user
[**deleteUserFromPack**](UserApi.md#deleteUserFromPack) | **DELETE** /users/{user_id}/packs | Remove a pack from user
[**deleteUserFromTeam**](UserApi.md#deleteUserFromTeam) | **DELETE** /users/{user_id}/teams | Remove a team from user
[**listUserMods**](UserApi.md#listUserMods) | **GET** /users/{user_id}/mods | Fetch all mods assigned to user
[**listUserPacks**](UserApi.md#listUserPacks) | **GET** /users/{user_id}/packs | Fetch all packs assigned to user
[**listUserTeams**](UserApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all teams assigned to user
[**listUsers**](UserApi.md#listUsers) | **GET** /users | Fetch all available users
[**permitUserMod**](UserApi.md#permitUserMod) | **PUT** /users/{user_id}/mods | Update mod perms for user
[**permitUserPack**](UserApi.md#permitUserPack) | **PUT** /users/{user_id}/packs | Update pack perms for user
[**permitUserTeam**](UserApi.md#permitUserTeam) | **PUT** /users/{user_id}/teams | Update team perms for user
[**showUser**](UserApi.md#showUser) | **GET** /users/{user_id} | Fetch a specific user
[**updateUser**](UserApi.md#updateUser) | **PUT** /users/{user_id} | Update a specific user



## appendUserToMod

> GeneralError appendUserToMod(userId, userMod)

Assign a mod to user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userMod = new Kleister.UserModParams(); // UserModParams | The user mod data to assign
apiInstance.appendUserToMod(userId, userMod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userMod** | [**UserModParams**](UserModParams.md)| The user mod data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendUserToPack

> GeneralError appendUserToPack(userId, userPack)

Assign a pack to user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userPack = new Kleister.UserPackParams(); // UserPackParams | The user pack data to assign
apiInstance.appendUserToPack(userId, userPack).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userPack** | [**UserPackParams**](UserPackParams.md)| The user pack data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendUserToTeam

> GeneralError appendUserToTeam(userId, userTeam)

Assign a team to user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userTeam = new Kleister.UserTeamParams(); // UserTeamParams | The user team data to assign
apiInstance.appendUserToTeam(userId, userTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userTeam** | [**UserTeamParams**](UserTeamParams.md)| The user team data to assign | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUser

> User createUser(user)

Create a new user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let user = new Kleister.User(); // User | The user data to create
apiInstance.createUser(user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| The user data to create | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> GeneralError deleteUser(userId)

Delete a specific user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.deleteUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserFromMod

> GeneralError deleteUserFromMod(userId, userMod)

Remove a mod from user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userMod = new Kleister.UserModParams(); // UserModParams | The user mod data to delete
apiInstance.deleteUserFromMod(userId, userMod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userMod** | [**UserModParams**](UserModParams.md)| The user mod data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserFromPack

> GeneralError deleteUserFromPack(userId, userPack)

Remove a pack from user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userPack = new Kleister.UserPackParams(); // UserPackParams | The user pack data to delete
apiInstance.deleteUserFromPack(userId, userPack).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userPack** | [**UserPackParams**](UserPackParams.md)| The user pack data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserFromTeam

> GeneralError deleteUserFromTeam(userId, userTeam)

Remove a team from user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userTeam = new Kleister.UserTeamParams(); // UserTeamParams | The user team data to delete
apiInstance.deleteUserFromTeam(userId, userTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userTeam** | [**UserTeamParams**](UserTeamParams.md)| The user team data to delete | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listUserMods

> [UserMod] listUserMods(userId)

Fetch all mods assigned to user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.listUserMods(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**[UserMod]**](UserMod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserPacks

> [UserPack] listUserPacks(userId)

Fetch all packs assigned to user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.listUserPacks(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**[UserPack]**](UserPack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserTeams

> [TeamUser] listUserTeams(userId)

Fetch all teams assigned to user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.listUserTeams(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**[TeamUser]**](TeamUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> [User] listUsers()

Fetch all available users

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
apiInstance.listUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permitUserMod

> GeneralError permitUserMod(userId, userMod)

Update mod perms for user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userMod = new Kleister.UserModParams(); // UserModParams | The user mod data to update
apiInstance.permitUserMod(userId, userMod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userMod** | [**UserModParams**](UserModParams.md)| The user mod data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permitUserPack

> GeneralError permitUserPack(userId, userPack)

Update pack perms for user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userPack = new Kleister.UserPackParams(); // UserPackParams | The user pack data to update
apiInstance.permitUserPack(userId, userPack).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userPack** | [**UserPackParams**](UserPackParams.md)| The user pack data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permitUserTeam

> GeneralError permitUserTeam(userId, userTeam)

Update team perms for user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let userTeam = new Kleister.UserTeamParams(); // UserTeamParams | The user team data to update
apiInstance.permitUserTeam(userId, userTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **userTeam** | [**UserTeamParams**](UserTeamParams.md)| The user team data to update | 

### Return type

[**GeneralError**](GeneralError.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showUser

> User showUser(userId)

Fetch a specific user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
apiInstance.showUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> User updateUser(userId, user)

Update a specific user

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.UserApi();
let userId = "userId_example"; // String | A user UUID or slug
let user = new Kleister.User(); // User | The user data to update
apiInstance.updateUser(userId, user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| A user UUID or slug | 
 **user** | [**User**](User.md)| The user data to update | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

