import { gql } from "graphql-request";

export const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL || "";

export const checkIfRecipientIsIndexedQuery = gql`
  query checkIfRecipientIsIndexedQuery($chainId: String!, $poolId: String!, $recipientId: String!) {
    microGrantRecipient(chainId: $chainId, poolId: $poolId, recipientId: $recipientId) {
      recipientId
    }
  }
`;

export const checkIfPoolIsIndexedQuery = gql`
  query checkIfPoolIsIndexedQuery($chainId: String!, $poolId: String!) {
    microGrant(chainId: $chainId, poolId: $poolId) {
      poolId
    }
  }
`;

export const getMicroGrantsQuery = gql`
  {
    microGrants(orderBy: BLOCK_TIMESTAMP_DESC) {
      poolId
      chainId
      strategy
      allocationStartTime
      allocationEndTime
      approvalThreshold
      maxRequestedAmount
      pool {
        tokenMetadata
        token
        amount
        metadataPointer
        profile {
          profileId
          name
        }
      }
    }
  }
`;

export const getMicroGrantsRecipientsQuery = gql`
  query getMicroGrantsRecipientsQuery($chainId: String!, $poolId: String!) {
    microGrant(chainId: $chainId, poolId: $poolId) {
      poolId
      chainId
      strategy
      allocationStartTime
      allocationEndTime
      approvalThreshold
      maxRequestedAmount
      pool {
        tokenMetadata
        token
        amount
        metadataPointer
        profile {
          profileId
          name
        }
      }
      microGrantRecipients {
        recipientId
        recipientAddress
        recipientAddress
        requestedAmount
        metadataPointer
        blockTimestamp
        isUsingRegistryAnchor
        status
      }
    }
  }
`;

export const getMicroGrantRecipientQuery = gql`
  query getMicroGrantRecipientQuery(
    $chainId: String!
    $poolId: String!
    $recipientId: String!
  ) {
    microGrantRecipient(
      chainId: $chainId
      poolId: $poolId
      recipientId: $recipientId
    ) {
      microGrant {
        poolId
        chainId
        allocationStartTime
        allocationEndTime
        pool {
          tokenMetadata
          token
          amount
        }
        allocateds {
          recipientId
          sender
          contractAddress
          contractName
          chainId
          amount
          blockTimestamp
        }
      }
      sender
      recipientId
      recipientAddress
      requestedAmount
      metadataPointer
      blockTimestamp
      isUsingRegistryAnchor
      status
    }
  }
`;
