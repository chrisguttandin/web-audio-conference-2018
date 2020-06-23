import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-defs',
    styleUrls: ['./defs.component.css'],
    templateUrl: './defs.component.html'
})
export class DefsComponent {}
