<template>
  <div v-if="!erledigtOhneFachreferatStepper">
    <v-stepper
      v-if="!isCancelled"
      :model-value="statusIndex"
      alt-labels
      flat
    >
      <v-stepper-header>
        <v-stepper-item
          class="px-3 py-0"
          complete
          color="primary"
        >
          {{ statusLabels[0] }}
        </v-stepper-item>
        <template
          v-for="(statusLabel, index) in statusLabels.slice(1)"
          :key="index"
        >
          <v-divider />
          <v-stepper-item
            class="px-3 py-0"
            :complete="statusIndex > index"
            color="primary"
          >
            {{ statusLabel }}
          </v-stepper-item>
        </template>
      </v-stepper-header>
    </v-stepper>
    <v-stepper v-else>
      <v-stepper-header>
        <v-stepper-item
          class="px-3 py-0"
          :rules="[() => false]"
          color="primary"
        >
          Abfrage wurde storniert
        </v-stepper-item>
      </v-stepper-header>
    </v-stepper>
  </div>
  <div v-else>
    <v-stepper
      :model-value="shortenedStatusIndex"
      alt-labels
      flat
    >
      <v-stepper-header>
        <v-stepper-item
          class="px-3 py-0"
          complete
          color="primary"
        >
          {{ shortenedStatusLabels[0] }}
        </v-stepper-item>
        <template
          v-for="(shortenedStatusLabel, index) in shortenedStatusLabels.slice(1)"
          :key="index"
        >
          <v-divider />
          <v-stepper-item
            class="px-3 py-0"
            :complete="shortenedStatusIndex > index"
            color="primary"
          >
            {{ shortenedStatusLabel }}
          </v-stepper-item>
        </template>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { StatusAbfrage } from "@/api/api-client/isi-backend";

interface Props {
  status?: StatusAbfrage;
}

const props = defineProps<Props>();
const statusLabels = [
  "angelegt",
  "Übermittelt zur Bearbeitung",
  "Start Bearbeitung",
  "Einpflegen Bedarfsmeldung",
  "Einplanung Bedarfe",
  "erledigt",
];
const shortenedStatusLabels = ["angelegt", "Übermittelt zur Bearbeitung", "Start Bearbeitung", "erledigt"];
const isCancelled = computed(() => props.status === StatusAbfrage.Abbruch);
const erledigtOhneFachreferatStepper = computed(() => props.status === StatusAbfrage.ErledigtOhneFachreferat);

const statusIndex = computed(() => {
  switch (props.status) {
    case StatusAbfrage.Angelegt:
      return 0;
    case StatusAbfrage.Offen:
      return 1;
    case StatusAbfrage.InBearbeitungSachbearbeitung:
      return 2;
    case StatusAbfrage.InBearbeitungFachreferate:
      return 3;
    case StatusAbfrage.BedarfsmeldungErfolgt:
      return 4;
    case StatusAbfrage.ErledigtMitFachreferat:
      return 5;
    default:
      return 0;
  }
});

const shortenedStatusIndex = computed(() => {
  switch (props.status) {
    case StatusAbfrage.Angelegt:
      return 0;
    case StatusAbfrage.Offen:
      return 1;
    case StatusAbfrage.InBearbeitungSachbearbeitung:
      return 2;
    case StatusAbfrage.ErledigtOhneFachreferat:
      return 3;
    default:
      return 0;
  }
});
</script>
