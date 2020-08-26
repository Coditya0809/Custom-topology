import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('workSpace',{static:true}) workSpace:ElementRef;
  
  switchList:Array<number>=[]
  hostList:Array<number>=[]
  switchCount:number = 0
  hostCount:number = 0
  switchDragPosition:Array<{x:number,y:number}> = []
  hostDragPosition:Array<{x:number,y:number}> = []
  switchFlag:Array <boolean>=[];
  hostFlag:Array <boolean>=[];
  switchHoldUntilPaste:boolean ;
  hostHoldUntilPaste:boolean ;
  
  dragPosition = { x: 102, y: 100 };

  ngOnInit() {
    this.switchList = []
    this.hostList = []
    this.switchCount = 0
    this.hostCount = 0
    this.hostDragPosition=[{
      x:0,y:0
    }]
    this.switchDragPosition=[{
      x:0,
      y:0
    }]

    this.switchFlag[0]= false;
    this.hostFlag[0]= false;
    this.switchHoldUntilPaste  = false;
    this.hostHoldUntilPaste  = false;
    console.log('Yoo - ', ($(document).height())/($(document).height()*$(document).width()))

  }

  clone(id: string) {
    if(id == 'switch-svg'){
      this.switchHoldUntilPaste = true;

      this.switchList.push(this.switchCount++)

      let down = this.renderer.listen(document.getElementById('draw'),'mousedown',(event)=>{
        console.log('X - ',event.clientX - $("#draw").offset().left - 4*$(document).height())
        console.log('Y - ',event.clientY - $("#draw").offset().top - 4*$(document).height())
  

        this.switchDragPosition[this.switchList.length - 1] = {
          x:event.clientX - $("#draw").offset().left ,
          y:event.clientY - $("#draw").offset().top 
        }
        
        this.switchFlag[this.switchList.length - 1] = true;
      })
  
      this.renderer.listen(document.getElementById('draw'),'mouseup',(event)=>{
        down();
        this.switchHoldUntilPaste = false;
        this.switchFlag[this.switchList.length] = false;
        this.switchDragPosition[this.switchList.length]={
          x:0,
          y:0
        }
      })
    }
    if(id == 'host-svg'){
      this.hostHoldUntilPaste = true;
      this.hostList.push(this.hostCount++)

      let down = this.renderer.listen(document.getElementById('draw'),'mousedown',(event)=>{
        console.log('X - ',event.clientX - $("#draw").offset().left)
        console.log('Y - ',event.clientY - $("#draw").offset().top)
  

        this.hostDragPosition[this.hostList.length - 1] = {
          x:event.clientX - $("#draw").offset().left,
          y:event.clientY - $("#draw").offset().top
        }
        
        this.hostFlag[this.hostList.length - 1] = true;
      })
  
      this.renderer.listen(document.getElementById('draw'),'mouseup',(event)=>{
        down();
        this.hostHoldUntilPaste = false;
        this.hostFlag[this.hostList.length] = false;
        this.hostDragPosition[this.hostList.length]={
          x:0,
          y:0
        }
      })

    }

    console.log(this.switchList)


    
    

  }


  
  constructor(private renderer:Renderer2){

  }

  ngAfterViewInit() {}

}
