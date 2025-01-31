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
/**
 * 
 * @export
 * @interface GrundschulsprengelDto
 */
export interface GrundschulsprengelDto {
    /**
     * 
     * @type {number}
     * @memberof GrundschulsprengelDto
     */
    objectId?: number;
    /**
     * 
     * @type {number}
     * @memberof GrundschulsprengelDto
     */
    ebene?: number;
    /**
     * 
     * @type {number}
     * @memberof GrundschulsprengelDto
     */
    flaecheQm?: number;
    /**
     * 
     * @type {number}
     * @memberof GrundschulsprengelDto
     */
    schulnummer?: number;
    /**
     * 
     * @type {string}
     * @memberof GrundschulsprengelDto
     */
    verbundnummer?: string;
    /**
     * 
     * @type {string}
     * @memberof GrundschulsprengelDto
     */
    verbundname?: string;
    /**
     * 
     * @type {string}
     * @memberof GrundschulsprengelDto
     */
    ebeneBedeutung?: string;
    /**
     * 
     * @type {number}
     * @memberof GrundschulsprengelDto
     */
    xcoordinate?: number;
    /**
     * 
     * @type {number}
     * @memberof GrundschulsprengelDto
     */
    ycoordinate?: number;
}

/**
 * Check if a given object implements the GrundschulsprengelDto interface.
 */
export function instanceOfGrundschulsprengelDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GrundschulsprengelDtoFromJSON(json: any): GrundschulsprengelDto {
    return GrundschulsprengelDtoFromJSONTyped(json, false);
}

export function GrundschulsprengelDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrundschulsprengelDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'ebene': !exists(json, 'ebene') ? undefined : json['ebene'],
        'flaecheQm': !exists(json, 'flaecheQm') ? undefined : json['flaecheQm'],
        'schulnummer': !exists(json, 'schulnummer') ? undefined : json['schulnummer'],
        'verbundnummer': !exists(json, 'verbundnummer') ? undefined : json['verbundnummer'],
        'verbundname': !exists(json, 'verbundname') ? undefined : json['verbundname'],
        'ebeneBedeutung': !exists(json, 'ebeneBedeutung') ? undefined : json['ebeneBedeutung'],
        'xcoordinate': !exists(json, 'xcoordinate') ? undefined : json['xcoordinate'],
        'ycoordinate': !exists(json, 'ycoordinate') ? undefined : json['ycoordinate'],
    };
}

export function GrundschulsprengelDtoToJSON(value?: GrundschulsprengelDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'objectId': value.objectId,
        'ebene': value.ebene,
        'flaecheQm': value.flaecheQm,
        'schulnummer': value.schulnummer,
        'verbundnummer': value.verbundnummer,
        'verbundname': value.verbundname,
        'ebeneBedeutung': value.ebeneBedeutung,
        'xcoordinate': value.xcoordinate,
        'ycoordinate': value.ycoordinate,
    };
}

