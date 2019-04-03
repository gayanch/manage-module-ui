import {RouterModule} from '@angular/router';
import {BlacklistMainComponent} from './blacklist-main/blacklist-main.component';

const routes =[{
  path : '',
  component : BlacklistMainComponent
}];

export const BlacklistRoutes = RouterModule.forChild(routes);
