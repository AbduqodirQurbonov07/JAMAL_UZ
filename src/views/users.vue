<template>
  <div v-if="loading" class="mx-4 my-5 flex flex-col gap-10">
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
  <div v-else>
    <div class="grid grid-cols-5 gap-3 px-4">
      <div class="flex w-[83vw] justify-between py-3">
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
            <span> Foydalanuvchi</span>
          </DialogTrigger>
          <DialogContent class="max-w-[700px]">
            <DialogHeader class="border-b pb-4">
              <DialogTitle> Foydalanuvchi qo'shish </DialogTitle>
            </DialogHeader>
            <ul class="grid grid-cols-2 gap-3">
              <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                <Label for="size"
                  >Isim<span class="text-orange-500"> *</span></Label
                >
                <input
                  v-model="userfirstName"
                  type="text"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <label for="size"
                  >Familiya<span class="text-orange-500"> *</span></label
                >
                <input
                  v-model="userlastName"
                  type="text"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <Label for="size"
                  >Telefon raqam 1<span class="text-orange-500"> *</span></Label
                >
                <input
                  v-model="userTel"
                  type="text"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5">
                <Label for="size"
                  >Email<span class="text-orange-500"> *</span></Label
                >
                <input
                  v-model="userEmail"
                  type="email"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                <Label for="size"
                  >Login<span class="text-orange-500"> *</span></Label
                >
                <input
                  v-model="login"
                  type="text"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                <Label for="size"
                  >Parol<span class="text-orange-500"> *</span></Label
                >
                <input
                  v-model="password"
                  type="password"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex items-start flex-col">
                <label for="izoh">Izoh</label>
                <textarea
                  v-model="userCom"
                  class="border border-slate-300 p-3 rounded-xl w-[650px] h-32"
                  name=""
                  id="izoh"
                ></textarea>
              </li>
            </ul>
            <DialogFooter class="flex justify-end">
              <div class="flex flex-col p-6">
                <div class="flex flex-col gap-8">
                  <div class="flex items-center justify-end gap-3">
                    <DialogClose as-child>
                      <button
                        class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                      >
                        Yopish
                      </button>
                    </DialogClose>
                    <button
                      @click="submitUser"
                      class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                    >
                      Saqlash
                    </button>
                  </div>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <div class="flex flex-col items-center gap-3 w-[85vw]">
      <Table class="border">
        <TableHeader class="border">
          <TableRow class="border">
            <TableHead class="border bg-slate-50 text-black">№ </TableHead>
            <TableHead class="border bg-slate-50 text-black">
              Familya va Ismi
            </TableHead>
            <TableHead class="border bg-slate-50 text-black">
              Telefon raqam 1</TableHead
            >
            <TableHead class="border bg-slate-50 text-black"> Email </TableHead>
            <TableHead
              class="text-left border bg-slate-50 text-[12.5px] text-black"
            >
              Yaratilgan vaqti
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Izoh
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(inf, index) in data?.data"
            :key="inf?.userId"
            class="hover:bg-indigo-100 border-2 hover:border-l-2 hover:border-l-indigo-700"
          >
            <TableCell class="border text-center">{{ index + 1 }} </TableCell>
            <TableCell class="border">{{ `${inf?.userFirstName}` }} </TableCell>
            <TableCell class="border text-center">{{
              inf?.userNomer
            }}</TableCell>

            <TableCell class="border text-center">{{
              inf?.userEmail
            }}</TableCell>
            <TableCell class="border text-center">{{}}</TableCell>
            <TableCell class="text-center border text-[16px] leading-[20px]">{{
              inf?.userDescription
            }}</TableCell>
            <TableCell class="text-center cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <img src="../svg/dots.svg" alt="" />
                </PopoverTrigger>
                <PopoverContent
                  class="cursor-pointer flex flex-col rounded-xl w-52"
                >
                  <Dialog class="w-[800px]">
                    <DialogTrigger>
                      <div
                        :id="inf?.userId"
                        @click="fetchDataById"
                        class="flex items-center gap-3 py-2.5 hover:bg-slate-100 px-2 rounded-lg"
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
                        <DialogTitle> Foydalanuvchi tahrirlash </DialogTitle>
                      </DialogHeader>
                      <ul class="grid grid-cols-2 gap-3">
                        <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                          <Label for="size"
                            >Isim<span class="text-orange-500"> *</span></Label
                          >
                          <input
                            v-model="dataById.user.userFirstName"
                            type="text"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <label for="size"
                            >Familiya<span class="text-orange-500">
                              *</span
                            ></label
                          >
                          <input
                            v-model="dataById.user.userLastName"
                            type="text"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <Label for="size"
                            >Telefon raqam 1<span class="text-orange-500">
                              *</span
                            ></Label
                          >
                          <input
                            v-model="dataById.user.userNomer"
                            type="text"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5">
                          <Label for="size"
                            >Email<span class="text-orange-500"> *</span></Label
                          >
                          <input
                            v-model="dataById.user.userEmail"
                            type="email"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                          <Label for="size"
                            >Login<span class="text-orange-500"> *</span></Label
                          >
                          <input
                            v-model="dataById.user.userLogin"
                            type="text"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                          <Label for="size"
                            >Parol<span class="text-orange-500"> *</span></Label
                          >
                          <input
                            v-model="dataById.user.userPassword"
                            type="password"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex items-start flex-col">
                          <label for="izoh">Izoh</label>
                          <textarea
                            v-model="dataById.user.userDescription"
                            class="border border-slate-300 p-3 rounded-xl w-[650px] h-32"
                            name=""
                            id="izoh"
                          ></textarea>
                        </li>
                      </ul>
                      <DialogFooter class="flex justify-end">
                        <div class="flex flex-col p-6">
                          <div class="flex flex-col gap-8">
                            <div class="flex items-center justify-end gap-3">
                              <DialogClose as-child>
                                <button
                                  class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                                >
                                  Yopish
                                </button>
                              </DialogClose>
                              <button
                                :id="inf?.userId"
                                @click="editUser"
                                class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                              >
                                Saqlash
                              </button>
                            </div>
                          </div>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <button
                    :id="inf?.userId"
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
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination
        v-slot="{ page }"
        :items-per-page="10"
        :total="data?.count"
        :sibling-count="1"
        show-edges
        :default-page="1"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst class="hover:bg-indigo-600 hover:text-slate-50" />
          <PaginationPrev class="hover:bg-indigo-600 hover:text-slate-50" />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                class="w-10 h-10 p-0 hover:bg-indigo-600 hover:text-slate-50 rounded-md"
                :variant="item.value === page ? 'default' : 'outline'"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext class="hover:bg-indigo-600 hover:text-slate-50" />
          <PaginationLast class="hover:bg-indigo-600 hover:text-slate-50" />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/content/skeleton.vue";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { computed } from "vue";
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
      `/user/getall?limit=10&page=${page}`,
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
const login = ref("");
const password = ref("");
const userlastName = ref("");
const userfirstName = ref("");
const userTel = ref("");
const userEmail = ref("");
const userCom = ref("");
const submitUser = async () => {
  const token = localStorage.getItem("token");
  const payload = {
    userFirstName: userfirstName.value,
    userNomer: Number(userTel.value),
    userPassword: password.value,
    userLogin: login.value,
    userLastName: userlastName.value,
    userDescription: userCom.value,
    userEmail: userEmail.value,
  };
  try {
    const response = await axios.post(`/user/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
    console.log("warehouse create", response.data);
  } catch (err: any) {
    console.log(typeof payload.userNomer);
    console.log("Error");
  }
};

const deleteBtn = async (e: any) => {
  const token = localStorage.getItem("token");
  const payload = {
    userFirstName: userfirstName.value,
    userNomer: Number(userTel.value),
    userPassword: password.value,
    userLogin: login.value,
    userLastName: userlastName.value,
    userDescription: userCom.value,
    userEmail: userEmail.value,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/user/delete/${e?.target?.id}`,
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
  }
};
const newLogin = ref("");
const newPassword = ref("");
const newUserlastName = ref("");
const newUserfirstName = ref("");
const newUserTel = ref("");
const newUserEmail = ref("");
const newUserCom = ref("");
const editUser = async (e: any) => {
  const token = localStorage.getItem("token");
  console.log(e.target.id);
  const payload = {
    userFirstName: dataById.value.user.userFirstName,
    userNomer: Number(dataById.value.user.userNomer),
    userPassword: dataById.value.user.userPassword,
    userLogin: dataById.value.user.userLogin,
    userLastName: dataById.value.user.userLastName,
    userDescription: dataById.value.user.userDescription,
    userEmail: dataById.value.user.userEmail,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/user/edit/${e?.target?.id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data.value = response.data;
    console.log(e.target.id);
    // window.location.reload();
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
  }
};

const formattedPhone1 = computed(() => {
  if (userTel.value.startsWith("998")) {
    return userTel.value.replace(
      /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      "$1 $2 $3 $4 $5"
    );
  } else if (userTel.value.length === 9) {
    return userTel.value.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  } else {
    return userTel.value;
  }
});

let dataById = ref({
  user: {
    userFirstName: "",
    userLastName: null,
    userNomer: "",
    userPassword: "",
    userLogin: "",
    userEmail: null,
    userDescription: null,
    deletedAt: null,
  },
  permissions: [],
});
const fetchDataById = async (event: any): Promise<void> => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`/user/getone/${event.target.id}`, {
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
