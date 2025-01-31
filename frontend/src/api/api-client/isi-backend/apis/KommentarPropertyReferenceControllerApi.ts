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
  CollectionModelDokument,
  CollectionModelObject,
  EntityModelBauvorhaben,
  EntityModelInfrastruktureinrichtung,
} from '../models';
import {
    CollectionModelDokumentFromJSON,
    CollectionModelDokumentToJSON,
    CollectionModelObjectFromJSON,
    CollectionModelObjectToJSON,
    EntityModelBauvorhabenFromJSON,
    EntityModelBauvorhabenToJSON,
    EntityModelInfrastruktureinrichtungFromJSON,
    EntityModelInfrastruktureinrichtungToJSON,
} from '../models';

export interface CreatePropertyReferenceKommentarPatchRequest {
    id: string;
    collectionModelObject: CollectionModelObject;
}

export interface CreatePropertyReferenceKommentarPatch1Request {
    id: string;
    collectionModelObject: CollectionModelObject;
}

export interface CreatePropertyReferenceKommentarPatch2Request {
    id: string;
    collectionModelObject: CollectionModelObject;
}

export interface CreatePropertyReferenceKommentarPutRequest {
    id: string;
    collectionModelObject: CollectionModelObject;
}

export interface CreatePropertyReferenceKommentarPut1Request {
    id: string;
    collectionModelObject: CollectionModelObject;
}

export interface CreatePropertyReferenceKommentarPut2Request {
    id: string;
    collectionModelObject: CollectionModelObject;
}

export interface DeletePropertyReferenceIdKommentarDeleteRequest {
    id: string;
    propertyId: string;
}

export interface DeletePropertyReferenceIdKommentarDelete1Request {
    id: string;
    propertyId: string;
}

export interface DeletePropertyReferenceIdKommentarDelete2Request {
    id: string;
    propertyId: string;
}

export interface DeletePropertyReferenceKommentarDeleteRequest {
    id: string;
}

export interface DeletePropertyReferenceKommentarDelete1Request {
    id: string;
}

export interface DeletePropertyReferenceKommentarDelete2Request {
    id: string;
}

export interface FollowPropertyReferenceKommentarGetRequest {
    id: string;
    propertyId: string;
}

export interface FollowPropertyReferenceKommentarGet1Request {
    id: string;
}

export interface FollowPropertyReferenceKommentarGet2Request {
    id: string;
    propertyId: string;
}

export interface FollowPropertyReferenceKommentarGet21Request {
    id: string;
}

export interface FollowPropertyReferenceKommentarGet3Request {
    id: string;
    propertyId: string;
}

export interface FollowPropertyReferenceKommentarGet31Request {
    id: string;
}

/**
 * 
 */
export class KommentarPropertyReferenceControllerApi extends runtime.BaseAPI {

    /**
     * patch-bauvorhaben-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPatchRaw(requestParameters: CreatePropertyReferenceKommentarPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelBauvorhaben>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createPropertyReferenceKommentarPatch.');
        }

        if (requestParameters.collectionModelObject === null || requestParameters.collectionModelObject === undefined) {
            throw new runtime.RequiredError('collectionModelObject','Required parameter requestParameters.collectionModelObject was null or undefined when calling createPropertyReferenceKommentarPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/kommentars/{id}/bauvorhaben`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionModelObjectToJSON(requestParameters.collectionModelObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelBauvorhabenFromJSON(jsonValue));
    }

    /**
     * patch-bauvorhaben-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPatch(requestParameters: CreatePropertyReferenceKommentarPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelBauvorhaben> {
        const response = await this.createPropertyReferenceKommentarPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * patch-dokument-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPatch1Raw(requestParameters: CreatePropertyReferenceKommentarPatch1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelDokument>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createPropertyReferenceKommentarPatch1.');
        }

        if (requestParameters.collectionModelObject === null || requestParameters.collectionModelObject === undefined) {
            throw new runtime.RequiredError('collectionModelObject','Required parameter requestParameters.collectionModelObject was null or undefined when calling createPropertyReferenceKommentarPatch1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/kommentars/{id}/dokumente`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionModelObjectToJSON(requestParameters.collectionModelObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelDokumentFromJSON(jsonValue));
    }

    /**
     * patch-dokument-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPatch1(requestParameters: CreatePropertyReferenceKommentarPatch1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelDokument> {
        const response = await this.createPropertyReferenceKommentarPatch1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * patch-infrastruktureinrichtung-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPatch2Raw(requestParameters: CreatePropertyReferenceKommentarPatch2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelInfrastruktureinrichtung>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createPropertyReferenceKommentarPatch2.');
        }

        if (requestParameters.collectionModelObject === null || requestParameters.collectionModelObject === undefined) {
            throw new runtime.RequiredError('collectionModelObject','Required parameter requestParameters.collectionModelObject was null or undefined when calling createPropertyReferenceKommentarPatch2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/kommentars/{id}/infrastruktureinrichtung`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionModelObjectToJSON(requestParameters.collectionModelObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelInfrastruktureinrichtungFromJSON(jsonValue));
    }

    /**
     * patch-infrastruktureinrichtung-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPatch2(requestParameters: CreatePropertyReferenceKommentarPatch2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelInfrastruktureinrichtung> {
        const response = await this.createPropertyReferenceKommentarPatch2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * update-bauvorhaben-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPutRaw(requestParameters: CreatePropertyReferenceKommentarPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelBauvorhaben>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createPropertyReferenceKommentarPut.');
        }

        if (requestParameters.collectionModelObject === null || requestParameters.collectionModelObject === undefined) {
            throw new runtime.RequiredError('collectionModelObject','Required parameter requestParameters.collectionModelObject was null or undefined when calling createPropertyReferenceKommentarPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/kommentars/{id}/bauvorhaben`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionModelObjectToJSON(requestParameters.collectionModelObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelBauvorhabenFromJSON(jsonValue));
    }

    /**
     * update-bauvorhaben-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPut(requestParameters: CreatePropertyReferenceKommentarPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelBauvorhaben> {
        const response = await this.createPropertyReferenceKommentarPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * update-dokument-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPut1Raw(requestParameters: CreatePropertyReferenceKommentarPut1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelDokument>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createPropertyReferenceKommentarPut1.');
        }

        if (requestParameters.collectionModelObject === null || requestParameters.collectionModelObject === undefined) {
            throw new runtime.RequiredError('collectionModelObject','Required parameter requestParameters.collectionModelObject was null or undefined when calling createPropertyReferenceKommentarPut1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/kommentars/{id}/dokumente`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionModelObjectToJSON(requestParameters.collectionModelObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelDokumentFromJSON(jsonValue));
    }

    /**
     * update-dokument-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPut1(requestParameters: CreatePropertyReferenceKommentarPut1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelDokument> {
        const response = await this.createPropertyReferenceKommentarPut1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * update-infrastruktureinrichtung-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPut2Raw(requestParameters: CreatePropertyReferenceKommentarPut2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelInfrastruktureinrichtung>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createPropertyReferenceKommentarPut2.');
        }

        if (requestParameters.collectionModelObject === null || requestParameters.collectionModelObject === undefined) {
            throw new runtime.RequiredError('collectionModelObject','Required parameter requestParameters.collectionModelObject was null or undefined when calling createPropertyReferenceKommentarPut2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/kommentars/{id}/infrastruktureinrichtung`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CollectionModelObjectToJSON(requestParameters.collectionModelObject),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelInfrastruktureinrichtungFromJSON(jsonValue));
    }

    /**
     * update-infrastruktureinrichtung-by-kommentar-Id
     */
    async createPropertyReferenceKommentarPut2(requestParameters: CreatePropertyReferenceKommentarPut2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelInfrastruktureinrichtung> {
        const response = await this.createPropertyReferenceKommentarPut2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete-bauvorhaben-by-kommentar-Id
     */
    async deletePropertyReferenceIdKommentarDeleteRaw(requestParameters: DeletePropertyReferenceIdKommentarDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePropertyReferenceIdKommentarDelete.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling deletePropertyReferenceIdKommentarDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/bauvorhaben/{propertyId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"propertyId"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete-bauvorhaben-by-kommentar-Id
     */
    async deletePropertyReferenceIdKommentarDelete(requestParameters: DeletePropertyReferenceIdKommentarDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyReferenceIdKommentarDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * delete-dokument-by-kommentar-Id
     */
    async deletePropertyReferenceIdKommentarDelete1Raw(requestParameters: DeletePropertyReferenceIdKommentarDelete1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePropertyReferenceIdKommentarDelete1.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling deletePropertyReferenceIdKommentarDelete1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/dokumente/{propertyId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"propertyId"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete-dokument-by-kommentar-Id
     */
    async deletePropertyReferenceIdKommentarDelete1(requestParameters: DeletePropertyReferenceIdKommentarDelete1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyReferenceIdKommentarDelete1Raw(requestParameters, initOverrides);
    }

    /**
     * delete-infrastruktureinrichtung-by-kommentar-Id
     */
    async deletePropertyReferenceIdKommentarDelete2Raw(requestParameters: DeletePropertyReferenceIdKommentarDelete2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePropertyReferenceIdKommentarDelete2.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling deletePropertyReferenceIdKommentarDelete2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/infrastruktureinrichtung/{propertyId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"propertyId"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete-infrastruktureinrichtung-by-kommentar-Id
     */
    async deletePropertyReferenceIdKommentarDelete2(requestParameters: DeletePropertyReferenceIdKommentarDelete2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyReferenceIdKommentarDelete2Raw(requestParameters, initOverrides);
    }

    /**
     * delete-bauvorhaben-by-kommentar-Id
     */
    async deletePropertyReferenceKommentarDeleteRaw(requestParameters: DeletePropertyReferenceKommentarDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePropertyReferenceKommentarDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/bauvorhaben`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete-bauvorhaben-by-kommentar-Id
     */
    async deletePropertyReferenceKommentarDelete(requestParameters: DeletePropertyReferenceKommentarDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyReferenceKommentarDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * delete-dokument-by-kommentar-Id
     */
    async deletePropertyReferenceKommentarDelete1Raw(requestParameters: DeletePropertyReferenceKommentarDelete1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePropertyReferenceKommentarDelete1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/dokumente`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete-dokument-by-kommentar-Id
     */
    async deletePropertyReferenceKommentarDelete1(requestParameters: DeletePropertyReferenceKommentarDelete1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyReferenceKommentarDelete1Raw(requestParameters, initOverrides);
    }

    /**
     * delete-infrastruktureinrichtung-by-kommentar-Id
     */
    async deletePropertyReferenceKommentarDelete2Raw(requestParameters: DeletePropertyReferenceKommentarDelete2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePropertyReferenceKommentarDelete2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/infrastruktureinrichtung`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete-infrastruktureinrichtung-by-kommentar-Id
     */
    async deletePropertyReferenceKommentarDelete2(requestParameters: DeletePropertyReferenceKommentarDelete2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyReferenceKommentarDelete2Raw(requestParameters, initOverrides);
    }

    /**
     * get-bauvorhaben-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGetRaw(requestParameters: FollowPropertyReferenceKommentarGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelBauvorhaben>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling followPropertyReferenceKommentarGet.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling followPropertyReferenceKommentarGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/bauvorhaben/{propertyId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"propertyId"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelBauvorhabenFromJSON(jsonValue));
    }

    /**
     * get-bauvorhaben-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet(requestParameters: FollowPropertyReferenceKommentarGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelBauvorhaben> {
        const response = await this.followPropertyReferenceKommentarGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get-bauvorhaben-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet1Raw(requestParameters: FollowPropertyReferenceKommentarGet1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelBauvorhaben>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling followPropertyReferenceKommentarGet1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/bauvorhaben`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelBauvorhabenFromJSON(jsonValue));
    }

    /**
     * get-bauvorhaben-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet1(requestParameters: FollowPropertyReferenceKommentarGet1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelBauvorhaben> {
        const response = await this.followPropertyReferenceKommentarGet1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get-dokument-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet2Raw(requestParameters: FollowPropertyReferenceKommentarGet2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelDokument>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling followPropertyReferenceKommentarGet2.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling followPropertyReferenceKommentarGet2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/dokumente/{propertyId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"propertyId"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelDokumentFromJSON(jsonValue));
    }

    /**
     * get-dokument-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet2(requestParameters: FollowPropertyReferenceKommentarGet2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelDokument> {
        const response = await this.followPropertyReferenceKommentarGet2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get-dokument-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet21Raw(requestParameters: FollowPropertyReferenceKommentarGet21Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelDokument>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling followPropertyReferenceKommentarGet21.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/dokumente`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelDokumentFromJSON(jsonValue));
    }

    /**
     * get-dokument-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet21(requestParameters: FollowPropertyReferenceKommentarGet21Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelDokument> {
        const response = await this.followPropertyReferenceKommentarGet21Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get-infrastruktureinrichtung-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet3Raw(requestParameters: FollowPropertyReferenceKommentarGet3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelInfrastruktureinrichtung>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling followPropertyReferenceKommentarGet3.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling followPropertyReferenceKommentarGet3.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/infrastruktureinrichtung/{propertyId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"propertyId"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelInfrastruktureinrichtungFromJSON(jsonValue));
    }

    /**
     * get-infrastruktureinrichtung-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet3(requestParameters: FollowPropertyReferenceKommentarGet3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelInfrastruktureinrichtung> {
        const response = await this.followPropertyReferenceKommentarGet3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get-infrastruktureinrichtung-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet31Raw(requestParameters: FollowPropertyReferenceKommentarGet31Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelInfrastruktureinrichtung>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling followPropertyReferenceKommentarGet31.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/kommentars/{id}/infrastruktureinrichtung`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelInfrastruktureinrichtungFromJSON(jsonValue));
    }

    /**
     * get-infrastruktureinrichtung-by-kommentar-Id
     */
    async followPropertyReferenceKommentarGet31(requestParameters: FollowPropertyReferenceKommentarGet31Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelInfrastruktureinrichtung> {
        const response = await this.followPropertyReferenceKommentarGet31Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
