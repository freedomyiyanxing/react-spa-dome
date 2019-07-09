import React from 'react';
import IntlTelInput from '../../common/react-intl-tel-input/IntlTelInput';

import classes from './home.less';

const Home = () => {
  const onPhoneNumberChange = (isValid, newNumber, selectedCountryData, fullNumber, aa) => {
    console.log(isValid, newNumber, selectedCountryData, fullNumber, aa);
  };

  return (
    <div className={classes.homeWrapper}>
      <h2>this is home page</h2>
      <p>检测热更新 哈哈哈111</p>
      <p>在检测热更新</p>
      <span>auto: freedom.yi</span>
      <IntlTelInput
        containerClassName="intl-tel-input"
        inputClassName="form-control"
        format
        defaultCountry="cn"
        value="+86 151 1611 2861"
        onPhoneNumberChange={onPhoneNumberChange}
      />
    </div>
  );
};

export default Home;
