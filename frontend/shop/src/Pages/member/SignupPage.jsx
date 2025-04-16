import { useState } from 'react';
import TermsAgreement from '../../Components/member/TermsAgreement';
import SignupForm from '../../Components/member/SignupForm';
import BasicLayout from './../../layout/BasicLayout';

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [snsAgree, setSnsAgree] = useState(false); // ✅ SNS 동의 여부 상태 추가

  const handleNextStep = (snsChecked) => {
    setSnsAgree(snsChecked); // ✅ TermsAgreement에서 받은 sns 값 저장
    setStep(2);
  };

  return (
    <BasicLayout>
      <div className="signupWrap">
        {step === 1 && <TermsAgreement onNext={handleNextStep} />}
        {step === 2 && <SignupForm onBack={() => setStep(1)} snsAgree={snsAgree} />}
      </div>
    </BasicLayout>
  );
};

export default SignupPage;