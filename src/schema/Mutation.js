import gql from 'graphql-tag';


export const Remove_Deal = gql`
mutation removeDeal($ID: ID!){
    deleteDeal(where:{ID:$ID}){
        createdAt
    }

}

`;


export const ChangeTrueIsDeliver=gql`
mutation changeTrueIsDeliver($ID:ID!){
    updateDeal(data:{isDeliver: true},where:{ID: $ID}){
        createdAt
    }
}
`;
export const ChangeFalseIsDeliver=gql`
mutation changeFalseIsDeliver($ID:ID!){
    updateDeal(data:{isDeliver: false},where:{ID: $ID}){
        createdAt
    }
}
`;



export const ChangeFalseIsAllPay=gql`
mutation changeFalseIsAllPay($ID:ID!){
    updateDeal(where: {ID: $DealID}, data: {payPerson: {connect: {ID: "cjwvv0ya0002n07317wbytqy2"}}}) {
    createdAt
  }
}

`;

