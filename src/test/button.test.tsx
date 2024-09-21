import { test, expect, vi } from 'vitest';
import { screen, render, waitFor } from '@testing-library/react';
import { Button } from '@/components/ui/button';
import user from "@testing-library/user-event";

test('Button renders correctly', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toMatchSnapshot();
});

test('Button will trigger onClick event', async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick} >Hi</Button>);

    const button = screen.getByRole("button", { name: /Hi/i });

    await user.click(button);

    await waitFor(() => {
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});