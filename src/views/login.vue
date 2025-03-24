<template>
  <div
    class="bg-[#F9FAFB] flex flex-col gap-4 justify-center items-center w-screen h-screen"
  >
    <Alert v-if="isError" class="w-[440px]" variant="destructive">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Xatolik</AlertTitle>
      <AlertDescription>
        Login yoki parolda xatolik mavjud...
      </AlertDescription>
    </Alert>
    <div
      class="flex flex-col items-center justify-center gap-4 bg-white w-[440px] h-[462px] rounded-xl shadow-sm"
    >
      <img class="pb-3 w-40" src="../svg/logo.svg" alt="" />
      <div class="flex flex-col justify-center items-center gap-2">
        <p class="font-semibold text-2xl">Xush Kelibsiz!</p>
        <p class="text-[#667085]">Iltimos hisob ma’lumotlarini kiriting</p>
      </div>
      <form @submit.prevent="submitForm" class="flex flex-col gap-3" action="">
        <label for="">Login</label>
        <input
          v-model="login"
          type="text"
          class="w-[360px] h-[44px] py-3.5 px-2.5 border-2 rounded-md border-[#E8ECF3] focus:border-[#E8ECF3]"
          placeholder="login"
        />
        <label for="">Parol</label>
        <input
          v-model="password"
          type="password"
          class="flex w-[360px] h-[44px] py-3.5 px-2.5 border-2 rounded-md border-[#E8ECF3] focus:border-[#E8ECF3]"
          placeholder="parol"
        />
        <div class="flex items-center gap-1">
          <input class="cursor-pointer" type="checkbox" id="esla" />
          <label class="cursor-pointer" for="esla">Eslab qolish</label>
        </div>

        <Button
          v-if="!isLoading"
          class="w-[360px] h-[44px] bg-indigo-600 hover:bg-indigo-700"
          >Kirish</Button
        >
        <Button
          v-else
          disabled
          class="w-[360px] h-[44px] bg-indigo-600 hover:bg-indigo-700"
          ><span>
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg> </span
          ><span>Loading...</span></Button
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-vue-next";
import router from "@/router";
import axios from "axios";
import { ref } from "vue";
const isLoading = ref(false);
const isError = ref(false);
const remember = ref(false);
const login = ref("");
const password = ref("");
const userFiristname = ref("");
const userLastname = ref("");
const userNomer = ref("");
const submitForm = async () => {
  const payload = {
    userFiristName: userFiristname.value,
    userLastName: userLastname.value,
    userNomer: userNomer.value,
    userLogin: login.value,
    userPassword: password.value,
  };

  try {
    isLoading.value = true;
    console.log(payload);

    const response = await axios.post(`/auth/login`, payload);
    console.log("login succesful", response.data);
    localStorage.setItem("token", response.data.accessToken);
    router.push("/");
    isLoading.value = false;
  } catch (error) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 3000);
    isLoading.value = false;
    login.value = "";
    password.value = "";
  }
};
</script>

<style scoped></style>
