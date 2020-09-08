import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  apiUrl: 'https://api.github.com/users/hadley/orgs';
  myApiUri: "https://localhost:44365/Employee/upload"

  constructor(private http: HttpClient) { }

  upload(formData) {
    //return this.http.post('${this.apiUrl}', formData,{reportProgress:true,observe:'events'}).pipe(catchError(this.handleError))
   return this.http.post('https://localhost:44365/Employee/upload', formData, {reportProgress: true, observe: 'events'}).pipe(catchError(this.handleError))

  }

  

  handleError(error: HttpErrorResponse) {
    console.log("Error------------lalalalalalalala");
    return throwError(error);
  }
}
