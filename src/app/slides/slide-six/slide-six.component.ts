import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, generate } from 'rxjs';
import { distinctUntilChanged, map, share } from 'rxjs/operators';

const FIFTEEN_MINUTES_IN_MILLISECONDS = 900000;
const FIVE_MINUTES_IN_MILLISECONDS = 300000;
const THIRTEEN_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS = 76500000;
const STEP_SIZE_IN_MILLISECONDS = 200;
const TEN_MINUTES_IN_MILLISECONDS = 300000;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slide-six.component.css'],
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent implements OnInit {
    public disneylandScore$!: Observable<number>;

    public gameClock$!: Observable<number>;

    public wallClock$!: Observable<number>;

    public ngOnInit(): void {
        this.gameClock$ = generate(
            FIVE_MINUTES_IN_MILLISECONDS,
            (value) => value <= FIFTEEN_MINUTES_IN_MILLISECONDS,
            (value) => value + STEP_SIZE_IN_MILLISECONDS,
            animationFrameScheduler
        ).pipe(share());

        this.disneylandScore$ = this.gameClock$.pipe(
            map((value) => (value >= TEN_MINUTES_IN_MILLISECONDS ? 1 : 0)),
            distinctUntilChanged()
        );

        this.wallClock$ = this.gameClock$.pipe(map((value) => value + THIRTEEN_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS));
    }
}
