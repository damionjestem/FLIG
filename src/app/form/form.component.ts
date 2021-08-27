import { Component, Input, OnInit } from '@angular/core';
import { ItemToUpload } from '../itemtoupload';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  pic: ItemToUpload = {
    username: "",
    picUrl: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
