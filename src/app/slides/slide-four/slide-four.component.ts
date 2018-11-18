import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, generate } from 'rxjs';
import { map, share } from 'rxjs/operators';

const FIVE_MINUTES_IN_MILLISECONDS = 300000;
const KICK_OFF_IN_MILLISECONDS = 74700000;
const STEP_SIZE_IN_MILLISECONDS = 200;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: [ './slide-four.component.css' ],
    templateUrl: './slide-four.component.html'
})
export class SlideFourComponent implements OnInit {

    public gameClock$!: Observable<number>;

    public wallClock$!: Observable<number>;

    public ngOnInit (): void {
        this.gameClock$ = generate(
            0,
            (value) => (value <= FIVE_MINUTES_IN_MILLISECONDS),
            (value) => (value + STEP_SIZE_IN_MILLISECONDS),
            animationFrameScheduler
        )
            .pipe(
                share()
            );

        this.wallClock$ = this.gameClock$
            .pipe(
                map((value) => (value + KICK_OFF_IN_MILLISECONDS))
            );
    }

}
