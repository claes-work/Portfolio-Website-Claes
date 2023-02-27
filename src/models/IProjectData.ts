import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import type { ISuggestApp } from "@/models/suggest-app/ISuggestApp";

export interface IProjectData {
    rebalancingTool: IRebalancingTool
    suggestApp: ISuggestApp
}
