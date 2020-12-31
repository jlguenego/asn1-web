import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Group, Rule, Lexer } from '@jlguenego/lexer';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const str = '"asdf"';
const strRule = new Rule({
  name: 'string',
  pattern: /".*"/,
});

const rules = [strRule];
const tokens = new Lexer(rules).tokenize(str);
console.log('tokens: ', tokens);
