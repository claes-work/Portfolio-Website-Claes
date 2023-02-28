import type { ITabButton } from "@/models/components/tabs/ITabButton";
import type { IProjectTab } from "@/models/components/tabs/IProjectTab";

export interface IProjectInsides {
    tabButtons: ITabButton[]
    projectInsides: IProjectTab[]
}
