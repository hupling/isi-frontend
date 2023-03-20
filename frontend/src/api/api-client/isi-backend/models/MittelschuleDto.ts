/* tslint:disable */
/* eslint-disable */
/**
 * ISI Backend API
 * ISI Backend - Serivce für das Informationssystem für soziale Infrastrukturplanung
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * Contact: noreply@mail.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InfrastruktureinrichtungDto,
    InfrastruktureinrichtungDtoFromJSON,
    InfrastruktureinrichtungDtoFromJSONTyped,
    InfrastruktureinrichtungDtoToJSON,
} from './InfrastruktureinrichtungDto';
import {
    SchuleDto,
    SchuleDtoFromJSON,
    SchuleDtoFromJSONTyped,
    SchuleDtoToJSON,
} from './SchuleDto';

/**
 * 
 * @export
 * @interface MittelschuleDto
 */
export interface MittelschuleDto {
    /**
     * 
     * @type {string}
     * @memberof MittelschuleDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof MittelschuleDto
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof MittelschuleDto
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof MittelschuleDto
     */
    lastModifiedDateTime?: Date;
    /**
     * 
     * @type {InfrastruktureinrichtungDto}
     * @memberof MittelschuleDto
     */
    infrastruktureinrichtung: InfrastruktureinrichtungDto;
    /**
     * 
     * @type {SchuleDto}
     * @memberof MittelschuleDto
     */
    schule: SchuleDto;
}

export function MittelschuleDtoFromJSON(json: any): MittelschuleDto {
    return MittelschuleDtoFromJSONTyped(json, false);
}

export function MittelschuleDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MittelschuleDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (new Date(json['createdDateTime'])),
        'lastModifiedDateTime': !exists(json, 'lastModifiedDateTime') ? undefined : (new Date(json['lastModifiedDateTime'])),
        'infrastruktureinrichtung': InfrastruktureinrichtungDtoFromJSON(json['infrastruktureinrichtung']),
        'schule': SchuleDtoFromJSON(json['schule']),
    };
}

export function MittelschuleDtoToJSON(value?: MittelschuleDto | null): any {
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
        'infrastruktureinrichtung': InfrastruktureinrichtungDtoToJSON(value.infrastruktureinrichtung),
        'schule': SchuleDtoToJSON(value.schule),
    };
}

