# authorizations

## Overview

Operations related to authorizations

### Available Operations

* [cancel](#cancel) - Cancel an existing authorization

## cancel

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { CancelAuthorizationResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.authorizations.cancel({
  authorizationToken: "temporibus",
}).then((res: CancelAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
