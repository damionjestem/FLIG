import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  resultText: string = "";
  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
  }

  showResults() {
    this.flickrService.getResponse().subscribe(
      x => this.resultText = x.toString(),
      err => console.log("something is not yes: " + err),
      () => console.log("wykonało się"));
  }
}
