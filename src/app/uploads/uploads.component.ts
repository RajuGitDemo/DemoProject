import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileUploadService } from 'src/app/shared/file-upload.service'

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.sass']
})
export class UploadsComponent implements OnInit {
  uploadForm: FormGroup;
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private fb: FormBuilder, private http: HttpClient, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    // this.uploadForm = this.fb.group({
    //   name: [''],
    //   emprofile: ['']
    // });
  }
  // onSelectedFile(event) {
  //   console.log(event.target.files);
  //   if (event.target.files.length > 0) {
  //     const uploadFile = event.target.files[0];
  //     this.uploadForm.get('emprofile').setValue(uploadFile);

  //   }
  // }
  // onSubmmit() {
  //   const formData = new FormData();
  //   formData.append('name', this.uploadForm.get('name').value);
  //   formData.append('emprofile', this.uploadForm.get('emprofile').value);
  //   this.fileUploadService.upload(formData).subscribe(events => this.fileresult = events,error=>this.myError=error);
  // }

  public uploadFile = (files) => {
    debugger;
    if (files.length === 0) {
      return;
    }
    console.log("call service")
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.fileUploadService.upload(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }

}
