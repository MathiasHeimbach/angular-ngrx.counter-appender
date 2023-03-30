import { createReducer, on } from '@ngrx/store';
import { append, remove, reset, text } from './appender.actions';

export const initialState = '';

export const appenderReducer = createReducer(
  initialState,
  on(append, (state) => state.concat('s')),
  on(remove, (state) => state.trimEnd()),
  on(reset, (state) => ''),
  on(text, (state) => state.concat('text text text')),
);

