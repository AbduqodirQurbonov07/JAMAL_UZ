<template>
  <div class="">
    <div class="grid grid-cols-5 gap-3 p-4">
      <div class="flex w-[84vw] h-[8vh] justify-between py-3">
        <div
          class="flex items-center cursor-pointer justify-start gap-2 px-3 py-1.5 border border-slate-200 rounded-lg placeholder:text-slate-400"
        >
          <label for="qidiruv" class="text-[#667085] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
              />
            </svg>
          </label>
          <input
            id="qidiruv"
            type="search"
            class="focus:outline-none w-[300px] cursor-pointer"
            placeholder="Qidiruv..."
          />
        </div>
        <Dialog class="w-[800px]">
          <DialogTrigger>
            <div
              class="flex items-center gap-2 border border-slate-200 pr-10 px-4 py-2 text-base rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
                  />
                </svg>
              </span>
              <span> Button</span>
            </div>
          </DialogTrigger>
          <DialogContent class="max-w-[700px]">
            <DialogHeader class="border-b pb-4">
              <DialogTitle>Omborxona qo'shish</DialogTitle>
            </DialogHeader>
            <ul class="grid grid-cols-1 gap-3">
              <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                <Label for="size"
                  >Nomi<span class="text-orange-500">*</span></Label
                >
                <input
                  v-model="warehouseName"
                  type="text"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex items-start flex-col">
                <label for="izoh">Izoh</label>
                <textarea
                  v-model="warehouseCom"
                  class="border border-slate-300 p-3 rounded-xl w-[650px] h-32"
                  name=""
                  id="izoh"
                ></textarea>
              </li>
            </ul>
            <DialogFooter>
              <div class="flex items-center justify-end gap-3">
                <button
                  class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                >
                  Yopish
                </button>
                <button
                  @click="submitWarehouse"
                  class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                >
                  Saqlash
                </button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <div
      class="grid grid-cols-4 p-4 content-start bg-[#F3F3F3] h-[83vh] w-[85vw]"
    >
      <div
        v-for="inf in data?.data"
        :key="inf?.warehouseId"
        class="flex items-start bg-white mb-5 p-4 w-80 justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col items-start gap-3">
              <p class="flex items-center gap-3">
                <span class="text-xl font-semibold">{{
                  inf?.warehouseName
                }}</span
                ><span
                  class="bg-[#F3F3F3] text-gray-700 px-1 rounded-xl"
                ></span>
              </p>
              <p class="text-[#98A2B3]">{{ inf?.warehouseDescription }}</p>
            </div>
          </PopoverTrigger>
          <PopoverContent class="w-[450px] h-auto">
            <div class="flex flex-col">
              <div class="flex items-center justify-between pb-5 mb-8">
                <p class="text-gray-900 font-semibold text-lg">Ombor</p>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                    />
                  </svg>
                </button>
              </div>
              <ul>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Nomi</p>
                  <p>{{ inf?.warehouseName }}</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <!-- <p>{{ inf?. }}</p> -->
                </li>
                <li class="flex flex-col border-b gap-1 py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm">
                    {{ inf?.warehouseDescription }}
                  </p>
                </li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <img src="../svg/dots.svg" alt="" />
          </PopoverTrigger>
          <PopoverContent class="cursor-pointer flex flex-col rounded-xl w-52">
            <div
              class="flex items-center gap-3 py-2.5 hover:bg-slate-100 px-2 rounded-lg"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.21 20.52a.73.73 0 0 1-.52-.21a.75.75 0 0 1-.22-.6l.31-3.84A.73.73 0 0 1 4 15.4L15.06 4.34a3.2 3.2 0 0 1 2.28-.86a3.3 3.3 0 0 1 2.25.91a3.31 3.31 0 0 1 .11 4.5L8.63 20a.77.77 0 0 1-.46.22l-3.89.35Zm1-4.26L5 19l2.74-.25l10.9-10.92A1.72 1.72 0 0 0 17.31 5a1.6 1.6 0 0 0-1.19.42ZM15.59 4.87"
                  />
                </svg>
              </span>
              <span>Tahrirlash</span>
            </div>
            <div
              class="flex items-center gap-3 py-2.5 text-red-600 hover:bg-slate-100 px-2 rounded-lg"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
                  />
                </svg> </span
              ><span>O'chirish</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import axios from "axios";
import { ref } from "vue";
import router from "@/router";
type DateMask = (date: string) => string;
const todatestring: DateMask = (date) => {
  const parseDate = new Date(date);
  const day = parseDate.getDate().toString().padStart(2, "0");
  const month = (parseDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parseDate.getFullYear();

  return `${day}.${month}.${year}`;
};

interface DataItem {
  id: string;
  name: string;
  [key: string]: any;
}

const data = ref<DataItem[] | null | any>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const fetchData = async (page: number = 1): Promise<void> => {
  const token = localStorage.getItem("token");

  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get<DataItem[]>(
      `/warehouse/getall?limit=10&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data.value = response.data;
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
    if (err.response.status === 401) router.push("/login");
  } finally {
    loading.value = false;
  }
};
fetchData();

const warehouseName = ref("");
const warehouseCom = ref("");

const submitWarehouse = async () => {
  const token = localStorage.getItem("token");
  const payload = {
    warehouseName: warehouseName.value,
    warehouseDescription: warehouseCom.value,
  };
  try {
    const response = await axios.post(`/warehouse/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
    console.log("warehouse create", response.data);
  } catch (err: any) {
    console.log("Error");
  }
};
</script>

<style scoped></style>
