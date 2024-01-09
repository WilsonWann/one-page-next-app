const Logistics = ['homeDelivery', 'sevenEleven', 'familyMart', 'hiLife'] as const
const LogisticsMode = ['homeDelivery', 'inStorePickup'] as const
const Payments = ['cod', 'credit', 'virtualAccount', 'icashPay', 'applePay'] as const
const OnlinePayments = ['credit', 'virtualAccount', 'icashPay', 'applePay'] as const

export {
  Logistics,
  LogisticsMode,
  Payments,
  OnlinePayments
}