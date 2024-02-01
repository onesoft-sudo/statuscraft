export default () => ({
    jwt: {
        secret: process.env.JWT_SECRET,
        issuer: process.env.JWT_ISSUER,
    },
});
