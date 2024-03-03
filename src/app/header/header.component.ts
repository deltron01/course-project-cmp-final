import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navigationClicked = new EventEmitter<string>();

  constructor(){

  }

  onNavigationItemClicked(navigationItem: string){
     this.navigationClicked.emit(navigationItem);
  }

}
