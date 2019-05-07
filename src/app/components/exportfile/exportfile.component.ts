import { Component, OnInit } from '@angular/core';
import { Trade, trade } from './model';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-exportfile',
  templateUrl: './exportfile.component.html',
  styleUrls: ['./exportfile.component.css']
})
export class ExportfileComponent implements OnInit {
  trade: trade[];
  constructor() {
    this.trade = Trade;
   }
   toExportFileName(excelFileName: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
  }
  exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    XLSX.writeFile(workbook,this.toExportFileName(excelFileName));
  }
   exportToExcel() {
    this.exportAsExcelFile(Trade, 'trade');
  }
  
  ngOnInit() {
  }

}
