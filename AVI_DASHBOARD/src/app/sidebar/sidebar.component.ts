import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public cmnSrv: CommonService) {  }
  sidebarItems = [

    {label: 'Jenkins Builds', icon:'', subItem:[
      {link:'/', label: 'Build 1', icon:''},
      {link: '/t2', label: 'Build 2', icon: ''}
    ]}
  ];
}
