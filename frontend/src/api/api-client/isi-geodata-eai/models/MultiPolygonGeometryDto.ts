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
import type { GeometryDto } from './GeometryDto';
import {
    GeometryDtoFromJSON,
    GeometryDtoFromJSONTyped,
    GeometryDtoToJSON,
} from './GeometryDto';

import {
} from './';

/**
 * Die GEOJSON-Repräsentation des Multipolygons.
 * @export
 * @interface MultiPolygonGeometryDto
 */
export interface MultiPolygonGeometryDto extends GeometryDto {
    /**
     * Die Koordinaten im Standard EPSG:4326 (WGS84) als lineare Ringe. Die erste Listendimension beinhaltet die einzelnen Polygone. Die zweite Listendimension beinhaltet die linearen Ringe des Polygons. Der erste lineare Ring entspricht der äußeren Hülle des Polygons. Die folgenden linearen Ringe repräsentieren die Löcher im Polygon. Die dritte Listendimension beinhaltet die Punktkoordinaten im Standard EPSG:4326 (WGS84). Die vierte Listendimension stellt eine Punktkoordinate dar. Die durch die Liste repräsentierte Punktkoordinate muss der Länge 2 entsprechen und somit einen X und einen Y-Abschnitt besitzen. Jeder lineare Ring wird als eine Reihe von Punkten dargestellt. Der erste Punkt eines jeden Rings ist immer derselbe wie der letzte Punkt. Jeder Punkt in einem Ring wird als Zahlenfeld dargestellt. Äußere Ringe sind als Polygonhülle im Uhrzeigersinn orientiert, während Löcher gegen den Uhrzeigersinn orientiert sind. Ringe können sich an einem Scheitelpunkt berühren oder sich selbst an einem Scheitelpunkt berühren, aber es sollte keine anderen Schnittpunkte geben. Die von den Diensten zurückgegebenen Polygone sind topologisch einfach. 
     * @type {Array<Array<Array<Array<number>>>>}
     * @memberof MultiPolygonGeometryDto
     */
    coordinates?: Array<Array<Array<Array<number>>>>;
}

/**
 * Check if a given object implements the MultiPolygonGeometryDto interface.
 */
export function instanceOfMultiPolygonGeometryDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MultiPolygonGeometryDtoFromJSON(json: any): MultiPolygonGeometryDto {
    return MultiPolygonGeometryDtoFromJSONTyped(json, false);
}

export function MultiPolygonGeometryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiPolygonGeometryDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
    }
    return {
        ...GeometryDtoFromJSONTyped(json, ignoreDiscriminator),
        'coordinates': !exists(json, 'coordinates') ? undefined : json['coordinates'],
    };
}

export function MultiPolygonGeometryDtoToJSON(value?: MultiPolygonGeometryDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...GeometryDtoToJSON(value),
        'coordinates': value.coordinates,
    };
}

