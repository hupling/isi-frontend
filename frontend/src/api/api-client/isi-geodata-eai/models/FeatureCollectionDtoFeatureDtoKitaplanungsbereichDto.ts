/* tslint:disable */
/* eslint-disable */
/**
 * ISI GEODATA EAI
 * ISI GEODATA EAI - Service zum Abfragen von Geoinformationen
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: unbekannt@muenchen.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FeatureDtoKitaplanungsbereichDto } from './FeatureDtoKitaplanungsbereichDto';
import {
    FeatureDtoKitaplanungsbereichDtoFromJSON,
    FeatureDtoKitaplanungsbereichDtoFromJSONTyped,
    FeatureDtoKitaplanungsbereichDtoToJSON,
} from './FeatureDtoKitaplanungsbereichDto';

/**
 * 
 * @export
 * @interface FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto
 */
export interface FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto {
    /**
     * 
     * @type {string}
     * @memberof FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto
     */
    type?: string;
    /**
     * 
     * @type {Array<FeatureDtoKitaplanungsbereichDto>}
     * @memberof FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto
     */
    features?: Array<FeatureDtoKitaplanungsbereichDto>;
}

/**
 * Check if a given object implements the FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto interface.
 */
export function instanceOfFeatureCollectionDtoFeatureDtoKitaplanungsbereichDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoFromJSON(json: any): FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto {
    return FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoFromJSONTyped(json, false);
}

export function FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(FeatureDtoKitaplanungsbereichDtoFromJSON)),
    };
}

export function FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoToJSON(value?: FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(FeatureDtoKitaplanungsbereichDtoToJSON)),
    };
}

