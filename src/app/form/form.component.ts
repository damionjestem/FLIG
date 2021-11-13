import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataProvided } from '../dataprovided';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {
  flickrForm: FormGroup;
  uploadDetails = this.flickrService;
  pic: DataProvided = {
    username: "",
    picUrl: "",
  };

  constructor(private flickrService: FlickrService) {
    this.flickrForm = new FormGroup({
      username: new FormControl(),
      picUrl: new FormControl(),
    })
  }
  
  getUserName() {
    return this.flickrForm.get('username');
  }

  getPictureUrl() {
    return this.flickrForm.get('picUrl');
  }

  setUserName(username: any) {
    this.pic["username"] = username;
  }

  setPictureUrl(url: any) {
    this.pic["picUrl"] = url;
  }

  onSubmit(form: FormGroup) {
    this.setUserName(form.get('username'));
    this.setPictureUrl(form.get('picUrl'));
    this.submitRequest(this.pic);
  }

  submitRequest(details: DataProvided) {
    this.flickrService.setUploadDetails(details.username, details.picUrl);
    console.log("request details has been set");
  }

  ngOnInit() {
    
  }
}