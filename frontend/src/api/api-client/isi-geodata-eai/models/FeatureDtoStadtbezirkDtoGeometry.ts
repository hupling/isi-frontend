/* tslint:disable */
/* eslint-disable */
/**
 * ISI GEODATA EAI
 * ISI GEODATA EAI - Service zum Abfragen von Geoinformationen
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: unbekannt@muenchen.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    MultiPolygonGeometryDto,
    instanceOfMultiPolygonGeometryDto,
    MultiPolygonGeometryDtoFromJSON,
    MultiPolygonGeometryDtoFromJSONTyped,
    MultiPolygonGeometryDtoToJSON,
} from './MultiPolygonGeometryDto';
import {
    PointGeometryDto,
    instanceOfPointGeometryDto,
    PointGeometryDtoFromJSON,
    PointGeometryDtoFromJSONTyped,
    PointGeometryDtoToJSON,
} from './PointGeometryDto';

/**
 * @type FeatureDtoStadtbezirkDtoGeometry
 * 
 * @export
 */
export type FeatureDtoStadtbezirkDtoGeometry = { type: 'MultiPolygon' } & MultiPolygonGeometryDto | { type: 'MultiPolygonGeometryDto' } & MultiPolygonGeometryDto | { type: 'Point' } & PointGeometryDto | { type: 'PointGeometryDto' } & PointGeometryDto;

export function FeatureDtoStadtbezirkDtoGeometryFromJSON(json: any): FeatureDtoStadtbezirkDtoGeometry {
    return FeatureDtoStadtbezirkDtoGeometryFromJSONTyped(json, false);
}

export function FeatureDtoStadtbezirkDtoGeometryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureDtoStadtbezirkDtoGeometry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'MultiPolygon':
            return {...MultiPolygonGeometryDtoFromJSONTyped(json, true), type: 'MultiPolygon'};
        case 'MultiPolygonGeometryDto':
            return {...MultiPolygonGeometryDtoFromJSONTyped(json, true), type: 'MultiPolygonGeometryDto'};
        case 'Point':
            return {...PointGeometryDtoFromJSONTyped(json, true), type: 'Point'};
        case 'PointGeometryDto':
            return {...PointGeometryDtoFromJSONTyped(json, true), type: 'PointGeometryDto'};
        default:
            throw new Error(`No variant of FeatureDtoStadtbezirkDtoGeometry exists with 'type=${json['type']}'`);
    }
}

export function FeatureDtoStadtbezirkDtoGeometryToJSON(value?: FeatureDtoStadtbezirkDtoGeometry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'MultiPolygon':
            return MultiPolygonGeometryDtoToJSON(value);
        case 'MultiPolygonGeometryDto':
            return MultiPolygonGeometryDtoToJSON(value);
        case 'Point':
            return PointGeometryDtoToJSON(value);
        case 'PointGeometryDto':
            return PointGeometryDtoToJSON(value);
        default:
            throw new Error(`No variant of FeatureDtoStadtbezirkDtoGeometry exists with 'type=${value['type']}'`);
    }

}

