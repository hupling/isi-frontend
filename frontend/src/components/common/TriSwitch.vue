<template>
  <div class="d-flex">
    <v-label>
      <span :class="disabled ? 'text-grey' : ''">
        <slot name="label">{{ label }}</slot>
      </span>
    </v-label>
    <v-input
      class="pt-6"
      :model-value="valueInternal"
      :rules="rules"
      :disabled="disabled"
    >
      <template #default>
        <div class="mx-3" />
        <span :class="`annotation ${getAnnotationColor('off')}`">
          <slot name="offText">{{ offText }}</slot>
        </span>
        <input
          v-bind="$attrs"
          v-model="valueAsPosition"
          :class="`slider mx-2 ${backgroundColor}`"
          :disabled="disabled"
          :focused="focused"
          type="range"
          min="0"
          max="2"
          :step="collapsed ? 2 : 1"
          @change="formChanged"
          @focus="focused = true"
          @blur="focused = false"
        />
        <span :class="`annotation ${getAnnotationColor('on')}`">
          <slot name="onText">{{ onText }}</slot>
        </span>
      </template>
    </v-input>
  </div>
</template>

<script setup lang="ts">
/*
 * Eine Input-Komponente, welche sehr einem Switch ähnelt, jedoch einen mittleren Ausgangszustand hat.
 * Dieser Ausgangszustand ist nach einer Interaktion mit dem Switch nicht mehr erreichbar.
 *
 * Die Komponente erwartet einen String-Prop 'value', welcher einen der drei Werte von {@link UncertainBoolean} annehmen darf.
 * Sobald dieser Wert nicht 'UNDEFINED' ist, ist der entsprechende mittlere Ausgangszustand nicht mehr erreichbar.
 *
 * Mit den Props 'off-text' und 'on-text' kann jeweils eine Anmerkung für den "aus"- bzw. "an"-Zustand angegeben werden.
 * Die Props 'label', 'disabled' und 'rules' verhalten sich wie bei anderen Input-Komponenten in Vuetfiy.
 * Darüber hinaus können 'label', 'offText' und 'onText' auch über gleichnamige Slots befüllt werden.
 */

import { computed, ref } from "vue";
import type { VInput } from "vuetify/components";
import { UncertainBoolean } from "@/api/api-client/isi-backend";
import { useSaveLeave } from "@/composables/SaveLeave";
import { Rule } from "@/utils/FieldValidationRules";

type Position = "0" | "1" | "2";

interface Props {
  label?: string;
  offText?: string;
  onText?: string;
  disabled?: boolean;
  rules?: Rule[];
}

const { formChanged } = useSaveLeave();
const props = withDefaults(defineProps<Props>(), { disabled: false });
const valueInternal = defineModel<UncertainBoolean>({ required: true });
const focused = ref(false);
const collapsed = computed(() => valueInternal.value !== UncertainBoolean.Unspecified);

/**
 * Liest oder setzt den Zustand des TriSwitches in Form von einer Position.
 */
const valueAsPosition = computed({
  get() {
    switch (valueInternal.value) {
      case UncertainBoolean.True:
        return "2";
      case UncertainBoolean.False:
        return "0";
      default:
        return "1";
    }
  },
  set(position: Position) {
    switch (position) {
      case "2":
        valueInternal.value = UncertainBoolean.True;
        break;
      case "0":
        valueInternal.value = UncertainBoolean.False;
        break;
      default:
        valueInternal.value = UncertainBoolean.Unspecified;
    }
  },
});

/**
 * Bestimmt die Hintergrundfarbe für den Range Slider.
 */
const backgroundColor = computed(() => {
  if (props.disabled) {
    return "bg-grey-lighten-2";
  }

  switch (valueInternal.value) {
    case UncertainBoolean.True:
      return "bg-primary";
    case UncertainBoolean.False:
      return "bg-grey";
    default:
      return "bg-grey-lighten-1";
  }
});

/**
 * Bestimmt die Textfarbe für die Texte links und rechts vom Range Slider.
 *
 * @param type Entweder "on" oder "off", was für den rechten "onText" oder den linken "offText" steht.
 * @return Die entsprechende CSS-Klasse.
 */
function getAnnotationColor(type: "on" | "off"): string {
  if (!props.disabled && collapsed.value) {
    if (
      (type === "on" && valueInternal.value === UncertainBoolean.True) ||
      (type === "off" && valueInternal.value === UncertainBoolean.False)
    ) {
      return "";
    }
  }

  return "text-grey";
}
</script>

<style scoped>
.annotation {
  transition: color 0.4s;
}

.slider {
  appearance: none;
  width: 60px;
  height: 24px;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
  transition: background-color 0.4s;
}

/* Da der Regler des Range Sliders nicht browserunabhängig gestyled werden kann, müssen getrennte Konfigurationen bentutzt werden.
   (-webkit ist für Chrome, Safari und Edge; -moz ist für Firefox) */

.slider::-webkit-slider-thumb {
  appearance: none;
  border: none;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: white;
  transition: box-shadow 0.2s;
}

.slider::-moz-range-thumb {
  appearance: none;
  border: none;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: white;
  transition: box-shadow 0.2s;
}

.slider::-webkit-slider-thumb:hover,
.slider:focus::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px 10px rgba(50, 50, 50, 0.2);
}

.slider::-moz-range-thumb:hover,
.slider:focus::-moz-range-thumb {
  box-shadow: 0px 0px 0px 10px rgba(50, 50, 50, 0.2);
}
</style>
