import { Routes } from '@angular/router';

import { OverviewComponent } from 'app/overview/components/overview/overview.component';
import { ClientsComponent } from 'app/clients/components/clients/clients.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent,
        children: [{
            path: 'overview',
            loadChildren: () => import('../../overview/overview.module').then(m => m.OverviewModule)
        }],
    },
    {
        path: 'clients',
        component: ClientsComponent,
        children: [{
            path: 'clients',
            loadChildren: () => import('../../clients/clients.module').then(m => m.ClientsModule)
        }],
    },
    {
        path: 'delears',
        component: ClientsComponent,
        children: [{
            path: 'delears',
            loadChildren: () => import('../../clients/clients.module').then(m => m.ClientsModule)
        }],
    },
];
