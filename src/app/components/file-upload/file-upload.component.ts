import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import * as XLSX from 'xlsx'
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  constructor(private FileUploadService: FileUploadService) {}

  excel(event) {
    let jsonData = []
    let ids = 'samplefile'
    for (let i = 0; i < ids.length; i++) {
      let input: any = document.getElementById(ids)
      let files = input.files;
      let reader = new FileReader();
      let fileData = new Blob([files[0]]);
      reader.readAsArrayBuffer(fileData);
      reader.onload = function () {
        let arrayBuffer: any = reader.result
        let data = new Uint8Array(arrayBuffer);
        let arr = [];

        for (let i = 0; i != data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        let bstr = arr.join("");
        let workbook = XLSX.read(bstr, {
          type: "binary"
        });
        let first_sheet_name = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[first_sheet_name];
        let json = XLSX.utils.sheet_to_json(worksheet);
        let jsonOut = JSON.stringify(json);
        jsonData.push(jsonOut)
      }
    }

    setTimeout(() => {
      this.FileUploadService.fileData(jsonData).subscribe(
        alert(jsonData)
      )
    }, 5)


  }
  ngOnInit() {}
}
