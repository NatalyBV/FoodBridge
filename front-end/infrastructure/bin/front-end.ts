#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FrontEndStack } from '../lib/front-end-stack';
import { Properties } from '../lib/properties';

const app = new cdk.App();
new FrontEndStack(app, Properties.STACK_NAME);
