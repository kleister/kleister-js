# BuildVersion

Model to represent build version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_id** | **string** |  | [default to undefined]
**build** | [**Build**](Build.md) |  | [optional] [default to undefined]
**version_id** | **string** |  | [default to undefined]
**version** | [**Version**](Version.md) |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { BuildVersion } from 'kleisterjs';

const instance: BuildVersion = {
    build_id,
    build,
    version_id,
    version,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
