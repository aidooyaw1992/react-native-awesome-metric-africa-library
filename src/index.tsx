const AwesomeMetricAfricaLibrary =
  require('./NativeAwesomeMetricAfricaLibrary').default;

export async function initMetricSdk(
  clientId: string,
  clientSecret: string,
  isDev: boolean
) {
  return await AwesomeMetricAfricaLibrary.initMetricAfricaSdk(
    clientId,
    clientSecret,
    isDev
  );
}

export async function initVerification(token: string) {
  return await AwesomeMetricAfricaLibrary.initializeVerification(token);
}
