import gql from 'graphql-tag';

export const Login_Query = gql`
    {
        admins(where :{ID:"cjwvv0qkw002c07319s4qrvre"}){
            ID
            password
        }
    }
`; 
export const isDeliverList=gql`
     {
        deals(where:{isDeliver: false},orderBy:address_DESC){
        ID
        createdAt
        address
    		product{
          productName
        }
        productNum
        productCost
        isDeliver
        payPerson{
          payPerson
          isAllPay
          bank
        }
        user{
          userName
          userPhonNumber
        }        
    }
  
  }
`;
export const isAllPayList=gql`
    {
        deals(where:{payPerson:{isAllPay:false}},orderBy:address_DESC){
          ID
        createdAt
        address
    		product{
          productName
        }
        productNum
        productCost
        
        isDeliver
        payPerson{
          payPerson
          isAllPay
          bank
        }
        user{
          userName
          userPhonNumber
      }          
    }
    }

`;
export const notBothList=gql`
    {
        deals(where: {AND:[{ isDeliver: true },{payPerson:{isAllPay:true}}]},orderBy:address_DESC){
          ID
        createdAt
        address
    		product{
          productName
        }
        productNum
        productCost
        
        isDeliver
        payPerson{
          payPerson
          isAllPay
          bank
        }
        user{
          userName
          userPhonNumber
      }          
    }
    }

`;
export const  payPerson_List =gql`
  {
    payPersons 
    {
      ID
      bank
      payPerson
    }
  }


`