import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpParams} from "@angular/common/http";

@Injectable()
export class FlickrService {
  constructor(private http: HttpClient) { }

  public getResponse(
    flApiKey: string = "c2687e4359d351d4a8e00ff70f442976",
    userid: string = "192834185@N07"): Observable<object> {
    let request_uri: string =
      "https://www.flickr.com/services/rest/"
    return this.http.get(request_uri,
      {
        observe: "body",
        params: new HttpParams()
          .set("api_key", flApiKey)
          .set("method", "flickr.people.getPublicPhotos")
          .set("user_id", userid)
      });
  }
}
