const formatPaymentMethod = (
  paymentMethod: "billet" | "credit_card" | null
): string => {
  switch (paymentMethod) {
    case "billet": {
      return "Boleto";
    }
    case "credit_card": {
      return "Cartão de crédito";
    }
    default: {
      return "";
    }
  }
};

export { formatPaymentMethod };
