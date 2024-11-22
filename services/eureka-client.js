import { Eureka } from 'eureka-js-client'; // Use import instead of require

// Create the Eureka client instance
const eurekaClient = new Eureka({
  instance: {
    app: 'borrow-service', // Service name as it will appear in Eureka
    instanceId: `borrow-service-${process.env.HOSTNAME}`,
    hostName: 'localhost', // Host of your service
    ipAddr: '127.0.0.2', // IP of your service
    statusPageUrl: 'http://localhost:3001/info', // Optional, health/status endpoint
    port: {
      $: 3001, // Port your service listens on
      '@enabled': true,
    },
    vipAddress: 'borrow-service',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost', // Eureka server host
    port: 8761, // Eureka server port
    servicePath: '/eureka/apps/',
  },
});

// Start the Eureka client
eurekaClient.start((error) => {
  console.log(error ? 'Error starting Eureka client' : 'Eureka client started successfully');
});

export default eurekaClient; // Use export instead of module.exports
