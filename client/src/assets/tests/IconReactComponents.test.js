import React from 'react';
import { render, screen } from '@testing-library/react';
import { CheckIconComponent } from '../CheckIconComponent';
import { CloseIconComponent } from '../CloseIconComponent';
import { DeleteIconComponent } from '../DeleteIconComponent';
import { EditIconComponent } from '../EditIconComponent';

describe('Svg React Component', () => {
  it('should contain an svg title', () => {
    render(<CheckIconComponent />);
    expect(screen.getByText(/Check/i)).toBeInTheDocument();
  });

  it('should contain an svg title', () => {
    render(<CloseIconComponent />);
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });

  it('should contain an svg title', () => {
    render(<DeleteIconComponent />);
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
  });

  it('should contain an svg title', () => {
    render(<EditIconComponent />);
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  });
});
