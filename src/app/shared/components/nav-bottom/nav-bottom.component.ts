import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterList } from './../../../router';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'footer-nav'
  }
})

export class NavBottomComponent implements OnInit {
  menuList: any[] = [];
  leftLink: any = {
    link: null,
    name: ''
  };
  rightLink: any = {
    link: null,
    name: ''
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const menuList = [];
    for (const submenu of RouterList) {
      for (const menu of submenu.menuList) {
        menuList.push(menu);
      }
    }
    this.menuList = menuList;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let href = window.location.href;
        href = href.slice(href.indexOf('#') + 2);
        const menuIndex = this.menuList.findIndex(item => item.link === href);
        if (menuIndex > -1) {
          if (menuIndex === 0) {
            this.leftLink = { link: null, name: '' };
            this.rightLink = this.menuList[menuIndex + 1];
          } else if (menuIndex === this.menuList.length - 1) {
            this.leftLink = this.menuList[menuIndex - 1];
            this.rightLink = { link: null, name: '' };
          } else {
            this.leftLink = this.menuList[menuIndex - 1];
            this.rightLink = this.menuList[menuIndex + 1];
          }
        } else {
          this.leftLink = { link: null, name: '' };
          this.rightLink = { link: null, name: '' };
        }
      }
    });
  }
}
