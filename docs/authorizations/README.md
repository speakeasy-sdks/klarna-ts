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
import { CancelAuthorizationRequest, CancelAuthorizationResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CancelAuthorizationRequest = {
  authorizationToken: "temporibus",
};

sdk.authorizations.cancel(req).then((res: CancelAuthorizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
