import { ref } from "vue";
import type { Ref } from "vue";
import type { ProjectTab } from "@/models/ProjectTab";
import ProjectIdeaIcon from "@/components/icons/ProjectIdeaIcon.vue";
import ProjectIdea from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectIdea.vue";
import FeaturesIcon from "@/components/icons/FeaturesIcon.vue";
import ProjectFeatures from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectFeatures.vue";
import TechStackIcon from "@/components/icons/TechStackIcon.vue";
import TechStack from "@/components/pages/projects/rebalancing-tool/project-insides/TechStack.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
import ProjectFiles from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectFiles.vue";
import { ProjectTabReferences } from "@/models/tabs/enums/ProjectTabReferences";

export const rebalancingToolInsides :Ref<ProjectTab[]>  = ref([
    {
        componentName: 'Project Idea',
        strapiReference: ProjectTabReferences.IDEA,
        icon: ProjectIdeaIcon,
        isActive: true,
        component: ProjectIdea
    },
    {
        componentName: 'Features',
        strapiReference: ProjectTabReferences.FEATURES,
        icon: FeaturesIcon,
        isActive: false,
        component: ProjectFeatures
    },
    {
        componentName: 'Tech Stack',
        strapiReference: ProjectTabReferences.TECH_STACK,
        icon: TechStackIcon,
        isActive: false,
        component: TechStack
    },
    {
        componentName: 'Files & Links',
        strapiReference: ProjectTabReferences.FILES,
        icon: FileIcon,
        isActive: false,
        component: ProjectFiles
    }
])
