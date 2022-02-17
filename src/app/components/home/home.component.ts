import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  users = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goUser(user: string) {
    this.router.navigate([user]);
  }
}
