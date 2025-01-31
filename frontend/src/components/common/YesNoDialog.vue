<template>
  <v-dialog
    v-model="dialogOpen"
    persistent
    width="50%"
  >
    <template #activator="{ props: activatorProps }">
      <template v-if="buttontext">
        <v-btn
          id="yes_no_dialog_buttontext"
          color="primary"
          v-bind="activatorProps"
        >
          {{ buttontext }}
        </v-btn>
      </template>
      <template v-else-if="icontext">
        <v-btn
          variant="text"
          color="primary"
          v-bind="activatorProps"
        >
          <v-icon size="large">
            {{ icontext }}
          </v-icon>
        </v-btn>
      </template>
    </template>
    <v-card class="overflow-x-hidden">
      <v-card-title>
        {{ dialogtitle }}
      </v-card-title>
      <v-card-text>
        {{ dialogtext }}
      </v-card-text>
      <v-textarea
        v-if="anmerkungMaxLength > 0"
        id="yes_no_dialog-text-area"
        ref="textarea"
        class="textarea"
        variant="underlined"
        label="Anmerkung"
        auto-grow
        rows="1"
        :maxlength="anmerkungMaxLength"
        @update:model-value="anmerkung"
      >
      </v-textarea>
      <v-card-actions>
        <v-spacer />
        <v-btn
          id="yes_no_dialog-btn-no"
          @click="no"
        >
          {{ noText }}
        </v-btn>
        <v-btn
          id="yes_no_dialog-btn-yes"
          variant="elevated"
          color="primary"
          @click="yes"
        >
          {{ yesText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { VTextarea } from "vuetify/components";

/**
 * Der YesNo-Dialog ist ein generischer Dialog zur binären Abfrage beim Nutzer.
 * So kann z.B. die Bestätigung für das Löschen einer Entität damit realisiert werden.
 *
 * Da das Bestätigen einer Aktion in der Regel mit einem Button zusammenhängt, bietet der
 * YesNoDialog diesen gleich mit an. Über `buttontext` und `icontext` kann dieser konfiguriert werden.
 *
 * Wenn sowohl kein `buttontext` als auch `icontext` nicht gesetzt sind, kann der YesNoDialog auch
 * als reiner Dialog verwendet werden. Hierzu wird das Value vom Dialog durchgereicht.
 *
 * Der Text des "Ja"- bzw. des "Nein"-Buttons kann über `yes-text` bzw. `no-text` gesetzt werden.
 *
 * Die Bestätigung des Dialogs wird über ein `yes` Event signalisiert. Analog erfolgt die
 * Signalisierung der Abweisung durch ein `no` Event.
 *
 * `anmerkung-max-length` sagt aus, wie viele Zeichen maximal in dem Anmerkungsfeld sein können.
 * Beim Default-Wert 0 wird kein Anmerkungsfeld angeboten.
 *
 * Beispiel:
 * <yes-no-dialogJ
 *    v-model="deleteDialog"
 *    buttontext="Löschen"
 *    dialogtitle="Löschen?"
 *    dialogtext="Wollen Sie die Entität wirklich löschen?"
 *    @no="deleteDialog = false"
 *    @yes="deleteSome">
 * </yes-no-dialog>
 */

interface Props {
  dialogtitle: string;
  dialogtext: string;
  yesText?: string;
  noText?: string;
  anmerkungMaxLength?: number;
  buttontext?: string;
  icontext?: string;
}

interface Emits {
  (event: "no", value: void): void;
  (event: "yes", value: void): void;
  (event: "anmerkung", value: string): void;
}

const emit = defineEmits<Emits>();
const dialogOpen = defineModel<boolean>({ required: true });
const textarea = ref<VTextarea | null>(null);

withDefaults(defineProps<Props>(), { yesText: "Ja", noText: "Nein", anmerkungMaxLength: 0 });

function no(): void {
  emit("no");
}

function yes(): void {
  emit("yes");
}

function anmerkung(value: string): void {
  emit("anmerkung", value);
}

function resetTextarea(): void {
  textarea.value?.reset();
}

defineExpose({ resetTextarea });
</script>

<style scoped>
.textarea {
  max-width: 700px;
  margin-left: 25px;
}
</style>
