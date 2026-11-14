import { type ChangeEvent, type KeyboardEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { incrementAC, decrementAC, setStepAC, resetAC } from './counter.actions.ts'

const Counter = () => {
  const count = useAppSelector(state => state.count)
  const step = useAppSelector(state => state.step)
  const dispatch = useAppDispatch()

  const [currentStep, setCurrentStep] = useState('')

  const isValidStep =
    currentStep.trim() !== '' &&
    Number.isSafeInteger(+currentStep) &&
    +currentStep > 0

  const hasStepError = !isValidStep && currentStep.trim() !== ''

  const onCurrentStepInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStep(event.currentTarget.value)
  }
  const onCurrentStepKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && isValidStep) {
      onSetStepButtonClick()
    }
  }
  const onAddButtonClick = () => {
    dispatch(incrementAC())
  }
  const onMinusButtonClick = () => {
    dispatch(decrementAC())
  }
  const onSetStepButtonClick = () => {
    dispatch(setStepAC(+currentStep))
    setCurrentStep('')
  }
  const onResetButtonClick = () => {
    dispatch(resetAC())
    setCurrentStep('')
  }

  return (
    <>
      <h1>{count}</h1>
      <input
        type="number"
        placeholder="Enter step"
        value={currentStep}
        onChange={onCurrentStepInputChange}
        onKeyDown={onCurrentStepKeyDown}
      />
      {hasStepError && <div>Step must be a positive integer</div>}
      <div>
        <button
          type="button"
          onClick={onAddButtonClick}
        >
          Add {step}
        </button>
        <button
          type="button"
          onClick={onMinusButtonClick}
        >
          Minus {step}
        </button>
        <button
          type="button"
          disabled={!isValidStep}
          onClick={onSetStepButtonClick}
        >
          Set step: {currentStep}
        </button>
        <button
          type="button"
          onClick={onResetButtonClick}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default Counter