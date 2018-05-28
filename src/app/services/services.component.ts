import { Component, OnInit } from '@angular/core';
import { Service } from '../service'
import { OurServicesService } from '../our-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  selectedService: Service;

  services: Service[];

  constructor(private ourService: OurServicesService) { }

  ngOnInit() {
    this.getServices();
  }

  onSelect(services: Service): void {
    this.selectedService = services;
  }

  getServices(): void {
    this.ourService.getServices()
      .subscribe(services => this.services = services);
  }
}
