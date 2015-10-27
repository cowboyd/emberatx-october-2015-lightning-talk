module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'infinite-jest',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
