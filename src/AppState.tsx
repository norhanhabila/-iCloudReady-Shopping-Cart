import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

export type Product = { product: string; quantity: number };

type AppState = { cart: Array<Product> };
const defaultAppState: AppState = {
  cart: [],
};

const AppStateContext = createContext<AppState>(defaultAppState);
const AppStateSetterContext = createContext<
  (newState: Partial<AppState>) => void
>(() => {});

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [appState, _setAppState] = useState(defaultAppState);

  const setAppState = useCallback((newState: Partial<AppState>) => {
    _setAppState((oldState) => ({ ...oldState, ...newState }));
  }, []);

  return (
    <AppStateContext.Provider value={appState}>
      <AppStateSetterContext.Provider value={setAppState}>
        {children}
      </AppStateSetterContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const appState = useContext(AppStateContext);
  const setAppState = useContext(AppStateSetterContext);

  return [appState, setAppState] as const;
};
