/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CustomerReadCreateToken extends SpeakeasyBase {
  /**
   * Customer’s date of birth. The format is ‘yyyy-mm-dd’
   */
  @SpeakeasyMetadata()
  @Expose({ name: "date_of_birth" })
  dateOfBirth?: string;

  /**
   * Customer’s gender - ‘male’ or ‘female’
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gender" })
  gender?: string;
}
