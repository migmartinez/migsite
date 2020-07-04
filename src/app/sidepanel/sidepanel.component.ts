import { Component, OnInit } from '@angular/core';
import { AuthorizedSideNavService } from '../services/authorized-side-nav.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  constructor( public sideNavService: AuthorizedSideNavService) { }

  ngOnInit() {
  }

}
