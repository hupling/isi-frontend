/* tslint:disable */
/* eslint-disable */
/**
 * ISI Backend API
 * ISI Backend - Serivce für das Informationssystem für soziale Infrastrukturplanung
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * Contact: noreply@mail.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import {
  FoerdermixStammDto,
  FoerdermixStammDtoFromJSON,
  FoerdermixStammDtoToJSON,
  InformationResponseDto,
  InformationResponseDtoFromJSON,
  InformationResponseDtoToJSON,
} from "../models";

export interface DeleteFoerdermixStammByIdRequest {
  id: string;
}

export interface GetFoerdermixStammByIdRequest {
  id: string;
}

export interface SaveFoerdermixStammRequest {
  foerdermixStammDto: FoerdermixStammDto;
}

export interface UpdateFoerdermixStammRequest {
  foerdermixStammDto: FoerdermixStammDto;
}

/**
 *
 */
export class FoerdermixStammApi extends runtime.BaseAPI {
  /**
   * Löschen eines FoerdermixStamm
   */
  async deleteFoerdermixStammByIdRaw(
    requestParameters: DeleteFoerdermixStammByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling deleteFoerdermixStammById."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/stammdaten/foerdermix/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Löschen eines FoerdermixStamm
   */
  async deleteFoerdermixStammById(
    requestParameters: DeleteFoerdermixStammByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<void> {
    await this.deleteFoerdermixStammByIdRaw(requestParameters, initOverrides);
  }

  /**
   * Das Ergebnis wird nach der Bezeichnung aufsteigend sortiert
   * Lade alle Fördermix Stammdaten
   */
  async getFoerdermixStaemmeRaw(
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<Array<FoerdermixStammDto>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/stammdaten/foerdermix`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FoerdermixStammDtoFromJSON));
  }

  /**
   * Das Ergebnis wird nach der Bezeichnung aufsteigend sortiert
   * Lade alle Fördermix Stammdaten
   */
  async getFoerdermixStaemme(
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<Array<FoerdermixStammDto>> {
    const response = await this.getFoerdermixStaemmeRaw(initOverrides);
    return await response.value();
  }

  /**
   * Lesen eines FoerdermixStamm
   */
  async getFoerdermixStammByIdRaw(
    requestParameters: GetFoerdermixStammByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<FoerdermixStammDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        "id",
        "Required parameter requestParameters.id was null or undefined when calling getFoerdermixStammById."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/stammdaten/foerdermix/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => FoerdermixStammDtoFromJSON(jsonValue));
  }

  /**
   * Lesen eines FoerdermixStamm
   */
  async getFoerdermixStammById(
    requestParameters: GetFoerdermixStammByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<FoerdermixStammDto> {
    const response = await this.getFoerdermixStammByIdRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Anlegen eines FoerdermixStamm
   */
  async saveFoerdermixStammRaw(
    requestParameters: SaveFoerdermixStammRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<FoerdermixStammDto>> {
    if (requestParameters.foerdermixStammDto === null || requestParameters.foerdermixStammDto === undefined) {
      throw new runtime.RequiredError(
        "foerdermixStammDto",
        "Required parameter requestParameters.foerdermixStammDto was null or undefined when calling saveFoerdermixStamm."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/stammdaten/foerdermix`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: FoerdermixStammDtoToJSON(requestParameters.foerdermixStammDto),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => FoerdermixStammDtoFromJSON(jsonValue));
  }

  /**
   * Anlegen eines FoerdermixStamm
   */
  async saveFoerdermixStamm(
    requestParameters: SaveFoerdermixStammRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<FoerdermixStammDto> {
    const response = await this.saveFoerdermixStammRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Aktualisierung eines FoerdermixStamm
   */
  async updateFoerdermixStammRaw(
    requestParameters: UpdateFoerdermixStammRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<runtime.ApiResponse<FoerdermixStammDto>> {
    if (requestParameters.foerdermixStammDto === null || requestParameters.foerdermixStammDto === undefined) {
      throw new runtime.RequiredError(
        "foerdermixStammDto",
        "Required parameter requestParameters.foerdermixStammDto was null or undefined when calling updateFoerdermixStamm."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/stammdaten/foerdermix`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: FoerdermixStammDtoToJSON(requestParameters.foerdermixStammDto),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => FoerdermixStammDtoFromJSON(jsonValue));
  }

  /**
   * Aktualisierung eines FoerdermixStamm
   */
  async updateFoerdermixStamm(
    requestParameters: UpdateFoerdermixStammRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction
  ): Promise<FoerdermixStammDto> {
    const response = await this.updateFoerdermixStammRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
