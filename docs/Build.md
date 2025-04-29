# Build

Model to represent build

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**pack** | [**Pack**](Pack.md) |  | [optional] [default to undefined]
**minecraft_id** | **string** |  | [optional] [default to undefined]
**minecraft** | [**Minecraft**](Minecraft.md) |  | [optional] [default to undefined]
**forge_id** | **string** |  | [optional] [default to undefined]
**forge** | [**Forge**](Forge.md) |  | [optional] [default to undefined]
**neoforge_id** | **string** |  | [optional] [default to undefined]
**neoforge** | [**Neoforge**](Neoforge.md) |  | [optional] [default to undefined]
**quilt_id** | **string** |  | [optional] [default to undefined]
**quilt** | [**Quilt**](Quilt.md) |  | [optional] [default to undefined]
**fabric_id** | **string** |  | [optional] [default to undefined]
**fabric** | [**Fabric**](Fabric.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**java** | **string** |  | [optional] [default to undefined]
**memory** | **string** |  | [optional] [default to undefined]
**latest** | **boolean** |  | [optional] [default to undefined]
**recommended** | **boolean** |  | [optional] [default to undefined]
**_public** | **boolean** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Build } from 'kleisterjs';

const instance: Build = {
    id,
    pack,
    minecraft_id,
    minecraft,
    forge_id,
    forge,
    neoforge_id,
    neoforge,
    quilt_id,
    quilt,
    fabric_id,
    fabric,
    name,
    java,
    memory,
    latest,
    recommended,
    _public,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
