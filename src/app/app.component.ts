import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedDocType: any;
  multipleSelectedFile: any = [];
  fileTable: any = [];
  documentTypeList: any = [
    {},
    {
      documentType: 'image/*',
    },
    {
      documentType: 'x-world/x-vrml',
    },
  ];

  public ngOnInit() {}

  public fileUploaded(event, index) {
    this.multipleSelectedFile[index] = event;
    this.fileTable.push({
      documentName: event.files[0].name,
      documentType: this.selectedDocType['documentType'],
      file: event.files[0],
    });
  }

  public saveMultiFile() {
    console.log(this.fileTable, 'this.fileTable');
  }
}
