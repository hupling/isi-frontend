<template>
  <field-group-card :card-title="geplanteAnzahlWohneinheitenTitle">
    <v-row justify="center">
      <v-col
        cols="12"
        md="4"
      >
        <num-field
          id="we_geplant_field"
          ref="weGeplantField"
          v-model="baugebiet.weGeplant"
          :disabled="!isEditable"
          :rules="[validateWohneinheiten(abfragevariante)]"
          class="mx-3"
          label="Gesamt"
          integer
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <num-field
          id="we_baurechtlich_genehmigt_field"
          ref="weBaurechtlichGenehmigtField"
          v-model="baugebiet.weBaurechtlichGenehmigt"
          :disabled="!isEditable"
          class="mx-3"
          label="Baurechtlich genehmigt"
          integer
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <num-field
          id="we_baurechtlich_festgesetzt_field"
          ref="weBaurechtlichFestgesetztField"
          v-model="baugebiet.weBaurechtlichFestgesetzt"
          :disabled="!isEditable"
          class="mx-3"
          label="Baurechtlich festgesetzt"
          integer
        />
      </v-col>
    </v-row>
  </field-group-card>
</template>

<script setup lang="ts">
import type { AbfragevarianteWeiteresVerfahrenDto } from "@/api/api-client/isi-backend";
import FieldGroupCard from "@/components/common/FieldGroupCard.vue";
import NumField from "@/components/common/NumField.vue";
import BaugebietModel from "@/types/model/baugebiete/BaugebietModel";
import {
  verteilteWohneinheitenAbfragevariante,
  verteilteWohneinheitenAbfragevarianteFormatted,
  wohneinheitenAbfragevariante,
  wohneinheitenAbfragevarianteFormatted,
} from "@/utils/CalculationUtil";
import type { Rule } from "@/utils/FieldValidationRules";

interface Props {
  abfragevariante?: AbfragevarianteWeiteresVerfahrenDto;
  isEditable?: boolean;
}

const baugebiet = defineModel<BaugebietModel>({ required: true });

const geplanteAnzahlWohneinheitenTitle = "Geplante Anzahl Wohneinheiten";

withDefaults(defineProps<Props>(), { isEditable: false });

function validateWohneinheiten(abfragevariante: AbfragevarianteWeiteresVerfahrenDto | undefined): Rule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (v: string | undefined | null) => {
    return (
      verteilteWohneinheitenAbfragevariante(abfragevariante) <= wohneinheitenAbfragevariante(abfragevariante) ||
      `Insgesamt sind ${verteilteWohneinheitenAbfragevarianteFormatted(
        abfragevariante,
      )} von ${wohneinheitenAbfragevarianteFormatted(abfragevariante)} verteilt.`
    );
  };
}
</script>
