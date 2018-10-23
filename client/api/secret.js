const secrets = {
    tvDb: 'OT1SEQWL59ZWJ4Y9'
};

//export const getSecret = key => secrets.dbUri

module.exports.getTvDbSecret = () => {
    return secrets.tvDb;
};