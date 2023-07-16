import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText:string = "";
  @Output() onButtonClick = new EventEmitter<void>();

  @Input() buttonType: 'action-btn' | 'pagination-btn' = 'action-btn';

  connected$: BehaviorSubject<boolean>;

  constructor(
    private connectionService: ConnectionService
  ) {
    this.connected$ = this.connectionService.connected$;
  }

  
  handleButtonClick(){
    this.onButtonClick.emit();
  }
}
