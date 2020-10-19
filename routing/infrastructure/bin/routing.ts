#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RoutingStack } from '../lib/routing-stack';
import { Properties } from '../lib/properties';

const app = new cdk.App();
new RoutingStack(app, Properties.STACK_NAME);
