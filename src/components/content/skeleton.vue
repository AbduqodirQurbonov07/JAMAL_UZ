<script lang="ts" setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="flex flex-col space-y-3">
    <Skeleton class="h-[125px] w-[83vw] rounded-xl" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[83vw]" />
      <Skeleton class="h-4 w-[83vw]" />
    </div>
  </div>
</template>
