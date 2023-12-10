import {InjectionToken} from "@angular/core";

const errorMessagesMap: Record<string, string> = {
  required: 'You must fill this field',
  minlength: `Your username is too short`,
  maxlength: 'Your username is too long',
  pattern: `Value doesn't much pattern`
};

export const appConstants = {
  errorMessagesMap
}

export type AppConstants = typeof appConstants;

export const APP_CONSTANTS = new InjectionToken<AppConstants>('app.constants');
