import React, { useContext, useState } from 'react';
import DealDelete from './DealDelete';
import CheckBox from './CheckBox';
import {
  Typography,
  Grid,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Box
} from '@material-ui/core/';
import { ModifyDealID } from '../Store';
import grey from '@material-ui/core/colors/grey';

function Deal(props) {
  const [modifyDealID, setDealID] = useContext(ModifyDealID);

  return (
    <React.Fragment>
      <Box
        container={props.ID}
        p={2}
        m={1}
        style={{ backgroundColor: grey[50] }}
      >
        <Grid container justify='flex-end'>
          <DealDelete ID={props.ID} />
        </Grid>
        <Grid container justify='center'>
          {_textDealList(props)}
          <CheckBox
            isAllPay={props.isAllPay}
            isDeliver={props.isDeliver}
            ID={props.ID}
          />
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Deal;

const _textDealList = props => {
  return (
    <Grid>
      {_text('기간', props.createdAt)}
      {_text('주소', props.address)}
      {_text('구매자', props.userName + '/' + props.userPhonNumber)}
      {_priceList(props)}
      {_text(
        '배달현황',
        props.isDeliver || false ? 'o' : 'x',
        '결제현황',
        props.isAllPay || false ? 'o' : 'x'
      )}
    </Grid>
  );
};

const _text = (text1, value1, text2 = null, value2) => {
  return (
    <Typography variant='body1' align='center' gutterBottom>
      {text1}:{value1}
      {text2 != null && ' ' + text2 + ':' + value2}
    </Typography>
  );
};

const _priceList = props => {
  return <Table>{_TableBody(props)}</Table>;
};

const _TableBody = props => {
  return (
    <TableBody>
      {createTableRow('제품', '수량', '가격')}
      {createTableRow(props.productName, props.productNum, props.productCost)}
      {createTableRow('청구금액', ' ', props.productCost)}
      {createTableRow(
        '결제자',
        props.bank == '미정' || props.bank == '직거래'
          ? props.bank
          : props.bank + '은행',
        props.payPerson
      )}
    </TableBody>
  );
};

const createTableRow = (par1, par2, par3) => {
  return (
    <TableRow>
      <TableCell align='center'>{par1}</TableCell>
      <TableCell align='center'>{par2}</TableCell>
      <TableCell align='center'>{par3}</TableCell>
    </TableRow>
  );
};
