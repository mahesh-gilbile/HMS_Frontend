import {  Component,  ElementRef,  OnInit, ViewChild, } from '@angular/core';
import jsQR from 'jsqr';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit  {


  scanActive = false;
  scanResult = null;

  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;


  constructor() { }

  ngOnInit(): void {
    // console.log(this.video);
  }

  ngAfterViewInit():void{
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video : { facingMode: "environment"}
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playinline',true);
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
    this.scanActive = true;
  }

  async scan(){
    if(this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA && this.scanActive){
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      )


      const code = jsQR(imageData.data , imageData.width , imageData.height , {
        inversionAttempts: 'dontInvert'
      })

      // console.log('code ' , code);

      if(code){
        this.stopScan();
        this.showQRCode(code.data);
      }else if(this.scanActive){
        // console.log("Hey");
        requestAnimationFrame(this.scan.bind(this));
      }

    }else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  async stopScan(){
    this.scanActive = false;
    const stream = this.videoElement.srcObject;
    stream.getTracks()[0].stop();
  }

  resetScan(){
    this.scanResult = null;
  }

  showQRCode(n){
    const data = JSON.parse(n);
    // console.log(data.gcf);
    if(data.gcf === 'URL'){
      window.open(data.message , "_black");
    }else {
      this.scanResult = data.message;
    }
  }



}
