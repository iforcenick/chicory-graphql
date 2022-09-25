import { gql } from "@apollo/client";

export const QUERY_RETAILERS_LIST = gql`
    query retailers($zipCode: String!, $black: [String!], $white: [String!]) {
        retailers(zipCode: $zipCode, blacklistedRetailers: $black, whitelistedRetailers: $white) {
            id
            slug
            shopOnLogoUrl
            logoUrl
            name
            requiresLocation
        }
    }
`;