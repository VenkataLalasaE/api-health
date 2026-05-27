import { Routes } from '@angular/router';

import { MonitoringComponent }
from './monitoring/monitoring.component';

import { EndpointsComponent }
from './endpoints/endpoints.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'monitoring',
    pathMatch: 'full'
  },

  {
    path: 'monitoring',
    component: MonitoringComponent
  },

  {
    path: 'endpoints',
    component: EndpointsComponent
  }

];