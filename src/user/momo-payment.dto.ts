export interface MomoPaymentResponse {
    success: boolean;
    data: {
      response: {
        referenceId: string;
        responseCode: number;
        status: {
          amount: string;
          currency: string;
          externalId: string;
          financialTransactionId: string;
          payeeNote: string;
          payer: {
            partyId: string;
            partyIdType: string;
          };
          payerMessage: string;
          status: string;
        };
      };
    };
  }
  