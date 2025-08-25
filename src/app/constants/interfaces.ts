import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { ModalType } from "./types";

export interface ModalInfo {
    Show: boolean,
    TitleModal: string,
    MessageModal: string,
    TextPrimaryAction: string,
    TextSecondaryAction?: string | null,
    ModalType: ModalType,
    DebugMessage?: HttpErrorResponse,
    PrimaryAction(): void
}