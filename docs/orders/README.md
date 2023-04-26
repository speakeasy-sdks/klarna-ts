# orders

## Overview

Operations related to orders

### Available Operations

* [create](#create) - Create a new order

## create

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).
Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

### Example Usage

```typescript
import { Klarna } from "@speakeasy-sdks/klarna-orders";
import { CreateOrderRequest, CreateOrderResponse } from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  AuthorizedPaymentMethodTypeEnum,
  CustomerOrganizationEntityTypeEnum,
  SubscriptionIntervalEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateOrderRequest = {
  authorizationToken: "ab",
  createOrderRequestInput: {
    autoCapture: false,
    billingAddress: {
      attention: "Attn",
      city: "London",
      country: "GB",
      email: "test.sam@test.com",
      familyName: "Andersson",
      givenName: "Adam",
      organizationName: "quis",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
    customPaymentMethodIds: [
      "deserunt",
    ],
    customer: {
      dateOfBirth: "1978-12-31",
      gender: "male",
      lastFourSsn: "perferendis",
      nationalIdentificationNumber: "ipsam",
      organizationEntityType: CustomerOrganizationEntityTypeEnum.PublicInstitution,
      organizationRegistrationId: "sapiente",
      title: "Mr.",
      type: "organization",
      vatId: "quo",
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
          interval: SubscriptionIntervalEnum.Year,
          intervalCount: 870088,
          name: "Javier Schmidt",
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
      organizationName: "totam",
      phone: "+44795465131",
      postalCode: "W1G 0PW",
      region: "OH",
      streetAddress: "33 Cavendish Square",
      streetAddress2: "Floor 22 / Flat 2",
      title: "Mr.",
    },
  },
};

sdk.orders.create(req).then((res: CreateOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
