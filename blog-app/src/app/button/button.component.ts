import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText:string = "";
  @Output() onButtonClick = new EventEmitter<void>();

 
  handleButtonClick(){
    this.onButtonClick.emit();
  }
}
