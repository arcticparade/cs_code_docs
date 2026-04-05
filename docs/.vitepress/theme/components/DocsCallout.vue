<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    tone?: "note" | "warn" | "success";
  }>(),
  {
    tone: "note"
  }
);
</script>

<template>
  <div class="docs-callout" :data-tone="tone">
    <p class="docs-callout-title">{{ title }}</p>
    <div class="docs-callout-body">
      <slot />
    </div>
  </div>
</template>