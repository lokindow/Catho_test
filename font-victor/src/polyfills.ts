import 'core-js/client/shim';
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');

import 'ts-helpers';

Error['stackTraceLimit'] = Infinity;
require('zone.js/dist/long-stack-trace-zone');
