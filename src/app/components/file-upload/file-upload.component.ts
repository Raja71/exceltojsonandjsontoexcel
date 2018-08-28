import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router'
import { FileUploadService } from '../../services/file-upload.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  constructor(private FileUploadService: FileUploadService,
    private router: Router,
    private routers: ActivatedRoute) {}
    
  excel(event) {
    let jsonOut;
    let jsonData = []
    let ids=['samplefile','globalmarket'];
    for(let i = 0; i < ids.length; i++) {
    let input: any = document.getElementById(ids[i])
    let files = input.files;
    let reader = new FileReader();
    let fileData = new Blob([files[0]]);
    reader.readAsArrayBuffer(fileData);
    reader.onload = function() {
      let arrayBuffer = reader.result
      let data = new Uint8Array(arrayBuffer);
      let arr = [];
      
    for(let i = 0; i != data.length; ++i){ 
      arr[i] = String.fromCharCode(data[i]);
    }
    let bstr = arr.join("");
    let workbook = XLSX.read(bstr, {type:"binary"});
    let first_sheet_name = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[first_sheet_name]; 
    let json = XLSX.utils.sheet_to_json(worksheet);
    jsonOut = JSON.stringify(json);
    jsonData.push(jsonOut)
    // console.log("json"+jsonOut);
    } 
  }
let err = false;  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(err) {
        reject(err)
      } else {
      this.FileUploadService.fileData(jsonData).subscribe(
        //     // data => {
        //     //   if(data) {
        //     //     console.log('successsssssssssss!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        //     //   }
        //     // }
            alert(jsonData)
          )
      console.log("Async Work Complete");
      resolve();
        }
    },3);
  });
}
  ngOnInit() {}
  
}

 // setTimeout(() => {
  //   this.FileUploadService.fileData(jsonData).subscribe(
  //     // data => {
  //     //   if(data) {
  //     //     console.log('successsssssssssss!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  //     //   }
  //     // }
  //     alert(jsonData)
  //   )
  // console.log("json"+jsonData);
  // },3)