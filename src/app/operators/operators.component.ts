import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { concatMap, exhaustMap, filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { OperatorsService, post } from './operators.service';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  post: post;
  constructor(
    private operatorService: OperatorsService
  ) { }

  ngOnInit(): void {
    // interval(10)
    // .pipe(
    //   take(10),
    //   tap((id) => {
    //     console.log(id);
    //   }),
    //   filter(id => id > 0),
    //   exhaustMap((id: number) => {
    //     return this.operatorService.getPosts(id)
    //   }),
    // )
    // .subscribe((data) => {
    //   console.log(data);
    // })

      this.operatorService.getPosts(1)
      .subscribe((data) => {
        console.log(data.headers.keys());
        this.post = {...data.body}
        console.log(this.post);

      })
  }

}
