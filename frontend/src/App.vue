<template>
  <v-app>
    <v-app-bar
      color="primary"
      elevation="8"
      height="50"
      class="px-4"
    >
      <v-row align="center">
        <v-col
          cols="3"
          class="d-flex align-center justify-start"
        >
          <router-link to="/">
            <v-img
              id="app_logo"
              :src="logo"
              width="32px"
              class="mr-1"
            />
          </router-link>
          <router-link
            to="/"
            style="text-decoration: none"
          >
            <v-toolbar-title class="text-h4 text-white font-weight-bold">ISI</v-toolbar-title>
          </router-link>
        </v-col>
        <v-col
          cols="6"
          class="d-flex align-center justify-center"
        >
          <search-input-field />
        </v-col>
        <v-col
          cols="3"
          class="d-flex align-center justify-end"
        >
          <v-tooltip
            location="bottom"
            open-delay="500"
          >
            <template #activator="{ props: activatorProps }">
              <v-btn
                icon="mdi-finance"
                target="_blank"
                v-bind="activatorProps"
                :href="urlGlobalReports"
              />
            </template>
            <span> Zu den Reporten </span>
          </v-tooltip>
          <v-menu
            id="app_help_menu"
            location="bottom"
            transition="slide-y-transition"
          >
            <template #activator="{ props: menu }">
              <v-tooltip
                location="bottom"
                open-delay="500"
              >
                <template v-slot:activator="{ props: tooltip }">
                  <v-btn
                    icon="mdi-help-circle"
                    v-bind="mergeProps(menu, tooltip)"
                  />
                </template>
                <span> Anwendungsinformationen </span>
              </v-tooltip>
            </template>
            <v-list class="text-center">
              <v-list-item @click="showVersionInfo = true">
                <v-list-item-title>Versionsinformationen</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <a
                    target="_blank"
                    :href="datenschutzhinweisUrl"
                  >
                    Datenschutzhinweis<span class="mdi mdi-launch" />
                  </a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
            id="app_nutzerinformationen_menu"
            v-model="menu"
            :close-on-content-click="false"
            location="bottom"
            transition="slide-y-transition"
          >
            <template #activator="{ props: menu }">
              <v-tooltip
                location="bottom"
                open-delay="500"
              >
                <template v-slot:activator="{ props: tooltip }">
                  <v-btn
                    icon="mdi-account-circle"
                    v-bind="mergeProps(menu, tooltip)"
                  />
                </template>
                <span> Nutzerinformationen </span>
              </v-tooltip>
            </template>

            <v-card class="userinfo-card">
              <span id="app_nutzerinformationen_vorname_nachname">
                {{ userinfo.givenname + " " + userinfo.surname }}
              </span>
              <v-divider />
              <span
                id="app_nutzerinformationen_abteilung"
                class="userinfo-subtitles"
              >
                <v-icon>mdi-office-building</v-icon>{{ userinfo.department }}
              </span>
              <br />
              <span
                id="app_nutzerinformationen_user_rollen"
                class="userinfo-subtitles"
              >
                <v-icon>mdi-account-badge</v-icon>{{ userRoles }}
              </span>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
    <version-info v-model="showVersionInfo" />
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>

<script setup lang="ts">
import { computed, mergeProps, onBeforeMount, onMounted, ref } from "vue";
import VersionInfo from "@/components/common/VersionInfo.vue";
import { Userinfo } from "./types/common/Userinfo";
import _ from "lodash";
import SearchInputField from "@/components/search/SearchInputField.vue";
import { useLookupStore } from "@/stores/LookupStore";
import { useStammdatenStore } from "@/stores/StammdatenStore";
import { useUserinfoStore } from "@/stores/Userinfostore";
import { useMetabaseReportingStore } from "@/stores/MetabaseReportingStore";
import { useUserInfoApi } from "./composables/requests/UserInfoApi";

const lookupStore = useLookupStore();
const stammdatenStore = useStammdatenStore();
const userInfoStore = useUserinfoStore();
const { getUserinfo } = useUserInfoApi();
const metabaseReportingStore = useMetabaseReportingStore();
const datenschutzhinweisUrl: string = import.meta.env.VITE_DATENSCHUTZHINWEIS_URL;
const logo = new URL("./assets/isi-logo.svg", import.meta.url).href;
const showVersionInfo = ref(false);
const menu = ref(false);

const urlGlobalReports = computed(() => {
  return !_.isNil(metabaseReportingStore.metabaseReportingInformation)
    ? `${metabaseReportingStore.metabaseReportingInformation.url}/${metabaseReportingStore.metabaseReportingInformation.reportsGlobal}`
    : "";
});

// Schreibt alle Nutzerollen in einen String für die Darstellung
const userRoles = computed(() => _.join(userinfo.value.roles, ", "));

const userinfo = computed({
  get() {
    return userInfoStore.userinfo ?? new Userinfo();
  },
  set(value) {
    userInfoStore.setUserinfo(value);
  },
});

onBeforeMount(() => {
  lookupStore.inititalize();
  stammdatenStore.initializeFileStamm();
  stammdatenStore.initializeFoerdermixStamm();
  metabaseReportingStore.initialize();
});

onMounted(async () => {
  userinfo.value = await getUserinfo();
});
</script>

<style>
.main {
  background-color: white;
}

.v-toolbar__extension {
  padding: 0px;
}

.userinfo-subtitles {
  font-size: 14px;
  color: grey;
}

.userinfo-card {
  padding: 10px;
  overflow: hidden;
}

.router-link-active {
  background-color: none;
  cursor: pointer;
}
</style>
