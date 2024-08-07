
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAwesomeMetricAfricaLibrarySpec.h"

@interface AwesomeMetricAfricaLibrary : NSObject <NativeAwesomeMetricAfricaLibrarySpec>
#else
#import <React/RCTBridgeModule.h>

@interface AwesomeMetricAfricaLibrary : NSObject <RCTBridgeModule>
#endif

@end
