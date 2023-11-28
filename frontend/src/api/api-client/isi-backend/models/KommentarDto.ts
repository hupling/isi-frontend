/* tslint:disable */
/* eslint-disable */
/**
 * ISI Backend API
 * ISI Backend - Service für das Informationssystem für soziale Infrastrukturplanung
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: noreply@mail.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DokumentDto } from './DokumentDto';
import {
    DokumentDtoFromJSON,
    DokumentDtoFromJSONTyped,
    DokumentDtoToJSON,
} from './DokumentDto';

/**
 * 
 * @export
 * @interface KommentarDto
 */
export interface KommentarDto {
    /**
     * 
     * @type {string}
     * @memberof KommentarDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof KommentarDto
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof KommentarDto
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof KommentarDto
     */
    lastModifiedDateTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof KommentarDto
     */
    datum?: string;
    /**
     * 
     * @type {string}
     * @memberof KommentarDto
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof KommentarDto
     */
    bauvorhaben?: string;
    /**
     * 
     * @type {string}
     * @memberof KommentarDto
     */
    infrastruktureinrichtung?: string;
    /**
     * 
     * @type {Array<DokumentDto>}
     * @memberof KommentarDto
     */
    dokumente?: Array<DokumentDto>;
}

/**
 * Check if a given object implements the KommentarDto interface.
 */
export function instanceOfKommentarDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KommentarDtoFromJSON(json: any): KommentarDto {
    return KommentarDtoFromJSONTyped(json, false);
}

export function KommentarDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): KommentarDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (new Date(json['createdDateTime'])),
        'lastModifiedDateTime': !exists(json, 'lastModifiedDateTime') ? undefined : (new Date(json['lastModifiedDateTime'])),
        'datum': !exists(json, 'datum') ? undefined : json['datum'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'bauvorhaben': !exists(json, 'bauvorhaben') ? undefined : json['bauvorhaben'],
        'infrastruktureinrichtung': !exists(json, 'infrastruktureinrichtung') ? undefined : json['infrastruktureinrichtung'],
        'dokumente': !exists(json, 'dokumente') ? undefined : ((json['dokumente'] as Array<any>).map(DokumentDtoFromJSON)),
    };
}

export function KommentarDtoToJSON(value?: KommentarDto | null): any {
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
        'datum': value.datum,
        'text': value.text,
        'bauvorhaben': value.bauvorhaben,
        'infrastruktureinrichtung': value.infrastruktureinrichtung,
        'dokumente': value.dokumente === undefined ? undefined : ((value.dokumente as Array<any>).map(DokumentDtoToJSON)),
    };
}

