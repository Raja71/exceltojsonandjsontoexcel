import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component'
import { ExportfileComponent } from './components/exportfile/exportfile.component';
const routes: Routes = [

{
  path      : 'files', component: FileUploadComponent,
 
},
{  path      : 'export', component : ExportfileComponent,
},
{
  path      : '**',
  redirectTo: 'files'
}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
