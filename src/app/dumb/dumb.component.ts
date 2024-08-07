import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent {
  @Input() data: string = '';
  @Output() dataChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this.dataChange.emit(value);
  }
}
