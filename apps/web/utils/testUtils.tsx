import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
export { customRender as render };
