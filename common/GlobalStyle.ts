import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        box-sizing: border-box;
    }

    body {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        background-color: ${({ theme }) => theme.color.background};

    }

    h1 {
        color: black;
        font-family: Outfit, sans-serif;
        font-weight: 700;
        font-size: 3rem;
        line-height: 1.2;
    }

    h2 {
        color: black;
        font-family: Outfit, sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.2;
    }

    h3 {
        color: black;
        font-family: Outfit, sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.2;
    }

    hr {
        margin: 32px;
        border: 1px solid #eee;
    }

    strong {
        color: ${({ theme }) => theme.color.primary};
        font-family: Outfit, sans-serif;
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 1.2;
    }

    button {
        border-radius: 200px;
        background-color: ${({ theme }) => theme.color.primary};

        font-family: Outfit, sans-serif;
        color: white;
        padding: 8px 20px;
        border: none;
        font-size: 1rem;
        font-weight: 600;
    }

    label {
        display: flex;
        align-items: center;
        gap: 32px;
        font-size: 1.25rem;
        font-weight: bold;
        color: ${({ theme }) => theme.color.primary};
        font-family: Outfit, sans-serif;

    }

    input {
        background-color: white;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 0 8px ${({ theme }) => theme.color.section};
        border: none;
        outline: none;
        font-size: 1rem;
        min-width: 400px;
    }
`;

export default GlobalStyle;
