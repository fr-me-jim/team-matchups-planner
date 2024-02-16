import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// interfaces
import type { RootState, AppDispatch } from 'src/app/interfaces/redux.interfaces';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector