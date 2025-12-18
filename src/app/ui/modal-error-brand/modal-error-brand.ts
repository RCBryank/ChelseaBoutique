import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrandPrimaryButton } from "../brand-primary-button/brand-primary-button";

@Component({
  selector: 'app-modal-error-brand',
  imports: [BrandPrimaryButton],
  templateUrl: './modal-error-brand.html',
  styleUrl: './modal-error-brand.css'
})
export class ModalErrorBrand {
  private Show: boolean = false;
  private Hidden: boolean = true;

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
    this.Hidden = true;
    setTimeout(() => {
      this.Hidden = false;
    }, 2000);
  }

  getHidden() {
    return this.Hidden;
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
