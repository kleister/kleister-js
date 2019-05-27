# Kleister.TeamApi

All URIs are relative to *http://http:/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appendTeamToMod**](TeamApi.md#appendTeamToMod) | **POST** /teams/{team_id}/mods | Assign a mod to team
[**appendTeamToPack**](TeamApi.md#appendTeamToPack) | **POST** /teams/{team_id}/packs | Assign a pack to team
[**appendTeamToUser**](TeamApi.md#appendTeamToUser) | **POST** /teams/{team_id}/users | Assign a user to team
[**createTeam**](TeamApi.md#createTeam) | **POST** /teams | Create a new team
[**deleteTeam**](TeamApi.md#deleteTeam) | **DELETE** /teams/{team_id} | Delete a specific team
[**deleteTeamFromMod**](TeamApi.md#deleteTeamFromMod) | **DELETE** /teams/{team_id}/mods | Remove a mod from team
[**deleteTeamFromPack**](TeamApi.md#deleteTeamFromPack) | **DELETE** /teams/{team_id}/packs | Remove a pack from team
[**deleteTeamFromUser**](TeamApi.md#deleteTeamFromUser) | **DELETE** /teams/{team_id}/users | Remove a user from team
[**listTeamMods**](TeamApi.md#listTeamMods) | **GET** /teams/{team_id}/mods | Fetch all mods assigned to team
[**listTeamPacks**](TeamApi.md#listTeamPacks) | **GET** /teams/{team_id}/packs | Fetch all packs assigned to team
[**listTeamUsers**](TeamApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all users assigned to team
[**listTeams**](TeamApi.md#listTeams) | **GET** /teams | Fetch all available teams
[**permitTeamMod**](TeamApi.md#permitTeamMod) | **PUT** /teams/{team_id}/mods | Update mod perms for team
[**permitTeamPack**](TeamApi.md#permitTeamPack) | **PUT** /teams/{team_id}/packs | Update pack perms for team
[**permitTeamUser**](TeamApi.md#permitTeamUser) | **PUT** /teams/{team_id}/users | Update user perms for team
[**showTeam**](TeamApi.md#showTeam) | **GET** /teams/{team_id} | Fetch a specific team
[**updateTeam**](TeamApi.md#updateTeam) | **PUT** /teams/{team_id} | Update a specific team



## appendTeamToMod

> Object appendTeamToMod(teamId, params)

Assign a mod to team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamModParams(); // TeamModParams | The team mod data to assign
apiInstance.appendTeamToMod(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamModParams**](TeamModParams.md)| The team mod data to assign | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendTeamToPack

> Object appendTeamToPack(teamId, params)

Assign a pack to team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamPackParams(); // TeamPackParams | The team pack data to assign
apiInstance.appendTeamToPack(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamPackParams**](TeamPackParams.md)| The team pack data to assign | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## appendTeamToUser

> Object appendTeamToUser(teamId, params)

Assign a user to team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamUserParams(); // TeamUserParams | The team user data to assign
apiInstance.appendTeamToUser(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamUserParams**](TeamUserParams.md)| The team user data to assign | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createTeam

> Team createTeam(params)

Create a new team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let params = new Kleister.Team(); // Team | The team data to create
apiInstance.createTeam(params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**Team**](Team.md)| The team data to create | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeam

> Object deleteTeam(teamId)

Delete a specific team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.deleteTeam(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTeamFromMod

> Object deleteTeamFromMod(teamId, params)

Remove a mod from team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamModParams(); // TeamModParams | The team mod data to delete
apiInstance.deleteTeamFromMod(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamModParams**](TeamModParams.md)| The team mod data to delete | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeamFromPack

> Object deleteTeamFromPack(teamId, params)

Remove a pack from team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamPackParams(); // TeamPackParams | The team pack data to delete
apiInstance.deleteTeamFromPack(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamPackParams**](TeamPackParams.md)| The team pack data to delete | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeamFromUser

> Object deleteTeamFromUser(teamId, params)

Remove a user from team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamUserParams(); // TeamUserParams | The team user data to delete
apiInstance.deleteTeamFromUser(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamUserParams**](TeamUserParams.md)| The team user data to delete | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listTeamMods

> [TeamMod] listTeamMods(teamId)

Fetch all mods assigned to team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.listTeamMods(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**[TeamMod]**](TeamMod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeamPacks

> [TeamPack] listTeamPacks(teamId)

Fetch all packs assigned to team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.listTeamPacks(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**[TeamPack]**](TeamPack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeamUsers

> [TeamUser] listTeamUsers(teamId)

Fetch all users assigned to team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.listTeamUsers(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**[TeamUser]**](TeamUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeams

> [Team] listTeams()

Fetch all available teams

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
apiInstance.listTeams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permitTeamMod

> Object permitTeamMod(teamId, params)

Update mod perms for team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamModParams(); // TeamModParams | The team mod data to update
apiInstance.permitTeamMod(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamModParams**](TeamModParams.md)| The team mod data to update | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permitTeamPack

> Object permitTeamPack(teamId, params)

Update pack perms for team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamPackParams(); // TeamPackParams | The team pack data to update
apiInstance.permitTeamPack(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamPackParams**](TeamPackParams.md)| The team pack data to update | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permitTeamUser

> Object permitTeamUser(teamId, params)

Update user perms for team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.TeamUserParams(); // TeamUserParams | The team user data to update
apiInstance.permitTeamUser(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**TeamUserParams**](TeamUserParams.md)| The team user data to update | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showTeam

> Team showTeam(teamId)

Fetch a specific team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
apiInstance.showTeam(teamId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeam

> Team updateTeam(teamId, params)

Update a specific team

### Example

```javascript
import Kleister from 'kleister';

let apiInstance = new Kleister.TeamApi();
let teamId = "teamId_example"; // String | A team UUID or slug
let params = new Kleister.Team(); // Team | The team data to update
apiInstance.updateTeam(teamId, params).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| A team UUID or slug | 
 **params** | [**Team**](Team.md)| The team data to update | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

