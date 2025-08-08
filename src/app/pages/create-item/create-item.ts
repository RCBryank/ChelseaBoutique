import { Component, inject } from '@angular/core';
import { LayoutWebstore } from "../../layouts/layout-webstore/layout-webstore";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { tabletestService } from '../../services/tabletestService';
import { Tabletest } from '../../models/tabletest.model';

@Component({
  selector: 'app-create-item',
  imports: [LayoutWebstore, ReactiveFormsModule],
  templateUrl: './create-item.html',
  styleUrl: './create-item.css'
})
export class CreateItem {

  tabletestservice = inject(tabletestService);

  constructor() {
  }

  formtesttableCreate = new FormGroup({
    Name: new FormControl<string>(''),
    Value: new FormControl<number>(0)
  });

  SubmitHandler(): void {
    //console.log(this.formtesttableCreate.value as Tabletest);
    this.tabletestservice.Storetabletest(this.formtesttableCreate.value as Tabletest);
  }

}
