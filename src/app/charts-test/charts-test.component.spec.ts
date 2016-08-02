/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChartsTestComponent } from './charts-test.component';

describe('Component: ChartsTest', () => {
  it('should create an instance', () => {
    let component = new ChartsTestComponent();
    expect(component).toBeTruthy();
  });
});
