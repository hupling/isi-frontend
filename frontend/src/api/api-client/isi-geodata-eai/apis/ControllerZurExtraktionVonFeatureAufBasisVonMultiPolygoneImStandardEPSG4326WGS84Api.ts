/* tslint:disable */
/* eslint-disable */
/**
 * ISI GEODATA EAI
 * ISI GEODATA EAI - Service zum Abfragen von Geoinformationen
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: unbekannt@muenchen.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  FeatureCollectionDtoFeatureDtoBezirksteilDto,
  FeatureCollectionDtoFeatureDtoFlurstueckDto,
  FeatureCollectionDtoFeatureDtoGemarkungDto,
  FeatureCollectionDtoFeatureDtoGrundschulsprengelDto,
  FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto,
  FeatureCollectionDtoFeatureDtoMittelschulsprengelDto,
  FeatureCollectionDtoFeatureDtoSchulstandortDto,
  FeatureCollectionDtoFeatureDtoStadtbezirkDto,
  FeatureCollectionDtoFeatureDtoViertelDto,
  InformationResponseDto,
  MultiPolygonGeometryDto,
} from '../models';
import {
    FeatureCollectionDtoFeatureDtoBezirksteilDtoFromJSON,
    FeatureCollectionDtoFeatureDtoBezirksteilDtoToJSON,
    FeatureCollectionDtoFeatureDtoFlurstueckDtoFromJSON,
    FeatureCollectionDtoFeatureDtoFlurstueckDtoToJSON,
    FeatureCollectionDtoFeatureDtoGemarkungDtoFromJSON,
    FeatureCollectionDtoFeatureDtoGemarkungDtoToJSON,
    FeatureCollectionDtoFeatureDtoGrundschulsprengelDtoFromJSON,
    FeatureCollectionDtoFeatureDtoGrundschulsprengelDtoToJSON,
    FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoFromJSON,
    FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoToJSON,
    FeatureCollectionDtoFeatureDtoMittelschulsprengelDtoFromJSON,
    FeatureCollectionDtoFeatureDtoMittelschulsprengelDtoToJSON,
    FeatureCollectionDtoFeatureDtoSchulstandortDtoFromJSON,
    FeatureCollectionDtoFeatureDtoSchulstandortDtoToJSON,
    FeatureCollectionDtoFeatureDtoStadtbezirkDtoFromJSON,
    FeatureCollectionDtoFeatureDtoStadtbezirkDtoToJSON,
    FeatureCollectionDtoFeatureDtoViertelDtoFromJSON,
    FeatureCollectionDtoFeatureDtoViertelDtoToJSON,
    InformationResponseDtoFromJSON,
    InformationResponseDtoToJSON,
    MultiPolygonGeometryDtoFromJSON,
    MultiPolygonGeometryDtoToJSON,
} from '../models';

export interface GetBezirksteileRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetFlurstueckeRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetGemarkungenRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetGrundschulsprengelRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetKitaplanungsbereicheRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetMittelschulsprengelRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetSchulstandorteRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetStadtbezirkeRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

export interface GetViertelRequest {
    multiPolygonGeometryDto: MultiPolygonGeometryDto;
}

/**
 * 
 */
export class ControllerZurExtraktionVonFeatureAufBasisVonMultiPolygoneImStandardEPSG4326WGS84Api extends runtime.BaseAPI {

    /**
     * Holt die Bezirksteile die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getBezirksteileRaw(requestParameters: GetBezirksteileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoBezirksteilDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getBezirksteile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/bezirksteile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoBezirksteilDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Bezirksteile die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getBezirksteile(requestParameters: GetBezirksteileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoBezirksteilDto> {
        const response = await this.getBezirksteileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Flurstücke die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getFlurstueckeRaw(requestParameters: GetFlurstueckeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoFlurstueckDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getFlurstuecke.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/flurstuecke`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoFlurstueckDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Flurstücke die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getFlurstuecke(requestParameters: GetFlurstueckeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoFlurstueckDto> {
        const response = await this.getFlurstueckeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Gemarkungen die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getGemarkungenRaw(requestParameters: GetGemarkungenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoGemarkungDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getGemarkungen.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/gemarkungen`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoGemarkungDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Gemarkungen die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getGemarkungen(requestParameters: GetGemarkungenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoGemarkungDto> {
        const response = await this.getGemarkungenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Grundschulsprengel die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getGrundschulsprengelRaw(requestParameters: GetGrundschulsprengelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoGrundschulsprengelDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getGrundschulsprengel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/grundschulsprengel`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoGrundschulsprengelDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Grundschulsprengel die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getGrundschulsprengel(requestParameters: GetGrundschulsprengelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoGrundschulsprengelDto> {
        const response = await this.getGrundschulsprengelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Kitaplanungsbereiche die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getKitaplanungsbereicheRaw(requestParameters: GetKitaplanungsbereicheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getKitaplanungsbereiche.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/kitaplanungsbereiche`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoKitaplanungsbereichDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Kitaplanungsbereiche die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getKitaplanungsbereiche(requestParameters: GetKitaplanungsbereicheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoKitaplanungsbereichDto> {
        const response = await this.getKitaplanungsbereicheRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Mittelschulsprengel die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getMittelschulsprengelRaw(requestParameters: GetMittelschulsprengelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoMittelschulsprengelDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getMittelschulsprengel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/mittelschulsprengel`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoMittelschulsprengelDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Mittelschulsprengel die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getMittelschulsprengel(requestParameters: GetMittelschulsprengelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoMittelschulsprengelDto> {
        const response = await this.getMittelschulsprengelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Schulstandorte die sich mit dem Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getSchulstandorteRaw(requestParameters: GetSchulstandorteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoSchulstandortDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getSchulstandorte.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/schulstandorte`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoSchulstandortDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Schulstandorte die sich mit dem Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getSchulstandorte(requestParameters: GetSchulstandorteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoSchulstandortDto> {
        const response = await this.getSchulstandorteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Stadtbezirke die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getStadtbezirkeRaw(requestParameters: GetStadtbezirkeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoStadtbezirkDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getStadtbezirke.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/stadtbezirke`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoStadtbezirkDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Stadtbezirke die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getStadtbezirke(requestParameters: GetStadtbezirkeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoStadtbezirkDto> {
        const response = await this.getStadtbezirkeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Holt die Viertel die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getViertelRaw(requestParameters: GetViertelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeatureCollectionDtoFeatureDtoViertelDto>> {
        if (requestParameters.multiPolygonGeometryDto === null || requestParameters.multiPolygonGeometryDto === undefined) {
            throw new runtime.RequiredError('multiPolygonGeometryDto','Required parameter requestParameters.multiPolygonGeometryDto was null or undefined when calling getViertel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/polygon/viertel`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MultiPolygonGeometryDtoToJSON(requestParameters.multiPolygonGeometryDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeatureCollectionDtoFeatureDtoViertelDtoFromJSON(jsonValue));
    }

    /**
     * Holt die Viertel die sich mit den Multipolygon (im Standard EPSG:4326 (WGS84)) überschneiden.
     */
    async getViertel(requestParameters: GetViertelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeatureCollectionDtoFeatureDtoViertelDto> {
        const response = await this.getViertelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
