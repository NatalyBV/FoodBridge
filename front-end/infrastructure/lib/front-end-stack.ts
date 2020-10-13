import * as cdk from '@aws-cdk/core';
import * as path from "path";
import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { Properties } from './properties';
import { RemovalPolicy } from '@aws-cdk/core';

export class FrontEndStack extends cdk.Stack {
  
  public readonly staticAssetsBucket: Bucket;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.staticAssetsBucket = new Bucket(this, 'static-assets-bucket', {
      bucketName: `food-bridge-statics-${Properties.ENVIRONMENT}`,
      removalPolicy: RemovalPolicy.RETAIN,
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404error.html',
    });

    new BucketDeployment(this, 'populate-statics', {
      sources: [Source.asset(path.resolve('..', 'statics'))],
      destinationBucket: this.staticAssetsBucket,
    });
  }
}
