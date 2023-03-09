import type { BaseEntity } from "@/models/BaseEntity"
import type { IHeroSection } from "@/models/about-page/IHeroSection"
import type { IQuoteBanner } from "@/models/components/banners/IQuoteBanner";
import type { ITimelineRow } from "@/models/about-page/ITimelineRow";
import type { IPersonalTechStack } from "@/models/about-page/IPersonalTechStack";

export interface IAboutPage extends BaseEntity {
    heroSection:       IHeroSection
    quoteBanner:       IQuoteBanner
    personalTechStack: IPersonalTechStack
    timeline:          ITimelineRow[]
}
