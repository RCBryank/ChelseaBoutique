import { Component, inject, ViewChild } from '@angular/core';
import { LayoutWebstore } from "../../layouts/layout-webstore/layout-webstore";
import { ActivatedRoute } from '@angular/router';
import { BrandH4 } from "../../ui/brand-h4/brand-h4";
import { BrandPrimaryButton } from "../../ui/brand-primary-button/brand-primary-button";
import { BrandH5 } from "../../ui/brand-h5/brand-h5";
import { InputBrand } from "../../ui/input-brand/input-brand";
import { ModalInfo, WebUserAuthenticatedInfo, WebUserProfileExtendedDetailsInfo } from '../../constants/interfaces';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalInfoBrand } from "../../ui/modal-info-brand/modal-info-brand";
import { ModalType } from '../../constants/types';
import { SYSTEM_MESSAGES } from '../../constants/system-messages';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { Changepassword } from "../../sections/changepassword/changepassword";
import { HttpErrorResponse } from '@angular/common/http';
import { Avatarimg } from "../../ui/avatarimg/avatarimg";
import { DivformProfileAvatarupdate } from "../../sections/divform-profile-avatarupdate/divform-profile-avatarupdate";

@Component({
  selector: 'app-profilepage',
  imports: [LayoutWebstore, BrandH4, BrandPrimaryButton, BrandH5, InputBrand, ReactiveFormsModule, ModalInfoBrand, Changepassword, Avatarimg, DivformProfileAvatarupdate],
  templateUrl: './profilepage.html',
  styleUrl: './profilepage.css'
})
export class Profilepage {

  @ViewChild('formAvatarProfile') formAvatarProfile!: NgForm;

  serviceAuth = inject(AuthService);

  formProfileDetails: FormGroup = new FormGroup([]);

  showChangePasswordModal: boolean = false;

  public ProfileDetails: WebUserProfileExtendedDetailsInfo = {
    Email: '',
    Name: '',
    MiddleName: '',
    LastName: '',
    Address: '',
    PostalCode: '',
    City: '',
    Country: '',
    PhoneNumber: '',
    PhoneNumber2: '',
    DateofBirth: null,
    NameAvatar: '',
    AvatarPublicPath: ''
  }

  ModalResultSubmit: ModalInfo = {
    ModalType: ModalType.DEBUG,
    Show: false,
    TitleModal: '',
    MessageModal: '',
    TextPrimaryAction: '',
    PrimaryAction: () => { }
  }

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (response) => {
        if (response["data"]["error"] != null) {
          this.ModalResultSubmit.ModalType = ModalType.ERROR;
          this.ModalResultSubmit.TitleModal = SYSTEM_MESSAGES["Profile_Details_404Title"];
          this.ModalResultSubmit.MessageModal = SYSTEM_MESSAGES["Profile_Details_404Message"];
          this.ModalResultSubmit.TextPrimaryAction = SYSTEM_MESSAGES["ButtonText_GoBack"];
          this.ModalResultSubmit.DebugMessage = response["data"]["error"];
          this.ModalResultSubmit.Show = true;
          this.ModalResultSubmit.PrimaryAction = () => { this.location.back() }
        }
        else {
          this.ProfileDetails = response["data"] as WebUserProfileExtendedDetailsInfo;
        }
      }
    });

    this.formProfileDetails = new FormGroup({
      Email: new FormControl<string>(this.ProfileDetails.Email),
      Name: new FormControl<string>(this.ProfileDetails.Name, [Validators.required]),
      MiddleName: new FormControl<string>(this.ProfileDetails.MiddleName),
      LastName: new FormControl<string>(this.ProfileDetails.LastName),
      Address: new FormControl<string>(this.ProfileDetails.Address),
      PostalCode: new FormControl<string>(this.ProfileDetails.PostalCode),
      City: new FormControl<string>(this.ProfileDetails.City),
      Country: new FormControl<string>(this.ProfileDetails.Country),
      PhoneNumber: new FormControl<string>(this.ProfileDetails.PhoneNumber),
      PhoneNumber2: new FormControl<string>(this.ProfileDetails.PhoneNumber2),
      DateofBirth: new FormControl<Date | null>(this.ProfileDetails.DateofBirth),
      ProfilePhoto: new FormControl<null>(null)
    });
  }

  ProfileDetailsSubmitHandler(e: SubmitEvent): void {
    e.preventDefault();

    if (this.formProfileDetails.valid == false)
      return;

    this.serviceAuth.UpdateProfile(this.formProfileDetails.value).subscribe({
      next: (response) => {
        this.ModalResultSubmit.ModalType = ModalType.INFO;
        this.ModalResultSubmit.Show = true;
        this.ModalResultSubmit.TitleModal = SYSTEM_MESSAGES["Profile_Update_200Title"]
        this.ModalResultSubmit.MessageModal = SYSTEM_MESSAGES["Profile_Update_200Message"]
        this.ModalResultSubmit.TextPrimaryAction = 'Regresar';
        this.ModalResultSubmit.DebugMessage = response;
        this.ModalResultSubmit.PrimaryAction = () => { this.HideModal(); }
      },
      error: (response) => {
        this.ModalResultSubmit.ModalType = ModalType.ERROR;
        this.ModalResultSubmit.Show = true;
        this.ModalResultSubmit.TitleModal = SYSTEM_MESSAGES["Profile_Update_400Title"]
        this.ModalResultSubmit.MessageModal = SYSTEM_MESSAGES["Profile_Update_400Message"]
        this.ModalResultSubmit.TextPrimaryAction = 'Regresar';
        this.ModalResultSubmit.DebugMessage = response;
        this.ModalResultSubmit.PrimaryAction = () => { this.HideModal(); }
      },
      complete: () => {

      }
    })
  }

  HideModal() {
    this.ModalResultSubmit.Show = false;
  }

  SetShowChangePasswordModal(show: boolean) {
    this.showChangePasswordModal = show;
  }

  UpdatePasswordHandler(errors: any | null) {
    if (errors == null) {
      const modalsettings: ModalInfo = {
        ModalType: ModalType.INFO,
        Show: true,
        TitleModal: SYSTEM_MESSAGES["Password_Update_200Title"],
        MessageModal: SYSTEM_MESSAGES["Password_Update_200Message"],
        TextPrimaryAction: 'Regresar',
        PrimaryAction: () => { this.HideModal(); this.SetShowChangePasswordModal(false); }
      }
      this.ModalResultSubmit = modalsettings;

    } else {
      const modalsettings: ModalInfo = {
        ModalType: ModalType.DEBUG,
        Show: true,
        TitleModal: SYSTEM_MESSAGES["Password_Update_400Title"],
        MessageModal: SYSTEM_MESSAGES["Password_Update_400Message"],
        TextPrimaryAction: 'Regresar',
        DebugMessage: new HttpErrorResponse({
          headers: errors.headers,
          statusText: errors.statusCode,
          error: ({
            message: errors.requestMessage,
            code: errors["status"]
          })
        }),
        PrimaryAction: () => { this.HideModal(); }
      }
      this.ModalResultSubmit = modalsettings;
    }
  }

  UpdateProfileAvatarHandler(errors: any | null) {
    if (errors) {
      const modalsettings: ModalInfo = {
        ModalType: ModalType.DEBUG,
        Show: true,
        TitleModal: SYSTEM_MESSAGES["ProfileAvatar_Update_400Title"],
        MessageModal: SYSTEM_MESSAGES["ProfileAvatar_Update_400Message"],
        TextPrimaryAction: 'Regresar',
        DebugMessage: new HttpErrorResponse({
          headers: errors.headers,
          statusText: errors.statusCode,
          error: ({
            message: errors.requestMessage,
            code: errors["status"]
          })
        }),
        PrimaryAction: () => { this.HideModal(); }
      }
      this.ModalResultSubmit = modalsettings;
    }
  }

  UpdateProfileAvataronPageHandler(imgsrc: string) {
    this.ProfileDetails.AvatarPublicPath = imgsrc;
  }
}
