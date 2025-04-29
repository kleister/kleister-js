# GroupPack

Model to represent group pack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **string** |  | [default to undefined]
**group** | [**Group**](Group.md) |  | [optional] [default to undefined]
**pack_id** | **string** |  | [default to undefined]
**pack** | [**Pack**](Pack.md) |  | [optional] [default to undefined]
**perm** | **string** |  | [optional] [default to PermEnum_User]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { GroupPack } from 'kleisterjs';

const instance: GroupPack = {
    group_id,
    group,
    pack_id,
    pack,
    perm,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
