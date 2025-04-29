# ListVersionBuilds200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** |  | [default to undefined]
**limit** | **number** |  | [default to undefined]
**offset** | **number** |  | [default to undefined]
**mod** | [**Mod**](Mod.md) |  | [optional] [default to undefined]
**version** | [**Version**](Version.md) |  | [optional] [default to undefined]
**builds** | [**Array&lt;BuildVersion&gt;**](BuildVersion.md) |  | [default to undefined]

## Example

```typescript
import { ListVersionBuilds200Response } from 'kleisterjs';

const instance: ListVersionBuilds200Response = {
    total,
    limit,
    offset,
    mod,
    version,
    builds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
