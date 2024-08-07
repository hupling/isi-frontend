/* tslint:disable */
/* eslint-disable */
/**
 * ISI Backend API
 * ISI Backend - Service für das Informationssystem für soziale Infrastrukturplanung
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: noreply@mail.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FilepathDto } from './FilepathDto';
import {
    FilepathDtoFromJSON,
    FilepathDtoFromJSONTyped,
    FilepathDtoToJSON,
} from './FilepathDto';

/**
 * 
 * @export
 * @interface DokumentDto
 */
export interface DokumentDto {
    /**
     * 
     * @type {string}
     * @memberof DokumentDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof DokumentDto
     */
    version?: number;
    /**
     * 
     * @type {Date}
     * @memberof DokumentDto
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof DokumentDto
     */
    lastModifiedDateTime?: Date;
    /**
     * 
     * @type {FilepathDto}
     * @memberof DokumentDto
     */
    filePath: FilepathDto;
    /**
     * 
     * @type {string}
     * @memberof DokumentDto
     */
    artDokument: DokumentDtoArtDokumentEnum;
}


/**
 * @export
 */
export const DokumentDtoArtDokumentEnum = {
    Unspecified: 'UNSPECIFIED',
    Email: 'EMAIL',
    Beschluss: 'BESCHLUSS',
    Anlage: 'ANLAGE',
    Antrag: 'ANTRAG',
    Karte: 'KARTE',
    Stellungnahme: 'STELLUNGNAHME',
    DatenBauvorhaben: 'DATEN_BAUVORHABEN',
    Gebaeudeplan: 'GEBAEUDEPLAN',
    Berechnung: 'BERECHNUNG',
    InfosBaugenehmigung: 'INFOS_BAUGENEHMIGUNG',
    Presseartikel: 'PRESSEARTIKEL',
    InfosZuSozInfrastruktur: 'INFOS_ZU_SOZ_INFRASTRUKTUR',
    Protokoll: 'PROTOKOLL',
    Sonstiges: 'SONSTIGES'
} as const;
export type DokumentDtoArtDokumentEnum = typeof DokumentDtoArtDokumentEnum[keyof typeof DokumentDtoArtDokumentEnum];


/**
 * Check if a given object implements the DokumentDto interface.
 */
export function instanceOfDokumentDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filePath" in value;
    isInstance = isInstance && "artDokument" in value;

    return isInstance;
}

export function DokumentDtoFromJSON(json: any): DokumentDto {
    return DokumentDtoFromJSONTyped(json, false);
}

export function DokumentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DokumentDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (new Date(json['createdDateTime'])),
        'lastModifiedDateTime': !exists(json, 'lastModifiedDateTime') ? undefined : (new Date(json['lastModifiedDateTime'])),
        'filePath': FilepathDtoFromJSON(json['filePath']),
        'artDokument': json['artDokument'],
    };
}

export function DokumentDtoToJSON(value?: DokumentDto | null): any {
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
        'filePath': FilepathDtoToJSON(value.filePath),
        'artDokument': value.artDokument,
    };
}

