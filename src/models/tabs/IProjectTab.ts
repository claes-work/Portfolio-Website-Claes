import type { IProjectIdeaTab } from "@/models/tabs/IProjectIdeaTab";
import type { IFeaturesTab } from "@/models/tabs/IFeaturesTab";
import type { ITechStackTab } from "@/models/tabs/ITechStackTab";
import type { IFileTab } from "@/models/tabs/IFileTab";

export interface IProjectTab extends IProjectIdeaTab, IFeaturesTab, ITechStackTab, IFileTab{
    __component: string
    id: number
}
