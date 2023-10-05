export interface InvoiceViewModel {
  totalWithFormat: string,
  total: number,
  price: number,
  amount: number,
  totalB: string,
  subTotal: string,
  totalPay: string,
  totalNeto: string,
  selectedProduct: any,
  documentType: string,
  date: Date,
  customerIdentification: string,
  branchOffice: number,
  seller: string,
  paymentId: string
}
