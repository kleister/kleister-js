/* tslint:disable */
/* eslint-disable */
/**
 * Kleister OpenAPI
 * API definition for Kleister, manage mod packs for Minecraft
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TeamUserParams
 */
export interface TeamUserParams {
    /**
     * 
     * @type {string}
     * @memberof TeamUserParams
     */
    'user': string;
    /**
     * 
     * @type {string}
     * @memberof TeamUserParams
     */
    'perm': TeamUserParamsPermEnum;
}

export const TeamUserParamsPermEnum = {
    User: 'user',
    Admin: 'admin',
    Owner: 'owner'
} as const;

export type TeamUserParamsPermEnum = typeof TeamUserParamsPermEnum[keyof typeof TeamUserParamsPermEnum];

