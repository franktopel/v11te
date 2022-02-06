import css from './foo-bar.shadow.css?inline';

export class FooBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({     mode: 'open',
    }).innerHTML = `<p>&lt;foo-bar /&gt; alive and kicking!</p><style>${css}</style>`;
    console.log('component <foo-bar /> working');
  }
}

customElements.define('foo-bar', FooBar);
