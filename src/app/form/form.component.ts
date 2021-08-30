import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataProvided } from '../dataprovided';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private flickrService: FlickrService,
  ) { }

  uploadDetails = this.flickrService;
  pic: DataProvided = {
    username: "",
    picUrl: "",
  };

  submitRequest(details: DataProvided) {
    this.flickrService.setUploadDetails(details.username, details.picUrl);
    console.log("request details has been set");
  }

  ngOnInit(): void {
  }

}
