<template>
  <v-container>
    <field-group-card>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-select
            id="bauvorhaben_standVerfahren_dropdown"
            v-model="bauvorhaben.standVerfahren"
            variant="underlined"
            :items="lookupStore.standVerfahren"
            item-value="key"
            item-title="value"
            :rules="[pflichtfeld, notUnspecified]"
            :disabled="!isEditable"
            @update:model-value="formChanged"
          >
            <template #label> Stand des Verfahrens <span class="text-secondary">*</span> </template>
          </v-select>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-slide-y-reverse-transition>
            <v-text-field
              v-if="standVerfahrenFreieEingabeVisible"
              id="stand_verfahren_freie_eingabe_field"
              ref="standVerfahrenFreieEingabeField"
              v-model="bauvorhaben.standVerfahrenFreieEingabe"
              variant="underlined"
              :disabled="!isEditable"
              label="Freie Eingabe für Stand des Verfahrens"
              maxlength="1000"
              @update:model-value="formChanged"
            />
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <num-field
            id="bauvorhaben_grundstuecksgroesse"
            v-model="grundstuecksgroesse"
            label="Grundstücksgröße"
            :suffix="SQUARE_METER"
            :disabled="true"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            id="bauvorhaben_bauvorhabenNummer"
            v-model="bauvorhaben.bauvorhabenNummer"
            variant="underlined"
            disabled
            label="Bauvorhabennummer"
          />
        </v-col>
      </v-row>
    </field-group-card>
    <adresse-component
      id="bauvorhaben_adresse_component"
      v-model="bauvorhaben.adresse"
      :is-editable="isEditable"
    />
    <verortung
      id="verortung_component"
      v-model="bauvorhaben.verortung"
      :context="Context.BAUVORHABEN"
      :look-at="bauvorhaben.adresse"
    />
    <field-group-card card-title="Allgemeine Informationen zum Bauvorhaben">
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            id="bauvorhaben_wesentliche_rechtsgrundlage_dropdown"
            v-model="bauvorhaben.wesentlicheRechtsgrundlage"
            :items="lookupStore.wesentlicheRechtsgrundlage"
            variant="underlined"
            item-value="key"
            item-title="value"
            multiple
            chips
            :rules="[pflichtfeldMehrfachauswahl, notUnspecified]"
            :disabled="!isEditable"
            @update:model-value="formChanged"
          >
            <template #label> Wesentliche Rechtsgrundlage <span class="text-secondary">*</span> </template>
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
              ref="wesentlicheRechtsgrundlageFreieEingabeField"
              v-model="bauvorhaben.wesentlicheRechtsgrundlageFreieEingabe"
              variant="underlined"
              :disabled="!isEditable"
              label="Freie Eingabe für Wesentliche Rechtsgrundlage"
              maxlength="1000"
              @update:model-value="formChanged"
            />
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-autocomplete
            id="bauvorhaben_artFnp_dropdown"
            v-model="bauvorhaben.artFnp"
            :items="lookupStore.artBaulicheNutzungBauvorhaben"
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
              Art der baulichen Nutzung
              <span class="text-secondary">*</span>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-slide-y-reverse-transition>
            <v-text-field
              v-if="artFnpFreieEingabeVisible"
              id="art_fnp_freie_eingabe_field"
              ref="artFnpFreieEingabeField"
              v-model="bauvorhaben.artFnpFreieEingabe"
              variant="underlined"
              :disabled="!isEditable"
              label="Freie Eingabe für Art der baulichen Nutzung"
              maxlength="1000"
              @update:model-value="formChanged"
            />
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            id="bauvorhaben_bebauungsplannummer"
            v-model="bauvorhaben.bebauungsplannummer"
            label="Bebauungsplannummer"
            variant="underlined"
            maxlength="255"
            :disabled="!isEditable"
            @update:model-value="formChanged"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            id="bauvorhaben_fisnummer"
            v-model="bauvorhaben.fisNummer"
            label="FIS-Nummer"
            variant="underlined"
            maxlength="255"
            :disabled="!isEditable"
            @update:model-value="formChanged"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            id="bauvorhaben_anmerkung"
            v-model="bauvorhaben.anmerkung"
            label="Anmerkung"
            variant="underlined"
            rows="1"
            auto-grow
            maxlength="1000"
            :disabled="!isEditable"
            @update:model-value="formChanged"
          />
        </v-col>
      </v-row>
    </field-group-card>
    <dokumente
      v-if="componentSercurity.areDokumenteVisible(Context.BAUVORHABEN)"
      id="bauvorhaben_dokumente_component"
      v-model="bauvorhaben.dokumente"
      :name-root-folder="nameRootFolder"
      :is-dokumente-editable="isEditable"
      @change="formChanged"
    />
    <field-group-card card-title="SoBoN">
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
        >
          <tri-switch
            id="bauvorhaben_sobonRelevant_triswitch"
            v-model="bauvorhaben.sobonRelevant"
            off-text="Nein"
            on-text="Ja"
            :rules="[notUnspecified]"
            :disabled="!isEditable"
          >
            <template #label> SoBoN-relevant <span class="text-secondary">*</span> </template>
          </tri-switch>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-slide-y-reverse-transition>
            <v-select
              v-if="sobonJahrVisible"
              id="bauvorhaben_sobonJahr_dropdown"
              v-model="bauvorhaben.sobonJahr"
              variant="underlined"
              :items="lookupStore.sobonVerfahrensgrundsaetzeJahr"
              item-value="key"
              item-title="value"
              :rules="[pflichtfeld]"
              :disabled="!isEditable"
              @update:model-value="formChanged"
            >
              <template #label>
                Jahr der anzuwendenden Verfahrensgrundsätze der SoBoN <span class="text-secondary">*</span>
              </template>
            </v-select>
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
    </field-group-card>
    <field-group-card card-title="Zugehörige Infrastruktureinrichtungen und Abfragen">
      <referenced-items-list />
    </field-group-card>
  </v-container>
</template>

<script setup lang="ts">
import _ from "lodash";
import {
  type GemarkungDto,
  type FlurstueckDto,
  UncertainBoolean,
  BauvorhabenDtoWesentlicheRechtsgrundlageEnum,
  BauvorhabenDtoStandVerfahrenEnum,
  BauvorhabenDtoArtFnpEnum,
} from "@/api/api-client/isi-backend";
import { pflichtfeld, pflichtfeldMehrfachauswahl, notUnspecified } from "@/utils/FieldValidationRules";
import { SQUARE_METER } from "@/utils/FieldPrefixesSuffixes";
import Dokumente from "@/components/common/dokumente/Dokumente.vue";
import BauvorhabenModel from "@/types/model/bauvorhaben/BauvorhabenModel";
import FieldGroupCard from "@/components/common/FieldGroupCard.vue";
import NumField from "@/components/common/NumField.vue";
import TriSwitch from "@/components/common/TriSwitch.vue";
import ReferencedItemsList from "@/components/bauvorhaben/ReferencedItemsList.vue";
import { Context } from "@/utils/Context";
import Verortung from "@/components/common/Verortung.vue";
import AdresseComponent from "@/components/common/AdresseComponent.vue";
import { useLookupStore } from "@/stores/LookupStore";
import { useSaveLeave } from "@/composables/SaveLeave";
import { ref, watch } from "vue";
import { useComponentSecurity } from "@/composables/security/ComponentSecurity";

interface Props {
  isEditable?: boolean;
}

const lookupStore = useLookupStore();
const componentSercurity = useComponentSecurity();
const { formChanged } = useSaveLeave();
const bauvorhaben = defineModel<BauvorhabenModel>({ required: true });
const sobonJahrVisible = ref(false);
const standVerfahrenFreieEingabeVisible = ref(false);
const artFnpFreieEingabeVisible = ref(false);
const wesentlicheRechtsgrundlageFreieEingabeVisible = ref(false);
const grundstuecksgroesse = ref(Number.NaN);
const nameRootFolder = "bauvorhaben";

withDefaults(defineProps<Props>(), { isEditable: false });

watch(
  () => bauvorhaben.value.verortung?.gemarkungen,
  () => {
    let newGrundstuecksgroesse = Number.NaN;

    if (bauvorhaben.value.verortung?.gemarkungen) {
      newGrundstuecksgroesse = 0;
      bauvorhaben.value.verortung.gemarkungen.forEach((gemarkung: GemarkungDto) => {
        gemarkung.flurstuecke.forEach((flurstueck: FlurstueckDto) => {
          if (!_.isNil(flurstueck.flaecheQm)) {
            newGrundstuecksgroesse += flurstueck.flaecheQm;
          }
        });
      });
    }

    bauvorhaben.value.grundstuecksgroesse = newGrundstuecksgroesse;
    grundstuecksgroesse.value = newGrundstuecksgroesse;
  },
  { deep: true, immediate: true },
);

watch(
  () => bauvorhaben.value.sobonRelevant,
  () => {
    if (bauvorhaben.value.sobonRelevant === UncertainBoolean.True) {
      sobonJahrVisible.value = true;
    } else {
      sobonJahrVisible.value = false;
      bauvorhaben.value.sobonJahr = undefined;
    }
  },
  { immediate: true },
);

watch(
  () => bauvorhaben.value.wesentlicheRechtsgrundlage,
  () => {
    if (
      bauvorhaben.value.wesentlicheRechtsgrundlage?.includes(BauvorhabenDtoWesentlicheRechtsgrundlageEnum.FreieEingabe)
    ) {
      wesentlicheRechtsgrundlageFreieEingabeVisible.value = true;
    } else {
      bauvorhaben.value.wesentlicheRechtsgrundlageFreieEingabe = undefined;
      wesentlicheRechtsgrundlageFreieEingabeVisible.value = false;
    }
  },
  { immediate: true, deep: true },
);

watch(
  () => bauvorhaben.value.standVerfahren,
  () => {
    if (bauvorhaben.value.standVerfahren?.includes(BauvorhabenDtoStandVerfahrenEnum.FreieEingabe)) {
      standVerfahrenFreieEingabeVisible.value = true;
    } else {
      bauvorhaben.value.standVerfahrenFreieEingabe = undefined;
      standVerfahrenFreieEingabeVisible.value = false;
    }
  },
  { immediate: true },
);

watch(
  () => bauvorhaben.value.artFnp,
  () => {
    if (bauvorhaben.value.artFnp?.includes(BauvorhabenDtoArtFnpEnum.FreieEingabe)) {
      artFnpFreieEingabeVisible.value = true;
    } else {
      bauvorhaben.value.artFnpFreieEingabe = undefined;
      artFnpFreieEingabeVisible.value = false;
    }
  },
  { immediate: true, deep: true },
);
</script>
