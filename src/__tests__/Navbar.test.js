import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Page from "../components/Page";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "../components/context/Theme";
import {MainContainer} from "../components/layout/PageElements";


let getByTestId;

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

beforeEach(() => {
    const component = render(<Page/>);
    getByTestId = component.getByTestId;
})

it('renders logo', () => {
    const logo = getByTestId('logo');
    expect(logo).toBeTruthy();
});


it('renders navbar links', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Astronauts')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Locations')).toBeInTheDocument();
    expect(screen.getByText('Spacecrafts')).toBeInTheDocument();
});

test('click theme change button then shows dropdown', async () => {
    const themeButton = getByTestId('themeChangerButton');
    fireEvent.click(themeButton);
    const resultDiv = await (() => getByTestId('themeChangeDiv'));
    expect(resultDiv).toBeTruthy();
})

test('Home Link has title, route', () => {
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Home')).toHaveAttribute('title', 'Home');
})

test('Astronaut Link has title, route', () => {
    expect(screen.getByText('Astronauts')).toHaveAttribute('href', '/astronauts');
    expect(screen.getByText('Astronauts')).toHaveAttribute('title', 'Astronauts');
})

test('News Link has title, route', () => {
    expect(screen.getByText('News')).toHaveAttribute('href', '/news');
    expect(screen.getByText('News')).toHaveAttribute('title', 'News');
})

test('Gallery Link has title, route', () => {
    expect(screen.getByText('Gallery')).toHaveAttribute('href', '/gallery');
    expect(screen.getByText('Gallery')).toHaveAttribute('title', 'Gallery');
})

test('Spacecraft Link has title, route', () => {
    expect(screen.getByText('Spacecrafts')).toHaveAttribute('href', '/spacecrafts');
    expect(screen.getByText('Spacecrafts')).toHaveAttribute('title', 'Spacecrafts');
})

test('locations Link has title, route', () => {
    expect(screen.getByText('Locations')).toHaveAttribute('href', '/locations');
    expect(screen.getByText('Locations')).toHaveAttribute('title', 'Locations');
})

test('clicking a theme change colors', async () => {
    const renderComponent = ({theme}) =>
        render(
            <ThemeProvider theme={theme}>
                <MainContainer/>
            </ThemeProvider>
        );
    const {getByTestId} = renderComponent({theme: lightTheme});
    const resultDiv = await (() => getByTestId('main-container'));
    expect(resultDiv).toBeTruthy();
});
