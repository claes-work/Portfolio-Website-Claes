import type { ITabButton } from "@/models/tabs/ITabButton";
import type { IProjectTab } from "@/models/tabs/IProjectTab";

export interface IProjectInsides {
    tabButtons: ITabButton[]
    projectInsides: IProjectTab[]
}
