import { FormStep } from './types';


export const incrementStep = (formSteps: FormStep[], activeStep: number)  => {
      let newActiveIndex = 0;
      let totalSteps = formSteps.length;
      return formSteps.map((step, index) => {
        if (step.active && index < totalSteps) {
          step.active = false;
          newActiveIndex = index + 1;
        }
        if (index === newActiveIndex) {
          step.active = true;
        }
        return step;
      })
    }