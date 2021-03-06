import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  menuName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.menuName = route.root.firstChild.snapshot.data['menuName'];
    console.log(this.menuName);
  }

  ngOnInit() {
  }

}
