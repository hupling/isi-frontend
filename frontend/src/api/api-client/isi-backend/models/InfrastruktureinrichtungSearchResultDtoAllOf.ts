/* tslint:disable */
/* eslint-disable */
/**
 * ISI Backend API
 * ISI Backend - Service für das Informationssystem für soziale Infrastrukturplanung
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: noreply@mail.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InfrastruktureinrichtungSearchResultDtoAllOf
 */
export interface InfrastruktureinrichtungSearchResultDtoAllOf {
    /**
     * 
     * @type {string}
     * @memberof InfrastruktureinrichtungSearchResultDtoAllOf
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InfrastruktureinrichtungSearchResultDtoAllOf
     */
    nameEinrichtung?: string;
    /**
     * 
     * @type {string}
     * @memberof InfrastruktureinrichtungSearchResultDtoAllOf
     */
    infrastruktureinrichtungTyp?: InfrastruktureinrichtungSearchResultDtoAllOfInfrastruktureinrichtungTypEnum;
    /**
     * 
     * @type {string}
     * @memberof InfrastruktureinrichtungSearchResultDtoAllOf
     */
    zugehoerigesBauvorhaben?: string;
}


/**
 * @export
 */
export const InfrastruktureinrichtungSearchResultDtoAllOfInfrastruktureinrichtungTypEnum = {
    Unspecified: 'UNSPECIFIED',
    Kinderkrippe: 'KINDERKRIPPE',
    Kindergarten: 'KINDERGARTEN',
    GsNachmittagBetreuung: 'GS_NACHMITTAG_BETREUUNG',
    HausFuerKinder: 'HAUS_FUER_KINDER',
    Grundschule: 'GRUNDSCHULE',
    Mittelschule: 'MITTELSCHULE'
} as const;
export type InfrastruktureinrichtungSearchResultDtoAllOfInfrastruktureinrichtungTypEnum = typeof InfrastruktureinrichtungSearchResultDtoAllOfInfrastruktureinrichtungTypEnum[keyof typeof InfrastruktureinrichtungSearchResultDtoAllOfInfrastruktureinrichtungTypEnum];


/**
 * Check if a given object implements the InfrastruktureinrichtungSearchResultDtoAllOf interface.
 */
export function instanceOfInfrastruktureinrichtungSearchResultDtoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InfrastruktureinrichtungSearchResultDtoAllOfFromJSON(json: any): InfrastruktureinrichtungSearchResultDtoAllOf {
    return InfrastruktureinrichtungSearchResultDtoAllOfFromJSONTyped(json, false);
}

export function InfrastruktureinrichtungSearchResultDtoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfrastruktureinrichtungSearchResultDtoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'nameEinrichtung': !exists(json, 'nameEinrichtung') ? undefined : json['nameEinrichtung'],
        'infrastruktureinrichtungTyp': !exists(json, 'infrastruktureinrichtungTyp') ? undefined : json['infrastruktureinrichtungTyp'],
        'zugehoerigesBauvorhaben': !exists(json, 'zugehoerigesBauvorhaben') ? undefined : json['zugehoerigesBauvorhaben'],
    };
}

export function InfrastruktureinrichtungSearchResultDtoAllOfToJSON(value?: InfrastruktureinrichtungSearchResultDtoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nameEinrichtung': value.nameEinrichtung,
        'infrastruktureinrichtungTyp': value.infrastruktureinrichtungTyp,
        'zugehoerigesBauvorhaben': value.zugehoerigesBauvorhaben,
    };
}

