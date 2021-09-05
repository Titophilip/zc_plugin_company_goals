import React, { useState } from 'react';

import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { useDispatch } from 'react-redux';

import { saveGoal } from '../../redux/NewGoalSlice';

import {
  Goal,
  Form,
  Input,
  Button,
  Title,
  Info,
  Icon,
  Container,
  Box,
  CloseButton,
  CreateButton,
  AccessButton,
} from './GoalForm.style';
import img from './icon/active.png';
import lock from './icon/default.png';
import people from './icon/Group 2684.png';

const GoalForm = React.forwardRef((props) => {
  // eslint-disable-next-line react/prop-types
  const { handleClose } = props;
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.id]: e.target.value,
    }));
  };

  const onCreateGoal = (e) => {
    e.preventDefault();
    
    const isValid = typeof user === 'object' && user !== null;
    if (isValid) {
      const keys = Object.keys(user);
      const filteredUser = keys.reduce((filter, key) => {
        if (user[key]) {
          return { ...filter, [key]: user[key] };
        }
        return filter;
      }, {});
      dispatch(saveGoal(filteredUser));
    }
  };

  return (
    <Goal>
      <CloseButton type="button" onClick={handleClose}>
        x{' '}
      </CloseButton>{' '}
      <Form action="">
        <Container>
          {' '}
          <Icon>
            <img
              src={img}
              alt="icon"
              width="20px"
              height="20px"
              style={{
                paddingTop: '0.6rem',
              }}
            />{' '}
          </Icon>{' '}
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}{' '}
            <label htmlFor="goal-name">
              <Title titleColor="#393939"> Goal Name </Title>
              <Info textColor="#999999">
                Goals are high level containers that can be broken down into smaller target.Learn more{' '}
              </Info>{' '}
              <Input type="text" id="goalName" onChange={(e) => onInputChange(e)} />
            </label>{' '}
            <Box>
              <Button type="Button" buttonPadding="0.625rem 0.875rem" borderRadius="3px">
                Ok{' '}
                <CheckOutlinedIcon
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '12px',
                  }}
                />{' '}
              </Button>{' '}
              <Info textColor="#00b87c">
                press{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  ENTER{' '}
                </span>{' '}
              </Info>{' '}
            </Box>{' '}
          </div>{' '}
        </Container>{' '}
        <Container>
          <Icon>
            <img
              src={img}
              alt="icon"
              width="20px"
              height="20px"
              style={{
                paddingTop: '0.6rem',
              }}
            />{' '}
          </Icon>{' '}
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}{' '}
            <label htmlFor="owner">
              <div>
                <Title titleColor="#393939"> Owner </Title>{' '}
                <Info textColor="#999999"> This is optional, who will take responsibility for the goals </Info>{' '}
              </div>{' '}
              <Input type="text" id="owner" placeholder="Mark Essien" onChange={(e) => onInputChange(e)} />
            </label>
            <Box>
              <Button type="Button" buttonPadding="0.625rem 0.875rem" borderRadius="3px">
                Ok{' '}
                <CheckOutlinedIcon
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '12px',
                  }}
                />{' '}
              </Button>{' '}
              <Info textColor="#00b87c">
                press{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  ENTER{' '}
                </span>{' '}
              </Info>{' '}
            </Box>{' '}
          </div>{' '}
        </Container>{' '}
        <Container>
          <Icon>
            <img
              src={img}
              alt="icon"
              width="20px"
              height="20px"
              style={{
                paddingTop: '0.6rem',
              }}
            />{' '}
          </Icon>{' '}
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}{' '}
            <label htmlFor="goal-access">
              <div>
                <Title titleColor="#393939"> Who has access to this goal ? </Title>{' '}
                <div
                  style={{
                    marginTop: '2rem',
                  }}
                >
                  <AccessButton borderDetails="1px solid #00b87c">
                    <img src={people} alt="" />
                    <Title titleColor="#00b87c"> Zuri & apos; s workspace </Title>{' '}
                  </AccessButton>{' '}
                  <AccessButton borderDetails="1px solid #999999">
                    <img src={lock} alt="" />
                    <Title> Private </Title>{' '}
                  </AccessButton>{' '}
                </div>{' '}
              </div>{' '}
              <Input type="text" id="goalAccess" onChange={(e) => onInputChange(e)} />
            </label>
            <Box>
              <Button type="Button" buttonPadding="0.625rem 0.875rem" borderRadius="3px">
                Ok{' '}
                <CheckOutlinedIcon
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '12px',
                  }}
                />{' '}
              </Button>{' '}
              <Info textColor="#00b87c">
                press{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  ENTER{' '}
                </span>{' '}
              </Info>{' '}
            </Box>{' '}
          </div>{' '}
        </Container>{' '}
        <Container>
          <Icon>
            <img
              src={img}
              alt="icon"
              width="20px"
              height="20px"
              style={{
                paddingTop: '0.6rem',
              }}
            />{' '}
          </Icon>{' '}
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}{' '}
            <label htmlFor="date">
              <div>
                <Title titleColor="#393939"> Date for goal completion </Title>{' '}
                <Info textColor="#999999"> This is optional. </Info>{' '}
              </div>{' '}
              <Input
                type="text"
                id="date"
                onFocus={(e) => {
                  e.currentTarget.type = 'date';
                }}
                // eslint-disable-next-line no-return-assign
                onBlur={(e) => (e.currentTarget.type = 'text')}
                placeholder="End Date"
                onChange={(e) => onInputChange(e)}
              />
            </label>
            <Box>
              <Button type="Button" buttonPadding="0.625rem 0.875rem" borderRadius="3px">
                Ok{' '}
                <CheckOutlinedIcon
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '12px',
                  }}
                />{' '}
              </Button>{' '}
              <Info textColor="#00b87c">
                press{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  ENTER{' '}
                </span>{' '}
              </Info>{' '}
            </Box>{' '}
          </div>{' '}
        </Container>{' '}
        <Container>
          <Icon>
            <img
              src={img}
              alt="icon"
              width="20px"
              height="20px"
              style={{
                paddingTop: '0.6rem',
              }}
            />{' '}
          </Icon>{' '}
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}{' '}
            <label htmlFor="category">
              <div>
                <Title titleColor="#393939"> Category </Title>{' '}
                <Info textColor="#999999">
                  This is optional.A categorization that will help in sorting from multiples{' '}
                </Info>{' '}
              </div>{' '}
              <Input type="text" id="category" placeholder="Product Design" onChange={(e) => onInputChange(e)} />
            </label>
            <Box>
              <Button type="Button" buttonPadding="0.625rem 0.875rem" borderRadius="3px">
                Ok{' '}
                <CheckOutlinedIcon
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '12px',
                  }}
                />{' '}
              </Button>{' '}
              <Info textColor="#00b87c">
                press{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  ENTER{' '}
                </span>{' '}
              </Info>{' '}
            </Box>{' '}
          </div>{' '}
        </Container>{' '}
        <Container>
          {' '}
          <Icon>
            <img
              src={img}
              alt="icon"
              width="20px"
              height="20px"
              style={{
                paddingTop: '0.6rem',
              }}
            />{' '}
          </Icon>{' '}
          <div>
            {' '}
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}{' '}
            <label htmlFor="description">
              <div>
                <Title titleColor="#393939"> Description </Title>{' '}
                <Info textColor="#999999">
                  This is optional.A short explanation on why the goal is set and how it can be achieved{' '}
                </Info>{' '}
              </div>{' '}
              <Input type="text" id="description" onChange={(e) => onInputChange(e)} />
            </label>
            <Box>
              <Button type="Button" buttonPadding="0.625rem 0.875rem" borderRadius="3px">
                Ok{' '}
                <CheckOutlinedIcon
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '12px',
                  }}
                />{' '}
              </Button>{' '}
              <Info textColor="#00b87c">
                press{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  ENTER{' '}
                </span>{' '}
              </Info>{' '}
            </Box>{' '}
          </div>{' '}
        </Container>{' '}
        <CreateButton>
          <Button type="submit" buttonPadding="1rem 4rem" borderRadius="6px" onClick={(e) => onCreateGoal(e)}>
            Create Goal{' '}
          </Button>{' '}
        </CreateButton>{' '}
      </Form>{' '}
    </Goal>
  );
});

export default GoalForm;
