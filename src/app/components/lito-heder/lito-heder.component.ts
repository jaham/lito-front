import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-lito-heder',
  templateUrl: './lito-heder.component.html',
  styleUrls: ['./lito-heder.component.scss'],
})
export class LitoHederComponent {

  public title = "Inicio"

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data),
      startWith(this.router.routerState.root.snapshot.data)
    ).subscribe(data => {
      this.title = data['title'];
    });
  }

}
