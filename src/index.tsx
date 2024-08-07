const AwesomeMetricAfricaLibrary =
  require('./NativeAwesomeMetricAfricaLibrary').default;

export function initMetricSdk(
  clientId: string,
  clientSecret: string,
  isDev: boolean
) {
  return AwesomeMetricAfricaLibrary.initMetricAfricaSdk(
    clientId,
    clientSecret,
    isDev
  );
}

export function initVerification(token: string) {
  return AwesomeMetricAfricaLibrary.initializeVerification(token);
}
