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


import * as runtime from '../runtime';
import type {
  DokumenteDto,
} from '../models';
import {
    DokumenteDtoFromJSON,
    DokumenteDtoToJSON,
} from '../models';

export interface GetDokumenteRequest {
    pageNumber?: number;
    pageSize?: number;
}

/**
 * 
 */
export class DokumenteApi extends runtime.BaseAPI {

    /**
     * Holen aller in der Anwendung vorhandenen Dokumente
     */
    async getDokumenteRaw(requestParameters: GetDokumenteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DokumenteDto>> {
        const queryParameters: any = {};

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/dokumente`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DokumenteDtoFromJSON(jsonValue));
    }

    /**
     * Holen aller in der Anwendung vorhandenen Dokumente
     */
    async getDokumente(requestParameters: GetDokumenteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DokumenteDto> {
        const response = await this.getDokumenteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
