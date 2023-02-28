import type { IProjectIdeaTab } from "@/models/components/tabs/IProjectIdeaTab";
import type { IFeaturesTab } from "@/models/components/tabs/IFeaturesTab";
import type { ITechStackTab } from "@/models/components/tabs/ITechStackTab";
import type { IFileTab } from "@/models/components/tabs/IFileTab";

export interface IProjectTab extends IProjectIdeaTab, IFeaturesTab, ITechStackTab, IFileTab{
    __component: string
    id: number
}
