<template>
  <field-group-card>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          id="name_field"
          v-model.trim="abfragevariante.name"
          :disabled="!isEditable"
          :rules="[pflichtfeld]"
          variant="underlined"
          maxlength="30"
          validate-on="blur"
          @update:model-value="formChanged"
        >
          <template #label> Name der Abfragevariante <span class="text-secondary">*</span> </template>
        </v-text-field>
      </v-col>
    </v-row>
  </field-group-card>
  <field-group-card>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <v-autocomplete
          id="wesentliche_rechtsgrundlage_dropdown"
          v-model="abfragevariante.wesentlicheRechtsgrundlage"
          :items="wesentlicheRechtsgrundlageList"
          variant="underlined"
          item-value="key"
          item-title="value"
          multiple
          chips
          :rules="[pflichtfeldMehrfachauswahl, notUnspecified]"
          :disabled="!isEditable"
          @update:model-value="formChanged"
        >
          <template #label>
            Wesentliche Rechtsgrundlage
            <span class="text-secondary">*</span>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-slide-y-reverse-transition>
          <v-text-field
            v-if="wesentlicheRechtsgrundlageFreieEingabeVisible"
            id="wesentliche_rechtsgrundlage_freie_eingabe_field"
            v-model="abfragevariante.wesentlicheRechtsgrundlageFreieEingabe"
            :disabled="!isEditable"
            variant="underlined"
            label="Freie Eingabe"
            maxlength="1000"
            @update:model-value="formChanged"
          />
        </v-slide-y-reverse-transition>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <num-field
          id="abfragevariante_realisierungvon"
          v-model="abfragevariante.realisierungVon"
          :disabled="!isEditable"
          label="Realisierung von (JJJJ)"
          year
          maxlength="4"
          required
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <num-field
          id="abfragevariante_realisierungBis"
          v-model="calcRealisierungBis"
          :disabled="true"
          label="Realisierung bis (JJJJ)"
          year
          maxlength="4"
          help="Nach Angabe bzw. Berechnung der Bauraten wird das Feld automatisch befüllt."
        />
      </v-col>
    </v-row>
  </field-group-card>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { AbfragevarianteWeiteresVerfahrenDtoWesentlicheRechtsgrundlageEnum } from "@/api/api-client/isi-backend";
import FieldGroupCard from "@/components/common/FieldGroupCard.vue";
import NumField from "@/components/common/NumField.vue";
import { useSaveLeave } from "@/composables/SaveLeave";
import { useLookupStore } from "@/stores/LookupStore";
import AbfragevarianteWeiteresVerfahrenModel from "@/types/model/abfragevariante/AbfragevarianteWeiteresVerfahrenModel";
import { notUnspecified, pflichtfeld, pflichtfeldMehrfachauswahl } from "@/utils/FieldValidationRules";
import _ from "lodash";

interface Props {
  isEditable?: boolean;
}

const abfragevariante = defineModel<AbfragevarianteWeiteresVerfahrenModel>({ required: true });

const wesentlicheRechtsgrundlageFreieEingabeVisible = ref<boolean | null>();

const lookupStore = useLookupStore();

const { formChanged } = useSaveLeave();

const wesentlicheRechtsgrundlageList = computed(() => lookupStore.wesentlicheRechtsgrundlage);

const calcRealisierungBis = computed(() => {
  const jahre: Array<number> | undefined = abfragevariante.value.bauabschnitte
    ?.flatMap((bauabschnitt) => bauabschnitt.baugebiete)
    .flatMap((baugebiet) => baugebiet.bauraten)
    .map((baurate) => baurate.jahr);
  return _.max(jahre);
});

withDefaults(defineProps<Props>(), { isEditable: false });

watch(() => abfragevariante.value.wesentlicheRechtsgrundlage, wesentlicheRechtsgrundlageChanged, { immediate: true });

function wesentlicheRechtsgrundlageChanged(): void {
  if (
    abfragevariante.value.wesentlicheRechtsgrundlage?.includes(
      AbfragevarianteWeiteresVerfahrenDtoWesentlicheRechtsgrundlageEnum.FreieEingabe,
    )
  ) {
    wesentlicheRechtsgrundlageFreieEingabeVisible.value = true;
  } else {
    abfragevariante.value.wesentlicheRechtsgrundlageFreieEingabe = undefined;
    wesentlicheRechtsgrundlageFreieEingabeVisible.value = false;
  }
}
</script>
