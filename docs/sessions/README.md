# sessions

## Overview

Operations related to sessions

### Available Operations

* [read](#read) - Read an existing payment session
* [read](#read) - Create a new payment session
* [update](#update) - Update an existing payment session

## read

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { ReadCreditSessionResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  CustomerReadOrganizationEntityTypeEnum,
  SessionReadAcquiringChannelEnum,
  SessionReadIntentEnum,
  SessionReadStatusEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.sessions.read({
  sessionId: "porro",
}).then((res: ReadCreditSessionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## read

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { CreateCreditSessionResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  CustomerOrganizationEntityTypeEnum,
  SessionCreateAcquiringChannelEnum,
  SessionCreateIntentEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.sessions.read({
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
    organizationName: "dolorum",
    phone: "+44795465131",
    postalCode: "W1G 0PW",
    region: "OH",
    streetAddress: "33 Cavendish Square",
    streetAddress2: "Floor 22 / Flat 2",
    title: "Mr.",
  },
  customPaymentMethodIds: [
    "nam",
  ],
  customer: {
    dateOfBirth: "1978-12-31",
    gender: "male",
    lastFourSsn: "officia",
    nationalIdentificationNumber: "occaecati",
    organizationEntityType: CustomerOrganizationEntityTypeEnum.PublicLimitedCompany,
    organizationRegistrationId: "deleniti",
    title: "Mr.",
    type: "organization",
    vatId: "hic",
  },
  design: "optio",
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
        interval: SubscriptionIntervalEnum.Day,
        intervalCount: 414662,
        name: "Pauline Dibbert",
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
        intervalCount: 216550,
        name: "Brandon Auer",
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
        intervalCount: 612096,
        name: "Faye Howe",
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
    organizationName: "fuga",
    phone: "+44795465131",
    postalCode: "W1G 0PW",
    region: "OH",
    streetAddress: "33 Cavendish Square",
    streetAddress2: "Floor 22 / Flat 2",
    title: "Mr.",
  },
}).then((res: CreateCreditSessionResponse) => {
  if (res.statusCode == 200) {
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
import { UpdateCreditSessionResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  CustomerOrganizationEntityTypeEnum,
  SessionAcquiringChannelEnum,
  SessionIntentEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.sessions.update({
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
      organizationName: "in",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
    customPaymentMethodIds: [
      "iste",
      "iure",
    ],
    customer: {
      dateOfBirth: "1978-12-31",
      gender: "male",
      lastFourSsn: "saepe",
      nationalIdentificationNumber: "quidem",
      organizationEntityType: CustomerOrganizationEntityTypeEnum.PublicLimitedCompany,
      organizationRegistrationId: "ipsa",
      title: "Mr.",
      type: "organization",
      vatId: "reiciendis",
    },
    design: "est",
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
          interval: SubscriptionIntervalEnum.Month,
          intervalCount: 170909,
          name: "Stacy Champlin",
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
          intervalCount: 363711,
          name: "Velma Batz",
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
          interval: SubscriptionIntervalEnum.Year,
          intervalCount: 958950,
          name: "Angie Durgan",
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
      organizationName: "repellat",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
  },
  sessionId: "mollitia",
}).then((res: UpdateCreditSessionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
