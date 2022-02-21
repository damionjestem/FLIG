import { Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() platforms = ["instagram", "twitter", "flickr", "facebook"] 

}
