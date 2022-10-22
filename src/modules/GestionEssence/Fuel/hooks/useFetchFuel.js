import { useQuery } from "@tanstack/vue-query";
import { fuelQueryKey } from "../../keys-constants";
import client from "@/services/axiosInstance";

const useFetchFuel = (key) => useQuery(
  fuelQueryKey[key](),
  async () => {
    const response = await client.get(`/fuel/${key}`)
    return response.data
  }
);

export default useFetchFuel;