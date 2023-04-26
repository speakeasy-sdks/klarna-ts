# sessions

## Overview

Operations related to sessions

### Available Operations

* [create](#create) - Create a new payment session
* [read](#read) - Read an existing payment session
* [update](#update) - Update an existing payment session

## create

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { CreateCreditSessionResponse, SessionCreateInput } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  CustomerOrganizationEntityTypeEnum,
  SessionCreateAcquiringChannelEnum,
  SessionCreateIntentEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.SessionCreateInput = {
  acquiringChannel: SessionCreateAcquiringChannelEnum.Ecommerce,
  attachment: {
    body: "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}",
    contentType: "application/vnd.klarna.internal.emd-v2+json",
  },
  billingAddress: {
    attention: "Attn",
    city: "London",
    country: "GB",
    email: "test.sam@test.com",
    familyName: "Andersson",
    givenName: "Adam",
    organizationName: "porro",
    phone: "+44795465131",
    postalCode: "W1G 0PW",
    region: "OH",
    streetAddress: "33 Cavendish Square",
    streetAddress2: "Floor 22 / Flat 2",
    title: "Mr.",
  },
  customPaymentMethodIds: [
    "dicta",
    "nam",
    "officia",
  ],
  customer: {
    dateOfBirth: "1978-12-31",
    gender: "male",
    lastFourSsn: "occaecati",
    nationalIdentificationNumber: "fugit",
    organizationEntityType: CustomerOrganizationEntityTypeEnum.GeneralPartnership,
    organizationRegistrationId: "hic",
    title: "Mr.",
    type: "organization",
    vatId: "optio",
  },
  design: "totam",
  intent: SessionCreateIntentEnum.Buy,
  locale: "en-US",
  merchantData: "{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}",
  merchantReference1: "ON4711",
  merchantReference2: "hdt53h-zdgg6-hdaff2",
  merchantUrls: {
    authorization: "https://www.example-url.com/authorization",
    confirmation: "https://www.example-url.com/confirmation",
    notification: "https://www.example-url.com/notification",
    push: "https://www.example-url.com/push",
  },
  options: {
    colorBorder: "#FF9900",
    colorBorderSelected: "#FF9900",
    colorDetails: "#FF9900",
    colorText: "#FF9900",
    radiusBorder: "5px",
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
        intervalCount: 473600,
        name: "Norma Ryan",
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
    organizationName: "ipsum",
    phone: "+44795465131",
    postalCode: "W1G 0PW",
    region: "OH",
    streetAddress: "33 Cavendish Square",
    streetAddress2: "Floor 22 / Flat 2",
    title: "Mr.",
  },
};

sdk.sessions.create(req).then((res: CreateCreditSessionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## read

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { ReadCreditSessionRequest, ReadCreditSessionResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  CustomerReadOrganizationEntityTypeEnum,
  SessionReadAcquiringChannelEnum,
  SessionReadIntentEnum,
  SessionReadStatusEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ReadCreditSessionRequest = {
  sessionId: "excepturi",
};

sdk.sessions.read(req).then((res: ReadCreditSessionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { UpdateCreditSessionRequest, UpdateCreditSessionResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  CustomerOrganizationEntityTypeEnum,
  SessionAcquiringChannelEnum,
  SessionIntentEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: UpdateCreditSessionRequest = {
  sessionInput: {
    acquiringChannel: SessionAcquiringChannelEnum.Ecommerce,
    attachment: {
      body: "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}",
      contentType: "application/vnd.klarna.internal.emd-v2+json",
    },
    billingAddress: {
      attention: "Attn",
      city: "London",
      country: "GB",
      email: "test.sam@test.com",
      familyName: "Andersson",
      givenName: "Adam",
      organizationName: "aspernatur",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
    customPaymentMethodIds: [
      "ad",
    ],
    customer: {
      dateOfBirth: "1978-12-31",
      gender: "male",
      lastFourSsn: "natus",
      nationalIdentificationNumber: "sed",
      organizationEntityType: CustomerOrganizationEntityTypeEnum.RegisteredSoleTrader,
      organizationRegistrationId: "dolor",
      title: "Mr.",
      type: "organization",
      vatId: "natus",
    },
    design: "laboriosam",
    intent: SessionIntentEnum.Buy,
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
    options: {
      colorBorder: "#FF9900",
      colorBorderSelected: "#FF9900",
      colorDetails: "#FF9900",
      colorText: "#FF9900",
      radiusBorder: "5px",
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
          interval: SubscriptionIntervalEnum.Year,
          intervalCount: 681820,
          name: "Stacy Moore",
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
          interval: SubscriptionIntervalEnum.Month,
          intervalCount: 99280,
          name: "Lela Orn",
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
          interval: SubscriptionIntervalEnum.Day,
          intervalCount: 210382,
          name: "Rose Rolfson",
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
          intervalCount: 325047,
          name: "Brian Kessler",
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
      organizationName: "sapiente",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
  },
  sessionId: "architecto",
};

sdk.sessions.update(req).then((res: UpdateCreditSessionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
