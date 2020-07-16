// import { SmartElement } from "./smart-element.model";

export class ProductLevel3 {
    productLevel1Id: string;
    productLevel1Title: string;
    productLevel2Id: string;
    productLevel2Title: string;
    productLevel3Id: string;
    productLevel3Title: string;
    pricePerUnit: string | number;
    attachments: {attachments: { context: string; url: string; msgType: string;}[]}
    // smartElements: SmartElement;
    mrp: string | number;
    skuSpecifications?: string;
    availableSmartElement?: string;
    displayName?: string;
    customOrders?: any;
    isReviewAccepted?: boolean;
    isPublished?: boolean;
    isBulkOrder?: boolean;
    location?: string[];
    s3Path?: string;
    shortId?: string;
    orderType?: string;
    languageId?: string;
    isForReview?: boolean;
    selectedSKU?: string[];
    handlingCost?: string;
    languageName?: string;
    shippingCost?: string;
    level3ShortId?: string;
    packagingCost?: string;
    resellersCount?: number;
    isReviewInProgress?: boolean;
    freeShippingEligible?: boolean;
    productLevel3ShortTitle?: string;
    baseProduct?: BaseProduct;
    manufacturerDetails?: any;
    resellerDetails? : any;
}

export interface BaseProduct {
    brand:       boolean;
    allowed:     boolean;
    isEdited:    boolean;
    productId:   string;
    isApproved:  boolean;
    productName: string;
    subModule:           string;
    VProductId:          string;
    attachments:         any[];
    description:         string;
    productType:         string;
    VProductName:        string;
    baseCategory:        BaseCategory;
    productTitle:        string;
    // baseSmartElements:   SmartElement;
}

export interface BaseCategory {
    id:          string;
    value:       string;
    level3Count: number;
}
