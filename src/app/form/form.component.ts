import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataProvided } from '../dataprovided';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  flickrForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private flickrService: FlickrService,
  ) {
    this.flickrForm = this.formBuilder.group({
      username: [''],
      picUrl: [''],
    })
  }
  
  get userName() {
    return this.flickrForm.get('username');
  }

  get pictureUrl() {
    return this.flickrForm.get('picUrl');
  }

  uploadDetails = this.flickrService;
  pic: DataProvided = {
    username: this.userName?.value,
    picUrl: this.pictureUrl?.value,
  };

  onSubmit() {
    this.submitRequest(this.pic);
  }

  submitRequest(details: DataProvided) {
    this.flickrService.setUploadDetails(details.username, details.picUrl);
    console.log("request details has been set");
  }

  ngOnInit() {
    this.flickrForm = new FormGroup({
    uName: new FormControl(),
    pUrl: new FormControl(),
  });
  }

}
