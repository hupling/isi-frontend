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
import type { SearchResultDto } from './SearchResultDto';
import {
    SearchResultDtoFromJSON,
    SearchResultDtoFromJSONTyped,
    SearchResultDtoToJSON,
} from './SearchResultDto';
import type { StadtbezirkDto } from './StadtbezirkDto';
import {
    StadtbezirkDtoFromJSON,
    StadtbezirkDtoFromJSONTyped,
    StadtbezirkDtoToJSON,
} from './StadtbezirkDto';
import type { StatusAbfrage } from './StatusAbfrage';
import {
    StatusAbfrageFromJSON,
    StatusAbfrageFromJSONTyped,
    StatusAbfrageToJSON,
} from './StatusAbfrage';
import type { Wgs84Dto } from './Wgs84Dto';
import {
    Wgs84DtoFromJSON,
    Wgs84DtoFromJSONTyped,
    Wgs84DtoToJSON,
} from './Wgs84Dto';

import {
} from './';

/**
 * 
 * @export
 * @interface AbfrageSearchResultDto
 */
export interface AbfrageSearchResultDto extends SearchResultDto {
    /**
     * 
     * @type {string}
     * @memberof AbfrageSearchResultDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AbfrageSearchResultDto
     */
    artAbfrage?: AbfrageSearchResultDtoArtAbfrageEnum;
    /**
     * 
     * @type {string}
     * @memberof AbfrageSearchResultDto
     */
    name?: string;
    /**
     * 
     * @type {Set<StadtbezirkDto>}
     * @memberof AbfrageSearchResultDto
     */
    stadtbezirke?: Set<StadtbezirkDto>;
    /**
     * 
     * @type {StatusAbfrage}
     * @memberof AbfrageSearchResultDto
     */
    statusAbfrage?: StatusAbfrage;
    /**
     * 
     * @type {Date}
     * @memberof AbfrageSearchResultDto
     */
    fristBearbeitung?: Date;
    /**
     * 
     * @type {string}
     * @memberof AbfrageSearchResultDto
     */
    standVerfahren?: AbfrageSearchResultDtoStandVerfahrenEnum;
    /**
     * 
     * @type {Date}
     * @memberof AbfrageSearchResultDto
     */
    createdDateTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof AbfrageSearchResultDto
     */
    bauvorhaben?: string;
}


/**
 * @export
 */
export const AbfrageSearchResultDtoArtAbfrageEnum = {
    Unspecified: 'UNSPECIFIED',
    Bauleitplanverfahren: 'BAULEITPLANVERFAHREN',
    Baugenehmigungsverfahren: 'BAUGENEHMIGUNGSVERFAHREN',
    WeiteresVerfahren: 'WEITERES_VERFAHREN'
} as const;
export type AbfrageSearchResultDtoArtAbfrageEnum = typeof AbfrageSearchResultDtoArtAbfrageEnum[keyof typeof AbfrageSearchResultDtoArtAbfrageEnum];

/**
 * @export
 */
export const AbfrageSearchResultDtoStandVerfahrenEnum = {
    Unspecified: 'UNSPECIFIED',
    VorbereitungEckdatenbeschluss: 'VORBEREITUNG_ECKDATENBESCHLUSS',
    VorbereitungWettbewerbauslobung: 'VORBEREITUNG_WETTBEWERBAUSLOBUNG',
    VorbereitungAufstellungsbeschluss: 'VORBEREITUNG_AUFSTELLUNGSBESCHLUSS',
    VorbereitungBilligungsbeschlussStaedtebaulicherVertrag: 'VORBEREITUNG_BILLIGUNGSBESCHLUSS_STAEDTEBAULICHER_VERTRAG',
    VorbereitungSatzungsbeschluss: 'VORBEREITUNG_SATZUNGSBESCHLUSS',
    VorliegenderSatzungsbeschluss: 'VORLIEGENDER_SATZUNGSBESCHLUSS',
    RechtsverbindlichkeitAmtsblatt: 'RECHTSVERBINDLICHKEIT_AMTSBLATT',
    Aufteilungsplan: 'AUFTEILUNGSPLAN',
    VorbereitungVorbescheid: 'VORBEREITUNG_VORBESCHEID',
    VorbereitungBaugenehmigung: 'VORBEREITUNG_BAUGENEHMIGUNG',
    VorabfrageOhneKonkretenStand: 'VORABFRAGE_OHNE_KONKRETEN_STAND',
    Strukturkonzept: 'STRUKTURKONZEPT',
    Rahmenplanung: 'RAHMENPLANUNG',
    Potentialuntersuchung: 'POTENTIALUNTERSUCHUNG',
    StaedtebaulicheSanierungsmassnahme: 'STAEDTEBAULICHE_SANIERUNGSMASSNAHME',
    StaedtebaulicheEntwicklungsmassnahme: 'STAEDTEBAULICHE_ENTWICKLUNGSMASSNAHME',
    InfoFehlt: 'INFO_FEHLT',
    FreieEingabe: 'FREIE_EINGABE',
    Standortabfrage: 'STANDORTABFRAGE'
} as const;
export type AbfrageSearchResultDtoStandVerfahrenEnum = typeof AbfrageSearchResultDtoStandVerfahrenEnum[keyof typeof AbfrageSearchResultDtoStandVerfahrenEnum];


/**
 * Check if a given object implements the AbfrageSearchResultDto interface.
 */
export function instanceOfAbfrageSearchResultDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AbfrageSearchResultDtoFromJSON(json: any): AbfrageSearchResultDto {
    return AbfrageSearchResultDtoFromJSONTyped(json, false);
}

export function AbfrageSearchResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbfrageSearchResultDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
    }
    return {
        ...SearchResultDtoFromJSONTyped(json, ignoreDiscriminator),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'artAbfrage': !exists(json, 'artAbfrage') ? undefined : json['artAbfrage'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'stadtbezirke': !exists(json, 'stadtbezirke') ? undefined : (new Set((json['stadtbezirke'] as Array<any>).map(StadtbezirkDtoFromJSON))),
        'statusAbfrage': !exists(json, 'statusAbfrage') ? undefined : StatusAbfrageFromJSON(json['statusAbfrage']),
        'fristBearbeitung': !exists(json, 'fristBearbeitung') ? undefined : (new Date(json['fristBearbeitung'])),
        'standVerfahren': !exists(json, 'standVerfahren') ? undefined : json['standVerfahren'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (new Date(json['createdDateTime'])),
        'bauvorhaben': !exists(json, 'bauvorhaben') ? undefined : json['bauvorhaben'],
    };
}

export function AbfrageSearchResultDtoToJSON(value?: AbfrageSearchResultDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...SearchResultDtoToJSON(value),
        'id': value.id,
        'artAbfrage': value.artAbfrage,
        'name': value.name,
        'stadtbezirke': value.stadtbezirke === undefined ? undefined : (Array.from(value.stadtbezirke as Set<any>).map(StadtbezirkDtoToJSON)),
        'statusAbfrage': StatusAbfrageToJSON(value.statusAbfrage),
        'fristBearbeitung': value.fristBearbeitung === undefined ? undefined : (value.fristBearbeitung.toISOString().substr(0,10)),
        'standVerfahren': value.standVerfahren,
        'createdDateTime': value.createdDateTime === undefined ? undefined : (value.createdDateTime.toISOString()),
        'bauvorhaben': value.bauvorhaben,
    };
}

