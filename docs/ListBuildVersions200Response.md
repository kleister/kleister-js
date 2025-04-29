# ListBuildVersions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** |  | [default to undefined]
**limit** | **number** |  | [default to undefined]
**offset** | **number** |  | [default to undefined]
**pack** | [**Pack**](Pack.md) |  | [optional] [default to undefined]
**build** | [**Build**](Build.md) |  | [optional] [default to undefined]
**versions** | [**Array&lt;BuildVersion&gt;**](BuildVersion.md) |  | [default to undefined]

## Example

```typescript
import { ListBuildVersions200Response } from 'kleisterjs';

const instance: ListBuildVersions200Response = {
    total,
    limit,
    offset,
    pack,
    build,
    versions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
