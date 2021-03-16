module.exports = {
    /* endpoint: 'https://api.github.com/', */
    token: 'xxx',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: ['dserkowski/renovateTest'],
    gitAuthor: "Renovate Bot <user@domain.com>",
};