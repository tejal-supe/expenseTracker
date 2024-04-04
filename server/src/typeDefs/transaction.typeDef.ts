const transactionTypeDef = `#graphql
type Transaction{
    _id:ID!
    userId:ID!
    amount:Float!
    paymentType:String!
    category:String!
    desc:String!
    createdAt:String!
}

type Query{
    transactions:[Transaction!]
    transaction(transactionId:ID!):Transaction
}
type Mutation{
    createTransaction(input:CreateTransactionInput!):Transaction!
    updateTransaction(input:UpdateTransaction!):Transaction!
    deleteTransaction(transactionId:ID!):Transaction!
}

input CreateTransactionInput{
    amount:Float!
    paymentType:String!
    category:String!
    desc:String!
    createdAt:String!
}
input UpdateTransaction{
    transactionId:ID!
    amount:Float!
    paymentType:String!
    category:String!
    desc:String!
    createdAt:String!
}
`

export default transactionTypeDef