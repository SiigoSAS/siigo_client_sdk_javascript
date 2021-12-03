export interface InvoiceViewModel {
  total: number,
  price: number,
  amount: number,
  totalB: number,
  subTotal: number,
  totalPay: number,
  totalNeto: number,
  selectedProduct: any,
  documentType: string,
  date: string,
  customerIdentification: string,
  branchOffice: number,
  seller: string,
  paymentId: string
}
