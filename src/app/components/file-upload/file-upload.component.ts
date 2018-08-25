import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  constructor() {}

  excel(event){
    let input: any = document.getElementById("files")
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
    let jsonOut = JSON.stringify(json);
    console.log("test"+jsonOut);
    }
  }
  exec(event){
    let input: any = document.getElementById("files1")
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
    let jsonOut = JSON.stringify(json);
    console.log("test"+jsonOut);
    }
  }
  ngOnInit() {}
}
