import 'styled-components';
import { Colors, FontSizes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSize: FontSizes;
  }
}
