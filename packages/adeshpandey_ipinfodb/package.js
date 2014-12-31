Package.describe({
  name: 'adeshpandey:ipinfodb',
  summary: ' Ipinfodb is the package which allows to get the client users location by providing the ip address. ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles(['adeshpandey:ipinfodb.js'],['client','server']);
  api.export('IPInfoDB');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adeshpandey:ipinfodb');
  api.addFiles('adeshpandey:ipinfodb-tests.js');
});
