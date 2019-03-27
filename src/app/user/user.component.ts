import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../core/store/root-reducer';
import { UserInformationState } from '../core/store/user-information/user-information.reducer';
import { Observable, Subject } from 'rxjs';
import { selectUserInformation } from '../core/store/user-information/user-information.selectors';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FetchUserAction } from '../core/store/user-information/user-information.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  userInformation$: Observable<UserInformationState>;
  unsubscribe$ = new Subject();
  username = '';
  DEFAULT_IMAGE_URL = 'https://steven.codes/typerjs/assets/github.png';
  TABS = [
    { name: 'repositories', tab: 'repos' },
    // { name: 'followers', tab: 'followers' },
    // { name: 'following', tab: 'following' },
  ];

  constructor(private store$: Store<ApplicationState>, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$)) // Take until this.unsubscribe$ emits a value
      .subscribe(({ username }) => (this.username = username));
    this.userInformation$ = this.store$.pipe(select(selectUserInformation));
  }

  ngOnInit() {
    this.store$.dispatch(new FetchUserAction(this.username));
  }

  ngOnDestroy() {
    this.unsubscribe$.next(); // Emit a value for this.unsubscribe. This completes the above subscription
    this.unsubscribe$.complete(); // Complete the unsubscribe subject
  }
}
