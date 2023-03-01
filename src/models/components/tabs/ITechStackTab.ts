import type { ITechStackRow } from "@/models/components/tabs/ITechStackRow";
import type { ILabel } from "@/models/components/tabs/ILabel";

export interface ITechStackTab {
   labels: ILabel[]
   techStackRow: ITechStackRow[]
}
