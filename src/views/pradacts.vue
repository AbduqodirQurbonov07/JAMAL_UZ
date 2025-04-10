<template>
  <div v-if="loading" class="mx-4 my-5 flex flex-col gap-10">
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
  <div v-else>
    <div class="grid grid-cols-5 gap-3 w-[85vw] px-4 py-3">
      <Select v-model="warehouse" class="p-2">
        <SelectTrigger class="bg-slate-50 border-transparent text-base h-12">
          <SelectValue placeholder="Omborxona" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="itm in itemStore.warehouses"
              :key="itm?.warehouseId"
              :value="itm?.warehouseId"
            >
              {{ itm?.warehouseName }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select class="text-base">
        <SelectTrigger class="bg-slate-50 border-transparent h-12">
          <SelectValue placeholder="Taminotchilar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="itm in itemStore.category"
              :key="itm?.categoryId"
              :value="itm?.categoryId"
            >
              {{ itm?.categoryName }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <input
        type="number"
        class="bg-slate-50 px-2 rounded-lg"
        placeholder="Eni"
      />
      <input
        type="number"
        class="bg-slate-50 px-2 rounded-lg"
        placeholder="Bo'yi"
      />
      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-1 border border-slate-200 px-6 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-slate-50"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          class="flex items-center gap-1 border border-slate-200 px-6 py-3 text-sm rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-slate-50"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
      <div class="flex border-t w-[84vw] justify-between py-3">
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
          <DialogTrigger as-child>
            <div
              class="flex cursor-pointer items-center gap-2 border border-slate-200 pr-20 px-4 py-2 text-base rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
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
              <DialogTitle> Inventarizatsiya </DialogTitle>
            </DialogHeader>
            <ul class="grid grid-cols-2 gap-3">
              <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                <Label for="size"
                  >Standart size<span class="text-orange-500"> *</span></Label
                >
                <Select id="size" v-model="standartSize">
                  <SelectTrigger class="border border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="itm in itemStore.sizes"
                        :key="itm?.sizeId"
                        :value="itm?.sizeId"
                      >
                        {{
                          `${formattedCurreny(itm?.sizeWidth)} - ${itm?.sizeCode}`
                        }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <label for="size"
                  >Boyi<span class="text-orange-500"> *</span></label
                >
                <input
                  v-model="CarpetHeight"
                  type="number"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <Label for="size"
                  >Valyuta<span class="text-orange-500"> *</span></Label
                >
                <Select id="size" v-model="currency">
                  <SelectTrigger class="border border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="itm in itemStore.currency"
                        :key="itm?.currencyId"
                        :value="itm?.currencyId"
                      >
                        {{ itm?.currencySymbol }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <Label for="size"
                  >Ombor<span class="text-orange-500"> *</span></Label
                >
                <Select id="size" v-model="warehouse">
                  <SelectTrigger class="border border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="itm in itemStore.warehouses"
                        :key="itm?.warehouseId"
                        :value="itm?.warehouseId"
                      >
                        {{ itm?.warehouseName }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <Label for="size"
                  >Kategoriya<span class="text-orange-500"> *</span></Label
                >
                <Select id="size" v-model="category">
                  <SelectTrigger class="border border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="itm in itemStore.category"
                        :key="itm?.categoryId"
                        :value="itm?.categoryId"
                      >
                        {{ itm?.categoryName }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </li>
              <li class="flex flex-col gap-1.5 mb-5">
                <Label for="size"
                  >Miqdor<span class="text-orange-500"> *</span></Label
                >
                <input
                  v-model="CarpetQuantity"
                  type="number"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5">
                <Label for="size">Tan narxi </Label>
                <input
                  v-model="CarpetCost"
                  type="number"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex flex-col gap-1.5">
                <Label for="size">Sotuv narxi </Label>
                <input
                  v-model="CarpetPrice"
                  type="number"
                  class="border border-slate-300 px-3 py-2 rounded-lg"
                />
              </li>
              <li class="flex items-start gap-1.5 flex-col">
                <label for="izoh">Izoh</label>
                <textarea
                  v-model="CarpetCom"
                  class="border p-3 border-slate-300 rounded-xl w-[650px] h-32"
                  id="izoh"
                ></textarea>
              </li>
            </ul>
            <DialogFooter class="mt-8">
              <div class="flex flex-col gap-8 w-[450px]">
                <div class="flex items-center justify-end gap-3">
                  <DialogClose as-child>
                    <button
                      class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                    >
                      Yopish
                    </button>
                  </DialogClose>
                  <button
                    @click="submitPradacts"
                    class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                  >
                    Saqlash
                  </button>
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <div class="flex flex-col items-center w-[85vw] gap-3">
      <Table class="border">
        <TableHeader class="border">
          <TableRow class="border">
            <TableHead class="border bg-slate-50 text-black">№ </TableHead>
            <TableHead class="border bg-slate-50 text-black"> Ombor </TableHead>
            <TableHead class="border bg-slate-50 text-black"> Tovar</TableHead>
            <TableHead class="border bg-slate-50 text-black"> Code</TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Eni
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Bo'yi
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              soni
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Qoldiq
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Jami
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Valyuta
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Narx
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Sotuvi narx
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
              Umumiy Narx
            </TableHead>
            <TableHead class="text-left border bg-slate-50 text-black">
            </TableHead>
            <TableHead class="text-left border w-12 bg-slate-50 text-black">
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            class="hover:bg-indigo-100 border-2 hover:border-l-2 hover:border-l-indigo-700"
            v-for="(inf, index) in data?.data"
            :key="inf?.carpet_carpetId"
          >
            <TableCell class="border">
              {{ index + 1 }}
            </TableCell>
            <TableCell class="border">
              {{ inf?.warehouse_warehouseName }}
            </TableCell>
            <TableCell class="border text-center">{{
              inf?.category_categoryName
            }}</TableCell>

            <TableCell class="border text-center">{{
              inf?.size_sizeCode
            }}</TableCell>
            <TableCell class="border text-center">{{
              formattedCurreny(inf?.size_sizeWidth)
            }}</TableCell>

            <TableCell class="border text-center">{{
              formattedCurreny(inf?.carpet_height)
            }}</TableCell>
            <TableCell class="border text-center">{{
              formattedCurreny(inf?.carpet_stockQuantity)
            }}</TableCell>
            <TableCell class="flex items-center justify-center gap-2">
              {{}}</TableCell
            >
            <TableCell class="border text-center">{{
              formattedCurreny(inf?.carpet_length)
            }}</TableCell>
            <TableCell class="border text-center">
              {{ inf?.currency_currencySymbol }}
            </TableCell>

            <TableCell class="border text-center">{{
              formattedCurreny(inf?.carpet_cost)
            }}</TableCell>
            <TableCell class="border text-center">{{
              formattedCurreny(inf?.carpet_price)
            }}</TableCell>
            <TableCell class="border text-center">{{
              formattedCurreny(
                Number(inf?.carpet_cost) + Number(inf?.carpet_price)
              )
            }}</TableCell>
            <TableCell class="border text-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M22.854 6.008c-2.69.074-4.775.804-6.805 1.51c-2.171.754-4.22 1.465-7.059 1.494c-1.897.03-3.797-.298-5.664-.944L2 7.61v17.082l.666.237c1.739.615 3.517.97 5.287 1.054q.421.02.826.02c3.013 0 5.32-.8 7.557-1.572c2.358-.816 4.582-1.587 7.617-1.444a16.5 16.5 0 0 1 4.713.944l1.334.472V7.314l-.658-.24a17.8 17.8 0 0 0-5.297-1.056a17 17 0 0 0-1.191-.01m.054 1.986q.509-.016 1.049.004c.374.016.748.05 1.121.094A2.495 2.495 0 0 0 28 9.949v9.102a2.495 2.495 0 0 0-2.957 2.025a18 18 0 0 0-.996-.074c-3.415-.15-5.933.709-8.367 1.553c-2.361.818-4.598 1.591-7.631 1.447a16 16 0 0 1-1.13-.1A2.495 2.495 0 0 0 4 22.051v-9.102a2.493 2.493 0 0 0 2.959-2.05c.685.071 1.37.112 2.053.101c3.165-.032 5.466-.833 7.693-1.607c1.961-.683 3.83-1.325 6.203-1.399M16 11c-2.206 0-4 2.243-4 5s1.794 5 4 5s4-2.243 4-5s-1.794-5-4-5m0 2c1.084 0 2 1.374 2 3s-.916 3-2 3s-2-1.374-2-3s.916-3 2-3m7.5 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m-15 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"
                  />
                </svg>
              </span>
            </TableCell>
            <TableCell class="text-center cursor-pointer">
              <Popover>
                <PopoverTrigger>
                  <img src="../svg/dots.svg" alt="" />
                </PopoverTrigger>
                <PopoverContent
                  class="cursor-pointer flex flex-col rounded-xl w-52"
                >
                  <Dialog class="w-[800px]">
                    <DialogTrigger as-child>
                      <div
                        :id="inf?.carpet_carpetId"
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
                        <DialogTitle> Mahsulotlar tahrirlash </DialogTitle>
                      </DialogHeader>
                      <ul class="grid grid-cols-2 gap-3">
                        <li class="flex flex-col gap-1.5 mt-2.5 mb-5">
                          <Label for="size"
                            >Standart size<span class="text-orange-500">
                              *</span
                            ></Label
                          >
                          <Select id="size" v-model="newStandartSize">
                            <SelectTrigger class="border border-slate-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem
                                  v-for="itm in itemStore.sizes"
                                  :key="itm?.sizeId"
                                  :value="itm?.sizeId"
                                >
                                  {{
                                    `${formattedCurreny(itm?.sizeWidth)} - ${itm?.sizeCode}`
                                  }}
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <label for="size"
                            >Boyi<span class="text-orange-500"> *</span></label
                          >
                          <input
                            v-model="dataById.height"
                            type="number"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <Label for="size"
                            >Valyuta<span class="text-orange-500">
                              *</span
                            ></Label
                          >
                          <Select id="size" v-model="newCurrency">
                            <SelectTrigger class="border border-slate-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem
                                  v-for="itm in itemStore.currency"
                                  :key="itm?.currencyId"
                                  :value="itm?.currencyId"
                                >
                                  {{ itm?.currencySymbol }}
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <Label for="size"
                            >Ombor<span class="text-orange-500"> *</span></Label
                          >
                          <Select id="size" v-model="newWarehouse">
                            <SelectTrigger class="border border-slate-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem
                                  v-for="itm in itemStore.warehouses"
                                  :key="itm?.warehouseId"
                                  :value="itm?.warehouseId"
                                >
                                  {{ itm?.warehouseName }}
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <Label for="size"
                            >Kategoriya<span class="text-orange-500">
                              *</span
                            ></Label
                          >
                          <Select id="size" v-model="newCategory">
                            <SelectTrigger class="border border-slate-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem
                                  v-for="itm in itemStore.category"
                                  :key="itm?.categoryId"
                                  :value="itm?.categoryId"
                                >
                                  {{ itm?.categoryName }}
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </li>
                        <li class="flex flex-col gap-1.5 mb-5">
                          <Label for="size"
                            >Miqdor<span class="text-orange-500">
                              *</span
                            ></Label
                          >
                          <input
                            v-model="dataById.stockQuantity"
                            type="number"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5">
                          <Label for="size">Tan narxi </Label>
                          <input
                            v-model="dataById.cost"
                            type="number"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex flex-col gap-1.5">
                          <Label for="size">Sotuv narxi </Label>
                          <input
                            v-model="dataById.price"
                            type="number"
                            class="border border-slate-300 px-3 py-2 rounded-lg"
                          />
                        </li>
                        <li class="flex items-start gap-1.5 flex-col">
                          <label for="izoh">Izoh</label>
                          <textarea
                            v-model="dataById.carpetDescription"
                            class="border p-3 border-slate-300 rounded-xl w-[650px] h-32"
                            id="izoh"
                          ></textarea>
                        </li>
                      </ul>
                      <DialogFooter class="mt-8">
                        <div class="flex flex-col gap-8 w-[450px]">
                          <div class="flex items-center justify-end gap-3">
                            <DialogClose as-child>
                              <button
                                class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                              >
                                Yopish
                              </button>
                            </DialogClose>
                            <button
                              :id="inf?.carpet_carpetId"
                              @click="editCarpet"
                              class="border border-slate-200 px-6 py-2.5 text-sm rounded-xl transition-all duration-300 bg-indigo-600 text-slate-50 hover:bg-indigo-700"
                            >
                              Saqlash
                            </button>
                          </div>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <button
                    :id="inf?.carpet_carpetId"
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
import Skeleton from "@/components/content/skeleton.vue";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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

const data = ref<DataItem[] | null | any>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const fetchData = async (page: number = 1): Promise<void> => {
  const token = localStorage.getItem("token");

  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get<DataItem[]>(
      `/carpet/getall?limit=10&page=${page}`,
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
import { useItemStore } from "@/store";

const { fetchItems } = useItemStore();
const itemStore = useItemStore();
const loadItems = async () => {
  await fetchItems();
};

loadItems();
const standartSize = ref<string | undefined>(undefined);
const currency = ref<string | undefined>(undefined);
const warehouse = ref<string | undefined>(undefined);
const category = ref<string | undefined>(undefined);
const CarpetHeight = ref("");
const CarpetQuantity = ref("");
const CarpetCost = ref<string | null>(null);
const CarpetPrice = ref<number | null>(null);
const CarpetCom = ref("");

const submitPradacts = async () => {
  const token = localStorage.getItem("token");
  const payload = {
    standartSize: standartSize.value,
    currency: currency.value,
    warehouse: warehouse.value,
    category: category.value,
    height: CarpetHeight.value,
    stockQuantity: CarpetQuantity.value,
    cost: CarpetCost.value,
    price: CarpetPrice.value,
    carpetDescription: CarpetCom.value,
  };
  try {
    const response = await axios.post(`/carpet/create`, payload, {
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
const deleteBtn = async (e: any) => {
  const token = localStorage.getItem("token");
  const payload = {
    standartSize: standartSize.value,
    currency: currency.value,
    warehouse: warehouse.value,
    category: category.value,
    height: CarpetHeight.value,
    stockQuantity: CarpetQuantity.value,
    cost: CarpetCost.value,
    price: CarpetPrice.value,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/carpet/delete/${e?.target?.id}`,
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
    if (err.response.status === 400)
      alert("Bu gilam omborda mavjud yoki o`chirib bo`lmaydigan gilam!");
  }
};
const newStandartSize = ref<string | undefined>(undefined);
const newCurrency = ref<string | undefined>(undefined);
const newWarehouse = ref<string | undefined>(undefined);
const newCategory = ref<string | undefined>(undefined);

const editCarpet = async (e: any) => {
  const token = localStorage.getItem("token");
  console.log(e.target.id);
  const payload = {
    standartSize: newStandartSize.value,
    currency: newCurrency.value,
    warehouse: newWarehouse.value,
    category: newCategory.value,
    height: dataById.value.height,
    stockQuantity: dataById.value.stockQuantity,
    cost: dataById.value.cost,
    price: dataById.value.price,
    carpetDescription: dataById.value.carpetDescription,
  };
  try {
    const response = await axios.patch<DataItem[]>(
      `/carpet/edit/${e?.target?.id}`,
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
  stockQuantity: "",
  cost: "",
  price: "",
  height: "",
  length: "",
  carpetDescription: "",
  carpetName: null,
  cutable: true,
  createdat: "",
  deletedat: null,
  category: newCategory,
  currency: newCurrency,
  standartSize: newStandartSize,
  warehouse: newWarehouse,
});
const fetchDataById = async (event: any): Promise<void> => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`/carpet/getone/${event.target.id}`, {
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
