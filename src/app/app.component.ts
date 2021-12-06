import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selectedFile: any = [];

  public ngOnInit() {}

  public save() {
    console.log(this.selectedFile, 'this.selectedFile')
  }

  public myUploader(event) {
    this.selectedFile = event;
  }
}
