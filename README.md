<h1 align="center">
Ng-Element-Plus
</h1>

<div align="center">

Ng-Element-UI extension component.

</div>

## Components completion status

- [x] watermark

## Environment Support

- Angular `^11.0.0` [![npm package](https://img.shields.io/npm/v/ng-element-plus.svg?style=flat-square)](https://www.npmjs.com/package/ng-element-plus)

## Installation

```bash
npm install ng-element-plus
```

## Usage

Import the component modules you want to use into your `app.module.ts`

```typescript
import { NpWatermarkModule } from 'ng-element-plus/watermark';

@NgModule({
  imports: [ NpWatermarkModule ]
})
export class AppModule {
}
```


## Development

```bash
$ git clone https://github.com/ng-element/ng-element-plus.git
$ cd ng-element-plus
$ npm install
$ ng serve
```

## License

MIT