# Mod

Model to represent mod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**avatar** | [**ModAvatar**](ModAvatar.md) |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**side** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**author** | **string** |  | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**donate** | **string** |  | [optional] [default to undefined]
**_public** | **boolean** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [readonly] [default to undefined]
**updated_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Mod } from 'kleisterjs';

const instance: Mod = {
    id,
    avatar,
    slug,
    name,
    side,
    description,
    author,
    website,
    donate,
    _public,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
