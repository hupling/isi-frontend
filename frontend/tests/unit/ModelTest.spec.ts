import { beforeEach, describe, expect, test } from "vitest";
import { AbfragevarianteBauleitplanverfahrenDtoWesentlicheRechtsgrundlageEnum } from "@/api/api-client/isi-backend";
import BauleitplanverfahrenModel from "@/types/model/abfrage/BauleitplanverfahrenModel";
import AbfragevarianteBauleitplanverfahrenModel from "@/types/model/abfragevariante/AbfragevarianteBauleitplanverfahrenModel";
import { createBauleitplanverfahrenDto, createAbfragevarianteBauleitplanverfahrenDto } from "@/utils/Factories";
import { createPinia, setActivePinia } from "pinia";

describe("ModelTest.spec.ts", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  test("Test BauleitplanverfahrenModel", () => {
    const dto = createBauleitplanverfahrenDto();
    expect(dto.adresse).not.toBeNull();
    expect(dto.abfragevariantenBauleitplanverfahren).toHaveLength(0);
    const model = new BauleitplanverfahrenModel(dto);
    expect(model.adresse).not.toBeNull();
    expect(dto.verortung).toBeUndefined();
  });

  test("Test AbfragevarianteBauleitplanverfahrenModel", () => {
    const abfrageDto = createBauleitplanverfahrenDto();
    const abfragevarianteDto = createAbfragevarianteBauleitplanverfahrenDto();
    abfragevarianteDto.abfragevariantenNr = 1;
    abfragevarianteDto.wesentlicheRechtsgrundlage?.push(
      AbfragevarianteBauleitplanverfahrenDtoWesentlicheRechtsgrundlageEnum.Innenbereich,
    );
    abfragevarianteDto.realisierungVon = 2022;
    abfragevarianteDto.gfWohnenGesamt = 123.45;
    abfragevarianteDto.gfWohnenBestandswohnbaurecht = 0.9;
    abfragevarianteDto.weSeniorinnenWohnen = 120;
    abfragevarianteDto.weStudentischesWohnen = 2;
    abfragevarianteDto.weWeiteresNichtInfrastrukturrelevantesWohnen = 2;
    abfrageDto.abfragevariantenBauleitplanverfahren?.push(abfragevarianteDto);
    const abfrageModel = new BauleitplanverfahrenModel(abfrageDto);
    expect(abfrageModel.abfragevariantenBauleitplanverfahren).toHaveLength(1);
    const abfragevarianteModel = abfrageModel
      .abfragevariantenBauleitplanverfahren?.[0] as AbfragevarianteBauleitplanverfahrenModel;
    expect(abfragevarianteModel).not.toBeUndefined();
    expect(abfragevarianteModel.wesentlicheRechtsgrundlage).contains(
      AbfragevarianteBauleitplanverfahrenDtoWesentlicheRechtsgrundlageEnum.Innenbereich,
    );
  });
});
