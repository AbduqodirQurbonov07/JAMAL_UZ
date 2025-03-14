<template>
  <div class="flex w-screen h-screen">
    <aside
      class="flex flex-col gap-1 w-1.5/6 border-r border-slate-300 h-screen"
    >
      <ul>
        <p class="p-3.5 h-[7vh] ml-1 mb-1 border-b border-slate-300">
          <img src="./svg/logo.svg" alt="" />
        </p>
        <ul class="flex flex-col gap-1 px-4">
          <li>
            <router-link
              class="flex items-center gap-2 transition-all duration-300 py-1.5 px-4 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 rounded-md font-normal"
              to="hisobotlar"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2m5 9h6m-6 4h3"
                    />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  </g>
                </svg>
              </span>
              <span>Hisobotlar</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="mahsulotlar"
              class="flex items-center gap-2 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 rounded-md py-1.5 px-4 font-normal"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m12 21l8.131-4.208c.316-.164.474-.245.589-.366a1 1 0 0 0 .226-.373c.054-.159.054-.336.054-.692V7.533M12 21l-8.131-4.208c-.316-.164-.474-.245-.589-.366a1 1 0 0 1-.226-.373C3 15.894 3 15.716 3 15.359V7.533M12 21v-9.063m9-4.404l-9 4.404m9-4.404l-8.27-4.28c-.267-.138-.4-.208-.541-.235a1 1 0 0 0-.378 0c-.14.027-.274.097-.542.235L3 7.533m0 0l9 4.404"
                  />
                </svg>
              </span>
              <span>Mahsulotlar</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="mijozlar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 py-1.5 px-4 rounded-md font-normal"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M17.796 20.706c-.342-1.063-1.096-2.003-2.143-2.673C14.605 17.363 13.32 17 12 17s-2.605.363-3.653 1.033c-1.047.67-1.8 1.61-2.143 2.673"
                    />
                    <circle cx="12" cy="10" r="3" stroke-linecap="round" />
                    <rect width="18" height="18" x="3" y="3" rx="3" />
                  </g>
                </svg>
              </span>
              <span>Mijozlar</span>
            </router-link>
          </li>
          <li class="">
            <router-link
              to="foydalanovchilar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 rounded-md py-1.5 px-4 font-normal"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M3.5 19a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5v2h-2v-2a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v2h-2z"
                  />
                </svg>
              </span>
              <span>Foydalanuvchilar</span></router-link
            >
          </li>
          <li>
            <router-link
              to="olchovlar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 py-1.5 px-4 font-normal rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 26 26"
                >
                  <path
                    fill="currentColor"
                    d="M19 .063a.8.8 0 0 0-.188.03a.8.8 0 0 0-.375.22L.313 18.438a.8.8 0 0 0 0 1.093l6.157 6.157a.8.8 0 0 0 .656.218a.8.8 0 0 0 .438-.218L25.688 7.563a.8.8 0 0 0 0-1.094L19.53.312L19.47.25l-.032-.031a.8.8 0 0 0-.28-.125A1 1 0 0 0 19 .062zm-.031 1.968l5 4.969L7 23.969L2 19l1.219-1.219l1.531 1.532a.8.8 0 0 0 .781.28a1 1 0 0 0 .157-.062l.062-.031a.8.8 0 0 0 .156-.094l.032-.031a1 1 0 0 0 .125-.125a.8.8 0 0 0-.188-1.063l-1.531-1.53l1-1l1.531 1.53a.8.8 0 0 0 .781.282a1 1 0 0 0 .157-.063l.062-.031a.8.8 0 0 0 .156-.094l.031-.031a1 1 0 0 0 .126-.125A.8.8 0 0 0 8 16.062l-1.531-1.53l1-1l2.906 2.937a.8.8 0 0 0 .188.156l.062.031a1 1 0 0 0 .156.063l.063.031a.8.8 0 0 0 .312 0a1 1 0 0 0 .156-.063l.063-.03a.8.8 0 0 0 .156-.095l.031-.03a1 1 0 0 0 .126-.126a.8.8 0 0 0-.188-1.062l-2.906-2.938l.969-.969l1.53 1.5a.81.81 0 0 0 .813.22a.8.8 0 0 0 .406-.282a.81.81 0 0 0-.062-1.063l-1.531-1.53l.969-.97l1.53 1.5a.81.81 0 0 0 .813.22a.8.8 0 0 0 .406-.282a.81.81 0 0 0-.062-1.063l-1.531-1.53l.969-.97l2.937 2.907a.8.8 0 0 0 .406.25l.063.031a.8.8 0 0 0 .312 0a1 1 0 0 0 .157-.063l.062-.03a.8.8 0 0 0 .156-.095l.032-.03a1 1 0 0 0 .125-.126a.8.8 0 0 0-.188-1.062l-2.938-2.906l1-1l1.532 1.53a.81.81 0 0 0 .75.22a1 1 0 0 0 .156-.063l.063-.031a1 1 0 0 0 .125-.094a.807.807 0 0 0 .03-1.188l-1.53-1.5z"
                  />
                </svg>
              </span>
              <span class="w-[150px]">Standart o'lchovlar </span></router-link
            >
          </li>
          <li>
            <router-link
              to="valyutalar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 py-1.5 px-4 rounded-md font-normal"
            >
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
              <span>Valyutalar</span></router-link
            >
          </li>
          <li>
            <router-link
              to="kategoriyalar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 py-1.5 px-4 font-normal rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2m178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"
                  />
                </svg>
              </span>
              <span>Kategoriyalar</span></router-link
            >
          </li>
          <li>
            <router-link
              to="taminotchilar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 rounded-md py-1.5 px-4 font-normal"
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
                    d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"
                  />
                </svg>
              </span>
              <span>Taminotchilar</span></router-link
            >
          </li>
          <li>
            <router-link
              to="omborlar"
              class="flex items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 text-[#667085] hover:text-slate-50 rounded-md py-1.5 px-4 font-normal"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.6 5.26a2.51 2.51 0 0 0-2.48-2.2H5.885a2.51 2.51 0 0 0-2.48 2.19l-.3 2.47a3.4 3.4 0 0 0 1.16 2.56v8.16a2.5 2.5 0 0 0 2.5 2.5h10.47a2.5 2.5 0 0 0 2.5-2.5v-8.16A3.4 3.4 0 0 0 20.9 7.72Zm-6.59 14.68h-4v-4.08a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5Zm4.73-1.5a1.5 1.5 0 0 1-1.5 1.5h-2.23v-4.08a2.5 2.5 0 0 0-2.5-2.5h-1a2.5 2.5 0 0 0-2.5 2.5v4.08H6.765a1.5 1.5 0 0 1-1.5-1.5v-7.57a3.2 3.2 0 0 0 1.24.24a3.36 3.36 0 0 0 2.58-1.19a.24.24 0 0 1 .34 0a3.36 3.36 0 0 0 2.58 1.19A3.4 3.4 0 0 0 14.6 9.92a.22.22 0 0 1 .16-.07a.24.24 0 0 1 .17.07a3.36 3.36 0 0 0 2.58 1.19a3.2 3.2 0 0 0 1.23-.24Zm-1.23-8.33a2.39 2.39 0 0 1-1.82-.83a1.2 1.2 0 0 0-.92-.43h-.01a1.2 1.2 0 0 0-.92.42a2.476 2.476 0 0 1-3.65 0a1.24 1.24 0 0 0-1.86 0A2.405 2.405 0 0 1 4.1 7.78l.3-2.4a1.52 1.52 0 0 1 1.49-1.32h12.23a1.5 1.5 0 0 1 1.49 1.32l.29 2.36a2.39 2.39 0 0 1-2.395 2.37Z"
                  />
                </svg>
              </span>
              <span>Omborlar</span></router-link
            >
          </li>
        </ul>
      </ul>
    </aside>
    <header class="w-5/6">
      <div class="flex items-center w-[85vw] h-[7vh] border-b border-slate-300">
        <p class="p-2.5 w-[86vw] font-semibold text-xl">
          {{ $route.name }}
        </p>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
            <AvatarFallback>QA</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <main class="h-[93vh]">
        <router-view></router-view>
      </main>
    </header>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<style scoped></style>
