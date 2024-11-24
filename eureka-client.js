import { Eureka } from 'eureka-js-client'; // Use import instead of require

// Create the Eureka client instance
const eurekaClient = new Eureka({
  instance: {
    app: 'BORROW-SERVICE', // Service name as it will appear in Eureka
    // instanceId: `${require('os').hostname()}:EMAIL-SERVICE:8081`, // Unique instance ID
    instanceId: `borrow-service-${process.env.HOSTNAME}`,
    // hostName: require('os').hostname(), // Use machine hostname
    hostName: 'localhost', // Host of your service
    ipAddr: '127.0.0.1',
    // statusPageUrl: 'http://localhost:3001/info', // Optional, health/status endpoint
    port: {
      $: 3001, // Port your service listens on
      '@enabled': true,
    },
    vipAddress: 'BORROW-SERVICE',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost', // Eureka server host
    port: 8761, // Eureka server port
    servicePath: '/eureka/apps/',
    registerWithEureka: true, // Enable service registration
    fetchRegistry: true, // Enable fetching registry
  },
});

// Start the Eureka client
eurekaClient.start((error) => {
  console.log(error ? 'Error starting Eureka client' : 'Eureka client started successfully');
});

export default eurekaClient; // Use export instead of module.exports