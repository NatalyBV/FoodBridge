const Properties = {
    ENVIRONMENT: process.env.FB_ENVIRONMENT,
    STACK_NAME: `food-bridge-front-end-${process.env.ENVIRONMENT}`,
}

export { Properties };