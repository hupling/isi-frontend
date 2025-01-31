import type { MittelschuleDto } from "@/api/api-client/isi-backend";
import SchuleModel from "@/types/model/infrastruktureinrichtung/SchuleModel";
import _ from "lodash";
import AdresseModel from "@/types/model/common/AdresseModel";
import { createAdresseDto, createSchuleDto } from "@/utils/Factories";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MittelschuleModel extends MittelschuleDto {}
class MittelschuleModel {
  constructor(mittelschule: MittelschuleDto) {
    Object.assign(this, mittelschule, {});
    if (_.isNil(mittelschule.schule)) {
      this.schule = new SchuleModel(createSchuleDto());
    } else {
      this.schule = new SchuleModel(mittelschule.schule);
    }
    if (_.isNil(mittelschule.adresse)) {
      this.adresse = new AdresseModel(createAdresseDto());
    } else {
      this.adresse = new AdresseModel(mittelschule.adresse);
    }
  }
}
export { MittelschuleModel as default };
