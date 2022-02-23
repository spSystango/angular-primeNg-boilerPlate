import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(SidebarComponent) sidebarComponent:any;
  sidebarRef: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  toggleSideBar(){
    this.sidebarComponent.visibleSidebar = this.sidebarComponent.visibleSidebar ? false : true;
  }
  


}
