import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewbasket',
  templateUrl: './viewbasket.component.html',
  styleUrls: ['./viewbasket.component.css']
})
export class ViewbasketComponent {
  Score = "1";
  inputValue = 0; 

  @Input() numVal : number = 0;

  receiveAdd(){
    this.numVal++
    this.Score = this.numVal.toString();
  }

  receiveSubtract(){
    if (this.numVal > 1 ) {
      this.numVal--
      this.Score = this.numVal.toString();
      
    }
  }
}
