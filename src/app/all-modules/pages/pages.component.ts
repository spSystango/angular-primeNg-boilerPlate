import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public isSidebarCollapsed : boolean = false;
  message = 'this is my message';
  constructor() { }

  ngOnInit(): void {
  }

}
