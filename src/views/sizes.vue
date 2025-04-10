<template>
  <div v-if="loading" class="mx-4 my-5 flex flex-col gap-10">
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
  <div v-else class="">
    <div class="grid grid-cols-5 gap-3 px-4">
      <div class="flex w-[84vw] justify-between py-3">
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
          <DialogTrigger
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
          </DialogTrigger>
          <DialogContent class="max-w-[700px]">
            <DialogHeader class="border-b pb-4">
              <DialogTitle> Standart o'lchov qo'shish </DialogTitle>
            </DialogHeader>
            <ul class="grid grid-cols-1 gap-3">
              <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                <Label for="size"
                  >Eni<span class="text-orange-500">*</span></Label
                >
                <input
                  v-model="sizeWidth"
                  type="number"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="grid grid-cols-2 gap-1.5 mb-5">
                <div class="flex flex-col gap-1.5">
                  <Label for="size"
                    >Code<span class="text-orange-500">*</span></Label
                  >
                  <input
                    v-model="sizeCode"
                    type="text"
                    class="border border-slate-300 px-3 py-2 rounded-lg"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <Label for="size"
                    >Rangi<span class="text-orange-500"></span
                  ></Label>
                  <input
                    v-model="sizeColor"
                    type="text"
                    class="border border-slate-300 px-3 py-2 rounded-lg"
                  />
                </div>
              </li>
              <li class="flex items-start flex-col">
                <label for="izoh">Izoh</label>
                <textarea
                  v-model="sizeCom"
                  class="border border-slate-300 p-3 rounded-xl w-[650px] h-32"
                  name=""
                  id="izoh"
                ></textarea>
              </li>
            </ul>
            <DialogFooter>
              <div class="flex items-center justify-end gap-3">
                <DialogClose as-child>
                  <button
                    class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                  >
                    Yopish
                  </button>
                </DialogClose>
                <button
                  @click="submitSize"
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
      class="grid grid-cols-4 gap-8 p-5 content-start bg-[#F3F3F3] h-[82vh] w-[85vw]"
    >
      <div
        v-for="inf in data?.data"
        :key="inf?.sizeId"
        class="flex items-start cursor-pointer bg-white p-4 w-80 justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col">
              <p class="flex items-center gap-3">
                <span :nameS="inf?.sizeName" class="text-xl font-semibold"
                  >{{ formattedCurreny(inf?.sizeWidth) }} metr</span
                ><span class="bg-[#F3F3F3] text-gray-700 px-1 rounded-xl"
                  >#{{ inf?.sizeCode }}</span
                >
              </p>
              <p class="text-[#98A2B3]">{{ inf?.color }}</p>
            </div>
          </PopoverTrigger>
          <PopoverContent v-if="!exit" class="w-[450px] h-auto">
            <div class="flex flex-col">
              <div class="flex items-center justify-between pb-5 mb-8">
                <p class="text-gray-900 font-semibold text-lg">
                  Standart o'lchov
                </p>
                <button @click="exit = true">
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
                  <p class="text-gray-600">Eni</p>
                  <p>{{ formattedCurreny(inf?.sizeWidth) }}</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Code</p>
                  <p>#{{ inf?.sizeCode }}</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Rangi</p>
                  <p>{{ inf?.color }}</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <p>{{ todatestring(inf?.createdAt) }}</p>
                </li>
                <li class="flex flex-col gap-2 my-4">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm text-gray-900 flex">
                    {{ inf?.sizeDescription }}
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
            <Dialog class="w-[800px]">
              <DialogTrigger>
                <div
                  :id="inf?.sizeId"
                  @click="fetchDataById"
                  class="flex items-center gap-3 py-2.5 pr-16 hover:bg-slate-100 px-2 rounded-lg"
                >
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
                  Tahrirlash
                </div>
              </DialogTrigger>
              <DialogContent class="max-w-[700px]">
                <DialogHeader class="border-b pb-4">
                  <DialogTitle> Standart o'lchov tahrirlash </DialogTitle>
                </DialogHeader>
                <ul class="grid grid-cols-1 gap-3">
                  <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                    <Label for="size"
                      >Eni<span class="text-orange-500">*</span></Label
                    >
                    <input
                      v-model="dataById.sizeWidth"
                      type="number"
                      class="border border-slate-300 px-3 py-2 rounded-lg"
                    />
                  </li>
                  <li class="grid grid-cols-2 gap-1.5 mb-5">
                    <div class="flex flex-col gap-1.5">
                      <Label for="size"
                        >Code<span class="text-orange-500">*</span></Label
                      >
                      <input
                        v-model="dataById.sizeCode"
                        type="text"
                        class="border border-slate-300 px-3 py-2 rounded-lg"
                      />
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <Label for="size"
                        >Rangi<span class="text-orange-500"></span
                      ></Label>
                      <input
                        v-model="dataById.color"
                        type="text"
                        class="border border-slate-300 px-3 py-2 rounded-lg"
                      />
                    </div>
                  </li>
                  <li class="flex items-start flex-col">
                    <label for="izoh">Izoh</label>
                    <textarea
                      v-model="dataById.sizeDescription"
                      class="border border-slate-300 p-3 rounded-xl w-[650px] h-32"
                      name=""
                      id="izoh"
                    ></textarea>
                  </li>
                </ul>
                <DialogFooter>
                  <div class="flex items-center justify-end gap-3">
                    <DialogClose as-child>
                      <button
                        class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                      >
                        Yopish
                      </button>
                    </DialogClose>
                    <button
                      :id="inf?.sizeId"
                      @click="editSizes"
                      class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                    >
                      Saqlash
                    </button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <button
              :id="inf?.sizeId"
              @click="deleteBtn"
              class="flex items-center gap-3 py-2.5 text-red-600 hover:bg-slate-100 px-2 rounded-lg"
            >
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
              </svg>
              O'chirish
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from "@/components/content/skeleton.vue";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import axios from "axios";
import { ref } from "vue";
import router from "@/router";
const formattedCurreny = (rawValue: number) => {
  return Number(rawValue)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
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
const exit = ref<boolean>(false);

const data = ref<DataItem[] | null | any>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const fetchData = async (page: number = 1): Promise<void> => {
  const token = localStorage.getItem("token");

  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get<DataItem[]>(
      `/size/getall?limit=30&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data.value = response.data;
    // console.log("token", token);
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
    if (err.response.status === 401) router.push("/login");
  } finally {
    loading.value = false;
  }
};
fetchData();
const sizeWidth = ref<number | null>(null);
const sizeLength = ref<any>();
const sizeCode = ref("");
const sizeColor = ref("");
const sizeCom = ref("");
const sizeHeight = ref<any>();
const sizeName = ref("");
const submitSize = async () => {
  const token = localStorage.getItem("token");

  const payload = {
    sizeLength: sizeLength.value,
    sizeWidth: sizeWidth.value,
    sizeCode: sizeCode.value,
    color: sizeColor.value,
    sizeDescription: sizeCom.value,
  };
  try {
    const response = await axios.post(`/size/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
    console.log(response.data);
  } catch (err: any) {
    console.log("Error");
    console.log(typeof payload.sizeWidth);
  }
};

const deleteBtn = async (e: any) => {
  const token = localStorage.getItem("token");
  const payload = {
    sizeLength: sizeLength.value,
    sizeWidth: sizeWidth.value,
    sizeCode: sizeCode.value,
    color: sizeColor.value,
    sizeDescription: sizeCom.value,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/size/delete/${e?.target?.id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data.value = response.data;
    console.log(data.value);

    window.location.reload();
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
    if (err.response.status === 400) alert("Bu o`lchov bilan mahsulot mavjud!");
    console.log("Xatolik 400 ochirib bolmaydi ", err);
  }
};

const newSizeWidth = ref<number | null>(null);
const newSizeLength = ref<any>();
const newSizeCode = ref("");
const newSizeColor = ref("");
const newSizeCom = ref("");
const editSizes = async (e: any) => {
  const token = localStorage.getItem("token");
  console.log(e.target.id);
  const payload = {
    // sizeLength: dataById.value.sizeLength,
    sizeWidth: Number(dataById.value.sizeWidth),
    sizeCode: dataById.value.sizeCode,
    color: dataById.value.color,
    sizeDescription: dataById.value.sizeDescription,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/size/edit/${e?.target?.id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data.value = response.data;
    console.log(e.target.id);
    window.location.reload();
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
  }
};
let dataById = ref({
  sizeName: null,
  sizeHeight: null,
  sizeWidth: Number(""),
  sizeCode: "",
  color: "",
  sizeDescription: "",
  createdAt: "",
  deletedAt: null,
});
const fetchDataById = async (event: any): Promise<void> => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`/size/getone/${event.target.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dataById.value = response.data;
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
    if (err.response.status === 401) router.push("/login");
  }
};
</script>

<style scoped></style>
