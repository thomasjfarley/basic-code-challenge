import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Machine} from '../models/machine';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private httpService: HttpClient) {
  }

  url = 'http://localhost:4200/assets/data/machines.json';

  getMachineData(): Observable<Machine[]> {
    return this.httpService.get<Machine[]>(this.url);
  }
}
