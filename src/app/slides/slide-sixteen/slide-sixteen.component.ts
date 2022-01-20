import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, distinctUntilChanged, generate, map, share } from 'rxjs';

const EIGHTEEN_MINUTES_IN_MILLISECONDS = 1080000;
const FIFTEEN_MINUTES_IN_MILLISECONDS = 900000;
const FOURTY_FIVE_MINUTES_IN_MILLISECONDS = 2700000;
const NINETEEN_MINUTES_IN_MILLISECONDS = 1140000;
const STEP_SIZE_IN_MILLISECONDS = 200;
const THIRTY_EIGHT_MINUTES_IN_MILLISECONDS = 2280000;
const THIRTY_TWO_MINUTES_IN_MILLISECONDS = 1920000;
const TWENTY_FIVE_MINUTES_IN_MILLISECONDS = 1500000;
const TWENTY_MINUTES_IN_MILLISECONDS = 1200000;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slide-sixteen.component.css'],
    templateUrl: './slide-sixteen.component.html'
})
export class SlideSixteenComponent implements OnInit {
    public disneylandAttempts$!: Observable<number>;

    public gameClock$!: Observable<number>;

    public legolandAttempts$!: Observable<number>;

    public legolandScore$!: Observable<number>;

    public ngOnInit(): void {
        this.gameClock$ = generate(
            FIFTEEN_MINUTES_IN_MILLISECONDS,
            (value) => value <= FOURTY_FIVE_MINUTES_IN_MILLISECONDS,
            (value) => value + STEP_SIZE_IN_MILLISECONDS,
            animationFrameScheduler
        ).pipe(share());

        this.disneylandAttempts$ = this.gameClock$.pipe(
            map((value) =>
                value >= THIRTY_EIGHT_MINUTES_IN_MILLISECONDS
                    ? 4
                    : value >= THIRTY_TWO_MINUTES_IN_MILLISECONDS
                    ? 3
                    : value >= NINETEEN_MINUTES_IN_MILLISECONDS
                    ? 2
                    : 1
            ),
            distinctUntilChanged()
        );

        this.legolandAttempts$ = this.gameClock$.pipe(
            map((value) =>
                value >= TWENTY_FIVE_MINUTES_IN_MILLISECONDS
                    ? 9
                    : value >= TWENTY_MINUTES_IN_MILLISECONDS
                    ? 8
                    : value >= EIGHTEEN_MINUTES_IN_MILLISECONDS
                    ? 7
                    : 6
            ),
            distinctUntilChanged()
        );

        this.legolandScore$ = this.gameClock$.pipe(
            map((value) => (value >= TWENTY_FIVE_MINUTES_IN_MILLISECONDS ? 2 : value >= TWENTY_MINUTES_IN_MILLISECONDS ? 1 : 0)),
            distinctUntilChanged()
        );
    }
}
