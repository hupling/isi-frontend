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
import type { BearbeitendePersonDto } from './BearbeitendePersonDto';
import {
    BearbeitendePersonDtoFromJSON,
    BearbeitendePersonDtoFromJSONTyped,
    BearbeitendePersonDtoToJSON,
} from './BearbeitendePersonDto';
import type { StatusAbfrage } from './StatusAbfrage';
import {
    StatusAbfrageFromJSON,
    StatusAbfrageFromJSONTyped,
    StatusAbfrageToJSON,
} from './StatusAbfrage';

/**
 * 
 * @export
 * @interface BearbeitungshistorieDto
 */
export interface BearbeitungshistorieDto {
    /**
     * 
     * @type {StatusAbfrage}
     * @memberof BearbeitungshistorieDto
     */
    zielStatus?: StatusAbfrage;
    /**
     * 
     * @type {Date}
     * @memberof BearbeitungshistorieDto
     */
    zeitpunkt?: Date;
    /**
     * 
     * @type {BearbeitendePersonDto}
     * @memberof BearbeitungshistorieDto
     */
    bearbeitendePerson?: BearbeitendePersonDto;
}

/**
 * Check if a given object implements the BearbeitungshistorieDto interface.
 */
export function instanceOfBearbeitungshistorieDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BearbeitungshistorieDtoFromJSON(json: any): BearbeitungshistorieDto {
    return BearbeitungshistorieDtoFromJSONTyped(json, false);
}

export function BearbeitungshistorieDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BearbeitungshistorieDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'zielStatus': !exists(json, 'zielStatus') ? undefined : StatusAbfrageFromJSON(json['zielStatus']),
        'zeitpunkt': !exists(json, 'zeitpunkt') ? undefined : (new Date(json['zeitpunkt'])),
        'bearbeitendePerson': !exists(json, 'bearbeitendePerson') ? undefined : BearbeitendePersonDtoFromJSON(json['bearbeitendePerson']),
    };
}

export function BearbeitungshistorieDtoToJSON(value?: BearbeitungshistorieDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'zielStatus': StatusAbfrageToJSON(value.zielStatus),
        'zeitpunkt': value.zeitpunkt === undefined ? undefined : (value.zeitpunkt.toISOString()),
        'bearbeitendePerson': BearbeitendePersonDtoToJSON(value.bearbeitendePerson),
    };
}

