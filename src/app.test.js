import { render as _render, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

function render(ui) {
    _render(ui)

    // Queries
    return {
        tags: document.querySelectorAll('.tags .tag'),
        getLoading: () => screen.queryByTestId('loading'),
        getGames: () => {
            const items = screen.queryAllByTestId('game-card')
            if (!items) return null;
            return items.map(item => ({
                item,
                tags: within(item).queryAllByTestId('game-tag')
            }))
        },
    }
}

// Fake timers using Jest
beforeEach(() => {
    jest.useFakeTimers()
})

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
})

test('should render', async () => {
    const { getLoading, getGames, } = render(<App />)
    expect(getLoading()).toBeInTheDocument()
    jest.runAllTimers()
    await waitForElementToBeRemoved(getLoading)
    await waitFor(getGames)
})

test('should change tags', async () => {
    const { getLoading, getGames, tags } = render(<App />)

    expect(getLoading()).toBeInTheDocument()

    jest.runAllTimers()
    await waitForElementToBeRemoved(getLoading)

    const selectedTag = tags[0].textContent;
    userEvent.click(tags[0])

    jest.runAllTimers()
    await waitForElementToBeRemoved(getLoading)

    getGames().forEach(game => {
        within(game.item).getByText(selectedTag)
    })

})