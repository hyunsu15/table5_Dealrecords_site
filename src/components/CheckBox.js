import React, { useState, useContext } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { ChangeTrueIsDeliver } from '../schema/Mutation';
import { ChangeFalseIsDeliver } from '../schema/Mutation';
import { ChangeFalseIsAllPay } from '../schema/Mutation';
import { Grid, Button, Box } from '@material-ui/core/';
import { Store, ModifyDealID, optimalRequest, v1Info } from '../Store';

const CheckBox = ({ isDeliver, isAllPay, ID }) => {
  const [checkBox, setCheckBox] = useState({ value1: false, value2: false });

  // store
  const [DealID, setDealID] = useContext(ModifyDealID);
  const [, setAppChoose] = useContext(Store);
  const [optimalReq, setOptimalReq] = useContext(optimalRequest);
  const [v1, setV1] = useContext(v1Info);

  //쿼리
  const changeTrueDeliver = useMutation(ChangeTrueIsDeliver);
  const changeFalseDeliver = useMutation(ChangeFalseIsDeliver);
  const changeFalseAllPay = useMutation(ChangeFalseIsAllPay);

  const onClick = () => {
    _ChangeState(isDeliver, isAllPay);
    _unCheckBox(setCheckBox);
  };

  const _ChangeState = (isDeliver, isAllPay) => {
    if (ID != DealID) setDealID(ID);
    if (!checkBox.value1 && !checkBox.value2) return;
    if (!isAllPay && checkBox.value2) {
      _isTrue();
      return setAppChoose(2);
    }
    if (isAllPay && checkBox.value2)
      changeFalseAllPay({ variables: { ID: ID } });
    if (!isDeliver && checkBox.value1)
      changeTrueDeliver({ variables: { ID: ID } });
    if (isDeliver && checkBox.value1)
      changeFalseDeliver({ variables: { ID: ID } });
  };
  const _isTrue = () => {
    if (checkBox.value1) return setV1(!isAllPay);
    if (!checkBox.value1) return setV1(isAllPay);
  };

  const _unCheckBox = setCheckBox => {
    let obj = document.getElementsByName('checkbox1');
    for (let i = 0; i < obj.length; i++)
      if ((obj[i].checked = true)) obj[i].checked = false;
    return setCheckBox({ value1: false, value2: false });
  };

  return (
    <React.Fragment>
      {checkBoxList(checkBox, setCheckBox, onClick)}
    </React.Fragment>
  );
};

const checkBoxList = (checkBox, setCheckBox, fx) => {
  return (
    <Grid container justify='center'>
      <Box container='span'>
        배달반전
        <input
          type='checkbox'
          name='checkbox1'
          value='배달'
          onChange={() => {
            setCheckBox({ ...checkBox, value1: !checkBox.value1 });
          }}
        />
        결제반전
        <input
          type='checkbox'
          name='checkbox1'
          value='결제'
          onChange={() => {
            setCheckBox({ ...checkBox, value2: !checkBox.value2 });
          }}
        />
        <Button style={{ fontWeight: 'bold' }} onClick={() => fx()}>
          저장
        </Button>
      </Box>
    </Grid>
  );
};

export default CheckBox;
