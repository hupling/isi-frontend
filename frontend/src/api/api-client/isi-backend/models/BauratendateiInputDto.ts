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
import type { WohneinheitenProFoerderartProJahrDto } from './WohneinheitenProFoerderartProJahrDto';
import {
    WohneinheitenProFoerderartProJahrDtoFromJSON,
    WohneinheitenProFoerderartProJahrDtoFromJSONTyped,
    WohneinheitenProFoerderartProJahrDtoToJSON,
} from './WohneinheitenProFoerderartProJahrDto';

/**
 * 
 * @export
 * @interface BauratendateiInputDto
 */
export interface BauratendateiInputDto {
    /**
     * 
     * @type {string}
     * @memberof BauratendateiInputDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof BauratendateiInputDto
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof BauratendateiInputDto
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BauratendateiInputDto
     */
    lastModifiedDateTime?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof BauratendateiInputDto
     */
    grundschulsprengel?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BauratendateiInputDto
     */
    mittelschulsprengel?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BauratendateiInputDto
     */
    viertel?: Array<string>;
    /**
     * 
     * @type {Array<WohneinheitenProFoerderartProJahrDto>}
     * @memberof BauratendateiInputDto
     */
    wohneinheiten?: Array<WohneinheitenProFoerderartProJahrDto>;
}

/**
 * Check if a given object implements the BauratendateiInputDto interface.
 */
export function instanceOfBauratendateiInputDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BauratendateiInputDtoFromJSON(json: any): BauratendateiInputDto {
    return BauratendateiInputDtoFromJSONTyped(json, false);
}

export function BauratendateiInputDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BauratendateiInputDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (new Date(json['createdDateTime'])),
        'lastModifiedDateTime': !exists(json, 'lastModifiedDateTime') ? undefined : (new Date(json['lastModifiedDateTime'])),
        'grundschulsprengel': !exists(json, 'grundschulsprengel') ? undefined : json['grundschulsprengel'],
        'mittelschulsprengel': !exists(json, 'mittelschulsprengel') ? undefined : json['mittelschulsprengel'],
        'viertel': !exists(json, 'viertel') ? undefined : json['viertel'],
        'wohneinheiten': !exists(json, 'wohneinheiten') ? undefined : ((json['wohneinheiten'] as Array<any>).map(WohneinheitenProFoerderartProJahrDtoFromJSON)),
    };
}

export function BauratendateiInputDtoToJSON(value?: BauratendateiInputDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'version': value.version,
        'createdDateTime': value.createdDateTime === undefined ? undefined : (value.createdDateTime.toISOString()),
        'lastModifiedDateTime': value.lastModifiedDateTime === undefined ? undefined : (value.lastModifiedDateTime.toISOString()),
        'grundschulsprengel': value.grundschulsprengel,
        'mittelschulsprengel': value.mittelschulsprengel,
        'viertel': value.viertel,
        'wohneinheiten': value.wohneinheiten === undefined ? undefined : ((value.wohneinheiten as Array<any>).map(WohneinheitenProFoerderartProJahrDtoToJSON)),
    };
}

