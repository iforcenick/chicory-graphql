import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GenericScalar: any;
};

export type BrandListInput = {
  __typename?: 'BrandListInput';
  brands: Array<Maybe<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};

export type Cart = {
  __typename?: 'Cart';
  /** The checkout URL */
  checkoutUrl?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<ItemOutput>>>;
  options?: Maybe<Option>;
};

export type CartInput = {
  analytics?: InputMaybe<Scalars['GenericScalar']>;
  items: Array<InputMaybe<ItemInput>>;
  metadata?: InputMaybe<Scalars['GenericScalar']>;
  options: OptionInput;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  /** The Ingredient category. */
  category?: Maybe<Scalars['String']>;
  /** The Ingredient measure. */
  measure?: Maybe<Scalars['String']>;
  /** The Ingredient name. */
  name?: Maybe<Scalars['String']>;
  /** The Ingredient quantity. */
  quantity?: Maybe<Scalars['String']>;
};

export type IngredientInput = {
  category?: InputMaybe<Scalars['String']>;
  measure?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ItemInput = {
  ingredient?: InputMaybe<IngredientInput>;
  productSpecs?: InputMaybe<Array<InputMaybe<ProductSpecInput>>>;
  text?: InputMaybe<Scalars['String']>;
};

export type ItemOutput = {
  __typename?: 'ItemOutput';
  blacklistedRetailers?: Maybe<Array<Maybe<Scalars['String']>>>;
  brandsBlocked: Array<Maybe<BrandListInput>>;
  brandsPreferred: Array<Maybe<BrandListInput>>;
  brandsRequired?: Maybe<BrandListInput>;
  ingredient?: Maybe<Ingredient>;
  productSpecs?: Maybe<Array<Maybe<ProductSpec>>>;
  /** The Item recipe ingredient source text. */
  text?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  /** The Location address— */
  address?: Maybe<Scalars['String']>;
  /** The Location city */
  city?: Maybe<Scalars['String']>;
  /** The distance from the user give location, if one was provided */
  distance?: Maybe<Scalars['Float']>;
  /** The Location external_id */
  externalId?: Maybe<Scalars['String']>;
  /** The Location state */
  state?: Maybe<Scalars['String']>;
  /** The Location store_name */
  storeName?: Maybe<Scalars['String']>;
  /** The Location zip code */
  zipCode?: Maybe<Scalars['String']>;
};

export type LocationInput = {
  externalId: Scalars['String'];
};

export type Option = {
  __typename?: 'Option';
  affiliateKeys?: Maybe<Scalars['GenericScalar']>;
  blacklistedBrands?: Maybe<Array<Maybe<Scalars['String']>>>;
  blacklistedRetailers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The user selected latitude */
  latitude?: Maybe<Scalars['String']>;
  /** The user selected longitude */
  longitude?: Maybe<Scalars['String']>;
  preferredBrands?: Maybe<Array<Maybe<Scalars['String']>>>;
  retailer?: Maybe<Retailer>;
  whitelistedRetailers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The user selected zip code */
  zipCode?: Maybe<Scalars['String']>;
};

export type OptionInput = {
  affiliateKeys?: InputMaybe<Scalars['GenericScalar']>;
  blacklistedBrands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blacklistedRetailers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The user selected latitude */
  latitude?: InputMaybe<Scalars['String']>;
  /** The user selected longitude */
  longitude?: InputMaybe<Scalars['String']>;
  preferredBrands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  retailer: RetailerInput;
  whitelistedRetailers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The user selected zip code */
  zipCode?: InputMaybe<Scalars['String']>;
};

export type ProductSpec = {
  __typename?: 'ProductSpec';
  analyticsPayload?: Maybe<Scalars['GenericScalar']>;
  priority?: Maybe<Scalars['Int']>;
  /** The number of items that we want to add to the user cart. */
  quantity?: Maybe<Scalars['Int']>;
  /** The search query to use when searching for products. */
  searchQuery?: Maybe<Scalars['String']>;
};

export type ProductSpecInput = {
  analyticsPayload?: InputMaybe<Scalars['GenericScalar']>;
  priority?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

/** Main Query Object */
export type Query = {
  __typename?: 'Query';
  cart?: Maybe<Cart>;
  locations?: Maybe<Array<Maybe<Location>>>;
  retailers?: Maybe<Array<Maybe<Retailer>>>;
};


/** Main Query Object */
export type QueryCartArgs = {
  cart: CartInput;
};


/** Main Query Object */
export type QueryLocationsArgs = {
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  retailer?: InputMaybe<Scalars['String']>;
  zipCode: Scalars['String'];
};


/** Main Query Object */
export type QueryRetailersArgs = {
  blacklistedRetailers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  whitelistedRetailers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zipCode: Scalars['String'];
};

export type Retailer = {
  __typename?: 'Retailer';
  /** add to cart tracker */
  addToCartTracker?: Maybe<Scalars['String']>;
  /** featured retailer tracker */
  featuredRetailerClickTracker?: Maybe<Scalars['String']>;
  /** The Retailer homepage URL */
  homepage?: Maybe<Scalars['String']>;
  /** The Retailer id */
  id?: Maybe<Scalars['String']>;
  /** Is featured retailer */
  isFeaturedRetailer?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  /** The Retailer logo URL */
  logoUrl?: Maybe<Scalars['String']>;
  /** The Retailer name */
  name?: Maybe<Scalars['String']>;
  /** This retailers requires additional location selection */
  requiresLocation?: Maybe<Scalars['Boolean']>;
  /** The Retailer 'shop on' logo URL */
  shopOnLogoUrl?: Maybe<Scalars['String']>;
  /** The Retailer slug */
  slug?: Maybe<Scalars['String']>;
};

export type RetailerInput = {
  id?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<LocationInput>;
  slug: Scalars['String'];
};

export type RetailersQueryVariables = Exact<{
  zipCode: Scalars['String'];
  black?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  white?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type RetailersQuery = { __typename?: 'Query', retailers?: Array<{ __typename?: 'Retailer', id?: string | null, slug?: string | null, shopOnLogoUrl?: string | null, logoUrl?: string | null, name?: string | null, requiresLocation?: boolean | null } | null> | null };


export const RetailersDocument = gql`
    query retailers($zipCode: String!, $black: [String!], $white: [String!]) {
  retailers(
    zipCode: $zipCode
    blacklistedRetailers: $black
    whitelistedRetailers: $white
  ) {
    id
    slug
    shopOnLogoUrl
    logoUrl
    name
    requiresLocation
  }
}
    `;

/**
 * __useRetailersQuery__
 *
 * To run a query within a React component, call `useRetailersQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetailersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetailersQuery({
 *   variables: {
 *      zipCode: // value for 'zipCode'
 *      black: // value for 'black'
 *      white: // value for 'white'
 *   },
 * });
 */
export function useRetailersQuery(baseOptions: Apollo.QueryHookOptions<RetailersQuery, RetailersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetailersQuery, RetailersQueryVariables>(RetailersDocument, options);
      }
export function useRetailersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetailersQuery, RetailersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetailersQuery, RetailersQueryVariables>(RetailersDocument, options);
        }
export type RetailersQueryHookResult = ReturnType<typeof useRetailersQuery>;
export type RetailersLazyQueryHookResult = ReturnType<typeof useRetailersLazyQuery>;
export type RetailersQueryResult = Apollo.QueryResult<RetailersQuery, RetailersQueryVariables>;