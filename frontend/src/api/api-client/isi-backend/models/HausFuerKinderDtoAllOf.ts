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
/**
 * 
 * @export
 * @interface HausFuerKinderDtoAllOf
 */
export interface HausFuerKinderDtoAllOf {
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    anzahlKinderkrippePlaetze?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    anzahlKindergartenPlaetze?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    anzahlHortPlaetze?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    anzahlKinderkrippeGruppen?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    anzahlKindergartenGruppen?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    anzahlHortGruppen?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    wohnungsnaheKinderkrippePlaetze?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    wohnungsnaheKindergartenPlaetze?: number;
    /**
     * 
     * @type {number}
     * @memberof HausFuerKinderDtoAllOf
     */
    wohnungsnaheHortPlaetze?: number;
    /**
     * 
     * @type {string}
     * @memberof HausFuerKinderDtoAllOf
     */
    einrichtungstraeger?: HausFuerKinderDtoAllOfEinrichtungstraegerEnum;
}


/**
 * @export
 */
export const HausFuerKinderDtoAllOfEinrichtungstraegerEnum = {
    Unspecified: 'UNSPECIFIED',
    StaedtischeEinrichtung: 'STAEDTISCHE_EINRICHTUNG',
    EinrichtungBetriebstraegerschaft: 'EINRICHTUNG_BETRIEBSTRAEGERSCHAFT',
    FreieGemeinnuetzigeSonstige: 'FREIE_GEMEINNUETZIGE_SONSTIGE',
    EinrichtungGesamtstaedtisch: 'EINRICHTUNG_GESAMTSTAEDTISCH',
    ElternKindInitiative: 'ELTERN_KIND_INITIATIVE',
    StaatlicheEinrichtung: 'STAATLICHE_EINRICHTUNG',
    PrivateTraegerschaft: 'PRIVATE_TRAEGERSCHAFT',
    KirchlicheTraegerschaft: 'KIRCHLICHE_TRAEGERSCHAFT'
} as const;
export type HausFuerKinderDtoAllOfEinrichtungstraegerEnum = typeof HausFuerKinderDtoAllOfEinrichtungstraegerEnum[keyof typeof HausFuerKinderDtoAllOfEinrichtungstraegerEnum];


/**
 * Check if a given object implements the HausFuerKinderDtoAllOf interface.
 */
export function instanceOfHausFuerKinderDtoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HausFuerKinderDtoAllOfFromJSON(json: any): HausFuerKinderDtoAllOf {
    return HausFuerKinderDtoAllOfFromJSONTyped(json, false);
}

export function HausFuerKinderDtoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): HausFuerKinderDtoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'anzahlKinderkrippePlaetze': !exists(json, 'anzahlKinderkrippePlaetze') ? undefined : json['anzahlKinderkrippePlaetze'],
        'anzahlKindergartenPlaetze': !exists(json, 'anzahlKindergartenPlaetze') ? undefined : json['anzahlKindergartenPlaetze'],
        'anzahlHortPlaetze': !exists(json, 'anzahlHortPlaetze') ? undefined : json['anzahlHortPlaetze'],
        'anzahlKinderkrippeGruppen': !exists(json, 'anzahlKinderkrippeGruppen') ? undefined : json['anzahlKinderkrippeGruppen'],
        'anzahlKindergartenGruppen': !exists(json, 'anzahlKindergartenGruppen') ? undefined : json['anzahlKindergartenGruppen'],
        'anzahlHortGruppen': !exists(json, 'anzahlHortGruppen') ? undefined : json['anzahlHortGruppen'],
        'wohnungsnaheKinderkrippePlaetze': !exists(json, 'wohnungsnaheKinderkrippePlaetze') ? undefined : json['wohnungsnaheKinderkrippePlaetze'],
        'wohnungsnaheKindergartenPlaetze': !exists(json, 'wohnungsnaheKindergartenPlaetze') ? undefined : json['wohnungsnaheKindergartenPlaetze'],
        'wohnungsnaheHortPlaetze': !exists(json, 'wohnungsnaheHortPlaetze') ? undefined : json['wohnungsnaheHortPlaetze'],
        'einrichtungstraeger': !exists(json, 'einrichtungstraeger') ? undefined : json['einrichtungstraeger'],
    };
}

export function HausFuerKinderDtoAllOfToJSON(value?: HausFuerKinderDtoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'anzahlKinderkrippePlaetze': value.anzahlKinderkrippePlaetze,
        'anzahlKindergartenPlaetze': value.anzahlKindergartenPlaetze,
        'anzahlHortPlaetze': value.anzahlHortPlaetze,
        'anzahlKinderkrippeGruppen': value.anzahlKinderkrippeGruppen,
        'anzahlKindergartenGruppen': value.anzahlKindergartenGruppen,
        'anzahlHortGruppen': value.anzahlHortGruppen,
        'wohnungsnaheKinderkrippePlaetze': value.wohnungsnaheKinderkrippePlaetze,
        'wohnungsnaheKindergartenPlaetze': value.wohnungsnaheKindergartenPlaetze,
        'wohnungsnaheHortPlaetze': value.wohnungsnaheHortPlaetze,
        'einrichtungstraeger': value.einrichtungstraeger,
    };
}

