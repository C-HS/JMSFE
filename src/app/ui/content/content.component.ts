import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  header;
  constructor(router: Router) {
    // router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    //   )
    //   .subscribe(event => {
    //     this.header = event.url;
    //       console.log(event);
    //   });

    router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.header = router.url;
          console.log('this.router.url', router.url);
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
