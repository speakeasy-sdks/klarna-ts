<!-- Start SDK Example Usage -->
```typescript
import {
  CreateOrderRequest,
  CreateOrderResponse
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/operations";
import {
  SubscriptionIntervalEnum,
  CustomerOrganizationEntityTypeEnum,
} from "@speakeasy-sdks/klarna-orders/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { Klarna } from "@speakeasy-sdks/klarna-orders";
const sdk = new Klarna({
  security: {
    apiKeyAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateOrderRequest = {
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
};

sdk.orders.create(req).then((res: CreateOrderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->