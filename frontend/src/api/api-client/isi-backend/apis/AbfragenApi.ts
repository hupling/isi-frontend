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


import * as runtime from '../runtime';
import type {
  InformationResponseDto,
  PatchBedarfsmeldungErfolgtRequest,
  PatchInBearbeitungFachreferatRequest,
  PatchInBearbeitungSachbearbeitungRequest,
  Save201Response,
  SaveRequest,
} from '../models';
import {
    InformationResponseDtoFromJSON,
    InformationResponseDtoToJSON,
    PatchBedarfsmeldungErfolgtRequestFromJSON,
    PatchBedarfsmeldungErfolgtRequestToJSON,
    PatchInBearbeitungFachreferatRequestFromJSON,
    PatchInBearbeitungFachreferatRequestToJSON,
    PatchInBearbeitungSachbearbeitungRequestFromJSON,
    PatchInBearbeitungSachbearbeitungRequestToJSON,
    Save201ResponseFromJSON,
    Save201ResponseToJSON,
    SaveRequestFromJSON,
    SaveRequestToJSON,
} from '../models';

export interface DeleteByIdRequest {
    id: string;
}

export interface GetByIdRequest {
    id: string;
}

export interface PatchAngelegtRequest {
    id: string;
    saveRequest: SaveRequest;
}

export interface PatchBedarfsmeldungErfolgtOperationRequest {
    id: string;
    patchBedarfsmeldungErfolgtRequest: PatchBedarfsmeldungErfolgtRequest;
}

export interface PatchInBearbeitungFachreferatOperationRequest {
    id: string;
    patchInBearbeitungFachreferatRequest: PatchInBearbeitungFachreferatRequest;
}

export interface PatchInBearbeitungSachbearbeitungOperationRequest {
    id: string;
    patchInBearbeitungSachbearbeitungRequest: PatchInBearbeitungSachbearbeitungRequest;
}

export interface SaveOperationRequest {
    saveRequest: SaveRequest;
}

/**
 * 
 */
export class AbfragenApi extends runtime.BaseAPI {

    /**
     * Löschen einer Abfrage
     */
    async deleteByIdRaw(requestParameters: DeleteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/abfrage/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Löschen einer Abfrage
     */
    async deleteById(requestParameters: DeleteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Lesen einer Abfrage.
     */
    async getByIdRaw(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Save201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/abfrage/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Save201ResponseFromJSON(jsonValue));
    }

    /**
     * Lesen einer Abfrage.
     */
    async getById(requestParameters: GetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Save201Response> {
        const response = await this.getByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Aktualisierung einer Abfrage im Status ANGELEGT.
     */
    async patchAngelegtRaw(requestParameters: PatchAngelegtRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Save201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchAngelegt.');
        }

        if (requestParameters.saveRequest === null || requestParameters.saveRequest === undefined) {
            throw new runtime.RequiredError('saveRequest','Required parameter requestParameters.saveRequest was null or undefined when calling patchAngelegt.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/abfrage/angelegt/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SaveRequestToJSON(requestParameters.saveRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Save201ResponseFromJSON(jsonValue));
    }

    /**
     * Aktualisierung einer Abfrage im Status ANGELEGT.
     */
    async patchAngelegt(requestParameters: PatchAngelegtRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Save201Response> {
        const response = await this.patchAngelegtRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Aktualisierung einer Abfrage im Status BEDARFSMELDUNG_ERFOLGT.
     */
    async patchBedarfsmeldungErfolgtRaw(requestParameters: PatchBedarfsmeldungErfolgtOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Save201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchBedarfsmeldungErfolgt.');
        }

        if (requestParameters.patchBedarfsmeldungErfolgtRequest === null || requestParameters.patchBedarfsmeldungErfolgtRequest === undefined) {
            throw new runtime.RequiredError('patchBedarfsmeldungErfolgtRequest','Required parameter requestParameters.patchBedarfsmeldungErfolgtRequest was null or undefined when calling patchBedarfsmeldungErfolgt.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/abfrage/bedarfsmeldung-erfolgt/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchBedarfsmeldungErfolgtRequestToJSON(requestParameters.patchBedarfsmeldungErfolgtRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Save201ResponseFromJSON(jsonValue));
    }

    /**
     * Aktualisierung einer Abfrage im Status BEDARFSMELDUNG_ERFOLGT.
     */
    async patchBedarfsmeldungErfolgt(requestParameters: PatchBedarfsmeldungErfolgtOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Save201Response> {
        const response = await this.patchBedarfsmeldungErfolgtRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Aktualisierung einer Abfrage im Status IN_BEARBEITUNG_FACHREFERATE.
     */
    async patchInBearbeitungFachreferatRaw(requestParameters: PatchInBearbeitungFachreferatOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Save201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchInBearbeitungFachreferat.');
        }

        if (requestParameters.patchInBearbeitungFachreferatRequest === null || requestParameters.patchInBearbeitungFachreferatRequest === undefined) {
            throw new runtime.RequiredError('patchInBearbeitungFachreferatRequest','Required parameter requestParameters.patchInBearbeitungFachreferatRequest was null or undefined when calling patchInBearbeitungFachreferat.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/abfrage/in-bearbeitung-fachreferate/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchInBearbeitungFachreferatRequestToJSON(requestParameters.patchInBearbeitungFachreferatRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Save201ResponseFromJSON(jsonValue));
    }

    /**
     * Aktualisierung einer Abfrage im Status IN_BEARBEITUNG_FACHREFERATE.
     */
    async patchInBearbeitungFachreferat(requestParameters: PatchInBearbeitungFachreferatOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Save201Response> {
        const response = await this.patchInBearbeitungFachreferatRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Aktualisierung einer Abfrage im Status IN_BEARBEITUNG_SACHBEARBEITUNG.
     */
    async patchInBearbeitungSachbearbeitungRaw(requestParameters: PatchInBearbeitungSachbearbeitungOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Save201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchInBearbeitungSachbearbeitung.');
        }

        if (requestParameters.patchInBearbeitungSachbearbeitungRequest === null || requestParameters.patchInBearbeitungSachbearbeitungRequest === undefined) {
            throw new runtime.RequiredError('patchInBearbeitungSachbearbeitungRequest','Required parameter requestParameters.patchInBearbeitungSachbearbeitungRequest was null or undefined when calling patchInBearbeitungSachbearbeitung.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/abfrage/in-bearbeitung-sachbearbeitung/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchInBearbeitungSachbearbeitungRequestToJSON(requestParameters.patchInBearbeitungSachbearbeitungRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Save201ResponseFromJSON(jsonValue));
    }

    /**
     * Aktualisierung einer Abfrage im Status IN_BEARBEITUNG_SACHBEARBEITUNG.
     */
    async patchInBearbeitungSachbearbeitung(requestParameters: PatchInBearbeitungSachbearbeitungOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Save201Response> {
        const response = await this.patchInBearbeitungSachbearbeitungRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Anlegen einer neuen Abfrage
     */
    async saveRaw(requestParameters: SaveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Save201Response>> {
        if (requestParameters.saveRequest === null || requestParameters.saveRequest === undefined) {
            throw new runtime.RequiredError('saveRequest','Required parameter requestParameters.saveRequest was null or undefined when calling save.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/abfrage`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SaveRequestToJSON(requestParameters.saveRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Save201ResponseFromJSON(jsonValue));
    }

    /**
     * Anlegen einer neuen Abfrage
     */
    async save(requestParameters: SaveOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Save201Response> {
        const response = await this.saveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
