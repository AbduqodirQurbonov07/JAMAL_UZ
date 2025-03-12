<template>
  <div>
    <div class="grid grid-cols-5 gap-3">
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
          class="bg-slate-50 border-transparent rounded-md text-slate-500"
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
        <button
          class="border border-slate-200 p-2 text-sm rounded-lg transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
        >
          Saqlash
        </button>
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
    <div class="mt-4 flex flex-col items-center gap-2.5">
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
            v-for="invoice in data"
            :key="invoice.ombor"
          >
            <TableCell class="font-medium">
              {{ invoice.ombor }}
            </TableCell>
            <TableCell class="border text-center">{{
              invoice.xodim
            }}</TableCell>
            <TableCell class="border text-center">{{
              invoice.taminot
            }}</TableCell>
            <TableCell class="border text-center">{{
              invoice.haridor
            }}</TableCell>
            <TableCell class="border text-center">{{
              invoice.tovar
            }}</TableCell>
            <TableCell class="border text-center">{{ invoice.eni }}</TableCell>
            <TableCell class="border text-center">{{ invoice.boyi }}</TableCell>
            <TableCell class="flex items-center justify-center gap-2">
              <img src="../svg/top.svg" alt="" />{{ invoice.miqdor }}</TableCell
            >
            <TableCell class="border text-center">{{ invoice.narx }}</TableCell>
            <TableCell class="border text-center">{{
              invoice.umumiy
            }}</TableCell>
            <TableCell class="border text-center">{{ invoice.sana }}</TableCell>
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
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination
        v-slot="{ page }"
        :items-per-page="10"
        :total="100"
        :sibling-count="1"
        show-edges
        :default-page="2"
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

const data = [
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    miqdor: "1200",
    sana: "3.10.2025",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    sana: "3.10.2025",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    haridor: "Mahmud Namazov",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    sana: "3.10.2025",
    haridor: "Mahmud Namazov",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    umumiy: "120 000 000 UZS",
    narx: "100 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    umumiy: "120 000 000 UZS",
    narx: "100 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    umumiy: "120 000 000 UZS",
    narx: "100 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    tovar: "REFLEX GREY Gilamlari",
  },
];
</script>

<style scoped></style>
