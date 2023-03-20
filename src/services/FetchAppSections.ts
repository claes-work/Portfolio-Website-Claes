import axios from "axios";
import { AllLocales } from "@/models/AllLocales";
import type { AxiosResponse } from "axios";
import type { IRebalancingTool } from "@/models/projects/rebalancing-tool/IRebalancingTool";
import type { IPureAir } from "@/models/websites/pure-air/IPureAir";
import type { AllLocales as AllLocalesType } from "@/models/AllLocales";
import type { ISuggestApp } from "@/models/projects/suggest-app/ISuggestApp";
import type { INavbar } from "@/models/components/navbar/INavbar";
import type { IFooter } from "@/models/components/footer/IFooter";
import type { IDiewellWebsite } from "@/models/websites/diewell-website/IDiewellWebsite";
import type { IBroadyPictures } from "@/models/websites/broady-pictures/IBroadyPictures";
import type { IAboutPage } from "@/models/about-page/IAboutPage";

export default {

    /**
     * Get all Navbar data
     */
    async fetchNavbarData(locale: AllLocalesType = AllLocales.EN): Promise<INavbar> {
        return axios.get(
            `https://strapi.claes-work.de/navbar?_locale=${locale}`
        )
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

    /**
     * Get all Footer data
     */
    async fetchFooterData(locale: AllLocalesType = AllLocales.EN): Promise<IFooter> {
        return axios.get(
            `https://strapi.claes-work.de/footer?_locale=${locale}`
        )
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

    /**
     * Get all Rebalancing Tool Section data
     */
    async fetchRebalancingToolSection(locale: AllLocalesType = AllLocales.EN): Promise<IRebalancingTool> {
        return axios.get(
            `https://strapi.claes-work.de/rebalancing-tool-section?_locale=${locale}`
        )
        .then((response: AxiosResponse) => response.data)
        .catch(error => console.log(error))
    },

    /**
     * Get all Suggest App Section data
     */
    async fetchSuggestAppSection(locale: AllLocalesType = AllLocales.EN): Promise<ISuggestApp> {
        return axios.get(
            `https://strapi.claes-work.de/suggest-app-section?_locale=${locale}`
        )
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

    /**
     * Get all Pure Air Section data
     */
    async fetchPureAirSection(locale: AllLocalesType = AllLocales.EN): Promise<IPureAir> {
        return axios.get(
            `https://strapi.claes-work.de/pure-air-section?_locale=${locale}`
        )
        .then((response: AxiosResponse) => response.data)
        .catch(error => console.log(error))
    },

    /**
     * Get all Diewell Website Section data
     */
    async fetchDiewellWebsiteSection(locale: AllLocalesType = AllLocales.EN): Promise<IDiewellWebsite> {
        return axios.get(
            `https://strapi.claes-work.de/diewell-website-section?_locale=${locale}`
        )
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

    /**
     * Get all Broady Pictures Section data
     */
    async fetchBroadyPicturesSection(locale: AllLocalesType = AllLocales.EN): Promise<IBroadyPictures> {
        return axios.get(
            `https://strapi.claes-work.de/broady-pictures-section?_locale=${locale}`
        )
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

    /**
     * Get all about page data
     */
    async fetchAboutPage(locale: AllLocalesType = AllLocales.EN): Promise<IAboutPage> {
        return axios.get(
            `https://strapi.claes-work.de/about-section?_locale=${locale}`
        )
            .then((response: AxiosResponse) => response.data)
            .catch(error => console.log(error))
    },

}
