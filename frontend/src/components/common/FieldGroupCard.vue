<template>
  <v-card
    variant="outlined"
    border="xs"
    class="mx-0 my-6 px-3 pt-2 pb-3"
    style="border: 1px solid #d3d3d3"
  >
    <v-card-title class="pt-0 pb-6 ma-0 text-grey">
      {{ cardTitle
      }}<span
        v-if="markCardTitleAsRequired"
        class="text-secondary"
      >
        &nbsp;*
      </span>
    </v-card-title>
    <slot />
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  cardTitle?: string;
  markCardTitleAsRequired?: boolean;
}

withDefaults(defineProps<Props>(), { cardTitle: "", markCardTitleAsRequired: false });
</script>
