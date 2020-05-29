import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeoffEnabled=true;
  takeOff(){
      let result=window.confirm('Are you sure the shutle is ready for takeoff?');
      if(result){
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
      this.takeoffEnabled=false;
      };

  }
  
  landingOff(){
    let result = window.confirm("The shuttle is landing. Landing gear engaged");
    if(result){
    this.message = 'The shuttle has landed';
    this.color = 'green';
    this.height = 0;
    this.takeoffEnabled=true;
    }
  };  
  abortMission(){
    let result = window.confirm("Really want to abort the mission. ");
    if(result){
      this.message='Mission aborted.';
      this.color='red';
      this.height=0;
      this.takeoffEnabled=true;
    }
  };

  moveUp(rocketImage){
   let movement = parseInt(rocketImage.style.bottom)+10+'px';
   rocketImage.style.bottom=movement;
   this.height=this.height+10000;
  
   
  };

  moveDown(rocketImage){
    let movement = parseInt(rocketImage.style.bottom)-10+'px';
    rocketImage.style.bottom=movement;
    this.height=this.height-10000;
  
   };
   moveRight(rocketImage){
    let movement = parseInt(rocketImage.style.left)+10+'px';
    rocketImage.style.left=movement;
    this.height=this.height+10000;
    
   };
  
   moveLeft(rocketImage){
    let movement = parseInt(rocketImage.style.left)-10+'px';
    rocketImage.style.left=movement;
    this.height=this.height-10000;
    
   };

}
