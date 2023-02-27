import type { IButton } from "@/models/components/IButton";
import type { AllLocales } from "@/models/AllLocales";
import type {INavLink} from "@/models/components/navbar/INavLink";

export interface INavbar {
    id: number
    locale: AllLocales
    navLinks: INavLink[]
    button: IButton[]
}
