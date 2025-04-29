# GroupMod

Model to represent group mod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **string** |  | [default to undefined]
**group** | [**Group**](Group.md) |  | [optional] [default to undefined]
**mod_id** | **string** |  | [default to undefined]
**mod** | [**Mod**](Mod.md) |  | [optional] [default to undefined]
**perm** | **string** |  | [optional] [default to PermEnum_User]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { GroupMod } from 'kleisterjs';

const instance: GroupMod = {
    group_id,
    group,
    mod_id,
    mod,
    perm,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
