import { type ChangeEvent, type KeyboardEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { increment, decrement, setStep, undo, reset } from './counter.slice.ts'
import { incrementAsync } from './counter.thunks.ts'

const Counter = () => {
  const count = useAppSelector(state => state.counter.count)
  const step = useAppSelector(state => state.counter.step)
  const history = useAppSelector(state => state.counter.history)
  const isLoading = useAppSelector(state => state.counter.isLoading)
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
  const onUndoButtonClick = () => {
    dispatch(undo())
  }
  const onAddButtonClick = () => {
    dispatch(increment())
  }
  const onMinusButtonClick = () => {
    dispatch(decrement())
  }
  const onSetStepButtonClick = () => {
    dispatch(setStep(+currentStep))
    setCurrentStep('')
  }
  const onResetButtonClick = () => {
    dispatch(reset())
    setCurrentStep('')
  }

  return (
    <>
      <h2>{count}</h2>
      <div>
        <input
          type="number"
          placeholder="Enter step"
          value={currentStep}
          onChange={onCurrentStepInputChange}
          onKeyDown={onCurrentStepKeyDown}
        />
        <button
          type="button"
          onClick={onUndoButtonClick}
          disabled={history.length === 0}
        >
          Undo
        </button>
        {hasStepError && <div>Step must be a positive integer</div>}
      </div>
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
      <button
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(incrementAsync())}
      >
        {isLoading ? 'Loading...' : 'Async'}
      </button>
    </>
  )
}

export default Counter