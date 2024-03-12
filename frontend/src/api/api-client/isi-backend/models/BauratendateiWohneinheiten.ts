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
/**
 * 
 * @export
 * @interface BauratendateiWohneinheiten
 */
export interface BauratendateiWohneinheiten {
    /**
     * 
     * @type {string}
     * @memberof BauratendateiWohneinheiten
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof BauratendateiWohneinheiten
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof BauratendateiWohneinheiten
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BauratendateiWohneinheiten
     */
    lastModifiedDateTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof BauratendateiWohneinheiten
     */
    foerderart?: string;
    /**
     * 
     * @type {string}
     * @memberof BauratendateiWohneinheiten
     */
    jahr?: string;
    /**
     * 
     * @type {number}
     * @memberof BauratendateiWohneinheiten
     */
    wohneinheiten?: number;
}

/**
 * Check if a given object implements the BauratendateiWohneinheiten interface.
 */
export function instanceOfBauratendateiWohneinheiten(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BauratendateiWohneinheitenFromJSON(json: any): BauratendateiWohneinheiten {
    return BauratendateiWohneinheitenFromJSONTyped(json, false);
}

export function BauratendateiWohneinheitenFromJSONTyped(json: any, ignoreDiscriminator: boolean): BauratendateiWohneinheiten {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (new Date(json['createdDateTime'])),
        'lastModifiedDateTime': !exists(json, 'lastModifiedDateTime') ? undefined : (new Date(json['lastModifiedDateTime'])),
        'foerderart': !exists(json, 'foerderart') ? undefined : json['foerderart'],
        'jahr': !exists(json, 'jahr') ? undefined : json['jahr'],
        'wohneinheiten': !exists(json, 'wohneinheiten') ? undefined : json['wohneinheiten'],
    };
}

export function BauratendateiWohneinheitenToJSON(value?: BauratendateiWohneinheiten | null): any {
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
        'foerderart': value.foerderart,
        'jahr': value.jahr,
        'wohneinheiten': value.wohneinheiten,
    };
}

