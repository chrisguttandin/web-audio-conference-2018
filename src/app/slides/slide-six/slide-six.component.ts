import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
    Observable,
    animationFrameScheduler,
    distinctUntilChanged,
    generate,
    map,
    share,
    from,
    switchMap,
    iif,
    of,
    catchError
} from 'rxjs';
import { mediaQueryMatch } from 'subscribable-things';
import { DefsComponent } from '../defs/defs.component';

const FIFTEEN_MINUTES_IN_MILLISECONDS = 900000;
const FIVE_MINUTES_IN_MILLISECONDS = 300000;
const THIRTEEN_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS = 76500000;
const STEP_SIZE_IN_MILLISECONDS = 200;
const TEN_MINUTES_IN_MILLISECONDS = 300000;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, DatePipe, DefsComponent],
    selector: 'wac-slide-six',
    standalone: true,
    styleUrls: ['./slide-six.component.scss'],
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent implements OnInit {
    public disneylandScore$!: Observable<number>;

    public gameClock$!: Observable<number>;

    public wallClock$!: Observable<number>;

    public ngOnInit(): void {
        this.gameClock$ = from(mediaQueryMatch('(prefers-reduced-motion: reduce)')).pipe(
            catchError(() => of(true)),
            switchMap((matches) =>
                iif(
                    () => matches,
                    of(FIVE_MINUTES_IN_MILLISECONDS),
                    generate(
                        FIVE_MINUTES_IN_MILLISECONDS,
                        (value) => value <= FIFTEEN_MINUTES_IN_MILLISECONDS,
                        (value) => value + STEP_SIZE_IN_MILLISECONDS,
                        animationFrameScheduler
                    ).pipe(share())
                )
            )
        );

        this.disneylandScore$ = this.gameClock$.pipe(
            map((value) => (value >= TEN_MINUTES_IN_MILLISECONDS ? 1 : 0)),
            distinctUntilChanged()
        );

        this.wallClock$ = this.gameClock$.pipe(map((value) => value + THIRTEEN_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS));
    }
}
