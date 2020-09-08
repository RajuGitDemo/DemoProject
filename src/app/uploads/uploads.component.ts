import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileUploadService} from 'src/app/shared/file-upload.service'

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.sass']
})
export class UploadsComponent implements OnInit {
  uploadForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadForm=this.fb.group({
      name:[''],
      emprofile:['']     
    });
  }
  onSelectedFile(event){
    console.log(event.target.files);
  }
  onSubmmit(){
    const formData=new FormData();
  }

}
 