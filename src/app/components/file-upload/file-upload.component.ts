import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }
excel(){
  // alert(event.target.id);
  var testUrl= "../assets/Sample_data1.xlsx";
  var oReq = new XMLHttpRequest();
  oReq.open("GET", testUrl, true);
  oReq.responseType = "arraybuffer";
  
  oReq.onload = function(e) {
    var arraybuffer = oReq.response;
  
    /* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i){ 
      arr[i] = String.fromCharCode(data[i]);
      //  console.log("Data"+data[i]);
    }
    var bstr = arr.join("");
    var workbook = XLSX.read(bstr, {type:"binary"});
  //console.log("Data"+bstr);
   var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name]; 
    var json = XLSX.utils.sheet_to_json(worksheet);
    // workbook.Sheets[workbook.SheetNames[0]], {header:1, raw:true}
    var jsonOut = JSON.stringify(json);
     console.log("test"+jsonOut);
  }
  oReq.send();
  }
  ngOnInit() {
    this.excel();
  }
}
