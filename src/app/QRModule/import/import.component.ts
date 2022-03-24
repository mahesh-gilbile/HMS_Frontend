import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsQR from 'jsqr';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  constructor() { }

  @ViewChild('fileinput') fileinput: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  filePath = null;
  errorMessage = false;
  scanResult = null;

  canvasElement: any;
  canvasContext: any;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  uploadImage = false;
  selectImage = false;
  scanResult1 = false;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  captureImage() {
    this.fileinput.nativeElement.click();
    // console.log("Hey");
  }

  handlefiles(e) {
    // console.log(e);
    var data = e.target.files[0];
    if (data.type === 'image/jpeg' || data.type === 'image/jpg' || data.type === "image/png") {
      this.scanResult1 = false;
      this.uploadImage = true;
      this.selectImage = false;
      this.imageChangedEvent = e;
      this.errorMessage = false;
    } else {
      this.errorMessage = true;
    }
  }


  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  onSelectPhoto(){
    this.filePath = this.croppedImage
    this.uploadImage = false;
    this.selectImage = true;
  }

  scanCode(n) {
    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      // console.log(imageData);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      })
      if (code) {
        this.showQRCode(code.data);
        this.selectImage = false;
      }
    };
    img.src = n;
  }

  showQRCode(n) {
    const data = JSON.parse(n);
    this.scanResult1 = true;
    // console.log(data);
    if (data.gcf === 'URL') {
      window.open(data.message, "_black");
    } else {
      this.scanResult = data.message;
    }
  }

}
