import {InjectionToken} from '@angular/core';

import {ErrorMaps} from './form-error.constants';
import {PATTERN_CONSTANTS} from './pattern.constants';

export const CONSTANTS = {
  PATTERN_CONSTANTS,
  ErrorMaps
}

export type AppConstantsType = typeof CONSTANTS;

export const APP_CONSTANTS = new InjectionToken<AppConstantsType>('app.constants');
