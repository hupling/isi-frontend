/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AbfrageSearchResultDto,
    instanceOfAbfrageSearchResultDto,
    AbfrageSearchResultDtoFromJSON,
    AbfrageSearchResultDtoFromJSONTyped,
    AbfrageSearchResultDtoToJSON,
} from './AbfrageSearchResultDto';
import {
    BauvorhabenSearchResultDto,
    instanceOfBauvorhabenSearchResultDto,
    BauvorhabenSearchResultDtoFromJSON,
    BauvorhabenSearchResultDtoFromJSONTyped,
    BauvorhabenSearchResultDtoToJSON,
} from './BauvorhabenSearchResultDto';
import {
    InfrastruktureinrichtungSearchResultDto,
    instanceOfInfrastruktureinrichtungSearchResultDto,
    InfrastruktureinrichtungSearchResultDtoFromJSON,
    InfrastruktureinrichtungSearchResultDtoFromJSONTyped,
    InfrastruktureinrichtungSearchResultDtoToJSON,
} from './InfrastruktureinrichtungSearchResultDto';

/**
 * @type SearchResultsDtoSearchResultsInner
 * 
 * @export
 */
export type SearchResultsDtoSearchResultsInner = { type: 'ABFRAGE' } & AbfrageSearchResultDto | { type: 'AbfrageSearchResultDto' } & AbfrageSearchResultDto | { type: 'BAUVORHABEN' } & BauvorhabenSearchResultDto | { type: 'BauvorhabenSearchResultDto' } & BauvorhabenSearchResultDto | { type: 'INFRASTRUKTUREINRICHTUNG' } & InfrastruktureinrichtungSearchResultDto | { type: 'InfrastruktureinrichtungSearchResultDto' } & InfrastruktureinrichtungSearchResultDto;

export function SearchResultsDtoSearchResultsInnerFromJSON(json: any): SearchResultsDtoSearchResultsInner {
    return SearchResultsDtoSearchResultsInnerFromJSONTyped(json, false);
}

export function SearchResultsDtoSearchResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultsDtoSearchResultsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'ABFRAGE':
            return {...AbfrageSearchResultDtoFromJSONTyped(json, true), type: 'ABFRAGE'};
        case 'AbfrageSearchResultDto':
            return {...AbfrageSearchResultDtoFromJSONTyped(json, true), type: 'AbfrageSearchResultDto'};
        case 'BAUVORHABEN':
            return {...BauvorhabenSearchResultDtoFromJSONTyped(json, true), type: 'BAUVORHABEN'};
        case 'BauvorhabenSearchResultDto':
            return {...BauvorhabenSearchResultDtoFromJSONTyped(json, true), type: 'BauvorhabenSearchResultDto'};
        case 'INFRASTRUKTUREINRICHTUNG':
            return {...InfrastruktureinrichtungSearchResultDtoFromJSONTyped(json, true), type: 'INFRASTRUKTUREINRICHTUNG'};
        case 'InfrastruktureinrichtungSearchResultDto':
            return {...InfrastruktureinrichtungSearchResultDtoFromJSONTyped(json, true), type: 'InfrastruktureinrichtungSearchResultDto'};
        default:
            throw new Error(`No variant of SearchResultsDtoSearchResultsInner exists with 'type=${json['type']}'`);
    }
}

export function SearchResultsDtoSearchResultsInnerToJSON(value?: SearchResultsDtoSearchResultsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'ABFRAGE':
            return AbfrageSearchResultDtoToJSON(value);
        case 'AbfrageSearchResultDto':
            return AbfrageSearchResultDtoToJSON(value);
        case 'BAUVORHABEN':
            return BauvorhabenSearchResultDtoToJSON(value);
        case 'BauvorhabenSearchResultDto':
            return BauvorhabenSearchResultDtoToJSON(value);
        case 'INFRASTRUKTUREINRICHTUNG':
            return InfrastruktureinrichtungSearchResultDtoToJSON(value);
        case 'InfrastruktureinrichtungSearchResultDto':
            return InfrastruktureinrichtungSearchResultDtoToJSON(value);
        default:
            throw new Error(`No variant of SearchResultsDtoSearchResultsInner exists with 'type=${value['type']}'`);
    }

}

