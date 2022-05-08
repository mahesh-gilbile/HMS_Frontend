
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsQR from 'jsqr';
import { SharedService } from 'src/app/SharedModule/Service/shared.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-qrscanner',
  templateUrl: './student-qrscanner.component.html',
  styleUrls: ['./student-qrscanner.component.css']
})
export class StudentQRScannerComponent implements OnInit , OnDestroy {

  constructor(
    private router: Router,
    private studenService: StudentService,
    private sharedService: SharedService
  ) { }

  public getScreenWidth:any;
  scanActive = true;
  scanResult = null;
  errorMessage = null;
  messResponseStatus = false;
  gateResponseStatus = false;
  messResponseData = {
    MessStaffName : '',
    Type : '',
    Time : '',
    Date : '',
  };
  gateResponseData = {
    SecurityGuardName : '',
    Status : '',
    Time : '',
    Date : ''
  }

  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  ngOnInit(): void {
    this.startScan()
    this.onWindowResize()
  }



  @HostListener('window:resize' , ['$event'])
  onWindowResize(){
    this.getScreenWidth = window.innerWidth;
    this.setResponsive(this.getScreenWidth);
  }

  setResponsive(n){
    if(n >= 480){
      this.router.navigate(['./']);
    }
  }

  ngAfterViewInit():void{
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan(){
    this.messResponseStatus = false;
    this.gateResponseStatus = false;
    this.errorMessage = null;
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
    this.sharedService.visibleSpinner(false);
  }

  resetScan(){
    this.scanResult = null;
  }

  showQRCode(n){
    this.sharedService.visibleSpinner(true);
    const data = JSON.parse(n);
    if(data.title === 'Hostel Management System'){
      if(data.For === 'Mess' ){
        // console.log(data);
        this.studenService.scanQRForMess(data)
        .subscribe(data => {
          this.displayMessMessge(data)
        },error => {
          this.errorMessage = error.error;
          this.stopScan();
        })
      }else if(data.For === 'Gate Entry'){
        this.studenService.scanQRForGate(data)
        .subscribe(data => {
          // console.log(data);
          this.displayGateMessage(data);
        }, error => {
          // console.log(error);
          this.errorMessage = error.error;
          this.stopScan();
        })
      }
    }else{
      this.errorMessage = "QR Code is not Valid";
      this.stopScan();
    }
  }

  ngOnDestroy(): void {
    this.scanActive = false;
    const stream = this.videoElement.srcObject;
    stream.getTracks()[0].stop();
  }

  displayMessMessge(data){
    this.stopScan();
    this.messResponseStatus = true
    this.messResponseData.MessStaffName = data.MessStaffName;
    this.messResponseData.Type = data.Type;
    this.messResponseData.Date = data.Date;
    this.messResponseData.Time = data.Time;
    this.sharedService.visibleSpinner(false);
  }

  displayGateMessage(data){
    this.stopScan();
    this.gateResponseStatus = true;
    this.gateResponseData.SecurityGuardName = data.SecurityGuardName.FirstName + " " + data.SecurityGuardName.MiddleName + " " + data.SecurityGuardName.LastName;
    this.gateResponseData.Date = data.QR_Info.Date;
    this.gateResponseData.Status = data.QR_Info.Status;
    this.gateResponseData.Time = data.QR_Info.Time; 
    this.sharedService.visibleSpinner(false);
  }


}
