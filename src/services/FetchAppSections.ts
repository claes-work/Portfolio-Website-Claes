import axios from "axios";
import type { AxiosResponse } from "axios";
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";

export default {

    /**
     * Get all Rebalancing Tool Section data
     */
    async fetchRebalancingToolSection(): Promise<IRebalancingTool> {
        return axios.get('https://strapi.claes-work.de/rebalancing-tool-section')
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    }

}
