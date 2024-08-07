import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  initMetricAfricaSdk(
    clientId: string,
    clientSecret: string,
    isDev: boolean
  ): Promise<void>;
  initializeVerification(token: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'AwesomeMetricAfricaLibrary'
);
