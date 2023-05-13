<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/230347878-f2873a58-f578-4e95-86e0-7bebfd78f4f1.svg" width="300">
    <h1>Orders Typescript SDK</h1>
   <p>An effortless integration. Designed for growth.</p>
   <a href="https://docs.klarna.com/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/klarna-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/klarna-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/klarna-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/klarna-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/klarna-orders
```

### Yarn

```bash
yarn add @speakeasy-sdks/klarna-orders
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { CreateOrderResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  AuthorizedPaymentMethodTypeEnum,
  CustomerOrganizationEntityTypeEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.orders.read({
  authorizationToken: "corrupti",
  createOrderRequestInput: {
    autoCapture: false,
    billingAddress: {
      attention: "Attn",
      city: "London",
      country: "GB",
      email: "test.sam@test.com",
      familyName: "Andersson",
      givenName: "Adam",
      organizationName: "provident",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
    customPaymentMethodIds: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    customer: {
      dateOfBirth: "1978-12-31",
      gender: "male",
      lastFourSsn: "corrupti",
      nationalIdentificationNumber: "illum",
      organizationEntityType: CustomerOrganizationEntityTypeEnum.LimitedPartnership,
      organizationRegistrationId: "error",
      title: "Mr.",
      type: "organization",
      vatId: "deserunt",
    },
    locale: "en-GB",
    merchantData: "{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}",
    merchantReference1: "ON4711",
    merchantReference2: "hdt53h-zdgg6-hdaff2",
    merchantUrls: {
      authorization: "https://www.example-url.com/authorization",
      confirmation: "https://www.example-url.com/confirmation",
      notification: "https://www.example-url.com/notification",
      push: "https://www.example-url.com/push",
    },
    orderAmount: 2500,
    orderLines: [
      {
        imageUrl: "https://www.exampleobjects.com/logo.png",
        merchantData: "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}",
        name: "Running shoe",
        productIdentifiers: {
          brand: "shoe-brand",
          categoryPath: "Shoes > Running",
          color: "white",
          globalTradeItemNumber: "4912345678904",
          manufacturerPartNumber: "AD6654412-334.22",
          size: "small",
        },
        productUrl: "https://.../AD6654412.html",
        quantity: 1,
        quantityUnit: "pcs",
        reference: "AD6654412",
        subscription: {
          interval: SubscriptionIntervalEnum.Week,
          intervalCount: 297534,
          name: "Larry Windler",
        },
        taxRate: 1900,
        totalAmount: 2500,
        totalDiscountAmount: 500,
        totalTaxAmount: 475,
        type: "physical",
        unitPrice: 2500,
      },
      {
        imageUrl: "https://www.exampleobjects.com/logo.png",
        merchantData: "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}",
        name: "Running shoe",
        productIdentifiers: {
          brand: "shoe-brand",
          categoryPath: "Shoes > Running",
          color: "white",
          globalTradeItemNumber: "4912345678904",
          manufacturerPartNumber: "AD6654412-334.22",
          size: "small",
        },
        productUrl: "https://.../AD6654412.html",
        quantity: 1,
        quantityUnit: "pcs",
        reference: "AD6654412",
        subscription: {
          interval: SubscriptionIntervalEnum.Week,
          intervalCount: 791725,
          name: "Ken Kshlerin",
        },
        taxRate: 1900,
        totalAmount: 2500,
        totalDiscountAmount: 500,
        totalTaxAmount: 475,
        type: "physical",
        unitPrice: 2500,
      },
    ],
    orderTaxAmount: 475,
    purchaseCountry: "GB",
    purchaseCurrency: "GBP",
    shippingAddress: {
      attention: "Attn",
      city: "London",
      country: "GB",
      email: "test.sam@test.com",
      familyName: "Andersson",
      givenName: "Adam",
      organizationName: "recusandae",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
  },
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authorizations](docs/authorizations/README.md)

* [cancel](docs/authorizations/README.md#cancel) - Cancel an existing authorization

### [orders](docs/orders/README.md)

* [read](docs/orders/README.md#read) - Create a new order

### [sessions](docs/sessions/README.md)

* [read](docs/sessions/README.md#read) - Read an existing payment session
* [read](docs/sessions/README.md#read) - Create a new payment session
* [update](docs/sessions/README.md#update) - Update an existing payment session

### [tokens](docs/tokens/README.md)

* [purchase](docs/tokens/README.md#purchase) - Generate a consumer token
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

