import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(SidebarComponent) sidebarComponent: any;
  sidebarRef: any;
  notificationItems: MenuItem[] = [];
  profileMenuItems: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.notificationItems = [
      {
        label: '<div><strong class="mainHead">My notification head</strong> <span class="subhead">Subheading of notification</span></div>',
        escape: false,
        icon: 'imageIcon',
      },
      {
        label: '<div><strong class="mainHead">My notification head</strong> <span class="subhead">Subheading of notification</span></div>',
        escape: false,
        icon: 'imageIcon',
      },
      {
        label: '<div><strong class="mainHead">My notification head</strong> <span class="subhead">Subheading of notification</span></div>',
        escape: false,
        icon: 'imageIcon',
      },
      {
        label: '<div><strong class="mainHead">My notification head</strong> <span class="subhead">Subheading of notification</span></div>',
        escape: false,
        icon: 'imageIcon',
      },
    ]

    this.profileMenuItems = [
      { label: 'Profile', icon: 'pi pi-fw pi-user' },
      { label: 'Setting', icon: 'pi pi-fw pi-cog' },
      { label: 'Messages', icon: 'pi pi-fw pi-envelope' },
      { label: 'Logout', icon: 'pi pi-fw pi-sign-out' },
    ]
  }

  toggleSideBar() {
    this.sidebarComponent.visibleSidebar = this.sidebarComponent.visibleSidebar ? false : true;
    console.log(this.sidebarComponent.visibleSidebar);
  }



}
