import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public visibleSidebar: boolean = true;
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-pw pi-server',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
          { label: 'List', icon: 'pi pi-fw pi-user' },
          { label: 'Add', icon: 'pi pi-fw pi-plus' }
        ]
      },
      
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
      }
    ];
  }

}
