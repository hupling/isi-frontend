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
import type { DokumentResponse } from './DokumentResponse';
import {
    DokumentResponseFromJSON,
    DokumentResponseFromJSONTyped,
    DokumentResponseToJSON,
} from './DokumentResponse';

/**
 * 
 * @export
 * @interface CollectionModelDokumentEmbedded
 */
export interface CollectionModelDokumentEmbedded {
    /**
     * 
     * @type {Array<DokumentResponse>}
     * @memberof CollectionModelDokumentEmbedded
     */
    dokuments?: Array<DokumentResponse>;
}

/**
 * Check if a given object implements the CollectionModelDokumentEmbedded interface.
 */
export function instanceOfCollectionModelDokumentEmbedded(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionModelDokumentEmbeddedFromJSON(json: any): CollectionModelDokumentEmbedded {
    return CollectionModelDokumentEmbeddedFromJSONTyped(json, false);
}

export function CollectionModelDokumentEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionModelDokumentEmbedded {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dokuments': !exists(json, 'dokuments') ? undefined : ((json['dokuments'] as Array<any>).map(DokumentResponseFromJSON)),
    };
}

export function CollectionModelDokumentEmbeddedToJSON(value?: CollectionModelDokumentEmbedded | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dokuments': value.dokuments === undefined ? undefined : ((value.dokuments as Array<any>).map(DokumentResponseToJSON)),
    };
}

