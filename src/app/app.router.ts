import { Routes } from '@angular/router';
import { Indexroutes } from './index/index.router';
import { HomeRoutes } from './home/home.router';
import { NoPageRoute } from './no-page/no-page.router';

import { NgModule } from "@angular/core";
// import { BuRoutes } from './bu/bu.router';


export const routes: Routes = [...HomeRoutes, ...Indexroutes, ...NoPageRoute ]