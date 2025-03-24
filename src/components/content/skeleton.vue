<script lang="ts" setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="flex flex-col space-y-3">
    <Skeleton class="h-[125px] w-[80vw] rounded-xl" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[80vw]" />
      <Skeleton class="h-4 w-[80vw]" />
    </div>
  </div>
</template>
