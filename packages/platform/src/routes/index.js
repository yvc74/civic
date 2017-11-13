import isClient from '@hackoregon/civic-server/lib/utils/isClient';
import HousingApp from '@hackoregon/civic-housing';
import consumeRoutes from '@hackoregon/civic-server/lib/router/consumeRoutes';
import Shell from '../universal/Shell';
import Collection from './Collection';

import Home from './Home';
import About from './About';

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

const NotFoundRoute = {
  path: isClient ? '*' : '.*',
  getComponent(location, cb) {
    cb(null, require('../universal/NotFound').default);
  },
};

const civicRoutes = [
  { path: '/',
    name: 'root',
    component: Home,
  },
  {
    path: 'collections/:name',
    component: Collection,
  },
  {
    path: 'collections/housing',
    component: HousingApp,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

export default consumeRoutes({
  component: Shell,
  childRoutes: [
    // routes,
    civicRoutes,
    // HousingRoute,
    NotFoundRoute,
  ],
});
