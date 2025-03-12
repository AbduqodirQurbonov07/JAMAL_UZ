<template>
  <div class="">
    <div class="grid grid-cols-5 gap-3">
      <div class="flex w-[1400px] justify-between py-3">
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
        <Popover>
          <PopoverTrigger
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
          </PopoverTrigger>
          <PopoverContent class="w-[700px]">
            <div class="flex flex-col p-6">
              <div class="flex items-center justify-between pb-5 border-b mb-8">
                <p >Omborxona qo'shish</p>
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
              <ul class="grid grid-cols-1 gap-3">
                <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                  <Label for="size"
                    >Nomi<span class="text-orange-500">*</span></Label
                  >
                  <input
                    type="text"
                    class="border border-slate-300 px-3 py-2 rounded-lg"
                  />
                </li>
              </ul>
              <div class="flex flex-col gap-8">
                <div class="flex items-start flex-col">
                  <label for="izoh">Izoh</label>
                  <textarea
                    class="border border-slate-300 p-3 rounded-xl w-[620px] h-32"
                    name=""
                    id="izoh"
                  ></textarea>
                </div>
                <div class="flex items-center justify-end gap-3">
                  <button
                    class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                  >
                    Yopish
                  </button>
                  <button
                    class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                  >
                    Saqlash
                  </button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3 p-5">
      <div
        class="flex items-start bg-white p-4 w-96 justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col items-start gap-3">
              <p class="flex items-center gap-3">
                <span class="text-xl font-semibold">Omborxona nomi</span
                ><span
                  class="bg-[#F3F3F3] text-gray-700 px-1 rounded-xl"
                ></span>
              </p>
              <p class="text-[#98A2B3]">Bu yerda qisqacha izohi bo‘ladi</p>
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
                  <p>Omborxona nomi</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <p>3.12.2025</p>
                </li>
                <li class="flex flex-col border-b gap-1 py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm">
                    Bu yerda qisqacha izohi bo‘ladi
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
      <div
        class="flex items-start bg-white p-4 w-96 justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col items-start gap-3">
              <p class="flex items-center gap-3">
                <span class="text-xl font-semibold">Omborxona nomi</span
                ><span
                  class="bg-[#F3F3F3] text-gray-700 px-1 rounded-xl"
                ></span>
              </p>
              <p class="text-[#98A2B3]">Bu yerda qisqacha izohi bo‘ladi</p>
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
                  <p>Omborxona nomi</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <p>3.12.2025</p>
                </li>
                <li class="flex flex-col border-b gap-1 py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm">
                    Bu yerda qisqacha izohi bo‘ladi
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
      <div
        class="flex items-start bg-white p-4 w-96 justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col items-start gap-3">
              <p class="flex items-center gap-3">
                <span class="text-xl font-semibold">Omborxona nomi</span
                ><span
                  class="bg-[#F3F3F3] text-gray-700 px-1 rounded-xl"
                ></span>
              </p>
              <p class="text-[#98A2B3]">Bu yerda qisqacha izohi bo‘ladi</p>
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
                  <p>Omborxona nomi</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <p>3.12.2025</p>
                </li>
                <li class="flex flex-col border-b gap-1 py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm">
                    Bu yerda qisqacha izohi bo‘ladi
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
      <div
        class="flex items-start bg-white p-4 w-96 justify-between rounded-xl border"
      >
        <Popover>
          <PopoverTrigger>
            <div class="flex flex-col items-start gap-3">
              <p class="flex items-center gap-3">
                <span class="text-xl font-semibold">Omborxona nomi</span
                ><span
                  class="bg-[#F3F3F3] text-gray-700 px-1 rounded-xl"
                ></span>
              </p>
              <p class="text-[#98A2B3]">Bu yerda qisqacha izohi bo‘ladi</p>
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
                  <p>Omborxona nomi</p>
                </li>
                <li class="flex justify-between py-2 border-b">
                  <p class="text-gray-600">Yaratilgan sana</p>
                  <p>3.12.2025</p>
                </li>
                <li class="flex flex-col border-b gap-1 py-2">
                  <p class="text-gray-600">Izoh</p>
                  <p class="max-w-[400px] text-sm">
                    Bu yerda qisqacha izohi bo‘ladi
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Label } from "@/components/ui/label";
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

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const data = [
  {
    id: 1,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    eni: "400 sm ",
    boyi: "1200 sm",
    code: "999",
    email: "mahmudnamazov705@gmail.com",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    soni: "1 200",
    qoldiq: "1 000",
    jami: "4 400",
    valyuta: "UZS",
    sana: "3.10.2025",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 2,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    miqdor: "1200",
    sana: "3.10.2025",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    code: "999",
    soni: "1 200",
    email: "mahmudnamazov705@gmail.com",
    qoldiq: "1 000",
    jami: "4 400",
    valyuta: "UZS",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 3,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    eni: "400 Metr ",
    code: "999",
    email: "mahmudnamazov705@gmail.com",
    soni: "1 200",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    qoldiq: "1 000",
    jami: "4 400",
    valyuta: "UZS",
    boyi: "1200 Metr",
    sana: "3.10.2025",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 4,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    code: "999",
    soni: "1 200",
    qoldiq: "1 000",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    jami: "4 400",
    valyuta: "UZS",
    eni: "400 Metr ",
    email: "mahmudnamazov705@gmail.com",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    haridor: "Mahmud Namazov",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 5,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    sana: "3.10.2025",
    code: "999",
    soni: "1 200",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    qoldiq: "1 000",
    jami: "4 400",
    email: "mahmudnamazov705@gmail.com",
    valyuta: "UZS",
    haridor: "Mahmud Namazov",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 6,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    code: "999",
    email: "mahmudnamazov705@gmail.com",
    soni: "1 200",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    qoldiq: "1 000",
    jami: "4 400",
    valyuta: "UZS",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 7,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    email: "mahmudnamazov705@gmail.com",
    qoldiq: "1 000",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    jami: "4 400",
    valyuta: "UZS",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 8,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    miqdor: "1200",
    email: "mahmudnamazov705@gmail.com",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    qoldiq: "1 000",
    jami: "4 400",
    valyuta: "UZS",
    eni: "400 Metr ",
    sana: "3.10.2025",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 9,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    email: "mahmudnamazov705@gmail.com",
    qoldiq: "1 000",
    jami: "4 400",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    valyuta: "UZS",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    narx: "100 000 UZS",
    umumiy: "120 000 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 10,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    email: "mahmudnamazov705@gmail.com",
    qoldiq: "1 000",
    jami: "4 400",
    valyuta: "UZS",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    umumiy: "120 000 000 UZS",
    narx: "100 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 11,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    qoldiq: "1 000",
    jami: "4 400",
    email: "mahmudnamazov705@gmail.com",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    valyuta: "UZS",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    umumiy: "120 000 000 UZS",
    narx: "100 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 12,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    qoldiq: "1 000",
    email: "mahmudnamazov705@gmail.com",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
    jami: "4 400",
    valyuta: "UZS",
    miqdor: "1200",
    sana: "3.10.2025",
    eni: "400 Metr ",
    boyi: "1200 Metr",
    umumiy: "120 000 000 UZS",
    narx: "100 000 UZS",
    tovar: "REFLEX GREY Gilamlari",
  },
  {
    id: 13,
    ombor: "omborxona",
    xodim: "Husan Kamolov",
    taminot: "Taminot ",
    haridor: "Mahmud Namazov",
    code: "999",
    soni: "1 200",
    qoldiq: "1 000",
    email: "mahmudnamazov705@gmail.com",
    jami: "4 400",
    valyuta: "UZS",
    tel1: "+ 998 91 088 29 07",
    tel2: "+ 998 91 088 29 07",
    izoh: "Законом предусмотрено предоставление права на бесплатное пользование городским... ",
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
