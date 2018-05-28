import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css'],
})
export class ModelFormComponent implements OnInit {

  myform: FormGroup; 

  ngOnInit() {
    this.myform = new FormGroup({
        name: new FormGroup({ 
          firstName: new FormControl('', Validators.required)
        }),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]),
        subject: new FormControl(),
        department: new FormControl(),
        message: new FormControl()
    });
  }

}
