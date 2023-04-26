# tokens

## Overview

Operations related to token

### Available Operations

* [purchase](#purchase) - Generate a consumer token

## purchase

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { PurchaseTokenRequest, PurchaseTokenResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  AuthorizedPaymentMethodTypeEnum,
  CustomerOrganizationEntityTypeEnum,
  CustomerTokenCreationRequestIntendedUseEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PurchaseTokenRequest = {
  authorizationToken: "mollitia",
  customerTokenCreationRequest: {
    billingAddress: {
      attention: "Attn",
      city: "London",
      country: "GB",
      email: "test.sam@test.com",
      familyName: "Andersson",
      givenName: "Adam",
      organizationName: "dolorem",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
    customer: {
      dateOfBirth: "1978-12-31",
      gender: "male",
      lastFourSsn: "culpa",
      nationalIdentificationNumber: "consequuntur",
      organizationEntityType: CustomerOrganizationEntityTypeEnum.Other,
      organizationRegistrationId: "mollitia",
      title: "Mr.",
      type: "organization",
      vatId: "occaecati",
    },
    description: "numquam",
    intendedUse: CustomerTokenCreationRequestIntendedUseEnum.Subscription,
    locale: "en-GB",
    purchaseCountry: "GB",
    purchaseCurrency: "GBP",
  },
};

sdk.tokens.purchase(req).then((res: PurchaseTokenResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
