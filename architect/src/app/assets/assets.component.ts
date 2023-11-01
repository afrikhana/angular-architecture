import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-assets',
  template: `
    <p>
      assets works!
    </p>
  `,
  styleUrls: ['./assets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsComponent {

}
