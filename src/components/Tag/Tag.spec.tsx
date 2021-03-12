import { render, screen } from '@testing-library/react';
import Tag from '.';

describe('Tag', () => {
  it('must render the text', () => {
    const tagText = Date.now().toString();

    render(<Tag text={tagText} />);
    const component = screen.getByText(tagText);
    expect(component).toBeInTheDocument();
  });
});
