import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit {

  constructor(public snackSvc: SnackService) { }

  ngOnInit(): void {
  }

}
