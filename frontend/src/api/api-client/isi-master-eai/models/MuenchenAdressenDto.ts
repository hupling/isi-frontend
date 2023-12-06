/* tslint:disable */
/* eslint-disable */
/**
 * ISI MAstER EAI
 * ISI MAstER EAI - Service zum Abfragen von Adressen von MAstER
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: unbekannt@muenchen.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MuenchenAdresseDto } from './MuenchenAdresseDto';
import {
    MuenchenAdresseDtoFromJSON,
    MuenchenAdresseDtoFromJSONTyped,
    MuenchenAdresseDtoToJSON,
} from './MuenchenAdresseDto';

/**
 * 
 * @export
 * @interface MuenchenAdressenDto
 */
export interface MuenchenAdressenDto {
    /**
     * 
     * @type {Array<MuenchenAdresseDto>}
     * @memberof MuenchenAdressenDto
     */
    adressen?: Array<MuenchenAdresseDto>;
}

/**
 * Check if a given object implements the MuenchenAdressenDto interface.
 */
export function instanceOfMuenchenAdressenDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MuenchenAdressenDtoFromJSON(json: any): MuenchenAdressenDto {
    return MuenchenAdressenDtoFromJSONTyped(json, false);
}

export function MuenchenAdressenDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuenchenAdressenDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adressen': !exists(json, 'adressen') ? undefined : ((json['adressen'] as Array<any>).map(MuenchenAdresseDtoFromJSON)),
    };
}

export function MuenchenAdressenDtoToJSON(value?: MuenchenAdressenDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adressen': value.adressen === undefined ? undefined : ((value.adressen as Array<any>).map(MuenchenAdresseDtoToJSON)),
    };
}

