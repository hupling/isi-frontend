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
import type { AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto } from './AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto';
import {
    AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoFromJSON,
    AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoFromJSONTyped,
    AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoToJSON,
} from './AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto';

/**
 * 
 * @export
 * @interface BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf
 */
export interface BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf {
    /**
     * 
     * @type {Array<AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto>}
     * @memberof BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf
     */
    abfragevariantenBaugenehmigungsverfahren?: Array<AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto>;
    /**
     * 
     * @type {Array<AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto>}
     * @memberof BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf
     */
    abfragevariantenSachbearbeitungBaugenehmigungsverfahren?: Array<AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDto>;
}

/**
 * Check if a given object implements the BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf interface.
 */
export function instanceOfBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOfFromJSON(json: any): BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf {
    return BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOfFromJSONTyped(json, false);
}

export function BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'abfragevariantenBaugenehmigungsverfahren': !exists(json, 'abfragevariantenBaugenehmigungsverfahren') ? undefined : ((json['abfragevariantenBaugenehmigungsverfahren'] as Array<any>).map(AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoFromJSON)),
        'abfragevariantenSachbearbeitungBaugenehmigungsverfahren': !exists(json, 'abfragevariantenSachbearbeitungBaugenehmigungsverfahren') ? undefined : ((json['abfragevariantenSachbearbeitungBaugenehmigungsverfahren'] as Array<any>).map(AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoFromJSON)),
    };
}

export function BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOfToJSON(value?: BaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'abfragevariantenBaugenehmigungsverfahren': value.abfragevariantenBaugenehmigungsverfahren === undefined ? undefined : ((value.abfragevariantenBaugenehmigungsverfahren as Array<any>).map(AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoToJSON)),
        'abfragevariantenSachbearbeitungBaugenehmigungsverfahren': value.abfragevariantenSachbearbeitungBaugenehmigungsverfahren === undefined ? undefined : ((value.abfragevariantenSachbearbeitungBaugenehmigungsverfahren as Array<any>).map(AbfragevarianteBaugenehmigungsverfahrenBedarfsmeldungErfolgtDtoToJSON)),
    };
}

