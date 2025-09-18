import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { ModalType } from "./types";

export interface SignInForm {
    Email: string,
    Password: string
}

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

export interface WebUserAuthenticatedInfo {
    ID: number,
    Email: string,
    Name: string,
    LastName: string,
    ProfilePhoto: string
}

export interface WebUserProfileExtendedDetailsInfo {
    Email: string,
    Name: string,
    MiddleName: string,
    LastName: string,
    Address: string,
    PostalCode: string,
    City: string,
    Country: string,
    PhoneNumber: string,
    PhoneNumber2: string,
    DateofBirth: Date | null,
    NameAvatar: string,
    AvatarPublicPath: string,
}