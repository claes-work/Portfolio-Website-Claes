import type { IRebalancingTool } from "@/models/projects/rebalancing-tool/IRebalancingTool";
import type { ISuggestApp } from "@/models/projects/suggest-app/ISuggestApp";

export interface IProjectData {
    rebalancingTool: IRebalancingTool
    suggestApp: ISuggestApp
}
