<template>
  <v-menu
    v-if="benutzerinformationenAvailable"
    id="benutzerinformation_menu"
    location="bottom"
    transition="slide-y-transition"
    :close-on-content-click="false"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        id="benutzerinformation_button"
        variant="plain"
        icon="mdi-information"
        v-bind="activatorProps"
      >
      </v-btn>
    </template>
    <v-card flat>
      <v-card-title>Bearbeitungsinformationen</v-card-title>
      <v-list>
        <v-list-item lines="two">
          <v-list-item-subtitle>Name:</v-list-item-subtitle>
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item>
        <v-list-item lines="two">
          <v-list-item-subtitle>Email:</v-list-item-subtitle>
          <v-list-item-title>{{ email }}</v-list-item-title>
        </v-list-item>
        <v-list-item lines="two">
          <v-list-item-subtitle>Organisationseinheit:</v-list-item-subtitle>
          <v-list-item-title>{{ organisationseinheit }}</v-list-item-title>
        </v-list-item>
        <v-list-item lines="two">
          <v-list-item-subtitle>Letzte Änderung:</v-list-item-subtitle>
          <v-list-item-title>{{ letzteAenderung }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { computed } from "vue";
import _ from "lodash";
import moment from "moment";
import BenutzerinformationenModel from "@/types/model/common/Benutzerinformationen";

interface Props {
  benutzerinformationen: BenutzerinformationenModel;
}

const DISPLAY_FORMAT = "DD.MM.YYYY";
const props = defineProps<Props>();

const benutzerinformationenAvailable = computed(() => {
  return (
    !_.isNil(props.benutzerinformationen.lastModifiedDateTime) ||
    !_.isNil(props.benutzerinformationen.bearbeitendePerson)
  );
});

const name = computed(() => {
  return _.isNil(props.benutzerinformationen.bearbeitendePerson) ||
    _.isNil(props.benutzerinformationen.bearbeitendePerson?.name)
    ? ""
    : props.benutzerinformationen.bearbeitendePerson.name;
});

const email = computed(() => {
  return _.isNil(props.benutzerinformationen.bearbeitendePerson) ||
    _.isNil(props.benutzerinformationen.bearbeitendePerson?.email)
    ? ""
    : props.benutzerinformationen.bearbeitendePerson.email;
});

const organisationseinheit = computed(() => {
  return _.isNil(props.benutzerinformationen.bearbeitendePerson) ||
    _.isNil(props.benutzerinformationen.bearbeitendePerson?.organisationseinheit)
    ? ""
    : props.benutzerinformationen.bearbeitendePerson.organisationseinheit;
});

const letzteAenderung = computed(() => {
  return _.isNil(props.benutzerinformationen.lastModifiedDateTime)
    ? ""
    : moment.utc(props.benutzerinformationen.lastModifiedDateTime, true).format(DISPLAY_FORMAT);
});
</script>
