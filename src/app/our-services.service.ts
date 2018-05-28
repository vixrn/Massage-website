import { Injectable } from '@angular/core';

import {Service } from './service';
import { SERVICES } from './mock-services';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OurServicesService {

  constructor() { }
  
  getServices(): Observable<Service[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(SERVICES);
  }
}
