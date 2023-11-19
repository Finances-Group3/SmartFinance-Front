import { Component } from '@angular/core';
import {BanksService} from "../../services/banks.service";

@Component({
  selector: 'app-banks-info',
  templateUrl: './banks-info.component.html',
  styleUrls: ['./banks-info.component.css']
})
export class BanksInfoComponent {

  constructor(
    private banksService: BanksService
  ) {}

  banks: any = [];

  ngOnInit() {
    this.banksService.getAll().subscribe(data => {
      this.banks = data;
    });
  }

}
