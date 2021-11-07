import {Component, OnInit} from '@angular/core';
import {MachinesService} from '../../services/machines.service';
import {BehaviorSubject, forkJoin, Observable, of} from 'rxjs';
import {LocationService} from '../../services/location.service';
import {Snack} from '../../models/snack';
import {SnackService} from '../../services/snack.service';
import {take} from 'rxjs/operators';
import {Machine, MachineSnack} from '../../models/machine';


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  machineData = new Observable<Machine[]>();
  snackData: Snack[] = [];
  contentLoaded = new BehaviorSubject<boolean>(false);
  openPanel = 0;

  constructor(
    public machineService: MachinesService,
    public locationService: LocationService,
    public snackService: SnackService) {
  }

  ngOnInit(): void {
    forkJoin([this.machineService.getMachineData(), this.snackService.snacks()]).pipe(take(1)).subscribe(data => {
      this.machineData = of(data[0]);
      this.snackData = data[1];
      this.contentLoaded.next(true);
    });
  }

  getSnack(snackId: number): Snack | null {
    return this.snackData.find(snack => snack.id === snackId) || null;
  }

  calculateValue(inventory: MachineSnack[]): number {
    const totalsArr: number[] = [];
    this.snackData.map(snack => {
      const quantity = inventory.find(item => item.id === snack.id)?.qty || 0;
      totalsArr.push(quantity * snack.price);
    });

    return totalsArr.reduce((prev, next) => prev + next);
  }
}
