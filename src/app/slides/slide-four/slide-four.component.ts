import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, generate, map, share, switchMap, from, iif, of } from 'rxjs';
import { mediaQueryMatch } from 'subscribable-things';
import { DefsComponent } from '../defs/defs.component';

const FIVE_MINUTES_IN_MILLISECONDS = 300000;
const KICK_OFF_IN_MILLISECONDS = 74700000;
const STEP_SIZE_IN_MILLISECONDS = 200;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, DatePipe, DefsComponent],
    selector: 'wac-slide-four',
    standalone: true,
    styleUrls: ['./slide-four.component.scss'],
    templateUrl: './slide-four.component.html'
})
export class SlideFourComponent implements OnInit {
    public gameClock$!: Observable<number>;

    public wallClock$!: Observable<number>;

    public ngOnInit(): void {
        this.gameClock$ = from(mediaQueryMatch('(prefers-reduced-motion: reduce)')).pipe(
            switchMap((matches) =>
                iif(
                    () => matches,
                    of(0),
                    generate(
                        0,
                        (value) => value <= FIVE_MINUTES_IN_MILLISECONDS,
                        (value) => value + STEP_SIZE_IN_MILLISECONDS,
                        animationFrameScheduler
                    ).pipe(share())
                )
            )
        );

        this.wallClock$ = this.gameClock$.pipe(map((value) => value + KICK_OFF_IN_MILLISECONDS));
    }
}
