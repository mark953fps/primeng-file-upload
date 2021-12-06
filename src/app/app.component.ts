import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedFile: any;
  isSave: boolean = false;

  public ngOnInit() {}

  public save() {
    this.isSave = true;
    console.log(this.selectedFile, 'this.selectedFile')
  }

  public myUploader(event) {
    this.isSave = false;
    this.selectedFile = event;
  }
}
