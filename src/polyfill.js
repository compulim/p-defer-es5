import createDeferred from './index';

const scope = typeof window === 'undefined' ? 0 : window;

scope && (scope.createDeferred = createDeferred);
