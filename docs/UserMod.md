# UserMod

Model to represent user mod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **string** |  | [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**mod_id** | **string** |  | [default to undefined]
**mod** | [**Mod**](Mod.md) |  | [optional] [default to undefined]
**perm** | **string** |  | [optional] [default to PermEnum_User]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { UserMod } from 'kleisterjs';

const instance: UserMod = {
    user_id,
    user,
    mod_id,
    mod,
    perm,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
