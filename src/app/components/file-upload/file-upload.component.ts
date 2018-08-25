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
    var input: any = document.getElementById("files")
    var files = input.files;
    var reader = new FileReader();
    var fileData = new Blob([files[0]]);
    reader.readAsArrayBuffer(fileData);
    reader.onload = function() {
      var arrayBuffer = reader.result
      var data = new Uint8Array(arrayBuffer);
      var arr = new Array();
    for(var i = 0; i != data.length; ++i){ 
      arr[i] = String.fromCharCode(data[i]);
    }
    var bstr = arr.join("");
    var workbook = XLSX.read(bstr, {type:"binary"});
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name]; 
    var json = XLSX.utils.sheet_to_json(worksheet);
    var jsonOut = JSON.stringify(json);
    console.log("test"+jsonOut);
    }
  }
  ngOnInit() {}
}
