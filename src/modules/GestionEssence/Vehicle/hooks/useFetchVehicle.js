import { useQuery } from "@tanstack/vue-query";
import { vehicleQueryKey } from "../../keys-constants";
import client from "@/services/axiosInstance";

const useFetchVehicle = (key) => useQuery(
  vehicleQueryKey[key](),
  async () => {
    const response = await client.get(`/vehicle/${key}`)
    return response.data
  }
);

export default useFetchVehicle;