import axios from "axios";
import type { AxiosResponse } from "axios";
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import type { IPureAir } from "@/models/pure-air/IPureAir";

export default {

    /**
     * Get all Rebalancing Tool Section data
     */
    async fetchRebalancingToolSection(): Promise<IRebalancingTool> {
        return axios.get('https://strapi.claes-work.de/rebalancing-tool-section')
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

    /**
     * Get all Pure Air Section data
     */
    async fetchPureAirSection(): Promise<IPureAir> {
        return axios.get('https://strapi.claes-work.de/pure-air-section')
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    }

}
