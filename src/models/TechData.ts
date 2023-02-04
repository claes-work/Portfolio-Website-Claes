import type { GitHubProfile } from "@/models/GitHubProfile";

export interface TechData {
    icon: string,
    title: string,
    usageList: string[],
    description: string,
    implementedBy: GitHubProfile

}
