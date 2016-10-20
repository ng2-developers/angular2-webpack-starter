import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AuthService } from '../common/service/auth.service';

import { AppState } from '../app.service';
import { NavBarComponent } from './navbar.component';


