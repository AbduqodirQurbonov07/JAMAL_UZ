<template>
  <div v-if="loading" class="mx-4 my-5 flex flex-col gap-10">
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
  <div v-else class="">
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
        <Dialog class="800px">
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
              <DialogTitle> Kategoriya qo'shish </DialogTitle>
            </DialogHeader>
            <ul class="grid grid-cols-1 gap-3">
              <li class="grid grid-cols-2 gap-1.5 mb-5">
                <div class="flex flex-col gap-1.5">
                  <Label for="size"
                    >Nomi<span class="text-orange-500">*</span></Label
                  >
                  <input
                    v-model="cateName"
                    type="text"
                    class="border border-slate-300 px-3 py-2 rounded-lg"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <Label for="size"
                    >Taminotchi<span class="text-orange-500">*</span></Label
                  >
                  <Select v-model="contributor">
                    <SelectTrigger class="border-slate-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem
                          v-for="items in itemStore.contributors"
                          :key="items?.contributorId"
                          :value="items?.contributorId"
                        >
                          {{ items.contributorName }}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </li>
              <li class="flex items-start flex-col">
                <label for="izoh">Izoh</label>
                <textarea
                  v-model="cateCom"
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
                  @click="submitCategory"
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
      class="grid grid-cols-3 gap-4 p-5 w-[85vw] content-start bg-[#F3F3F3] h-[81vh]"
    >
      <div
        v-for="inf in data?.data"
        :key="inf?.categoryId"
        class="flex items-start bg-white p-3 h-28 w-[430px] justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col gap-1">
              <p class="flex items-center">
                <span class="trxt-grey-700">{{ inf?.categoryName }}</span
                ><span class="bg-[#F3F3F3] text-gray-700 rounded-xl"></span>
              </p>
              <div
                class="flex flex-col w-96 items-start bg-slate-50 p-1 px-2 border text-gray-700 rounded-sm"
              >
                <p class="font-semibold">
                  {{ inf?.contributor?.contributorName }}
                </p>
                <p>{{ inf?.categoryDescription }}</p>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent class="w-[450px] h-auto">
            <div class="flex flex-col">
              <div class="flex items-center justify-between pb-5 mb-8">
                <p class="text-gray-900 font-semibold text-lg">Kategoriya</p>
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
                  <p>{{ inf?.categoryName }}</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <!-- <p>{{ todatestring(inf?.) }}</p> -->
                </li>
                <li class="flex flex-col border-b py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm text-gray-900 flex">
                    {{ inf?.categoryDescription }}
                  </p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Taminotchi</p>
                  <p>{{ inf?.contributor?.contributorName }}</p>
                </li>
                <li class="flex flex-col gap-1 py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[250px] text-sm">
                    {{
                      `${inf?.contributor?.contributorDescription}  ${inf?.contributor?.contributorNomer}`
                    }}
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
            <Dialog class="800px">
              <DialogTrigger>
                <button
                  class="flex items-center gap-3 py-2.5 hover:bg-slate-100 px-2 pr-16 rounded-lg"
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
                </button>
              </DialogTrigger>
              <DialogContent class="max-w-[700px]">
                <DialogHeader class="border-b pb-4">
                  <DialogTitle> Kategoriya tahrirlash </DialogTitle>
                </DialogHeader>
                <ul class="grid grid-cols-1 gap-3">
                  <li class="grid grid-cols-2 gap-1.5 mb-5">
                    <div class="flex flex-col gap-1.5">
                      <Label for="size"
                        >Nomi<span class="text-orange-500">*</span></Label
                      >
                      <input
                        v-model="newCateName"
                        type="text"
                        class="border border-slate-300 px-3 py-2 rounded-lg"
                      />
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <Label for="size"
                        >Taminotchi<span class="text-orange-500">*</span></Label
                      >
                      <Select v-model="newContributor">
                        <SelectTrigger class="border-slate-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem
                              v-for="items in itemStore.contributors"
                              :key="items?.contributorId"
                              :value="items?.contributorId"
                            >
                              {{ items.contributorName }}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </li>
                  <li class="flex items-start flex-col">
                    <label for="izoh">Izoh</label>
                    <textarea
                      v-model="newCateCom"
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
                      :id="inf?.categoryId"
                      @click="editCategory"
                      class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                    >
                      Saqlash
                    </button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <button
              @click="deleteBtn"
              :id="inf?.categoryId"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    const response = await axios.get<DataItem[]>(`/category/getall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    data.value = response.data;
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
    if (err.response.status === 401) router.push("/login");
  } finally {
    loading.value = false;
  }
};
fetchData();

import { useItemStore } from "@/store";

const { fetchItems } = useItemStore();
const itemStore = useItemStore();
const loadItems = async () => {
  await fetchItems();
};

loadItems();
const contributor = ref<string | undefined>(undefined);
const cateName = ref("");
const cateCom = ref("");
const submitCategory = async () => {
  const token = localStorage.getItem("token");
  const payload = {
    categoryName: cateName.value,
    categoryDescription: cateCom.value,
    contributor: contributor.value,
  };
  try {
    const response = await axios.post(`/category/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
    console.log("taminot", payload.contributor);
  } catch (err: any) {
    console.log("Error");
  }
};

const deleteBtn = async (e: any) => {
  const token = localStorage.getItem("token");
  console.log(e.target.id);
  const payload = {
    categoryName: cateName.value,
    categoryDescription: cateCom.value,
    contributor: contributor.value,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/category/delete/${e?.target?.id}`,
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
const newContributor = ref<string | undefined>(undefined);
const newCateName = ref("");
const newCateCom = ref("");
const editCategory = async (e: any) => {
  const token = localStorage.getItem("token");
  console.log(e.target.id);
  const payload = {
    categoryName: newCateName.value,
    categoryDescription: newCateCom.value,
    contributor: newContributor.value,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/category/edit/${e?.target?.id}`,
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
</script>

<style scoped></style>
