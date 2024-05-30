import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, generate, map, from, switchMap, iif, of, catchError } from 'rxjs';
import { mediaQueryMatch } from 'subscribable-things';
import { DefsComponent } from '../defs/defs.component';

const FIVE_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS = 75000000;
const STEP_SIZE_IN_MILLISECONDS = 2000;
const THIRTEEN_MINUTES_IN_MILLISECONDS = 1800000;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, DatePipe, DefsComponent],
    selector: 'wac-slide-five',
    standalone: true,
    styleUrls: ['./slide-five.component.scss'],
    templateUrl: './slide-five.component.html'
})
export class SlideFiveComponent implements OnInit {
    public wallClock$!: Observable<number>;

    public ngOnInit(): void {
        this.wallClock$ = from(mediaQueryMatch('(prefers-reduced-motion: reduce)')).pipe(
            catchError(() => of(true)),
            switchMap((matches) =>
                iif(
                    () => matches,
                    of(0),
                    generate(
                        0,
                        (value) => value <= THIRTEEN_MINUTES_IN_MILLISECONDS,
                        (value) => value + STEP_SIZE_IN_MILLISECONDS,
                        animationFrameScheduler
                    )
                )
            ),
            map((value) => value + FIVE_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS)
        );
    }
}
