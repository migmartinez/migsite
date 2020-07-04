import { Component, OnInit } from '@angular/core';
import { AuthorizedSideNavService } from '../services/authorized-side-nav.service';

@Component({
  selector: 'app-side-nav-toggle',
  templateUrl: './side-nav-toggle.component.html',
  styleUrls: ['./side-nav-toggle.component.css']
})
export class SideNavToggleComponent implements OnInit {

  constructor(public sideNavService: AuthorizedSideNavService) { }

  ngOnInit(){
  }

}
