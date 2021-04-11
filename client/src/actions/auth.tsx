import { AUTH } from '../constants/actionTypes';
import {signIn, signUp} from '../api/index';

export const signin = (formData: any) => async () => {
  console.log("Im here");
  try {
    console.log(formData);
    const { data } = await signIn(formData);
    //dispatch({ type: AUTH, data });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData: any, router: any) => async (dispatch: any) => {
  try {
    const { data } = await signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};