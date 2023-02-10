import { ref } from "vue";
import type { Ref } from "vue";
import type { ProjectTab } from "@/models/ProjectTab";
import ProjectIdeaIcon from "@/components/icons/ProjectIdeaIcon.vue";
import ProjectIdea from "@/components/pages/projects/suggest-app/project-insides/ProjectIdea.vue";
import FeaturesIcon from "@/components/icons/FeaturesIcon.vue";
import ProjectFeatures from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectFeatures.vue";
import TechStackIcon from "@/components/icons/TechStackIcon.vue";
import TechStack from "@/components/pages/projects/rebalancing-tool/project-insides/TechStack.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
import ProjectFiles from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectFiles.vue";

export const suggestAppInsides :Ref<ProjectTab[]>  = ref([
    {
        componentName: 'Project Idea',
        icon: ProjectIdeaIcon,
        isActive: true,
        component: ProjectIdea
    },
    {
        componentName: 'Features',
        icon: FeaturesIcon,
        isActive: false,
        component: ProjectFeatures
    },
    {
        componentName: 'Tech Stack',
        icon: TechStackIcon,
        isActive: false,
        component: TechStack
    },
    {
        componentName: 'Files & Links',
        icon: FileIcon,
        isActive: false,
        component: ProjectFiles
    }
])
