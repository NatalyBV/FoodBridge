# FoodBridge
FoodBridge is a next generation food delivery application.

### How to deploy
1. Set up environment variables.:
   * Add `export FB_ENVIRONMENT='PUT HERE FB_ENVIRONMENT you want to deploy to'` to your`~/.bash_profile`
2. Set up AWS config
   * [Go here to set up credentials and region](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html)
3. Run deploy script
   * Run `bash ./scripts/deploy.sh`

### Components dependencies diagram
![Components dependencies diagram](images/service-dependencies-diagram.png)
