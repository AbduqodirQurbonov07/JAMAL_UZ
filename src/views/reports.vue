<template>
  <div v-if="loading" class="mx-4 my-5 flex flex-col gap-10">
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
  <div v-else>
    <div class="grid grid-cols-5 gap-3 px-4 py-3 w-[85vw]">
      <Select>
        <SelectTrigger class="bg-slate-50 border-transparent">
          <SelectValue placeholder="Omborxona" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Omborxona "> Omborxona </SelectItem>
            <SelectItem value="Omborxona 1"> Omborxona 1 </SelectItem>
            <SelectItem value="Omborxona 2"> Omborxona 2 </SelectItem>
            <SelectItem value="Omborxona 3"> Omborxona 3 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Popover>
        <PopoverTrigger
          class="bg-slate-50 text-start px-3 border-transparent rounded-md text-slate-400"
        >
          Sana
        </PopoverTrigger>
        <PopoverContent>
          <RangeCalendar v-model="value" class="rounded-md border" />
        </PopoverContent>
      </Popover>

      <Select class="">
        <SelectTrigger class="bg-slate-50 border-transparent">
          <SelectValue placeholder="Taminotchilar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="taminotchilar "> Taminotchilar </SelectItem>
            <SelectItem value="taminotchilar_1"> Taminotchilar 1 </SelectItem>
            <SelectItem value="taminotchilar_2"> Taminotchilar 2 </SelectItem>
            <SelectItem value="taminotchilar_3"> Taminotchilar 3 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger class="bg-slate-50 border-transparent">
          <SelectValue placeholder="Sotuvchi" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Sotuvchi "> Sotuvchi </SelectItem>
            <SelectItem value="Sotuvchi_1"> Sotuvchi 1 </SelectItem>
            <SelectItem value="Sotuvchi_2"> Sotuvchi 2 </SelectItem>
            <SelectItem value="Sotuvchi_3"> Sotuvchi 3 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger class="bg-slate-50 border-transparent">
          <SelectValue placeholder="Mijoz" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Mijoz "> Mijoz </SelectItem>
            <SelectItem value="Mijoz_1"> Mijoz 1 </SelectItem>
            <SelectItem value="Mijoz_2"> Mijoz 2 </SelectItem>
            <SelectItem value="Mijoz_3"> Mijoz 3 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <input
        type="number"
        class="px-3.5 py-1.5 bg-slate-50 rounded-md"
        placeholder="Eni"
      />
      <input
        type="number"
        class="px-3.5 py-1.5 bg-slate-50 rounded-md"
        placeholder="Bo'yi"
      />
      <div></div>
      <div class="grid grid-cols-2 justify-end items-center">
        <li class="list-none"></li>
        <Button
          class="border border-slate-200 p-2 text-sm rounded-lg transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
        >
          Saqlash
        </Button>
      </div>
      <div class="flex items-center gap-1">
        <button
          class="flex items-center gap-1 border border-slate-200 px-3.5 py-2 text-sm rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-slate-50"
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
                stroke-width="2"
                d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
              />
            </svg>
          </span>
          <span class="w-20">Yuklab olish</span>
        </button>
        <button
          class="flex items-center gap-1 border border-slate-200 px-6 py-2 text-sm rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-slate-50"
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
                d="m18 9l-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0l.386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5"
              />
            </svg>
          </span>
          <span>Tozalash</span>
        </button>
      </div>
    </div>
    <div class="mt-4 flex flex-col w-[85vw] items-center gap-2.5">
      <Table class="border">
        <TableHeader class="border">
          <TableRow class="border">
            <TableHead class="border bg-slate-50 text-black"> Ombor </TableHead>
            <TableHead class="border bg-slate-50 text-black"> Xodim</TableHead>
            <TableHead class="border bg-slate-50 text-black">
              Ta'minotchi</TableHead
            >
            <TableHead class="text-left border bg-slate-50 text-black">
              Haridor
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Tovar
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Eni
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Bo'yi
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Miqdor
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Narx
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Umumiy Narx
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Sana
            </TableHead>
            <TableHead class="text-left border w-12 bg-slate-50 text-black">
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            class="hover:bg-indigo-100 hover:border-l hover:border-l-indigo-600"
            v-for="inf in data?.data"
            :key="inf.report_reportId"
          >
            <TableCell class="font-medium">
              {{ inf?.warehouse_warehouseName }}
            </TableCell>
            <TableCell class="border text-center">{{
              inf?.user_userFirstName
            }}</TableCell>
            <TableCell class="border text-center">{{
              inf?.contributor_contributorName
            }}</TableCell>
            <TableCell class="border text-center">{{
              inf?.client_clientName
            }}</TableCell>
            <TableCell class="border text-center">{{
              inf?.category_categoryName
            }}</TableCell>
            <TableCell class="border text-center"
              >{{ Number(inf?.size_sizeWidth) }} m</TableCell
            >
            <TableCell class="border text-center"
              >{{ Number(inf?.report_height) }} m</TableCell
            >
            <TableCell class="flex items-center justify-start gap-2">
              <span v-if="inf?.report_action == 'EXIT'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="red"
                    d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
                  />
                </svg>
              </span>
              <span class="text-green-500" v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m6 22l10 8l10-8m-10 8V2"
                  />
                </svg>
              </span>
              <span>{{ formattedCurreny(inf?.report_quantity) }}</span>
            </TableCell>
            <TableCell class="border text-center">{{
              formattedCurreny(Number(inf?.report_price))
            }}</TableCell>
            <TableCell class="border text-center">{{
              formattedCurreny(
                Number(inf?.report_quantity) * Number(inf?.report_price)
              )
            }}</TableCell>
            <TableCell class="border text-center">{{
              todatestring(inf?.report_date)
            }}</TableCell>
            <TableCell class="text-center cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <img src="../svg/dots.svg" alt="" />
                </PopoverTrigger>
                <PopoverContent
                  class="cursor-pointer flex flex-col rounded-xl w-52"
                >
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
                  <button
                    :id="inf?.report_reportId"
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
import Skeleton from "@/components/content/skeleton.vue";
import { Button } from "@/components/ui/button";
import type { DateRange } from "reka-ui";
import { RangeCalendar } from "@/components/ui/range-calendar";
import { getLocalTimeZone, today } from "@internationalized/date";
import { type Ref, ref } from "vue";

const start = today(getLocalTimeZone());
const end = start.add({ days: 7 });

const value = ref({
  start,
  end,
}) as Ref<DateRange>;
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
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
import axios from "axios";
import router from "@/router";
interface DataItem {
  id: string;
  name: string;
  [key: string]: any;
}

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

const data = ref<DataItem[] | null | any>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const fetchData = async (page: number = 1): Promise<void> => {
  const token = localStorage.getItem("token");

  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get<DataItem[]>(
      `/report/getall?limit=10&page=${page}`,

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

const deleteBtn = async (e: any) => {
  const token = localStorage.getItem("token");
  const payload = {};
  try {
    const response = await axios.patch<DataItem[]>(
      `/report/delete/${e?.target?.id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    data.value = response.data;
    // console.log(data.value);

    window.location.reload();
  } catch (err: any) {
    error.value = err.response?.data?.massage || "Failed to fetch data";
  }
};
</script>

<style scoped></style>
