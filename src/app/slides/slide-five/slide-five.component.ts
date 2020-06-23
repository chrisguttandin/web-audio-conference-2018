import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, generate } from 'rxjs';
import { map } from 'rxjs/operators';

const FIVE_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS = 75000000;
const STEP_SIZE_IN_MILLISECONDS = 2000;
const THIRTEEN_MINUTES_IN_MILLISECONDS = 1800000;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slide-five.component.css'],
    templateUrl: './slide-five.component.html'
})
export class SlideFiveComponent implements OnInit {
    public wallClock$!: Observable<number>;

    public ngOnInit(): void {
        this.wallClock$ = generate(
            0,
            (value) => value <= THIRTEEN_MINUTES_IN_MILLISECONDS,
            (value) => value + STEP_SIZE_IN_MILLISECONDS,
            animationFrameScheduler
        ).pipe(map((value) => value + FIVE_MINUTES_AFTER_KICK_OFF_IN_MILLISECONDS));
    }
}
