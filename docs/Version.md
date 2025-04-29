# Version

Model to represent version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**file** | [**VersionFile**](VersionFile.md) |  | [optional] [default to undefined]
**mod** | [**Mod**](Mod.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**_public** | **boolean** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Version } from 'kleisterjs';

const instance: Version = {
    id,
    file,
    mod,
    name,
    _public,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
