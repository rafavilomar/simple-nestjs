export default interface CreatePaymentOptionDTO {
  name: string;
  owner: string;
  number: string;
  expirationMonth: number;
  expirationYear: number;
  userId: number;
}
