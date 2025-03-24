import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios";
import router from "@/router";
export const UseApiStore = defineStore("api", () => {
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
        `/contributor/getall?limit=10&page=${page}`,
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

  return fetchData(), todatestring, data, loading, error;
});
