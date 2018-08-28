import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor(private http: HttpClient, private router: Router) { }
  
  post(url, header: any, data: any) {

    let headers: HttpHeaders = new HttpHeaders()
    headers = headers.append('Content-Type', 'application/json')

    if(header) {
        for (let key in header) {
            let type = typeof(header[key])
            if(type !== 'string') {
                headers = headers.append(key, JSON.stringify(header[key]))
            } else {
                headers = headers.append(key, header[key])
            }
        }
    }

    let httpOptions = {
        headers: headers
    }
    return this.http.post < any > ( url, JSON.stringify(data), httpOptions)
}

  fileData(jsonData : any) : any {
    let headers: HttpHeaders = new HttpHeaders()
    headers = headers.append('Content-Type', 'application/json')
    let httpOptions = {
        headers: headers
    }
    alert(JSON.stringify(jsonData))
    return this.http.post< any >('/url/here', JSON.stringify(jsonData), httpOptions)
  }
}
