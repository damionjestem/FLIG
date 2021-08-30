import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";

import { DataProvided } from './dataprovided';

@Injectable()
export class FlickrService {
  uploadDetails: DataProvided = {
    username: "",
    picUrl: "",
  };
  userId: string = "";
  api_key: string = "c2687e4359d351d4a8e00ff70f442976";
  method: string = "flickr.people.getPublicPhotos";
  endpoint: string = "https://www.flickr.com/services/rest/";

  constructor(private http: HttpClient) { }
  /**
   * Uses Flickr's API function flickr.people.findByUsername to get ID of user
   * @param username - username on Flickr
   * @returns Users ID
   */
  getUserId(username: string): string{
    let id = "";
    this.http.get<string>(this.endpoint,
      {
        observe: "body",
        params: new HttpParams()
          .set("api_key", this.api_key)
          .set("method", "flickr.people.findByUsername")
          .set("username", username)
      }).pipe(
        map((response: string) => {
          id = response;
          console.log(username + "'s ID: " + id);
      }));
    return id;
  }

  getUploadDetails() {
    return this.uploadDetails;
  }

  setUploadDetails(uName: string, picUrl: string) {
    this.uploadDetails.username = uName;
    this.uploadDetails.picUrl = picUrl;
  }

  resetUploadDetails() {
    this.uploadDetails.username = "";
    this.uploadDetails.picUrl = "";
    return this.uploadDetails;
  }

  public getResponse( uName: string ): Observable<object> {
    
    return this.http.get(this.endpoint,
      {
        observe: "body",
        params: new HttpParams()
          .set("api_key", this.api_key)
          .set("method", "flickr.people.getPublicPhotos")
          .set("user_id", this.getUserId(uName))
      });
  }
}
