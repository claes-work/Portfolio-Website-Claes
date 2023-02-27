import type { IUsage } from "@/models/tabs/IUsage";
import type { IGitHubProfile } from "@/models/tabs/IGitHubProfile";
import type { IMedia } from "@/models/components/media/IMedia";

export interface ITechStackRow {
    id: number
    techTitle: string
    usageList: IUsage[]
    description: string
    implementedBy: IGitHubProfile
    techIcon: IMedia
}
