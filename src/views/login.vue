<template>
  <div class="bg-[#F9FAFB] flex justify-center items-center w-screen h-screen">
    <div
      class="flex flex-col items-center justify-center gap-4 bg-white w-[440px] h-[462px] rounded-xl shadow-sm"
    >
      <img class="pb-3 w-40" src="../svg/logo.svg" alt="" />
      <div class="flex flex-col justify-center items-center gap-2">
        <p class="font-semibold text-2xl">Xush Kelibsiz!</p>
        <p class="text-[#667085]">Iltimos hisob ma’lumotlarini kiriting</p>
      </div>
      <form class="flex flex-col gap-3" action="">
        <label for="">Login</label>
        <input
          type="text"
          class="w-[360px] h-[44px] py-3.5 px-2.5 border-2 rounded-md border-[#E8ECF3] focus:border-[#E8ECF3]"
          placeholder="login"
        />
        <label for="">Parol</label>
        <input
          type="password"
          class="flex w-[360px] h-[44px] py-3.5 px-2.5 border-2 rounded-md border-[#E8ECF3] focus:border-[#E8ECF3]"
          placeholder="parol"
        />
        <div class="flex items-center gap-1">
          <input class="cursor-pointer" type="checkbox" id="esla" />
          <label class="cursor-pointer" for="esla">Eslab qolish</label>
        </div>
      </form>
      <Button class="w-[360px] h-[44px] bg-indigo-600 hover:bg-indigo-700"
        >Kirish</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<style scoped></style>
