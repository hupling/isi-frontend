/* tslint:disable */
/* eslint-disable */
/**
 * ISI Backend API
 * ISI Backend - Service für das Informationssystem für soziale Infrastrukturplanung
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: noreply@mail.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GemarkungDto } from './GemarkungDto';
import {
    GemarkungDtoFromJSON,
    GemarkungDtoFromJSONTyped,
    GemarkungDtoToJSON,
} from './GemarkungDto';
import type { MultiPolygonGeometryDto } from './MultiPolygonGeometryDto';
import {
    MultiPolygonGeometryDtoFromJSON,
    MultiPolygonGeometryDtoFromJSONTyped,
    MultiPolygonGeometryDtoToJSON,
} from './MultiPolygonGeometryDto';
import type { StadtbezirkDto } from './StadtbezirkDto';
import {
    StadtbezirkDtoFromJSON,
    StadtbezirkDtoFromJSONTyped,
    StadtbezirkDtoToJSON,
} from './StadtbezirkDto';

/**
 * 
 * @export
 * @interface VerortungMultiPolygonDto
 */
export interface VerortungMultiPolygonDto {
    /**
     * 
     * @type {Set<StadtbezirkDto>}
     * @memberof VerortungMultiPolygonDto
     */
    stadtbezirke: Set<StadtbezirkDto>;
    /**
     * 
     * @type {Set<GemarkungDto>}
     * @memberof VerortungMultiPolygonDto
     */
    gemarkungen: Set<GemarkungDto>;
    /**
     * 
     * @type {MultiPolygonGeometryDto}
     * @memberof VerortungMultiPolygonDto
     */
    multiPolygon: MultiPolygonGeometryDto;
}

/**
 * Check if a given object implements the VerortungMultiPolygonDto interface.
 */
export function instanceOfVerortungMultiPolygonDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stadtbezirke" in value;
    isInstance = isInstance && "gemarkungen" in value;
    isInstance = isInstance && "multiPolygon" in value;

    return isInstance;
}

export function VerortungMultiPolygonDtoFromJSON(json: any): VerortungMultiPolygonDto {
    return VerortungMultiPolygonDtoFromJSONTyped(json, false);
}

export function VerortungMultiPolygonDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerortungMultiPolygonDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stadtbezirke': (new Set((json['stadtbezirke'] as Array<any>).map(StadtbezirkDtoFromJSON))),
        'gemarkungen': (new Set((json['gemarkungen'] as Array<any>).map(GemarkungDtoFromJSON))),
        'multiPolygon': MultiPolygonGeometryDtoFromJSON(json['multiPolygon']),
    };
}

export function VerortungMultiPolygonDtoToJSON(value?: VerortungMultiPolygonDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stadtbezirke': (Array.from(value.stadtbezirke as Set<any>).map(StadtbezirkDtoToJSON)),
        'gemarkungen': (Array.from(value.gemarkungen as Set<any>).map(GemarkungDtoToJSON)),
        'multiPolygon': MultiPolygonGeometryDtoToJSON(value.multiPolygon),
    };
}

