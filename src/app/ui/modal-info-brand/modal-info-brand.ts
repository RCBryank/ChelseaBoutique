import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrandPrimaryButton } from "../brand-primary-button/brand-primary-button";
import { ModalInfo } from '../../constants/interfaces';
import { ModalType } from '../../constants/types';

@Component({
  selector: 'app-modal-info-brand',
  imports: [BrandPrimaryButton],
  templateUrl: './modal-info-brand.html',
  styleUrl: './modal-info-brand.css'
})
export class ModalInfoBrand {
  private Show: boolean = false;
  private Hidden: boolean = true;

  @Input() ModalParameters: ModalInfo = {
    ModalType: ModalType.DEBUG,
    Show: false,
    TitleModal: '',
    MessageModal: '',
    TextPrimaryAction: '',
    PrimaryAction: () => { }
  }

  @Input() TitleModal: string = '';
  @Input() MessageModal: string = '';
  @Input() TextButton: string = 'Aceptar';

  @Input() set SetShow(value: boolean) {
    this.Show = value;
    const _dombody = document.getElementsByTagName("body")[0];
    if (value)
      _dombody?.classList.add("overflow-hidden");
    else
      _dombody?.classList.remove("overflow-hidden");
  }

  @Output() AcceptHandler = new EventEmitter<void>();

  ngOnInit() {
    this.Hidden = !this.ModalParameters.Show;

    if (this.Hidden == true) {
      setTimeout(() => {
        this.Hidden = false;
      }, 2000);
    }
  }

  getBackgroundClassList() {
    return this.Show ? "backdrop-blur-[4px]" : "";
  }

  getClassList() {

    let list = this.Show ? " animate__fadeInDown " : " animate__fadeOutUp ";
    list += this.Hidden ? "" : "visible";

    return list;
  }

  getShow() {
    return this.Show;
  }

  Accept() {
    this.AcceptHandler.emit();
  }
}
