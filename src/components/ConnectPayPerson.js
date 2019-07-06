import React, { useContext } from 'react';

import { useQuery } from 'react-apollo-hooks';
import { payPerson_List } from '../schema/Queries';
import { Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import { ConnectPayPersonID } from '../Store';

function ConnectPayPerson() {
  const [choose, setChoose] = useContext(ConnectPayPersonID);

  return <React.Fragment>{PayPersonList(choose, setChoose)}</React.Fragment>;
}

function PayPersonList(choose, setChoose) {
  const { data, loading, error } = useQuery(payPerson_List);

  if (loading) return <h2>Loading</h2>;

  if (data) {
    return (
      <Table>
        <TableBody>
          {data.payPersons.map(payPerson => {
            return createTableRow(
              payPerson.ID,
              payPerson.bank == '미정' || payPerson.bank == '직거래'
                ? payPerson.bank
                : payPerson.bank + '은행',
              payPerson.payPerson,
              choose,
              setChoose
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

const createTableRow = (index, par1, par2, state, func) => {
  return (
    <TableRow key={index}>
      <TableCell align='center'>
        <input type='radio' name='one' onChange={() => func(index)} />
      </TableCell>
      <TableCell align='center'>{par1}</TableCell>
      <TableCell align='center'>{par2}</TableCell>
    </TableRow>
  );
};

export default ConnectPayPerson;
