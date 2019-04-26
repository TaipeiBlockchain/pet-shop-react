module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
    compilers: {
        solc: {
            version: "^0.4.22"
        }
    },
  networks: {
      development: {
            host: "localhost",
            port: 7545,
            network_id: "*" // Match any network id
      }
  }
};
